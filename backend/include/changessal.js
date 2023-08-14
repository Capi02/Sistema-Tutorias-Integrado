const inputsal1 = document.getElementById('inputsal1');
const inputsal02 = document.getElementById('inputsal02');
const inputsal3 = document.getElementById('inputsal3');
const inputsal5 = document.getElementById('inputsal5');
const inputsal7 = document.getElementById('inputsal7');
const inputsal9 = document.getElementById('inputsal9');
const inputsal11 = document.getElementById('inputsal11');
const inputsal2Row = document.getElementById('inputsal2Row');
const input02 = document.getElementById('input02');
const inputsal4Row = document.getElementById('inputsal4Row');
const inputsal6Row = document.getElementById('inputsal6Row');
const inputsal8Row = document.getElementById('inputsal8Row');
const inputsal10Row = document.getElementById('inputsal10Row');
const inputsal12Row = document.getElementById('inputsal12Row');
const input2 = document.getElementById('input2');
const input4 = document.getElementById('input4');
const input6 = document.getElementById('input6');
const input8 = document.getElementById('input8');
const input10 = document.getElementById('input10');
const input12 = document.getElementById('input12');

function mostrarInputsal02Row() {
    if (input2.value === 'Otras') {
      // Mostrar el tercer input y recorrer los demás
      inputsal02Row.style.display = 'grid'; // Mostrar el tercer input (por defecto estaba display: none;)
      input02.setAttribute('required', 'required'); // Agregar el atributo 'required' al campo input7
      form.appendChild(inputaca01Row); // Mover el tercer input al final del form
    } else {
      // Ocultar el tercer input y recorrer los demás
      inputsal02Row.style.display = 'none'; // Ocultar el tercer input
      input02.removeAttribute('required'); // Quitar el atributo 'required' del campo input7
      input02.value = ''; // Restablecer el valor del input a vacío
  
      // Actualizar las opciones del select para que aparezcan todas
      updateAreaOptions('');
    }
  }

input2.addEventListener('change', mostrarInputsal02Row);
window.addEventListener('DOMContentLoaded', mostrarInputsal02Row);

function mostrarInputsal11Row() {
    if (inputsal11.value === 'si') {
        // Mostrar el tercer input y recorrer los demás
        inputsal12Row.style.display = 'grid'; // Mostrar el tercer input (por defecto estaba display: none;)
        input12.setAttribute('required', 'required');
        form.appendChild(inputsal12Row); // Mover el tercer input al final del form
    } else {
        // Ocultar el tercer input y recorrer los demás
        inputsal12Row.querySelector('select').value = '';
        inputsal12Row.style.display = 'none'; // Ocultar el tercer input
        input12.removeAttribute('required');
        form.insertBefore(inputsal12Row, form.childNodes[7]); // Mover el tercer input al lugar que corresponde (antes del input4)
    }
}

// El evento change del inputsal11
inputsal11.addEventListener('change', mostrarInputsal11Row);
window.addEventListener('DOMContentLoaded', mostrarInputsal11Row);

// Función para mostrar u ocultar el inputsal9Row
function mostrarInputsal9Row() {
    if (inputsal9.value === 'si') {
        // Mostrar el tercer input y recorrer los demás
        inputsal10Row.style.display = 'grid'; // Mostrar el tercer input (por defecto estaba display: none;)
        input10.setAttribute('required', 'required');
        form.appendChild(inputsal10Row); // Mover el tercer input al final del form
    } else {
        // Ocultar el tercer input y recorrer los demás
        inputsal10Row.querySelector('select').value = '';
        inputsal10Row.style.display = 'none'; // Ocultar el tercer input
        input10.removeAttribute('required'); 
        form.insertBefore(inputsal10Row, form.childNodes[7]); // Mover el tercer input al lugar que corresponde (antes del input4)
    }
}

// El evento change del inputsal9
inputsal9.addEventListener('change', mostrarInputsal9Row);
window.addEventListener('DOMContentLoaded', mostrarInputsal9Row);

