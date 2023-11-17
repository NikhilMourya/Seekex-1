<template>
  <div class="card">
    <router-link :to="'/product-detail'" class="router-product">
      <img :src="src" v-lazyload loading="lazy" />
      <div class="product-info">
        <h4 class="pro-title">{{ title }}</h4>
        <p class="pro-price">&#8377;399 <span>&#8377;1299</span></p>
        <div class="size-list">
          <p v-for="(size, index) in size" :key="index">{{ size }}</p>
        </div>
      </div>
      <div class="overlay">
        <div class="overlay-cont">
          <a><i class="fa-solid fa-heart"></i></a>
          <a><i class="fa-solid fa-share-nodes"></i></a>
          <a><i class="fa-solid fa-cart-shopping"></i></a>
        </div>
      </div>
    </router-link>
  </div>
</template>
  
  <script>
import { Component, Prop, Vue } from "vue-property-decorator";
export default {
  name: "CardView",
  data() {
    return {
      // name:'nasda'
    };
  },
  props: ["title", "size", "src"],
  methods: {},
  // created() {
  //   console.log("creted", this.$props.src);
  // },
};
</script>
  
<style scoped lang="scss">
.card:hover {
  cursor: pointer;

  .overlay {
    left: 60%;
  }
}
.card:hover img {
  -webkit-transition: all 300ms ease-in-out;
  -o-transition: all 300ms ease-in-out;
  transition: all 300ms ease-in-out;
  -webkit-filter: blur(1px);
  -moz-filter: blur(1px);
  -ms-filter: blur(1px);
  -o-filter: blur(1px);
  filter: blur(1px);
  transform: scale(1.003);
}
.card {
  text-decoration: none;
  .router-product{
    text-decoration: none;
    color: #2c3e50;;
  }
  .overlay {
    position: absolute;
    top: 40%;
    left: -30%;
    transform: translate(-50%, -50%);

    .overlay-cont {
      width: 70%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      a {
        height: 50px;
        width: 50px;
        margin: 5px;
        border-radius: 100px;
        background-color: white;
        padding: 15px;
      }
    }
  }
}
.card {
  position: relative;
  overflow: hidden;
  .product-info {
    h4 {
      padding: 2% 10%;
      font-size: 14px;
    }
    .pro-price {
      font-weight: 900;
      padding: 5% 0%;
      span {
        display: inline-block;
        margin: auto;
        color: red;
        text-decoration: line-through;
        font-size: 10px;
        font-weight: 400;
      }
    }
    .size-list {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 10px;
      padding: 5px 20px;
      p {
        border: 1px solid #e6e6e6;
        padding: 2px;
      }
    }
  }
}
</style>
  