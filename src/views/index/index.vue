<template>
  <div>
    <Header />
    <Nav />
    <div class="bg_color">
      <div class="">
        <el-row :gutter="10">
          <el-col :xs="8" :sm="6" :md="11" :lg="11" :xl="11">
            <div class="grid-content bg-purple">
              <div class="c_bg">
                <div class="content_top">
                  <div class="flex patient">
                      <p>
                      患者姓名：
                      </p>
                      <div class="them_p">
                        <h2>
                          安俊<span class="danger_p">(HIV)</span>
                        </h2>
                        <h3 class="them_p patient_detail">
                        ( 男,18岁 )
                        </h3>
                      </div>
                  </div>
                  <div class="flex">
                      <p>
                      手术医生：
                      </p>
                      <div class="them_p">
                        <h2>何秒生</h2>
                      </div>
                  </div>
                  <div class="flex">
                    <p>
                      手术部位：
                      </p>
                      <div class="them_p">
                        <h2>右眼</h2>
                      </div>
                  </div>
                  <div class="warning_block">
                      <div class="danger">急诊</div>
                      <div class="warning">感染</div>
                  </div>
                </div>
                <div class="bolder_bottom"></div>
                <div class="content_center">
                    <div class="flex">
                       <div class="flex">
                          <p>
                            主索引：
                          </p>
                          <div class="them_p">
                            <h2>467068</h2>
                          </div>
                       </div>
                        <div class="flex">
                          <p>
                            病&nbsp&nbsp区：
                          </p>
                          <p class="black_p">
                            四区
                          </p>
                         
                       </div>
                        <div class="flex">
                          <p>
                            床&nbsp&nbsp号：
                          </p>
                          <p class="black_p">
                            04
                          </p>
                         
                       </div>
                        <div class="flex">
                          <p>
                            费&nbsp&nbsp别：
                          </p>
                          <p class="black_p">
                            
                          </p>
                         
                       </div>
                    </div>
                    <div class="flex ">
                        <div class="flex w_50">
                          <p>
                            麻醉/医师：
                          </p>
                          <p class="black_p">
                            全麻（王小虎）
                          </p>
                        </div>
                        <div class="flex w_50">
                          <p>
                            助&nbsp&nbsp&nbsp理：
                          </p>
                          <p class="black_p">
                            刘能、赵四、谢大脚....
                          </p>
                         
                       </div>
                    </div>
                    <div class="content_center_list">
                          <span>术前诊断：</span>
                          <span class="black_p">
                          1、诊断一
                          </span>
                          <span class="black_p">
                          &nbsp&nbsp2、诊断二
                          </span>
                       
                    </div>
                    <div class="content_center_list">
                        <span> 手术方式：</span>
                        <span class="black_p">
                        手术方式一；
                        </span>
                        <span class="black_p">
                        手术方式二；
                        </span>
                        <span class="black_p">
                        手术方式三；
                        </span>
                    </div>
                    <div class="content_center_list">
                      
                      
                          <span>手术史：</span>
                          <span class="black_p">
                          无
                          </span>
                      
                    </div>
                     <div class="content_center_list">
                          <span>D R：</span>
                          <span class="black_p">
                          胸片
                          </span>
                    </div>
                    <div class="content_center_list">
                          <span>心电图：</span>
                          <span class="black_p">
                          心电图结果
                          </span>
                      
                    </div>
                </div>
                <div class="bolder_bottom mb_30"></div>
                <div class="content_footer">
                  <div class="flex">
                    <div class="flex">
                        <p>
                        一级核查：
                        </p>
                        <div class="them_p">
                          <h2>王丽N1(10.01)</h2>
                        </div>
                    </div>
                    <div class="flex">
                        <p>
                         二级核查：
                        </p>
                        <div class="them_p">
                          <h2>李娜娜N2(10.02)</h2>
                        </div>
                    </div>
                    <div class="flex">
                        <p>
                         三级核查：
                        </p>
                        <div class="them_p">
                          <h2>张成雪N3(10.03)</h2>
                        </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </el-col>
          <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="4">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="4">
            <div class="grid-content bg-purple"></div>
          </el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="4">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="2">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
        </el-row>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue
  } from 'vue-property-decorator';
  import Header from '@/components/header/Header.vue';
  import Nav from '@/components/header/Nav.vue';
  import Footer from '@/components/footer/Footer.vue';
  @Component({
    components: {
      Header,
      Nav,
    Footer,
    },
  })
  export default class Index extends Vue {


  }
</script>

<style scoped lang="scss">
  .bg_color {
    background: $bgColor;
     padding:$public_pd;
  }
  .c_bg{
     background: $content_bgColor;
    
    
  }
  .mb_30{
    margin-bottom:30px;
  }
  .content_top,.content_center,.content_footer{
    height:75px;
    padding:10px;
    @include flex-card;
    @include align-items-center;
    @include justify-content-center ;

    .flex{
      width:33.3%;
      @include text_center;
      @include flex-card;
      @include align-items-center;
      @include justify-content-center ;
      p{
        color:$grey_p;
      }
      .them_p{
       
      }
    }
    .patient_detail{
      font-weight:$font-weight-small;
    }
    .warning_block{
      width:auto;
      white-space: nowrap;
      color:$color;
      
      div{
        padding:2px 5px;
        border-radius:2px;
      }
    }
    .danger{
      background:$danger_color;
      margin-bottom:2px;
    }
    .warning{
      background:$warning_color;
    }
    
  }
  .bolder_bottom{
      margin:0 10px;
    }
  .content_center{
      padding:10px;
      flex-wrap: wrap;
      height:auto;
      .flex{
          width:100%;
          margin-bottom:0.05rem;
             @include justify-content-start ;
          .flex{
            width:25%;
          }
          .w_50{
             width:50%;
          }
      }
      p{
         color:$grey_p;
      }
      .content_center_list{
        width:100%;
        margin-bottom:0.1rem;
        span:first-child{
          color:$grey_p;
          width: 60px;
          display: inline-block;
          text-align-last: justify;
        }
        // span:nth-child(3){
        //  letter-spacing: 7px;
         
        // }
        //  span:nth-child(4){
        //  letter-spacing: 7px;
         
        // }
      }
  }
  .content_footer{
    .flex{
      justify-content: space-between !important;
       width:100%;
      .flex{
        width:100%;
         justify-content: left !important;
        text-align:left;
      }
      // .flex:nth-child(2){
      //   justify-content: center !important;
         
      // }
      .flex:last-child{
          justify-content: flex-end !important;
        
          text-align:right;
      }
      
    }
  }
</style>