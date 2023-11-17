<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <div class="cursor"></div>
    <header-view />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <footer-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderView from "@/views/HeaderView.vue"; // @ is an alias to /src
import FooterView from "@/views/FooterView.vue";

@Component({
  components: {
    HeaderView,
    FooterView,
  },
})
export default class HomeView extends Vue {
  mounted() {
    var cursor: HTMLDivElement | any = document.querySelector(".cursor");
    document.addEventListener("mousemove", function (dets) {
      cursor.style.left = dets.x + 5 + "px";
      cursor.style.top = dets.y + 5 + "px";
    });
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  cursor: none;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.cursor {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  position: fixed;
  cursor: pointer;
  background-color: #edbfff;
  z-index: 999;
  mix-blend-mode: difference;
  transition: background-image ease 0.4s;
  background-position: center;
  background-size: cover;
}
</style>
