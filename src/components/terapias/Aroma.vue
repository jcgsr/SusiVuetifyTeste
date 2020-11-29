<template>
  <div class="reiki">
    <h1 class="animate__animated animate__flash">Aromaterapia</h1>
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
        aroma
      }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
import AromaterapiaImg from "../../assets/img/aromaterapia.jpeg";

export default {
  data() {
    return {
      titulo: "Reiki",
      img: AromaterapiaImg,
      aroma: `É uma técnica natural que utiliza o aroma e as partículas liberadas por diferentes óleos essenciais para estimular diferentes partes do cérebro. Com isso, essa terapia alivia os sintomas de ansiedade, insônia, depressão, asma ou resfriado; promove o bem-estar e fortalecer as defesas do corpo.`,
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