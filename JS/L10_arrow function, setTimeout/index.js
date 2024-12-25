// Функции

// const createProduct = (name, price, count) => {
//     if (name === '') {
//         name = 'Невідомий продукт';
//         console.log('ви задали неправильне імя продукта');
//     }

//     if (typeof price !== 'number') {
//         price = 0;
//         console.log('ви задали неправильну ціну');
//     }
//     if (typeof count !== 'number') {
//         count = 0;
//         console.log('Ви задалии неправильну кількість');
//     }

//     return {
//         name,
//         price,
//         count,
//     };
// }

// const calculateFinalPrice = (cart) => {
//     let finalPrice = 0;
//     for (let i = 0; i < cart.length; i++) {
//         const product = cart[i];
//         finalPrice += product.price * product.count;
//     }
//     return finalPrice;
// }

const name = 'Alex';
let final = 0;

// if (name === 'Alex') {
//     const product = createProduct('Арбуз', 100, 1);
//     const alexCart = [product];
//     const debt = 150;
//     calculateFinalPrice(alexCart, (price, t, t2) => {
//         console.log(t, t2);
//         console.log('ціна', price);
//         console.log('ціна + борг', price + debt);
//     });
// } else if (name === 'John') {
//     const product = createProduct('хлеб', 10, 2);
//     const johnCart = [product];
//     const debt = 50;
//     calculateFinalPrice(johnCart, (price, t, t2) => {
//         console.log(t, t2);
//         console.log('ціна', price);
//         console.log('ціна + борг', price + debt);
//     });
// } else {
//     const product = createProduct('Молоко', 50, 1);
//     const userCart = [product];
//     calculateFinalPrice(userCart, function (price, t, t2) {
//         console.log(t, t2);
//         console.log('ціна', price);
//     });
// }

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

function calculateFinalPrice(cart, callback) {
    setTimeout(() => {
        let finalPrice = 0;
        for (let i = 0; i < cart.length; i++) {
            const product = cart[i];
            finalPrice += product.price * product.count;
        }
        callback(finalPrice, 'test', 12);
    }, 1000);
}

// function add(a, b) {
//     return a + b;
// }

// const add = (a, b) => {
//     return a + b;
// };

// const add = (a, b) => (
//     a + b + 2 + 3 + 4 + 5 + 6 + 7
// );

// const add = (a, b) => a + b;

const add = (a, b) => {
    console.log('tes');
    return a + b;
};

console.log(add(5, 10));
