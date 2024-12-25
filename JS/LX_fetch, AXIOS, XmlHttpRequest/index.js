// fetch, axios, HMLHttpRequest
// methods: GET, POST, DELETE, PUT
// status 200, 500, 404
// body,
// api
// network, 3G

//---

// const newPost = {
//     userId: 1,
//     id: 777,
//     title: 'hello',
//     body: 'bodyyyyyyyyyyyy',
// };
// const test = JSON.stringify(newPost);

// // console.log(newPost);
// // console.log(test);

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     // method: 'GET',
//     method: 'POST',
//     body: test,
// })
//     .then((data) => {
//         console.log(data);
//         return data.json();
//     })
//     .then((info) => {
//         console.log(info);
//     });

//---

const url = `https://api.open-meteo.com/v1/forecast?
latitude=55.751244
&longitude=37.618423
&current=temperature_2m,is_day,wind_speed_10m`;

// fetch(url)
//     .then((data) => {
//         console.log(data);
//         return data.json();
//     })
//     .then((info) => {
//         renderWeather(info.current);
//         console.log(info);
//     });

// function renderWeather(data) {
//     const div = document.createElement('div');
//     div.textContent = `
//     Температура: ${data.temperature_2m}
//     Скорість вітру: ${data.wind_speed_10m}
//     Зараз ${data.is_day === 0 ? 'ніч' : 'день'}`;
//     document.body.append(div);
// }

//---AXIOS

// axios.get(url).then((response) => {
//     console.log(response);
//     console.log(response.data);
// });

axios
    .post('https://jsonplaceholder.typicode.com/posts', {
        title: 'fafafafafaf',
    })
    .then((response) => {
        console.log(response);
        console.log(response.data);
    });

//---
