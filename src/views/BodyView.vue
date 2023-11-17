<template>
  <main id="home">
    <banner-view :src="'https://cdn.fyndsigns.com/1698156726162-image--.png'" id="first-banner" />
    <div class="body-1">
      <section class="category">
        <div class="item">
          <a href="#" class="item-link"
            ><img
              class="item-img" loading="lazy" 
              alt="Vue logo"
              src="../assets/category/Group 244.png"
          /></a>
          <h3 class="item-title">Men’s T-Shirts</h3>
        </div>
        <div class="item">
          <a href="#" class="item-link"
            ><img
              class="item-img" loading="lazy" 
              alt="Vue logo"
              src="../assets/category/Group 245.png"
          /></a>
          <h3 class="item-title">Women’s Wear</h3>
        </div>
        <div class="item">
          <a href="#" class="item-link"
            ><img
              class="item-img" loading="lazy" 
              alt="Vue logo"
              src="../assets/category/Group 246.png"
          /></a>
          <h3 class="item-title">Winter Collections</h3>
        </div>
        <div class="item">
          <a href="#" class="item-link"
            ><img
              class="item-img" loading="lazy" 
              alt="Vue logo"
              src="../assets/category/Group 248.png"
          /></a>
          <h3 class="item-title">Hooded T-Shirts</h3>
        </div>
        <div class="item">
          <a href="#" class="item-link"
            ><img
              class="item-img" loading="lazy" 
              alt="Vue logo"
              src="../assets/category/Group 249.png"
          /></a>
          <h3 class="item-title">Polo Neck T-Shirts</h3>
        </div>
        <div class="item">
          <a href="#" class="item-link"
            ><img
              class="item-img" loading="lazy" 
              alt="Vue logo"
              src="../assets/category/Group 249.png"
          /></a>
          <h3 class="item-title">Full Sleeves T-Shirts</h3>
        </div>
      </section>
      <section class="category-banner">
        <main class="top" id="banner-top">
          <div class="item">
            <img
              class="item-img" loading="lazy" 
              alt="Vue logo"
              src="../assets/category/image 2.png"
            />
          </div>
          <div class="item">
            <img
              class="item-img" loading="lazy" 
              alt="Vue logo"
              src="../assets/category/image 3.png"
            />
          </div>
        </main>
        <main class="bottom" id="banner-bottom">
          <div class="item">
            <a href="#" class="item-link"
              ><img
                class="item-img"
                alt="Vue logo"
                src="../assets/category/image 4.png"
            /></a>
          </div>
          <div class="item">
            <a href="#" class="item-link"
              ><img
                class="item-img"
                alt="Vue logo"
                src="../assets/category/image 6.png"
            /></a>
          </div>
          <div class="item">
            <a href="#" class="item-link"
              ><img
                class="item-img"
                alt="Vue logo"
                src="../assets/category/image 5.png"
            /></a>
          </div>
        </main>
      </section>
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
      <section class="trending">
        <header class="trending-header">
          <span></span>
          <h2>Featured Products</h2>
          <span></span>
        </header>
        <div class="product-list">
          <card-view
            v-for="(item, index) in list.slice(0, 4)"
            :key="index"
            :src="item.imgSrc"
            :size="item.size"
            :title="item.title"
          />
        </div>
        <div class="trending-footer">
          <button><router-link to="/products">VIEW ALL</router-link></button>
        </div>
      </section>
    </div>
    <banner-view
      :src="'https://cdn.fyndsigns.com/1698156694036-banner---.png'"
    />
    <div class="body-1">
      <section class="trending">
        <header class="trending-header">
          <span></span>
          <h2>New Products</h2>
          <span></span>
        </header>
        <div class="product-list">
          <card-view
            v-for="(item, index) in list.slice(0, 4)"
            :key="index"
            :src="item.imgSrc"
            :size="item.size"
            :title="item.title"
          />
        </div>
        <div class="trending-footer">
          <button>VIEW ALL</button>
        </div>
      </section>
      <section class="trending">
        <header class="trending-header">
          <span></span>
          <h2>Best Selling Products</h2>
          <span></span>
        </header>
        <div class="product-list">
          <card-view
            v-for="(item, index) in list.slice(0, 4)"
            :key="index"
            :src="item.imgSrc"
            :size="item.size"
            :title="item.title"
          />
        </div>
        <div class="trending-footer">
          <button>VIEW ALL</button>
        </div>
      </section>
      <section class="trending">
        <div class="category-list">
          <category-card
            v-for="(item, index) in listCategory"
            :key="index"
            :src="item.src"
            :title="item.title"
          />
        </div>
      </section>
    </div>
    <banner-view
      :src="'https://cdn.fyndsigns.com/1698158328191-banner---.png'"
    />
    <div class="body-1">
      <section class="offer-layout">
        <div class="offer-item">
          <div class="offer-icon"><img  loading="lazy" src="../assets/diamond 1.png" /></div>
          <h3 class="offer-head">Hurry Up!</h3>
          <p class="offer-head1">85% OFF</p>
          <p class="offer-head2">Sale</p>
          <button>SHOP NOW</button>
        </div>
        <div class="offer-item">
          <div class="offer-icon"><img  loading="lazy" src="../assets/discount 1.png" /></div>
          <h3 class="offer-head">Hurry Up!</h3>
          <p class="offer-head1">85% OFF</p>
          <p class="offer-head2">Sale</p>
          <button class="discount-btn">SHOP NOW</button>
        </div>
      </section>
    </div>
    <main class="service">
      <section class="service-child">
        <div class="service-container">
          <div class="service-item">
            <img  loading="lazy" src="../assets/service/Group 199.png" />
            <!-- <h2>7 Days Return</h2> -->
          </div>
          <div class="service-item">
            <img  loading="lazy" src="../assets/service/Group 200.png" />
            <!-- <h2>Quality Products</h2> -->
          </div>
          <div class="service-item">
            <img  loading="lazy" src="../assets/service/Group 201.png" />
            <!-- <h2>Safe Payment</h2> -->
          </div>
          <div class="service-item">
            <img  loading="lazy" src="../assets/service/Group 202.png" />
            <!-- <h2>24x7 Helpline</h2> -->
          </div>
        </div>
      </section>
    </main>
    <!-- <image-item v-lazy-load :src="'https://cdn.fyndsigns.com/1698158328191-banner---.png'" :alt="'test-lazy'" :placeholder="'lazy'"/> -->
    <div class="body-1">
      <section class="subscribe-layout">
        <div class="title">
          <p>Subscribe to get updates on exciting offers</p>
          <p>& deals</p>
        </div>
        <div class="input-layout">
          <input type="text" v-model="email" placeholder="Enter your Email" />
          <button>Subscribe</button>
        </div>
      </section>
    </div>
  </main>