// Función para mostrar u ocultar el inputsal8Row
function mostrarInputsal7Row() {
    if (inputsal7.value === 'si') {
        // Mostrar el tercer input y recorrer los demás
        inputsal8Row.style.display = 'grid'; // Mostrar el tercer input (por defecto estaba display: none;)
        input8.setAttribute('required', 'required');
        form.appendChild(inputsal8Row); // Mover el tercer input al final del form
    } else {
        // Ocultar el tercer input y recorrer los demás
        inputsal8Row.querySelector('input').value = '';
        inputsal8Row.style.display = 'none'; // Ocultar el tercer input
        input8.removeAttribute('required'); 
        form.insertBefore(inputsal8Row, form.childNodes[7]); // Mover el tercer input al lugar que corresponde (antes del input4)
    }
}

// El evento change del inputsal7
inputsal7.addEventListener('change', mostrarInputsal7Row);
window.addEventListener('DOMContentLoaded', mostrarInputsal7Row);

// Función para mostrar u ocultar el inputsal6Row
function mostrarInputsal5Row() {
    if (inputsal5.value === 'si') {
        // Mostrar el tercer input y recorrer los demás
        inputsal6Row.style.display = 'grid'; // Mostrar el tercer input (por defecto estaba display: none;)
        input6.setAttribute('required', 'required');
        form.appendChild(inputsal6Row); // Mover el tercer input al final del form
    } else {
        // Ocultar el tercer input y recorrer los demás
        inputsal6Row.querySelector('input').value = '';
        inputsal6Row.style.display = 'none'; // Ocultar el tercer input
        input6.removeAttribute('required'); 
        form.insertBefore(inputsal6Row, form.childNodes[7]); // Mover el tercer input al lugar que corresponde (antes del input4)
    }
}

// El evento change del inputsal5
inputsal5.addEventListener('change', mostrarInputsal5Row);
window.addEventListener('DOMContentLoaded', mostrarInputsal5Row);

// Función para mostrar u ocultar el inputsal4Row
function mostrarInputsal3Row() {
    if (inputsal3.value === 'si') {
        // Mostrar el tercer input y recorrer los demás
        inputsal4Row.style.display = 'grid'; // Mostrar el tercer input (por defecto estaba display: none;)
        input4.setAttribute('required', 'required');
        form.appendChild(inputsal4Row); // Mover el tercer input al final del form
    } else {
        // Ocultar el tercer input y recorrer los demás
        inputsal4Row.querySelector('input').value = '';
        inputsal4Row.style.display = 'none'; // Ocultar el tercer input
        input4.removeAttribute('required'); 
        form.insertBefore(inputsal4Row, form.childNodes[7]); // Mover el tercer input al lugar que corresponde (antes del input4)
    }
}

// El evento change del inputsal3
inputsal3.addEventListener('change', mostrarInputsal3Row);
window.addEventListener('DOMContentLoaded', mostrarInputsal3Row);

// Función para mostrar u ocultar el inputsal2Row
function mostrarInputsal2Row() {
    const inputsal2Row = document.getElementById('inputsal2Row');
    if (inputsal1.value === 'si') {
        // Mostrar el tercer input y recorrer los demás
        inputsal2Row.style.display = 'grid'; // Mostrar el tercer input (por defecto estaba display: none;)
        input2.setAttribute('required', 'required');
        form.appendChild(inputsal2Row); // Mover el tercer input al final del form
    } else {
        // Ocultar el tercer input y recorrer los demás
        inputsal2Row.style.display = 'none'; // Ocultar el tercer input
        input2.removeAttribute('required'); 
        inputsal2Row.querySelector('select').value = ''; // Establecer el valor del input dentro de inputsal2Row a una cadena vacía
        form.insertBefore(inputsal2Row, form.childNodes[7]); // Mover el tercer input al lugar que corresponde (antes del input4)
    }
}

// El evento change del inputsal1
inputsal1.addEventListener('change', mostrarInputsal2Row);
window.addEventListener('DOMContentLoaded', mostrarInputsal2Row);