import VueRouter  from 'vue-router'
import Login from './components/login.vue';
import Dashboard from './components/dashboard.vue'

const router = new VueRouter({
    routes: 
    [
        {
          path: "/",
          name: "Login",
          component: Login,
        },
        {
          path: "/dashboard",
          name: "Dashboard",
          component: Dashboard,
        }
      ]
}) 
  
export default router