</template>
  
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CardView from "@/components/CardView.vue"; // @ is an alias to /src
import BannerView from "@/views/BannerView.vue";
import CategoryCard from "@/components/CategoryCard.vue"; // @ is an alias to /src
import ImageItem from "@/components/ImageItem.vue"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger);

@Component({
  name: "BodyView",
  components: {
    CardView,
    CategoryCard,
    BannerView,
    ImageItem
  },
})
export default class HomeView extends Vue {
  public email = "";
  public listCategory: any = [
    {
      title: "Streetwear Collections",
      src: "https://cdn.fyndsigns.com/1698157875630-group---.png",
    },
    {
      title: "Striped T-Shirts",
      src: "https://cdn.fyndsigns.com/1698157860488-group---.png",
    },
    {
      title: "Round Neck T-Shirts",
      src: "https://cdn.fyndsigns.com/1698157838756-group---.png",
    },
    {
      title: "Printed T-Shirts",
      src: "https://cdn.fyndsigns.com/1698157823288-group---.png",
    },
    {
      title: "Oversized T-Shirts",
      src: "https://cdn.fyndsigns.com/1698157785835-group---.png",
    },
    {
      title: "Half Sleeves T-Shirts",
      src: "https://cdn.fyndsigns.com/1698157808966-group---.png",
    },
  ];
  public list: any = [
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
  ];

  mounted(){
    let tl1= gsap.timeline();

    tl1.from("#first-banner",{
      scrollTrigger: "#home", 
      y: 900,
      z:10
    })
    tl1.from(".category",{
      scrollTrigger: "#body-1",
      y: -500,
    })
    tl1.from("#banner-top",{
      scrollTrigger: ".category-banner", 
      x: -900,
    }
    )
    tl1.from("#banner-bottom",{
      scrollTrigger: ".category-banner", 
      y: 900,
    })
  }
}
</script>
  <style lang="scss">
