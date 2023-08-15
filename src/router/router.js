import {createRouter, createWebHistory} from 'vue-router';
import MyHome from '@/components/MyHome.vue';
import MyAbout from '@/components/MyAbout.vue';
import MyContact from '@/components/MyContact.vue';
import ItemFunction from "@/components/ItemFunction.vue";
import LoginFunction from "@/components/LoginFunction.vue";
import ApiFunction from "@/components/ApiFunction.vue";

const routes = [
    {path: '/', component: MyHome},
    {path: '/about', component: MyAbout},
    {path: '/contact', component: MyContact},
    {path: '/itemFunction', component: ItemFunction},
    {path: '/loginFunction', component: LoginFunction},
    {path: '/apiFunction', component: ApiFunction},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;