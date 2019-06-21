/**
 * Determine whether a number is prime
 */

 isPrime = num =>{

    if(num <= 1){
        return false;
    }
    let flag = true;
    for(let i = 2; i< num; i++){
        if(num % i == 0){
            flag = false;
            break;
        }
    }

    return flag;
 }
 console.log(isPrime(4));

 /**
  * Find the nth prime number
  */
getPrime = n => {
    let flag = 0;
    let target;
    for(let i=2; i< Number.MAX_SAFE_INTEGER; i++){
        if(isPrime(i)){
            flag ++;
        }
        if(flag == n){
            target = i;
            break;
        }
    }
    return target;
}

console.log(getPrime(5));
