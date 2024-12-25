// Анонимная, IIEFE (самовикликающа), рекурсивна, return

const name = 'John';
let final = 0;

if (name === 'Alex') {
    const product = createProduct('Арбуз', 100, 1);
    const alexCart = [product];
    const debt = 150;

    final = calculateFinalPrice(alexCart);
    console.log('ціна + борг', final + debt);
} else if (name === 'John') {
    const product = createProduct('хлеб', 10, 2);
    const johnCart = [product];
    const debt = 50;

    final = calculateFinalPrice(johnCart);
    console.log('ціна + борг', final + debt);
} else {
    const product = createProduct('Молоко', 50, 1);
    const userCart = [product];

    final = calculateFinalPrice(userCart);
    console.log('ціна + борг', final + debt);
}

function createProduct(name, price, count) {
    if (name === '') {
        name = 'Невідомий продукт';
        console.log('ви задали неправильне імя продукта');
    }

    if (typeof price !== 'number') {
        price = 0;
        console.log('ви задали неправильну ціну');
    }
    if (typeof count !== 'number') {
        count = 0;
        console.log('Ви задалии неправильну кількість');
    }

    return {
        name,
        price,
        count,
    };
}

function calculateFinalPrice(cart) {
    let finalPrice = 0;

    if (!cart || cart.length === 0) {
        return 0;
    }

    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        finalPrice += product.price * product.count;
    }

    return finalPrice;
}

// const add = () => {
//     return () => {
//         return () => {
//             console.log('Привет');
//         };
//     };
// };

// // const func = add();
// // func();

// add()()();

// const add = (a) => {
//     return (b) => {
//         return a + b;
//     };
// };
// const result = add(10)(15);
// console.log(result);

// const time = '9:00';

// const logWithTime = (message) => {
//     return time + ' - ' + message;
// };

// const log = (time) => {
//     return (message) => {
//         return time + ' - ' + message;
//     };
// };

// const logWithTime = log('9:00');
// // const logWithTime2 = log('13:00');

// setTimeout(() => {
//     const message = logWithTime('пользователь нажал войти');
//     console.log(message);
// }, 1000);

// setTimeout(() => {
//     const message = logWithTime('пользователь нажал вийти');
//     console.log(message);
// }, 2000);

(function () {
    console.log('test');
})();

(() => {
    console.log('test2');
})();

let i = 0;
const test = () => {
    i++;
    console.log('test');
    if (i === 10) {
        return;
    }
    test();
};

test();
