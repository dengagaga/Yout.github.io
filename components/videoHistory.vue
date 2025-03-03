<template>
   <div class="history_video">
                <img class="history_video-img" :src="video.img" alt="">
                <div class="history_video-mid">
                    <h3  class="history_videos-title">{{ video.title }}</h3>
                    <p class="history_video-info">{{ video.channel }} • {{ video.watchers }}</p>
                    <p class="history_video-description">{{ video.desc }}</p>
                </div>
                <button class="history_video-close" @click="getHistoryStore.deleteHistoryItem(video)">
                    <svg   xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="m12.71 12 8.15 8.15-.71.71L12 12.71l-8.15 8.15-.71-.71L11.29 12 3.15 3.85l.71-.71L12 11.29l8.15-8.15.71.71L12.71 12z"></path></svg>
                </button>
            </div>
</template>
<script setup>
const getHistoryStore = useHistoryStore()
defineProps({
    video: Object
})
</script>
<style>
.history_video {
    display: flex;
    position: relative;
    z-index: 1;
    align-items: start;
    gap: 20px;
}
.history_video-mid {
    display: flex;
    flex-direction: column;
    gap: 7px;
    position: relative;
    z-index: -1;
}
.history_video-img {
    border-radius: 14px;
    max-width: 250px;
}
.history_videos-title {
    font-size: 18px;
    font-weight: 500;
    max-width: 500px;
}
.history_video-info {
    color: #606060;
    font-size: 12px;
}
.history_video-description {
    color: #606060;
    font-size: 13px;
}
.history_video-close {
    position: absolute;
    width: 25px!important;
    height: 25px!important;
    top: -5px;
    z-index: 22;
    cursor: pointer;
    right: 20px;
}
</style>