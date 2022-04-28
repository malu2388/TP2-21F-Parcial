console.log("index.js");
import { recibo } from './models/recibo.js';

setTimeout(() => {
    console.log("Luego de 7 segundos, le damos la bienvenida.");
    console.log('------FOREACH-----');
    recibo.recorrerArray();
    console.log('------SORT POR IMPORTE-----');
    console.log(recibo.ordenarXImporte());
    console.log('------FILTER CLIENTES R-----');
    console.log(recibo.clientesEmpiezanConR());
    console.log('------AUMENTO 30% IMPORTES-----');
    console.log(recibo.aumentoDeImporte30Porc());
}, 7000);

/*
CONSIGNAS PRIMER PARCIAL
Crear un proyecto node ( 1 punto ).
Crear carpetas src y test, uso de módulos (1 punto).
Configurar scripts, instalar nodemon ( 1 punto ).
Recorrer e imprimir en terminal con el método foreach, mostrando cliente e importe
(1punto).
Ordenar por importe utilizando sort, mostrar el resultado en terminal ( 1 punto )
Nuevo array con clientes que empizan con letra 'R', usando la función filter, mostrar el resultado en terminal (1 punto).
Nuevo array con la misma estructura de aRecibos, pero aumentando un 30% el importe, mostrar el resultado en terminal (1 punto) .
Crear un mensaje con timer de 7 seg al comienzo del código ( 1 punto )
Crear un archivo en forma sincrónica, agregar al archivo anterior la frase "nuevo texto" ( 1 punto )
Crear un repositorio en github y enviar el link por correo a manuel.caceres@ort.edu.ar ( 1 punto )
*/