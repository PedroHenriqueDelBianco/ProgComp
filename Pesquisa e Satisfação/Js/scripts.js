function exe0(){
    let nota // guarda as notas
    let conta = 1 // conta de 1 a 6
    let soma = 0
    while (conta <= 6){
        nota = Number(prompt(`Informe a nota ${conta}`))
        soma = soma + nota
        conta++ // conta = conta + 1
    }
    let media = soma / 6
    // mostra o resultado
     alert(`A média das notas é ${media.toFixed(1)}`)
}

function pesquisadesatisfacao() {
    let conta = 1
    let nota    
    let contaSatisfeitos = 0
    let contaInsatisfeitos = 0
    while (conta <= 10) {
        nota = Number(prompt(`Informe a nota (0 a 10) do participante ${conta}`))
        if (nota >= 8 && nota <= 10) {
            contaSatisfeitos++
        }
        else if (nota <0 && nota < 5) {
            contaInsatisfeitos++
        }
        else if (nota >= 0 || nota < 10) {
            alert(`Nota Invalida`)
        }
        conta++
    }
    alert(`Satisfeitos ${contaSatisfeitos} \n
        Insatisfeitos ${contaInsatisfeitos} \n
        Média das Notas ${(soma/10).toFixed(2)}`)
}