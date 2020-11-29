<template>
  <div class="home">
    <h1 class="animate__animated animate__pulse">{{ titulo }}</h1>
    <h2 class="animate__animated animate__pulse">{{ msg }}</h2>
    <img class="animate__animated animate__backInUp mt-4" :src="susi_img" alt="Foto
    de Susi" />
  </div>
</template>

<script>
import SusiImg from "../assets/img/susi.jpg";
export default {
  data() {
    return {
      titulo: "Susi Pessôa",
      msg: "Terapeuta Integrativa",
      susi_img: SusiImg
    };
  },
};
</script>

<style scoped>
.home {
  margin: 0 auto;
  text-align: center;
}
.home img {
    border-style: none;
    width: 30%;
    height: 50%;
    text-align: center;
    margin: 0 auto;
}

@media (max-width: 520px) {  
  .home img {
    width: 70%;
  }  
}
</style>

