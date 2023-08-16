<template>
  <q-page :style-fn="myTweak" padding>
    <!-- Resto del código de la página de detalles -->
    <div class="q-pa-md row items-start q-gutter-md">
      <div class="q-gutter-md container">
        <q-form @submit="onSubmit" @reset="onReset">
          <div class="q-pt-lg">
            <div class="q-col-gutter-md q-row items-start">
              <div class="row">
              <q-col cols="4">
                <q-card class="my-card">
                <q-card-section class="q-col-md-4">
                  <div class="q-pa-md">
                  <p class="q-mb-sm">Los datos de la solicitud son:</p>
                  <!-- Mostrar los detalles del registro -->
                  <p class="q-mb-sm"><strong>Apellido Paterno:</strong> {{ formData && formData.apellidopat }}</p>
                  <p class="q-mb-sm"><strong>Apellido Materno:</strong> {{ formData && formData.apellidomat }}</p>
                  <p class="q-mb-sm"><strong>Nombre:</strong> {{ formData && formData.nombre }}</p>
                  <p class="q-mb-sm"><strong>Matrícula:</strong> {{ formData && formData.matricula }}</p>
                  <p class="q-mb-sm"><strong>Telefono:</strong> {{ formData && formData.telefono }}</p>
                  <p class="q-mb-sm"><strong>Beca:</strong> {{ getBecaContent(formData && formData.idbeca) }}</p>
                  <p class="q-mb-sm"><strong>Carrera:</strong> {{ getCarreraContent(formData && formData.idcarrera) }}</p>
                  <p class="q-mb-sm"><strong>Area:</strong> {{ getAreaContent(formData && formData.idarea) }}</p>
                  <p class="q-mb-sm"><strong>Grado:</strong> {{ getGradoContent(formData && formData.idgrado) }}</p>
                  <p class="q-mb-sm"><strong>Cuatrimestre:</strong> {{ formData && formData.cuatrimestre }}</p>
                  <p class="q-mb-sm"><strong>Grupo:</strong> {{ formData && formData.grupo }}</p>
                  <p class="q-mb-sm"><strong>Correo tutor:</strong> {{ formData && formData.correotutor }}</p>
                  <p class="q-mb-sm"><strong>Genero:</strong> {{ getGeneroContent(formData && formData.idgenero) }}</p>
                  <p class="q-mb-sm"><strong>Porcentaje:</strong> {{ formData && formData.porcentaje }}</p>
                  <p class="q-mb-sm"><strong>Estado:</strong> {{ getEstadoContent(formData && formData.idestado) }}</p>
                </div>
              </q-card-section>
            </q-card>
            </q-col>
            <q-col cols="4">
                <q-card class="my-card">
                <q-card-section class="q-col-md-4">
                  <div class="q-pa-md">
                    <p class="q-mb-sm">Los datos del solicitante son:</p>
                    <div class="q-mb-sm">
                      <strong>Nombre:</strong>
                    <span>{{ formDataCarta && formDataCarta.nombre }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Matrícula:</strong>
                    <span>{{ formDataCarta && formDataCarta.matricula }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Domicilio:</strong>
                    <span>{{ formDataCarta && formDataCarta.domicilio }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Teléfono:</strong>
                    <span>{{ formDataCarta && formDataCarta.telefono }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Celular:</strong>
                    <span>{{ formDataCarta && formDataCarta.celular }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Correo:</strong>
                    <span>{{ formDataCarta && formDataCarta.correoper }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Nacimiento:</strong>
                    <span>{{ formDataCarta && formDataCarta.nacimiento }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Estado Civil:</strong>
                    <span>{{
                      formDataCarta && formDataCarta.estadocivil
                    }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Género:</strong>
                    <span>{{
                      getGeneroContent(formDataCarta && formDataCarta.genero)
                    }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Beca:</strong>
                    <span>{{
                      getBecaContent(formDataCarta && formDataCarta.beca)
                    }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Nivel de Estudios:</strong>
                    <span>{{
                      formDataCarta && formDataCarta.nivelestudios
                    }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Nombre de la Escuela:</strong>
                    <span>{{
                      formDataCarta && formDataCarta.nombreescuela
                    }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Tipo de la Escuela:</strong>
                    <span>{{
                      formDataCarta && formDataCarta.tipoescuela
                    }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Municipio de la Escuela:</strong>
                    <span>{{ formDataCarta && formDataCarta.municipio }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Promedio de la Escuela:</strong>
                    <span>{{ formDataCarta && formDataCarta.promedio }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Carrera:</strong>
                    <span>{{
                      getCarreraContent(formDataCarta && formDataCarta.carrera)
                    }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Área:</strong>
                    <span>{{
                      getAreaContent(formDataCarta && formDataCarta.area)
                    }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Cuatrimestre:</strong>
                    <span>{{ formDataCarta && formDataCarta.cuatrisoli }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Ultimo promedio obtenido:</strong>
                    <span>{{
                      formDataCarta && formDataCarta.promedioult
                    }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Grupo:</strong>
                    <span>{{ formDataCarta && formDataCarta.grupo }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Apoyo:</strong>
                    <span>{{ formDataCarta && formDataCarta.apoyo }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Nombre del Apoyo:</strong>
                    <span>{{
                      formDataCarta && formDataCarta.nombreapoyo
                    }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Cantidad del Apoyo:</strong>
                    <span>{{ formDataCarta && formDataCarta.cuanto }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Motivo:</strong>
                    <span>{{ formDataCarta && formDataCarta.motivo }}</span>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-col>
            <q-col cols="4">
              <q-card class="my-card">
              <q-card-section class="q-col-md-4">
                <div class="q-pa-md">
                  <p class="q-mb-sm">
                    Los datos enviados de los socioeconomicos del estudiante son:
                  </p>
                  <div class="q-mb-sm">
                    <strong>Nombre:</strong>
                    <span>{{ formDataSocio && formDataSocio.nombre }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Nacimiento:</strong>
                    <span>{{ formDataSocio && formDataSocio.nacimiento }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Domicilio:</strong>
                    <span>{{ formDataSocio && formDataSocio.domicilio }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Con quien vives actualmente:</strong>
                    <span>{{
                      formDataSocio && formDataSocio.conquienvive
                    }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Teléfono:</strong>
                    <span>{{ formDataSocio && formDataSocio.telefono }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Celular:</strong>
                    <span>{{ formDataSocio && formDataSocio.celular }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Modo de trasporte para llegar al domicilio:</strong>
                    <span>{{ formDataSocio && formDataSocio.transporte }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Ingresos mensuales propios:</strong>
                    <span>{{ formDataSocio && formDataSocio.ingreso }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Aporte a los ingresos del padre:</strong>
                    <span>{{ formDataSocio && formDataSocio.padre }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Aporte a los ingresos del madre:</strong>
                    <span>{{ formDataSocio && formDataSocio.madre }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Aporte a los ingresos de los hermanos:</strong>
                    <span>{{ formDataSocio && formDataSocio.hermanos }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Total de ingresos mensuales:</strong>
                    <span>{{ formDataSocio && formDataSocio.total }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Egresos en alimentacion mensuales:</strong>
                    <span>{{
                      formDataSocio && formDataSocio.alimentacion
                    }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Egresos en telefonia mensuales:</strong>
                    <span>{{ formDataSocio && formDataSocio.telefonia }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Egresos en credito de vivienda mensuales:</strong>
                    <span>{{ formDataSocio && formDataSocio.credito }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Egresos en renta mensuales:</strong>
                    <span>{{ formDataSocio && formDataSocio.renta }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Egresos en servicios basicos mensuales:</strong>
                    <span>{{ formDataSocio && formDataSocio.servicios }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Egresos en abonos o creditos mensuales:</strong>
                    <span>{{ formDataSocio && formDataSocio.abonos }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Egresos en importe de transorte mensuales:</strong>
                    <span>{{ formDataSocio && formDataSocio.importe }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Total de egresos mensuales:</strong>
                    <span>{{ formDataSocio && formDataSocio.totale }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>La situación de tu vivienda:</strong>
                    <span>{{ formDataSocio && formDataSocio.vivienda }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Tus paredes son de:</strong>
                    <span>{{ formDataSocio && formDataSocio.paredes }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Tu techo es de:</strong>
                    <span>{{ formDataSocio && formDataSocio.techos }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Tu piso es de:</strong>
                    <span>{{ formDataSocio && formDataSocio.pisos }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Cuentas con un mobiliario de:</strong>
                    <span>{{ formDataSocio && formDataSocio.mobiliario }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong
                    >Servicios Médicos con los que cuenta la familia:</strong
                    >
                    <span>{{ formDataSocio && formDataSocio.servmedico }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Frecuencia con la que asiste al médico:</strong>
                    <span>{{ formDataSocio && formDataSocio.asistencia }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Padeces de enfermedad cronica:</strong>
                    <span>{{ formDataSocio && formDataSocio.cronicas }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>El tipo de enfermedad cronica es de:</strong>
                    <span>{{ formDataSocio && formDataSocio.tipo }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong
                    >Alimentacion que prefieres o consumes regularmente es
                      de:</strong
                    >
                    <span>{{ formDataSocio && formDataSocio.consumo }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Actividades Familiares el fin de semana:</strong>
                    <span>{{ formDataSocio && formDataSocio.finde }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Actividades del alumno:</strong>
                    <span>{{
                      formDataSocio && formDataSocio.actividades
                    }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Tiempo de traslado:</strong>
                    <span>{{ formDataSocio && formDataSocio.traslado }}</span>
                  </div>
                  <div class="q-mb-sm">
                    <strong>Medio de Transporte:</strong>
                    <span>{{ formDataSocio && formDataSocio.mediotra }}</span>
                  </div>
                </div>
              </q-card-section>
            </q-card>
            </q-col>
            <q-card class="my-card">

              <q-card-section>
                <div class="q-pa-md">
                  <p class="q-mb-sm"><strong>Documentos:</strong></p>
                  <div v-for="documento in formDataDocumentos" :key="documento.iddocumento" class="q-mb-sm">
                    <strong>Nombre del documento:</strong>
                    <span>{{ documento.nombre }}</span>
                    <br>
                    <strong>Ruta del documento:</strong>
                    <span>{{ documento.documento }}</span>
                    <br>
                    <!-- Update the link to include the document name in the URL -->
                    <a :href="`http://127.0.0.1:3000/api/documentos/${documento.documento}`" target="_blank">Ver documento</a>
                  </div>
                </div>
              </q-card-section>
            </q-card>
              <q-card-section>
                <p class="q-mb-sm"><strong>Estado de la beca:</strong> {{ getEstadoContent(formData && formData.idestado) }}</p>
                  <q-select v-model="estadoRef" :options="estados" label="Estado" />
                  <!-- <q-btn type="submit" color="primary" label="Guardar" class="q-mt-md" /> -->
              </q-card-section>
              <q-card-section>
                <p class="q-mb-sm"><strong>Estado de la beca:</strong> {{ getEstadoContent(formData && formData.idestado) }}</p>
                <div class="q-gutter-md">
                  <q-btn
                    v-for="estado in estados"
                    :key="estado.value"
                    v-model="estadoRef"
                    @click="estadoRef = estado"
                    :color="estadoRef === estado ? 'primary' : 'default'"
                    :label="estado.label"
                    class="q-mb-md"
                    text-color="black"
                    color:primary
                  />
                </div>
                <q-btn type="submit" color="primary" label="Guardar" class="q-mt-md" @click="onSubmit" />
              </q-card-section>
            </div>
            </div>
          </div>
          </q-form>
        </div>

    </div>
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default{

  props: {
    idsolicitud: {
      type: String,
      required: true,
    },
  },
  setup (props) {

    const router = useRouter();
    const estadoRef = ref(null);
    const porcentaje = ref(null);
    const formData = ref(null);
    const formDataCarta = ref(null);
    const formDataSocio = ref(null);
    const formDataDocumentos = ref(null);
    const carreras = ref([]);
    const areas = ref([]);
    const grados = ref([]);
    const generos = ref([]);
    const becas = ref([]);
    const estados = ref([]);

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

        const onSubmit = async () => {
          try {
            // Realiza una solicitud HTTP para actualizar el registro con el nuevo valor del estado
            await axios.put(`http://127.0.0.1:3000/api/solicitud/${props.idsolicitud}`, {
              idestado: estadoRef.value.value, // Aquí envías el nuevo valor del estado seleccionado
            });

            // Maneja el éxito, por ejemplo, muestra un mensaje de éxito o navega a otra página
            console.log('Registro actualizado correctamente');
          } catch (error) {
            console.error('Error al actualizar el registro:', error);
            // Maneja el error, por ejemplo, muestra un mensaje de error al usuario
          }
        };

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
        console.error("Error al obtener el area:", error);
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
        console.error("Error al obtener el grado:", error);
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
        console.error("Error al obtener el genero:", error);
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
      if (props.idsolicitud) {
        // Realizar una solicitud al servidor para obtener los detalles del registro usando el ID recibido
        axios
          .get(`http://127.0.0.1:3000/api/solicitud/${props.idsolicitud}`)
          .then((response) => {
            formData.value = response.data;

            // Inicializar el estado seleccionado en el q-select con el valor actual del registro
            estadoRef.value = formData.value.idestado;

            axios.get(`http://127.0.0.1:3000/api/carta/estatic`)
              .then(response => {
                formDataCarta.value = response.data[0]; // Asignamos el primer elemento (solo obtiene un registro) a formDataCarta
              })
              .catch(error => {
                console.error('Error al obtener los detalles de la carta:', error);
                // Puedes manejar el error según tus necesidades.
              });

            // Realizar una solicitud al servidor para obtener los datos socioeconómicos
            axios.get(`http://127.0.0.1:3000/api/socioeconomico/estatic`)
              .then(response => {
                formDataSocio.value = response.data[0]; // Asignamos el primer elemento (solo obtiene un registro) a formDataSocio
              })
              .catch(error => {
                console.error('Error al obtener los detalles socioeconómicos:', error);
                // Puedes manejar el error según tus necesidades.
            });
          })
          .catch((error) => {
            console.error('Error al obtener los detalles del registro:', error);
            // Puedes manejar el error según tus necesidades (por ejemplo, mostrar un mensaje de error en la página).
          });
      }
    });

    async function getDocumentos(idDocumentos) {
      try {
        const response = await axios.get('http://127.0.0.1:3000/api/documentos', {
          params: {
            idDocumentos: idDocumentos, // Pasar la lista de IDs como parámetro en la URL
          },
        });
        return response.data;
      } catch (error) {
        console.error('Error al obtener los documentos:', error);
        return [];
      }
    }

    onMounted(async () => {
      const idDocumentos = [1, 2];
      const documentos = await getDocumentos(idDocumentos);
      formDataDocumentos.value = documentos;
    });

    onMounted(() => {
      // Cargar los datos de las becas
      axios.get('http://127.0.0.1:3000/api/becas/all')
        .then(response => {
          becas.value = response.data;
        })
        .catch(error => {
          console.error('Error al obtener las becas:', error);
        });

      // Cargar los datos de las carreras
      axios.get('http://127.0.0.1:3000/api/carrera')
        .then(response => {
          carreras.value = response.data;
        })
        .catch(error => {
          console.error('Error al obtener las carreras:', error);
        });

      // Cargar los datos de las áreas
      axios.get('http://127.0.0.1:3000/api/area')
        .then(response => {
          areas.value = response.data;
        })
        .catch(error => {
          console.error('Error al obtener las áreas:', error);
        });

      // Cargar los datos de los grados
      axios.get('http://127.0.0.1:3000/api/grado')
        .then(response => {
          grados.value = response.data;
        })
        .catch(error => {
          console.error('Error al obtener los grados:', error);
        });

      // Cargar los datos de los géneros
      axios.get('http://127.0.0.1:3000/api/genero')
        .then(response => {
          generos.value = response.data;
        })
        .catch(error => {
          console.error('Error al obtener los géneros:', error);
        });

      axios.get('http://127.0.0.1:3000/api/estado')
        .then(response => {
          estados.value = response.data;
        })
        .catch(error => {
          console.error('Error al obtener los géneros:', error);
        });
    });

    // Función para obtener el nombre correspondiente a un ID desde la lista
    function getNombreFromId(id, lista) {
      const item = lista.value.find(item => item.id === id);
      return item ? item.nombre : '';
    }

    return {
      formData,
      formDataCarta,
      formDataSocio,
      formDataDocumentos,
      getCarreraContent,
      getAreaContent,
      getGradoContent,
      getGeneroContent,
      getBecaContent,
      getEstadoContent,

      porcentaje,
      estadoRef,
      estados,
      onSubmit,
    };
  }
};

</script>

<style lang="scss" scoped>

</style>
