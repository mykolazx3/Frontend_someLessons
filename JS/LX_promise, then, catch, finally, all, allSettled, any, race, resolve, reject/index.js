//callback hell
// return (auth) => {
//     getUserInfo((user) => {
//         getUserGames((userGames) => {
//             getSomething('...');
//         });
//     });
// };

//run()
// .then(getUserInfo)
// .then(getUserGames)
// .then(getSomething);

//---

// function fetchUserInfo(callback) {
//     setTimeout(() => {
//         //fetch
//         const data = { id: 1, name: 'alex' };
//         callback(data);
//     }, 1000);
// }

// function fetchUserGames(id, callback) {
//     setTimeout(() => {
//         //fetch(id)
//         const data = ['game1', 'game2'];
//         callback(data);
//     }, 1000);
// }

// function run() {
//     fetchUserInfo((userInfo) => {
//         console.log(userInfo);
//         fetchUserGames(userInfo.id, (userGames) => {
//             console.log(userGames);
//         });
//     });
// }

// run();

//---

// function run() {
//     const data = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             //fetch
//             const data = { id: 1, name: 'Alex' };
//             resolve(data);
//         }, 1000);
//     });

//     data.then((userData) => {
//         console.log(userData);
//     });
// }

// run();

//---

// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             //fetch
//             const data = { id: 1, name: 'Alex' };
//             resolve(data);
//         }, 1000);
//     });
// }

// function fetchUserGames(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             //fetch
//             const data = ['game1', 'game2'];
//             resolve(data);
//         }, 1000);
//     });
// }

// // function run() {
// //     fetchUserData().then((userData) => {
// //         console.log(userData);
// //         fetchUserGames(userData.id).then((userGames) => {
// //             console.log(userGames);
// //         });
// //     });
// // }

// function run() {
//     fetchUserData()
//         .then((userData) => {
//             console.log(userData);
//             return fetchUserGames(userData.id);
//         })
//         .then((userGames) => {
//             console.log(userGames);
//         });
// }

// run();

//---

// function fetchGames() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // fetch
//             const dataFromServer = 'error data from server';
//             // const dataFromServer = [
//             //     {
//             //         id: 1,
//             //         name: 'Spider man',
//             //     },
//             //     {
//             //         id: 2,
//             //         name: 'Mario',
//             //     },
//             // ];

//             if (Array.isArray(dataFromServer)) {
//                 resolve(dataFromServer);
//             } else {
//                 reject(dataFromServer);
//             }
//         }, 2000);
//     });
// }

// function renderLoading() {
//     const body = document.querySelector('body');
//     const loading = document.createElement('div');
//     loading.id = 'loading';
//     loading.textContent = 'Loading...';
//     body.append(loading);
// }

// function renderGames(games) {
//     const body = document.querySelector('body');
//     const loading = document.querySelector('#loading');
//     loading.remove();

//     games.forEach((game) => {
//         const gameElement = document.createElement('div');
//         gameElement.innerText = `Game:  ${game.name}`;
//         gameElement.className = 'game-element';

//         body.append(gameElement);
//     });
// }

// renderLoading();

// fetchGames()
//     .then((games) => {
//         renderGames(games);
//     })
//     .catch((message) => {
//         console.log(message);
//     });

//---

// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             //fetch
//             const data = { id: 1, name: 'Alex' };
//             resolve(data);
//         }, 1000);
//     });
// }

// function fetchUserGames(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             //fetch
//             const data = ['game1', 'game2'];
//             reject('error 2');
//         }, 1000);
//     });
// }

// function run() {
//     fetchUserData()
//         .then((userData) => {
//             console.log(userData);
//             return fetchUserGames(userData.id);
//         })
//         .then((userGames) => {
//             console.log(userGames);
//         })
//         .catch((messasge) => {
//             console.log(messasge);
//         })
//         .finally(() => {
//             console.log('finally');
//         });
// }

// run();

function fetchVideo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('дані 1 отримані');
            const data = ['video1', 'video2'];
            resolve(data);
        }, 1000);
    });
}

function fetchShorts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('дані 2 отримані');
            const data = ['shorts1', 'shorts2'];
            reject('error');
        }, 3000);
    });
}

function main() {
    console.log('loading');

    // Promise.all
    // Promise.allSettled
    // Promise.race
    // Promise.any

    Promise.allSettled([fetchVideo(), fetchShorts()])
        .then((data) => {
            console.log('OK', data);
        })
        .catch((message) => {
            console.log('ERROR', message);
        });
}

main();
