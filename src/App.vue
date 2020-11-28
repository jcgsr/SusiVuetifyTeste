<template>
  <v-app>
    <Navbar />
    <v-main>
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__zoomIn"
        leave-active-class="animate__animated animate__zoomOut"
      >
        <router-view @authenticated="setAuthenticated"></router-view>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
/* @import url("https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Quattrocento:wght@400;700&display=swap"); */
*,
html,
body {
  /* box-sizing: border-box;
  text-align: center;
  margin: 0 auto; */
  font-size: 1.1rem;
  color: aliceblue;
  background-color: blueviolet;
  display: flex;
  flex-direction: column;
}
</style>
