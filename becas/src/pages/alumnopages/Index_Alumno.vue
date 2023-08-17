<template>
 <div class="q-pa-md row items-start q-gutter-md">
  <q-card class="my-card" flat bordered :class="{ 'hidden-card': formDataAca && formDataAca.disponible !== 'Si', 'hidden-card-yes': formDataAca && formDataAca.disponible !== 'No' }">
      <q-img
        src="public/img/academic.jpg"
      />
      <q-card-section>

        <div class="text-h5 q-mt-sm q-mb-xs">{{ formDataAca && formDataAca.beca }}</div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="primary" label="Solicitar" @click="onClick" to="/alumno/academica" />
      </q-card-actions>
    </q-card>
    <q-card class="my-card" flat bordered :class="{ 'hidden-card': formDataCul && formDataCul.disponible !== 'Si', 'hidden-card-yes': formDataCul && formDataCul.disponible !== 'No' }">
      <q-img
        src="public/img/cultural.jpg"
      />
      <q-card-section>

        <div class="text-h5 q-mt-sm q-mb-xs">{{ formDataCul && formDataCul.beca }}</div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="primary" label="Solicitar" @click="onClick" to="/alumno/cultural"/>
      </q-card-actions>
    </q-card>
    <q-card class="my-card" flat bordered :class="{ 'hidden-card': formDataDep && formDataDep.disponible !== 'Si', 'hidden-card-yes': formDataDep && formDataDep.disponible !== 'No' }">
      <q-img
        src="public/img/deportiva.jpg"
      />
      <q-card-section>

        <div class="text-h5 q-mt-sm q-mb-xs">{{ formDataDep && formDataDep.beca }}</div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="primary" label="Solicitar" @click="onClick" to="/alumno/deportiva"/>
      </q-card-actions>
    </q-card>
    <q-card class="my-card" flat bordered :class="{ 'hidden-card': formDataEco && formDataEco.disponible !== 'Si', 'hidden-card-yes': formDataEco && formDataEco.disponible !== 'No' }">
      <q-img
        src="public/img/economica.jpg"
      />
      <q-card-section>

        <div class="text-h5 q-mt-sm q-mb-xs">{{ formDataEco && formDataEco.beca }}</div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="primary" label="Solicitar" @click="onClick" to="/alumno/economica"/>
      </q-card-actions>
    </q-card>
    <q-card class="my-card" flat bordered :class="{ 'hidden-card': formDataExc && formDataExc.disponible !== 'Si', 'hidden-card-yes': formDataExc && formDataExc.disponible !== 'No' }">
      <q-img
        src="public/img/excelenciaa.jpg"
      />
      <q-card-section>

        <div class="text-h5 q-mt-sm q-mb-xs">{{ formDataExc && formDataExc.beca }}</div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="primary" label="Solicitar" @click="onClick" to="/alumno/excelencia"/>
      </q-card-actions>
    </q-card>
    <q-card class="my-card" flat bordered :class="{ 'hidden-card': formDataInc && formDataInc.disponible !== 'Si', 'hidden-card-yes': formDataInc && formDataInc.disponible !== 'No' }">
      <q-img
        src="public/img/inclusion.jpg"
      />
      <q-card-section>

        <div class="text-h5 q-mt-sm q-mb-xs">{{ formDataInc && formDataInc.beca }}</div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="primary" label="Solicitar" @click="onClick" to="/alumno/inclusion"/>
      </q-card-actions>
    </q-card>
    <q-card class="my-card" flat bordered :class="{ 'hidden-card': formDataPos && formDataPos.disponible !== 'Si', 'hidden-card-yes': formDataPos && formDataPos.disponible !== 'No' }">
      <q-img
        src="public/img/postgrado.jpg"
      />
      <q-card-section>

        <div class="text-h5 q-mt-sm q-mb-xs">{{ formDataPos && formDataPos.beca }}</div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="primary" label="Solicitar" @click="onClick" to="/alumno/postgrado"/>
      </q-card-actions>
    </q-card>
    <q-card class="my-card" flat bordered :class="{ 'hidden-card': formDataRef && formDataRef.disponible !== 'Si', 'hidden-card-yes': formDataRef && formDataRef.disponible !== 'No' }">
      <q-img
        src="public/img/referencia.jpg"
      />
      <q-card-section>

        <div class="text-h5 q-mt-sm q-mb-xs">{{ formDataRef && formDataRef.beca }}</div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="primary" label="Solicitar" @click="onClick" to="/alumno/referencia"/>
      </q-card-actions>
    </q-card>
    <q-card class="my-card" flat bordered :class="{ 'hidden-card': formDataRei && formDataRei.disponible !== 'Si', 'hidden-card-yes': formDataRei && formDataRei.disponible !== 'No' }">
      <q-img
        src="public/img/reincorporacion.jpg"
      />
      <q-card-section>

        <div class="text-h5 q-mt-sm q-mb-xs">{{ formDataRei && formDataRei.beca }}</div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="primary" label="Solicitar" @click="onClick" to="/alumno/reincorporacion"/>
      </q-card-actions>
    </q-card>
    <q-card class="my-card" flat bordered :class="{ 'hidden-card': formDataTra && formDataTra.disponible !== 'Si', 'hidden-card-yes': formDataTra && formDataTra.disponible !== 'No' }">
      <q-img
        src="public/img/transporte.jpg"
      />
      <q-card-section>

        <div class="text-h5 q-mt-sm q-mb-xs">{{ formDataTra && formDataTra.beca }}</div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="primary" label="Solicitar" @click="onClick" to="/alumno/transporte"/>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios';
