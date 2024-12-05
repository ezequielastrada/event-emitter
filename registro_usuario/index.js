/*

EJEMPLO

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

*/