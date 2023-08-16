<template>
  <div class="q-pa-md">
    <q-linear-progress rounded size="20px" :value="progress" color="primary" class="q-mt-sm" />
  </div>
</template>

<script>
export default {
  setup () {
    return {
      progress: 0.25,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
