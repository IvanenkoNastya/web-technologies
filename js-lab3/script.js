'use strict';

// general

function printMessage(message) {
    console.log(message);
}

// task 1

function getSumOfFirstNNumbers(number) {
   let sum = 0;
    let i = 0;
    while (i < number) {
        sum += i;
        i++;
    }
    printMessage(sum);
    return sum;
}

// task 2

function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i < number; i++) {
        factorial *= i;
    }
    printMessage(factorial);
    return factorial;
}

// task 3

function getMonths(number) {
    let res = "something is wrong";
    switch (number) {
        case 1:
            res = "January";
            break;
        case 2:
            res = "February";
            break;
        case 3:
            res = "March";
            break;
        case 4:
            res = "April";
            break;
        case 5:
            res = "May";
            break;
        case 6:
            res = "June";
            break;
        case 7:
            res = "July";
            break;
        case 8:
            res = "August";
            break;
        case 9:
            res = "September";
            break;
        case 10:
            res = "October";
            break;
        case 11:
            res = "November";
            break;
        case 12:
            res = "December";
            break;
        default:
            break;
    }
    printMessage(res);
    return res;
}

// task 4

let arrayInput = [1, 4, 123, 1235,20, 2, 3];

function getSumOfEvenNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum += array[i];
        }
    }
    //printArray(array);
    let arrayStr = getArrayStr(array);
    printMessage(arrayStr);
    printMessage('task 1 (variant 4), sum of even numbers: ' + sum);
    return sum;
}

function getArrayStr(array) {
    let message = 'array: ';
    for (let i = 0; i < array.length; i++) {
        message += array[i] + ' ';
    }
    //printMessage(message);
    return message;
}

// task 5

let stringInput = "Some text with vowels. And more.";

let getVowels = (string) =>  {
    let vowelsString = "";
    string = string.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        switch (string[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                vowelsString = vowelsString + string[i];
                break;
            default:
                break;
        }
    }
    printMessage(vowelsString);
    return vowelsString;
}

// task 6

function getPower(base, exponent) {
    let res = base ^ exponent;
    printMessage(res);
    return res;
}
