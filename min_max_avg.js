// minmaxavg([1, -2, 9, 4]) returns "The min is -2, the max is 9, and the avg is 3."


function maxMinAvg(arr){
    var min = arr[0]
    var max = arr[0]
    var sum = 0
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min =arr[i]
        }
        if (arr[i]> max){
            max = arr[i]
        }
        sum += arr[i]
    }
    var avg = sum/arr.length



    return( 'The minimum is ' + min +', the max is '+ max + ', and the avg is '+ avg +'.')
}

console.log(maxMinAvg([1, -2, 9, 4]))