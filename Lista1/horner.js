function horner(array, x){

    let n = array.length - 1;
    let p = array[n];
    j = 0

    console.log(`P vale ${p} antes do laço`)

    for(let i = n - 1; i >= 0; i--){

        p = p * x + array[i]
        j++;

        console.log(`P vale ${p} após ${j} interações`)

    }

    return p
}

console.log(horner([2,5,7], 3))
