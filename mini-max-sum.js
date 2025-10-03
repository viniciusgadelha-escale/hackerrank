function miniMaxSum(arr) {
    let total = arr.reduce((sum, num) => sum + num, 0);
    let minVal = Math.min(...arr); 
    let maxVal = Math.max(...arr); 

    let minSum = total - maxVal; 
    let maxSum = total - minVal; 

    console.log(minSum + " " + maxSum);
}
