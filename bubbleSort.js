var numbers = [22,2,10,7,5,31];

numbers.sort(function(a,b){
    return a - b;
});
console.log(numbers);

// Classify each of the following functions according to their Big O Time complexity:

            // Classification: O(n)- Time required experiences linear growth. (for Loop)

function printArray(arr){
        for(var i=0; i<arr.length; i++){
            console.log(arr[i]);
        }
    }

            // Classification: O(1)- time required remains the same. (given an array position)

function findNth(arr, n){
    console.log(arr[n]);
        }

            // Classification: O(log n)

function halving(n){
        var count = 0;
        while(n > 1){
            n = n/2;
            count++;
        }
        return count;
    }

            // Classification: O(n^2) - Time required experiences quadratic growth. Nested for-loops (BubbleSort)

function identityMatrix(n){
    var matrix = [];
    for(var i=0; i < n; i++){
        var row = [];
        for(var j=0; j < n; j++){
            if(j == i){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}