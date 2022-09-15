// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(num){
    return num.length === 0 ? 0 : num.map(a => a ** 2).reduce((a,b) => a + b,0);
}