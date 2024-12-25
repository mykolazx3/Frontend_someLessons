// Тип данных object
// Объекты {}

const hello = "hello JS";

const test = {
  // hello: hello,
  hello,
  key1: "test",
  key2: 15135,
  key3: true,
  key4: ["12", "test"],
  "ktes jfieq": true,
  "test-123": "test",
};

console.log(typeof test);
console.log(test);

//___________________

const cart = {
  money: {
    sum: 500,
    currency: "rub",
    allowCurrency: ["rub", "euro"],
    discount: {
      hasDiscount: true,
      value: 30,
    },
  },

  items: [
    {
      title: "pen",
      count: 2,
      price: 100,
    },
    {
      title: "book",
      count: 1,
      price: 300,
    },
  ],
};

console.log(cart);

console.log(cart["money"]["sum"]);
console.log(cart.money.sum);
console.log(cart.money.discount.value);

console.log(cart.items[1].title);

cart["name"] = "anton";

console.log(cart);

// const array = [];
// array.name = true;
