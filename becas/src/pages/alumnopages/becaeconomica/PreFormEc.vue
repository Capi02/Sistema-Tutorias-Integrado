<template>
  <q-page class="q-pa-md container" padding>
    <p class="title">Beca Económica</p>
    <ButtonProgress></ButtonProgress>
    <ProgresoBar></ProgresoBar>
    <q-space />
    <q-space />
    <div class="seccion">
      <p>Información del Solicitante</p>
    </div>
    <div class="q-pa-xs q-pt-lg">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <div class="row">
          <q-input filled v-model="studentId" class="col-5 q-pt-lg" hint="Tu ID" :dense="dense" disable readonly />
          <q-space />
          <q-input
            filled
            v-model="nombre"
            label="Nombre Completo"
            hint="Empezando"
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
            v-model="domicilio"
            label="Ingrese su domicilio"
            hint="Domicilio en el cual vive"
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
            v-model="celular"
            label="Celular"
            hint="Numero de celular"
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
            v-model="correoper"
            label="Correo"
            hint="Correo Personal"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-date
            filled
            v-model="nacimiento"
            label="Fecha de nacimiento"
            hint="Fecha valida"
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
            v-model="estadocivil"
            label="Estado civl"
            hint="Soltero o casado"
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
            label="Sexo"
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
            v-model="beca"
            label="Tipo de beca"
            hint="Beca que desea solicitar"
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== undefined) || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
            :options="becas"
          />
          <q-space />
          <q-input
            filled
            v-model="nivelestudios"
            label="Nivel de estudios"
            hint="Escribe el nivel de estudios"
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
            v-model="nombreescuela"
            label="Nombre de la escuela"
            hint="Escribe el nombre de la escuela"
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
            v-model="tipoescuela"
            label="Tipo de escuela publica o privada"
            hint="Escribe el tipo de la escuela"
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
            v-model="municipio"
            label="Municipio donde se encuentra"
            hint="Escribe el tipo de la escuela"
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
            v-model="promedio"
            label="Promedio de calificación obtenida"
            hint="Escribe el promedio de calificación"
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
          <q-input
            filled
            v-model="cuatrisoli"
            label="Cuatrimestre"
            hint="¿En que cuatrimestre se encuentra al momento de solicitar la beca?"
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
            v-model="promedioult"
            label="Promedio de calificación obtenida en el ultimo cuatrimestre cursado"
            hint="Escribe tu promedio pasado"
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
            v-model="apoyo"
            label="Si o No"
            hint="¿Cuenta con algun apoyo económico o especie para su educacionde algun organismo público o privado?"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="nombreapoyo"
            label="Nombre del apoyo"
            hint="Si es que no cuenta con uno escriba NA"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            type="number"
            v-model="cuanto"
            label="¿Con cúanto lo apoyan?"
            hint="Escribe la cantidad que recibes de apoyo"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="motivo"
            label="Motivo"
            hint="Escribe el motivo por el cual cree que se le debe conceder la beca"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
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
            to="/alumno/economica/socio"
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
    const nombre = ref();
    const matricula = ref();
    const domicilio = ref();
    const telefono = ref();
    const celular = ref();
    const correoper = ref();
    const nacimiento = ref(new Date());
    const estadocivil = ref ();
    const genero = ref(null);
    const beca = ref({
      value: null,
      label:"",
    });
    const nivelestudios = ref();
    const nombreescuela = ref();
    const tipoescuela = ref();
    const municipio = ref();
    const promedio = ref();
    const carrera = ref({
      value: null,
      label: "",
    });
    const area = ref({
      value: null,
      label: "",
    });
    const cuatrisoli = ref();
    const grupo = ref();
    const promedioult = ref();
    const apoyo = ref();
    const nombreapoyo = ref();
    const cuanto = ref();
    const motivo = ref();


    const becas = ref([]);
    const carreras = ref([]);
    const areas = ref([]);
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
        const response = await axios.get("http://127.0.0.1:3000/api/becas/4");
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
            };
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

    const formDataCarta = ref({
      nombre: "",
      matricula: "",
      domicilio: "",
      telefono: "",
      celular: "",
      correoper: "",
      nacimiento: "",
      estadocivil:"",
      genero: [],
      beca: [],
      nivelestudios: "",
      nombreescuela: "",
      tipoescuela: "",
      municipio: "",
      promedio: "",
      carrera: [],
      area: [],
      cuatrisoli: "",
      grupo: "",
      promedioult: "",
      apoyo: "",
      nombreapoyo: "",
      cuanto: "",
      motivo: "",
      studentId:"",
    });
    localStorage.setItem("formDataCarta", JSON.stringify(formDataCarta.value));

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
        nombreescuela: nombreescuela.value,
        tipoescuela: tipoescuela.value,
        municipio: municipio.value,
        promedio: promedio.value,
        carrera: carrera.value.value,
        area: area.value.value,
        cuatrisoli: cuatrisoli.value,
        grupo: grupo.value,
        promedioult: promedioult.value,
        apoyo: apoyo.value,
        nombreapoyo: nombreapoyo.value,
        cuanto: cuanto.value,
        motivo: motivo.value,
        studentId: studentId.value,

      };
      if (beca.value === "Economica") {
        formDataCarta.value.beca = 4;
      }

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
            router.push("/alumno/economica/socio");
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

    return {
      onSubmit,
      nombre,
      matricula,
      domicilio,
      telefono,
      celular,
      correoper,
      nacimiento,
      estadocivil,
      genero,
      beca,
      nivelestudios,
      nombreescuela,
      tipoescuela,
      municipio,
      promedio,
      carrera,
      area,
      cuatrisoli,
      grupo,
      promedioult,
      apoyo,
      nombreapoyo,
      cuanto,
      motivo,
      accept,
      becas,
      carreras,
      areas,
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

.my-card {
  display: contents;
}

.seccion {
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
  padding-top: inherit;
  text-align: center;
}

.seccion p {
  font-weight: bold;
  font-size: 18px;
  margin: 0;
}
</style>
