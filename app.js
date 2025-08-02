/***************************************************************************
 * Objetivo: Criar um app para ao calcilo de médias Escolares
 * Autor: Paulo
 * Data: 01/08
 * Versão: 1.0
 ***************************************************************************/


//Import da biblioteca para permitir a entrada de dados pelo terminal
const { Console } = require('console')
const { parse } = require('path')
var readline = require('readline')

//Criando uma interface da entrada e saída de dados no terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//criando uma entrada de nome para o usuário
entradaDeDados.question('Digite o seu nome: ', function(nome){
    let nomeAluno = String(nome).toUpperCase()

    entradaDeDados.question('Digite a nota de Biologia: ', function(nota1){
        let valor1 = nota1
        
        entradaDeDados.question('Digite a nota de Educação Fisica: ', function(nota2){
            let valor2 = nota2

            entradaDeDados.question('Digite a nota de Educação Financeira: ', function(nota3){
                let valor3 = nota3

                entradaDeDados.question('Digite a nota de Empreedorismo: ', function(nota4){
                    let valor4 = nota4

                    entradaDeDados.question('Digite a nota de Física: ', function(nota5){
                        let valor5 = nota5

                        entradaDeDados.question('Digite a nota de Geografia: ', function(nota6){
                            let valor6 = nota6

                            entradaDeDados.question('Digite a sua nota de História: ', function(nota7){
                                let valor7 = nota7

                                entradaDeDados.question('Digite a sua nota de Ingles', function(nota8){
                                    let valor8 = nota8

                                    entradaDeDados.question('Digite a sua nota de Portugues: ', function(nota9){
                                        let valor9 = nota9

                                        entradaDeDados.question('Digite a nota de Matemática: ', function(nota10){
                                            let valor10 = nota10

                                            entradaDeDados.question('Digite a nota de Progamação: ', function(nota11){
                                                let valor11 = nota11

                                                entradaDeDados.question('Digite a nota de Projeto de Vida: ', function(nota12){
                                                    let valor12 = nota12

                                                    entradaDeDados.question('Digite a nota de Química: ', function(nota13){
                                                        let valor13 = nota13

                                                        entradaDeDados.question('Digite a nota de Redação e leitura: ', function(nota14){
                                                            let valor14 = nota14

                                                            entradaDeDados.question('Digite a nota de Sociologia: ', function(nota15){
                                                                let valor15 = nota15

                                                                if(nomeAluno == '' || valor1 == '' || valor2 == '' || valor3 == '' || valor4 == '' || valor5 == '' || valor6 == '' || valor7 == '' || valor8 == '' || valor9 == '' || valor10 == '' || valor11 == '' || valor12 == '' || valor13 == '' || valor14 == '' || valor15 == ''){
                                                                    console.log('ERRO: Não foi possivel calcular a medía, pois existem, campos qeu não foram preechidos!')
                                                                } else if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota4 < 0 || nota4 > 10 ||
                                                                    nota5 < 0 || nota5 > 10 || nota6 < 0 || nota6 > 10 || nota7 < 0 || nota7 > 10 || nota8 < 0 || nota8 > 10 ||
                                                                    nota9 < 0 || nota9 > 10 || nota10 < 0 || nota10 > 10 || nota11 < 0 || nota11 > 10 || nota12 < 0 || nota12 > 10 ||
                                                                    nota13 < 0 || nota13 > 10 || nota14 < 0 || nota14 > 10 || nota15 < 0 || nota15 > 10) {
        
                                                                    console.log('ERRO: Não foi possivel menores que 0 ou valores maior que 10!')
                                                                }else{

                                                                    let media = (Number(valor1) + Number(valor2) + Number(valor3) + Number(valor4) + Number(valor5) + Number(valor6) + Number(valor7) + Number(valor8) + Number(valor9) + Number(valor10) + Number(valor11) + Number(valor12) + Number(valor13) + Number(valor14) + Number(valor15)) / 15

                                                                    console.log(`O aluno ${nomeAluno} teve a média ${media.toFixed(1)}`)
                                                                }
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })

                })
            })
        })
    })
})