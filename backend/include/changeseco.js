const inputeco5 = document.getElementById("inputeco5");
const inputeco9 = document.getElementById("inputeco9");
const inputeco11 = document.getElementById("inputeco11");
const inputeco14 = document.getElementById("inputeco14");
const inputeco6Row = document.getElementById("inputeco6Row");
const inputeco7Row = document.getElementById("inputeco7Row");
const inputeco10Row = document.getElementById("inputeco10Row");
const inputeco12Row = document.getElementById("inputeco12Row");
const inputeco15Row = document.getElementById("inputeco15Row");
const inputeco16Row = document.getElementById("inputeco16Row");
const input6 = document.getElementById('input6');
const input7 = document.getElementById('input7');
const input10 = document.getElementById('input10');
const input12 = document.getElementById('input12');
const input15 = document.getElementById('input15');
const input16 = document.getElementById('input16');

// Función para mostrar u ocultar el inputeco6Row

function mostrarInputeco6Row() {
  if (inputeco5.value === "si") {
    // Mostrar los siguientes inputs
    input6.setAttribute('required', 'required');
    input7.setAttribute('required', 'required');
    inputeco6Row.style.display = "grid";
    inputeco7Row.style.display = "grid";
  } else {
    // Ocultar los siguientes inputs
    input6.removeAttribute('required'); 
    input7.removeAttribute('required'); 
    inputeco6Row.querySelector('select').value = '';
    inputeco7Row.querySelector('input').value = '';
    inputeco6Row.style.display = "none";
    inputeco7Row.style.display = "none";
  }
}

// El evento change del inputeco14
inputeco5.addEventListener("change", mostrarInputeco6Row);

// Llamar a la función al cargar la página
window.addEventListener("DOMContentLoaded", mostrarInputeco6Row);

// Función para mostrar u ocultar el inputeco10Row
function mostrarInputeco10Row() {
  const inputeco10Row = document.getElementById("inputeco10Row");
  if (inputeco9.value === "si") {
    // Mostrar el tercer input y recorrer los demás
    inputeco10Row.style.display = "grid"; // Mostrar el tercer input (por defecto estaba display: none;)
    input10.setAttribute('required', 'required');
    form.appendChild(inputeco10Row); // Mover el tercer input al final del form
  } else {
    // Ocultar el tercer input y recorrer los demás
    inputeco10Row.querySelector('input').value = '';
    input10.removeAttribute('required'); 
    inputeco10Row.style.display = "none"; // Ocultar el tercer input
    form.insertBefore(inputeco10Row, form.childNodes[7]); // Mover el tercer input al lugar que corresponde (antes del input4)
  }
}

window.addEventListener("DOMContentLoaded", mostrarInputeco10Row);

// El evento change del inputeco9
inputeco9.addEventListener("change", mostrarInputeco10Row);

// Función para mostrar u ocultar el inputeco12Row
function mostrarInputeco12Row() {
  const inputeco12Row = document.getElementById("inputeco12Row");
  if (inputeco11.value === "si") {
    // Mostrar el tercer input y recorrer los demás
    inputeco12Row.style.display = "grid"; // Mostrar el tercer input (por defecto estaba display: none;)
    input12.setAttribute('required', 'required');
    form.appendChild(inputeco12Row); // Mover el tercer input al final del form
  } else {
    // Ocultar el tercer input y recorrer los demás
    inputeco12Row.querySelector('input').value = '';
    input12.removeAttribute('required'); 
    inputeco12Row.style.display = "none"; // Ocultar el tercer input
    form.insertBefore(inputeco12Row, form.childNodes[7]); // Mover el tercer input al lugar que corresponde (antes del input4)
  }
}

window.addEventListener("DOMContentLoaded", mostrarInputeco12Row);

// El evento change del inputeco11
inputeco11.addEventListener("change", mostrarInputeco12Row);

function mostrarInputeco14() {
  if (inputeco14.value === "si") {
    // Mostrar los siguientes inputs
    input15.setAttribute('required', 'required');
    input16.setAttribute('required', 'required');
    inputeco15Row.style.display = "grid";
    inputeco16Row.style.display = "grid";
  } else {
    // Ocultar los siguientes inputs
    input15.removeAttribute('required'); 
    input16.removeAttribute('required'); 
    inputeco15Row.querySelector('input').value = '';
    inputeco16Row.querySelector('input').value = '';
    inputeco15Row.style.display = "none";
    inputeco16Row.style.display = "none";
  }
}

// El evento change del inputeco14
inputeco14.addEventListener("change", mostrarInputeco14);

// Llamar a la función al cargar la página
window.addEventListener("DOMContentLoaded", mostrarInputeco14);

document.addEventListener('DOMContentLoaded', function () {
  const sexoSelect = document.getElementById('inputper12');
  const embarazoRow = document.getElementById('inputeco13Row');
  const embarazoSelect = document.getElementById('input13');

  function handleSexoChange(event) {
    const selectedOption = event.target.value;
    if (selectedOption === 'Femenino') {
      embarazoRow.style.display = 'grid'; // Mostrar el campo de embarazo
      embarazoSelect.setAttribute('required', ''); // Hacer el campo de embarazo requerido
    } else {
      embarazoRow.style.display = 'none'; // Ocultar el campo de embarazo
      embarazoSelect.removeAttribute('required'); // Quitar el atributo required
      embarazoSelect.value = ''; // Limpiar la selección del campo de embarazo
    }
  }

  // Asignar el evento onChange al campo de sexo
  sexoSelect.addEventListener('change', handleSexoChange);

  // Llamar a la función inicial para establecer la visibilidad correcta en la carga de la página
  handleSexoChange({ target: sexoSelect });
});