import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home.vue'
import Sobre from './components/Sobre.vue'
import Contatos from './components/Contatos.vue'
import Pagamentos from './components/Pagamentos.vue'
import LoginSinergias from './components/LoginSinergias.vue'
import LoginAnamnese from './components/LoginAnamnese.vue'
import Cadastro from './components/Cadastro.vue'
import Sinergias from './components/Sinergias.vue'
import Anamnese from './components/Anamnese.vue'

import Massagens from './components/terapias/Massagens.vue'
import Reiki from './components/terapias/Reiki.vue'
import Aroma from './components/terapias/Aroma.vue'
import Psico from './components/terapias/Psico.vue'
import Shiatsu from './components/terapias/Shiatsu.vue'
import Auricolo from './components/terapias/Auricolo.vue'
import Ventosa from './components/terapias/Ventosa.vue'
import Magneto from './components/terapias/Magneto.vue'

Vue.use(Router)

export default new Router({
   mode: 'history',
   linkExactActiveClass: 'link-active',
   routes: [{
      path: '/',
      name: 'home',
      component: Home
   }, {
      path: '/sobre',
      name: 'sobre',
      component: Sobre
   }, {
      path: '/contatos',
      name: 'contatos',
      component: Contatos
   }, {
      path: '/pagamentos',
      name: 'pagamentos',
      component: Pagamentos
   }, {
      path: '/login_sinergias',
      name: 'login_sinergias',
      component: LoginSinergias
   }, {
      path: '/login_anamnese',
      name: 'login_anamnese',
      component: LoginAnamnese
   }, {
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro
   }, {
      path: '/sinergias',
      name: 'sinergias',
      component: Sinergias
   }, {
      path: '/anamnese',
      name: 'anamnese',
      component: Anamnese
   },{
      path: '/massagens',
      name: 'massagens',
      component: Massagens
   }, {
      path: '/reiki',
      name: '/reiki',
      component: Reiki
   }, {
      path: '/aroma',
      name: 'aroma',
      component: Aroma
   }, {
      path: '/psico',
      name: 'psico',
      component: Psico
   }, {
      path: '/shiatsu',
      name: 'shiatsu',
      component: Shiatsu
   }, {
      path: '/auricolo',
      name: 'auricolo',
      component: Auricolo
   }, {
      path: '/ventosa',
      name: 'ventosa',
      component: Ventosa
   }, {
      path: '/magneto',
      name: 'magneto',
      component: Magneto
   }]
})