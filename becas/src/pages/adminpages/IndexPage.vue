<template>
  <q-form
    @submit="onSubmit"
    @reset="onReset"
    class="q-gutter-md"
  >

  <div class="my-card">
    <div class="back">
      <p class="bien">Bienvenido</p>
      <q-card-section>
        <div class="q-pa-md">
          <q-card-section class="rectanglei">
            <div class="q-ps-xs">
              <p>Correo</p>
              <q-input
                class="input"
                outlined
                square
                filled
                v-model="correo"
                 type="email"
                :dense="dense"
              />
            </div>
            <div class="q-ps-xs">
              <p>Contraseña</p>
              <q-input v-model="contrasena" filled :type="isPwd ? 'password' : 'text'">
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
            </div>
            <div class="">
              <q-btn
                class="buttom"
                type="submit"
              >
                <p class="texto">Iniciar Session</p>
              </q-btn>
            </div>
          </q-card-section>
        </div>
      </q-card-section>
    </div>
  </div>
  </q-form>
</template>

<script>
import { defineComponent, ref } from "vue";
import { api } from "src/boot/axios";
import { SessionStorage } from "quasar";
import { useUserStore } from "src/stores/user-store";
import { useRouter } from "vue-router";
import { route } from "quasar/wrappers";

export default defineComponent({
  name: "IndexPage",
  components: {},

  setup() {
    const userStore = useUserStore();
    const router = useRouter();
    const correo = ref();
    const contrasena = ref();

    const idusuario = 2;
    // Dentro de la función setup()
    function onSubmit() {

      // Suponiendo que tienes un ID de usuario asociado con el inicio de sesión del usuario

      api.post('http://127.0.0.1:3000/api/login', {
        correo: correo.value,
        contrasena: contrasena.value,
      }).then((res) => {
        if (res.data.msg) {
          alert(res.data.msg);
        } else {
          if (res.data.contrasenaCorrecta) { // Cambia esto a como devuelves la contraseña correcta desde el servidor
            // Autenticar al usuario y redirigir a la página de inicio
            SessionStorage.set("usuario", res.data);
            userStore.setUser(res.data);
            router.push({ name: "index" });
          } else {
            alert("Usuario y/o Contraseña Incorrecta");
          }
        }
      }).catch((err) => {
        console.error(err);
      });
    }
      function onReset() {
        correo.value="";
        contrasena.value="";
      }
    return {
      isPwd: ref(true),
      correo,
      contrasena,
      userStore,
      router,
      onSubmit,
      onReset
    }
  },
  beforeMount (){
      if (SessionStorage.getItem("usuario")) {
        this.userStore.setUser(SessionStorage.getItem('usuario'));
        this.router.push({name: "index"});
      }
    }
});

</script>

<style>
.my-card {
  display: flex;
  justify-content: center;
}

.bien {
  margin-top: 20px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 20px;
  /* or 50% */
  color: #000000;
}
.texto {
  color: #fff;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
}

.rectanglei {
  background: #fff;
  width: 430px;
  height: 380px;
}
.rectanglei {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  padding-top: 35px;
}

.back {
  margin: auto;
  background: #d9d9d9;
  text-align: center;
  padding: 30px;
}

.buttom {
  margin-top: 10%;
  justify-content: center;
  background-color: black;
  flex-direction: row;
  width: 131px;
  height: 40px;
}

</style>
