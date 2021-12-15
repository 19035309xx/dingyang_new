<template>
  <div>
    <h2 style="text-align:center">{{msg}}</h2>
    <p style="text-align:center">{{msg1}}</p>
    <el-divider></el-divider>

     <!-- <el-row>
  <el-col :span="11" v-for="(item,index,j) in list" :key="j" >
    <el-card  id="control-card">
      <el-col :span="6">
          <img :src="imgsrc+(index+1)+'.jpg'" class="image">
      </el-col>
      <el-col :span="18" id="control-left1">
          <h3>{{item.title}}</h3>
          <p ><span >{{item.content}}</span></p>
          

      </el-col>
    </el-card>
  </el-col>
  
  </el-row> -->

   <div class="card1">
     <div class="card2">
        <div class="tou">
          <p class="vp1">投资哲学</p>
           <div id="link-top"></div>
           <p class="vf1">INVESTMENT</p>
        </div>
        <div class="vl1">
         <div v-for="(item) in list" :key="item.id" > <button @click="click1(item.id)"  id="vb1" class="vb1">{{item.title}}</button>
             <div id="link-top"></div>
             <!-- <div v-for="(item,index) in list" :key="item.id" > <p class="h44"  ><button @click.native="goAnchor('#'+nu[index].num)" style="background-color: black "  id="h55"  > {{item.title}} </button>
             <div id="link-top"></div> -->
    </div>
        </div>
     </div>
     <div class="card3">
       <div>
         <p v-html="title" class="vp2">{{title}}</p>
       </div>
       <div>
         <p v-html="content" class="con1">{{content}}</p>
       </div>
     </div>
   </div>
    
 
  <el-pagination class="block223"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
     :current-page="queryInfo.pagenum" 
      :page-sizes="[6]"
     :page-size="queryInfo.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>


  </div>
  
</template>



<style>
.card1{
  width: 90%;
  
  justify-content:space-between;
  margin-left: 5%;
 
  display:flex; 
}
.card2{

width: 33%;
  background-color: rgb(255, 235, 147);

}
.vp1{
  font-size: 40px;
  font-weight: 600;
  text-align: center !important;
  color: rgb(102, 99, 63);
}
.vf1{
  margin-right: 10%;
}
.vp2{
  font-size: 30px;
  font-weight: 600;
   text-align: center !important;
    color: rgb(49, 49, 40);
}
.vl1{
margin-top: -10px;
}
.vb1{
  font-size: 20px;
  margin-left: 8%;
  background-color: rgb(255, 235, 147);
  border-style: none;
  font-weight: 600;
  height: 50px;
}


.tou p{
  text-align: right;
}
.card3{
width: 60%;
border-width: 5px;
 border-color: rgb(255, 245, 105);
 border-radius: 5%;
 border-style: solid;
 background-color: rgb(247, 246, 240);
 
 
}
.con1{
  color: #000 !important;
  font-size: 20px;
  width: 90%;
  margin-left: 5%;
}
</style>





<script> 
export default {
  
  data () {
    return {
      msg: '投资哲学',
      msg1: 'INVESTMENT',
      currentDate: new Date(),
      list:[],
      queryInfo: {
        title: '',
        type: '投资哲学',
        pagenum: 1,
        pagesize: 6,
      },
      title:'',
       content:'',
      total: 0,
      imgsrc:'http://101.37.116.37:5000/public/files/images/3-',
      switchName: [
        {
          cut: false
        },
        {
          cut: false
        },
        {
          cut: false
        },
        {
          cut: false
        },
        {
          cut: false
        }
      ]


   

    }
  }, 
  created () {
    this.test()
    this.f1()
  },
  methods: {
    async test(){
      const res =await this.$http.get('/dingyang_new/get-articles',{params:this.queryInfo})
      var listtmp=res.data.data
      // for(var i=0;i<listtmp.length;i++){
      //   if(listtmp[i].content.length>40){
      //     listtmp[i].content=listtmp[i].content.substr(0,40)
      //   }
      // }
      this.list=listtmp
       const total_server = await this.$http.get('/dingyang_new/get-articles-count',{params:{
		title:'', //指定查询文章的标题(模糊查询)
    type:'投资哲学', //指定查询文章的类型
}})
      this.total = total_server.data.data[0]['COUNT(*)']
    },
     handleSizeChange(newSize) {
      //当每页最多显示的数据数表单更改时，其值(作为参数传给服务器)也要跟着改
      this.queryInfo.pagesize = newSize
      //重新向服务器发送新的参数
      this.test()
      this.f1()
    },
    handleCurrentChange(newPage) {
      //及时更改要获取的页数
      this.queryInfo.pagenum = newPage
      this.test()
       this.f1()
    },
 

  toggleShopShow (index) {
        this.switchName[index].cut = !this.switchName[index].cut;

      },
      click1(id){
      for(var i=0;i<this.list.length;i++){
        if(id==this.list[i].id)
        this.content=this.list[i].content
      }
      for(var i=0;i<this.list.length;i++){
        if(id==this.list[i].id)
        this.title=this.list[i].title
      }
    },
   async f1(){
     const res =await this.$http.get('/dingyang_new/get-articles',{params:this.queryInfo})
      var listtmp=res.data.data
      // for(var i=0;i<listtmp.length;i++){
      //   if(listtmp[i].content.length>40){
      //     listtmp[i].content=listtmp[i].content.substr(0,40)
      //   }
      // }
     
     this.content=listtmp[0].content
     this.title=listtmp[0].title
}
      
    
 
  

  }
}
 

</script>

<style>

</style>