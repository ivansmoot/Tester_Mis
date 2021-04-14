import { createApp } from 'vue'
import Shell from './components/Shell.vue'
import router from './router/router'
import {
          ElIcon,
          ElMenu,
          ElMenuItem,
          ElMenuItemGroup,
          ElSubmenu,
          ElRadioButton,
          ElRadioGroup,
        } from 'element-plus'

const app = createApp(Shell)

app.use(ElIcon)
app.use(ElMenu)
app.use(ElMenuItem)
app.use(ElMenuItemGroup)
app.use(ElSubmenu)
app.use(ElRadioButton)
app.use(ElRadioGroup)

app.use(router)

app.mount('#app')