// Fecha: 12 de diciembre del 2022 

/**
 * Hay 4 maneras de crear arrays
 * - Arrays literals
 * - Spread operator ...
 * - Constructor Array()
 * - Métodos Array.of() y Array.from()
 */

/**
 * Array literals
 * Se crea mediante valores separados por comas encerrados por llaves
 */

// Array vacío
let empty = [];

// Crea un array con 5 elementos
let pares = [2, 4, 6, 8, 10];   

// Crea un array con 4 elementos de distinto tipo
let mix = [2, true, "hola", undefined];

// Se crea un array que contiene en si mismo otros arrays y objetos
let b  = [[1, {x: 2, y:0}, 4], {s: [1, true, 0], q: "hola"}]; 

// Se crea un array con 3 elementos, uno de los cuales esta vacío
let c = [1,,3];

// Se crea un array con dos elementos, ambos varios
// (Se permite una coma al final de un array, por eso son dos elementos)
let d = [,,];

/**
 * Spread operator
 * Incluye los elementos de un array dentro de otro array
 */
let a = [1, 2, 3];
let spreading = ['a', ...a, 'b', 'c'];

// Podemos usar spread para crear una copia del array. 
let copyofa = [...a];

// Modificar la copia no cambia el original
copyofa[0] = 'b';
console.log('array a:', a);
console.log('array copyofa', copyofa);

// Como truco para remover elementos duplicados podemos usar
// spread operator. Convertimos el array a un ser e inmediatamente
// después con spread operator lo regresarmos a un array:
let letters = [..."recorrer el mundo"];
let setToArray = [... new Set(letters)];
console.log(setToArray);

/**
 * El constructor Array()
 * Se puede invocar de las siguientes maneras:
 * - Sin argumentos.
 *   Crea un array vacío equivalente a [].
 * 
 * - Con un solo argumento numérico
 *   El argumento índica el número de elementos, pero los elementos
 *   estarán vacíos.
 * 
 * - Con dos o más argumentos
 *   Los elementos se convierten en los elementos del array       
 */

// Sin argumentos es como []
let array1 = new Array();
console.log('array1:', array1);

// Con un solo argumento
let array2 = new Array(4);
console.log('array2:', array2);

// Con más de dos argumentos
let array3 = new Array(2,3,4,'a');
console.log('array3:', array3);

/**
 * Array.of()
 * Como el constructor Array() no puede ser usado para crear arrays
 * pasandole solo un argumento, con Array.of() podemos crear arrays
 * sin importar el número de argumentos que reciba, estos argumentos
 * siempre se transformarán en los elementos del array.
 */

// Crea un array vacío
let array4 = Array.of();
console.log('array4', array4);

// Crea una array con un solo elemento
let array5 = Array.of(1);
console.log('array5', array5);

// Crea un array con 3 elementos
let array6 = Array.of(1, 2, 4);
console.log('array6', array6);

/**
 * Array.from()
 * Crea un array desde objetos conocidos como array-like. 
 * Recibe un ojeto array-like como su primer argumento y retorna un array con
 * sus elementos.
 */
let obj1 = {x:1, y:2, z:3};
let arrayFromObj1 = Array.from(obj1);
console.log('arrayFromObj1:', arrayFromObj1);