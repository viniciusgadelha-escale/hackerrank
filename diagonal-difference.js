function diagonalDifference(arr) {
    let n = arr.length;
    let primeira = 0;
    let segunda = 0;

    for (let i = 0; i < n; i++) {
        primeira += arr[i][i];          
        segunda += arr[i][n - 1 - i]; 
    }

    return Math.abs(primeira - segunda);
}
