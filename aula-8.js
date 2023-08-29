//1

let idade = prompt("quantos anos vc tem?");
let idadeAmigo = prompt("quantos anos seu amigo tem?");

console.log("sua idade e maior do q a do seu amigo:"((idade)>=idadeAmigo));
console.log("a diferença de idade:"(idade-idadeAmigo));


// 2

let numero = prompt("um numero par");

console.log("o resto da divisao" , numero % 2 ) ;

//todos numeros pares  o resto da divisao vai ser 0

//todos numeros impares o resto da divisao vai ser 1


//3

let a = prompt("quantos anos vc tem?")
let m = 12
let d = 30
let h = 24

console.log("idade em meses:" , (a*m))
console.log("idade em dias:" , (a*m*d))
console.log("idade em horas:" , (a*m*d*h))

//4

let n1 = prompt("fale um numero")
let n2 = prompt("fale outro")

console.log("o primeiro numero e maior que o segundo?"((n1)>=n2))
console.log("o primeiro numero e igual ao segundo?"(n1===n2))
console.log("o primeiro numero e divisivel com o primeiro"((n1 % n2)===0))
console.log("o segundo numero e divisivel com o segundo" ((n2 % n1)===0))



