import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameSetting from '../views/GameSetting.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/gamesetting',
      name: 'gamesetting',
      component: GameSetting
    },

    {
      path: '/about',
      name: 'about',
      component: About

    },
  ]
})

export default router;
