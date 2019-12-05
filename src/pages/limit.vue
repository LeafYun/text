<template>
    <div class="box">
        <div class="content">
            <img src="../assets/02.jpg" />
        <p>由于您的权限问题，您无法跳转目标页面</p>
        <router-link to="/one">首页</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:"Limit",
}
</script>
<style lang="less" scoped>
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