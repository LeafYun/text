<template>
    <div class="content">
        <!-- <p>{{content}}hjkhkhkh</p> -->
        <div class="left">
            <!-- <ul>
                <li><router-link to="/one">one</router-link></li>
                <li><router-link to="/two">two</router-link></li>
                <li><router-link to="/three">three</router-link></li>
                <li><router-link to="/four">four</router-link></li>
                <li><router-link to="/limit">Limit</router-link></li>
                <li><router-link to="/all">All</router-link></li>
            </ul> -->
            <el-row class="tac">
            <el-col :span="24">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>pages</span>
        </template>
        <!-- <el-menu-item-group> -->
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="1-1"><router-link to="/one">one</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link to="/two">two</router-link></el-menu-item>
        <!-- </el-menu-item-group> -->
        <!-- <el-menu-item-group title="分组2"> -->
          <el-menu-item index="1-3"><router-link to="/three">three</router-link></el-menu-item>
        <!-- </el-menu-item-group> -->
        <el-submenu index="1-4">
          <template slot="title"><router-link to="/four">four</router-link></template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title"><router-link to="/all">All</router-link></span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">forbid</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title"><router-link to="/limit">Limit</router-link></span>
      </el-menu-item>
    </el-menu>
  </el-col>
  </el-row>    
        </div>
        <div class="right">
            <router-view/>
        </div>
    </div>
</template>
<script>
export default {
    name:'Start',
    data(){
        return({
            content:"this is start.vue"
        })
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style lang="less" scoped>
*{
    padding:0;
    margin: 0;
}
html{
  height: 100%;
}
body{
  height: 100%;
}
.content{
    width: 100%;
    height: 920px;
    border: 1px solid yellow;
    display: flex;
    flex-direction: row;
}
.left{
    border: 1px solid red;
    width: 10%;
    background-color: rgb(84, 92, 100);
    ul li{
        // border:1px solid green;
    }
    .el-submenu .el-menu-item{
        min-width: 0;
    }
    a{
        color: white;
        text-decoration: none;
    }
}
.right{
    border: 1px solid blue;
    width:89%;
    background-color: rgba(128, 128, 128, 0.2);
    text-align: center;
}
</style>