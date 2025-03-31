//📝1. Verifique se um número é maior que 10
// Código
let num = 15;  
if (num > 10) {  
  console.log("O número é maior que 10.");  
}  

// Explicação  
// A condição verifica se `numero` é maior que 10 e exibe a mensagem no console.  


//📝📝2. Verifique se uma pessoa pode votar (idade mínima 18)
// Código
let idad = 16;  
if (idad >= 18) {  
  console.log("Você pode votar.");  
} else {  
  console.log("Você não pode votar.");  
}  

// Explicação  
// A condição analisa se `idade` é maior ou igual a 18 e retorna a mensagem apropriada.  


//📝📝📝3. Verifique se o nome tem mais de 5 caracteres:
// Código
let nome = "Lucas";  
if (nome.length > 5) {  
  console.log("O nome tem mais de 5 caracteres.");  
} else {  
  console.log("O nome tem 5 ou menos caracteres.");  
}  

// Explicação  
// O `nome.length` retorna o número de caracteres da variável `nome`.  


//📝📝📝📝4. Verifique se um número é par ou ímpar
// Código
let numero = 7;  
if (numero % 2 === 0) {  
  console.log("O número é par.");  
} else {  
  console.log("O número é ímpar.");  
}  

// Explicação  
// O operador `%` calcula o resto da divisão por 2 para verificar se o número é par ou ímpar.  


//📝📝📝📝📝5. Verifique se uma pessoa tem acesso a uma promoção baseado na idade
// Código
let idade = 22;  
if (idade >= 18 && idade <= 25) {  
  console.log("Você tem acesso à promoção.");  
} else {  
  console.log("Você não tem acesso à promoção.");  
}  

// Explicação  
// O operador lógico `&&` é usado para determinar se `idade` está entre 18 e 25.  