'use strict';

let arrayInput = [1, 4, 123, 1235,20, 2, 3];

function getSumOfEvenNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum += array[i];
        }
    }
    printArray(array);
    printMessage('task 1 (variant 4), sum of even numbers: ' + sum);
    return sum;
}

function printArray(array) {
    let message = 'array: ';
    for (let i = 0; i < array.length; i++) {
        message += array[i] + ' ';
    }
    printMessage(message);
}

function printMessage(message) {
    console.log(message);
}
