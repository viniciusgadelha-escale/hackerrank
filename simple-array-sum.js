function simpleArraySum(ar) {

    let soma = 0

    const n = ar.length

    for (let i = 0; i < n; i++){
        soma = soma + ar[i]
    }

     return soma

}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]))

