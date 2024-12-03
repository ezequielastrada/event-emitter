const eventEmitter = require('./eventos')

const monitorTemperature = (iteration) => {

    const minTemp = -20; // Valor mínimo
    const maxTemp = 60;  // Valor máximo
    const temperature = Math.floor(Math.random() * (maxTemp - minTemp + 1)) + minTemp;
    
    if (temperature < 0 || temperature > 50){
        eventEmitter.emit("error", temperature, iteration)
    } else if (temperature <= 25){
        eventEmitter.emit('normal', temperature, iteration)
    } else if (temperature <= 30){
        eventEmitter.emit('warning', temperature, iteration)
    } else {
        eventEmitter.emit("critical", temperature, iteration)
    }
}

module.exports = {monitorTemperature};