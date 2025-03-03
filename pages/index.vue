<template >
	<div class="container">
		<div class="btns_index">
			<button @click="btnsActiveToggle(btn), getVideosStore.filterVideos(btn.name)" v-for="btn in getButtonStore.arrayBtns" :class="btn.active ? 'btn_index btn_index--active' : 'btn_index'"  :key="btn.id">
				{{ btn.name }}
			</button>
		</div>
		<div class="videos">
			<videoDefault v-for="video in getVideosStore.getVideos" :video="video" :key="video.id" />
		</div>
	</div>
</template>
<script setup>


const getButtonStore = useButtonStore()
const getVideosStore = useVideosStore()

const btnsActiveToggle =  (el) => {
	getButtonStore.arrayBtns.forEach(element => {
		element.active = false
	})
	el.active = true
}
// const getVideos = await useFetch('https://41b866c117497632.mokky.dev/video')
onMounted(() => {
	if (localStorage.getItem('changeTheme')) {
		localStorage.getItem('changeTheme') == 'true' ? document.querySelector('body').classList.add('dark-theme') : document.querySelector('body').classList.remove('dark-theme')
	}
	getVideosStore.getVideosAll()
})
</script>
<style>

.container {
	padding: 30px;
}
.btns_index {
	display: flex;
	margin-bottom: 30px;
	gap: 10px;
}
.btn_index {
	font-size: 14px;
	color: black;
	font-weight: 500;
	padding: 6px 12px;
	border-radius: 6px;
	background-color: rgba(0, 0, 0, 0.05);
}
.btn_index--active {
	color:#fff;
	background-color: #000;
}
.videos {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 40px;
}
.video {
	cursor: pointer;
	transition: all 0.3s ease;
}
/* .video:hover {
	
	transform: scale(1.03);
} */
.videos_img {
	border-radius: 14px;
}

.videos_title {
	font-size: 16px;
	font-weight: 500;
	margin-top:12px;
	color: #0F0F0F;
}
.channel {
	color: #606060;
	margin-top: 5px;
	font-size: 14px;
}
.channel_bot {
	color: #606060;
	font-size: 14px;
	display: flex;
	gap: 10px;
}
@media(max-width: 1440px) {
	.videos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
}
.btns_index {
	flex-wrap: wrap;
}
}
</style>