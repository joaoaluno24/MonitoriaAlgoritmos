//📝Exercício 1: Classificação Etária Detalhada
// Crie um programa que receba a idade de uma pessoa e utilize if-else if-else para classificar essa pessoa em uma das seguintes categorias:
//Criança (0 a 12 anos)
//Adolescente (13 a 17 anos)
//Adulto (18 a 59 anos)
//Idoso (60 anos ou mais) O programa deve imprimir a categoria correspondente.

// --- Resolução Exercício 1 ---

// Variável para armazenar a idade (pode ser alterada para testar)
let idade = 25;

// Imprime a idade para referência
console.log("Idade informada:", idade);

// Estrutura condicional composta para classificar a idade
if (idade >= 0 && idade <= 12) {
    console.log("Classificação: Criança");
} else if (idade >= 13 && idade <= 17) {
    console.log("Classificação: Adolescente");
} else if (idade >= 18 && idade <= 59) {
    console.log("Classificação: Adulto");
} else if (idade >= 60) {
    console.log("Classificação: Idoso");
} else {
    // Opcional: tratar idades inválidas (menores que 0)
    console.log("Idade inválida.");
}

/*
Exemplos de teste:
- idade = 10  -> Saída: Criança
- idade = 15  -> Saída: Adolescente
- idade = 30  -> Saída: Adulto
- idade = 65  -> Saída: Idoso
- idade = -5  -> Saída: Idade inválida. (se o último else for incluído)
*/


/*📝Exercício 2: Sistema de Notas Simplificado

Enunciado: Escreva um programa que recebe uma nota numérica (de 0 a 10) e a classifica usando if-else if-else:

Reprovado (nota menor que 5)
Recuperação (nota entre 5 e 6.9, inclusive)
Aprovado (nota entre 7 e 10, inclusive) Assuma que a entrada será sempre um número dentro do intervalo válido (0 a 10). Imprima a situação do aluno.*/

// --- Resolução Exercício 2 ---

// Variável para armazenar a nota
let nota = 7.5;

console.log("Nota informada:", nota);

// Estrutura condicional para classificar a nota
// Assumindo que a nota está sempre entre 0 e 10, conforme enunciado.
if (nota < 5) {
    console.log("Situação: Reprovado");
} else if (nota >= 5 && nota <= 6.9) {
    // Condição explícita para clareza, poderia ser só else if (nota <= 6.9)
    console.log("Situação: Recuperação");
} else {
    // Se não for menor que 5 e nem entre 5 e 6.9, só pode ser 7 ou mais.
    console.log("Situação: Aprovado");
}

/*
Exemplos de teste:
- nota = 4.9 -> Saída: Reprovado
- nota = 5.0 -> Saída: Recuperação
- nota = 6.9 -> Saída: Recuperação
- nota = 7.0 -> Saída: Aprovado
- nota = 10  -> Saída: Aprovado
*/


/*📝Exercício 3: Verificação de Acesso (Usuário e Senha)

Enunciado: Simule um sistema de login simples. Crie variáveis para usuarioCorreto ("admin") e senhaCorreta ("1234"). Peça ao programa para verificar um usuarioDigitado e uma senhaDigitada. Use condicionais aninhadas ou compostas com && (E lógico):

Se o usuarioDigitado for igual ao usuarioCorreto:
Verifique se a senhaDigitada é igual à senhaCorreta. Se sim, imprima "Login bem-sucedido!".
Caso contrário (senha incorreta), imprima "Senha incorreta.".
Se o usuarioDigitado for diferente do usuarioCorreto, imprima "Usuário não encontrado.".*/

// --- Resolução Exercício 3 ---

const usuarioCorreto = "admin";
const senhaCorreta = "1234";

// Variáveis para testar (podem ser alteradas)
let usuarioDigitado = "admin";
let senhaDigitada = "senhaerrada";

console.log("Tentativa de login com usuário:", usuarioDigitado);

// Verifica primeiro o usuário
if (usuarioDigitado === usuarioCorreto) {
    console.log("Usuário encontrado. Verificando senha...");
    // Se o usuário está correto, verifica a senha (condicional aninhada)
    if (senhaDigitada === senhaCorreta) {
        console.log("Login bem-sucedido!");
    } else {
        console.log("Senha incorreta.");
    }
} else {
    // Se o usuário já estiver incorreto
    console.log("Usuário não encontrado.");
}

/*
Exemplos de teste:
- usuarioDigitado = "admin", senhaDigitada = "1234" -> Saída: Login bem-sucedido!
- usuarioDigitado = "admin", senhaDigitada = "errada" -> Saída: Senha incorreta.
- usuarioDigitado = "user", senhaDigitada = "1234" -> Saída: Usuário não encontrado.
*/


