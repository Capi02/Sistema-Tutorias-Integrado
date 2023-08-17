<template>
  <q-page class="q-pa-md container" padding>
    <p class="title">Beca Económica</p>
    <button-progress></button-progress>
    <tres-progress></tres-progress>
    <q-space />
    <p>¡Adjuntar solo archivos PDF!</p>
    <q-space />
    <div class="q-pa-xs q-pt-lg">
      <q-card class="my-card q-card-bordered">
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
          enctype="multipart/form-data"
        >
        <div class="row" padding>
        <q-file filled bottom-slots class="col-5 q-pt-lg" v-model="compromiso" name="pdfFiles" label="Carta compromiso y aceptacion de beca" counter max-files="12" accept="application/pdf">
          <q-btn round dense flat icon="add" @click.stop.prevent />
        </q-file>
        <q-space />
        <q-file filled bottom-slots class="col-5 q-pt-lg" v-model="escrito" name="pdfFiles" label="Escrito de petición de BECA en puño y letra del interesado hacia la universidad" counter max-files="12" accept="application/pdf">
          <q-btn round dense flat icon="add" @click.stop.prevent />
        </q-file>
        <q-space />
        <q-toggle
          v-model="accept"
          label="Ya revise que las respuestas sean correctas"
        />
        <div class="col-12 q-pt-lg">
            <q-btn label="Continuar" type="submit" color="primary"/>
          </div>
          <q-space />
        </div>
      </q-form>
      </q-card>
    </div>
  </q-page>

</template>

<script>
import { defineComponent, ref } from "vue";
import ButtonProgress from "src/components/Alumno/ButtonProgress.vue";
import TresProgress from 'src/components/Alumno/TresProgress.vue';
import axios from "axios";
import { useRouter } from "vue-router";


export default {
  components: {
    ButtonProgress,
    TresProgress,
  },
  setup() {
    const accept = ref(false);
    const compromiso = ref(null);
    const escrito = ref(null);

    const router = useRouter();

    // Función onSubmit para enviar los archivos al servidor
    async function onSubmit() {
      const formData = new FormData();
      formData.append('compromiso', compromiso.value);
      formData.append('escrito', escrito.value);

      try {
        await axios.post('http://127.0.0.1:3000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
        router.push("/alumno/economica/thk"),
        );
        // Aquí puedes agregar la lógica que necesites después de enviar los archivos
        // Por ejemplo, mostrar un mensaje de éxito, redireccionar a otra página, etc.
        console.log('Archivos enviados correctamente',formData);
      } catch (error) {
        console.error('Error al enviar los archivos:', error);
        // Aquí puedes manejar el error, mostrar un mensaje de error, etc.
      }
    }

    function onReset() {
      compromiso.value = null;
      escrito.value = null;
    }
    return {
      onSubmit,
      onReset,
      accept,
      compromiso,
      escrito,
    };
  },

};
</script>

<style lang="scss" scoped>
.title{
  display: flex;
  width: 171px;
  height: 29px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
}
</style>
