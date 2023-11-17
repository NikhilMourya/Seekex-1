<template>
  <section class="footer">
    <div class="body-1">
      <div class="grid">
        <div class="grid-item">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit id cum
            repellat obcaecati tempora animi odio quis enim, unde iure ratione
            saepe molestias impedit doloribus adipisci necessitatibus deleniti
            quisquam? Voluptatem unde nobis praesentium porro velit ex? Quidem
            aliquam quae.
          </p>
          <ul class="social">
            <li><i class="fa-brands fa-instagram fa-1x"></i></li>
            <li><i class="fa-brands fa-facebook fa-1x"></i></li>
            <li><i class="fa-brands fa-twitter fa-1x"></i></li>
            <li><i class="fa-brands fa-linkedin fa-1x"></i></li>
            <li><i class="fa-brands fa-pinterest fa-1x"></i></li>
          </ul>
        </div>
        <div class="grid-item">
          <h2>ONLINE SHOPPING</h2>
          <ul>
            <li>Mens Tshirts</li>
            <li>Mens Tshirts</li>
            <li>Mens Tshirts</li>
            <li>Mens Tshirts</li>
            <li>Mens Tshirts</li>
          </ul>
        </div>
        <div class="grid-item">
          <h2>CUSTOMER POLICIES</h2>
          <ul>
            <li>Mens Tshirts</li>
            <li>Mens Tshirts</li>
            <li>Mens Tshirts</li>
            <li>Mens Tshirts</li>
            <li>Mens Tshirts</li>
            <li></li>
          </ul>
        </div>
        <div class="grid-item">
          <h2>STORE INFORMATION</h2>
          <ul class="store-info">
            <li><i class="fa-solid fa-location-dot fa-2x"></i><span>Lorem Ipsum is simply dummy text of the.</span> </li>
            <li><i class="fa-solid fa-phone fa-2x"></i><span>Call Us: 1234567890</span> </li>
            <li><i class="fa-solid fa-envelope fa-2x"></i><span>Email Us: info@yourmail.com</span> </li>
          </ul>
        </div>
        
      </div>
    </div>
    <div class="copyright">
      <h2>©2022-23 Powered By dummy team</h2>
    </div>
  </section>
</template>
  
  <script lang="ts">
import { Component, Vue } from "vue-property-decorator";
//   import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  name: "FooterView",
  components: {
    //   HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
  <style scoped lang="scss">
  h2,p,li{
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
    }
  .copyright{
    width: 100%;
    background: #20050A;
    color: #fff;
    h2{
      padding: 20px;
      font-size: 16px;
      font-weight: 400;
    }
  }
  .body-1 {
  width: 100%;
  padding: 5% 10%;
  overflow: hidden;
  .grid{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 20px;
    text-align: left;
    h2,p,li{
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
    }
    .grid-item{
      padding: 5%;
      .social{
        
        li{
          float: left;
          margin: 10px;
          i{
            font-size: 40px;
          }
        }
      }
      .store-info{
        li{
          display: inline-flex;
          flex-direction: row;
          justify-content: center;
          // align-content: center;
          // align-items: center;
          span{
            padding: 0px 10px;
          }
        }
      }
      h2{
        margin-bottom: 20px;
      }
      ul{
        list-style: none;
        li{
          padding: 10px 0px;
        }
      }
    }
    h2{
      color: #770015;
      font-family: 'Playfair Display', serif;
    }
  }
}

</style>
  