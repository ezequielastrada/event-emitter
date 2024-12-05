const myEmisor = require('./eventos')
const {monitorTemperature} = require('./logica')

const startMonitoring = (sampleCount, intervalMs = 1000) => {

    // Comprobacion de argumentos correctos
    if (typeof sampleCount !== 'number' || typeof intervalMs !== 'number') {
        console.error('❌❌❌ ERROR: SOLO SE ADMITEN NUMEROS COMO ARGUMENTOS ❌❌❌')
        return
    }
    if (sampleCount <= 0) {
        console.error("❌ ERROR: La cantidad de muestras debe ser un número mayor a 0.");
        return;
    }

    // Inicio de monitoreo
    myEmisor.emit("start")

    // Monitoreo de temperaturas mediante setInterval()
    let iteration = 0
    const intervalId = setInterval(()=>{
        if (iteration == sampleCount) {
            clearInterval(intervalId)
            myEmisor.emit("end")
        } else {
            monitorTemperature(iteration + 1)
            iteration++
        }
    },intervalMs)
}

module.exports = startMonitoring;