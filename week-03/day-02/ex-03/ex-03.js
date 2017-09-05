'use strict';

// Implement the selectLastEvenNumber function that takes an array and callback,
// it should call the callback immediately with the last even number on the array


function printNumber(num) {
    console.log(num);
}

function selectLastEvenNumber(arr, callback) {
    var num = arr.filter(
        u => {
            return u % 2 === 0;
        }
    );
    var last = num[num.length - 1]
    callback(last);

}

selectLastEvenNumber([2, 5, 7, 8, 9, 11], printNumber); // should print 8