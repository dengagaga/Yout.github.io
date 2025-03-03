import { defineStore } from 'pinia'
import axios from 'axios'

export  const useSubscribeStore = defineStore('SubscribeStore', () => {
    const SubscribeAll =  ref([])
    // const getSubscribeAll = async () => {
    //     const response = await fetch('https://41b866c117497632.mokky.dev/subscribe')
    //     const responses = await response.json()
    //     SubscribeAll.value = responses
    // }
    const getSubscribeAll = () => {
        axios.get('https://41b866c117497632.mokky.dev/subscribe'
        ).then(function (response) {
            SubscribeAll.value = response.data
          console.log(SubscribeAll.value, response);
        }).catch(function (error) {
          console.log(error);
        });
    }
    return {SubscribeAll, getSubscribeAll}
})