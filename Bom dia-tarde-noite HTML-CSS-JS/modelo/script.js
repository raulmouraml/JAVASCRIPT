function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 13
msg.innerHTML = `Agora são ${hora} horas.`
if (hora>= 0 && hora <12){
    img.src = 'manha.jpg'
    document.body.style.background = 'rgb(251, 253, 139)'
} else if (hora >=12 && hora<18){
    img.src = 'tarde.jpg'
    document.body.style.background = 'rgb(108, 220, 248)'
} else {
    img.src = 'noite.jpg'
    document.body.style.background = 'rgb(0, 0, 0)'
}
}
