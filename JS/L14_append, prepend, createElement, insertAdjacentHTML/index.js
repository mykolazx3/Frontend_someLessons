//createElement, append, prepend, before, after, remove
//insertAdjacentHTML (beforebegin, afterbegin, beforeend, afterend)
// beforebegin - beforebegin
// afterbegin - prepend
// beforeend - append
// afterend - after

const div = document.querySelector('.element');
// div.remove();
// div.append('Привет ');
// div.append('Привет2 ');
// div.append('Привет3 ');
// div.prepend('Привет4 ');
// div.prepend('Начало ');

// div.before('Перед тегом div');
// div.before('Перед тегом div2');
// div.after('После тега div');
// div.after('После тега div2');

// const button = document.createElement('button');
// button.textContent = 'Наша кнопка';
// const button2 = document.createElement('button');
// button2.textContent = 'Наша кнопка #2';
// const button3 = document.createElement('button');
// button3.textContent = 'Наша кнопка #3';
// div.before(button);
// div.after(button);
// div.after(button2);
// div.after(button3);
// button3.after(button);

// const ul = document.createElement('ul');
// ul.innerHTML = `
//     <li>1</li>
//     <li>2</li>
// `;
// div.append(ul);

div.insertAdjacentHTML(
    'afterbegin',
    `
    <ul>
    <li>1</li>
    <li>2</li>
    </ul>
    `
);

div.insertAdjacentHTML(
    'beforebegin',
    `
   <p>text</p>
    `
);

const ul = div.querySelector('ul');
ul.insertAdjacentHTML(
    'beforeend',
    `
    <li>3</li>
    `
);
