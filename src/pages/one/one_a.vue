<template>
    <div id="one_a">
        <!-- {{content}}
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
        <p>{{this.$store.getters.getStateCount}}</p> -->

        <div class="block">
            <el-table
            :data="Datas"
            border
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
            <!-- <span class="demonstration">完整功能</span> -->
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
            </el-pagination>
        </div>
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
            content:"this is one",
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4,
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
        }
        , {
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
        }
        , {
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
        }
        , {
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
        }
        , {
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
        }
        , {
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
        Datas:[
            {
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
        }
        , {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }
        ],
        sum:5,//分页中每页展示出来的内容的条数
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
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            // console.log(this.tableData[0].name);
            this.Datas = [];
            for(let sums = this.sum*val;sums-this.sum*(val-1);sums--){
                // console.log(this.tableData[sums]);
                console.log(sums)
                this.Datas.unshift(this.tableData[sums]);
            }
            console.log(this.Datas);
        },
    }
}

</script>
<style lang="less" scoped>
html{
  height: 100%;
}
body{
  height: 100%;
}
.el-table--enable-row-hover[data-v-a1f4c2ea]{
    font-size:14px;
    height:800px
    }
.el-pagination{
        margin-top:15px;
    }
</style>