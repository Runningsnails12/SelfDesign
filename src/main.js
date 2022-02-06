import { createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


import userButton from './components/UserComponent/UserButton.vue'
import userImage from './components/UserComponent/userImage.vue'
import UserLayoutVertical from './components/UserComponent/UserLayoutVertical.vue'
import UserLayoutHorizontal from './components/UserComponent/UserLayoutHorizontal.vue'



const app = createApp(App)
app.component(userButton.name ,userButton)
app.component(userImage.name,userImage)
app.component(UserLayoutHorizontal.name,UserLayoutHorizontal)
app.component(UserLayoutVertical.name,UserLayoutVertical)
app.use(router)
app.use(store)
app.mount('#app')
