let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 4 está na posição ${pos}`)
}

/*
var vetor = [5,4,3,900,8000]
vetor[8] = 9   // Dei push em três posições a mais que o limite do meu vetor

for (var c = 0;c< vetor.length; c++) {
    valor = vetor.indexOf(vetor[c])
    if (valor == -1) {
    console.log(`A posição ${c} vazia `)
    } else if (valor >=0){
    console.log(`A posição ${c} está ocupada`)
    }
}
*/