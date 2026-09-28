
let listaPromedios = []; //Crea un arreglo donde se iran guardando los promedios de los alumnos 



function calcularPromedio() { //Inici la funcion de Calcular promedio 

    // Obtener los datos del formulario

    let nombre = document.getElementById("nombre").value; 

    let edad = document.getElementById("edad").value; 

    let calificacion1 = parseFloat(
        document.getElementById("calificacion1").value /*Lee la primera calificación y la convierte de texto a número decimal. */
    );

    let calificacion2 = parseFloat(
        document.getElementById("calificacion2").value //Lee la segunda calificación y la convierte a número decimal.
    );

    let calificacion3 = parseFloat(
        document.getElementById("calificacion3").value //Lee la tercera calificación y la convierte a número decimal.
    );

    let calificacion4 = parseFloat(
        document.getElementById("calificacion4").value //Lee la cuarta calificación y la convierte a número decimal.
    );


    // Validar que los datos estén completos

    if (
        nombre === "" ||
        edad === "" ||
        isNaN(calificacion1) ||
        isNaN(calificacion2) ||
        isNaN(calificacion3) ||
        isNaN(calificacion4)
    ) {

        document.getElementById("resultado").innerHTML =
            "Por favor, completa todos los datos.";

        return;
    }


    // Calcular promedio

    let promedio =
        (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;


    // Determinar la clasificación según el promedio

    let clasificacion = "";

    if (promedio >= 9) {
        clasificacion = "EXCELENTE";
    } else if (promedio >= 8) {
        clasificacion = "MUY BIEN";
    } else if (promedio >= 7) {
        clasificacion = "BIEN";
    } else if (promedio >= 6.5) {
        clasificacion = "PIENSA EN CONTINUAR";
    } else if (promedio >= 6) {
        clasificacion = "DATE DE BAJA";
    } else {
        clasificacion = "VETE A TURISMO";
    }


    // Mostrar resultado

    document.getElementById("resultado").innerHTML =
        "<strong>Alumno:</strong> " + nombre +
        "<br><strong>Edad:</strong> " + edad +
        "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
        "<br><br>" + clasificacion;

}


function agregarAlumno() { //Inicia la función que se ejecuta al dar clic en agregar.

    // Obtener los datos del formulario

    let nombre = document.getElementById("nombre").value;

    let edad = document.getElementById("edad").value;

    let calificacion1 = parseFloat(
        document.getElementById("calificacion1").value
    );

    let calificacion2 = parseFloat(
        document.getElementById("calificacion2").value
    );

    let calificacion3 = parseFloat(
        document.getElementById("calificacion3").value
    );

    let calificacion4 = parseFloat(
        document.getElementById("calificacion4").value
    );


    // Validar que los datos estén completos

    if (
        nombre === "" ||
        edad === "" ||
        isNaN(calificacion1) ||
        isNaN(calificacion2) ||
        isNaN(calificacion3) ||
        isNaN(calificacion4)
    ) {

        document.getElementById("resultado").innerHTML =
            "Por favor, completa todos los datos.";

        return;
    }


    // Calcular promedio del alumno

    let promedio =
        (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;


    // Determinar la clasificación según el promedio

    let clasificacion = "";

    if (promedio >= 9) {
        clasificacion = "EXCELENTE";
    } else if (promedio >= 8) {
        clasificacion = "MUY BIEN";
    } else if (promedio >= 7) {
        clasificacion = "BIEN";
    } else if (promedio >= 6.5) {
        clasificacion = "PIENSA EN CONTINUAR";
    } else if (promedio >= 6) {
        clasificacion = "DATE DE BAJA";
    } else {
        clasificacion = "VETE A TURISMO";
    }


    // Agregar el promedio del alumno a la lista general

    listaPromedios.push(promedio);


    // Calcular el promedio general de todos los alumnos agregados

    let suma = 0;

    for (let i = 0; i < listaPromedios.length; i++) {
        suma = suma + listaPromedios[i];
    }

    let promedioGeneral = suma / listaPromedios.length;


    // Mostrar resultado del alumno y el promedio general acumulado

    document.getElementById("resultado").innerHTML =
        "<strong>Alumno:</strong> " + nombre +
        "<br><strong>Edad:</strong> " + edad +
        "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
        "<br><br>" + clasificacion +
        "<br><br><strong>Alumnos agregados:</strong> " + listaPromedios.length +
        "<br><strong>Promedio general del grupo:</strong> " + promedioGeneral.toFixed(2);

}


function limpiarFormulario() { //Inicia la función que se ejecuta al dar clic en limpiar.

    document.getElementById("nombre").value = ""; //Vacía la primera calificación.
    document.getElementById("edad").value = "";//Vacía la segunda calificación.
    document.getElementById("calificacion1").value = ""; //Vacía la tercer calificación.
    document.getElementById("calificacion2").value = ""; //Vacía la cuarta calificación.
    document.getElementById("calificacion3").value = ""; //Vacía la quinta calificación.
    document.getElementById("calificacion4").value = ""; //Vacía la sexta calificación.

    document.getElementById("resultado").innerHTML = ""; //Borra cualquier texto o resultado visible en pantalla.

}