function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[Erro] Algum campo está vazio.')
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'Contando:<br>'// Altera o valor da Div res para "Contando"//
        let i = Number(ini.value) // Altera i para number//
        let f = Number(fim.value)// Altera  f para number//
        let p = Number(passo.value)// Altera p para number//
        if (p <= 0){
            window.alert('[Erro] O passo tem que ser maior ou igual a 1')
            window.alert('Considerando passo igual a 1')
            p = 1
            }
             if(i<f){ // Se início for menor que fim            
                for(let c = i; c<=f; c+=p){ //Contagem crescente          
                res.innerHTML +=` ${c} \u{1F449}` // imprime res + c(contador)
                }
        }
        else{
            for(let c = i ; c >= f ; c -= p){// Contagem decrescente
                res.innerHTML += `${c} \u{1F449}`
            }
        }        
    }
}