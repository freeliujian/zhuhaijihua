import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index.vue'
import Video from '@/pages/video.vue'
import Layout from '@/pages/layout.vue'
import Lose from '@/pages/lose.vue'
import Detail from '@/pages/detail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/layout'
    },
    {
      path:'/layout',
     component:Layout,
     name:'layout',

     children:[{
      path:'/',
      component:index,
      name:'index'
      },
      {
        path:'/video/:id',
        name:'video',
        component:Video
      },
      {
        path:'/detail',
        component:Detail,
        name:'detail'
        },]
    },
    {
      path:'/404/:name',
      component:Lose,
      name:'404',
    }
  ]
})
