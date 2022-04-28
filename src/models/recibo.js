const recibo = {
    recibos: [
        { id: 1, numero: '00000002', importe: 1000, cliente: 'R00001' },
        { id: 2, numero: '00000003', importe: 3000, cliente: 'C00002' },
        { id: 3, numero: '00000004', importe: 2000, cliente: 'R00002' },
        { id: 4, numero: '00000005', importe: 8000, cliente: 'C00001' },
    ],

    // Recorrer e imprimir en terminal con el método foreach, mostrando cliente e importe
    recorrerArray() {
        this.recibos.forEach(e => console.log(e.cliente, e.importe))
    },

    // Ordenar por importe utilizando sort, mostrar el resultado en terminal
    ordenarXImporte() {
        return this.recibos.sort((a, b) => a.importe - b.importe)
    },

    // Nuevo array con clientes que empizan con letra 'R', usando la función filter
    clientesEmpiezanConR() {
        return this.recibos.filter(rec => {
            if (rec.cliente[0] == 'R') { console.log(rec); }
        })
    },

    // Nuevo array con la misma estructura de Recibos, pero aumentando un 30% el importe
    aumentoDeImporte30Porc() {
        return this.recibos.map(rec => {
            return {
                id: rec.id,
                numero: rec.numero,
                importe: rec.importe * 1.3,
                cliente: rec.cliente
            }
        })
    }
}

export { recibo }