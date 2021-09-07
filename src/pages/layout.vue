<template>
  <div class="contanier">
      <div class="header">
        
          <img src="https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/images/logo.png" alt="logo" class="img" @click="handleClick">

      </div>
      <router-view></router-view>
      <div class="footer">
        版权所有：中国民生银行 上海格略企业咨询有限公司
      </div>
  </div>
 
</template>

<script>

export default {
  methods:{
    handleClick(){
      this.$router.push(`/`)
    }
  }
}
</script>

<style lang="less" scoped>
.contanier{
  height: 100vh;
  overflow-y: auto;
  .header{
    width: 100%;
    background: #0056d8;
    height: 1rem;
  }
  .img{
  
    
    width: 100px;
  }
  .footer{
    font-size:0.125rem;
    margin: 0 auto;
    text-align: center;
    height: 2rem;
    line-height: 2rem;
  }
}

</style>
