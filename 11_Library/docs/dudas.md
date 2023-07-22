# Dudas librería estándar

- Si las clases `Sets` y `Maps` realizan la comparación de sus elementos via identidad, ¿Cómo puedo preguntar sobre la existencia de un objeto?
- ¿cómo puedo almacenar la referencia de un objeto en una variable en JavaScript?
- ¿Cómo puedo acceder a la ubicación en memoria de un objeto en JavaScript?

## Type Arrays

- Si se crean distintas vistas de un Buffer, por ejemplo: 

```js
let bytes = new Uint8Array(1024); // 1024 bytes
let ints = new Uint32Array(bytes.buffer); // or 256 integers
let floats = new Float64Array(bytes.buffer);
```

- ¿Qué sucede si se guardan valores en el type array floats y se accede al buffer desde ints ya que los tipos son diferentes, como se muestran los datos? Explicar. 