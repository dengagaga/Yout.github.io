import { defineStore } from 'pinia'
export const useVideosStore = defineStore('videoStore',   () =>   {
    // const getVideos = await useFetch('https://41b866c117497632.mokky.dev/video')
    const getVideos = ref([])
    const likeVideos = ref([])
    
    const getVideosAll = async () => {
        const response = await fetch('https://41b866c117497632.mokky.dev/video')
        const responses = await response.json()
        getVideos.value = responses
        localStorage.setItem('videos', JSON.stringify(responses))
    }
    // const getAll = () => {
    //     axios.get(`https://41b866c117497632.mokky.dev/video`).then(response => {  
    //         console.log('Данные:', response.data);
    //     })
    //     .catch(error => {
    //         // Обработка ошибок
    //         console.error('Произошла ошибка:', error);
    //     });
    // }
   

    const searchVideos = async (item) => {
        const response = await fetch(`https://41b866c117497632.mokky.dev/video?title=*${item}*`)
        const responses = await response.json()
        getVideos.value = responses
    }
    const filterVideos = (name) => {
        const getVideosFilter = JSON.parse(localStorage.getItem('videos'))
        if (name == 'Все') {
            getVideos.value = getVideosFilter
        } else {
            getVideos.value = getVideosFilter
            getVideos.value = getVideosFilter.filter(e => e.category == name)
        }
        
    }


    const addLikeVideo  = (item) => {
        likeVideos.value.push(item)
        console.log(likeVideos.value);
        
    }
    return { getVideos, likeVideos, getVideosAll, addLikeVideo, searchVideos, filterVideos }
})
