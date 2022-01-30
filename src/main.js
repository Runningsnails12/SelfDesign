import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import ContainerRow from './components/EditComponent/ContainerRow.vue';
import BaseButton from './components/EditComponent/BaseButton.vue';
import BaseText from './components/EditComponent/BaseText.vue';
import ContainerColumn from './components/EditComponent/ContainerColumn.vue';

const app = createApp(App)

app.component(ContainerRow.name, ContainerRow)
app.component(BaseButton.name,BaseButton)
app.component(BaseText.name, BaseText)
app.component(ContainerColumn.name, ContainerColumn)


app.use(router)
app.use(store)
app.mount('#app')
