<template>
   <div class="header_content">
         <div class="grid-content bg-purple logo_block">
            <img alt="logo" src="@/assets/img/logo.png" class="logo">
         </div>
      
         <div class="grid-content bg-purple-light">
            <ul class="header_nav">
               <li class="active">
               <i class="el-icon-date"></i>
               手术排班
               </li>
               <li>
               <i class="el-icon-date"></i>
               病区核查
               </li>
               <li>
               <i class="el-icon-date"></i>
               手术排班
               </li>
               <li>
               <i class="el-icon-date"></i>
               手术准备间
               </li>
               <li>
               <i class="el-icon-date"></i>
               手术间
               </li>
               <li>
               <i class="el-icon-date"></i>
               麻醉管理
               </li>
               <li>
               <i class="el-icon-date"></i>
               人员排班 
               </li>
               <li>
               <i class="el-icon-date"></i>
               设备管理 
               </li>
               <li>
               <i class="el-icon-date"></i>
               耗材管理 
               </li>
               <li>
                  <i class="el-icon-date"></i>
               权限应用 
               </li>
            </ul>
         </div>
   </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
}
</script>

<style scoped lang="scss">
   .header_content{
      @include flex-card;
      @include justify-content-between;
      padding-left:$header_left;

   }
   .logo_block{
        @include flex-card;
        @include align-items-center;
        img{
           padding:5%;
           max-width:225px;
        }
   }
   .logo{
      height:80px;
   }
   .header{
      height:80px;
   }
   ul.header_nav{
      display:flex;
      height:80px;

      @include flex-card;
      @include align-items-center;
      @include justify-content-end ;
      li{
         padding:0.1rem 0.11rem ;
         cursor: pointer;
         margin:0 0.01rem;
         color:$themecolor;
          border: 1px solid $color;
          i{
             font-size:0.16rem;
          }
      }
      li.active,li:hover{
         border: 1px solid $themecolor;
         border-radius: 30px;
        
      }
      
   }
</style>

