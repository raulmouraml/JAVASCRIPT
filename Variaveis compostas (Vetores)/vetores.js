let num = [5,3,7,9,2]
num.push(4)/* Insere um valor na última posição do vetor*/
num.sort()/* Organiza de forma crescente os valores do vetor*/
console.log (`Seu vetor tem ${num.length} posições!`)/* length diz o tamanho do vetor*/
console.log(num)/* Imprime os valores do vetor*/
/* For tradicional*/
/*for(let cont=0;cont<num.length;cont++){
    console.log(`A posição ${cont} tem o valor ${num[cont]}`)
}*/
/* For para vetores*/
for(let pos in num){ /* Para cada posição em num*/
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
let posicao= num.indexOf(4) /* index0f indica a posição do valor*/
if (posicao== -1){
    console.log('Valor inesistente')
}else
console.log(`O valor 3 está na posição ${posicao}`)
