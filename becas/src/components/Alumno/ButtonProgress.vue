<template>
  <div class="q-pa-md-container">
    <q-space />
    <div class="q-pa-md col-md-4">
      <q-btn color="secondary" text-color="black" label="Paso 1" @click="onClick" />
    </div>
    <q-space />
    <div class="q-pa-md col-md-4">
      <q-btn color="secondary" text-color="black" label="Paso 2" @click="onClick" />
    </div>
    <q-space />
    <div class="q-pa-md">
      <q-btn color="secondary" text-color="black" label="Paso 3" @click="onClick" />
    </div>
    <q-space />
  </div>
</template>

<script>
export default {
  setup () {


    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
