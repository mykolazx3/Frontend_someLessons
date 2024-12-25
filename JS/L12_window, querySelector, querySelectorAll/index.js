//window
//getElementById
//getElementsByClassName
//getElementByTagName
//querySelector
//querySelectorAll

console.log(window);
// window.setTimeout;

// function test(a, b, showInfo = true) {
//     if (showInfo) {
//         return 'ответ: ' + (a + b);
//     }
//     return a + b;
// }
// console.log(test(10, 50));

// const button = window.document.getElementById('hello1');
// console.log(button);
// console.dir(button);

// const buttons = window.document.getElementsByClassName('test2');
// console.dir(buttons);

// const button = window.document.getElementsByTagName('button');
// console.log(button);

// const button = window.document.querySelector('button');
// const buttons1 = window.document.querySelectorAll('button');
// const buttons2 = window.document.querySelectorAll('.test1');
// const buttons3 = window.document.querySelectorAll('#hello1');
// console.log(buttons3);

const span = window.document.querySelectorAll('button > span');
console.log(span);
