    //Implementar las funciones de estilo que ya están definidas en el HTML inicial: negrita, cursiva y subrayado.
    //Añadir un nuevo botón que aplique un estilo adicional al texto (por ejemplo, cambiar el color del texto).
    //Incluir un campo de entrada (input) que permita al usuario editar el texto mostrado.
    //Mostrar el estado actual de cada estilo en los botones correspondientes. Esto puede hacerse cambiando el color o el texto del botón para indicar si el estilo está activado o no.
    //Agregar una funcionalidad para modificar el tamaño del texto.
     /**
         * funcionNegrita()
         * Esta función se ejecuta cuando el usuario selecciona la opción Bold (negrita).
         */
        function funcionNegrita() {
           const texto = document.getElementById('texto');
           // Verifica si el texto ya está en negrita   
           if (texto.style.fontWeight === 'bold') {
               // Si ya está en negrita, lo quita
               texto.style.fontWeight = 'normal';
           } else {
               // Si no está en negrita, lo pone
               texto.style.fontWeight = 'bold';
           }
        }

        /**
         * funcionCursiva()
         * Esta función se ejecuta cuando el usuario selecciona la opción Italic (cursiva).
         */
        function funcionCursiva() {
            const texto = document.getElementById('texto');
            // Verifica si el texto ya está en cursiva
            if (texto.style.fontStyle === 'italic') {
                // Si ya está en cursiva, lo quita
                texto.style.fontStyle = 'normal';
            } else {
                // Si no está en cursiva, lo pone
                texto.style.fontStyle = 'italic';
            }
        }

        /**
         * funcionSubrayado()
         * Esta función se ejecuta cuando el usuario selecciona la opción Underline (subrayado).
         */
        function funcionSubrayado() {
            const texto = document.getElementById('texto');
            // Verifica si el texto ya está subrayado   
            if (texto.style.textDecoration === 'underline') {
                // Si ya está subrayado, lo quita
                texto.style.textDecoration = 'none';
            } else {
                // Si no está subrayado, lo pone
                texto.style.textDecoration = 'underline';
            }
        }
        function cambiarTexto() {
            const texto = document.getElementById('texto');
            const nuevoTexto = document.getElementById('editar').value;
            // Cambia el contenido del párrafo con el nuevo texto ingresado
            texto.textContent = nuevoTexto;
        }
        function cambiarColorTexto() {
            const texto = document.getElementById('texto');
            // Cambia el color del texto a un color aleatorio
            texto.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
        }
        function agrandarTexto() {
            const texto = document.getElementById('texto');
            // Aumenta el tamaño del texto en 2px
            const estiloActual = window.getComputedStyle(texto, null).getPropertyValue('font-size');
            const tamañoActual = parseFloat(estiloActual);
            texto.style.fontSize = (tamañoActual + 2) + 'px';
        }
        function achicarTexto() {
            const texto = document.getElementById('texto');
            // Disminuye el tamaño del texto en 2px
            const estiloActual = window.getComputedStyle(texto, null).getPropertyValue('font-size');
            const tamañoActual = parseFloat(estiloActual);
            texto.style.fontSize = (tamañoActual - 2) + 'px';
        }
        function noTocar() {
            alert("Te dije que no tocaras ese botón");
            const texto = document.getElementById('texto');
            texto.style.color = 'red';
            texto.style.fontWeight = 'bold';
            texto.style.fontStyle = 'italic';
            texto.style.textDecoration = 'underline';
            texto.textContent = "¡No tenias que tocarlo!";
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        }
         /**
         * handlerBoton(e)
         * Esta función maneja el evento de clic en los botones de formato.
         */
        function handlerBoton(e) {
            // Obtiene el valor del atributo "data-formato" del botón que disparó el evento
            const funcionBoton = e.target.dataset.formato;
            switch (funcionBoton) {
                case 'negrita':
                    funcionNegrita();
                    break;
                case 'cursiva':
                    funcionCursiva();
                    break;
                case 'subrayado':
                    funcionSubrayado();
                    break;
                case 'color':
                    cambiarColorTexto();
                    break;
                case 'grande':
                    agrandarTexto();
                    break;
                case 'achicar':
                    achicarTexto();
                    break;
                case 'troll':
                    noTocar();
                    break;
            }
        }
        document.querySelectorAll('button.btn').forEach(e => e.addEventListener('click', handlerBoton));
