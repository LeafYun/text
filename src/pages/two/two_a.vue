<template>
    <!-- <div>{{content}}<br/>
    <p>{{this.$store.state.count}}</p>
    <slot></slot>
    </div> -->
    <div class="two">
        <div class="two_one">
            <p>事件的进展</p>
        </div>
        <el-steps :active="1" align-center>
        <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
        </el-steps>
    </div>
</template>
<script>
export default {
    name:"Two",
    data(){ 
        return({
            content:"this is Two",
        })
    }
}
</script>
<style lang="less" scoped>
.two_one{
    margin-bottom:60px;
    p{
        text-align:left;
        padding-left:15px;
        color:#545c64;
        font-family:arial;
        font-weight:bold;
    }
}
</style>