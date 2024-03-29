var aguora = new Date()
var hora = aguora.getHours()
console.log(`Aguora são exatamente ${hora} horas.`)
if (hora < 12 ) {
    console.log('Bom dia!')
 } else if (hora <= 18){
        console.log('boa tarde!')
    }else {
        console.log('Boa noite!')
    }
