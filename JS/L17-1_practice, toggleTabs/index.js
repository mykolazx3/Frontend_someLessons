// const goods = document.querySelector('button[data-id="goods"]');
// const cart = document.querySelector('button[data-id="cart"]');

// // console.log(goods, cart);

// function clickHandler(event) {
//     // console.dir(event.target.dataset.id);
//     // console.dir(event.target.getAttribute('data-id'));
//     // console.dir(event.target.getAttribute('data-id'));
//     // console.log(id);
//     // return (event) => {
//     //     console.log(event);
//     // };
//     // const id = console.dir(event.target.dataset.id);
//     // if (id === 'goods') {
//     //     goods.classList.add('active');
//     //     cart.classList.remove('active');
//     // } else if (id === 'cart') {
//     //     goods.classList.remove('active');
//     //     cart.classList.add('active');
//     // }
//     goods.classList.toggle('active');
//     cart.classList.toggle('active');
// }

// goods.addEventListener('click', clickHandler);
// cart.addEventListener('click', clickHandler);

let activeTabId = 'goods';
const initialTab = document.querySelector(`button[data-tab-id=${activeTabId}]`);
initialTab.classList.add('active');

const tabs = document.querySelectorAll('button.tab');
// console.log(tabs);
for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];
    // console.log(tab);
    tab.addEventListener('click', clickHandler);
}

function clickHandler(event) {
    const activeTab = document.querySelector(
        `button[data-tab-id=${activeTabId}]`
    );

    // activeTab.classList.toggle('active');
    // event.target.classList.toggle('active');
    activeTab.classList.remove('active');
    event.target.classList.add('active');
    activeTabId = event.target.dataset.tabId;
    // for (let i = 0; i < tabs.length; i++) {
    //     const tab = tabs[i];
    //     tab.classList.toggle('active');
    // }
}
