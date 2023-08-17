<template>
  <q-page class="q-pa-md container" padding>
    <p class="title">Beca Academica</p>
    <ButtonProgress></ButtonProgress>
    <ProgresoBar></ProgresoBar>
    <q-space />
    <q-space />
    <div class="seccion">
      <p>Información de Socioeconomica</p>
    </div>
    <div class="q-pa-xs q-pt-lg">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <div class="row">
          <q-input
            filled
            v-model="nombre"
            label="Nombre Completo"
            hint="Empezando por apellidos"
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
            v-model="conquienvive"
            label="¿Con quien vives?"
            hint="¿Con quien vives actualmente?"
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
            type="number"
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
            type="number"
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
            v-model="transporte"
            label="Transporte que utiliza"
            hint="Transporte para llegar al domicilio"
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
            v-model="ingreso"
            label="Ingresos propios mensuales"
            hint="Ingresos mensuales"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="padre"
            label="Aporte de ingresos del padre"
            hint="Ingresos mensuales"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="madre"
            label="Aporte de ingresos de la madre"
            hint="Ingresos mensuales"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="hermanos"
            label="Aporte de ingresos de tus hermanos"
            hint="Escribe el nivel de estudios"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="total"
            label="Total de ingresos mensuales"
            hint="Ingresos mensuales"
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
            v-model="alimentacion"
            label="Gastos en alimentación"
            hint="Egresos mensuales"
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
            v-model="telefonia"
            label="Gastos en telefonia"
            hint="Egresos mensuales"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="credito"
            label="Gastos en credito de vivienda"
            hint="Egresos mensuales"
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
            v-model="renta"
            label="Gastos en renta"
            hint="Egresos mensuales"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="servicios"
            label="Gastos en servicios basicos"
            hint="Egresos mensuales"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="abonos"
            label="Gastos en abonos y creditos"
            hint="Egresos mensuales"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="importe"
            label="Gastos en importe del transporte"
            hint="Egresos mensuales"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
          filled
          v-model="totale"
          label="Total de los egresos mensuales"
          hint="Escribe el total de los egresos mensuales"
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
            v-model="vivienda"
            label="¿Cuál es la situacion de tu vivienda?"
            hint="Propia, Casa, Rentada, Departamento, Prestada, Vecindad"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="paredes"
            label="Especifica de que material estan hechas las paredes"
            hint="Tabique, madera, carton u otro"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="techos"
            label="Especifica de que material esta hecho tu techo"
            hint="Concreto, lamina de asbesto u otros"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="pisos"
            label="Especifica de que material esta hecho tu piso"
            hint="Madera, cemento, mosaico u otros"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="mobiliario"
            label="Escribe con que mobiliario cuenta tu vivienda"
            hint="Escribe los aparatos electronicos y electrodomesticos con los que cuenta tu vivienda"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="servmedico"
            label=" Escribe los Servicios Médicos con los que cuenta la familia"
            hint="IMSS, ISSTE, Seguro Popular, Medico Provado u otro"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="asistencia"
            label="Escribe la frecuencia con la que asiste al médico"
            hint="Una vez por semana, mensualmente, Anualmente, Cuando se enferma"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="cronicas"
            label="¿Padece Enfermedades Crónicas?"
            hint="Si o No"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="tipo"
            label="Si padece de enfermedades cronicas especifique cuales son: "
            hint="De no padecer escribe NA"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="consumo"
            label="¿Qué tipo de Alimentación prefieres o consumes regularmente"
            hint="Enlista los alimentos que consumes regularmente o que son de tu preferencia"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="finde"
            label="Actividades Familiares el fin de semana"
            hint="Practicar deporte, ir al cine, trabaja, videojuegos, otros"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="actividades"
            label="Actividades del alumno"
            hint="Estudia, Deporte, Hace sus tareas, Juega con amigos, otros"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="traslado"
            label="Tiempo de traslado a la institución"
            hint="Hasta 20 minutos, De 20 a 40, Más de 40 minutos"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="mediotra"
            label="Medio de Transporte"
            hint="Automovil, Taxi, Motoneta, otro medio"
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
            to="/alumno/academica/paso1"
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
    const nacimiento = ref(new Date());
    const domicilio = ref();
    const conquienvive = ref();
    const telefono = ref();
    const celular = ref();
    const transporte = ref();
    const ingreso = ref ();
    const padre = ref();
    const madre = ref();
    const hermanos = ref();
    const total = ref();
    const alimentacion = ref();
    const telefonia = ref();
    const credito = ref();
    const renta = ref();
    const servicios = ref();
    const abonos = ref();
    const importe = ref();
    const totale = ref();
    const vivienda = ref();
    const paredes = ref();
    const techos = ref();
    const pisos = ref();
    const mobiliario = ref();
    const servmedico = ref();
    const asistencia = ref();
    const cronicas = ref();
    const tipo = ref();
    const consumo = ref();
    const finde = ref();
    const actividades = ref();
    const traslado = ref();
    const mediotra = ref();

    const formDataSocio = ref({
      nombre: "",
      nacimiento: "",
      domicilio: "",
      conquienvive: "",
      telefono: "",
      celular: "",
      transporte: "",
      ingreso:"",
      padre: "",
      madre: "",
      hermanos: "",
      total: "",
      alimentacion: "",
      telefonia: "",
      credito: "",
      renta: "",
      servicios: "",
      abonos: "",
      importe: "",
      totale: "",
      vivienda: "",
      paredes: "",
      techos: "",
      pisos: "",
      mobiliario: "",
      servmedico: "",
      asistencia: "",
      cronicas: "",
      tipo: "",
      consumo: "",
      finde: "",
      actividades: "",
      traslado: "",
      mediotra: "",
    });
    localStorage.setItem("formDataSocio", JSON.stringify(formDataSocio.value));

    const onSubmit = () => {
      formDataSocio.value = {
        nombre: nombre.value,
        nacimiento: nacimiento.value,
        domicilio: domicilio.value,
        conquienvive: conquienvive.value,
        telefono: telefono.value,
        celular: celular.value,
        transporte: transporte.value,
        ingreso: ingreso.value,
        padre: padre.value,
        madre: madre.value,
        hermanos: hermanos.value,
        total: total.value,
        alimentacion: alimentacion.value,
        telefonia: telefonia.value,
        credito: credito.value,
        renta: renta.value,
        servicios: servicios.value,
        abonos: abonos.value,
        importe: importe.value,
        totale: totale.value,
        vivienda: vivienda.value,
        paredes: paredes.value,
        techos: techos.value,
        pisos: pisos.value,
        mobiliario: mobiliario.value,
        servmedico: servmedico.value,
        asistencia: asistencia.value,
        cronicas: cronicas.value,
        tipo: tipo.value,
        consumo: consumo.value,
        finde: finde.value,
        actividades: actividades.value,
        traslado: traslado.value,
        mediotra: mediotra.value,

      };

      localStorage.setItem("formDataSocio", JSON.stringify(formDataSocio.value));
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
          .post("http://127.0.0.1:3000/api/form/socio", formDataSocio)
          .then((res) => {
            $q.notify({
              color: "green-4",
              textColor: "white",
              icon: "cloud_done",
              message: "Datos enviados correctamente",
            });
            router.push("/alumno/academica/paso1");
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
            router.push("/alumno/academica/prepaso");
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
      nombre,
      nacimiento,
      domicilio,
      conquienvive,
      telefono,
      celular,
      transporte,
      ingreso,
      padre,
      madre,
      hermanos,
      total,
      alimentacion,
      telefonia,
      credito,
      renta,
      servicios,
      abonos,
      importe,
      totale,
      vivienda,
      paredes,
      techos,
      pisos,
      mobiliario,
      servmedico,
      asistencia,
      cronicas,
      tipo,
      consumo,
      finde,
      actividades,
      traslado,
      mediotra,
      accept,
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
