const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

const eventActions = {
    start: (temperature, iteration, timestamp) => 
        console.log(`[${timestamp}] || ***** INICIO DE MONITOREO *****`),
    end: (temperature, iteration, timestamp) => 
        console.log(`[${timestamp}] || ***** FIN DE MONITOREO *****`),
    normal: (temperature, iteration, timestamp) =>
        console.log(`[${timestamp}] || ${iteration}: ✅ Temperatura normal: ${temperature}`),
    warning: (temperature, iteration, timestamp) =>
        console.log(`[${timestamp}] || ${iteration}: ⚠️  Advertencia: temperatura alta: ${temperature}`),
    critical: (temperature, iteration, timestamp) =>
        console.log(`[${timestamp}] || ${iteration}: 🔥 Peligro crítico: temperatura muy alta: ${temperature}`),
    error: (temperature, iteration, timestamp) =>
        console.log(`[${timestamp}] || ${iteration}: ❌ ERROR: Temperatura incorrecta: ${temperature}`),
};

Object.keys(eventActions).forEach((key) => {
    eventEmitter.on(key, (temperature, iteration) => {
        const timestamp = new Date().toISOString();
        eventActions[key](temperature, iteration, timestamp);
    });
});

module.exports = eventEmitter;