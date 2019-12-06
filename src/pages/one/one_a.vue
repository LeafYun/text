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
                width="180"
                align="center"
                >
            </el-table-column>
            <el-table-column
                prop="name"
                align="center"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                align="center"
                label="地址">
            </el-table-column>
            <el-table-column
                prop="content"
                align="center"
                label="事件内容">
                这就是事件的内容
            </el-table-column>
            <el-table-column
                prop="number"
                align="center"
                label="联系方式(电话号码)">
                15873151878
            </el-table-column>
            <el-table-column
                prop="operation"
                align="center"
                label="操作"
                >
                <!-- <button @click="dianji">详情</button> -->
                <template>
                  <el-button type="primary" round @click="open">详情</el-button>
                  <el-button type="warning"  round @click="shanchu">删除</el-button>
                </template>
            </el-table-column>
            </el-table>
            <!-- <span class="demonstration">完整功能</span> -->
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[5, 10, 15, 20]"
                :page-size="5"
                layout="total, sizes, prev, pager, next, jumper"
                :total="40">
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
          address: '上海市普陀区金沙江路 1518 '
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 '
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 '
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 '
        }
        , {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 '
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 '
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 '
        }
        , {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 '
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 '
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 '
        }
        , {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 '
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 '
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 '
        }
        , {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 '
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 '
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 '
        }
        , {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 '
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 '
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 '
        }],
        Datas:[
            {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 '
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 '
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 '
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 '
        }
        , {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 '
        }
        ],
        sum:5,//分页中每页展示出来的内容的条数
        })
    },
    methods:{
      open(index) {
      console.log(index.path[4].cells[0].textContent);
      console.log(index);
      let content_one = index.path[4].cells[0].textContent;
      let content_two = index.path[4].cells[1].textContent;
      let content_three = index.path[4].cells[2].textContent;
      let content_four = index.path[4].cells[3].textContent;
      let content_five = index.path[4].cells[4].textContent;
        this.$alert(
          `日期：${content_one}
          姓名：${content_two}
          地址：${content_three}
          事件内容：${content_four}
          联系方式(电话号码)：${content_five}`, 
          '内容详情', {
          confirmButtonText: '确定',
          callback: action => {
            // this.$message({
            //   type: 'info',
            //   message: `action: ${ action }`
            // });
          }
        });
      },
        dianji(){
          alert("this is content")
        },
        shanchu(){
          alert("no")
        },
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
.el-table ,.el-table--fit ,.el-table--border ,.el-table--enable-row-hover ,.el-table--enable-row-transition{
  // text-align: center;
  // color: red;
  // .el-table .cell{
  //   text-align: center
  // }
}
// .el-table .cell{
//     text-align: center
//   }
.el-table__row{
  text-align: center
}
.cell[data-v-a1f4c2ea]{
  text-align: center;
}
</style>