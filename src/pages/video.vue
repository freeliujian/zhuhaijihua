<template>
   <div class="container">

      <div class="banner">
          <video :src="Videos" controls="controls">
           您的浏览器不支持视频播放
            </video>
      </div>

      <div class="banks">
          <div class="content-charset-header"> 
            <span class="title">
            {{info.title}}
            </span>
            <div class="line">
              <img src="https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/images/titleBg.png">
              <div></div>
            </div>
          </div>
          <div class="bank-content">
            <div class="bank-list">
              <el-row :gutter='8'>
                <el-col :span="24" >
                    <div class="bank-list-title">
                      <div class="p-line"></div>
                      <p>
                        活动现场
                      </p>
                    </div>
                </el-col>
                <el-col :span="24">
                  <el-row :gutter='8'>
                      <el-col :span="8" v-for="(item,index) in titleLists" :key='index' style="height:87px;">
                          <img :src="item.img" style="width:100%"/>
                          <div style="font-size: 0.225rem;text-align:center;margin-bottom:0.225rem;">
                            {{item.title}}
                          </div>
                      </el-col>
                  </el-row>
                </el-col>
              </el-row>
             <el-row :gutter='8' >
                <el-col :span="24" >
                    <div class="bank-list-title" style="margin-top:0.5rem">
                      <div class="p-line"></div>
                      <p>
                        成果展示
                      </p>
                    </div>
                </el-col>
                <el-col :span="24" >
                  <el-row :gutter='8'>
                      <el-col :span="8" v-for="(item) in 6" :key='item'>
                          <div style='position:relative'>
                            <el-image
                            :src='qidai' 
                            style="width:100%"
                            :preview-src-list='[qidai,titleLists[0].img,titleLists[1].img]'>

                            </el-image>
                             <!-- <img :src="qidai" style="width:100%"/> -->
                             <div style="width:100%;font-size: 0.225rem;text-align:center;margin-bottom:0.225rem;position:absolute;bottom:5%;color:white;">
                                敬请期待
                             </div>
                          </div>
                      </el-col>
                  </el-row>
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
      data:{
        title:'分行'
      },
      Video:'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/shijiazhuangvideo.mp4',
      titleList:[{
        img:'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/images/activity01.png',
        title:'高层研讨'
      },{
        img:'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/images/activity02.png',
        title:'中基层解读'
      },{
        img:'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/images/activity03.png',
        title:'中基层共创'
      },{
        img:'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/images/activity04.png',
        title:'中基层共创'
      },{
        img:'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/images/activity05.png',
        title:'共创小组讨论'
      },{
        img:'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/images/activity06.png',
        title:'共创方案宣讲'
      },],
      qidai:'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/images/jingqingqidai.png'
    };
  },
  computed:{
    titleLists:function(){
      const id = this.$route.params.id
      if(id==='shijiazhuang'){
        return [{
          img:'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/images/activity01.png',
          title:'高层研讨'
        },{
          img:'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/images/activity02.png',
          title:'中基层解读'
        },{
          img:'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/images/activity03.png',
          title:'中基层共创'
        },{
          img:'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/images/activity04.png',
          title:'中基层共创'
        },{
          img:'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/images/activity05.png',
          title:'共创小组讨论'
        },{
          img:'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/images/activity06.png',
          title:'共创方案宣讲'
        },]
      }else if(id==='qingdao'){
        return [{
        img:'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/%E9%9D%92%E5%B2%9B%E5%88%86%E8%A1%8C%E7%89%A9%E6%96%99/%E8%B0%83%E7%A0%94%E8%AE%BF%E8%B0%88.png',
          title:'调研访谈'
        },{
          img:'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/%E9%9D%92%E5%B2%9B%E5%88%86%E8%A1%8C%E7%89%A9%E6%96%99/%E8%B0%83%E7%A0%94%E8%AE%BF%E8%B0%882.png',
          title:'电话调研'
        },{
          img:'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/%E9%9D%92%E5%B2%9B%E5%88%86%E8%A1%8C%E7%89%A9%E6%96%99/%E9%AB%98%E5%B1%82%E7%A0%94%E8%AE%A8.png',
          title:'高层研讨'
        },{
          img:'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/%E9%9D%92%E5%B2%9B%E5%88%86%E8%A1%8C%E7%89%A9%E6%96%99/%E4%B8%AD%E5%9F%BA%E5%B1%82%E5%85%B1%E5%88%9B.png',
          title:'共创小组讨论'
        },{
          img:'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/%E9%9D%92%E5%B2%9B%E5%88%86%E8%A1%8C%E7%89%A9%E6%96%99/%E4%B8%AD%E5%9F%BA%E5%B1%82%E5%85%B1%E5%88%9B2.png',
          title:'共创方案宣讲'
        },{
          img:'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/%E9%9D%92%E5%B2%9B%E5%88%86%E8%A1%8C%E7%89%A9%E6%96%99/%E4%B8%AD%E5%9F%BA%E5%B1%82%E8%A7%A3%E8%AF%BB.png',
          title:'中基层解读'
        },]
      }else if(id==='guiyang'){
        return {
          title:'贵阳分行'
        }
      }
      else if(id==='jinan'){
        return {
          title:'济南分行'
        }
      }
      else if(id==='zhengzhou'){
        return {
          title:'郑州分行'
        }
      }
      else if(id==='huhehaote'){
        return {
          title:'呼和浩特分行'
        }
      }
    },
    info:function(){
      const id = this.$route.params.id
      if(id==='shijiazhuang'){
        return {
          title:'石家庄分行'
        }
      }else if(id==='qingdao'){
        return {
          title:'青岛分行'
        }
      }else if(id==='guiyang'){
        return {
          title:'贵阳分行'
        }
      }
      else if(id==='jinan'){
        return {
          title:'济南分行'
        }
      }
      else if(id==='zhengzhou'){
        return {
          title:'郑州分行'
        }
      }
      else if(id==='huhehaote'){
        return {
          title:'呼和浩特分行'
        }
      }
    },
    Videos:function(){
      const id = this.$route.params.id
      if(id==='shijiazhuang'){
        return 'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/shijiazhuangvideo.mp4'
      }else if(id==='qingdao'){
        return 'https://iwedoing-1.oss-cn-hangzhou.aliyuncs.com/report/%E9%9D%92%E5%B2%9B%E5%88%86%E8%A1%8C%E7%89%A9%E6%96%99/qingdaovideo.mp4'
      }else if(id==='guiyang'){
        return {
          title:'贵阳分行'
        }
      }
      else if(id==='jinan'){
        return {
          title:'济南分行'
        }
      }
      else if(id==='zhengzhou'){
        return {
          title:'郑州分行'
        }
      }
      else if(id==='huhehaote'){
        return {
          title:'呼和浩特分行'
        }
      }
    }
  },
  mounted(){
    console.log()
  }
};
</script>