.body-1 {
  width: 100%;
  padding: 5% 10%;
  overflow: hidden;
  .category {
    margin: 2.5%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10px;
    gap: 10px;
    height: 200px;
    .item {
      padding: 5px;
      .item-img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
      .item-title {
      }
    }
  }
  .category-banner {
    padding: 5px;
    margin: 5% 0px;
    .top {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
      gap: 10px;
      .item {
        padding: 5px;
        .item-img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }
      }
    }
    .bottom {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
      gap: 10px;
      .item {
        padding: 5px;
        .item-img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }
      }
    }
  }
  .offer-layout {
    padding: 2% 10%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    .offer-item:first-child {
      background: #cccea7;
    }
    .offer-item:nth-child(2) {
      background: #d6bebe;
    }
    .offer-item {
      padding: 5% 10%;
      color: #1c1c1c;
      .offer-icon {
        padding: 2% 30%;
        img {
          width: 100%;
          object-fit: cover;
        }
      }
      .offer-head {
        padding: 10%;
        font-size: 30px;
      }
      .offer-head1 {
        padding: 2%;
        font-size: 60px;
      }
      .offer-head2 {
        padding: 2%;
        font-size: 30px;
      }
      button {
        background: #cccea7;
        padding: 15px 50px;
        border: 1px solid white;
        font-size: 20px;
        margin: 5px 10px;
      }
      .discount-btn {
        background: #d6bebe;
      }
    }
  }
}

.trending {
  margin: 5% 0px;
  .category-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    grid-gap: 20px;
  }
  .trending-header {
    margin-bottom: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    h2 {
      margin: 20px;
    }
    span {
      display: block;
      height: 1px;
      width: 100%;
      background-color: #ffc7d1;
      fill: #ffc7d1;
    }
  }
  .product-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    grid-gap: 20px;
  }
  .trending-footer {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-top: 10%;
    // .button-route {
    //   padding: 20px 50px;
    //   background-color: #770015;
    //   color: white;
    //   text-align: center;
    //   font-weight: 300;
    //   border: 0px;
    //   word-spacing: 5px;
    // }
    button {
      padding: 20px 50px;
      background-color: #770015;
      color: white;
      text-align: center;
      font-weight: 300;
      border: 0px;
      word-spacing: 5px;
      a{
        text-decoration: none;
        color: white;
      }
    }
  }
}

.service {
  .service-child {
    background: #f5f4f2;
    padding: 2% 10%;
    position: relative;
    .service-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);

      .service-item {
        position: relative;
        padding: 5%;
        img {
          object-fit: cover;
        }
        h2 {
          font-size: 20px;
        }
      }
      .service-item:after {
        content: "";
        position: absolute;
        height: 70%;
        width: 1px;
        top: 15%;
        right: 0%;
        background-color: #ffc7d1;
      }
    }
    .service-container::before {
      position: absolute;
      content: "";
      height: 200px;
      width: 200px;
      border-radius: 100%;
      bottom: -30%;
      left: -5%;
      background-color: #770015;
    }
    .service-container::after {
      position: absolute;
      content: "";
      height: 200px;
      width: 200px;
      border-radius: 100%;
      top: -30%;
      right: -5%;
      background-color: #770015;
    }
  }
}

.subscribe-layout {
  position: relative;
  padding: 10% 20%;
  background-color: #770015;
  color: white;
  .title {
    font-size: 36px;
    padding: 20px;
  }
  .input-layout {
    display: grid;
    grid-template-columns: 70% 30%;
    input {
      line-height: 40px;
      padding: 10px;
      background-color: rgba($color: #fff, $alpha: 0.3);
      color: white;
      border: none;
    }
    ::-ms-input-placeholder {
      /* Edge 12-18 */
      color: white;
    }

    ::placeholder {
      color: white;
    }
    button {
      font-size: 25px;
      background-color: #fff;
      border: none;
    }
  }
}
.subscribe-layout:before {
  position: absolute;
  content: "";
  background-color: rgba($color: #fff, $alpha: 0.3);
  height: 400px;
  width: 400px;
  top: 0%;
  left: -10%;
  border-radius: 30% 50% 60%;
}
.subscribe-layout:after {
  position: absolute;
  content: "";
  background-color: rgba($color: #fff, $alpha: 0.3);
  height: 400px;
  width: 400px;
  top: 0%;
  right: -12%;
  border-radius: 70% 60% 60% 60%;
}
</style>
  