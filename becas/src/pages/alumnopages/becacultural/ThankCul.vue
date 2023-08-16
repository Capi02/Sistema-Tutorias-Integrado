<template>
  <q-page :style-fn="myTweak" padding>
    <p class="title">Beca Cultural</p>
    <q-card-section class="ter">
      Terminada
    </q-card-section>
    <CompleteBar></CompleteBar>
    <q-space />
    <q-card-section class="ter">
      Haz finalizado tu solicitud
    </q-card-section>
  </q-page>
</template>

<script>
import { useRouter } from "vue-router";
import CompleteBar from "src/components/Alumno/CompleteBar.vue";
export default {
  components:{
    CompleteBar,
  },
  setup () {


    return {}
  }
}
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

.ter{
  width: 100%;
  height: 100%;
  background: #D9D9D9;
  border-radius: 8px;
}
</style>
