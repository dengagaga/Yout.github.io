<template>
    <div class="container_history">
        <h1 class="title-1">История просмотра</h1>
        <closeRouting v-if="autorizationStore.status !== 200"></closeRouting>
        <div v-else class="history_videos">
            <h2 v-if="getHistoryStore.getHistory.length == 0 && autorizationStore.status == 200" class="title-2">Пусто</h2>
            <AdminPage  v-for="video in getHistoryStore.getHistory" :video="video" :key="video.id" />
        </div>
    </div>
</template>
<script setup>
const autorizationStore = useAutorizationStore()
import { defineAsyncComponent } from 'vue'

const AdminPage = defineAsyncComponent(() =>
  import('@/components/videoHistory.vue')
)
const getHistoryStore = useHistoryStore()
onMounted(() => {
    if (localStorage.getItem('changeTheme')) {
		localStorage.getItem('changeTheme') == 'true' ? document.querySelector('body').classList.add('dark-theme') : document.querySelector('body').classList.remove('dark-theme')
	}
    if (localStorage.getItem('history')) {
        getHistoryStore.getHistory = JSON.parse(localStorage.getItem('history'))
    }
    autorizationStore.chechAutorization()
    
})
</script>
<style>
.title-1 {
    color: #0f0f0f;
    font-size: 36px;
    font-weight: 700;
}
.title-2 {
    color: #0f0f0f;
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight: 700;
}
.container_history {
    max-width: 1100px;
    padding-top: 40px;
    width: 100%;
    margin: 0 auto;
}
.history_videos {
    margin-top: 30px;
    max-width: 825px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

</style>