import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import "animate.css"
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-icons/icons'
import 'hover.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