import HabilitarPage from '../adminpages/HabilitarPage.vue';
export default {
  setup () {

    const formDataAca = ref(null);
    const formDataCul = ref(null);
    const formDataDep = ref(null);
    const formDataEco = ref(null);
    const formDataExc = ref(null);
    const formDataInc = ref(null);
    const formDataPos = ref(null);
    const formDataRef = ref(null);
    const formDataRei = ref(null);
    const formDataTra = ref(null);

    onMounted(() => {
      // Cargar los datos de las becas
      axios.get('http://127.0.0.1:3000/api/becas/1')
        .then(response => {
          formDataAca.value = response.data;

        })
        .catch(error => {
          console.error('Error al obtener las becas:', error);
        });
      axios.get('http://127.0.0.1:3000/api/becas/2')
        .then(response => {
          formDataCul.value = response.data;

        })
        .catch(error => {
          console.error('Error al obtener las becas:', error);
        });

      axios.get('http://127.0.0.1:3000/api/becas/3')
        .then(response => {
          formDataDep.value = response.data;

        })
        .catch(error => {
          console.error('Error al obtener las becas:', error);
        });
      axios.get('http://127.0.0.1:3000/api/becas/4')
        .then(response => {
          formDataEco.value = response.data;

        })
        .catch(error => {
          console.error('Error al obtener las becas:', error);
        });
      axios.get('http://127.0.0.1:3000/api/becas/5')
        .then(response => {
          formDataExc.value = response.data;

        })
        .catch(error => {
          console.error('Error al obtener las becas:', error);
        });
      axios.get('http://127.0.0.1:3000/api/becas/6')
        .then(response => {
          formDataInc.value = response.data;

        })
        .catch(error => {
          console.error('Error al obtener las becas:', error);
        });
      axios.get('http://127.0.0.1:3000/api/becas/7')
        .then(response => {
          formDataPos.value = response.data;

        })
        .catch(error => {
          console.error('Error al obtener las becas:', error);
        });
      axios.get('http://127.0.0.1:3000/api/becas/8')
        .then(response => {
          formDataRef.value = response.data;

        })
        .catch(error => {
          console.error('Error al obtener las becas:', error);
        });
      axios.get('http://127.0.0.1:3000/api/becas/9')
        .then(response => {
          formDataRei.value = response.data;

        })
        .catch(error => {
          console.error('Error al obtener las becas:', error);
        });
      axios.get('http://127.0.0.1:3000/api/becas/10')
        .then(response => {
          formDataTra.value = response.data;

        })
        .catch(error => {
          console.error('Error al obtener las becas:', error);
        });
    });
    return {
      expanded: ref(false),
      formDataAca,
      formDataCul,
      formDataDep,
      formDataEco,
      formDataExc,
      formDataInc,
      formDataPos,
      formDataRef,
      formDataRei,
      formDataTra,
    }
  }
}
</script>

<style>
/* .titulo {
  color: #1ab192;
  text-transform: uppercase;
  line-height: 40px;
  font-size: 1.9em;
  text-align: center;
} */

.my-card{
  width: 100%;
  max-width: 350px;
}

.hidden-card {
  display: none;
}
.hidden-card-yes{
  display:grid;
}

</style>
