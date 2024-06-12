import { createApp } from 'vue'
import './assets/style/general.scss'
import App from './App.vue'
import * as bootstrap from 'bootstrap'


/* Importazione della libreria di font awesome*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


// Icone Regular Font Awesome
import { 
    faClock as faClockSolid,
    faChevronDown as faChevronDownSolid,
    faArrowUpLong as faArrowUpLongSolid,
    faArrowRightLong as faArrowRightLongSolid,
    faCircle as faCircleSolid,
    faEye as faEyeSolid,
    faLocationDot as faLocationDotSolid,
} from '@fortawesome/free-solid-svg-icons'

// Icone Solid Font Awesome
import { 
    faClock as faClockRegular,    
    faUser as faUserRegular,
    faFileLines as faFileLinesRegular,
    faCalendar as faCalendarRegular,
} from '@fortawesome/free-regular-svg-icons'

// Icone Brands Font Awesome
import{
    faTwitter,
    faFacebookF,
    faInstagram,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

library.add(faClockSolid, faClockRegular, faChevronDownSolid, faTwitter, faFacebookF, faInstagram, faLinkedin, faArrowUpLongSolid, faCircleSolid, faArrowRightLongSolid, faUserRegular, faFileLinesRegular, faEyeSolid, faCalendarRegular, faLocationDotSolid)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
