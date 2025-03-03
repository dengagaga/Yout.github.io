<template>
    <div class="main_video" v-if="video.length > 0">
        <img class="main_video-img" :src="video[0].img" alt="">
        <h2 class="main_video-title">{{ video[0].title }}</h2>
        <div class="main_video-channels">
            <div class="main_video-channel">
                <a href="" class="main_video-channel-link">{{ video[0].channel }}</a>
                <a href="" class="main_video-channel-link">{{ video[0].subscribe }}</a>
            </div>
            <button class="main_video-channel-btn">Подписаться</button>
            <div class="main_video-btns">
                <div class="main_video-btns-likes">
                    <button class="main_video-btns-like" @click="videosStore.addLikeVideo(video[0])">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path fill="#000" d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path></svg>
                        
                    </button>
                    <hr class="hr">
                    <button class="main_video-btns-dizlike">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path fill="#000" d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path></svg>
                    </button>
                </div>
                <button class="main_video-btns-pod">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path fill="#000" d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"></path></svg>
                    Поделиться</button>
            </div>
        </div>
       
    </div>
</template>
<script setup>
const { idVideo } = useRoute().params
const video = computed(() => {
    return getVideosStore.getVideos.filter(e => e.id == idVideo)
})
// definePageMeta({
//     layout:'video'
// })
const getVideosStore = useVideosStore()
const historyStore = useHistoryStore()
const videosStore = useVideosStore()


const updateHistory = (currentVideo) => {
    historyStore.getHistory.push(currentVideo)
    localStorage.setItem('history', JSON.stringify(historyStore.getHistory))
}

onMounted(() => {
    if (localStorage.getItem('history')) {
        historyStore.getHistory = JSON.parse(localStorage.getItem('history'))
        historyStore.getHistory = historyStore.getHistory.filter(e => e.id != video.value[0].id)    
        updateHistory(video.value[0])
    } else {
        updateHistory(video.value[0])
    }
})
</script>
<style>
.main_video {
    margin-top: 10px;
    width: 100%;
    height: 70vh;
}
.main_video-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.main_video-title {
    margin-top: 15px;
    font-size: 22px;
}
.main_video-channels {
    display: flex;
    gap: 30px;
    align-items: end;
}
.main_video-channel {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
}
.main_video-channel-link:nth-child(1) {
    color: #272727;
    font-size: 18px;
}
.main_video-channel-link:nth-child(2) {
    color: #aaa;
    font-size: 14px;
}
.main_video-channel-btn {
    color: #0f0f0f;
    font-size: 14px;
    line-height: 36px;
    background-color: #f1f1f1;
    height: 36px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 18px;
}

.main_video-btns {
    display: flex;
    gap: 30px;
}
.main_video-btns-likes {
    display: flex;
    background-color: #f2f2f2;
    align-items: center;
    border-radius: 18px;
    justify-content: center;
    gap: 10px;
}
.main_video-btns-like, .main_video-btns-dizlike {
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
}
.main_video-btns-pod {
    display: flex;
    padding-left: 10px;
    padding-right: 20px;
    gap: 10px;
    background-color: #f2f2f2;
    align-items: center;
    border-radius: 18px;
    justify-content: center;
}
.main_video-btns-dizlike {
    padding-right: 5px;
}
.main_video-btns-like svg{
    width: 25px!important;
    
    transform: rotate(180deg);
}
.main_video-btns-dizlike svg{
    width: 25px!important;
}
.hr {
    background-color: #272727;
    width: 1px;
    height: 26px;
}
</style>