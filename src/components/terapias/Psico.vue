<template>
  <div class="reiki">
    <h1 class="animate__animated animate__flash">Psicoaromaterapia</h1>
    <img
      class="animate__animated animate__backInUp"
      :src="img"
      alt="Foto de Aromaterpia"
    />
    <v-card
      elevation="6"
      outlined
      max-width="374"
      shaped
      class="cards white--text animate__animated animate__fadeInRight"
      color="#593196"
    >
      <v-card-text class="white--text animate__animated animate__fadeIn">{{
        psico
      }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
import PsicoaromaterapiaImg from "../../assets/img/psicoaroma.jpeg";

export default {
  data() {
    return {
      img: PsicoaromaterapiaImg,
      psico: `É a área da Aromaterapia em que se utilizam os óleos essenciais para ajudar ou apoiar determinados estados mentais, emocionais e psicológicos.`,
    };
  },
};
</script>

<style lang="css">
.reiki {
  text-align: center;
}
.cards {
  text-align: center;
}
</style>