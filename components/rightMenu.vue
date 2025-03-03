<template>
    <div class="right_menu">
        <div class="right_menu-top">
            <div class="right_menu-tops">
                <img class="nav_links-img" :src="array.img" alt="">
                <h4>{{ array.fullName }}</h4>

            </div>
            <NuxtLink class="right_menu-top-link" to="">Посмотреть канал</NuxtLink>
        </div>
        <div class="right_menu-mid">
            <NuxtLink class="right_menu-mid-link" to="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
                    <path d="M12 13.9v-3.72h9.36c.14.63.25 1.22.25 2.05 0 5.71-3.83 9.77-9.6 9.77C6.48 22 2 17.52 2 12S6.48 2 12 2c2.7 0 4.96.99 6.69 2.61l-2.84 2.76c-.72-.68-1.97-1.49-3.85-1.49-3.31 0-6.01 2.75-6.01 6.12s2.7 6.12 6.01 6.12c3.83 0 5.24-2.65 5.5-4.22H12z"></path>
                </svg>
                Аккаунт Google
            </NuxtLink>
            <button class="right_menu-mid-btn right_menu-mid-btn-topic" to="">
                <div class="right_menu-mid-btn-all">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
                        <path d="M12 22C10.93 22 9.86998 21.83 8.83998 21.48L7.41998 21.01L8.83998 20.54C12.53 19.31 15 15.88 15 12C15 8.12 12.53 4.69 8.83998 3.47L7.41998 2.99L8.83998 2.52C9.86998 2.17 10.93 2 12 2C17.51 2 22 6.49 22 12C22 17.51 17.51 22 12 22ZM10.58 20.89C11.05 20.96 11.53 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3C11.53 3 11.05 3.04 10.58 3.11C13.88 4.81 16 8.21 16 12C16 15.79 13.88 19.19 10.58 20.89Z"></path>
                    </svg>
                    Сменить тему
                </div>
                
                <input @click="changeTheme(), $emit('youtubeChange')" :checked="changeThemeItem ? true : false" type="checkbox" class="theme-checkbox">
            </button>
            <button class="right_menu-mid-btn" to="">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M4 20h14v1H3V6h1v14zM6 3v15h15V3H6zm2.02 14c.36-2.13 1.93-4.1 5.48-4.1s5.12 1.97 5.48 4.1H8.02zM11 8.5a2.5 2.5 0 015 0 2.5 2.5 0 01-5 0zm3.21 3.43A3.507 3.507 0 0017 8.5C17 6.57 15.43 5 13.5 5S10 6.57 10 8.5c0 1.69 1.2 3.1 2.79 3.43-3.48.26-5.4 2.42-5.78 5.07H7V4h13v13h-.01c-.38-2.65-2.31-4.81-5.78-5.07z"></path></svg>
                Сменить аккаунт
            </button>
            <button @click="$emit('rightMenuToggle')" class="right_menu-mid-btn" >
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M20 3v18H8v-1h11V4H8V3h12zm-8.9 12.1.7.7 4.4-4.4L11.8 7l-.7.7 3.1 3.1H3v1h11.3l-3.2 3.3z"></path></svg>
                Выйти
            </button>
        </div>
        <div class="right_menu-mid">
            <NuxtLink class="right_menu-mid-link" to="">
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M15.36 9.96c0 1.09-.67 1.67-1.31 2.24-.53.47-1.03.9-1.16 1.6l-.04.2H11.1l.03-.28c.14-1.17.8-1.76 1.47-2.27.52-.4 1.01-.77 1.01-1.49 0-.51-.23-.97-.63-1.29-.4-.31-.92-.42-1.42-.29-.59.15-1.05.67-1.19 1.34l-.05.28H8.57l.06-.42c.2-1.4 1.15-2.53 2.42-2.87 1.05-.29 2.14-.08 2.98.57.85.64 1.33 1.62 1.33 2.68zM12 18c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-15c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path></svg>
                Справка
            </NuxtLink>
            <NuxtLink class="right_menu-mid-link" to="">
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M13 14h-2v-2h2v2zm0-9h-2v6h2V5zm6-2H5v16.59l3.29-3.29.3-.3H19V3m1-1v15H9l-5 5V2h16z"></path></svg>
                Отправить отзыв
            </NuxtLink>
        
        </div>
        <div class="right_menu-mid">
            <NuxtLink class="right_menu-mid-link" to="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clip-rule="evenodd" d="m14.302 6.457-.668-.278L12.87 3.5h-1.737l-.766 2.68-.668.277c-.482.2-.934.463-1.344.778l-.575.44-2.706-.677-.868 1.504 1.938 2.003-.093.716c-.033.255-.05.514-.05.779 0 .264.017.524.05.779l.093.716-1.938 2.003.868 1.504 2.706-.677.575.44c.41.315.862.577 1.344.778l.668.278.766 2.679h1.737l.765-2.68.668-.277c.483-.2.934-.463 1.345-.778l.574-.44 2.706.677.869-1.504-1.938-2.003.092-.716c.033-.255.05-.514.05-.779 0-.264-.017-.524-.05-.779l-.092-.716 1.938-2.003-.869-1.504-2.706.677-.574-.44c-.41-.315-.862-.577-1.345-.778Zm4.436.214Zm-3.86-1.6-.67-2.346c-.123-.429-.516-.725-.962-.725h-2.492c-.446 0-.838.296-.961.725l-.67 2.347c-.605.251-1.17.58-1.682.972l-2.37-.593c-.433-.108-.885.084-1.108.47L2.717 8.08c-.223.386-.163.874.147 1.195l1.698 1.755c-.04.318-.062.642-.062.971 0 .329.021.653.062.97l-1.698 1.756c-.31.32-.37.809-.147 1.195l1.246 2.158c.223.386.675.578 1.109.47l2.369-.593c.512.393 1.077.72 1.681.972l.67 2.347c.124.429.516.725.962.725h2.492c.446 0 .839-.296.961-.725l.67-2.347c.605-.251 1.17-.58 1.682-.972l2.37.593c.433.108.885-.084 1.109-.47l1.245-2.158c.223-.386.163-.874-.147-1.195l-1.698-1.755c.04-.318.062-.642.062-.971 0-.329-.021-.653-.062-.97l1.698-1.756c.31-.32.37-.809.147-1.195L20.038 5.92c-.224-.386-.676-.578-1.11-.47l-2.369.593c-.512-.393-1.077-.72-1.681-.972ZM15.5 12c0 1.933-1.567 3.5-3.5 3.5S8.5 13.933 8.5 12s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5ZM14 12c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2Z" fill-rule="evenodd"></path></svg>
                Настройки
            </NuxtLink>        
        </div>
    </div>
