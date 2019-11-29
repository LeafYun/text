<template>
    <div>
        <p>{{content}}</p>
        <slot></slot>
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
</style>