'use strict';

let isHello = false;

function mouseLeftMyButton() {
    let elemToChange = document.getElementsByTagName('div')[0];
    console.error(elemToChange.innerHTML + ' Anastasiia Ivanenko');
}

function clickOnMyButton() {
    let elemToChange = document.getElementsByClassName('label')[0];
    if (isHello === true) {
        elemToChange.innerHTML = 'Goodbye world!';
        isHello = false;
    } else {
        elemToChange.innerHTML = 'Hello world!';
        isHello = true;
    }
    //alert('Hello World');
}
