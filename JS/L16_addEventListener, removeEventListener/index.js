// click, input, scroll, keydown, resize, mouseenter, mouseleave
// addEventListener, removeEventListener

const button = document.querySelector('button');
// button.addEventListener('click', clickHandler);

// let i = 0;

// function clickHandler() {
//     i++;
//     console.log('click', i);

//     switch (i) {
//         case 1:
//             button.style.background = 'red';
//             break;
//         case 2:
//             button.style.background = 'green';
//             break;
//         case 3:
//             button.style.background = 'pink';
//             break;
//         case 4:
//             button.style.background = 'yellow';
//             break;
//         case 5:
//             button.style.background = 'blue';
//             button.removeEventListener('click', clickHandler);
//             break;
//     }
// }

// const input = document.querySelector('[name="my_input"]');
// // console.log(input);

// input.addEventListener('input', input_function);

// let prevValue = input.value;

// function input_function(event) {
//     console.log('input', event.target.value);
//     const userData = event.target.value;

//     if (userData.includes('(') || userData.includes(')')) {
//         input.value = prevValue;
//         return;
//     }
//     input.value = userData;
//     prevValue = userData;
// }

// document.addEventListener('scroll', (event) => {
//     console.log(event.target.scrollingElement.scrollTop);
// });

document.addEventListener('keydown', (event) => {
    console.log(event);
});

window.addEventListener('resize', (event) => {
    console.log(event.target.innerWidth);
});

button.addEventListener('mouseenter', (event) => {
    console.log('ENTER');
});

button.addEventListener('mouseleave', (event) => {
    console.log('LEAVE');
});
