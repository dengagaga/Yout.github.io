export const useHistoryStore = defineStore('historyStore', () => {
    const getHistory = ref([])

    const deleteHistory = () => {
        getHistory.value = []
    }
    const deleteHistoryItem = (video) => {
        getHistory.value = getHistory.value.filter(e => e.id != video.id)
        localStorage.setItem('history', JSON.stringify(getHistory.value))
    }
    
    return {
        getHistory, deleteHistoryItem, deleteHistory
    }
})