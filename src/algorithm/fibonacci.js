/**
 * Find the nth fibonacci number
 */
fbcci = n => {
    if (n < 0) return 1;
    if (n == 1 || n == 2) return 1;
    let array = [1, 1, 2];
    for (let i = 3; i < n; i++) {
        array[i] = array[i - 1] + array[i - 2];
    }
    return array[n-1];
}

console.log(fbcci(5));