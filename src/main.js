import { createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


import UserButton from './components/UserComponent/UserButton.vue';
import UserImage from './components/UserComponent/UserImage.vue';
import UserText from './components/UserComponent/UserText.vue';
import UserLayoutVertical from './components/UserComponent/UserLayoutVertical.vue';
import UserLayoutHorizontal from './components/UserComponent/UserLayoutHorizontal.vue';



const app = createApp(App);
app.component(UserButton.name,UserButton);
app.component(UserImage.name,UserImage);
app.component(UserText.name,UserText);
app.component(UserLayoutHorizontal.name,UserLayoutHorizontal);
app.component(UserLayoutVertical.name,UserLayoutVertical);
app.use(router);
app.use(store);
app.mount('#app');
