<template>

<div>
  <div class="up"><a href="#top">back</a></div>
<div id="card">
    <div id="small">
    <p id="h22">今日预测</p>
    <div id="link-top"></div>
    <p id="h33">FORECAST</p>
    </div>
    <div id="title">
    <!-- <div v-for="item in list" :key="item.id"> <p id="h44" ><el-button id="h55" @click="$router.push('/{{item.title}}')">{{item.title}} </el-button></p> -->
     <div v-for="(item,index) in list" :key="item.id" > <p class="h44"  ><a :href="'#'+na[index].num"  id="h55"  > {{item.title}} </a>
             <div id="link-top"></div>
             <!-- <div v-for="(item,index) in list" :key="item.id" > <p class="h44"  ><button @click.native="goAnchor('#'+nu[index].num)" style="background-color: black "  id="h55"  > {{item.title}} </button>
             <div id="link-top"></div> -->
    </div>
<!-- @click="click1(item.id)" -->
</div>


</div>

    <div  id="hole" >
        <div v-for="(item,index) in list" :key="item.id" class="fen">
       <p class="h23" :id="na[index].num" >{{item.title}}</p>
    <div id="link-top1"></div> 
     <!-- <img src="../assets/bp1.png"> -->
       
    <p class="h24" v-html="item.content" > {{item.content}}</p>
        </div>

        

    </div>
    <el-pagination class="block222"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
     :current-page="queryInfo.pagenum" 
      :page-sizes="[6]"
     :page-size="queryInfo.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>

</div>

   

     
  
</template>
<style scoped>
.h24{
    float: left;
    text-indent: 2em;
    font-family: "新宋体" !important;
    font-size: 20px;
    font-weight: 500;
    width: 90%;
    margin-left: 5%;
    color: rgb(17, 16, 16) !important;
}
</style>

<style>

.fen{
  background-color: whitesmoke;
 
  border-style: solid;
  border-width: 0px;
  margin-top: 30px;
  border-color: rgb(170, 171, 172);
  background-image: url("../assets/u=3432466608,2757470046&fm=26&fmt=auto.webp");
  background-repeat: no-repeat;
  background-size: cover;
  /* border-radius: 10px; */
  float: left;
  opacity: 0.9;
  box-shadow:0 1px 1px 1px rgb(227, 228, 228) ;

}
#card{
    width: 20%;
    margin-left: 10%;
    height: 560px;
    background-color: #FFAF3D;
    margin-top: 30px;
    
    
   
}
.h24{
    float: left;
    text-indent: 2em;
    font-family: "新宋体" !important;
    font-size: 20px;
    font-weight: 500;
    width: 90%;
    margin-left: 5%;
    color: rgb(17, 16, 16) !important;
}
#small{
    background-color: #FFAF3D;
    width: 100%;
    height: 135px;
}
#h22{
   
    margin-left: 20%;
    width: 50%;
    margin-top: 20px;
    float: left;
    color: #FFFFFF;
    font-size: 1.5em;

}
#h33{
    float: left;
     margin-left: 65%;
    color: #FFFFFF;
}
#link-top {
    float: left;
            width: 80%;
            height: 1px;
            border-top: solid #b9a26f 1px;
            margin-left: 10%;
        }
#title{
    width: 100%;
   
    height: 430px;
}
.h44{
    margin-top: 10px;
    float: left;
    margin-left: 15%;
    font-size: 1.2em;
    background-color: #cfd5e2;

}
#h55{
    font-size: 1.1em;
    border-radius: 0;
    border: none;
    background: none;
    color: white;
    text-decoration: none;
    background-color: #FFAF3D;
    
}
#hole{
    width: 60%;
    /* background-color: antiquewhite; */
    margin-left: 33%;
   height: auto;
   float: left;
   margin-top: -540px;
 

    /* border-style: solid;
    border-width: 1px;
    border-color: darkgray; */
   
}
#hole img{
    width: 70%;
    margin-left: 15%;
}
.h23{
   
    margin-left: 10%;
    width: 50%;
    margin-top: 20px;
    float: left;
    color: #353638 !important;
    font-size: 30px;
    font-weight: 900;
   

}
#link-top1 {
    float: left;
            width: 80%;
            height: 1px;
            border-top: solid #7d7f80 1px;
            margin-left: 10%;
            margin-top: -20px;

        }

.block222{
  /* background-color: aquamarine; */
  margin-top: -560px;
 margin-left: 40%; 
 width: 50%;


 
}

.up{
  background-color: rgb(211, 209, 209);
  float: left;
  height: 70px;
 position:fixed;
    z-index:99;
  width: 70px;
 margin-top: 22%;
  border-radius: 100%;
  margin-left: 2%;

}
.up a{
  text-decoration: none;
  text-align: center;
  line-height: 3em;
  font-size: 1.5em;
  margin-left: 8px;
  font-weight: 800;
  color: rgb(46, 80, 192);
}



  
</style>
<script>


export default {
  name: 'News',
  data () {
    return {
      currentDate: new Date(),
      list:[],
      currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        queryInfo: {
        title: '',
        type: '今日预测',
        pagenum: 1,
        pagesize: 6,
      },
      // list1:[];
      // list2:[];
      // content:'',
      total: 0,
        na:[
          {
            num:0
          },
           {
            num:1
          },
           {
            num:2
          },
           {
            num:3
          },
           {
            num:4
          },
           {
            num:5
          },
        ]
    }
  }, 
  created () {
    this.test()
  },
  mounted(){
     this.goAnchor(selector)
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
      // var list1=[]
      // for(var i=0;i<listtmp.length/2;i++)
      //   list1.push(listtmp[i])
      // this.list1=list1



    
      this.list=listtmp
       const total_server = await this.$http.get('/dingyang_new/get-articles-count',{params:{
		title:'', //指定查询文章的标题(模糊查询)
    type:'今日预测', //指定查询文章的类型
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
    // click1(id){
    //   for(var i=0;i<this.list.length;i++){
    //     if(id==this.list[i].id)
    //     this.content=this.list[i].content
    //   }
    // }
 
  



 },

 
}
</script>
