<template>
  <section class="detail-page">
    <div class="detail-container box">
      <div class="img-list" id="img-list">
        <div
          class="img-list-item"
          v-for="(img, index) in data.imgSrc"
          :key="index"
          @click="currentSrc = img"
        >
          <img :src="img" />
        </div>
      </div>

      <div class="img-view" id="img-view" @mousemove="getCursor">
        <div class="expand-view" id="expand-view">
          <img :src="currentSrc" id="expand-view-img" />
        </div>
        <img :src="currentSrc" />
      </div>

      <div class="detail">
        <div class="title-container">
          <div class="title">
            <h3>{{ data.title }}</h3>
            <p>asd alsdnasd asljdnad</p>
          </div>
          <div class="wishlist">
            <a><i class="fa-solid fa-heart"></i></a>
          </div>
        </div>

        <p class="amount">&#8377;399</p>
        <div class="size-container" id="pin-windmill-svg">
          <div style="display: flex; justify-content: space-around">
            <h4>Size Chart</h4>
            <h4>Size Guide</h4>
          </div>
          <div class="size-box">
            <p class="size" v-for="(size, index) in data.size" :key="index">
              {{ size }}
            </p>
          </div>
          <button>Add to Cart</button>
        </div>
        <div class="detail-desc">
          <h4>Detail</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            natus excepturi ipsum ratione incidunt fugiat error aliquam illum
            tempora sit sed placeat quibusdam exercitationem officia, maiores,
            mollitia nostrum nisi accusantium provident omnis suscipit, officiis
            molestias nihil consequuntur? Obcaecati mollitia deserunt, id, natus
            vitae facere laboriosam asperiores illum ipsum eveniet dolores.
            Maiores corporis at similique libero harum exercitationem commodi
            accusantium odit! Nihil aspernatur voluptatibus commodi non, dicta
            explicabo a quibusdam totam.
          </p>
        </div>
      </div>
    </div>
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
        <button><router-link to="/products">VIEW ALL</router-link></button>
      </div>
    </section>
    <div class="body-1">
      <section class="offer-layout">
        <div class="offer-item" id="offer-item1">
          <div class="offer-icon">
            <img loading="lazy" src="../assets/diamond 1.png" />
          </div>
          <h3 class="offer-head">Hurry Up!</h3>
          <p class="offer-head1">85% OFF</p>
          <p class="offer-head2">Sale</p>
          <button>SHOP NOW</button>
        </div>
        <div class="offer-item" id="offer-item2">
          <div class="offer-icon">
            <img loading="lazy" src="../assets/discount 1.png" />
          </div>
          <h3 class="offer-head">Hurry Up!</h3>
          <p class="offer-head1">85% OFF</p>
          <p class="offer-head2">Sale</p>
          <button class="discount-btn">SHOP NOW</button>
        </div>
      </section>
    </div>
  </section>
</template>
<script>
import CardView from "@/components/CardView.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  data() {
    return {
      data: {
        imgSrc: [
          "https://cdn.fyndsigns.com/1698145021145-rectangle------.png",
          "https://cdn.fyndsigns.com/1698145109052-rectangle--.png",
          "https://cdn.fyndsigns.com/1698145126463-rectangle--.png",
          "https://cdn.fyndsigns.com/1698145145568-rectangle--.png",
        ],
        title: "Men Henley Neck Full Sleeve Red Wine",
        size: ["S", "M", "L", "XL", "XXL"],
        price: 399,
        highPrice: 999,
      },
      currentSrc: "https://cdn.fyndsigns.com/1698145021145-rectangle------.png",
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
      ],
    };
  },
  components: {
    CardView,
  },
  methods: {
    getCursor(event) {
      let x = event.clientX;
      let y = event.clientY;
      const infoElement = document.getElementById("expand-view");
      infoElement.style.top = y / 5 + "px";
      infoElement.style.left = x / 5 + "px";

      // const imgPosition = document.getElementById("expand-view-img");
      // imgPosition.scrollTo({
      //   top: y + "px",
      //   left:  x + "px",
      //   behavior: "smooth",
      // });
    },
  },
  mounted() {
    gsap.from("#img-list", {
      scrollTrigger: ".detail-page",
      x: -900,
      duration: 1,
      start: "50% 50%",
    });

    gsap.from("#offer-item1", {
      scrollTrigger: ".body-1",
      x: -900,
      duration: 1,
    });
    gsap.from("#offer-item2", {
      scrollTrigger: ".body-1",
      x: 900,
      duration: 1,
    });
  },
};
</script>
<style scoped lang="scss">
h3,
h4 {
  font-family: "Montserrat", sans-serif;
}
p {
  font-family: "Montserrat", sans-serif;
}
.detail-page {
  width: 90%;
  padding: 1vw;
  margin: auto;
  .detail-container {
    display: grid;
    grid-template-columns: 10% 45% 45%;
    min-height: 700px;
    .img-list {
      width: 100%;
      .img-list-item {
        width: 90%;
        img {
          width: inherit;
          cursor: pointer;
        }
      }
    }
    .img-view {
      padding: 2%;
      text-align: center;
      position: relative;
      .expand-view {
        display: none;
        position: absolute;
        height: 0px;
        width: 0px;
        transition: all ease 200ms;
      }
    }
    .img-view:hover .expand-view {
      display: block;
      position: absolute;
      height: 200px;
      width: 200px;
      overflow: hidden;
      img {
        scale: (2.5);
      }
    }
    .detail {
      padding: 5vw;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      .title-container {
        display: flex;
        flex-direction: row;
        .wishlist {
          width: 30%;
          display: flex;
          justify-content: center;
          align-content: center;
          align-items: center;
        }
        .title {
          width: 70%;
          text-align: left;
          word-spacing: 2px;
          h3 {
            font-family: "Playfair Display", serif;
          }
          p {
            font-family: "Montserrat", sans-serif;
          }
        }
      }

      .amount {
        text-align: left;
        font-weight: 600;
        margin: 20px 5px;
      }
      .size-container {
        h4 {
          font-size: 10px;
        }
        button {
          width: 50%;
          margin: auto;
          margin-top: 10px;
          color: white;
          background-color: black;
          line-height: 40px;
          border: none;
        }
      }
      .detail-desc {
        margin-top: 40px;
        text-align: left;
        h4 {
          font-size: 10px;
        }
        p {
          font-size: 14px;
        }
      }
      .size-box {
        h4 {
          font-size: 12px;
          text-align: left;
          text-transform: capitalize;
          text-decoration: underline;
        }
        width: 50%;
        margin: auto;
        margin-top: 10px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 10px;
        text-align: center;
        p {
          color: white;
          background-color: rgb(126, 126, 126);
          line-height: 30px;
        }
      }
    }
  }
}
.container {
  max-width: 800px;
  margin: 20px auto;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>