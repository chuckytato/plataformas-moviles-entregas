var listaPersonasEjemplo = [
    {
        "apellido": "Perez",
        "nombre": "Juan",
        "edad": 20,
        "documento": 12345
    },
    {
        "apellido": "Lopez",
        "nombre": "Luis",
        "edad": 20,
        "documento": 23456
    },
    {
        "apellido": "Zapata",
        "nombre": "Pablo",
        "edad": 10,
        "documento": 34567
    },
    {
        "apellido": "Acuña",
        "nombre": "Ana",
        "edad": 30,
        "documento": 45678
    },
];

/**
 * 01 - ordenarPorApellido
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`.
 * 
 * Retorna: 
 * - el mismo listado, ordenado alfabéticamente por el apellido de la persona 
 */
function ordenarPorApellido(listaDePersonas) {
    //retorno el listado ordenado por apellido usando sort
 return listaDePersonas.sort(function(a,b){
    //comparo los apellidos de las personas
    //si el apellido de a es menor que el de b, retorno -1 (a va antes que b)
    if (a.apellido < b.apellido) {
        return -1;
    } //si el apellido de a es mayor que el de b, retorno 1 (b va antes que a)
    if (a.apellido > b.apellido) {
        return 1;
    }
    //si son iguales, retorno 0 (no cambio el orden)
    return 0;
 })
}
console.log("ordenarPorApellido()", ordenarPorApellido(listaPersonasEjemplo));

/**
 * 02 - soloNombres
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una lista de strings, con sólo los nombres de las personas
 */
function soloNombres(listaDePersonas) {
    //retorno una lista de nombres, recorro cada elemento de la lista
    return listaDePersonas.map(function(persona) {
        //retorno el nombre de la persona
        return persona.nombre;
    });
}
console.log("soloNombres()", soloNombres(listaPersonasEjemplo));

/**
 * 03 - promedioEdades
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - un numero, con el cálculo del promedio de las edades
 */
function promedioEdades(listaDePersonas) {
    // filtro las personas que tienen edad definida
   listaDePersonas = listaDePersonas.filter(function(persona) {
        //retorno true si la persona tiene edad definida, false si no
        return persona.edad !== undefined;
    }   );
    //calculo el promedio de las edades recorriendo cada elemento de la lista , acumulando las edades
   let totalEdades = listaDePersonas.reduce(function(acumulador, persona) {     
        return acumulador + persona.edad; // recibo un acumulador y el elemento actual, y retorna el nuevo valor del acumulador
    }, 0);
    // retorno el promedio de las edades dividiendo el total de edades por la cantidad de personas
   return totalEdades / listaDePersonas.length;
}
console.log("promedioEdades()", promedioEdades(listaPersonasEjemplo));

/**
 * 04 - cumplirAños
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una nueva lista, donde la edad de cada persona se incrementa en 1.
 */
function cumplirAños(listaDePersonas) {
    //retorno una nueva lista usando map, donde cada persona tiene su edad incrementada en 1
    return listaDePersonas.map(function(persona) {
        return {
            // uso el operador spread para copiar las propiedades de la persona y incremento la edad en 1
            ...persona,
            edad: persona.edad + 1
        };
    });
}
console.log("cumplirAños()", cumplirAños(listaPersonasEjemplo));

/**
 * 05 - soloMayoresDeEdad
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una lista, array, conteniendo solamente las personas con más de 18 años
 */
function soloMayoresDeEdad(listaDePersonas) {
    //retorno una lista filtrada, donde solo quedan las personas con edad mayor o igual a 18
    return listaDePersonas.filter(function(persona) { // filtro las personas
        return persona.edad >= 18;//retorno las personas mayores o iguales a 18
    });
}
console.log("soloMayoresDeEdad()", soloMayoresDeEdad(listaPersonasEjemplo));

/**
 * 06 - laPersonaMayor
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una objeto con la persona de mayor edad en todo el listado. En caso de que hayan 2 personas con la misma edad, se puede retornar la primera que aparezca en el listado.
 */
function laPersonaMayor(listaDePersonas) {
    //inicializo mayor con la lista de personas en la posición 0
  let mayor = listaDePersonas[0];
  //recorro la lista de personas
  for (let i = 0; i < listaDePersonas.length; i++) {
    //si la edad de la persona actual es mayor que la edad del mayor, actualizo mayor
    if (listaDePersonas[i].edad > mayor.edad) {
      mayor = listaDePersonas[i];
    }
  }
  //retorno el objeto con la persona de mayor edad
  return mayor;
}
console.log("laPersonaMayor()", laPersonaMayor(listaPersonasEjemplo));

/**
 * 07 - agregarHeladoFavorito
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`.
 * - `listaDeHelados`: una lista, array, con strings para gustos de helado.
 * 
 * Retorna: 
 * - una nueva lista, donde a cada persona se le agrega un campo `heladoFavorito` tomado de la lista de listaDeHelados. Si no hay más helados disponibles, se asigna "vainilla" por defecto.
 */
function agregarHeladoFavorito(listaDePersonas, listaDeHelados) {
    // uso map para recorrer cada persona y asignarle un helado favorito
    return listaDePersonas.map(function(persona, index) {
        return {
            // uso el operador spread para copiar las propiedades de la persona
            ...persona,
            // asigno el helado favorito de la lista de helados, o "vainilla" si no hay más helados
            heladoFavorito: listaDeHelados[index] || "vainilla"
        };
    });
}
console.log("agregarHeladoFavorito()", agregarHeladoFavorito(listaPersonasEjemplo, ["chocolate", "limon", "frutilla"]));
