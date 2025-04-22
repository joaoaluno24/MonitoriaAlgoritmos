//📝Exercício 1: A Contagem Mais Básica (de 0 a 4)
//🎯Objetivo: Entender a estrutura padrão do loop for, começando a contar do zero.
//🔍Enunciado: Use um loop for para imprimir os números de 0 a 4 no console.

console.log("Contando de 0 a 4:");

// O loop 'for' é perfeito aqui porque sabemos que queremos exatamente 5 repetições (para os números 0, 1, 2, 3, 4).
for (let i = 0; // 1. Inicialização: Começamos nossa variável de controle 'i' em 0. 'i' é um nome comum para "índice" ou "iterador".
     i < 5;   // 2. Condição: O loop continua ENQUANTO 'i' for MENOR que 5. Quando 'i' chegar a 5, a condição (5 < 5) será falsa, e o loop para.
     i++      // 3. Expressão Final: Depois de cada repetição, aumentamos 'i' em 1 (i++ é um atalho para i = i + 1).
    ) {
  // O código aqui dentro é executado a cada repetição.
  console.log(i); // Na primeira vez i é 0, depois 1, 2, 3, 4.
}

console.log("Fim do Exercício 1.");
// Saída esperada:
// Contando de 0 a 4:
// 0
// 1
// 2
// 3
// 4
// Fim do Exercício 1.




//📝Exercício 2: Contando de 1 a 5
//🎯Objetivo: Ajustar a Inicialização e/ou a Condição para começar a contar de 1 e incluir o último número.
//🔍Enunciado: Use um loop for para imprimir os números de 1 a 5 no console.

// Exercício 2: Contando de 1 a 5

console.log("\nContando de 1 a 5:");

// Agora queremos começar do 1 e ir ATÉ o 5. Podemos ajustar a inicialização ou a condição.
// Uma forma comum é começar do 1 e usar "<= 5".

for (let contador = 1; // 1. Inicialização: Começamos o contador em 1.
     contador <= 5; // 2. Condição: O loop continua ENQUANTO o contador for MENOR OU IGUAL a 5. Ele rodará para 1, 2, 3, 4, e 5. Quando for 6 (6 <= 5), para.
     contador++     // 3. Expressão Final: Continuamos aumentando o contador em 1 a cada passo.
    ) {
  console.log(contador); // Imprime o valor atual do contador (1, 2, 3, 4, 5).
}

console.log("Fim do Exercício 2.");
// Saída esperada:
// Contando de 1 a 5:
// 1
// 2
// 3
// 4
// 5
// Fim do Exercício 2.




//📝Exercício 3: Contando em Passos Diferentes (Números Pares)
//🎯Objetivo: Modificar a Expressão Final para pular números na contagem.
//🔍Enunciado: Use um loop for para imprimir apenas os números pares de 0 a 10 no console (incluindo 0 e 10).

// Exercício 3: Contando em Passos Diferentes (Números Pares)

console.log("\nNúmeros pares de 0 a 10:");

// Podemos começar em 0 (que é par) e pular de 2 em 2.
for (let num = 0; // 1. Inicialização: Começamos no primeiro número par que queremos incluir, que é 0.
     num <= 10; // 2. Condição: Continuamos ENQUANTO o número for MENOR OU IGUAL a 10.
     num = num + 2 // 3. Expressão Final: Aumentamos o número em 2 a cada repetição, garantindo que fiquemos nos pares (0, 2, 4, 6, 8, 10).
    ) {
  console.log(num); // Imprime o número par atual.
}

console.log("Fim do Exercício 3.");
// Saída esperada:
// Números pares de 0 a 10:
// 0
// 2
// 4
// 6
// 8
// 10
// Fim do Exercício 3.




//📝Exercício 4: Calculando a Soma de uma Sequência de Números
//🎯Objetivo: Usar o loop for para iterar por uma sequência numérica e acumular um resultado (uma soma).
//🔍Enunciado: Use um loop for para calcular a soma de todos os números inteiros de 1 a 10 (ou seja, 1 + 2 + 3 + ... + 10) e imprima o resultado final no console.

