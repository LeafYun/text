<template>
    <div class="box">
        <div class="content">
        <img src="../assets/01.jpg"/>
        <p>{{content}}</p>
        <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:'All',
    data(){
        return({
            content:"您的地址不存在喔，请耐心检查一遍喔"
        })
    }
}
</script>
<style lang="less" scoped>
*{
    margin: 0;
    padding:0;
}
.content{
    color:'red';
    .title{
        color:green;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 24px;
    }
}
// .right[data-v-f4e1e8e4]{
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }
.box{
    border: 1px solid blue;
    height:918px;
    display: flex;
    justify-content: center;
    // align-items: center;
    .content{
        margin: 8%;
    }
}
</style>