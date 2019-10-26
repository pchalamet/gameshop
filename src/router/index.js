import Vue from 'vue'
import VueRouter from 'vue-router'

import Foo from '../views/Foo.vue'
import Bar from '../views/Bar.vue'
import Fizz from '../views/Fizz.vue'
import Zoo from '../views/Zoo.vue'


Vue.use(VueRouter)

const routes = [
    { path: '/foo', name: 'Foo', component: Foo },
    { path: '/bar', name: 'Bar', component: Bar },
    { path: '/fizz', name: 'Fizz', component: Fizz },
    { path: '/zoo', name: 'Zoo', component: Zoo },
]


const router = new VueRouter(
    {
        mode: 'history',
        base: process.env.BASE_URL,
        routes
    })


export default router