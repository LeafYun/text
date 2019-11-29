<template>
    <div id="one_a">{{content}}
        <!-- <router-view/> -->
        <br>
        <Two>
            这是通过插槽加入的内容__two
            <Three>
                这是通过插槽加入的内容__three
            </Three>
        </Two>
        <br>
        <p>{{this.$store.state.count}}</p>
        <button v-on:click="jia">点击(+1)</button>
        <button @click="jiaFun">+</button>
        <button @click="jianFun">-</button>
        <p>{{this.$store.getters.getStateCount}}</p>
    </div>
</template>
<script>
import Two from '../two/two_a.vue';
import Three from '../three/three_a';
export default {
    name:"One",
    components:{
        Two,
        Three
    },
    data(){
        return({
            content:"this is one"
        })
    },
    methods:{
        jia(){
            this.$store.state.count++;
            // alert("this is jia_function")
        },
        jiaFun(){
            //mutation方式
            // this.$store.commit("jia")
            //actions方式
            this.$store.dispatch('jias')
        },
        jianFun(){
            //mutation方式
            // this.$store.commit("jian")
            //actions方式
            this.$store.dispatch("jians")
        }
    }
}

</script>