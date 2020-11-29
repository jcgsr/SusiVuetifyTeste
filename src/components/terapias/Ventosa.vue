<template>
  <div class="reiki">
    <h1 class="animate__animated animate__flash">Ventosaterapia</h1>
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
        ventosa
      }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
import VentosaImg from "../../assets/img/ventosa.jpeg";
export default {
  data() {
    return {
      img: VentosaImg,
      ventosa: `É um tratamento com copos que produzem vácuo quando contraídos na pele promovendo sua sucção. Desta forma, os tecidos musculares são liberados e a circulação sanguínea melhorada. A ventosa funciona quando os tecidos são liberados pelo vácuo, assim o sangue passa a ser mais oxigenado e os tecidos são nutridos pelo O2, aliviando a tensão muscular, a fadiga e as dores no paciente.
`,
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