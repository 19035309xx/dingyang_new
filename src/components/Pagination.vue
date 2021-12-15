<template>
  

  <el-tabs :tab-position="tabPosition" style="height: 200px;"  >
    <el-tab-pane v-for="item in list" :key="item.id" label=item.title>
       <h3>{{item.title}}</h3>
          <p>{{item.content}}</p>
    </el-tab-pane>
    <!-- <el-tab-pane label="配置管理">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane> -->
  </el-tabs>


</template>
<script>
  export default {
    data() {
      return {
        tabPosition: 'left',
        currentDate: new Date(),
        list:[]
      }
    },
    created(){
        this.test()
    },
    methods:{
        async test(){
      const res =await this.$http.get('/dingyang/get-articles',{params:{
        title:'', //指定查询文章的类型(模糊查询)
       type:'', //指定查询文章的类型
       pagenum:'2',  //指定查询结果的分页的页数
       pagesize:'10' //指定查询结果的分页的每页数量
      }})
      var listtmp=res.data.data
    //   for(var i=0;i<listtmp.length;i++){
    //     if(listtmp[i].content.length>40){
    //       listtmp[i].content=listtmp[i].content.substr(0,40)
    //     }
    //   }
      this.list=listtmp
    }
  },
  }
</script>
<style >
.el-tabs{
   
    border-width: 3px;
    border:black ;
    border-style: groove;
    height: 1000px;
    width: 80%;
  
}
</style>