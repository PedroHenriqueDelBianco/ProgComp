    let moto= {
        modelo: "S1000rr",
        marca: "BMW",
        ano: 2025,
        motor: "4 Cilindros 999cc",
        peso : "197Kg"
    };
    console.log(moto.modelo)
    let Loja = [
    {
        modelo: "S1000rr",
        marca: "BMW",
        ano: 2025,
        motor: "4 Cilindros 999cc",
        peso: "197Kg"
    },
    {
        modelo: "GS1250",
        marca: "BMW",
        ano: 2024,
        motor: "2 Cilindros 1254cc",
        peso: "249Kg"
    },
    {
        modelo: "XTZ Lander",
        marca: "Yamaha",
        ano: 2015,
        motor: "Monocilindrico 249cc",
        peso: "154Kg"
    }
];
console.log(`Marca da Moto na posição 1: ${loja[1].marca}`)
console.log(`Ano da Moto na posição 2: ${loja[2].ano}`)

console.log(`Peso de Todas as Motos: `)
for(let i=0;i<loja.length;i++){
    console.log(`${loja[i].peso}`)
}
let loja = [];
for(let i = 0; i < 3; i++){
    let modelo = prompt(`Informe o modelo da Moto ${i = 1}:`);
    let marca = prompt(`Informe a marca da Moto ${i + 1}:`);
    let ano = Number(prompt(`Informe o ano da Moto ${i + 1}:`));
    let motor = prompt(`Informe o motor da Moto ${i + 1}:`);
    let peso = prompt(`Informe o peso da Moto ${i + 1}:`)
    
    let moto = {
        modelo: modelo,
        marca: marca,
        ano: ano,
        motor: motor,
        peso: peso
    };
    loja.push(moto);
}
let funcionarios = []
for (let i=0; i<6; i++){
    let objeto = {
        nome: prompt(`Informe nome do funcionario`),
        cargo: prompt(`Informe cargo do funcionario`).toLowerCase(),
        salario: Number(prompt(`Informe salario do funcionario`)),
        tempo: Number(prompt(`Informe tempo de serviço do funcionario`))
    }
    funcionarios.push(objeto)
}
let maior = funcionarios[0]
for(let i=0; i<6; i++) {

    if (funcionarios[i].salario > 5000 % funcionarios[i].tempo > 5){
        console.log(funcionarios[i])
    } 
    
    if (funcionarios[i].salario > maior.salario){
        maior = funcionarios[i]
    }
}
console.log(`Funcionario com maior salario ${maior.nome}`)

let mariz = [];
let oma = 0;
let pares = 0;
let diagonalSecundaria = [];

for (let i = 0; i < 3; i++) {
    let linha = [];
    for (let j = 0; j < 3; j++) {
        let valor = Number(prompt(`Digite o valor para a posição [${i}][${j}]:`));
        linha.push(valor);

        soma += valor;

        if (valor % 2 === 0) {
            pares++;
        }

        // Verifica se está na diagonal secundária
        if (i + j === 2) {
            diagonalSecundaria.push(valor);
        }
    }
    matriz.push(linha);
}

console.log("Matriz 3x3:");
console.log(matriz);

console.log(`Soma de todos os elementos: ${soma}`);
console.log(`Quantidade de números pares: ${pares}`);
console.log(`Valores da diagonal secundária: ${diagonalSecundaria}`);





let matriz = []
for(let i=0; i<3; i++){
    matriz[i] = []
    for(let j=0; j<3; j++){
        matriz[i][j] = parseInt(Math.random() * 10)
    }
}
let Soma = 0
for(let i=0; i<matriz.length; i++){
    for(let j=0; j<matriz[i].length; j++){
        soma = soma + matriz[i][j]
    }
}
console.log(`Soma dos elementos ${soma}`)

let qtde = 0
for(let i=0; i<matriz.length; i++){
    for(let j=0; j<matriz[i].length; j++){
        if (matriz[i][j] % 2 === 0){
            qtde++
        }
    }
}
console.log(`Qtde dos elementos ${qtde}`)

let mat = []
for(let i=0; i<4; i++){
    mat[i] = []
    for(let j=0; j<4; j++){
        mat[i][j] = parseInt(Math.random() * 100)
    }
}
console.log(mat)

let soma = 0
for(let i=0; i<4; i++){
    let soma = 0
    for(let j=0; j<7; j++){
        soma = soma + mat[i][j]
    }
    console.log(`Vendedor ${i} vendeu ${soma}`)
}
let somaPorDia = 0
for(j=0; j<7; j++){
    somaPorDia = 0
    for(let i=0; i<4; i++){
        somaPorDia = somaPorDia + mat[i][j]
    }
    console.log(`Total de vendar por dia ${j} é ${somaPorDia}`)
}

let Poluicao = []
for(let i=0; i<5; i++){
    poluicao[i] = []
    for(let j=0; j<5; j++){
        do{
            poluicao[i][j] = prompt(`Informe poluição da região ${regioes[i]} no dia ${dias[j]}`)
        }
        while(poluicao[i][j] < 0 || poluicao[i][j] > 500)
    }
}
// Arrays auxiliares para regiões e dias
const regioes = ['Norte', 'Sul', 'Leste', 'Oeste', 'Centro'];
const dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

