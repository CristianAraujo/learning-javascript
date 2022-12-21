# Quizz

1. ¿Qué es la modularidad y en que consiste?
2. ¿Qué ventajas nos otorga la modularidad?
3. ¿JavaScript tiene soporte nativo para módulos?
4. ¿Cuáles aproximaciones se han usado para la creación de módulos?

## Modulos con clases objetos y closures

1. ¿Por qué las clases pueden usarse como una técnica para aproximarse a la creación de módulos?
2. ¿Qué desventajas ofrecerian las clases al usarlas para crear módulos?
3. ¿Por qué las funciones pueden usarse como una técnica para aproximarse a la creación de módulos?
4. ¿Cómo se logra la creación de módulos mediante funciones?
5. Dar un ejemplo de un módulo creado mediante el uso de clases
6. Dar un ejemplo creado de un módulo mediante el uso de funciones

## Modularidad automática basada en closures

1. ¿Qué es necesario para convertir un script en un módulo? Explicar.
2. Dar un ejemplo de un módulo creado con la técnica de modularidad automática basada en closures.
3. Dar un ejemplo de uso de un módulo creado con la técnica de modularidad automática basada en closures.
   
## Modulos en Node

1. ¿Cómo se importan los módulos de Node? Explicar
2. ¿Cómo se exportan los módulos de Node? Explicar
3. Dar un ejemplo de creación de un modulo Node y exportarlo explicando el código.
4. ¿Cómo definir un módulo Node que solo exporte un solo valor? Explicar.
5. ¿`module.exports` y simplemente `exports` son lo mismo? Explicar.
6. Crear un módulo tipo Node, realizando una sola sentencia de exportación que exporte varios valores.

### Node imports

1. ¿Cómo debe indicarse el nombre de un módulo Node del sistema que vaya a ser importado?
2. ¿Cómo debe indicarse el nombre de un módulo definido por el usuario que vaya a importarse en Node? Explicar porque debe usarse determinada notación.
3. ¿Cómo realizar una importación utilizando la asignación por destructuración? Dar un ejemplo.
4. ¿Cómo es posible importar valores específicos en módulos Node? Dar un ejemplo.

### Modulos tipo Node en la Web

1. Los módulos tipo Node ¿Solo fueron usados dentro del entorno de ejecución Node? Argumentar.

## Módulos en ES6

1. ¿Qué valores de un módulo están disponibles fuera de este?
2. ¿Qué contexto tienen las variables y otras definiciones en los módulos?
3. ¿El código en los módulos ES6 se encuentra en `strict mode`?
4. ¿Qué otra particularidad se encuentra en el `stric mode` dentro de los módulos?

### ES6 exports

1. ¿Cómo se exportan valores desde un módulo? Dar un ejemplo.
2. ¿Cómo se pueden exportar varios valores con una única sentencia en un módulo ES6? Dar un ejemplo.
3. ¿La sintaxis de exportación de varios valores es un objeto literal? Explicar.
4. ¿En que consiste la exportación por defecto y como se logra? Dar un ejemplo.
5. Las exportaciones por defecto, ¿Pueden ser anónimas?
6. ¿Es posible exportar objetos literales con exportaciones por defecto? Explicar.
7. En un mismo módulo, ¿Pueden haber exportaciones normales y por defecto?
8. ¿Cuantas exportaciones por defecto pueden haber en un mismo módulo?
9. ¿Desde que niveles de anidamientto es posible realizar exportaciones de módulos ES6?

### ES6 imports

1. ¿Qué valores pueden ser importados a un módulo actual?
2. ¿Cómo podemos conseguir una importación simple? Explicar.
3. ¿Cómo se trata el identificador con el cual se está realizando la importación?
4. ¿En que nivel de anidamiento puede aparecer una importación de un módulo?
5. ¿Es necesario que las importaciones sean declaradas al comienzo del módulo? Explicar.
6. ¿Qué tipo debe tener el nombre del módulo desde el cual se está realizando la importación?
7. ¿Qué valores pueden tomar los idenficadores de los modulos que se están importanto?
8. Dar un ejemplo de una importación de un módulo que esté en el mismo directorio. Explicar.
9. ¿Cómo se pueden realizar múltiples importaciones desde el mismo módulo? Dar un ejemplo.
10. Las importaciones que añaden valores exportados por defecto,¿Siempre dispondrán del nombre del valor de la exportación? Explicar.
11. ¿Cómo se pueden importar todos los valores exportados desde otro módulo?
12. ¿Qué sucede cuando se importan todos los valaores exportados desde otro módulo? Explicar.
13. ¿Cómo puede realizar una importación del valor exportado por defecto y exportaciones comunes en una misma sentencia `import`? Dar un ejemplo y explicar.
14. ¿Es posible importar módulos que no tienen valores exportados? ¿Cuándo esto es útil?

## Imports y exports con renombramiento

1. ¿En que consiste la importación y exportación con renombramiento?
2. Dar ejemplo de uso de importación y exportación con renombramiiento.
3. ¿Cómo podemos conseguir una importación con renombramiento? Dar un ejemplo.
4. ¿En que consiste la importación de un valor exportado por defecto con renombramiento? Dar un ejemplo y explicar.
5. ¿En qué consiste renombrar valores al exportar? Dar un ejemplo.
6. ¿Es posible utilizar expresiones como identificadores en una exportación?

### Reexportaciones

1. ¿En qué consisten las re-exportaciones? Dar un ejemplo de uso.
2. ¿Cómo se consigue