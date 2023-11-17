<template>
  <div class="card">
    <img :src="src" />
    <p class="overlay">{{ title }}</p>
  </div>
</template>
  
  <script>
import { Component, Prop, Vue } from "vue-property-decorator";
export default {
  name: "CategoryCard",
  data() {
    return {
      // name:'nasda'
    };
  },
  props: ["src",'title'],
  methods: {},
  // created() {
  //   console.log("created", this.$props.src);
  // },
};
</script>


  
<style scoped lang="scss">
.card {
  position: relative;
  img{
    width: 100%;
  }
  p {
    position: absolute;
    font-family: 'Playfair Display', serif;
    padding: 20px 50px;
    bottom: 0px;
    width: 100%;
    font-size: 20px;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    color: white;
  }
}
</style>
  