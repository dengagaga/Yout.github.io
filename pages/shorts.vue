<template>
    <div class="container">
        <div class="short_all"> 
            <short v-for="short in getShortsStore.ShortsAll" :key="short.id" :short="short" shortStyle="shortBig" :isStop="true" />
        </div>
        <button class="short_btn short_btn--next">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clip-rule="evenodd" d="M4.116 13.884a1.25 1.25 0 011.768-1.768l4.866 4.866V4a1.25 1.25 0 112.5 0v12.982l4.866-4.866a1.25 1.25 0 011.768 1.768L12 21.768l-7.884-7.884Z" fill-rule="evenodd"></path></svg>
        </button>
    </div>
</template>
<script setup>
const getShortsStore = useShortsStore()
onMounted(() => {
    if (localStorage.getItem('changeTheme')) {
		localStorage.getItem('changeTheme') == 'true' ? document.querySelector('body').classList.add('dark-theme') : document.querySelector('body').classList.remove('dark-theme')
	}
    getShortsStore.getShortsAll()
})
</script>
<style scoped>
body {
    overflow: hidden;
}
.container {
    margin: 0 auto;
    max-width: 1200px;
}
.short_all {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    /* height: 100vh; */
    
}
.short_btn {
    background-color: #000000a8;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    padding: 12px;
}
.short_btn--next {
    position: absolute;
    top: 50%;
    background-color: #F2F2F2!important;
    right: 5%;
}
</style>