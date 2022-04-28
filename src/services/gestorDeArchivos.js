import fs from 'fs'

const nuevoTexto = fs.appendFileSync('./src/resources/nuevoTexto.txt', 'Nuevo texto\n')

console.log(nuevoTexto);