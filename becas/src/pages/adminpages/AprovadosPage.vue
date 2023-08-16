<template>
  <p class="titulo">Becas aprobadas</p>
  <div class="q-pa-md-container">
    <div class="botonesfilt">
      <p class="">Botones de filtrado</p>
    </div>
    <div class="q-pa-md">
      <q-btn-dropdown
        color="secondary"
        class="buttoms"
        text-color="black"
        label="Becas"
        :model-value="isBecaDropdownOpen"
      >
        <q-list>
          <q-item
            v-for="beca in becas"
            :key="beca.idbeca"
            clickable
            v-close-popup
            @click="onItemClick(beca.beca, 'beca')"
          >
            <q-item-section>
              <q-item-label>{{ beca.beca }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
    </q-btn-dropdown>
  </div>
        <div class="q-pa-md">
            <q-btn-dropdown
              color="secondary"
              class="buttoms"
              text-color="black"
              label="Carrera"
              :model-value="isCarreraDropdownOpen"
            >
              <q-list>
                <q-item
                  v-for="carrera in carreras"
                  :key="carrera.idcarrera"
                  clickable
                  v-close-popup
                  @click="onItemClick(carrera.carrera, 'carrera')"
                >
                  <q-item-section>
                    <q-item-label>{{ carrera.carrera }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
          <div class="q-pa-md">
            <q-btn-dropdown
              color="secondary"
              class="buttoms"
              text-color="black"
              label="Area"
              :model-value="isAreaDropdownOpen"
            >
              <q-list>
                <q-item
                  v-for="area in areas"
                  :key="area.idarea"
                  clickable
                  v-close-popup
                  @click="onItemClick (area.area, 'area')"
                >
                  <q-item-section>
                    <q-item-label>{{ area.area }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
          <div class="q-pa-md">
            <q-btn-dropdown
              color="secondary"
              class="buttoms"
              text-color="black"
              label="Nivel"
              :model-value="isGradoDropdownOpen"
            >
              <q-list>
                <q-item
                  v-for="grado in grados"
                  :key="grado.idgrado"
                  clickable
                  v-close-popup
                  @click="onItemClick (grado.grado, 'grado')"
                >
                  <q-item-section>
                    <q-item-label>{{ grado.grado }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
          <div class="q-pa-md">
            <q-btn-dropdown
              color="secondary"
              class="buttoms"
              text-color="black"
              label="Genero"
              :model-value="isGeneroDropdownOpen"
            >
              <q-list>
                <q-item
                  v-for="genero in generos"
                  :key="genero.idgenero"
                  clickable
                  v-close-popup
                  @click="onItemClick (genero.genero, 'genero')"
                >
                  <q-item-section>
                    <q-item-label>{{ genero.genero }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
</div>
<div class="q-pa-md">
    <q-table
      flat bordered
      title="Solicitudes aprobadas"
      :rows="filteredData"
      :columns="columns"
      color="primary"
      row-key="name"
    >
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td v-for="col in props.cols" :key="col.name" :props="props">
          <template v-if="col.name === 'nombre'"> <!-- Ajusta aquí el nombre de la columna que tiene el ID del registro -->
            <router-link :to="'/details/' + props.row.idsolicitud"> <!-- Así se pasa el ID como parámetro en la URL -->
              {{ props.row[col.name] }}
            </router-link>
          </template>
          <template v-else>
            {{ props.row[col.name] }}
          </template>
        </q-td>
      </q-tr>
    </template>
      <template v-slot:top-right>
        <q-btn
          color="primary"
          icon-right="archive"
          label="Export to csv"
          no-caps
          @click="exportTable"
        />
      </template>
    </q-table>
  </div>

</template>

<script>
import { defineComponent,ref, onMounted, computed } from "vue";
import { exportFile, useQuasar } from 'quasar';
import BotonesFil from "src/components/Admin/BotonesFil.vue";
import axios from "axios";
import { useRouter } from "vue-router";

const columns = [
  {
    name: 'nombre',
    required: true,
    label: 'Nombre',
    align: 'left',
    field: row => row.nombre,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'beca', align: 'center', label: 'Beca', field: 'beca', sortable: true },
  { name: 'carrera', label: 'Programa Educativo', field: 'carrera', sortable: true },
  { name: 'area', label: 'Área', field: 'area' },
  { name: 'grado', label: 'Nivel Educativo', field: 'grado' },
  { name: 'genero', label: 'Género', field: 'genero' },
  { name: 'idsolicitud', label: 'Solicitud', field: 'idsolicitud' }
];


function wrapCsvValue (val, formatFn, row) {
  let formatted = formatFn !== void 0
    ? formatFn(val, row)
    : val

  formatted = formatted === void 0 || formatted === null
    ? ''
    : String(formatted)

  formatted = formatted.split('"').join('""')
  /**
   * Excel accepts \n and \r in strings, but some other CSV parsers do not
   * Uncomment the next two lines to escape new lines
   */
  // .split('\n').join('\\n')
  // .split('\r').join('\\r')

  return `"${formatted}"`
}
function isActiveButton(route) {
      return currentRoute.value === route;
    }

export default {

  name: 'DetailsPage',
  // props: {
  //   // Aquí recibes el parámetro del ID del registro de la URL
  //   id: {
  //     type: String,
  //     required: true,
  //   },
  // },

  data() {
    return {
      // Variables para almacenar los datos del registro
      // Puedes cargar los datos aquí usando la API en el método 'created'
    };
  },

  methods: {
    loadData() {
      // Llama a la API para obtener los detalles del registro usando this.id
      // Actualiza los datos del registro en las variables de data
    },
  },

  components: {
  },
  setup () {
    const router = useRouter(); // Agrega esta línea para obtener el enrutador
    const data = ref([]);
    const $q = useQuasar()
    const selectedBeca = ref(null);
    const becas = ref([]);
    const carreras = ref([]);
    const areas = ref([]);
    const grados = ref([]);
    const generos = ref([]);
    const selectedCarrera = ref(null);
    const selectedArea = ref(null);
    const selectedGrado = ref(null);
    const selectedGenero = ref(null);

    const isBecaDropdownOpen = ref(false);
    const isCarreraDropdownOpen = ref(false);
    const isAreaDropdownOpen = ref(false);
    const isGradoDropdownOpen = ref(false);
    const isGeneroDropdownOpen = ref(false);


    const filteredData = computed(() => {
      return data.value.filter((item) => {
        const filterByBeca = !selectedBeca.value || item.beca === selectedBeca.value;
        const filterByCarrera = !selectedCarrera.value || item.carrera === selectedCarrera.value;
        const filterByArea = !selectedArea.value || item.area === selectedArea.value;
        const filterByGrado = !selectedGrado.value || item.grado === selectedGrado.value;
        const filterByGenero = !selectedGenero.value || item.genero === selectedGenero.value;

        return filterByBeca && filterByCarrera && filterByArea && filterByGrado && filterByGenero;
      });
    });


    const idsolicitud = computed(() => {
      // Aquí obtenemos el 'id' del registro desde el enrutador
      return router.currentRoute.value.params.idsolicitud;
    });



    function loadData() {
      // Aquí llamas a la API para obtener los detalles del registro utilizando el 'id'
      axios
        .get(`http://127.0.0.1:3000/api/solicitud/${router.currentRoute.value.params.idsolicitud}`)
        .then((response) => {
          data.value = response.data; // Actualiza los datos del registro en la variable 'data'
        })
        .catch((error) => {
          console.error('Error al obtener los detalles del registro:', error);
        });
    }

    // Realizar una solicitud al servidor para obtener la lista de becas
    onMounted(() => {
      axios.get('http://127.0.0.1:3000/api/becas/all')
        .then(response => {
          becas.value = response.data;
        })
        .catch(error => {
          console.error('Error al obtener las becas:', error);
        });
    });

    onMounted(() => {
      axios.get('http://127.0.0.1:3000/api/carrera')
        .then(response => {
          carreras.value = response.data;
        })
        .catch(error => {
          console.error('Error al obtener las carreras:', error);
        });
    });

    onMounted(() => {
      axios.get('http://127.0.0.1:3000/api/area')
        .then(response => {
          areas.value = response.data;
        })
        .catch(error => {
          console.error('Error al obtener las areas:', error);
        });
    });

    onMounted(() => {
      axios.get('http://127.0.0.1:3000/api/grado')
        .then(response => {
          grados.value = response.data;
        })
        .catch(error => {
          console.error('Error al obtener las grados:', error);
        });
    });

    onMounted(() => {
      axios.get('http://127.0.0.1:3000/api/genero')
        .then(response => {
          generos.value = response.data;
        })
        .catch(error => {
          console.error('Error al obtener las generos:', error);
        });
    });

    axios.get('http://127.0.0.1:3000/api/columns/aprovadas')
      .then(response => {
        data.value = response.data;
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
    });


    function onItemClick(selectedItem, dropdownType) {
      switch (dropdownType) {
        case 'beca':
          selectedBeca.value = selectedItem;
          break;
        case 'carrera':
          selectedCarrera.value = selectedItem;
          break;
        case 'area':
          selectedArea.value = selectedItem;
          break;
        case 'grado':
          selectedGrado.value = selectedItem;
          break;
        case 'genero':
          selectedGenero.value = selectedItem;
          break;
        default:
          break;
      }
      isBecaDropdownOpen.value = false;
      isCarreraDropdownOpen.value = false;
      isAreaDropdownOpen.value = false;
      isGradoDropdownOpen.value = false;
      isGeneroDropdownOpen.value = false;
    }

    return {
      columns,
      data,
      selectedBeca,
      filteredData,
      onItemClick,
      becas,
      carreras,
      areas,
      grados,
      generos,
      isBecaDropdownOpen,
      isCarreraDropdownOpen,
      isAreaDropdownOpen,
      isGradoDropdownOpen,
      isGeneroDropdownOpen,

      exportTable () {
        // naive encoding to csv format
        const content = [columns.map(col => wrapCsvValue(col.label))].concat(
          data.value.map(row => columns.map(col => wrapCsvValue(
            typeof col.field === 'function'
              ? col.field(row)
              : row[ col.field === void 0 ? col.name : col.field ],
            col.format,
            row
          )).join(','))
        ).join('\r\n')

        const status = exportFile(
          'table-export.csv',
          content,
          'text/csv'
        )

        if (status !== true) {
          $q.notify({
            message: 'Browser denied file download...',
            color: 'negative',
            icon: 'warning'
          })
        }
      }
    }
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
.botonesfilt{
  font-size: 1.2em;
  color:#1ab192;
  text-transform: uppercase;
  margin-left: 20px;
}
</style>
