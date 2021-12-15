<template>
    

<el-carousel trigger="click" height="400px" :interval="3000" arrow="always" style="width:100%">
      <el-carousel-item v-for="item in imgList" :key="item.name">
        <img v-bind:src="item.src" style="height:100%;width:100%;" alt="" :title="item.title" />
      </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      imgList: [
        {
          name: "1",
          src:  require("@/assets/1-2.png"),
          title: "这是第一张"
        },
        {
          name: "2",
          src: require("@/assets/1-1.png"),
          title: "这是第二张"
        },
        {
          name: "3",
          src: require("@/assets/1-3.png"),
          title: "这是第三张"
        },
        {
          name: "4",
          src: require("@/assets/1-4.png"),
          title: "这是第四张"
        }
      ]
    };
  },
  created() {
    this.getImages()
  },
  mounted() {},
  computed: {},
  // methods: {
  //   async getImages(){
  //     const img1=await this.$http.get('http://101.37.116.37:5000/api/huayin/get-img?name=1-1.png')
  //      const img2=await this.$http.get('http://101.37.116.37:5000/api/huayin/get-img?name=1-2.png')
  //      const img3=await this.$http.get('http://101.37.116.37:5000/api/huayin/get-img?name=1-3.png')
  //      const img4=await this.$http.get('http://101.37.116.37:5000/api/huayin/get-img?name=1-4.png')
      
  //     this.imgList[0].name=img1.data.data[0].name
  //     this.imgList[0].src=img1.data.data[0].location
  //      this.imgList[1].name=img2.data.data[0].name
  //     this.imgList[1].src=img2.data.data[0].location
  //     this.imgList[2].name=img3.data.data[0].name
  //     this.imgList[2].src=img3.data.data[0].location
  //     this.imgList[3].name=img4.data.data[0].name
  //     this.imgList[3].src=img4.data.data[0].location
  //   }
  // }
};

</script>
<style>

</style>
