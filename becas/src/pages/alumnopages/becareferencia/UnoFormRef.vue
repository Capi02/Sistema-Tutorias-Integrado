<template>
  <q-page class="q-pa-md container" padding>
    <p class="title">Beca Referencia</p>
    <ButtonProgress></ButtonProgress>
    <ProgresoBar></ProgresoBar>
    <q-space />
    <q-space />
    <div class="seccion">
      <p>Solicitud</p>
    </div>
    <div class="q-pa-xs q-pt-lg">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <div class="row">
          <q-input filled v-model="studentId" class="col-5 q-pt-lg" hint="Tu ID" :dense="dense" disable readonly />
          <q-space />
          <q-input
            filled
            v-model="apellidopat"
            label="Apellido paterno"
            hint="Primer Apellido"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="apellidomat"
            label="Apellido Materno"
            hint="Segundo Apellido"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="nombre"
            label="Nombre o nombres"
            hint="Escriba su nombre"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            type="number"
            v-model="matricula"
            label="Matricula"
            hint="Matricula de la escuela"
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== '') || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="curp"
            label="Ingrese su curp"
            hint="Clave Única de Registro de Población"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="telefono"
            label="Telefono"
            hint="Numero propio"
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== '') || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            type="email"
            v-model="correoinstitucional"
            label="Correo"
            hint="Correo Institucional"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-select
            filled
            v-model="beca"
            label="Tipo de beca"
            hint="Beca que desea solicitar"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
            :options="becas"
          />
          <q-space />
          <q-select
            filled
            v-model="carrera"
            label="Carrera"
            hint="Carrera cursando"
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== undefined) ||
                'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
            :options="carreras"
          />
          <q-space />
          <q-select
            filled
            v-model="area"
            label="Area"
            hint="Area cursando"
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== undefined) ||
                'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
            :options="areas"
          />
          <q-space />
          <q-select
            filled
            v-model="grado"
            label="Grado"
            hint="Grado al que perteneces ya sea TSU, LIC o ING"
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== undefined) ||
                'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
            :options="grados"
          />
          <q-space />
          <q-input
            filled
            v-model="cuatrimestre"
            label="Cuatrimestre"
            hint="Cuatrimestre al que deseas aplicar la beca"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="grupo"
            label="Grupo"
            hint="Grupo al que perteneces"
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== '') || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="correotutor"
            label="Correo del tutor"
            hint="Correo de tutor"
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== '') || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-select
            filled
            v-model="genero"
            label="Genero"
            hint="Selecciona tu genero"
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== undefined) ||
                'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
            :options="generos"
          />
          <q-space />
          <q-select
            filled
            v-model="estado"
            label="Pendiente"
            hint="Así inicia el estado de tu beca"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
            :options="estados"
          />
          <q-space />
        </div>

        <q-toggle
          v-model="accept"
          label="Ya revise que las respuestas sean correctas"
        />

        <div>
          <q-btn
            label="Continuar"
            type="submit"
            color="primary"
            @click="onSubmit"
            to="/alumno/referencia/paso2"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useQuasar } from "quasar";
