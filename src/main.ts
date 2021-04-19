import { createApp } from 'vue'
import Login from './components/Index.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router/router'
import {
          ElIcon,
          ElMenu,
          ElMenuItem,
          ElMenuItemGroup,
          ElSubmenu,
          ElRadioButton,
          ElRadioGroup,
          ElInput,
          ElButton,
          ElMessage
        } from 'element-plus'

const app = createApp(Login)

app.use(ElIcon)
app.use(ElMenu)
app.use(ElMenuItem)
app.use(ElMenuItemGroup)
app.use(ElSubmenu)
app.use(ElRadioButton)
app.use(ElRadioGroup)
app.use(ElInput)
app.use(ElButton)
app.use(ElMessage)

app.use(router)

app.mount('#app')