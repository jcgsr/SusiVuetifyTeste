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
    <p>{{ currentDate }}</p> 
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  data: () => ({
    currentDate: "Data de hoje...",
  }),

  components: {
    Navbar,
    Footer,
  },
  methods: {
    dataAtual: function () {
      let hoje = new Date();
      this.currentDate = hoje.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    },
  },
  mounted() {
    this.dataAtual();
  },
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
p {
  text-align: center;
  padding: 2rem;
  margin: 0;
}
</style>
