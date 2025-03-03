<template>
            <div :class="shortStyle" >
                <div class="short_top">
                    <div class="short_top-left">
                        <button @click="isStop = !isStop" class="short_btn">
                            <svg width="2.4rem" height="2.4rem" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff" data-tid="PlayIcon"><path d="M21 12.5L5 21.5L5 3.5L21 12.5Z" fill="white"></path></svg>
                        </button>
                        <button v-if="!isMuted" @click="isMuted = !isMuted" class="short_btn">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path fill="#fff" d="M21 12c0 4.08-3.05 7.44-7 7.93v-2.02c2.83-.48 5-2.94 5-5.91s-2.17-5.43-5-5.91V4.07c3.95.49 7 3.85 7 7.93zM3 9v6h3.16L12 19.93V4.07L6.16 9H3zm11-1.38v2.09c.88.39 1.5 1.27 1.5 2.29s-.62 1.9-1.5 2.29v2.09c2-.46 3.5-2.24 3.5-4.38S16 8.08 14 7.62z"></path></svg>
                        </button>
                        <button v-else @click="isMuted = !isMuted" class="short_btn">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path fill="#fff" d="M14 9.71V7.62c2 .46 3.5 2.24 3.5 4.38 0 .58-.13 1.13-.33 1.64l-1.67-1.67c-.02-1.01-.63-1.88-1.5-2.26zM19 12c0 1-.26 1.94-.7 2.77l1.47 1.47C20.54 15.01 21 13.56 21 12c0-4.08-3.05-7.44-7-7.93v2.02c2.83.48 5 2.94 5 5.91zM3.15 3.85l4.17 4.17L6.16 9H3v6h3.16L12 19.93v-7.22l2 2v1.67c.43-.1.83-.27 1.2-.48l1.09 1.09c-.68.45-1.45.78-2.28.92v2.02c1.39-.17 2.66-.71 3.73-1.49l2.42 2.42.71-.71-17-17-.72.7zm8.85.22L9.62 6.08 12 8.46V4.07z"></path></svg>
                        </button>
                    </div>
                    <button class="short_btn">
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path fill="#fff" d="M5 9H4V4h5v1H5v4zm15-5h-5v1h4v4h1V4zm0 11h-1v4h-4v1h5v-5zM9 19H5v-4H4v5h5v-1z"></path></svg>
                    </button>
                </div>
                <video class="short_video" :muted="isMuted"  loop :autoplay="isStop" src=""></video>
                <div v-if="shortStyle == 'shortBig'" class="short_right">
                    <shortRightAll :title="short.like">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M8 21V9.282c0-.834.26-1.647.745-2.325L13 1l.551.331c1.153.691 1.705 2.065 1.351 3.362L14 8h5.192c.827 0 1.609.376 2.125 1.022.711.888.795 2.125.209 3.101L21 13l.165.413c.519 1.296.324 2.769-.514 3.885l-.151.202v.5c0 1.657-1.343 3-3 3H8ZM4.5 9C3.672 9 3 9.672 3 10.5v9c0 .828.672 1.5 1.5 1.5H7V9H4.5Z"></path></svg>
                    </shortRightAll>
                    <shortRightAll :title="short.dizlike">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M16 3v11.718c0 .834-.26 1.647-.745 2.325L11 23l-.551-.331c-1.153-.691-1.705-2.065-1.351-3.362L10 16H4.808c-.827 0-1.609-.376-2.125-1.022-.711-.888-.795-2.125-.209-3.101L3 11l-.165-.413c-.519-1.296-.324-2.769.514-3.885L3.5 6.5V6c0-1.657 1.343-3 3-3H16Zm3 12c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2h-2v12h2Z"></path></svg>
                    </shortRightAll>
                    <shortRightAll :title="short.comment">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clip-rule="evenodd" d="M21 5c0-1.105-.895-2-2-2H5c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h12l3.146 3.146c.315.315.854.092.854-.353V5ZM7 9c0-.552.448-1 1-1h8c.552 0 1 .448 1 1s-.448 1-1 1H8c-.552 0-1-.448-1-1Zm1 3c-.552 0-1 .448-1 1s.448 1 1 1h5c.552 0 1-.448 1-1s-.448-1-1-1H8Z" fill-rule="evenodd"></path></svg>
                    </shortRightAll>
                    <shortRightAll title="Подели...">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="m13.202 3.368 9.438 7.865c.48.4.48 1.137 0 1.537l-9.438 7.865c-.652.543-1.64.08-1.64-.768V16H9.957c-2.778 0-5.406 1.263-7.141 3.432-.304.38-.912.086-.803-.388l1.118-4.843C3.968 10.572 7.2 8 10.926 8h.636V4.137c0-.848.989-1.311 1.64-.769Z"></path></svg>
                    </shortRightAll>
                    <shortRightAll >
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path></svg>
                    </shortRightAll>
                </div>
                <div class="short_bot">
                    <p class="short_bot-channel">{{ short.channel }} <button class="short_bot-channel-btn">Подписаться</button></p>
                    <p class="short_bot-desc">{{ short.desc }}</p>
                </div>
            </div>
</template>
<script setup>
defineProps({
    short:Object,
    shortStyle:String,
    isStop:Boolean
})
const isMuted = ref(true)
// const isStop = ref(false)

</script>
<style scoped>
.shortBig {
    position: relative;
    max-width: 506px;
    width: 506px;
    padding: 20px;
    height: 89vh;
    border-radius: 10px;
    border: 1px solid #fff;
    background-color: #fff;
}
.shortSmall {
    position: relative;
    max-width: 240px;
    width: 100%;
    padding: 20px;
    height: 390px;
    border-radius: 10px;
    border: 1px solid #fff;
    background-color: #fff;
}
.short_top {
    width: 100%;
    display: flex;
    position: relative;
    z-index: 22;
    align-items: center;
    justify-content: space-between;
   
    opacity: 0;
    transition: all .3s;
}.short_top-left {
    display: flex;
    gap: 10px;
    align-items: center;
}
.shortBig:hover .short_top {
    opacity: 1;
}
.short_bot {
    position: relative;
    z-index: 22;
  
}
.short_right {
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: absolute;
    right: -75px;
    bottom: 70px;
}
.short_right-text {
    font-size: 14px;
}
.short_right-all {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
}

.short_video {
    position: absolute;
    display: block;
    top: 0;
    height: 100%;
    width: 100%;
    left: 0;
    right: 0;
    object-fit: cover;
    bottom: 0;
    border-radius: 10px;
}
.short_bot {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    bottom: 20px;
}
.short_bot-channel {
    display: flex;
    gap: 10px;
    color: #fff;
    align-items: center;
}
.short_bot-desc {
    color: #fff;
}
.short_bot-channel-btn {
    color: #000;
    padding: 0 12px;
    height: 32px;
    font-size: 12px;
    line-height: 32px;
    border-radius: 16px;
    transition: all .3s;
    background: #fff;
}
.short_bot-channel-btn:hover {
    opacity: .9;
}
.short_btn {
    background-color: #000000a8;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    padding: 12px;
}
</style>