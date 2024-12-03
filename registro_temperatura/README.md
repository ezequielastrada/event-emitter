
# Challenge: Sistema de Monitoreo de Temperatura

## Descripción
Implementa un sistema que monitoree la temperatura de un sensor (simulado con valores aleatorios). Este sistema debe emitir eventos según los siguientes criterios:

### Eventos a emitir:
1. **`normal`**: Cuando la temperatura está entre 20°C y 25°C.
2. **`warning`**: Cuando la temperatura está entre 25°C y 30°C.
3. **`critical`**: Cuando la temperatura supera los 30°C.

### Requisitos funcionales:
- Usa la clase `EventEmitter` para manejar los eventos.
- Simula la lectura de temperatura generando valores aleatorios cada segundo.
- Los listeners para cada evento deben imprimir un mensaje en consola:
  - `normal`: "Temperatura normal: <valor>°C."
  - `warning`: "⚠️ Advertencia: temperatura alta: <valor>°C."
  - `critical`: "🔥 Peligro crítico: temperatura muy alta: <valor>°C."

### Extras (opcional):
- Agrega un evento `error` que se dispare si la temperatura es menor a 0°C o mayor a 50°C (valor imposible en este caso).
- Detén el monitoreo automáticamente después de 10 lecturas.

## Ejemplo de uso

Si el sistema genera las siguientes temperaturas, los logs deberían verse así:

```
Temperatura normal: 22°C.
⚠️ Advertencia: temperatura alta: 28°C.
🔥 Peligro crítico: temperatura muy alta: 33°C.
Temperatura normal: 21°C.
```

## Pistas
- Usa `setInterval` para simular la lectura periódica del sensor.
- Genera números aleatorios con `Math.random` para simular la temperatura:
  ```javascript
  const temperatura = Math.floor(Math.random() * 41); // Genera entre 0 y 40°C
  ```

¡Buena suerte y que disfrutes el desafío!
