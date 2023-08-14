const inputaca1 = document.getElementById("inputaca1");
const inputaca6 = document.getElementById("inputaca6");
const inputaca8 = document.getElementById("inputaca8");
const input01 = document.getElementById('input01');
const input7 = document.getElementById('input7');
const inputaca01Row = document.getElementById("inputaca01Row");
const inputaca7Row = document.getElementById("inputaca7Row");
const inputaca9Row = document.getElementById("inputaca9Row");
const inputaca10Row = document.getElementById("inputaca10Row");
const inputaca11Row = document.getElementById("inputaca11Row");
const inputaca12Row = document.getElementById("inputaca12Row");
const form = document.getElementById("myForm");

// Agregar un event listener al select (input2)
function mostrarInputaca7Row() {
  if (inputaca6.value === 'si') {
    // Mostrar el tercer input y recorrer los demás
    inputaca7Row.style.display = 'grid'; // Mostrar el tercer input (por defecto estaba display: none;)
    input7.setAttribute('required', 'required'); // Agregar el atributo 'required' al campo input7
    form.appendChild(inputaca7Row); // Mover el tercer input al final del form
  } else {
    // Ocultar el tercer input y recorrer los demás
    inputaca7Row.style.display = 'none'; // Ocultar el tercer input
    input7.removeAttribute('required'); // Quitar el atributo 'required' del campo input7
    input7.value = ''; // Establecer el valor del input dentro de inputaca7Row a una cadena vacía
    form.insertBefore(inputaca7Row, form.childNodes[7]); // Mover el tercer input al lugar que corresponde (antes del input4)
  }
}

// El evento input del inputaca6
inputaca6.addEventListener('input', mostrarInputaca7Row);

// Llamar a la función al cargar la página
window.addEventListener('DOMContentLoaded', mostrarInputaca7Row);

function mostrarInputaca1Row() {
  if (inputaca1.value === 'Otra') {
    // Mostrar el tercer input y recorrer los demás
    inputaca01Row.style.display = 'grid'; // Mostrar el tercer input (por defecto estaba display: none;)
    input01.setAttribute('required', 'required'); // Agregar el atributo 'required' al campo input7
    form.appendChild(inputaca01Row); // Mover el tercer input al final del form
  } else {
    // Ocultar el tercer input y recorrer los demás
    inputaca01Row.style.display = 'none'; // Ocultar el tercer input
    input01.removeAttribute('required'); // Quitar el atributo 'required' del campo input7
    input01.value = ''; // Restablecer el valor del input a vacío

    // Actualizar las opciones del select para que aparezcan todas
    updateAreaOptions('');
  }
}

// El evento input del inputaca6
inputaca1.addEventListener('input', mostrarInputaca1Row);

// Llamar a la función al cargar la página
window.addEventListener('DOMContentLoaded', mostrarInputaca1Row);



function mostrarInputsSiguientes() {
    if (inputaca8.value === 'si') {
        // Mostrar los siguientes inputs
        inputaca9Row.style.display = 'grid';
        inputaca10Row.style.display = 'grid';
        inputaca11Row.style.display = 'grid';
        inputaca12Row.style.display = 'grid';
    } else {
        // Ocultar los siguientes inputs
        inputaca9Row.querySelector('input').value = '';
        inputaca10Row.querySelector('input').value = '';
        inputaca11Row.querySelector('input').value = '';
        inputaca12Row.querySelector('input').value = '';
        inputaca9Row.style.display = 'none';
        inputaca10Row.style.display = 'none';
        inputaca11Row.style.display = 'none';
        inputaca12Row.style.display = 'none';
    }
}

// El evento change de inputaca8
inputaca8.addEventListener('change', function() {
    mostrarInputsSiguientes(); // Llamar a la función para mostrar u ocultar los siguientes inputs cuando cambie el valor de inputaca8
});

// Llamar a la función al cargar la página
mostrarInputsSiguientes();
