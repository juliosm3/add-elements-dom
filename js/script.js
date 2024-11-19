 // Aquí tu código
const agregar = document.getElementById('agregar');
const lista = document.getElementById('lista');

agregar.addEventListener('click', () {
    const newItem = prompt('Ingrese un nuevo elemento para la lista');
    if (newItem) {
        const listItem = document.createElement('li');
        listItem.textContent = newItem;
        lista.appendChild(listItem);
    } else {
        alert('Por favor, ingrese un valor válido.');
    }
})