import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage'
import { createRouter, createWebHistory } from 'vue-router';

const routes =[
   {
    name:'Home',
    component:HomePage,
    path:'/'

   },
//    {
//     name:'About',
//     component:AboutPage,
//     path:'/about'
//    },
//    {
//     name:'',
//     component:ContactPage,
//     path:'/contact'
//    },
   {
    name:'Contact',
    component:ContactPage,
    path:'/contact'
   }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router