<template>
    <div class="container_history">
        <h1 class="title-1">Понравившиеся</h1>
        <closeRouting v-if="autorizationStore.status !== 200"></closeRouting>
        <h2 v-if="autorizationStore.status == 200 && videosStore.likeVideos.length == 0" class="title-2">Пусто</h2>
        {{ videosStore.likeVideos }}
    </div>
</template>
<script setup>
const autorizationStore = useAutorizationStore()
const videosStore = useVideosStore()
onMounted(() => {
    autorizationStore.chechAutorization()
})
</script>
<style>

</style>