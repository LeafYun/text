<template>
    <!-- <div>
        <p>{{content}}</p>
    </div> -->
    <div class="box">
        <p>事件处理</p>
        <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="活动区域">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="活动时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="加急处理">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="活动性质">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
      <el-checkbox label="地推活动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="特殊资源">
    <el-radio-group v-model="form.resource">
      <el-radio label="线上品牌商赞助"></el-radio>
      <el-radio label="线下场地免费"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="活动形式">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
    </div>
</template>
<script>
export default {
    name:"Four",
    data(){
        return({
            content:'this is four',
            form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
        })
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>
<style lang="less" scoped>
.right{
    // text-align: center;
    // display: flex;
    // align-items: center
}
.box{
    // margin: 0 atuo;
    border: 1px solid blue;
    width: 100%;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    height: 918px;
}
.el-form{
    width: 80%;
    border-right: 1px solid rebeccapurple;
    border-left: 1px solid rebeccapurple;
    margin-top: 5%;
    padding: 20px;
}
p{
    border-bottom: 2px solid rebeccapurple;
    width: 98%;
    padding-left: 2%;
    text-align: left;
    font-size: 18px;
    color: #303133;
    font-weight: bold;
}
</style>



