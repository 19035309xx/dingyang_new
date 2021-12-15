<template>
<div id="top">
      <img src='../assets/LOGO-DINGYANG.png' >
    <el-menu 
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="white"
 
  active-text-color="#909399" router >
  <el-menu-item class="ff" index="/main">首页</el-menu-item>
   <el-menu-item index="/forecast">今日预测</el-menu-item>
    <el-menu-item index="/stock">操盘精要</el-menu-item>
     <!-- <el-menu-item index="/report">月度报告</el-menu-item> -->
      <!-- <el-menu-item index="/Investigation">实地调查</el-menu-item> -->
       <el-menu-item index="/investment">投资哲学</el-menu-item>
        <el-menu-item index="/Investigation">实地调研</el-menu-item>
         <el-menu-item index="/About">关于丁洋</el-menu-item>
 
  
</el-menu>

</div>


</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
  </script>

  <style >
  #top img{
    width: 15%;
    margin-left: 5%;
    height: auto;
    margin-top: -0.5%;
  }
  .el-menu{
    width: 65%;
    float:right;
    
    font-weight: 700;
    color: rgb(77, 75, 75);
    
  }
  .el-menu-item{
    width: 12.5%;
    font-size:18px !important;
    text-align: center;
    
  }



  
  </style>