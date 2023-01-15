let isActive = true;

const toggleButton = document.getElementById('toggle-button');
const status = document.getElementById('status');

//Función para activar o desactivar la extensión
function toggleExtension() {
    isActive = !isActive;
    if (isActive) {
        status.innerHTML = '<p>La extensión está activa.</p>';
        toggleButton.innerHTML = 'Desactivar';
        //Aquí se activaria la funcionalidad de la extensión
    } else {
        status.innerHTML = '<p>La extensión está desactivada.</p>';
        toggleButton.innerHTML = 'Activar';
        //Aquí se desactivaria la funcionalidad de la extensión
    }
}

// Asignar la función al evento click del botón
toggleButton.addEventListener('click', toggleExtension);
