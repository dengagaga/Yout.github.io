import { defineStore } from 'pinia'

export  const useButtonStore = defineStore('buttonStore', () => {
    const arrayBtns =  ref([
        {
            id:1,
            name:'Все',
            active: true,
        },
        {
            id:2,
            name:'Видеоигры',
            active: false,
        },
        {
            id:3,
            name:'Подкасты',
            active: false,
        },
        {
            id:4,
            name:'Музыка',
            active: false,
        },
        {
            id:5,
            name:'Сейчас в эфире',
            active: false,
        },
        {
            id:6,
            name:'Джемы',
            active: false,
        },
        {
            id:7,
            name:'Фитнес',
            active: false,
        },
        {
            id:8,
            name:'Туризм',
            active: false,
        },
        {
            id:9,
            name:'Экшен и приключения',
            active: false,
        },
        {
            id:10,
            name:'Симуляторы',
            active: false,
        },
        {
            id:11,
            name:'Кулинария',
            active: false,
        },
        {
            id:12,
            name:'Автомобили',
            active: false,
        },
        {
            id:13,
            name:'Армрестлинг',
            active: false,
        },
    ])
    return {arrayBtns}
})