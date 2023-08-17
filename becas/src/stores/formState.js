import { reactive } from 'vue';

const formState = reactive({
  nombre: null,
  matricula: null,
  curp: null,
  telefono: null,
  correoinstitucional: null,
  correotutor: null,
  beca: null,
  carrera: null,
  area: null,
  grado: null,
  cuatrimestre: null,
  grupo: null,
  genero: null,
  accept: false,
});

export default formState;