let poluicao = [];

// Leitura dos dados com validação
for(let i = 0; i < 5; i++) {
    poluicao[i] = [];
    for(let j = 0; j < 5; j++) {
        do {
            let valor = parseFloat(prompt(`Informe poluição da região ${regioes[i]} no dia ${dias[j]}`));
            if (!isNaN(valor) && valor >= 0 && valor <= 500) {
                poluicao[i][j] = valor;
            } else {
                alert('Valor inválido! Digite um número entre 0 e 500.');
                poluicao[i][j] = -1; // Força nova iteração
            }
        } while (poluicao[i][j] < 0 || poluicao[i][j] > 500);
    }
}

// 1. Diagonal principal e sua média
console.log('=== DIAGONAL PRINCIPAL ===');
let diagonalPrincipal = [];
let somaDiagonalPrincipal = 0;

for(let i = 0; i < 5; i++) {
    diagonalPrincipal.push(poluicao[i][i]);
    somaDiagonalPrincipal += poluicao[i][i];
    console.log(`Região ${regioes[i]}, Dia ${dias[i]}: ${poluicao[i][i]}`);
}

let mediaDiagonalPrincipal = somaDiagonalPrincipal / 5;
console.log(`Média da diagonal principal: ${mediaDiagonalPrincipal.toFixed(2)}`);

// 2. Diagonal secundária e sua média
console.log('\n=== DIAGONAL SECUNDÁRIA ===');
let DiagonalSecundaria = [];
let somaDiagonalSecundaria = 0;

for(let i = 0; i < 5; i++) {
    let j = 4 - i;
    diagonalSecundaria.push(poluicao[i][j]);
    somaDiagonalSecundaria += poluicao[i][j];
    console.log(`Região ${regioes[i]}, Dia ${dias[j]}: ${poluicao[i][j]}`);
}

let mediaDiagonalSecundaria = somaDiagonalSecundaria / 5;
console.log(`Média da diagonal secundária: ${mediaDiagonalSecundaria.toFixed(2)}`);

// 3. Maior índice de poluição registrado
let maiorIndice = -1;
let regiaoMaior = '';
let diaMaior = '';
let linhaMaior = -1;
let colunaMaior = -1;

for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 5; j++) {
        if (poluicao[i][j] > maiorIndice) {
            maiorIndice = poluicao[i][j];
            regiaoMaior = regioes[i];
            diaMaior = dias[j];
            linhaMaior = i;
            colunaMaior = j;
        }
    }
}

console.log('\n=== MAIOR ÍNDICE DE POLUIÇÃO ===');
console.log(`Maior índice: ${maiorIndice}`);
console.log(`Região: ${regiaoMaior}`);
console.log(`Dia: ${diaMaior}`);

// 4. Quantidade de índices acima de 300 (nível crítico)
let countCritico = 0;

for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 5; j++) {
        if (poluicao[i][j] > 300) {
            countCritico++;
        }
    }
}

console.log('\n=== NÍVEL CRÍTICO (>300) ===');
console.log(`Quantidade de registros acima de 300: ${countCritico}`);

// 5. Região com menor média de poluição
let menorMedia = Infinity;
let regiaoMenorMedia = '';
let mediasRegioes = [];

for(let i = 0; i < 5; i++) {
    let somaRegiao = 0;
    for(let j = 0; j < 5; j++) {
        somaRegiao += poluicao[i][j];
    }
    let mediaRegiao = somaRegiao / 5;
    mediasRegioes.push(mediaRegiao);
    
    if (mediaRegiao < menorMedia) {
        menorMedia = mediaRegiao;
        regiaoMenorMedia = regioes[i];
    }
}

console.log('\n=== REGIÃO COM MENOR MÉDIA ===');
console.log(`Região: ${regiaoMenorMedia}`);
console.log(`Média: ${menorMedia.toFixed(2)}`);

// Exibição resumida no console
console.log('\n=== RESUMO FINAL ===');
console.log('Média diagonal principal:', mediaDiagonalPrincipal.toFixed(2));
console.log('Média diagonal secundária:', mediaDiagonalSecundaria.toFixed(2));
console.log('Maior índice:', maiorIndice, `(${regiaoMaior} - ${diaMaior})`);
console.log('Registros acima de 300:', countCritico);
console.log('Região com menor média:', regiaoMenorMedia, `(${menorMedia.toFixed(2)})`);

// Exibição em alert para o usuário
alert(`RESULTADOS:\n
Média diagonal principal: ${mediaDiagonalPrincipal.toFixed(2)}
Média diagonal secundária: ${mediaDiagonalSecundaria.toFixed(2)}
Maior índice: ${maiorIndice} (${regiaoMaior} - ${diaMaior})
Registros acima de 300: ${countCritico}
Região com menor média: ${regiaoMenorMedia} (${menorMedia.toFixed(2)})`);