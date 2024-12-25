// function
// arrow function
// arguments
// return

// function calculate() {
//     const a = 10;
//     const b = 20;

//     console.log(a + b);
// }

// calculate();

console.log('нажав товар А');
addProduct();
console.log('нажав товар Б');
addProduct(true);
console.log('нажав товар В');
const result = addProduct();
console.log(result);

function addProduct(ignoreBlocked = false, ignorePossibleToDelivery = true) {
    const isAvalilable = isProductAvailable();
    if (!isAvalilable) {
        console.log('Товара нет в наличие');
        return;
    }

    if (!ignoreBlocked) {
        const blocked = isBlocked();
        if (blocked) {
            console.log('Ви заблоковані');
            return;
        }
    }
    if (!ignorePossibleToDelivery) {
        const possible = possibleToDelivery();
        if (!possible) {
            console.log('Нет возможности доставить');
            return;
        }
    }

    console.log('Товар добавлен в корзину');
    return 'Все хорошо';
}

function isProductAvailable() {
    const result = true;
    return result;
}

function isBlocked() {
    // return true;
}

function possibleToDelivery() {}

// function calculate() {
//     const a = 10;
//     const b = 15;

//     const result = a + b;
//     const result2 = a - b;

//     return { one: result, two: result2 };
//     // return [result1, result2];
//     // return undefined;
// }

// const sum = calculate();
// // console.log(sum);
// // const sum2 = calculate();
// // const sum3 = calculate();

// // console.log(sum, sum2, sum3);
// console.log(sum.one);
// console.log(sum.two);
// // console.log(sum[0],sum[1]);

const calculate2 = () => {
    const a = 10;
    const b = 15;
    return a + b;
};

calculate2();

function calculate3(a, b) {
    return a + b;
}
console.log(calculate3(10, 15));

//практика

const myFilms = getFilms();

// {
//     title: 'Всі фільми',
//     films: [
//         {name: ' Хроніки нарнії'},
//         {name: ' Чоловік павук'},
//         {name: ' Чтото еще'}
//     ]
// }

console.log(myFilms);

const myFilms2 = getFilms('Фильм за сьогодні');

// {
//     title: 'Фильм за сьогодні',
//     films: [
//         {name: ' Хроніки нарнії'},
//         {name: ' Чоловік павук'},
//         {name: ' Чтото еще'}
//     ]
// }

console.log(myFilms2);

// //getFilms
// const films = [];

// addNewFilm({ name: 'Хроники нарнии' }, 0);
// addNewFilm({ name: 'Чоловік павук' }, 1);
// addNewFilm({ name: 'Щось ще' }, 2);

// // console.log - цей фільм не буде добавлений, бо нема індекса
// // addNewFilm({name: "Поганий фільм"});

function getFilms(title = 'Всі фільми') {
    return {
        filmTitle: title,
        films: getFilmsArray(),
    };
}

function getFilmsArray() {
    const films = [];

    addNewFilm({ name: 'Хроники нарнии' }, 0);
    addNewFilm({ name: 'Чоловік павук' }, 1);
    addNewFilm({ name: 'Щось ще' }, 2);

    function addNewFilm(film, index) {
        if (index === undefined) {
            console.log('фільм не буде добавлений тк нема індекса');
        }
        films[index] = film;
    }
    return films;
}

// function a() {
//     const hello = 10;
//     function b() {
//         console.log(hello);
//     }

//     b();
// }

// a();

// function calc(a, b) {
//     return a + b;
// }

// calc(1, 2, () => {
//     console.log('Я викликаюсь');
// });

const data = [
    { id: 10, name: 'Alex', money: 1000 },
    { id: 11, name: 'John', money: 500 },
    { id: 55, name: 'Anna', money: 5500 },
];

function getUsersMoney(userInfo, callback) {
    const id = userInfo.id;
    let result = null;

    for (let i = 0; i < data.length; i++) {
        const user = data[i];

        if (user && user.id === id) {
            result = user;
        }
    }
    const str = callback(result);
    return str;
}

const alexStr = getUsersMoney({ id: 10 }, (user) => {
    const str = 'у ' + user.name + ' ' + user.money + ' рублей';
    return str;
});
console.log(alexStr);

const johnStr = getUsersMoney({ id: 11 }, (user) => {
    const str = 'у ' + user.name + ' ' + user.money + ' рублей';
    return str;
});
console.log(johnStr);

const annaStr = getUsersMoney({ id: 55 }, (user) => {
    const str = 'у ' + user.name + ' ' + user.money + ' рублей';
    return str;
});
console.log(annaStr);
