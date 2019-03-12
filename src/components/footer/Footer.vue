<template>
   <div class="footer">
     <p>Copyrigh© 2018-2019 Version</p>
   </div>
</template>

<script lang="ts">
   import {
      Component,
      Prop,
      Vue
   }
   from 'vue-property-decorator';
   @Component
   export default class Footer extends Vue {}
</script>

<style scoped lang="scss">
.footer{
    background:$themecolor;
    padding:10px;
    @include text_center;
    color:$color;
}
</style>