/*📝Exercício 4: Recomendações de Atividade (Clima)

Enunciado: Crie um programa que receba duas informações: a temperatura atual (número) e se está chovendo (um booleano: true ou false). Baseado nessas informações, recomende uma atividade:

Se estiver chovendo, recomende: "Ficar em casa assistindo filme.".
Se não estiver chovendo e a temperatura for maior que 25 graus, recomende: "Ir à praia ou piscina.".
Se não estiver chovendo e a temperatura estiver entre 15 e 25 graus (inclusive), recomende: "Fazer uma caminhada no parque.".
Se não estiver chovendo e a temperatura for menor que 15 graus, recomende: "Ler um livro com um chocolate quente.".*/

// --- Resolução Exercício 4 ---

// Variáveis para testar
let temperatura = 20;
let estaChovendo = false; // true ou false

console.log("Temperatura:", temperatura, "°C");
console.log("Está chovendo?", estaChovendo);

// Verifica primeiro se está chovendo
if (estaChovendo === true) { // Pode ser simplificado para if (estaChovendo)
    console.log("Recomendação: Ficar em casa assistindo filme.");
} else {
    // Se não está chovendo, verifica a temperatura
    console.log("Não está chovendo. Verificando temperatura...");
    if (temperatura > 25) {
        console.log("Recomendação: Ir à praia ou piscina.");
    } else if (temperatura >= 15 && temperatura <= 25) {
        console.log("Recomendação: Fazer uma caminhada no parque.");
    } else { // Se não for > 25 nem entre 15-25, só pode ser < 15
        console.log("Recomendação: Ler um livro com um chocolate quente.");
    }
}

/*
Exemplos de teste:
- temperatura = 28, estaChovendo = false -> Saída: Ir à praia ou piscina.
- temperatura = 20, estaChovendo = false -> Saída: Fazer uma caminhada no parque.
- temperatura = 10, estaChovendo = false -> Saída: Ler um livro com um chocolate quente.
- temperatura = 22, estaChovendo = true  -> Saída: Ficar em casa assistindo filme.
*/


/*📝Exercício 5: Desconto Progressivo Simples

Enunciado: Uma loja oferece um desconto baseado no valor da compra. Crie um programa que receba o valorCompra e aplique as seguintes regras usando if-else if-else:

Se valorCompra for menor que R$ 50,00: Sem desconto. Imprima o valor original.
Se valorCompra for entre R$ 50,00 e R$ 99,99: 5% de desconto. Imprima o valor final.
Se valorCompra for R$ 100,00 ou mais: 10% de desconto. Imprima o valor final. Calcule e imprima o valor final a ser pago.*/

// --- Resolução Exercício 5 ---

// Variável para o valor da compra
let valorCompra = 120.00;
let valorFinal;

console.log("Valor da Compra: R$", valorCompra.toFixed(2));

// Estrutura condicional para aplicar o desconto
if (valorCompra < 50) {
    console.log("Sem desconto aplicável.");
    valorFinal = valorCompra;
} else if (valorCompra >= 50 && valorCompra <= 99.99) {
    let desconto = valorCompra * 0.05; // Calcula 5%
    valorFinal = valorCompra - desconto;
    console.log("Desconto de 5% aplicado: R$", desconto.toFixed(2));
} else { // Se não for < 50 nem entre 50-99.99, só pode ser >= 100
    let desconto = valorCompra * 0.10; // Calcula 10%
    valorFinal = valorCompra - desconto;
    console.log("Desconto de 10% aplicado: R$", desconto.toFixed(2));
}

console.log("Valor Final a Pagar: R$", valorFinal.toFixed(2));

/*
Exemplos de teste:
- valorCompra = 45.50  -> Saída: Sem desconto aplicável. Valor Final a Pagar: R$ 45.50
- valorCompra = 75.00  -> Saída: Desconto de 5% aplicado: R$ 3.75. Valor Final a Pagar: R$ 71.25
- valorCompra = 99.99  -> Saída: Desconto de 5% aplicado: R$ 5.00. Valor Final a Pagar: R$ 94.99 (aproximado)
- valorCompra = 100.00 -> Saída: Desconto de 10% aplicado: R$ 10.00. Valor Final a Pagar: R$ 90.00
- valorCompra = 250.00 -> Saída: Desconto de 10% aplicado: R$ 25.00. Valor Final a Pagar: R$ 225.00
*/