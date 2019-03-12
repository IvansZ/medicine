<template>
   <el-row class="header">
      <el-col :span="24">
         <div class="grid-content bg-purple-light">
            <ul class="nav">
               <li class="active">
                  <i class="el-icon-view"></i>
                  洗眼核查
               </li>
               <li>
                  <i class="el-icon-view"></i>
                  患者状态
               </li>
               <li>
                 <i class="el-icon-view"></i>
                  患者出病区
               </li>
               <li>
                 <i class="el-icon-view"></i>
                  患者回病区
               </li>
               <li>
                 <i class="el-icon-view"></i>
                  手术申请查询
               </li>
               
              
            </ul>
         </div>
      </el-col>
   </el-row>
</template>

<script lang="ts">
   import {
      Component,
      Prop,
      Vue
   }
   from 'vue-property-decorator';
   @Component
   export default class Nav extends Vue {}
</script>

<style scoped lang="scss">
.nav{
   background:$themecolor;
   height:46px;
   @include flex-card;
   @include align-items-center;
   @include justify-content-start ;
   @include box_shadow;
   li{
      @include flex-card;
      @include align-items-center;
      @include justify-content-center ;
      background:$themecolor;
      color:$color;
      width:auto;
      height:100%;
      @include text_center;
      padding: 0 30px;
      border-left:1px solid #fff;
      
   }
   li:first-child{
      margin-left:$header_left;;
   }
   li.active,li:hover{
      background:$color;
      color:$themecolor;
       @include box_shadow;
   }

}
</style>