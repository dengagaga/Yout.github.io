import { defineStore } from 'pinia'

export  const useShortsStore = defineStore('ShortsStore', () => {
    const ShortsAll =  ref([])
    const getShortsAll = async () => {       
        const response = await fetch('https://41b866c117497632.mokky.dev/shorts')
        const responses = await response.json()
        ShortsAll.value = responses
        console.log(ShortsAll.value);
    }
  
    return {ShortsAll,getShortsAll}
})