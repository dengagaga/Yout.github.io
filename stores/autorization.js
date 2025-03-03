import { defineStore } from 'pinia'
import axios from 'axios'

export  const useAutorizationStore = defineStore('AutorizationStore', () => {
    const mess = ref('')
    const person = ref([])
    const router = useRouter();
    const status = ref('')
    const getPerson = (login, password) => {
      if (login == '' || password == '') {
        mess.value = 'Заполните все поля'
        return
      } else {
        mess.value = ''
        axios.post('https://41b866c117497632.mokky.dev/auth', {
          login:login,
          password:password,
        })
        .then(function (response) {
          person.value = response.data.data
          const token = response.data.token
          localStorage.setItem('person', JSON.stringify(person.value))
          localStorage.setItem('personToken', JSON.stringify(token))
          router.push('/')
        })
        .catch(function (error) {
          console.log(error);
        });
      }
        
      
    }
    const chechAutorization = () => {
      axios.get('https://41b866c117497632.mokky.dev/auth_me', {
        headers: { 
          Authorization: "Bearer " + JSON.parse(localStorage.getItem('personToken'))
        }
      }).then(function (response) {
        status.value = response.status
        console.log(response.status);
        
      }).catch(function (error) {
        console.log(error);
        status.value = error.status
        console.log(status.value, 'status.value');
      });
    }
    const registrationPerson = (login, password, fullName, age, email, number, img) => {

      if (login == '' || password == '' || fullName == '' || age == '' || email == '' || number == '' || img == '') {
        mess.value = 'Заполните все поля'
        return
      } else {
        mess.value = ''
        axios.post('https://41b866c117497632.mokky.dev/register', {
          login:login,
          password:password,
          fullName:fullName,
          age:age,
          email:email,
          number:number,
          img:img,
        })
        .then(function (response) {
          person.value = response.data.data
          const token = response.data.token
          localStorage.setItem('person', JSON.stringify(person.value))
          localStorage.setItem('personToken', JSON.stringify(token))
          router.push('/')
        })
        .catch(function (error) {
          console.log(error);
        });
      }
     
    
    }
    return {  getPerson, status, mess, chechAutorization, registrationPerson,   person}
})