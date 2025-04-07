//1. Verificação de maioridade
//Crie um código que verifique se uma pessoa é maior de idade com base na variável .

let idade = 17;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// Explicação:
// O operador `>=` verifica se a idade é maior ou igual a 18.
// Se for verdadeiro, imprime que a pessoa é maior de idade.
// Caso contrário, imprime que é menor de idade.


//2. Acesso ao sistema
//Crie um código que verifique se o usuário pode acessar o sistema. Ele só pode entrar se tiver login e senha preenchidos.

let temLogin = true;
let temSenha = false;

if (temLogin && temSenha) {
    console.log("Acesso permitido.");
} else {
    console.log("Acesso negado.");
}

// Explicação:
// O operador lógico `&&` (E) verifica se ambas as condições são verdadeiras.
// Se `temLogin` for verdadeiro **e** `temSenha` for verdadeiro, o acesso é permitido.
// Caso contrário, o acesso é negado.


//3. Escolha de plano
//Verifique se o usuário tem acesso a um plano VIP ou Premium com base nas variáveis  e . Se pelo menos uma dessas condições for verdadeira, ele tem acesso especial.

let vip = false;
let premium = true;

if (vip || premium) {
    console.log("Você tem acesso ao conteúdo especial.");
} else {
    console.log("Acesso restrito.");
}

// Explicação:
// O operador lógico `||` (OU) verifica se pelo menos uma das condições é verdadeira.
// Se `vip` **ou** `premium` for verdadeiro, o usuário tem acesso especial.


//4. Negação de entrada
//Crie um código que impede um usuário de entrar caso ele esteja bloqueado.

let bloqueado = true;

if (!bloqueado) {
    console.log("Bem-vindo ao sistema.");
} else {
    console.log("Usuário bloqueado. Entre em contato com o suporte.");
}

// Explicação:
// O operador lógico `!` (NÃO) inverte o valor da variável `bloqueado`.
// Se `bloqueado` for `true`, então `!bloqueado` será `false`, e o usuário será impedido de entrar.


//5. Verificação composta
//Crie um código que verifica se um aluno passou na prova. Para passar, ele precisa de média maior ou igual a 7 e não ter faltado mais de 5 vezes.

let media = 8;
let faltas = 3;

if (media >= 7 && faltas <= 5) {
    console.log("Aluno aprovado!");
} else {
    console.log("Aluno reprovado.");
}

// Explicação:
// O operador `&&` (E) exige que ambas as condições sejam verdadeiras para o aluno ser aprovado.
// Se a média for maior ou igual a 7 **e** o número de faltas for menor ou igual a 5, ele passa.
// Caso contrário, ele será reprovado.