<template>
  <q-page class="q-pa-md container" padding>
    <p class="title">Beca Academica</p>
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
        <q-file filled bottom-slots class="col-5 q-pt-lg" v-model="credencial" name="pdfFiles" label="Credencial, ambos lados" counter max-files="12" accept="application/pdf">
          <q-btn round dense flat icon="add" @click.stop.prevent />
        </q-file>
        <q-space />
        <q-file filled bottom-slots class="col-5 q-pt-lg" v-model="boleta" name="pdfFiles" label="Boleta de calificaciones" counter max-files="12" accept="application/pdf">
          <q-btn round dense flat icon="add" @click.stop.prevent />
        </q-file>
        <q-space />
        <q-file filled bottom-slots class="col-5 q-pt-lg" v-model="comprobante" name="pdfFiles" label="Comprobante de ingresos" counter max-files="12" accept="application/pdf">
          <q-btn round dense flat icon="add" @click.stop.prevent />
        </q-file>
        <q-space />
        <q-file filled bottom-slots class="col-5 q-pt-lg" v-model="compromiso" name="pdfFiles" label="Carta compromiso y aceptacion de beca" counter max-files="12" accept="application/pdf">
          <q-btn round dense flat icon="add" @click.stop.prevent />
        </q-file>
        <q-space />
        <q-file filled bottom-slots class="col-5 q-pt-lg" v-model="conducta" name="pdfFiles" label="Carta buena conducta" counter max-files="12" accept="application/pdf">
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
    const credencial = ref(null);
    const boleta = ref(null);
    const comprobante = ref(null);
    const compromiso = ref(null);
    const conducta = ref(null);

    const router = useRouter();

    // Función onSubmit para enviar los archivos al servidor
    async function onSubmit() {
      const formData = new FormData();
      formData.append('credencial', credencial.value);
      formData.append('boleta', boleta.value);
      formData.append('comprobante', comprobante.value);
      formData.append('compromiso', compromiso.value);
      formData.append('conducta', conducta.value);

      try {
        await axios.post('http://127.0.0.1:3000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
        router.push("/alumno/academica/thk"),
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
      credencial.value = null;
      boleta.value = null;
      comprobante.value = null;
      compromiso.value = null;
      conducta.value = null;
    }
    return {
      onSubmit,
      onReset,
      accept,
      credencial,
      boleta,
      comprobante,
      compromiso,
      conducta,
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
