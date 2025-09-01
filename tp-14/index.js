//Implementar las siguientes funcionalidades:

// Agregar contactos a la lista.
// Ordenar el listado de contactos alfabéticamente.
// Agregar opción de ordenar por nombre o por apellido.
// Agregar un nuevo campo teléfono al formulario y a la lista de contactos.
// Agregar la opción de marcar como favorito un contacto.
// Agregar opción para ver sólo los contactos favoritos.
   let contactos = [
    { nombre: 'Juan', apellido: 'Perez', telefono: '123456789', favorito: false },
];

// Mostrar listado inicial
mostrarListado();

function agregarContacto(nombre, apellido, telefono) {
    contactos.push({ nombre, apellido, telefono, favorito: false });
    mostrarListado();
}

function mostrarListado() {
    const ul = document.querySelector('#lista-contactos');
    ul.innerHTML = '';
    const soloFavoritos = document.querySelector('#flexCheckDefault').checked;
    const lista = soloFavoritos ? contactos.filter(c => c.favorito) : contactos;

    lista.forEach((contacto, index) => {
        const li = document.createElement('li');
        li.classList.add('mb-2');
        li.innerHTML = `
            <strong>${contacto.nombre} ${contacto.apellido}</strong> - ${contacto.telefono} 
            <button class="btn btn-sm btn-warning ms-2">${contacto.favorito ? '★' : '☆'}</button>
        `;
        li.querySelector('button').addEventListener('click', () => agregarFavorito(index));
        ul.appendChild(li);
    });
}

function agregarFavorito(index) {
    contactos[index].favorito = !contactos[index].favorito;
    mostrarListado();
}

function ordenarAlfabeticamente() {
    const criterio = document.querySelector('select').value;
    contactos.sort((a, b) => a[criterio].localeCompare(b[criterio]));
    mostrarListado();
}

// Eventos
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.querySelector('#input-nombre').value.trim();
    const apellido = document.querySelector('#input-apellido').value.trim();
    const telefono = document.querySelector('#input-telefono').value.trim();
    if(nombre && apellido && telefono) {
        agregarContacto(nombre, apellido, telefono);
        e.target.reset();
    }
});

document.querySelector('#flexCheckDefault').addEventListener('change', mostrarListado);