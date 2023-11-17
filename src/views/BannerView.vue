<template>
    <div class="home">
      <img alt="Vue logo" :src="src">
    </div>
  </template>
  
  <script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  

  export default{
    name:'BannerView',
    components: {
    //   HelloWorld,
    },
    props:['src']
  }
  </script>
  <style scoped>
  img{
    width:100%;
    object-fit: cover;
  }
  </style>

<!-- https://cdn.fyndsigns.com/1698156726162-image--.png -->
<!-- https://cdn.fyndsigns.com/1698156694036-banner---.png -->
  