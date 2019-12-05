<template>
    <!-- <div>{{content}}
    <p>{{this.$store.state.count}}</p>
    <p>这是three的部分</p>
    <slot></slot>
    </div> -->
    <div class="box">
        <div class="top">
            <p>&nbsp;&nbsp;&nbsp;数据概况</p>
            <ul>
                <li>
                    总数据<br><br>
                    25
                </li>
                <li>
                    待处理<br><br>
                    50
                </li>
                <li>
                    已处理<br><br>
                    10
                </li>
                <li>
                    近期评级<br><br>
                    良好
                </li>
            </ul>
        </div>
        <div class="content">
            <div class="left">
                <p>&nbsp;&nbsp;&nbsp;基础雷达图</P>
                <div id="myChart" :style="{width:'100%',height:'600px'}"></div>
            </div>
            <div class="right">
                <div class="block">
  <el-timeline>
    <el-timeline-item timestamp="2018/4/12" placement="top">
      <el-card>
        <h4>更新 Github 模板</h4>
        <p>王小虎 提交于 2018/4/12 20:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/3" placement="top">
      <el-card>
        <h4>更新 Github 模板</h4>
        <p>王小虎 提交于 2018/4/3 20:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/2" placement="top">
      <el-card>
        <h4>更新 Github 模板</h4>
        <p>王小虎 提交于 2018/4/2 20:46</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Three",
    data(){
        return({
            content:"this is Three",

        })
    },
    mounted(){
    this.draw();
  },
    methods:{
        draw(){
            //初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            //绘制图表
            myChart.setOption({
                title: {
        text: ''
    },
    tooltip: {},
    legend: {
        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: '销售（sales）', max: 6500},
           { name: '管理（Administration）', max: 16000},
           { name: '信息技术（Information Techology）', max: 30000},
           { name: '客服（Customer Support）', max: 38000},
           { name: '研发（Development）', max: 52000},
           { name: '市场（Marketing）', max: 25000}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '预算分配（Allocated Budget）'
            },
             {
                value : [5000, 14000, 28000, 31000, 42000, 21000],
                name : '实际开销（Actual Spending）'
            }
        ]
    }]
            })
        }
    }
}
</script>
<style lang="less" scoped>
.el-timeline-item__tail{
    background-color:red;
    color: red;
    border: 1px solid red;
}
.el-timeline-item__node, .el-timeline-item__node--normal, .el-timeline-item__node--{
            background-color: rebeccapurple;
        }
.right{
    .block{
        margin-left: 50px;
        
        .el-timeline-item__node, .el-timeline-item__node--normal, .el-timeline-item__node--{
            border: 2px solid rebeccapurple;
        }
    }
    
}
html{
  height: 100%;
}
body{
  height: 100%;
}
.box{
    width: 100%;
    height: 920px;
    .top{
        width: 100%;
        height: 18%;
        border: 1px solid red;
    }
    .content{
        width: 100%;
        height: 80%;
        border: 1px solid blue;
        .left{
            width: 64%;
            height: 100%;
            border: 1px solid orange;
            float: left;
            p{
        text-align: left;
        font-size: 18px;
        color: #303133;
        font-weight: bold;
    }
        }
        .right{
            width: 35%;
            height: 100%;
            border: 1px solid green;
            float: right;
        }
    }
}
.top{
    p{
        text-align: left;
        font-size: 18px;
        color: #303133;
        font-weight: bold;
    }
    ul{
        display: flex;
        width: 100%;
        margin: 0;
        padding: 0;
    }
    ul li{
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        margin:0;
        // border: 1px solid red;
        border-right: 1px solid rebeccapurple;
        flex-direction: row;
        list-style-type: none;
        flex-grow: 1;
        font-size: 25px;
        color: #303133;
    }
}
</style>