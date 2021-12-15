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
  <div class="fu">
  <div class="d1">

    <el-card :span="11" v-for="(item,index,j) in list1" :key="j"  id="control-cards" class="cards1">
     
      <el-col :span="18" id="control-left1s">
          <p class="ps1">{{item.title}}</p>
           <div class="link-tops1"></div> 
            <p class="ps2" ><span v-if="item.content.length<300" v-html="item.content">{{item.content}}</span></p>
        
           
      </el-col>
    </el-card>
  </div>
  <div class="d2">
    <el-card :span="11" v-for="(item,index,j) in list2" :key="j"  id="control-cards" class="cards2">
     
      <el-col :span="18" id="control-left1s">
          <p class="ps1">{{item.title}}</p>
           <div class="link-tops1"></div> 
            <p class="ps2" ><span v-if="item.content.length<300" v-html="item.content">{{item.content}}</span></p>
        
           
      </el-col>
    </el-card>
  </div>
  </div>
    
 
  <el-pagination class="block223s"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
     :current-page="queryInfo.pagenum" 
      :page-sizes="[10]"
     :page-size="queryInfo.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>


  </div>
  
</template>



<style>
.fu{
  width: 90%;
  display:flex; 
  justify-content:space-between;
  margin-left: 5%;
}
.ps1{
  color: rgb(24, 23, 23);
    font-size: 1.3em;
     font-weight: 800;
     margin-top: -5px;
}
.ps2{
  color: rgb(114, 90, 90);
  font-size: 1.1em;
}
.d1{
  display:inline-block;  vertical-align: top;
  width: 45%;
 border-width: 13px;
 border-color: rgb(253, 217, 54);
 border-radius: 5%;
 border-style: solid;
 


}
.d2{
  width: 45%;
 border-width: 13px;
 border-color: rgb(245, 201, 8);
 border-radius: 5%;
 border-style: solid;

}
 

.block223s{
  margin-left: 20%;
 margin-top: 20px;
}
 .link-tops1 {
   
            width: 100% !important;
            height: 1px;
            border-top: solid #d6d7d8 1px;
            
           

        }
       

</style>





<script> 
export default {
  
  data () {
    return {
      msg: '操盘精要',
      msg1: 'INVESTMENT',
      currentDate: new Date(),
      list:[],
      queryInfo: {
        title: '',
        type: '操盘精要',
        pagenum: 1,
        pagesize: 10,
      },
      total: 0,
        list1:[],
      list2:[],
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
      // this.list=listtmp
       var list1=[]
      for(var i=0;i<listtmp.length/2;i++)
        list1.push(listtmp[i])

      this.list1=list1

      var list2=[]
      for(var i=listtmp.length/2;i<listtmp.length;i++)
        list2.push(listtmp[i])

      this.list2=list2
      


       const total_server = await this.$http.get('/dingyang_new/get-articles-count',{params:{
		title:'', //指定查询文章的标题(模糊查询)
    type:'操盘精要', //指定查询文章的类型
}})
      this.total = total_server.data.data[0]['COUNT(*)']
    },
     handleSizeChange(newSize) {
      //当每页最多显示的数据数表单更改时，其值(作为参数传给服务器)也要跟着改
      this.queryInfo.pagesize = newSize
      //重新向服务器发送新的参数
      this.test()
    },
    handleCurrentChange(newPage) {
      //及时更改要获取的页数
      this.queryInfo.pagenum = newPage
      this.test()
    },
 

  toggleShopShow (index) {
        this.switchName[index].cut = !this.switchName[index].cut;

      },
  




  }
 
}
</script>

