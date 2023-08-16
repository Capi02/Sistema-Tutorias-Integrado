<template>
  <q-form @submit="onSubmit" @reset="onReset">
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-if="formDataAca" class="my-card" flat bordered>

        <q-img src="public/img/academic.jpg" />
        <q-card-section>
          <div class="text-h5 q-mt-sm q-mb-xs">{{ formDataAca.beca }}</div>
      </q-card-section>
      <q-card-actions>
        <q-select v-model="formDataAca.disponible" label="Disponible" :options="disponibilidadOptions" />
        <q-btn label="Actualizar" type="submit" color="primary" @click="actualizarDisponibilidad(formDataAca)" />
      </q-card-actions>
    </q-card>

    <q-card v-if="formDataCul" class="my-card" flat bordered>
      <q-img
      src="public/img/cultural.jpg"
      />
      <q-card-section>

        <div class="text-h5 q-mt-sm q-mb-xs">{{ formDataCul && formDataCul.beca }}</div>
      </q-card-section>
      <q-card-actions>
        <q-select v-model="formDataCul.disponible" label="Disponible" :options="disponibilidadOptions" />
        <q-btn label="Actualizar" type="submit" color="primary" @click="actualizarDisponibilidad(formDataCul)" />
      </q-card-actions>
    </q-card>


    <q-card v-if="formDataDep" class="my-card" flat bordered>
      <q-img
      src="public/img/deportiva.jpg"
      />
      <q-card-section>

        <div class="text-h5 q-mt-sm q-mb-xs">{{ formDataDep && formDataDep.beca }}</div>
      </q-card-section>
      <q-card-actions>
        <q-select v-model="formDataDep.disponible" label="Disponible" :options="disponibilidadOptions" />
        <q-btn label="Actualizar" type="submit" color="primary" @click="actualizarDisponibilidad(formDataDep)" />
      </q-card-actions>
    </q-card>


    <q-card v-if="formDataEco" class="my-card" flat bordered>
      <q-img
      src="public/img/economica.jpg"
      />
      <q-card-section>

        <div class="text-h5 q-mt-sm q-mb-xs">{{ formDataEco && formDataEco.beca }}</div>
      </q-card-section>
      <q-card-actions>
        <q-select v-model="formDataEco.disponible" label="Disponible" :options="disponibilidadOptions" />
        <q-btn label="Actualizar" type="submit" color="primary" @click="actualizarDisponibilidad(formDataEco)" />
      </q-card-actions>
    </q-card>


    <q-card v-if="formDataExc" class="my-card" flat bordered>
      <q-img
      src="public/img/excelenciaa.jpg"
      />
      <q-card-section>

        <div class="text-h5 q-mt-sm q-mb-xs">{{ formDataExc && formDataExc.beca }}</div>
      </q-card-section>
      <q-card-actions>
        <q-select v-model="formDataExc.disponible" label="Disponible" :options="disponibilidadOptions" />
        <q-btn label="Actualizar" type="submit" color="primary" @click="actualizarDisponibilidad(formDataExc)" />
      </q-card-actions>
    </q-card>


    <q-card v-if="formDataInc" class="my-card" flat bordered>
      <q-img
      src="public/img/inclusion.jpg"
      />
      <q-card-section>

        <div class="text-h5 q-mt-sm q-mb-xs">{{ formDataInc && formDataInc.beca }}</div>
      </q-card-section>
      <q-card-actions>
        <q-select v-model="formDataInc.disponible" label="Disponible" :options="disponibilidadOptions" />
        <q-btn label="Actualizar" type="submit" color="primary" @click="actualizarDisponibilidad(formDataInc)" />
      </q-card-actions>
    </q-card>


    <q-card v-if="formDataPos" class="my-card" flat bordered>
      <q-img
      src="public/img/postgrado.jpg"
      />
      <q-card-section>

        <div class="text-h5 q-mt-sm q-mb-xs">{{ formDataPos && formDataPos.beca }}</div>
      </q-card-section>
      <q-card-actions>
        <q-select v-model="formDataPos.disponible" label="Disponible" :options="disponibilidadOptions" />
        <q-btn label="Actualizar" type="submit" color="primary" @click="actualizarDisponibilidad(formDataPos)" />
      </q-card-actions>
    </q-card>


    <q-card v-if="formDataRef" class="my-card" flat bordered>
      <q-img
      src="public/img/referencia.jpg"
      />
      <q-card-section>

        <div class="text-h5 q-mt-sm q-mb-xs">{{ formDataRef && formDataRef.beca }}</div>
      </q-card-section>
      <q-card-actions>
        <q-select v-model="formDataRef.disponible" label="Disponible" :options="disponibilidadOptions" />
        <q-btn label="Actualizar" type="submit" color="primary" @click="actualizarDisponibilidad(formDataRef)" />
      </q-card-actions>
    </q-card>


    <q-card v-if="formDataRei" class="my-card" flat bordered>
      <q-img
      src="public/img/reincorporacion.jpg"
      />
      <q-card-section>

        <div class="text-h5 q-mt-sm q-mb-xs">{{ formDataRei && formDataRei.beca }}</div>
      </q-card-section>
      <q-card-actions>
        <q-select v-model="formDataRei.disponible" label="Disponible" :options="disponibilidadOptions" />
        <q-btn label="Actualizar" type="submit" color="primary" @click="actualizarDisponibilidad(formDataRei)" />
      </q-card-actions>
    </q-card>


    <q-card v-if="formDataTra" class="my-card" flat bordered>
      <q-img
      src="public/img/transporte.jpg"
      />
      <q-card-section>

        <div class="text-h5 q-mt-sm q-mb-xs">{{ formDataTra && formDataTra.beca }}</div>
      </q-card-section>
      <q-card-actions>
        <q-select v-model="formDataTra.disponible" label="Disponible" :options="disponibilidadOptions" />
        <q-btn label="Actualizar" type="submit" color="primary" @click="actualizarDisponibilidad(formDataTra)" />
      </q-card-actions>
    </q-card>
  </div>
  </q-form>

 </template>

 <script>
 import { defineComponent, ref, onMounted } from 'vue'
 import axios from 'axios';
 import HabilitarPage from '../adminpages/HabilitarPage.vue';
 export default {
  props: {
    idbeca: {
      type: String,
      required: true,
    },
  },
   setup (props) {

    const formDataArray = ref([]);
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

     const disponibilidadOptions = ['Sí', 'No'];

    //  onMounted(() => {
    //   cargarBeca(1, formDataAca);
    //   cargarBeca(2, formDataCul);
    //   cargarBeca(3, formDataDep);
    //   cargarBeca(4, formDataEco);
    //   cargarBeca(5, formDataExc);
    //   cargarBeca(6, formDataInc);
    //   cargarBeca(7, formDataPos);
    //   cargarBeca(8, formDataRei);
    //   cargarBeca(9, formDataRef);
    //   cargarBeca(10, formDataTra);
    // });

    // onMounted(() => {
    //   for (let id = 1; id <= 10; id++) {
    //     cargarBeca(id);
    //   }
    // });
    const cargarBeca = (id, formData) => {
      axios.get(`http://127.0.0.1:3000/api/becas/${id}`)
        .then(response => {
          formData.value = { ...response.data };
        })
        .catch(error => {
          console.error('Error al obtener las becas:', error);
        });
    };

    const onSubmit = async () => {
      try {
        await Promise.all([
          actualizarDisponibilidad(formDataAca),
          actualizarDisponibilidad(formDataCul),
          actualizarDisponibilidad(formDataDep),
          actualizarDisponibilidad(formDataEco),
          actualizarDisponibilidad(formDataExc),
          actualizarDisponibilidad(formDataInc),
          actualizarDisponibilidad(formDataPos),
          actualizarDisponibilidad(formDataRei),
          actualizarDisponibilidad(formDataRef),
          actualizarDisponibilidad(formDataTra)
        ]);

        console.log('Disponibilidad actualizada exitosamente');
      } catch (error) {
        console.error('Error al actualizar la disponibilidad:', error);
      }
    };

    const actualizarDisponibilidad = async (formData) => {
      try {
        const response = await axios.put(`http://127.0.0.1:3000/api/becasdis/${formData.idbeca}`, { disponible: formData.disponible });
        console.log(response.data.mensaje);
      } catch (error) {
        console.error('Error al actualizar la disponibilidad:', error);
      }
    };

    cargarBeca(1, formDataAca);
    cargarBeca(2, formDataCul);
    cargarBeca(3, formDataDep);
    cargarBeca(4, formDataEco);
    cargarBeca(5, formDataExc);
    cargarBeca(6, formDataInc);
    cargarBeca(7, formDataPos);
    cargarBeca(8, formDataRei);
    cargarBeca(9, formDataRef);
    cargarBeca(10, formDataTra);


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

       formDataArray,
       onSubmit,

       disponibilidadOptions,
       actualizarDisponibilidad,
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

 </style>
