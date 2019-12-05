<template>
    <!-- <div>{{content}}<br/>
    <p>{{this.$store.state.count}}</p>
    <slot></slot>
    </div> -->
    <div class="two">
        <div class="two_two">
            <P>需要处理的事件</P>
            <div class="two_select">
                <template>
                    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                        <!-- <div style="margin: 15px 0;"></div> -->
                        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                    </el-checkbox-group>
                </template>
                <button>查看</button>
            </div>
            <template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </template>
        </div>
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
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
    name:"Two",
    data(){ 
        return({
            content:"this is Two",
            tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
          checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true
        })
    },
     methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
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
        // border-top: 1px solid blue;
    }
}
.two_two{
    margin-bottom: 50px;
    p{
        text-align:left;
        padding-left:15px;
        color:#545c64;
        font-family:arial;
        font-weight:bold;
    }
    .two_select{
        width: 100%;
        height: 50px;
        border: 1px solid purple;
        display: flex;
        button{
           width: 100px;
           height: 30px;
           margin-top: 10px;
           border-radius: 20px;
           background-color: white;
           margin-left: 50px;
           outline: 0;
        }
        .el-checkbox ,.is-checked{
            padding-top: 18px;
            margin: 0 20px;
            .el-checkbox{
                font-size: 30px;
            }
        }
    }
    ul{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    ul li{
        list-style-type: none;
        display: inline-block;
        width: 100%;
    }
}
</style>