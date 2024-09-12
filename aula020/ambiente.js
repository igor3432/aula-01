let num = [5,8,2,9,3]


num.push(1)// pucha um valor pro final 
num.sort() // coloca os valores em ordem 
console.log(num)
console.log(`O vetor tem ${num.length} posiçoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
//console.log(`Nosso vetor é o ${num}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('o valor nao foi encontrado!')
}else {
    console.log(`o valor esta na posiçao ${pos}`)
}
