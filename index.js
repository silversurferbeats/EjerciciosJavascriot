
// 1) Loop de pares
/**Debés crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de que el número de la iteración sumado con el número pasado por parámetro, sea par, mostrá en la consola “El número x es par”. */
for ( var i = 0; i <= 100; i++ ){
    if (i % 2 == 0){
        console.log(i + "==> numero par")
    }else{
        console.log(i)
    }
}


// 2) Nuevo arreglo
/**Debés crear una función llamada `nuevoArreglo` que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. Ejemplo: nuevoArreglo(5) debe retornar [1,2,3,4,5] nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10] */

let ary = [];

let num = prompt('Escribe un numero');
    while(!num || isNaN(num)){
        num = prompt('Escribe un numero');
    }

for(let i = 1; i <= num; i++){
    ary.push(i);
}

console.log(ary);

    

// 3) unica propiedad 
/**Debés crear una función llamada `oneProperty` que reciba un arreglo de objetos como parámetro y un string. Deberá retornar un nuevo arreglo de objetos, teniendo como parámetro la propiedad que fue pasada como string. Ejemplo: var arreglo = [ { name: “lucas”, edad: 20 }, { name: “santi”, edad: 22 } ] oneProperty(arreglo, “edad”) debe retornar [ { edad: 20 }, { edad: 22 } ] oneProperty(arreglo, “name”) debe retornar [ { name: “lucas”}, { name: “santi” } ] */

var arreglo = [ 
    { name: "lucas", edad: 20 }, 
    { name: "santi", edad: 22 }
] 

const oneProperty = arreglo.map(function(x){
    return x.name
});
console.log(oneProperty);

// 4) Sumatoria
/**Debés crear una función llamada `sumattion` que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. Ejemplo: sumattion(3) debe retornar 6 por que hace (1 +2 +3) sumattion(8) debe retornar 36 */
function sumattion(valor){

    ary = [];
    for( var i = 0; i <= valor; i++ ){
        ary.push(i);
    }
    const reducer = ( accumulator, curr ) => accumulator + curr;
    console.log(ary.reduce(reducer)); 
}
sumattion(5);



// 5) Caracter del medio (corregir si el string es par que tome las 2 letras del medio)
/**Debés crear una función llamada `middleCharacter` que reciba un `string` por parámetro y devuelva sus caracteres del medio. Ejemplo: middleCharacter(“plataforma5”) debe retornar “f”middleCharacter (“hola”) debe retornar “ol”middleCharacter (“cosas”) debe retornar “s” */
function middleCharacter(string){
    let cantidadString = string.length;
    console.log(string.charAt(cantidadString/2));
}

console.log(middleCharacter("texto"));

