var hora = 19
console.log(`A são exatamente ${hora}.`)
if (hora < 5){
    console.log(`Boa madrugada`)
} else if (hora < 12) {
    console.log(`Bom dia`)
}else if (hora < 18) { 
    console.log(`Boa tarde`)
} else {
    console.log(`Boa noite`)
}