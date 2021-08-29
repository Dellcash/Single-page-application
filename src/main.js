import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import "animate.css"
import 'bootstrap/dist/js/dataTables.bootstrap5.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'hover.css'
// import 'bootstrap/dist/js/jquery-3.5.1'
// import 'bootstrap/dist/js/jquery.dataTables.min.js'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import 'chart.js/dist/chart.min.js'
// import 'mdbootstrap/css/mdb.min.css'


const app = createApp(App)

app.use(router)
app.mount('#app')
