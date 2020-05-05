// Given an array of sorted numbers and a value (also a number), return whether the array contains that value. Return the index position of the value if it exists and -1 if it does not exist. 

// Do not sequentially iterate through the array. Take advantage of the fact that the array is sorted and use a 'divide and conquer' technique. Very similar to when we are searching for a word in a dictionary (the book kind) we may: 

// Start our search in the center and determine whether we need to search the back half or the front half. 
// Choose a spot around the center of the half of the array we still need to search.
// From here, determine which quarter of the array we still need to search. 
// In this way our search is very rapidly narrowed until we find out whether the value we are searching for is in the array or not.

arr1 = [2,4,8,10,15,16,20,22,24,30,67,99,122,146]


function findNumber(arr, num){
    var mid = Math.floor(arr.length / 2);
    console.log(arr[mid], num);

    if (arr[mid] === num) {
        console.log('Number matched', arr[mid], num);
        return arr[mid];
    } else if (arr[mid] < num && arr.length > 1) {
        console.log('middle value is lower', arr[mid], num);
        return findNumber(arr.splice(mid, Number.MAX_VALUE), num);
    } else if (arr[mid] > num && arr.length > 1) {
        console.log('middle value is higher', arr[mid], num);
        return findNumber(arr.splice(0, mid), num);
    } else {
        console.log('value not in range', num);
        return -1;
    }
    
}
var result = findNumber(arr1, 20);

console.log(result);


// console.log(findNumber(arr1, 20))