// Exercício 4: Calculando a Soma de uma Sequência de Números

console.log("Calculando a soma de 1 a 10:");

// Para somar números que encontramos no loop, precisamos de uma variável FORA do loop
// para guardar o total acumulado.
let somaTotal = 0; // Inicializamos a soma em zero. Nada foi somado ainda.

// Vamos usar o loop 'for' para percorrer os números de 1 a 10.
for (let numeroAtual = 1; // 1. Inicialização: Começamos nosso contador/número atual em 1.
     numeroAtual <= 10; // 2. Condição: Continuamos ENQUANTO o número atual for MENOR OU IGUAL a 10.
     numeroAtual++      // 3. Expressão Final: Aumentamos o número atual em 1 a cada repetição (1, 2, 3, ..., 10).
    ) {
  // O código aqui dentro executa para cada número de 1 a 10.
  // A cada repetição, somamos o 'numeroAtual' à nossa 'somaTotal'.
  somaTotal = somaTotal + numeroAtual; // Somamos o número que estamos vendo agora ao total.
  // Podemos ler como: "A nova soma total é a soma total antiga mais o número atual".

  // Opcional: podemos imprimir a soma parcial a cada passo para ver o que está acontecendo
  // console.log(`Somando ${numeroAtual}. Soma parcial: ${somaTotal}`);
}

// Após o loop terminar (quando numeroAtual for 11), a somaTotal terá o resultado final.
console.log(`A soma total de 1 a 10 é: ${somaTotal}`);

console.log("Fim do Exercício 4.");
// Saída esperada:
// Calculando a soma de 1 a 10:
// A soma total de 1 a 10 é: 55
// Fim do Exercício 4.





//📝Exercício 5: Exibindo os Primeiros Múltiplos de um Número:
//🎯Objetivo: Usar o loop for para gerar e imprimir uma sequência de múltiplos de um número específico.
//🔍Enunciado: Use um loop for para imprimir os primeiros 5 múltiplos do número 3 no console (ou seja, 3, 6, 9, 12, 15).

// Exercício 5: Exibindo os Primeiros Múltiplos de um Número

console.log("Os primeiros 5 múltiplos de 3:");

const fator = 3; // O número do qual queremos múltiplos.
const quantidadeDeMultiplos = 5; // Quantos múltiplos queremos ver.

// Queremos 5 múltiplos: 3*1, 3*2, 3*3, 3*4, 3*5.
// Os resultados são 3, 6, 9, 12, 15.
// Podemos ajustar o loop para ir de 1 até 5 (para o fator de multiplicação),
// ou podemos ajustar o loop para ir diretamente pelos múltiplos, começando no primeiro múltiplo
// e pulando pelo valor do fator a cada passo. Vamos fazer o segundo caso, pois ele varia mais a sintaxe do for.

for (let multiplo = fator; // 1. Inicialização: Começamos a contagem no primeiro múltiplo (fator * 1), que é 3.
     multiplo <= fator * quantidadeDeMultiplos; // 2. Condição: Continuamos ENQUANTO o 'multiplo' for MENOR OU IGUAL ao último múltiplo que queremos (fator * quantidadeDeMultiplos = 3 * 5 = 15).
     multiplo = multiplo + fator // 3. Expressão Final: Aumentamos o 'multiplo' pelo valor do fator (3) a cada repetição, garantindo que pulamos para o próximo múltiplo (3 -> 6 -> 9...).
    ) {
  // O código aqui dentro executa para cada múltiplo gerado.
  console.log(multiplo); // Imprime o múltiplo atual.
}

console.log("Fim do Exercício 5.");
// Saída esperada:
// Os primeiros 5 múltiplos de 3:
// 3
// 6
// 9
// 12
// 15
// Fim do Exercício 5 .