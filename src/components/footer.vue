<template>
  <div id="app">
    
    <div class="footer">
      <div class="box1">
        <h2 class="h11">Contacts:</h2>
        <p >Copyright © 2008-2018 FineHedgefunds. </p><p> Rights Reserved. </p><p>email: huayinjingzhi@163.com</p>
      </div>
      <div class="box2">
        <h2 class="h11">Links:</h2>
        <p><span class="dian">·</span><a class="zi" href="/main">首页</a></p>
             <p><span class="dian">·</span><a class="zi" href="#/forecast">今日预测</a></p>
            <p><span class="dian">·</span><a class="zi" href="#/stock">股市人生</a></p>
      </div>
      <div class="box3">


    
        <p><span class="dian">·</span><a class="zi" href="#/investment">投资哲学</a></p>
             <p><span class="dian">·</span><a class="zi" href="#/Investigation">实地调研</a></p>
            <p><span class="dian">·</span><a class="zi" href="#/About">关于丁洋</a></p>
      </div>

      </div>
  </div>
</template>

<style  scoped>
body {
  padding: 0;
  margin: 0;
}
.dian{
  font-size: 20px;
}
.zi{
 font-size: 20px;
 margin-left: 1%;
 text-decoration: none;
   color: #fff;
   
}
.h11{
  color: #fff;
  font-weight: 900;
  margin-left: 10%;
 
}
.box1{
 height: 250px;
 width: 20%;
 margin-top: 30px;
 margin-left: 10%;
 border-width: 2px;
 border-color: #fff;
 border-style: groove;
}
.box1 p{
  
  margin-left: 10%;
  color: #fff;
  font-size: 20px;
}
.box2{
height: 250px;
 width: 20%;

 margin-left: 50%;
 margin-top: -250px;
 background-color : rgba(156, 55, 55, 0)
  
 
}
.box2 p{
    margin-left: 10%;
  color: #fff;
  
}
.box3{
  height: 200px;
  width: 20%;

 margin-left: 60%;
 margin-top: -200px;
 border-width: 0;
 background-color : rgba(255,255,255,0)
}


.footer{
  position: absolute;
  /* bottom: 0; */
  width: 100%;
  line-height: var(--footer-height);
 background-image: url("../assets/footer.jpg");
  background-repeat: no-repeat;
  color: #fff;
  height: 300px;
  margin-top: 50px;
  background-size: cover;

 
}
</style>

<script>
export default {
  name: 'vfooter',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      
    }
  }
}
</script>

<style>

</style>