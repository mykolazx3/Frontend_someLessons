//setAttribute, has Attribute, getAttribute, removeAttribute
//data-* attributes
//style(background-color -> backgroundColor)
//cssText
//className
//classList (add, remove, toggle, contains)

const input = document.querySelector('[name="my_checkbox"]');
// const input = document.querySelector('[type="checkbox"]');
console.log(input.getAttribute('name'));
console.log(input.getAttribute('type'));

const a = document.querySelector('a');
console.log(a.getAttribute('href'));
a.setAttribute('href', 'http://google.com');
console.log(a.getAttribute('href'));

console.log(a.hasAttribute('href'));
a.removeAttribute('href');
console.log(a.getAttribute('href'));
console.log(a.hasAttribute('href'));

a.setAttribute('data-test_attr', `link`);
input.setAttribute('data-test_attr', `input`);
console.log(input.dataset);

// a.style.color = 'red';
// a.style['background-color'] = 'green';
// a.style.backgroundColor = 'green';

// a.style.cssText = `
// color:red;
// background-color: black;
// `;

// const div = document.createElement('div');
// div.className = 'custom_className';

// a.className = a.className + ' link2';

console.log(a.classList);
console.log(a.classList.contains('link'));
a.classList.add('link2');
a.classList.add('link5');
a.classList.remove('link');
console.log(a.classList);
console.log(a.classList.contains('link'));

a.classList.toggle('active');

a.setAttribute('class', 'active');

const button = document.createElement('button');
button.textContent = 'Наша кнопка';
button.style.cssText = `
border-radius: 5px;
background: transparent;
padding: 4px 8px;
border: 1px solid black;
`;
document.body.append(button);
