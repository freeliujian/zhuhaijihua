<template>
    <div class="container">

     
      <img src="http://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/bg.png"  style=" width:100%">
      <!-- <div class="banner"></div> -->
       <div class="content-charset-header"> 
            <span class="title">
            新闻动态
            </span>
            <div class="line">
              <img src="https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/images/titleBg.png">
              <div></div>
            </div>
          </div>
      <div class="content">
        <el-carousel style="width:50%;padding:0 0.225rem 0 0" height="height:100%"  
   
        >
          <el-carousel-item>
            <a href="https://mp.weixin.qq.com/s/BVc0A4X7bhcRzG3B4m1ilQ">
              <div class="content-banner" >
                <img :src="banner01"  style="width:100%">
                <!-- <div class="banner-list"  :style="{'background-image':'url('+banner01+')'}">
                  <div class="banner-introduce">
                    上海金桥支行珠海计划研讨
                  </div>
                </div> -->
                
              </div>
            </a>
            
          </el-carousel-item>
          <el-carousel-item>
            <a>
              <div class="content-banner">
                 <img :src="banner02"  style="width:100%">
                <!-- <div class="banner-list" :style="{'background-image':'url('+banner02+')'}" >
                  <div class="banner-introduce">
                    上海金桥支行珠海计划研讨
                  </div>
                </div> -->
                
              </div>
            </a>
            
          </el-carousel-item>
        </el-carousel>
       
        <div class="content-charset">
          
          <div class="content-charset-content" v-for="(item,index) in info" :key="index">
            <div class="list" :style="{paddingTop:(index===0)?0:''}">
              <a :href="item.path">
                  {{item.content}}
              </a>
              
            </div>
            
          </div>
        </div>
        
      </div>
      <div class="banks">
          <div class="content-charset-header" > 
            <span class="title">
            各分行实况
            </span>
            <div class="line">
              <img src="https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/images/titleBg.png">
              <div></div>
            </div>
          </div>
          <div class="bank-content">
            <div class="bank-list">
              <el-row :gutter="8">
                <el-col :span="8" v-for="item in bankList" :key='item.route' style="margin-bottom:0.75rem;">
                   <div class="bank-item" @click="hanlClick(item.route)">
                    <img :src='item.img' style="width:100%">
                  </div>
                </el-col>
              </el-row>
             
            </div>
          </div>  
      </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      banner01:'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/images/banner01.png',
      banner02:'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/images/banner02.png',
      bankList:[{
        route:'shijiazhuang',
        img:'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/images/plan01.png'
      },{
        route:'qingdao',
        img:'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/images/plan02.png'
      },{
        route:'guiyang',
        img:'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/images/plan03.png'
      },{
        route:'jinan',
        img:'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/images/plan04.png'
      },{
        route:'zhengzhou',
        img:'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/images/plan05.png'
      },{
        route:'huhehaote',
        img:'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/images/plan06.png'
      },],
      info:[
        {
          path:'https://mp.weixin.qq.com/s/BVc0A4X7bhcRzG3B4m1ilQ',
          content:'工会积极落实“我为群众办实事”实践活动，启动开展2021年“竹海计划”'
        },
         {
          path:'https://mp.weixin.qq.com/s/Pb6MhG19_4DXAvI-Xio93A',
          content:' 办实事•创幸福 | “竹海计划”走进石家庄分行'
        },
         {
          path:'https://mp.weixin.qq.com/s/Y_HPLVMmfOWJGa_J9jlo3w',
          content:'见证改变•助力幸福 | “竹海计划”走进青岛分行”'
        },
         {
          path:'https://t.1yb.co/BjT3',
          content:'【石家庄分行】积极推进“竹海计划”幸福实事工作'
        },
        {
          path:'https://mp.weixin.qq.com/s/q4XPdDoKjTnKSenSeNZdgw',
          content:'办实事•创幸福 | “竹海计划”走进济南分行'
        }
      ]
    };
  },
  methods:{
    hanlClick(route){
     
      if(route!='shijiazhuang' && route!='qingdao' && route!='guiyang'){
        this.$router.push(`/404/${route}`)
      }else {
         this.$router.push(`/video/${route}`)
      }
     
    },
    detailRouter(){
       this.$router.push(`/detail`)
    }
  }
};
</script>

<style>
.content .el-carousel .el-carousel__container{
   height: 100%!important;
}
</style>

<style lang="less" scoped>
a{
  text-decoration: none;
  color: rgb(51, 51, 51);
}
.container{
  width: 100%;
  height: calc(100% - 3rem)
}

// .banner{

//   height: 8.5rem;
//   background-position: center center;
//   background: url('../assets/images/bg.png') no-repeat;
//   background-size: 100% 100%;
// }
.content{
  display: flex;
  box-sizing: border-box;
  width: 95%;
  margin: 0 auto;

}

.content-banner{

  height: 100%;
  display: flex;
  align-items: center;
  background: #E4E7ED;
  .banner-list{
    width: 100%;
    height: 5rem;
    position: relative;
    background-size: 100% 100%;
    background-repeat:no-repeat;
    
     .banner-introduce{
      position: absolute;
      background: rgba(0,86,216, 0.6);
      bottom: 0;
      width: 100%;
      height: 0.75rem;
      font-size: 0.225rem;
      line-height: .75rem;
      color:white;
      text-indent: .125rem;
    }
  }
 
}
.content-charset{
  width: 50%;


  .content-charset-content{
    .list {
      font-size: 0.35rem;
      line-height:1.1;
      border-bottom: solid 1px #EBEEF5;
      padding: 0.225rem 0 ;
      
    }
  }
}
.content-charset-header{
    display: flex;
    width: 95%;
    height: 0.75rem;
    margin: 0.75rem auto;
    .title{
      font-size: 0.35rem;
      color:#3b7cc2;
      // line-height:1.25rem;
    }
    .line{
      flex: 1 1;

      width: 100%;
      height: 100%;
     
      display: flex;
      div{
        height: 1px;
        background: #74b184;
        flex:1 1;
        margin-top: 4%;
      }
      img{
        height: 0.5rem;
        width: 1rem;
       
      }
    }
  }
.bank-content{
  display: flex;
  width: 95%;
  margin: 0 auto;
  .bank-list{

    .bank-item{
      
      
    }
  }
}
</style>

