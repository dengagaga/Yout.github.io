<template>
    <div class="container_history">
       <h1 class="title-1">Регистрация</h1>
       <form action="" class="form" >
           <div class="form_left">
                   <h2 class="form_left-title">Регистрация</h2>
                   <p class="form_left-text">на YouTube</p>
           </div>
           <div class="form_rigth">
               <input class="form_right-input" v-model="login" name="login" type="text" placeholder="Придумайте логин">
               <input class="form_right-input" v-model="password" name="password" type="text" placeholder="Придумайте пароль">
               <input class="form_right-input" v-model="fullName" name="fullName" type="text" placeholder="Имя">
               <input class="form_right-input" v-model="age" name="age" type="text" placeholder="Возраст">
               <input class="form_right-input" v-model="email" name="email" type="text" placeholder="Email">
               <input class="form_right-input" v-model="number" name="number" type="text" placeholder="Номер">
               <input class="form_right-input" v-model="img" name="img" type="text" placeholder="Ссылка на фото">
               <p class="mess">{{ autorization.mess }}</p>
               <div class="form_rigth-bot">
                   <NuxtLink @click="autorization.registrationPerson(login, password, fullName, age, email, number, img)" class="submit" type="submit">Зарегистрироваться</NuxtLink>
               </div>
           </div>
          
       </form>
    </div>
</template>
<script setup>
const autorization = useAutorizationStore()
const login = ref('')
const password = ref('')
const fullName = ref('')
const age = ref('')
const email = ref('')
const number = ref('')
const img = ref('')

onMounted(() => {
   if (localStorage.getItem('changeTheme')) {
       localStorage.getItem('changeTheme') == 'true' ? document.querySelector('body').classList.add('dark-theme') : document.querySelector('body').classList.remove('dark-theme')
   }
   
})
const router = useRouter();

</script>
<style scoped>
.submit {
    max-width: 180px;
}
</style>