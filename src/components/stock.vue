<template>
<div>
  <h2 style="text-align:center">{{msg}}</h2>
    <p style="text-align:center">{{msg1}}</p>
    <el-divider></el-divider>
<!-- <el-row>
  <el-col :span="6" v-for="(o, index) in teamlist" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="imgsrc+(index+1)+'.jpg'" class="image1">
      <div style="padding: 14px;">
        <el-col :span="8">
          <h3 style="font-weight:400;margin-top: 0;">{{o.id}}</h3>
        </el-col>
        <el-col :span="12">
          <p style="margin-top: 3px;font-size: 15px;">{{o.title}}</p>
        </el-col>
      </div>
    </el-card>
  </el-col>
</el-row> -->

<el-tabs type="border-card" class="el1" > 
  <el-tab-pane v-for="(item,index) in list" :key="item.id" :label="item.title" >
    <div>
    <img :src="imgsrc+(index+1)+'.jpg'" class="image1">
   <div class="p2"> <h2>{{item.title}}</h2>
    <p class="p1" v-html="item.content">相关介绍：{{item.content}}</p></div>
    </div></el-tab-pane>
  
</el-tabs>

</div>
</template>

<style>
  /* .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  } */
  .el1{
    width: 80%;
    margin-left: 15%;
  
  }
  .p2{
    width: 70%;
    float: left;
    margin-left: 30%;
    margin-top: -30%;
  }

  .image1 {
    margin-left: 2%;
    width: 20%;
    float: left;
    /* height: 200px; */
  }
  .el-tabs__nav{
    margin-left: 30%;
    width: 20%;
    
   
  }
  .p1{
    color: #000;
   
  }
  .el-tabs__item.is-active{
    font-size: 1.5em;
    color: rgb(45, 88, 168);
  }


</style>

<script>
export default {
  name: 'Cardteam',
  data() {
    return {
       msg: '关于我们',
       msg1: 'ABOUT',
    
      list:[],
      imgsrc:'http://101.37.116.37:5000/public/files/images/2-'
    };
  },
  created() {

    this.test()
  },
  methods: {
    // async getarticlelist(){
    //     const res =await this.$http.get('/huayin/get-articles',{
    //       params:{
    //         title:'',
    //         type:'',
    //         pagenum:'1',
    //         pagesize:'3'
    //       }
          
          
    //     })
        
    //     this.teamlist=res.data.data


    //   },
      async test(){
      const res =await this.$http.get('/huayin/get-articles',{params:{
        title:'', //指定查询文章的类型(模糊查询)
       type:'', //指定查询文章的类型
       pagenum:'1',  //指定查询结果的分页的页数
       pagesize:'3' //指定查询结果的分页的每页数量
      }})
      var listtmp=res.data.data
      // for(var i=0;i<listtmp.length;i++){
      //   if(listtmp[i].content.length>40){
      //     listtmp[i].content=listtmp[i].content.substr(0,40)
      //   }
      // }
      this.list=listtmp
      console.log(res)
    },
      // async getimage(){
      //   const img1=await this.$http.get('http://101.37.116.37:5000/api/huayin/get-img?name=2-1.jpg')
      //   this.imgsrc=img1.data.data[0].location
      // }
      


  }
}
</script>