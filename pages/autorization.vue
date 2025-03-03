<template>
     <div class="container_history">
        <h1 class="title-1">Авторизация</h1>
        <form action="" class="form" >
            <div class="form_left">
                    <h2 class="form_left-title">Вход</h2>
                    <p class="form_left-text">Перейдите на YouTube</p>
            </div>
            <div class="form_rigth">
                <input class="form_right-input" v-model="login" name="login" type="text" placeholder="Логин">
                <input class="form_right-input" v-model="password" name="password" type="text" placeholder="Пароль">
                <p class="mess">{{ autorization.mess }}</p>
                <div class="form_rigth-bot">
                    <NuxtLink @click="autorization.getPerson(login, password)" class="submit" type="submit">Войти</NuxtLink>
                    <NuxtLink class="submit" to="/registration">Регистрация</NuxtLink>
                </div>
            </div>
           
        </form>
     </div>
</template>
<script setup>
onMounted(() => {
    if (localStorage.getItem('changeTheme')) {
		localStorage.getItem('changeTheme') == 'true' ? document.querySelector('body').classList.add('dark-theme') : document.querySelector('body').classList.remove('dark-theme')
	}
    // autorization.getPersonAll()
})
const router = useRouter();
const login = ref('')
const password = ref('')
const mess = ref('')
const link = ref(false)

const autorization = useAutorizationStore()

</script>
<style>
.form {
    display: flex;
    justify-content: space-between;
    padding: 40px;
    align-items: center;
    width: 100%;
    height: 35%;
    color: #fff;
    background: #f5f5f5;
    border-radius: 7px;
    margin: 0 auto;
    margin-top: 20px;
}
.form_left {
    
}
.form_rigth {
max-width: 600px;
}
.form_left-title {
    font-size: 28px;
    margin-bottom: 10px;
    color: #1f1f1f;
}
.form_left-text {
    color: #1f1f1f;
}
.form_right-input {
    border-radius: 4px;
    color: #1f1f1f;
    font-size: 16px;
    height: 38px;
    margin: 1px 1px 0 1px;
    padding: 13px 15px;
    background-color: #fff;
    text-align: left;
    width: 100%;
    z-index: 1;
    margin-bottom: 20px;
}
.mess {
    color: red;
    margin-bottom: 10px;
    margin-top: -10px;
}

.submit {
    background-color: #0b57d0;
    color: #fff;
    font-size: 16px;
    height: 38px;
    max-width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 13px 15px;
    border-radius: 4px;
    text-align: center;
}
.form_rigth-bot {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>