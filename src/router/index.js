import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../components/NotFound.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:catchAll(.*)',
      component: NotFound
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../components/shop/Shop.vue')
    },
    {
      path: '/shop/:id',
      name: 'product-detail',
      component: () => import('../components/shop/ProductDetail.vue')
    },
    {
      path: '/shop-cart',
      name: 'shop-cart',
      component: () => import('../components/shop/ShopCart.vue')
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('../components/signin/SignIn.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../components/contact/Contact.vue')
    },
    {
      path: '/log-in',
      name: 'log-in',
      component: () => import('../components/logUser/LogInUser.vue')
    },
  ]
})

export default router
