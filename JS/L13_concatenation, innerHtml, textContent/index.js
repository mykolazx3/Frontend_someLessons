//concatenation
//document без windows
//firstElementChild, lastElementChild, children
//parentNode, nextElementSibling, previousElementSibling - sibling
//innerHTML, textContent

// console.log('privet ' + 2 + ' mir');
// const value = 2;
// const value2 = true;
// const value3 = 'Строка';
// console.log(`privet ${value} mir`);
// console.log(`${value}-${value2}:${value3}`);

// const div = document.querySelector('div > ul');
const div = document.querySelector('div');
// console.log(div.firstElementChild);
// console.log(div.lastElementChild);
// console.log(div.children);

for (let i = 0; i < div.children.length; i++) {
    const element = div.children[i];

    if (element.tagName === 'UL') {
        element.innerHTML = `
        <ul>
        <li>first</li>
        <li>second</li>
        <li>third</li>
        </ul>
        `;
        console.log('UL ELEMENT');
    } else if (element.tagName === 'SPAN') {
        element.textContent = 'PRIVET FROM JS';
        console.log('SPAN ELEMENT');
    }
    console.log(element);
}

// console.log(div.parentNode);
// console.log(div.nextElementSibling);
// console.log(div.previousElementSibling);

// div.innerHTML = '<button>PRIVET MIR</button>';
// div.textContent = '<button>PRIVET MIR2</button>';
