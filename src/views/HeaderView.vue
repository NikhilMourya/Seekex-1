
<template>
  <header id="main-header">
    <section class="sub-header">
      <div class="sub-header-1"><h2>Welcome to Our Store Hiscraves</h2></div>
      <div class="call">
        <p><i class="fa-solid fa-phone"></i></p>
        <p>Call Us: 1234567890</p>
      </div>
    </section>
    <section class="main-header">
      <div><i class="fa-solid fa-bars"></i></div>
      <div>
        <p style="font-family: 'Playfair Display', serif">
          <a href="/" style="text-decoration: none; color: none">Logo Here</a>
        </p>
      </div>

      <div class="icon-container">
        <div class="input-container" v-if="isSearch">
          <input
            type="text"
            placeholder="Search Products.."
            v-model="searchInput"
            class="input-search"
          />
        </div>
        <a class="search-input-icon" @click="!isSearch"
          ><i class="fa-solid fa-magnifying-glass"></i
        ></a>
        <a class="hide"><i class="fa-solid fa-heart"></i></a>
        <a class="hide"><i class="fa-solid fa-cart-shopping"></i></a>
        <a class="hide"><i class="fa-regular fa-user"></i></a>
      </div>
    </section>
  </header>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
export default {
  data() {
    return {
      isSearch: false,
      searchInput: "",
    };
  },
  methods: {
    // toggleSearch() {
    //   return this.isSearch = true;
    // },
  },
};
</script>
<style lang="scss" scoped>
#main-header {
  position: sticky;
  width: 100%;
  z-index: 100;
  top: 0;

  .sub-header {
    background-color: rgb(13, 13, 13);
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 10px 5vw;
    font-family: "Montserrat", sans-serif;
    .sub-header-1 {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 10%;
    }
    h2 {
      font-size: 16px;
    }
  }
  .sub-header .call {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 5px 2vw;
  }
  .sub-header .call p {
    margin: 0px 10px;
  }
  .main-header {
    background-color: white;
    color: "#1F1F1F";
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    align-items: center;
    padding: 15px;
    .icon-container {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: 10px;
      color: "#858585";
      fill: "#858585";
      .input-container {
        width: 50%;
        input {
          line-height: 30px;
          width: 100%;
          padding: 5px;
          border-radius: 10px;
          border: 1px solid grey;
        }
      }
    }
  }
}
a {
  cursor: pointer;
}
a:hover {
  // padding-bottom: 5px;
  transform: rotateY(180deg);
}
</style>
  
