import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './assets/scss/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import LoginComponent from './pages/login/LoginComponent'
import HomeComponent from './pages/home/HomeComponent'
import ProdutoComponent from './pages/produtos/ProdutoComponent'
import VendaComponent from './pages/vendas/VendaComponent'
import RelatorioComponent from './pages/relatorios/RelatorioComponent'
import ClienteComponent from './pages/clientes/ClienteComponent'


Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'login', component: LoginComponent},
  {path: '/home', name: 'home', component: HomeComponent},
  {path: '/clientes', name: 'cliente', component: ClienteComponent},
  {path: '/produtos', name: 'produto', component: ProdutoComponent},
  {path: '/vendas', name: 'venda', component: VendaComponent},
  {path: '/relatorios', name: 'relatorio', component: RelatorioComponent},
]

const router = new VueRouter({
  routes //short for 'routes: routes' abreviação de 'rotas: rotas'
})

/*eslint-disable no-new*/
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
