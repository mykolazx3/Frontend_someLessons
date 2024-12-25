//promise1 - запрос всех видео
function promise1() {
    const videos = [
        { id: 1, title: 'топ 10 игр 2023' },
        { id: 2, title: 'лучшай битва в Warcraft3' },
        { id: 3, title: 'Чем кормить кошек' },
    ];
    return new Promise((resolve) => {
        //fetch
        setTimeout(() => {
            console.log('Відео получено');
            resolve(videos);
        }, 1000);
    });
}

//promise2 - запросить описание етого видео
// const id = videos[0].id;

function promise2(videoId) {
    const description = {
        id: 1,
        title: 'Топ 10 игра 2023',
        hashTags: ['Игрі', '2023'],
        authorId: 55,
    };
    return new Promise((resolve) => {
        //fetch(videoId)
        setTimeout(() => {
            console.log('Опис получено');
            resolve(description);
        }, 500);
    });
}

//promise3 - в описі вказаний автор, потрібно запросити інформацію по ньому
// const authorId = description.authorId;

function promise3(authorId) {
    const author = {
        id: 55,
        name: 'какие-то уроки',
        videosIds: [1, 2, 3],
        shortIds: [10, 15, 33],
    };
    return new Promise((resolve) => {
        //fetch
        setTimeout(() => {
            console.log('Автор получен');
            resolve(author);
        }, 1000);
    });
}

//promise4 - пробуємо отримати шортс автора
// const shortId = author.shortIds[1];

function promise4(authorId, shortsId) {
    return new Promise((resolve) => {
        //fetch
        setTimeout(() => {
            console.log('Шортс получен');
            resolve('Якесь відео');
        }, 500);
    });
}

promise1()
    .then((videos) => {
        console.log(videos);
        return promise2(videos[0].id);
    })
    .then((videoDescription) => {
        console.log(videoDescription);
        return promise3(videoDescription.authorId);
    })
    .then((author) => {
        console.log(author);
        return promise4(author.id, author.shortIds[1]);
    })
    .then((shortVideo) => {
        console.log(shortVideo);
    })
    .catch((message) => {
        console.error('error...', message);
    })
    .finally(() => {
        console.log('Все дание получени');
    });
