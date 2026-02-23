'use strict';

// task 1

//let arrayOfNumbers = [23, 12, 2, 55, 18];
let arrayOfNumbers = [2, 2, 2, 2];

function findMaxAndMin(array) {
    let min = +array[0];
    let max = +array[0];
    for (let i = 0; i < array.length; i++) {
        let value = +array[i];
        if (value > max) {
            max = value;
        }
        if (value < min) {
            min = value;
        }
    }
    let result = '';
    if (areObjectsEqual(min, max)) {
        result = 'min = max = ' + min;
    } else {
        result = 'min: ' + min + ', max: ' + max;
    }
    console.log(result);
    return result;
}

function areObjectsEqual(first, second) {
    if (typeof first === typeof  second && first - second === 0) {
        return true;
    } else {
        return false;
    }
}

// task 2

let someNumber = 5;
let someBoundaries = [1, 8];

function isInside(number, boundaries) {
    let left = boundaries[0];
    let right = boundaries[1];
    if (left > right) {
        let tmp = left;
        left = right;
        right = tmp;
    }
    let result = false;
    if (number >= left && number <= right) {
        result = !result;
    }
    console.log('Is number' + number + ' within the boundaries (' + left + ',' + right + ')? ' + result);
    return result;
}

// task 3

let studentMark = 88;

function nameTheMark(mark) {
    let theAnswer = 'no info';
    if (mark < 0 || mark > 100) {
        theAnswer = 'error';
    } else {
        if (mark < 34) {
            theAnswer = 'F, Fail'
        } else if (mark < 59) {
            theAnswer = 'FX, Fail'
        } else if (mark < 63) {
            theAnswer = 'E, Satistifactory'
        } else if (mark < 73) {
            theAnswer = 'E, Satistifactory'
        } else if (mark < 81) {
            theAnswer = 'C, Good'
        } else {
            theAnswer = mark < 89 ? 'B, Good' : 'A, Exellent';
        }
    }
    console.log(mark + ': ' + theAnswer);
    return theAnswer;
}

/*function readNumber() {
    let numberStr = prompt('Input one number:', '0');
    return +numberStr;
}

function readTwoNumbers() {
    let arrayStr = prompt('Input 2 numbers separating them by comma (,):', '0,0');
    return arrayStr.split(',');
}

function readArray() {
    let arrayStr = prompt('Input numbers separating them by comma (,):', '0');
    return arrayStr.split(',');
}*/

/*function getMaxAndMin(array) {
    let min = +array[0];
    let max = +array[0];
    for (let i = 0; i < array.length; i++) {
        let value = +array[i];
        if (value > max) {
            max = value;
        }
        if (value < min) {
            min = value;
        }
    }
    return { min , max };
}*/


