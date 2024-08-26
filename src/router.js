import { createWebHistory, createRouter } from 'vue-router'


// Import delle Pagine dell'Applicativo
import AppHome from './pages/AppHome.vue'
import AppNotFound from './pages/AppNotFound.vue'


// Creazione delle Rotte

const routes = [

    { 
        path: '/', name:'home', component:AppHome 
    },
     
    {   // will match everything and put it under `route.params.pathMatch`
        path: '/:pathMatch(.*)*', name: 'NotFound', component: AppNotFound 
    },

]


const router = createRouter({

    history: createWebHistory(),

    routes: routes,

})


export default router