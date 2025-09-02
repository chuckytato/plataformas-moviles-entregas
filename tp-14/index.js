  let contactos = [
            {
                nombre: 'Juan',
                apellido: 'Perez',
                telefono: '123456789',
                favorito: false
            },
        ];
        let criterioOrden = "nombre"; 
        let mostrarSoloFavoritos = false;
        document.querySelector('#solo-favoritos').addEventListener('change', (e) => {
            mostrarSoloFavoritos = e.target.checked;
            mostrarListado();
        });
        /**
         * agregarContacto()
         * esta función se va a llamar cuando el usuario envía el formulario con el nuevo contacto para agregar.
         */
        function agregarContacto(nombre, apellido, telefono) {
            contactos.push({ nombre, apellido, telefono, favorito: false });
            mostrarListado();
        }

        /**
         * mostrarListado()
         * esta función se encarga de mostrar en el DOM la lista de todos los contactos guardados en la variable global contactos.
         */
        function mostrarListado() {
            const listaContactos = document.querySelector('#lista-contactos');
            listaContactos.innerHTML = '';
            let lista = contactos;
                if (mostrarSoloFavoritos) {
                    lista = lista.filter(c => c.favorito);
                 }
            lista.sort((a, b) => a[criterioOrden].localeCompare(b[criterioOrden]));
            lista.forEach((contacto) => {   
                const li = document.createElement('li');
                 if (criterioOrden === "nombre") {
                 li.textContent = `${contacto.nombre} ${contacto.apellido} - ${contacto.telefono || 'Sin teléfono'}`;
                 }else{
                  li.textContent = `${contacto.apellido} ${contacto.nombre} - ${contacto.telefono || 'Sin teléfono'}`;
                 }

            const botonFavorito = document.createElement('button');
            botonFavorito.textContent = contacto.favorito ? "⭐" : "☆"; 
            botonFavorito.classList.add("btn", "btn-sm", "btn-outline-warning", "ms-2");

            botonFavorito.addEventListener('click', () => {
            contacto.favorito = !contacto.favorito;
            mostrarListado(); 
              });

                 li.appendChild(botonFavorito);
                listaContactos.appendChild(li);
            });
        }
        document.querySelector('#ordenar-por').addEventListener('change', (e) => {
    criterioOrden = e.target.value; 
    mostrarListado();
});

        function handlerFormulario(e) {
            e.preventDefault();
            const inputNombre = e.target.querySelector('#input-nombre');
            const inputApellido = e.target.querySelector('#input-apellido');
            const inputTelefono = e.target.querySelector('#input-telefono');

            const nombre = inputNombre.value;
            const apellido = inputApellido.value;
            const telefono = inputTelefono.value;

            inputNombre.value = "";
            inputApellido.value = "";
            inputTelefono.value = "";

            agregarContacto(nombre, apellido, telefono);
        }
        mostrarListado();
        document.querySelector('form').addEventListener('submit', handlerFormulario);
    