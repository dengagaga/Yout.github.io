<template>
    
    <div class="container">
        <h1 v-if="SubscribeStore.SubscribeAll.length == 0" class="title-1">Подписки</h1>
        <closeRouting v-if="autorizationStore.status !== 200"></closeRouting>
        <h2 v-if="autorizationStore.status == 200" class="title-2">
            Новые</h2>
        <subscribeVideo v-if="autorizationStore.status == 200"/>
        <h2 v-if="SubscribeStore.SubscribeAll.length == 0 && autorizationStore.status == 200" class="title-2">Пусто</h2>
        <h2 v-if="autorizationStore.status == 200" class="title-2">
            Shorts
        </h2>
        <div class="subscribe_short">
            <short v-if="autorizationStore.status == 200"  v-for="short in getShortsStore.ShortsAll" :key="short.id" :short="short" :isStop="false" shortStyle="shortSmall" />
        </div>
        <subscribeVideo style="margin-top: 30px;" v-if="autorizationStore.status == 200"/>
    </div>
</template>
<script setup>
const getShortsStore = useShortsStore()
const autorizationStore = useAutorizationStore()
const SubscribeStore = useSubscribeStore()
onMounted(() => {
    autorizationStore.chechAutorization()
    if (localStorage.getItem('changeTheme')) {
		localStorage.getItem('changeTheme') == 'true' ? document.querySelector('body').classList.add('dark-theme') : document.querySelector('body').classList.remove('dark-theme')
	}
    getShortsStore.getShortsAll()
})
</script>
<style>
.subscribe_short {
    display: flex;
    justify-content: space-between;
}
.container_history {
    max-width: 1100px;
    padding-top: 40px;
    padding: 30px;
    width: 100%;
    margin: 0 auto;
}
</style>