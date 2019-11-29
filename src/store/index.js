import Vue from 'vue'
import Vuex from 'vuex'
//使用vuex
Vue.use(Vuex);
//创建Vuex实例
const store=new Vuex.Store({
    state:{
        count:1,
        content:true
    },
    getters:{
        getStateCount:function(state){
            return state.count+1;
        }
    },
    mutations:{
        jia(state){
            //上面的定义state对象
            state.count=state.count+1;
        },
        jian(state){
            //上面的定义state对象
            state.count=state.count-1;
        }
    },
    //注册actions，类似Vue里的mothods
    actions:{
        //接收一个与store实例具有相同方法得属性得context对象
        jias(context){
            context.commit("jia")
        },
        //接收一个与store实例具有相同方法得属性的content对象
        jians(context){
            context.commit("jian")
        }
    }
})
//导出store
export default store