import { Notify } from "quasar";
import ButtonProgress from "src/components/Alumno/ButtonProgress.vue";
import ProgresoBar from "src/components/Alumno/ProgresoBar.vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  components: {
    ButtonProgress,
    ProgresoBar,
  },
  setup() {
    const $q = useQuasar();
    const accept = ref(false);
    const router = useRouter();
    const apellidopat = ref();
    const apellidomat = ref();
    const nombre = ref();
    const matricula = ref();
    const curp = ref();
    const telefono = ref();
    const correoinstitucional = ref();
    const beca = ref(null);
    const carrera = ref({
      value: null,
      label: "",
    });
    const area = ref({
      value: null,
      label: "",
    });
    const grado = ref({
      value: null,
      label: "",
    });
    const cuatrimestre = ref();
    const grupo = ref();
    const correotutor = ref();
    const genero = ref(null);
    const estado = ref(null);

    const becas = ref([]);
    const estados = ref([]);
    const carreras = ref([]);
    const areas = ref([]);
    const grados = ref([]);
    const generos = ref([]);

    const studentId = ref(); // Create a ref to hold the studentId value

    onMounted(async () => {
      try {
        const id = sessionStorage.getItem("key");
        studentId.value = id; // Set the studentId value
        // ...rest of the code...
      } catch (error) {
        console.error("Error al obtener los datos del estudiante:", error);
      }
    });

    onMounted(async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3000/api/becas/1");
        const becaData = response.data;
        if (becaData) {
          beca.value = becaData.beca;
        }
        console.log(response);
      } catch (error) {
        console.error("Error al obtener la beca:", error);
      }
    });

    onMounted(async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3000/api/estados/1");
        const estadoData = response.data;
        if (estadoData) {
          estado.value = estadoData.estado;
        }
        console.log(response);
      } catch (error) {
        console.error("Error al obtener la beca:", error);
      }
    });

    onMounted(async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3000/api/carrera");
        const carreraData = response.data;
        if (carreraData && carreraData.length > 0) {
          carreras.value = carreraData.map((item) => {
            return {
              label: item.carrera,
              value: item.idcarrera,
            };
          });
          carrera.value = carreras.value[0];
        }
        console.log(response);
      } catch (error) {
        console.error("Error al obtener la carrera:", error);
      }
    });

    onMounted(async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3000/api/area");
        const areaData = response.data;
        if (areaData && areaData.length > 0) {
          areas.value = areaData.map((item) => {
            return {
              label: item.area,
              value: item.idarea,
            }
          });
          area.value = areas.value[0];
        }
        console.log(response);
      } catch (error) {
        console.error("Error al obtener el area:", error);
      }
    });

    onMounted(async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3000/api/grado");
        const gradoData = response.data;
        if (gradoData && gradoData.length > 0) {
          grados.value = gradoData.map((item) => {
            return{
              label: item.grado,
              value: item.idgrado,
            }
          });
          grado.value = grados.value[0];
        }
        console.log(response);
      } catch (error) {
        console.error("Error al obtener el grado:", error);
      }
    });

    onMounted(async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3000/api/genero");
        const generoData = response.data;
        if (generoData && generoData.length > 0) {
          generos.value = generoData.map((item) => {
            return {
              label: item.genero,
              value: item.idgenero,
            };
          });
          genero.value = generos.value[0];
        }
        console.log(response);
      } catch (error) {
        console.error("Error al obtener el genero:", error);
      }
    });

    const formData = ref({
      apellidopat: "",
      apellidomat: "",
      nombre: "",
      matricula: "",
      curp: "",
      telefono: "",
      correoinstitucional: "",
      beca: [],
      carrera: [],
      area: [],
      grado: [],
      cuatrimestre: "",
      grupo: "",
      correotutor: "",
      genero: [],
      estado: [],
      studentId: "",
    });
    localStorage.setItem("formData", JSON.stringify(formData.value));

    const onSubmit = () => {
      formData.value = {
        apellidopat: apellidopat.value,
        apellidomat: apellidomat.value,
        nombre: nombre.value,
        matricula: matricula.value,
        curp: curp.value,
        telefono: telefono.value,
        correoinstitucional: correoinstitucional.value,
        beca: beca.value,
        carrera: carrera.value.value,
        area: area.value.value,
        grado: grado.value.value,
        cuatrimestre: cuatrimestre.value,
        grupo: grupo.value,
        correotutor: correotutor.value,
        genero: genero.value.value,
        estado: estado.value.value,
        studentId: studentId.value,
      };
      if (beca.value === "Referencia") {
        formData.value.beca = 8;
      }
      if (estado.value === "Pendiente") {
        formData.value.estado = 1;
      }

      localStorage.setItem("formData", JSON.stringify(formData.value));
      const accept = true;

      if (accept !== true) {
        $q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Necesitas revisar que todo este correcto",
        });
      } else {
        axios
          .post("http://127.0.0.1:3000/api/form", formData)
          .then((res) => {
            $q.notify({
              color: "green-4",
              textColor: "white",
              icon: "cloud_done",
              message: "Datos enviados correctamente",
            });
            router.push("/alumno/referencia/paso2");
          })
          .catch((error) => {
            console.error("Error al enviar los datos:", error);
            $q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              message: "Error al enviar los datos",
            });
          });
      }



      const onSubmit = () => {
      formDataCarta.value = {
        nombre: nombre.value,
        matricula: matricula.value,
        domicilio: domicilio.value,
        telefono: telefono.value,
        celular: celular.value,
        correoper: correoper.value,
        nacimiento: nacimiento.value,
        estadocivil: estadocivil.value,
        genero: genero.value.value,
        beca: beca.value.value,
        nivelestudios: nivelestudios.value,
        escuela: escuela.value,
        tipoes: tipoes.value,
        municipio: municipio.value,
        promedio: promedio.value,
        carrera: carrera.value.value,
        area: area.value.value,
        cuatrimestre: cuatrimestre.value,
        grupo: grupo.value,
        promedioult: promedioult.value,
        apoyo: apoyo.value,
        nombreapoyo: nombreapoyo.value,
        apoyoint: apoyoint,value,
        motivos: motivos.value,
        studentId: studentId.value,

      };

      localStorage.setItem("formDataCarta", JSON.stringify(formDataCarta.value));
      const accept = true;

      if (accept !== true) {
        $q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Necesitas revisar que todo este correcto",
        });
      } else {
        axios
          .post("http://127.0.0.1:3000/api/form/carta", formDataCarta)
          .then((res) => {
            $q.notify({
              color: "green-4",
              textColor: "white",
              icon: "cloud_done",
              message: "Datos enviados correctamente",
            });
            router.push("/alumno/referencia/paso2");
          })
          .catch((error) => {
            console.error("Error al enviar los datos:", error);
            $q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              message: "Error al enviar los datos",
            });
          });
      }
    };

  };


  return {
    onSubmit,
      apellidopat,
      apellidomat,
      nombre,
      matricula,
      curp,
      telefono,
      correoinstitucional,
      beca,
      carrera,
      area,
      grado,
      cuatrimestre,
      grupo,
      correotutor,
      genero,
      estado,
      accept,
      becas,
      estados,
      carreras,
      areas,
      grados,
      generos,
      studentId,
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
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
.seccion p {
  font-weight: bold;
  font-size: 18px;
  margin: 0;
}
.my-card {
  display: contents;
}
</style>
