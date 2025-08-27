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