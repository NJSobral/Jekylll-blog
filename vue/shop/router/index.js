import { createRouter, createWebHistory, createWebHashHistory  } from 'vue-router';
import PLP from "../components/plp.vue"
import PDP from "../components/pdp.vue"
import Shop from "../shop.vue"


const routes = [
    {
        path: '/shop',
        name: 'shop', 
        component: Shop,
        children: [
            {
                path: '',
                name: 'shop',
                // redirect:'category/:category/', 
                component: PLP,
                props: true
            },
            { 
                path: 'category/:category/',
                name: 'category', 
                component: PLP,
                props: true
            },
            { 
                path: 'movie/:id/',
                name: 'movie', 
                component: PDP,
                props: true 
            }
        ]
    },
    // { 
    //     path: '/category/:name/',
    //     name: 'category', 
    //     component: PLP,
    //     props: true
    // },
    // { 
    //     path: '/movie/:id/',
    //     name: 'movie', 
    //     component: PDP,
    //     props: true 
    // },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;