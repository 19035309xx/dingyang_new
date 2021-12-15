<template>
  <div>
    <h2 style="text-align:center">{{msg}}</h2>
    <p style="text-align:center">{{msg1}}</p>
    <el-divider></el-divider>
    <el-skeleton :rows="6" id="h1"/>
  </div>
</template>

<script>
export default {
  name: 'Divider3',
  data () {
    return {
      msg: '其他文章',
      msg1: 'OTHER'
    }
  }
}
</script>

<style>
  h2{
    color: rgb(75, 74, 74);
  }
  p{
    color:darkgrey;
  }
  .el-divider{
    margin:0 auto;
    width: 40%;
  }
  #h1{
    width: 80%;
    margin-left: 10%;
  }
  .el-collapse-item__header{
    font-size: 18px !important;
  }
 .el-collapse-item__content{
   font-size: 14px !important;
 }
</style>