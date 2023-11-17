<template>
  <main class="list-body">
    <div class="sm-filter">
      <p>Filter</p>
      <p>Sort</p>
      <p style="border-right: none;">Brand</p>
    </div>
    <filter-view class="xl-filter" />
    <section class="trending">
      <header class="trending-header">
        <span></span>
        <h2>Trending T-Shirts</h2>
        <span></span>
      </header>
      <div class="product-list">
        <card-view
          v-for="(item, index) in list"
          :key="index"
          :src="item.imgSrc"
          :size="item.size"
          :title="item.title"
        />
      </div>
      <div class="trending-footer">
        <button><router-link to="/products"> VIEW ALL </router-link></button>
      </div>
    </section>
  </main>
</template>
  
  <script>
import { Component, Vue } from "vue-property-decorator";
import CardView from "@/components/CardView.vue"; // @ is an alias to /src
import FilterView from "@/components/FilterView.vue";

export default {
  name: "BannerView",
  components: {
    //   HelloWorld,
    CardView,
    FilterView,
  },
  props: ["src", "title"],
  data() {
    return {
      list: [
        {
          imgSrc: "https://cdn.fyndsigns.com/1698145021145-rectangle------.png",
          title: "Men Henley Neck Full Sleeve Red Wine",
          size: ["S", "M", "L", "XL", "XXL"],
          price: 399,
          highPrice: 999,
        },
        {
          imgSrc: "https://cdn.fyndsigns.com/1698145109052-rectangle--.png",
          title: "Men Henley Neck Full Sleeve Red Wine",
          size: ["S", "M", "L", "XL", "XXL"],
          price: 399,
          highPrice: 999,
        },
        {
          imgSrc: "https://cdn.fyndsigns.com/1698145126463-rectangle--.png",
          title: "Men Henley Neck Full Sleeve Red Wine",
          size: ["S", "M", "L", "XL", "XXL"],
          price: 399,
          highPrice: 999,
        },
        {
          imgSrc: "https://cdn.fyndsigns.com/1698145145568-rectangle--.png",
          title: "Men Henley Neck Full Sleeve Red Wine",
          size: ["S", "M", "L", "XL", "XXL"],
          price: 399,
          highPrice: 999,
        },
        {
          imgSrc: "https://cdn.fyndsigns.com/1698145021145-rectangle------.png",
          title: "Men Henley Neck Full Sleeve Red Wine",
          size: ["S", "M", "L", "XL", "XXL"],
          price: 399,
          highPrice: 999,
        },
        {
          imgSrc: "https://cdn.fyndsigns.com/1698145109052-rectangle--.png",
          title: "Men Henley Neck Full Sleeve Red Wine",
          size: ["S", "M", "L", "XL", "XXL"],
          price: 399,
          highPrice: 999,
        },
        {
          imgSrc: "https://cdn.fyndsigns.com/1698145126463-rectangle--.png",
          title: "Men Henley Neck Full Sleeve Red Wine",
          size: ["S", "M", "L", "XL", "XXL"],
          price: 399,
          highPrice: 999,
        },
        {
          imgSrc: "https://cdn.fyndsigns.com/1698145145568-rectangle--.png",
          title: "Men Henley Neck Full Sleeve Red Wine",
          size: ["S", "M", "L", "XL", "XXL"],
          price: 399,
          highPrice: 999,
        },
        {
          imgSrc: "https://cdn.fyndsigns.com/1698145021145-rectangle------.png",
          title: "Men Henley Neck Full Sleeve Red Wine",
          size: ["S", "M", "L", "XL", "XXL"],
          price: 399,
          highPrice: 999,
        },
        {
          imgSrc: "https://cdn.fyndsigns.com/1698145109052-rectangle--.png",
          title: "Men Henley Neck Full Sleeve Red Wine",
          size: ["S", "M", "L", "XL", "XXL"],
          price: 399,
          highPrice: 999,
        },
        {
          imgSrc: "https://cdn.fyndsigns.com/1698145126463-rectangle--.png",
          title: "Men Henley Neck Full Sleeve Red Wine",
          size: ["S", "M", "L", "XL", "XXL"],
          price: 399,
          highPrice: 999,
        },
        {
          imgSrc: "https://cdn.fyndsigns.com/1698145145568-rectangle--.png",
          title: "Men Henley Neck Full Sleeve Red Wine",
          size: ["S", "M", "L", "XL", "XXL"],
          price: 399,
          highPrice: 999,
        },
        {
          imgSrc: "https://cdn.fyndsigns.com/1698145021145-rectangle------.png",
          title: "Men Henley Neck Full Sleeve Red Wine",
          size: ["S", "M", "L", "XL", "XXL"],
          price: 399,
          highPrice: 999,
        },
        {
          imgSrc: "https://cdn.fyndsigns.com/1698145109052-rectangle--.png",
          title: "Men Henley Neck Full Sleeve Red Wine",
          size: ["S", "M", "L", "XL", "XXL"],
          price: 399,
          highPrice: 999,
        },
        {
          imgSrc: "https://cdn.fyndsigns.com/1698145126463-rectangle--.png",
          title: "Men Henley Neck Full Sleeve Red Wine",
          size: ["S", "M", "L", "XL", "XXL"],
          price: 399,
          highPrice: 999,
        },
        {
          imgSrc: "https://cdn.fyndsigns.com/1698145145568-rectangle--.png",
          title: "Men Henley Neck Full Sleeve Red Wine",
          size: ["S", "M", "L", "XL", "XXL"],
          price: 399,
          highPrice: 999,
        },
      ],
    };
  },
  mounted() {
    // console.log(this.title);
    // console.log(screenY);
  },
};
</script>
<style lang="scss">
.list-body{
  display: grid;
  grid-template-columns: 15% 80%;
  gap: 30px;
  .sm-filter{
    display: none;
  }
  .trending{
    padding: 2%;
  }
}
</style>

<!-- https://cdn.fyndsigns.com/1698156726162-image--.png -->
<!-- https://cdn.fyndsigns.com/1698156694036-banner---.png -->
  