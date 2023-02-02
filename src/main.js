import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import "@fontsource/montserrat";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'


// Specific Icons

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"




library.add(
    faMagnifyingGlass, faFacebook, faInstagram, faTwitter, faYoutube
)

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount('#app');


