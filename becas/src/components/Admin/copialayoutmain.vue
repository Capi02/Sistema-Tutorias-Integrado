<template>
  <q-layout view="lHh Lpr lFf" class="is">
    <q-header elevated class="col-lg-12 col-md-12 col-xs-12 header">
      <q-toolbar>
        <q-toolbar-title class="contlogo">
          <div class="contlogo">
            <img src="public/img/logouttn.png" alt="" srcset="" />
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container class="main">
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},
});
</script>
<style>
@media screen and (min-width: 500px) {
  .contlogo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .contlogo img {
    width: 100%;
    height: 100%;
  }

  .header{
    height: 100px;
    position: fixed;
    position: fixed;

  }
  .main{
    width: 100%;
    height: auto;
  }
  .is{
    align-items: center;
    display: flex;
  }
}
</style>
