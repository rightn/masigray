import { createRouter, createHistory } from "vue-router"

const router = createRouter({
    history: createHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: ''
        },
        {
            path: '/about',
            name: 'About',
            component: ''
        },
    ]
});

export default router;