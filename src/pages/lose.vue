<template>
  <div class="wrapper">
      <img src="http://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/qingdao.png" alt="" v-if="$route.params.name==='qingdao'">
      <img src="http://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/guiyang.png" alt="" v-else-if="$route.params.name==='guiyang'">
      <img src="http://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/other.png" alt="404" v-else>
      <div class="btn">
        <el-button size="mini" @click="handleClick">
            返回首页
        </el-button>
      </div>

  </div>
 
</template>

<script>

export default {
    
    methods:{
        handleClick(){
            this.$router.push('/layout/')   
        }
    },
    created(){
        console.log(this.$route.params.name)
    }
}
</script>

<style lang="less" scoped>
.wrapper{
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    height: 100vh;
    .btn {
        display:flex;
        justify-content: center;
        width: 100%;
    }
    img{
        width: 100%;
    }
}

</style>
