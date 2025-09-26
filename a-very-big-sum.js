function aVeryBigSum(ar) {
    let sum = 0n; 
    for (let num of ar) {
        sum += BigInt(num);
    }
    return sum.toString();
}
