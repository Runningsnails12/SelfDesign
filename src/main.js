import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import ContainerRow from './components/ContainerRow.vue'
import BaseButton from './components/BaseButton.vue'
import BaseText from './components/BaseText.vue'


const app = createApp(App)

app.component(ContainerRow.name, ContainerRow)
app.component(BaseButton.name,BaseButton)
app.component(BaseText.name, BaseText)


app.use(router)
app.use(store)
app.mount('#app')
