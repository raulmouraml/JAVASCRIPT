function parimpar(n){/*Função "parimpar vai receber um número(n) como parametro"*/
    if(n%2 == 0 ){ /* Se o resto da divisão de n por 2 for igual a zero*/
        return 'Par!'/* Retornar Par*/
    } else {        /* se não**/
        return 'Impar!'/* Retornar impar*/
    }
}
let res = parimpar(4) /* Variável res recebe a função "parimpar com o parâmetro 4"*/
console.log(res) /* Imprima res*/