import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import eventBus from 'vue3-eventbus';

import ContainerRow from './components/ContainerRow.vue';
import BaseButton from './components/BaseButton.vue';
import BaseText from './components/BaseText.vue';
import ContainerColumn from './components/ContainerColumn.vue';

const app = createApp(App)

app.component(ContainerRow.name, ContainerRow)
app.component(BaseButton.name,BaseButton)
app.component(BaseText.name, BaseText)
app.component(ContainerColumn.name, ContainerColumn)


app.use(router)
app.use(store)
app.use(eventBus)
app.mount('#app')
