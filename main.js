// task 1 - Does a function pickup latest changes?
// I think it will show "John"
// let name = "John";

// function sayHi() {
//     alert("Hi, " + name);
// }

// name = "Pete";

// sayHi(); 
// correct answer: it shows "Pete"

// task 2 - Which variables are available?
// I think it will show "Pete"
// function makeWorker() {
//     let name = "Pete";

//     return function() {
//         alert(name);
//     };
// }

// let name = "John";

// let work = makeWorker();

// work();

// task 3 - Are counters independent?
// I think it will show 0, 1, 0, 1
// function makeCounter() {
//     let count = 0;

//     return function() {
//         return count++;
//     };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// alert( counter() );
// alert( counter() );

// alert( counter2() );
// alert( counter2() );

// task 4 - Counter object
// I think it will show 1, 2, 1
// function Counter() {
//     let count = 0;

//     this.up = function() {
//         return ++count;
//     };
//     this.down = function() {
//         return --count;
//     };
// }

// let counter = new Counter();

// alert( counter.up() );
// alert( counter.up() );
// alert( counter.down() );

// task 5 - Function in if
// I think it will show an error
// let phrase = "Hello";

// if (true) {
//     let user = "John";

//     function sayHi() {
//         alert(`${phrase}, ${user}`);
//     }
// }

// sayHi();
// the solution shows that it should result in an error, but when I run the code, it works.

// task 6 - Sum with closures
// function sum(a) {
//     return function(b) {
//         return a + b;
//     }
// }

// alert( sum(1)(2) );
// alert( sum(5)(-1) );

// task 7 - Is variable visible?
// I think it will show 1
// let x = 1;

// function func() {
//     console.log(x);

//     let x = 2;
// }

// func();
// correct answer: it shows an error - cannot access 'x' before initialization at func

// task 8 - Filter through function
// let arr = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(a, b) {
//     return function(x) {
//         return x >= a && x <= b;
//     };
// }

// function inArray(arr) {
//     return function(x) {
//         return arr.includes(x);
//     };
// }

// alert( arr.filter(inBetween(3, 6)) );
// alert( arr.filter(inArray([1, 2, 10])) );

// task 9 - Sort by field
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(fieldName) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}