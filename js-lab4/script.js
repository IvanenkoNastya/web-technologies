'use strict';

// general
function printMessage(message) {
    console.log(message);
}

function printObjectArray(array) {
    array.forEach((item, index) => {
        printMessage(`${index}.`);
        printObject(item);
        /*for (let key in item) {
            printMessage(`\t${key}: ${item[key]}`);
        }*/
    });
}

function printObject(obj) {
    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            printMessage(`\t${key}:`);
            printMessage(obj[key].join(", "));
        } else {
            printMessage(`\t${key}: ${obj[key]}`);
        }
    }
}

// task 1
function workWithFruitsArray() {
    let fruits = ["Orange", "Apple", "Tomato", "Watermelon"];
    fruits.pop(-1);
    printMessage(fruits);
    fruits.unshift("Pineapple");
    printMessage(fruits);
    fruits.sort().reverse();
    printMessage(fruits);
    let str = "Apple";
    printMessage(`Index of ${str} is ${fruits.indexOf(str)}`);
}

// task 2
function workWithColoursArray() {
    let colours = ["Orange", "Green", "Blue", "Grey", "Purple", "Yellow", "Magenta", "Black", "White"];

    let theLongest = colours.reduce(function(accumulator, item) {
        if (item.length > accumulator.length) {
            return item;
        } else {
            return accumulator;
        }
    }, colours[0]);
    printMessage(`The largest colour: ${theLongest}`);

    let theShortest = colours.reduce(function(accumulator, item) {
        if (item.length < accumulator.length) {
            return item;
        } else {
            return accumulator;
        }
    }, colours[0]);
    printMessage(`The shortest colour: ${theShortest}`);

    colours.push("Dark blue", "Argentinian blue");
    colours = colours.filter(item => item.toString().toLowerCase().includes("blue") === true);
    let result = colours.join(", ");
    printMessage(`Only blue array: ${result}`);
}

// task 3
function workWithWorkersArray() {
    let workers = [
        {
            name: "John",
            age: 25,
            job_title: "Writer",
            //[Symbol.isConcatSpreadable]: true,
        },
        {
            name: "Alex",
            age: 28,
            job_title: "Physics specialist",
        },
        {
            name: "Petro",
            age: 24,
            job_title: "Optical engineer",
        },
        {
            name: "Den",
            age: 40,
            job_title: "Embedded Developer",
        },
        {
            name: "Adam",
            age: 33,
            job_title: "Backend developer",
        },
    ];

    workers.sort((a, b) => a.name.localeCompare(b.name));
    let devs = workers.filter(item => item["job_title"].toString().toLowerCase().includes("developer") === true);
    printMessage("Developers:")
    printObjectArray(devs);

    workers = workers.filter(item => item["age"] < 35);

    printMessage("All workers of age less than 35:")
    printObjectArray(workers);
}

// task 4
function workWithStudentsArray() {
    let thirdKey = "year"
    let students = [
        {
            name: "John",
            age: 25,
            [thirdKey]: 1,
        },
        {
            name: "Alex",
            age: 22,
            [thirdKey]: 4,
        },
        {
            name: "Petro",
            age: 20,
            [thirdKey]: 2,
        },
        {
            name: "Den",
            age: 19,
            [thirdKey]: 2,
        },
        {
            name: "Adam",
            age: 24,
            [thirdKey]: 5,
        },
    ];
    // remove Alex
    let studentToBeDeletedId = students.findIndex(item => item.name === "Alex");
    students.splice(studentToBeDeletedId, 1);
    // add new student
    let newStudent = {
        name: "Luna",
        age: 17,
        [thirdKey]: 1,
    };
    students.push(newStudent);
    // sort by age (reversed)
    students.sort((a, b) => b.age - a.age);
    // print them
    printObjectArray(students);
}

// task 5
function WorkWithNumbersArray() {
    let numbers = [1, 2, 4, 2, 6, 0, 12, 8];
    numbers = numbers.map(a => a * a);
    printMessage("Squares:");
    printMessage(numbers.join(", "));

    numbers = numbers.filter(a => a % 2 === 0);
    printMessage("Only even numbers:");
    printMessage(numbers.join(", "));

    let sum = numbers.reduce((sum, current) => sum + current, 0)
    printMessage("Sum of all numbers left: " + sum);

    let newArr = [1, 2, 3, 4, 5];
    numbers = numbers.concat(newArr);

    numbers = numbers.splice(3);
    printMessage("With new 5 elements, without first 3:");
    printMessage(numbers.join(", "));
}

// task 6
function libraryManagement() {
    let books = [
        createBook("The Hobbit", "J. R. R. Tolkien", "Fantasy", 310, true),
        createBook("The Fellowship of the Ring", "J. R. R. Tolkien", "Fantasy", 423, true),
        createBook("The Two Towers", "J. R. R. Tolkien", "Fantasy", 352, true),
        createBook("The Return of the King", "J. R. R. Tolkien", "Fantasy", 416, false),
        createBook("Good Omens", ["Terry Pratchett", "Neil Gaiman"], ["Fantasy", "Horror", "Comedy"], 288, true),
        createBook("The Three-Body Problem", "Liu Cixin", "Hard science fiction", 390, false),
        createBook("The Dark Forest", "Liu Cixin", "Hard science fiction", 400, true),
        createBook("Death's End", "Liu Cixin", "Hard science fiction", 592, true),
        createBook("The Neverending Story", "Michael Ende", "Fantasy", 400, false),
    ];

    addBook(
        "The Ocean at the End of the Lane",
        "Neil Gaiman",
        ["Dark fantasy", "Surrealism", "Horror", "Magical realism"],
        178,
    )

    removeBook("The Neverending Story");

    let booksByTolkien = findBooksByAuthor("J. R. R. Tolkien");

    printMessage("Books by Tolkien:")
    printObjectArray(booksByTolkien);

    updateBookAvailability("The Hobbit", true);

    sortBooksByPages();

    printMessage("Library state by the end:")
    printObjectArray(books);

    printMessage("Books statistics:")
    printObject(getBooksStatistics());

    function createBook(title, author, genre, pages, isAvailable) {
        return {
            title,
            author,
            genre,
            pages,
            isAvailable,
        };
    }

    function addBook(title, author, genre, pages) {
        books.push(createBook(title, author, genre, pages, true));
    }

    function removeBook(title) {
        /*let bookToBeDeletedId = books.findIndex(item => item.title === title);
        books.splice(bookToBeDeletedId, 1);*/
        books = books.filter(item => item.title !== title);
    }

    function findBooksByAuthor(author) {
        return books.filter(item => item.author === author);
    }

    function updateBookAvailability(title, isBorrowed) {
        let id = books.findIndex(item => item.title === title);
        books[id].isAvailable = !isBorrowed;
    }

    function sortBooksByPages() {
        books.sort((a, b) => a.pages - b.pages);
    }

    function getBooksStatistics() {
        let availableBooksAmount = books.filter(item => item.isAvailable === true).length;
        let borrowedBooksAmount = books.filter(item => item.isAvailable === false).length;
        let pagesAverage = books.reduce((sum, current) => sum + current.pages, 0) / books.length;
        return {
            amount: books.length,
            available: availableBooksAmount,
            borrowed: borrowedBooksAmount,
            pages_average: pagesAverage,
        };
    }
}


// task 7
function WorkWithStudent() {
    let student = {
        name: "John",
        age: 25,
        year: 1,
    }
    student.list_of_courses = [
        "Linear algebra",
        "Analysis",
        "Object-oriented programming",
        "Web development",
        "Philosophy",
        "History",
    ];
    delete student.age;
    printObject(student);
}
