<template>
    <nuxt-link :to="`/video/`+video.id" class="video">
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
</template>
<script setup>
defineProps({
    video: Object
})
</script>
<style>
.videos_img   {
    width: 100%;
}
</style>