<style>
.content .el-carousel .el-carousel__container{
   height: 100%!important;
}
</style>
<style lang="less" scoped>

.banner{
  width: 100%;
  height: 8.5rem;

  video{
      width: 100%;
      height: 100%;
  }
}
.content{
  display: flex;
  box-sizing: border-box;
  margin-top: 1rem;
  width: 100%;
  height: 6rem;


}

.content-banner{

  height: 100%;
 
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

.content-charset-header{
    display: flex;
    width: 100%;
    height: 1.4rem;
    margin: 0 auto;
    margin-top:1rem;
    .title{
      font-size: 0.625rem;
      color:#3b7cc2;
      // line-height:1.25rem;
    }
    .line{
      flex: 1 1;

      width: 100%;
      height: 100%;
     
      display: flex;
      div{
        height: 1.5px;
        background: #74b184;
        flex:1 1;
        margin-top: 4%;
      }
      img{
        height: 0.625rem;
        width: 1.25rem;
       
      }
    }
  }
 .bank-list-title{
    display: flex;
    margin-bottom: 0.425rem;
    .p-line{
      width: 2px;
      height: 0.525rem;
      display: inline-block;
      background: #3b7cc2;
      margin-right: 4px;
    }
    p{
      font-size: 0.525rem;
      font-weight: 500;
       color:#3b7cc2;
    }
  }
.banks{
  padding:0 0.225rem;
}
</style>