</template>
<script setup>
const getAutorizationStore = useAutorizationStore()
const changeThemeItem = ref(false)
const changeTheme = () => {
    const body = document.querySelector('body')
    body.classList.toggle('dark-theme')
    changeThemeItem.value = !changeThemeItem.value
    localStorage.setItem('changeTheme', changeThemeItem.value)
}
defineProps({
    array: Array
})
defineEmits(['rightMenuToggle', 'youtubeChange'])

onMounted(() => {
	if (localStorage.getItem('changeTheme')) {
		localStorage.getItem('changeTheme') == 'true' ? changeThemeItem.value = true : changeThemeItem.value = false
        localStorage.getItem('changeTheme') == 'true' ? document.querySelector('body').classList.add('dark-theme') : document.querySelector('body').classList.remove('dark-theme')
	}
	
})
</script>
<style>

.right_menu {
    position: absolute;
    width: 300px;
    top: 40px;
    z-index: 9999;
    right: 0;
    background: #fff;
    overflow-x: hidden !important;
    border-radius: 12px;
    box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
}

.dark-theme .form{
    background-color:#1b1b1b;
}
.dark-theme .form_left-title {
    color: #fff;
}
.dark-theme .form_left-text {
    color: #fff;
}
.right_menu-top {
    padding: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.right_menu-mid-btn-all {
    display: flex;
    align-items: center;
    gap: 15px;
}
.right_menu-tops{
    display: flex;
    align-items: center;
    gap: 15px;
}
.right_menu-top-link {
        color: #065fd4;
        font-size: 14px;
        padding-left: 45px;
}
.right_menu-mid {
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.right_menu-mid-link, .right_menu-mid-btn {
    font-size: 14px;
    display: flex;
    gap: 10px;
    align-items: center;
    
}

.right_menu-mid-btn-topic {
    display: flex;
    justify-content: space-between;
}
.right_menu-mid-link svg, .right_menu-mid-btn svg{
    width: 24px!important;
    height: 24px!important;
}
.theme-checkbox {
  --toggle-size: 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 40px;
  height: 20px;
  background: -webkit-gradient(linear, left top, right top, color-stop(50%, #efefef), color-stop(50%, #2a2a2a)) no-repeat;
  background: -o-linear-gradient(left, #efefef 50%, #2a2a2a 50%) no-repeat;
  background: linear-gradient(to right, #efefef 50%, #2a2a2a 50%) no-repeat;
  background-size: 205%;
  background-position: 0;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  border-radius: 99em;
  position: relative;
  cursor: pointer;
  font-size: var(--toggle-size);
}

.theme-checkbox::before {
  content: "";
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0px;
  left: 0px;
  background: -webkit-gradient(linear, left top, right top, color-stop(50%, #efefef), color-stop(50%, #2a2a2a)) no-repeat;
  background: -o-linear-gradient(left, #efefef 50%, #2a2a2a 50%) no-repeat;
  background: linear-gradient(to right, #efefef 50%, #2a2a2a 50%) no-repeat;
  background-size: 205%;
  background-position: 100%;
  border-radius: 50%;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}

.theme-checkbox:checked::before {
  left: 22px;
  background-position: 0;
}

.theme-checkbox:checked {
  background-position: 100%;
}
</style>