<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="custom-header">
      <q-toolbar class="custom-toolbar">
        <div class="toolbar-left">
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        </div>
        <img class="contlogo" src="public/img/logouttn.png" />
        <div class="toolbar-right">
          <q-btn dense flat round icon="house" @click="onClick" />
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
              label="Becas"
              @click="onClick"
              to="/alumno"
            />
            <q-btn
              color="secondary"
              class="buttoms"
              text-color="black"
              label="Formatos"
              @click="onClick"
              to="/alumno/formatos"
            />
            <q-btn
              color="secondary"
              class="buttoms"
              text-color="black"
              label="Mi Beca"
              @click="onClick"
              to="/alumno/mibeca"
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
import { ref } from "vue";

const id = sessionStorage.getItem("key");
fetch(`${window.location.origin}/api/student/${id}`)
.then(res => res.json())
.then(results => console.log(results))

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>

<style>
.custom-header {
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}

.custom-toolbar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 40px;
  background-color: #1ab192;
}

.custom-logo {
  height: 125px;
  width: auto;
}

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
