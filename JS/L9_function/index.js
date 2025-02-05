// Функции

const name = 'John';
let final = 0;

if (name === 'Alex') {
    const product = createProduct('Арбуз', 100, 1);
    const alexCart = [product];
    const debt = 150;
    final = calculateFinalPrice(alexCart);
    final += debt;
} else if (name === 'John') {
    const product = createProduct('хлеб', 10, 2);
    const johnCart = [product];
    const debt = 50;
    final = calculateFinalPrice(johnCart);
    final += debt;
} else {
    const product = createProduct('Молоко', 50, 1);
    const userCart = [product];
    final = calculateFinalPrice(userCart);
}

console.log(final);

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
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        finalPrice += product.price * product.count;
    }
    return finalPrice;
}
