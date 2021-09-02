import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = ()=> import('views/home/Home')
const Category = () => import('views/Category')
const Shopcart = () => import('views/Shopcart')
const Profile = () => import('views/Profile')
const Detail = () => import('views/details/Detail')
const routes = [
  { 
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/shopcart',
    component:Shopcart
  },
  {
    path:'/Profile',
    component:Profile
  },
  {
    path:'/detail/:iid',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
