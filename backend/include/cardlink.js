document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.card')[0].addEventListener('click', function () {
        window.location.href = 'personales';
    });

    // Redirigir al hacer clic en el segundo .tuto_card (index 1)
    document.querySelectorAll('.card')[1].addEventListener('click', function () {
        window.location.href = 'academicos';
    });

    // Redirigir al hacer clic en el tercer .tuto_card (index 2)
    document.querySelectorAll('.card')[2].addEventListener('click', function () {
        window.location.href = 'economicos';
    });

    // Redirigir al hacer clic en el cuarto .tuto_card (index 3)
    document.querySelectorAll('.card')[3].addEventListener('click', function () {
        window.location.href = 'salud';
    });
})