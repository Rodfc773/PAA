for (let n = 1000; n <= 10000; n += 1000){

    console.log(`${n} : ${Math.round( 9.2 * n + n/2.5 * Math.log(n))}`);
}