const EventEmitter = require('events')

class EventManager extends EventEmitter {
    //CONSTRUCTOR //
    constructor() {
        super();
        this.subscriptions = new Map(); // { eventName: (Set of users) }
    }
    //---//
    //EVENT EMITTER ON//
    init(){
        this.on('log', (eventName, mensaje)=>{
            console.log(`'[LOG][${eventName}] : ${mensaje}'`)
        })
        this.on('error', (eventName, mensaje)=>{
            console.log(`'[ERROR][${eventName}] : ${mensaje}'`)
        })

        this.on('subscribe', (user, eventName)=>{
            console.log(`'[LOG][subscribe] : ${user} in ${eventName}'`)
        })
        this.on('unsubscribe', (user, eventName)=>{
            console.log(`'[LOG][unsubscribe] : ${user} in ${eventName}'`)
        })
        
        // Notificar a todos los usuarios el evento con su mensaje
        this.on('notify', (eventName, mensaje)=>{
            console.log(`'[NOTIFY][${eventName}] : ${mensaje}'`)
        })

        // CREAR "INFO"
    }
    //-------//
    //METODOS DE EVENTOS//
    createEvent(eventName){
        if(this.subscriptions.has(eventName)){
            this.emit('error', eventName, mensaje)
        }else{
            // PONER EVENTO EN SUBSCRIPTIONS

            this.emit('log',eventName, mensaje)
        }
    }

    deleteEvent(eventName){
        if(!this.subscriptions.has(eventName)){
            this.emit('error', eventName, mensaje)
        }else{
            // BORRAR EVENTO DE SUBSCRIPTIONS

            this.emit('log',eventName, mensaje)
        }
    }
    listEvents(){
        // LISTA TODOS LOS EVENTOS
        // POR CADA ELEMENTO DE SUBSCRIPTIONS HAGO UN EMIT 
    }

    subscribe(user, eventName){
        this.subscriptions.has()
        this.emit('subscribe', user, eventName)
    };

    unsubscribe(user, eventName){
        this.emit('unsubscribe', user, eventName)
    }

    listUserSubscriptions(user){
        // "INFO" TODAS LAS SUBSCRIPCIONES DE UN USUARIO
        // DEBO TENER UN NUEVO LISTENER QUE SEA "INFO"
    }

    unsubscribeAll(user){
        // UNS A UN USUARIO DE TODOS LOS EVENTOS
        // HAGO LOG POR CADA UNSUBSCRIBE
    }

    renameEvent(oldName, newName){
        // CAMBIA EL NOMBRE DE UN EVENTO
    }
    getSubscribers(eventName){
        // HAGO UN INFO POR CADA UNO DE LOS EVENTOS SUSCRIPTOS DEL USUARIO
    }
    clearAllEvents(){
        // Elimina todos los eventos y sus suscriptores.
    }
    notify(eventName, message){
        // Notifica a todos los usuarios el evento seleccionado con su mesaje correspondiente
        this.emit('notify',eventName, message)
    }
}

module.exports = EventManager;