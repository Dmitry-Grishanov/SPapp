import './assets/main.css'

import { createApp } from 'vue'
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
import { createPinia } from 'pinia'

>>>>>>> Stashed changes
=======
import { createPinia } from 'pinia'

>>>>>>> Stashed changes
import App from './App.vue'
import router from './router'

const app = createApp(App)

<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
app.use(createPinia())
>>>>>>> Stashed changes
=======
app.use(createPinia())
>>>>>>> Stashed changes
app.use(router)

app.mount('#app')
