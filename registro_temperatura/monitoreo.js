const myEmisor = require('./eventos')
const {monitorTemperature} = require('./logica')

const startMonitoring = (sampleCount, intervalMs = 1000) => {

    if (typeof sampleCount !== 'number' || typeof intervalMs !== 'number') {
        console.error('❌❌❌ ERROR: SOLO SE ADMITEN NUMEROS COMO ARGUMENTOS ❌❌❌')
        return
    }

    if (sampleCount <= 0) {
        console.error("❌ ERROR: La cantidad de muestras debe ser un número mayor a 0.");
        return;
    }

    let iteration = 0
    myEmisor.emit("start")

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