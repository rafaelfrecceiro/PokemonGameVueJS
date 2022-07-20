import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardGeneral from "@/components/DashboardGeneral";
import TrainerDashboard from "@/components/trainer/TrainerDashboard";
import MissionsDashboard from "@/components/missions/MissionsDashboard";
import PokedexDashboard from "@/components/pokedex/PokedexDashboard";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboardGeneral',
    component: DashboardGeneral
  },
  {
    path: '/trainer',
    name: 'trainerDashboard',
    component: TrainerDashboard
  },
  {
    path: '/missions',
    name: 'missionsDashboard',
    component: MissionsDashboard
  },
  {
    path: '/pokedex',
    name: 'pokedexDashboard',
    component: PokedexDashboard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
