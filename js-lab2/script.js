function executeTask1() {
    let inputArray = readArray();
    let result = getMaxAndMin(inputArray);
    console.log(result);
    return result;
}

function executeTask2() {
    let inputNumber = readNumber();
    let boundaries = readTwoNumbers();
    let left = boundaries[0];
    let right = boundaries[1];
    if (left > right) {
        let tmp = left;
        left = right;
        right = tmp;
    }

    let result = false;
    if (inputNumber >= left && inputNumber <= right) {
        result = !result;
    }

    console.log(inputNumber + ' is within the boundaries (' + left + ',' + right + ')? ' + result);
    return result;
}

function executeTask3() {

}

function readNumber() {
    let numberStr = prompt('Input one number:', '0');
    return +numberStr;
}

function readTwoNumbers() {
    let arrayStr = prompt('Input 2 numbers separating them by comma (,):', '0,0');
    let array = arrayStr.split(',');
    return array;
}

function readArray() {
    let arrayStr = prompt('Input numbers separating them by comma (,):', '0');
    let array = arrayStr.split(',');
    return array;
}

function getMaxAndMin(array) {
    console.log('hello2');
    let min = +array[0];
    let max = +array[0];
    for (let i = 0; i < array.length; i++) {
        console.log('for');
        let value = +array[i];
        if (value > max) {
            max = value;
        }
        if (value < min) {
            min = value;
        }
    }
    return { min , max };
}

