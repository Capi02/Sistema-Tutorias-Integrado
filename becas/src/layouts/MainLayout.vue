<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="contlogo">
        <div class="toolbar-left">
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        </div>
          <img class="contlogo" src="public/img/logouttn.png" />
        <div class="toolbar-right">
          <q-btn-dropdown class="login" v-if="isLogin" icon="account_circle" :label="user.correo" color="primary">
            <q-list>
              <q-item clickable v-close-popup @click="logout">
                <q-item-section>
                  <q-item-label>Log out</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn v-else color="white" flat type="a" :to="{name : 'index'}" icon="account_circle" label="login" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      class="menu-container"
      v-model="leftDrawerOpen"
      side="left"
      bordered
    >
      <div class="menu">
        <div class="menu-container">
          <div class="bottoms">
            <q-btn
              color="secondary"
              class="buttoms"
              text-color="black"
              label="Inicio"
              @click="onClick"
              to="/menu"
            />
            <q-btn
              color="secondary"
              class="buttoms"
              text-color="black"
              label="Aprobados"
              @click="onClick"
              to="/aproved"
            />
            <q-btn
              color="secondary"
              class="buttoms"
              text-color="black"
              label="Rechazadas"
              @click="onClick"
              to="/rejected"
            />
            <q-btn
              color="secondary"
              class="buttoms"
              text-color="black"
              label="En proceso"
              @click="onClick"
              to="/process"
            />
          </div>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent,ref } from "vue";
import { useQuasar } from "quasar"
import { useUserStore } from "src/stores/user-store";
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const router= useRouter();
    const userStore = useUserStore();
    const leftDrawerOpen = ref(false);
    const $q = useQuasar();
    const isLogin = ref();
    const user = userStore.getUser;
    return {
      $q,
      router,
      userStore,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  methods:{
    logout(){
      this.$q.sessionStorage.remove("user");
      this.userStore.userLogout();
      this.router.push({ name: "index"});
    }
  },
  computed: {
    isLogin() {
      if (this.user) {
        return true;
      }else {
        return false
      }
    },
    user(){
      if (!this.userStore.getUser && this.$q.sessionStorage.getItem("user")) {
        this.userStore.setUser(this.$q.sessionStorage.getItem("user"));
      }
      return this.userStore.getUser;
    },
  },
})
</script>

<style>
.contlogo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  padding-left: 20px;
  padding-right: 20px;
}

.menu-container {
  background: #b5b5b5;
}
.buttoms {
  width: 100%;
  height: 52px;
  margin-top: 20px;
}

.q-pa-md-container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
}

.q-pa-md {
  margin-bottom: 10px;
  align-self: baseline;
}

.active-button {
  border: 2px solid black;
}
.toolbar-left {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Alineación hacia la izquierda */
  flex: 1; /* Expande este contenedor para ocupar el espacio restante */
}

.toolbar-right {
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Alineación hacia la derecha */
  flex: 1; /* Expande este contenedor para ocupar el espacio restante */
}
</style>
