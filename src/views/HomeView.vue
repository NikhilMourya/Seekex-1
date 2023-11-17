<template>
  <div class="home-main">
    <body-view />
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
 // @ is an alias to /src
import BodyView from '@/views/BodyView.vue'

@Component({
  components: {
    BodyView,
  }
})
export default class HomeView extends Vue {}
</script>
<style lang="scss">
  // font-family: 'Montserrat', sans-serif;
// font-family: 'Playfair Display', serif;
*{
  transition: all 200ms ease-in ;
}
button,.input-layout input{
  font-family: 'Montserrat', sans-serif;
}
.item-title,.offer-item,.subscribe-layout > .title{
  font-family: 'Playfair Display', serif;
}
.trending-header h2,.input-layout > button{
  font-family: 'Playfair Display', serif;
}
.home-main{
  overflow: hidden;
}
.pro-title,.size-list{
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}
.pro-price{
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}
.item-title:hover{
  // padding-top: 5px;
  cursor: pointer;
}
.item-img:hover{
  transform: scale(1.05);
}
button:hover{
  cursor: pointer;
  // font-size: 20px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
