/*const numeros=[10,20,30,40];
console.log(numeros[2]);
console.log(numeros.length)
numeros.pop();//ELIMINA UN ELEMENTO AL FINAL
numeros.push(50);//AGREGA UN ELEMENTO AL FINAL
numeros.unshift(0);//AGREGA UN ELEMENTO AL INICIO
numeros.shift();//EILIMINA EL PRIMER ELEMENTO
console.log(numeros)*/

const frutas = ["manzanas","platano","nanja","uva"];
frutas.splice(1,2);
frutas.splice(1,0,"banana","kiwi");
frutas.splice(1,1,"Naranja");
console.log(frutas);