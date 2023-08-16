<template>
  <q-page>
    <div class="q-pa-md">
      <div class="titulo">Formatos</div>
      <button-progress></button-progress>
      <TresProgress></TresProgress>

      <div class="q-gutter-md container">
        <q-form @submit="onSubmit" @reset="onReset">
          <div class="q-pt-lg">
            <q-card class="q-pa-md">
              <q-card-section>
                <div class="q-pa-md">
                  <p class="q-mb-sm">Algunos formatos no aplican para todas las becas</p>
                  <div class="q-mb-sm">
                    <strong>Carta: </strong>
                    <a href="https://uttn-my.sharepoint.com/:w:/g/personal/servicios_estudiantiles_uttn_mx/EWhUgeG7iohFt1dHD95hY2sBq2UU-SF04dtwRDtar3LtYQ?e=OzXcKL" target="_blank">https://uttn-my.sharepoint.com/:w:/g/personal/servicios_estudiantiles_uttn_mx/EWhUgeG7iohFt1dHD95hY2sBq2UU-SF04dtwRDtar3LtYQ?e=OzXcKL</a>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Carta Compromiso y Aceptacion de Beca: </strong>
                    <a href="https://uttn-my.sharepoint.com/:w:/g/personal/servicios_estudiantiles_uttn_mx/ERX8ifIqa9RBsWhxHU0kGe0BBuYKlDcngca8G4qdEr1mVQ?e=C4kI8U" target="_blank">https://uttn-my.sharepoint.com/:w:/g/personal/servicios_estudiantiles_uttn_mx/ERX8ifIqa9RBsWhxHU0kGe0BBuYKlDcngca8G4qdEr1mVQ?e=C4kI8U</a>
                  </div>

                </div>
              </q-card-section>
            </q-card>
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  setup () {


    return {}
  }
}
</script>

<style lang="scss" scoped>
  .titulo{
    color: #1ab192;
    text-transform: uppercase;
    line-height: 40px;
    font-size: 1.9em;
    text-align: center;
}
</style>
