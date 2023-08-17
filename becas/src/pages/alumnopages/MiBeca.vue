<template>
  <q-page>
    <div class="q-pa-md">
      <p class="titulo">Mi Beca</p>
      <div class="q-gutter-md container">
          <div class="q-pt-lg">
            <q-card class="q-pa-md">
              <q-card-section>
                <q-input filled v-model="studentId" class="col-5 q-pt-lg" hint="Tu ID" :dense="dense" disable readonly />
                <div class="q-pa-md">
                  <p class="q-mb-sm">Los datos de su solicitud son:</p>
                  <div class="q-mb-sm" v-if="formData">
                    <strong>Nombre:</strong>
                    <span>{{ formData && formData.nombre }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formData">
                    <strong>Matrícula:</strong>
                    <span>{{ formData && formData.matricula }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formData">
                    <strong>CURP:</strong>
                    <span>{{ formData && formData.curp }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formData">
                    <strong>Teléfono:</strong>
                    <span>{{ formData && formData.telefono }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formData">
                    <strong>Correo Institucional:</strong>
                    <span>{{ formData && formData.correoinstitucional }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formData">
                    <strong>Carrera:</strong>
                    <span>{{
                      getCarreraContent(formData && formData.idcarrera)
                    }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formData">
                    <strong>Área:</strong>
                    <span>{{ getAreaContent(formData && formData.idarea) }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formData">
                    <strong>Grado:</strong>
                    <span>{{
                      getGradoContent(formData && formData.idgrado)
                    }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formData">
                    <strong>Cuatrimestre:</strong>
                    <span>{{ formData && formData.cuatrimestre }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formData">
                    <strong>Grupo:</strong>
                    <span>{{ formData && formData.grupo }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formData">
                    <strong>Correo Tutor:</strong>
                    <span>{{ formData && formData.correotutor }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formData">
                    <strong>Género:</strong>
                    <span>{{
                      getGeneroContent(formData && formData.idgenero)
                    }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formData">
                    <strong>Estado:</strong>
                    <span>{{ getEstadoContent(formData && formData.idestado) }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formData">
                    <strong>Porcentaje obtenido:</strong>
                    <span>{{ formData && formData.porcentaje }}</span>
                  </div>
                </div>
              </q-card-section>
              <q-card-section>
                <div class="q-pa-md">
                  <p class="q-mb-sm">Sus datos solicitante son:</p>
                  <div class="q-mb-sm" v-if="formDataCarta">
                    <strong>Nombre:</strong>
                    <span>{{ formDataCarta && formDataCarta.nombre }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataCarta">
                    <strong>Matrícula:</strong>
                    <span>{{ formDataCarta && formDataCarta.matricula }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataCarta">
                    <strong>Domicilio:</strong>
                    <span>{{ formDataCarta && formDataCarta.domicilio }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataCarta">
                    <strong>Teléfono:</strong>
                    <span>{{ formDataCarta && formDataCarta.telefono }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataCarta">
                    <strong>Celular:</strong>
                    <span>{{ formDataCarta && formDataCarta.celular }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataCarta">
                    <strong>Correo:</strong>
                    <span>{{ formDataCarta && formDataCarta.correoper }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataCarta">
                    <strong>Nacimiento:</strong>
                    <span>{{ formDataCarta && formDataCarta.nacimiento }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataCarta">
                    <strong>Estado Civil:</strong>
                    <span>{{
                      formDataCarta && formDataCarta.estadocivil
                    }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataCarta">
                    <strong>Género:</strong>
                    <span>{{
                      getGeneroContent(formDataCarta && formDataCarta.genero)
                    }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataCarta">
                    <strong>Beca:</strong>
                    <span>{{
                      getBecaContent(formDataCarta && formDataCarta.beca)
                    }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataCarta">
                    <strong>Nivel de Estudios:</strong>
                    <span>{{
                      formDataCarta && formDataCarta.nivelestudios
                    }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataCarta">
                    <strong>Nombre de la Escuela:</strong>
                    <span>{{
                      formDataCarta && formDataCarta.nombreescuela
                    }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataCarta">
                    <strong>Tipo de la Escuela:</strong>
                    <span>{{
                      formDataCarta && formDataCarta.tipoescuela
                    }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataCarta">
                    <strong>Municipio de la Escuela:</strong>
                    <span>{{ formDataCarta && formDataCarta.municipio }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataCarta">
                    <strong>Promedio de la Escuela:</strong>
                    <span>{{ formDataCarta && formDataCarta.promedio }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataCarta">
                    <strong>Carrera:</strong>
                    <span>{{
                      getCarreraContent(formDataCarta && formDataCarta.carrera)
                    }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataCarta">
                    <strong>Área:</strong>
                    <span>{{
                      getAreaContent(formDataCarta && formDataCarta.area)
                    }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataCarta">
                    <strong>Cuatrimestre:</strong>
                    <span>{{ formDataCarta && formDataCarta.cuatrisoli }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataCarta">
                    <strong>Ultimo promedio obtenido:</strong>
                    <span>{{
                      formDataCarta && formDataCarta.promedioult
                    }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataCarta">
                    <strong>Grupo:</strong>
                    <span>{{ formDataCarta && formDataCarta.grupo }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataCarta">
                    <strong>Apoyo:</strong>
                    <span>{{ formDataCarta && formDataCarta.apoyo }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataCarta">
                    <strong>Nombre del Apoyo:</strong>
                    <span>{{
                      formDataCarta && formDataCarta.nombreapoyo
                    }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataCarta">
                    <strong>Cantidad del Apoyo:</strong>
                    <span>{{ formDataCarta && formDataCarta.cuanto }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataCarta">
                    <strong>Motivo:</strong>
                    <span>{{ formDataCarta && formDataCarta.motivo }}</span>
                  </div>
                </div>
              </q-card-section>
              <q-card-section>
                <div class="q-pa-md">
                  <p class="q-mb-sm">
                    Sus datos socioeconomicos son:
                  </p>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Nombre:</strong>
                    <span>{{ formDataSocio && formDataSocio.nombre }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Nacimiento:</strong>
                    <span>{{ formDataSocio && formDataSocio.nacimiento }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Domicilio:</strong>
                    <span>{{ formDataSocio && formDataSocio.domicilio }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Con quien vives actualmente:</strong>
                    <span>{{
                      formDataSocio && formDataSocio.conquienvive
                    }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Teléfono:</strong>
                    <span>{{ formDataSocio && formDataSocio.telefono }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Celular:</strong>
                    <span>{{ formDataSocio && formDataSocio.celular }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Modo de trasporte para llegar al domicilio:</strong>
                    <span>{{ formDataSocio && formDataSocio.transporte }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Ingresos mensuales propios:</strong>
                    <span>{{ formDataSocio && formDataSocio.ingreso }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Aporte a los ingresos del padre:</strong>
                    <span>{{ formDataSocio && formDataSocio.padre }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Aporte a los ingresos del madre:</strong>
                    <span>{{ formDataSocio && formDataSocio.madre }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Aporte a los ingresos de los hermanos:</strong>
                    <span>{{ formDataSocio && formDataSocio.hermanos }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Total de ingresos mensuales:</strong>
                    <span>{{ formDataSocio && formDataSocio.total }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Egresos en alimentacion mensuales:</strong>
                    <span>{{
                      formDataSocio && formDataSocio.alimentacion
                    }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Egresos en telefonia mensuales:</strong>
                    <span>{{ formDataSocio && formDataSocio.telefonia }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Egresos en credito de vivienda mensuales:</strong>
                    <span>{{ formDataSocio && formDataSocio.credito }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Egresos en renta mensuales:</strong>
                    <span>{{ formDataSocio && formDataSocio.renta }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Egresos en servicios basicos mensuales:</strong>
                    <span>{{ formDataSocio && formDataSocio.servicios }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Egresos en abonos o creditos mensuales:</strong>
                    <span>{{ formDataSocio && formDataSocio.abonos }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Egresos en importe de transorte mensuales:</strong>
                    <span>{{ formDataSocio && formDataSocio.importe }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Total de egresos mensuales:</strong>
                    <span>{{ formDataSocio && formDataSocio.totale }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>La situación de tu vivienda:</strong>
                    <span>{{ formDataSocio && formDataSocio.vivienda }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Tus paredes son de:</strong>
                    <span>{{ formDataSocio && formDataSocio.paredes }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Tu techo es de:</strong>
                    <span>{{ formDataSocio && formDataSocio.techos }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Tu piso es de:</strong>
                    <span>{{ formDataSocio && formDataSocio.pisos }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Cuentas con un mobiliario de:</strong>
                    <span>{{ formDataSocio && formDataSocio.mobiliario }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong
                      >Servicios Médicos con los que cuenta la familia:</strong
                    >
                    <span>{{ formDataSocio && formDataSocio.servmedico }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Frecuencia con la que asiste al médico:</strong>
                    <span>{{ formDataSocio && formDataSocio.asistencia }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Padeces de enfermedad cronica:</strong>
                    <span>{{ formDataSocio && formDataSocio.cronicas }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>El tipo de enfermedad cronica es de:</strong>
                    <span>{{ formDataSocio && formDataSocio.tipo }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong
                      >Alimentacion que prefieres o consumes regularmente es
                      de:</strong
                    >
                    <span>{{ formDataSocio && formDataSocio.consumo }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Actividades Familiares el fin de semana:</strong>
                    <span>{{ formDataSocio && formDataSocio.finde }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Actividades del alumno:</strong>
                    <span>{{
                      formDataSocio && formDataSocio.actividades
                    }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Tiempo de traslado:</strong>
                    <span>{{ formDataSocio && formDataSocio.traslado }}</span>
                  </div>
                  <div class="q-mb-sm" v-if="formDataSocio">
                    <strong>Medio de Transporte:</strong>
                    <span>{{ formDataSocio && formDataSocio.mediotra }}</span>
                  </div>
                </div>
              </q-card-section>
              <q-card-section>
                <div class="q-mb-sm" v-if="formDataDocumentos">
                  <strong>Documentos:</strong>
                  <div v-for="documento in formDataDocumentos" :key="documento.nombre">
                    <span>{{ documento.nombre }}</span>
                    <br>
                    <a :href="`http://127.0.0.1:3000/api/documentos/${studentId}/${documento.nombre}`" target="_blank">Ver documento</a>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import ButtonProgress from "src/components/Alumno/ButtonProgress.vue";
import DosProgresoBar from "src/components/Alumno/DosProgresoBar.vue";

export default {
  setup() {
    const router = useRouter();

    const beca = ref("");
    const carreras = ref([]);
    const areas = ref([]);
    const grados = ref([]);
    const generos = ref([]);
    const becas = ref([]);
    const estados = ref([]);
    const formData = ref(null);
    const formDataCarta = ref(null);
    const formDataSocio = ref(null);
    const formDataDocumentos = ref(null);

    const studentId = ref();
    const getCarreraContent = (idcarrera) => {
      const carrera = carreras.value.find((c) => c.value === idcarrera);
      return carrera ? carrera.label : "";
    };
    const getAreaContent = (idarea) => {
      const area = areas.value.find((c) => c.value === idarea);
      return area ? area.label : "";
    };
    const getGradoContent = (idgrado) => {
      const grado = grados.value.find((c) => c.value === idgrado);
      return grado ? grado.label : "";
    };
    const getGeneroContent = (idgenero) => {
      const genero = generos.value.find((c) => c.value === idgenero);
      return genero ? genero.label : "";
    };
    const getBecaContent = (idbeca) => {
      const beca = becas.value.find((c) => c.value === idbeca);
      return beca ? beca.label : "";
    };
    const getEstadoContent = (idestado) => {
      const estado = estados.value.find((c) => c.value === idestado);
      return estado ? estado.label : "";
    };


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
        const response = await axios.get("http://127.0.0.1:3000/api/carrera");
        const carreraData = response.data;
        if (carreraData && carreraData.length > 0) {
          carreras.value = carreraData.map((item) => {
            return {
              label: item.carrera,
              value: item.idcarrera,
            };
          });
        }
        console.log(response);
      } catch (error) {
        console.error("Error al obtener la carrera:", error);
      }
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
        }
        console.log(response);
      } catch (error) {
        console.error("Error al obtener la carrera:", error);
      }

      try {
        const response = await axios.get("http://127.0.0.1:3000/api/grado");
        const gradoData = response.data;
        if (gradoData && gradoData.length > 0) {
          grados.value = gradoData.map((item) => {
            return {
              label: item.grado,
              value: item.idgrado,
            };
          });
        }
        console.log(response);


      } catch (error) {
        console.error("Error al obtener la carrera:", error);
      }

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
        }
        console.log(response);
      } catch (error) {
        console.error("Error al obtener la carrera:", error);
      }

      try {
        const response = await axios.get("http://127.0.0.1:3000/api/becas/all");
        const becaData = response.data;
        if (becaData && becaData.length > 0) {
          becas.value = becaData.map((item) => {
            return {
              label: item.beca,
              value: item.idbeca,
            };
          });
        }
        console.log(response);
      } catch (error) {
        console.error("Error al obtener la beca:", error);
      }

      try {
        const response = await axios.get("http://127.0.0.1:3000/api/estado");
        const estadoData = response.data;
        if (estadoData && estadoData.length > 0) {
          estados.value = estadoData.map((item) => {
            return {
              label: item.estado,
              value: item.idestado,
            };
          });
        }
        console.log(response);
      } catch (error) {
        console.error("Error al obtener la beca:", error);
      }
    });

    onMounted(() => {

      const id = sessionStorage.getItem("key");
        studentId.value = id; // Set the studentId value
      // Realizar una solicitud al servidor para obtener los detalles del registro usando el ID recibido
      axios.get(`http://127.0.0.1:3000/api/lasolicitud/estatic/${studentId.value}`)
      .then((response) => {
        formData.value = response.data[0];
      })
      .catch((error) => {
        console.error('Error al obtener los detalles del registro:', error);
      });

      axios.get(`http://127.0.0.1:3000/api/carta/estatic/${studentId.value}`)
      .then(response => {
        formDataCarta.value = response.data[0];
      })
      .catch(error => {
        console.error('Error al obtener los detalles de la carta:', error);
      });

      // Realizar una solicitud al servidor para obtener los datos socioeconómicos
      axios.get(`http://127.0.0.1:3000/api/socioeconomico/estatic/${studentId.value}`)
      .then(response => {
        formDataSocio.value = response.data[0];
      })
      .catch(error => {
        console.error('Error al obtener los detalles socioeconómicos:', error);
      });

      // Fetch and populate the documentos
      axios.get(`http://127.0.0.1:3000/api/documentos/${studentId.value}`)
        .then(response => {
          formDataDocumentos.value = response.data;
          console.log(response);
        })
        .catch(error => {
          console.error('Error al obtener los documentos:', error);
        });
    });

    onMounted(async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:3000/api/documentos/${studentId.value}`);
        return response.data;
        console.log(response.data);
      } catch (error) {
        console.error('Error al obtener los documentos:', error);
        return [];
      }
    });


    return {
      formData,
      formDataCarta,
      formDataSocio,
      formDataDocumentos,
      beca,
      getCarreraContent,
      getAreaContent,
      getGradoContent,
      getGeneroContent,
      carreras,
      getBecaContent,
      getEstadoContent,
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
.titulo{
    color: #1ab192;
    text-transform: uppercase;
    line-height: 40px;
    font-size: 1.9em;
    text-align: center;
}
</style>
