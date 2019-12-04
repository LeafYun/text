import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import One from '@/pages/one/one_a'
import Two from '@/pages/two/two_a'
import Three from '@/pages/three/three_a'
import OneOne from '@/pages/one/one_one/one_one_a'
import All from '@/pages/all'
import Limit from '@/pages/limit'
import Start from '@/pages/start'
import Four from "@/pages/four/four"

Vue.use(Router)

const router = new Router({
  mode:"history",
  linkActiveClass:"leaf",
  routes: [
    {
      path:'*',
      redirect:'/all'
    },
    {
      path:'/all',
      name:'All',
      alias:'/a',
      component: All
    },
    {
      path: '/',
      name: 'One',
      component: One
    },
    {
      path: '/one',
      name: 'One',
      alias:'/o',
      component: One,
      children: [{
        path: '/oneone',
        name:'OneOne',
        component: OneOne
      }]
    },
    {
      path: '/three',
      name: 'Three',
      alias:'/th',
      component: Three
    },
    {
      path: '/two',
      name: 'Two',
      alias:'/tw',
      component: Two
    },
    {
      path:'/limit',
      name:'Limit',
      component:Limit,
    },
    {
      path:'/four',
      name:'Four',
      component:Four
    }
  ]
})

//全局路由守卫
router.beforeEach((to,from,next)=>{
  // console.log(to.path);
  // console.log(from.path);
  if(to.path == "/two"||to.path=="/three"){
    // let status = this.$store.state.content;
    if (true) {
      next();
      // console.log("next()")
    } else {
      router.push({name:"Limit"})
      // console.log("router.push")
    }
  }else{
    next()
  }
})

export default router;