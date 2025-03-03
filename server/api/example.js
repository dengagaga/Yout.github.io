export default defineEventHandler(() => {
    // const data = [
    //     {
    //         "id": 1,
    //         "title": "iPhone 16 Pro Max месяц спустя в реальной жизни - вся правда",
    //         "img": "https://i.ytimg.com/vi/dIl9bDqnh-4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC6akYdbTej9BenEsbWcHrgOn7skw",
    //         "channel":"Wylsacom",
    //         "watchers":"1 млн просмотров",
    //         "date":"22 часа назад",
    //         "isWatched": true,
    //         "isFavorite": true,
    //         "top": false,
    //         "view": false,
    //         "rating": "8.0"
    //     },
    //     {
    //         "id": 2,
    //         "title": "ЛЕБЕДЕВ, МЕЗЕНЦЕВ, ЧЕСТНЫЙ: КИТАЙЦЫ ЗАХВАТИЛИ РОССИЙСКИЙ АВТОРЫНОК",
    //         "img": "https://i.ytimg.com/vi/AvogD6Guqac/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCmkabOc-XRFa0YV8f4JH3GIHhQzQ",
    //         "channel":"Анатомия Авто",
    //         "watchers":"39 тыс. просмотров",
    //         "date":"2 часа назад",
    //         "isWatched": false,
    //         "isFavorite": false,
    //         "top": true,
    //         "view": false,
    //         "rating": "8.7"
    //     },
    //     {
    //         "id": 3,
    //         "title": "Самая БЫСТРАЯ МАШИНА на КАНАЛЕ. AUDI A3 SWAP 2.5T 1000л.с. vs BMW M340i F30 STAGE 4",
    //         "img": "https://i.ytimg.com/vi/gXbquwvzY-k/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDoZcFI6fVGplRjhMW0gwaSYgDovQ",
    //         "isWatched": false,
    //         "channel":"AUTO VRN",
    //         "watchers":"47 тыс. просмотров",
    //         "date":"21 час назад",
    //         "isFavorite": false,
    //         "top": true,
    //         "view": false,
    //         "rating": "8.9"
    //     },
    //     {
    //         "id": 4,
    //         "title": "ЛАРРАТТ против ЛАЛЕТИНА и МОРОЗОВА в 2025",
    //         "channel":"IGOR SLADKO",
    //         "watchers":"17 тыс. просмотров",
    //         "date":"2 дня назад",
    //         "img": "https://i.ytimg.com/vi/tiLDVxqoyvo/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD6VWm7S2RQJeJ1waQMbfaDjaE9rA",
    //         "isWatched": false,
    //         "isFavorite": false,
    //         "top": true,
    //         "view": false,
    //         "rating": "8.9"
    //     },
    //     {
    //         "id": 5,
    //         "title": "ПО ФОТКАМ ДУМАЛ ЭТО ГЕЛИК, А ОКАЗАЛСЯ TANK 700 EDITION ONE.",
    //         "channel":"AcademeG",
    //         "watchers":"1,2 млн просмотров",
    //         "date":"3 недели назад",
    //         "img": "https://i.ytimg.com/vi/WomyTjxnpGk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCK79hDW-_y7KL2gjce7dqSD-ek0g",
    //         "isWatched": false,
    //         "isFavorite": false,
    //         "top": true,
    //         "view": false,
    //         "rating": "8.9"
    //     },
    //     {
    //         "id": 6,
    //         "title": "Прохожу СОБЕСЕДОВАНИЕ НА SENIOR FRONTEND. ЗП 400к и Live coding",
    //         "channel":"Ulbi TV",
    //         "watchers":"107 тыс. просмотров",
    //         "date":"2 недели назад",
    //         "img": "https://i.ytimg.com/vi/tKM44vPHU0U/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCBrDE8hw6N26lbL7JIEm3MmOK4mA",
    //         "isWatched": false,
    //         "isFavorite": false,
    //         "top": true,
    //         "view": false,
    //         "rating": "8.9"
    //     },
    
    //     {
    //         "id": 7,
    //         "title": "Что с нашим Автопромом? Конфликт с Давидычем. Марат Boroda",
    //         "channel":"ДНЕВНИК ХАЧА",
    //         "watchers":"695 тыс. просмотров",
    //         "date":"2 недели назад",
    //         "img": "https://i.ytimg.com/vi/n-dF6_i9DxE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDTJ9qDC-SOdZal64fjZbw6cTg6vw",
    //         "isWatched": false,
    //         "isFavorite": false,
    //         "top": true,
    //         "view": false,
    //         "rating": "8.9"
    //     },
    //     {
    //         "id": 8,
    //         "title": "ASA Cross-Platform Mods Spotlight, January 6 - January 10, 2025",
    //         "channel":"ARK: Survival Ascended",
    //         "watchers":"50 тыс. просмотров",
    //         "date":"1 день назад",
    //         "img": "https://i.ytimg.com/vi/2md8WWQtUzc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC6j14OgGZILESTC_VbqthbTWBysg",
    //         "isWatched": false,
    //         "isFavorite": false,
    //         "top": true,
    //         "view": false,
    //         "rating": "8.9"
    //     },
    //     {
    //         "id": 9,
    //         "title": "МЫ В ПАРИЖЕ / ВЛОГ",
    //         "channel":"POPOSHA",
    //         "watchers":"307 тыс. просмотров",
    //         "date":"3 недели назад",
    //         "img": "https://i.ytimg.com/vi/vgTRdp4DGwQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCBEz4LAt9bkUWwzxtGtFtZ5I8Yug",
    //         "isWatched": false,
    //         "isFavorite": false,
    //         "top": true,
    //         "view": false,
    //         "rating": "8.9"
    //     },
    //     {
    //         "id": 10,
    //         "title": "Иван Ургант / Плюшки",
    //         "channel":"Плюшки",
    //         "watchers":"2 млн. просмотров",
    //         "date":"1 неделю назад",
    //         "img": "https://i.ytimg.com/vi/FfeQydvXT2Y/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCC6yUILtG0IWwpo1gbkZIcJgofnw",
    //         "isWatched": false,
    //         "isFavorite": false,
    //         "top": true,
    //         "view": false,
    //         "rating": "8.9"
    //     },
    // ]
    return {
        mess: "success",
    }
})