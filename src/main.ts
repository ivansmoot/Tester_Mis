import { createApp } from 'vue'
import Shell from './components/Shell.vue'
import router from './utils/router'
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

const app = createApp(Shell)

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