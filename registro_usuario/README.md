
# Challenge: Sistema de Gestión de Usuarios y Eventos

## Descripción
Crea un sistema que gestione usuarios y suscripciones a eventos. Cada usuario puede suscribirse o darse de baja de diferentes eventos. El sistema debe emitir eventos cada vez que un usuario realiza una acción (suscribirse, darse de baja, o recibir una notificación).

## Requisitos

### Clases principales:
1. **`EventManager`**: Maneja los eventos globales utilizando `EventEmitter`.
2. **`User`**: Representa a un usuario que puede suscribirse o darse de baja de eventos.

### Funciones principales:
- `subscribe(user, eventName)`: Permite que un usuario se suscriba a un evento específico.
- `unsubscribe(user, eventName)`: Permite que un usuario se dé de baja de un evento.
- `notify(eventName, message)`: Emite un evento con un mensaje que notifique a todos los usuarios suscritos.

### Requisitos adicionales:
- Cada usuario tiene un nombre único.
- Cuando un usuario se suscribe a un evento, el sistema debe registrar la suscripción.
- Si un usuario ya está suscrito a un evento y vuelve a suscribirse, no debe duplicarse.
- Si un usuario se da de baja de un evento al que no está suscrito, muestra un mensaje de error.
- Cuando un evento se emite, los usuarios suscritos deben recibir una notificación en consola con su nombre y el mensaje enviado.

### Extras (opcional):
- Permite listar los eventos y los usuarios suscritos a cada uno.
- Límite el número máximo de suscripciones por usuario a 3 eventos.

## Ejemplo de uso

```javascript
// Crear instancia de EventManager
const manager = new EventManager();

// Crear usuarios
const alice = new User('Alice');
const bob = new User('Bob');

// Suscribir usuarios a eventos
manager.subscribe(alice, 'news');
manager.subscribe(bob, 'news');
manager.subscribe(alice, 'sports');

// Emitir un evento
manager.notify('news', 'Nueva edición disponible!');
manager.notify('sports', 'Resultados del partido de ayer.');

// Resultado esperado en consola:
Alice recibió una notificación de "news": Nueva edición disponible!
Bob recibió una notificación de "news": Nueva edición disponible!
Alice recibió una notificación de "sports": Resultados del partido de ayer.
```

## Pistas
- Usa un `Map` para rastrear las suscripciones de eventos y los usuarios asociados.
- Implementa métodos en la clase `User` para manejar las suscripciones de manera individual.
- Aprovecha `EventEmitter` para emitir y escuchar eventos globalmente.

¡Buena suerte y que disfrutes el desafío!
