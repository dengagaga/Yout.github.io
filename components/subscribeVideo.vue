<template>
      <div class="videos">
        <nuxt-link :to="`/video/`+video.id" class="video" v-for="video in SubscribeStore.SubscribeAll" :key="video.id">
            <img class="videos_img" :src="video.img" alt="">
            <h3  class="videos_title">{{ video.title }}</h3>
            <div class="channel">
                <!-- <img src="" alt=""> -->
                <p>{{ video.channel }}</p>
                
            </div>
            <div class="channel_bot">
                <p class="watch">{{ video.watchers }}</p>
                <p class="data"> {{ video.date }} </p>
            </div>
        </nuxt-link>
    </div>
</template>
<script setup>
const SubscribeStore = useSubscribeStore()
onMounted(() => {
    SubscribeStore.getSubscribeAll()
})
</script>
<style scoped>
.videos {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
}
.videos_img   {
    width: 100%;
}
</style>