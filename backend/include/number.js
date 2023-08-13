function formatDecimalValues() {
    var inputElements = document.querySelectorAll('.decimal-input');

    for (var i = 0; i < inputElements.length; i++) {
      var inputValue = parseFloat(inputElements[i].value);
      if (!isNaN(inputValue)) {
        inputElements[i].value = inputValue.toFixed(1);
      }
    }
  }

  // Ejecutar la función de formato al cargar la página
  window.onload = formatDecimalValues;