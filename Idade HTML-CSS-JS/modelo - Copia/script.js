function verificar(){
var data = new Date() // Pega a data atual do computador //
var ano = data.getFullYear()// Pega o ano atual //
var fano = document.getElementById('txtano') // Pega o que foi digitado na caixa txtano
var res = document.querySelector('div#res')// Pega o que está na div com id res
if (fano.value.length == 0 || fano.value > ano){
    window.alert('[Erro!] Verifique os dados e tente novamente')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    res.innerHTML = `Idade calculada: ${idade}`
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (fsex[0].checked){
        gênero = 'Homem'
        if (idade >=0 && idade < 10) {
            img.setAttribute('src','Menino.jpeg')    
        } else if (idade < 18){
            //adolecente
            img.setAttribute('src','AdolecenteH.jpeg')
        } else if (idade < 50){
            //adulto
            img.setAttribute('src','Homem.jpeg')
        } else {
            //idoso 
            img.setAttribute('src','vovô.jpeg')       
        }
    } else if (fsex[1].checked){
        gênero= 'Mulher'
        if (idade >=0 && idade < 10) {
            //Criança
            img.setAttribute('src','Menina.webp') 
        } else if (idade < 18){
            //adolecente
            img.setAttribute('src','AdolecenteM.jpeg') 
        } else if (idade < 50){
            //adulto
            img.setAttribute('src','Mulher.jpeg') 
        } else {
            //idoso   
            img.setAttribute('src','vovó.webp') 
        }
    }
        res.innerHTML = `Você é do gênero ${gênero}, de ${idade} anos. `
        res.appendChild(img)
}

}