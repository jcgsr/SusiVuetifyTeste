<template>
  <div class="reiki">
    <h1 class="animate__animated animate__flash">Shiatsu</h1>
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
        shiatsu
      }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
import ShiatsuImg from "../../assets/img/shiatsu.jpeg";
export default {
  data() {
    return {
      img: ShiatsuImg,
      shiatsu: `É uma técnica de massagem terapêutica que visa o equilíbrio entre corpo e mente, através da pressão dos dedos ou palmas das mãos realizada em determinadas áreas do corpo. Com isso, ela aumenta a energia do paciente e a consciência sobre si mesmo, regulando e melhorando o funcionamento dos órgãos, além de estimular uma maior imunidade contra doenças. O Shiatsu trabalha mais a prevenção do que a cura de enfermidades.`,
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