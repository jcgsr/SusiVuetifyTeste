<template>
  <div class="reiki">
    <h1 class="animate__animated animate__flash">Magnetoaterapia</h1>
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
        magneto
      }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
import MagnetoImg from "../../assets/img/magneto.jpeg";
export default {
  data() {
    return {
      img: MagnetoImg,
      magneto: `Essa técnica natural forma um campo eletromagnético através de bobinas, imãs ou corrente elétrica. Não utiliza nenhum medicamento em conjunto, é utilizada para diversas patologias, não causa nenhum tipo de desconforto, não possui efeitos adversos e não é invasivo. O campo magnético, ao ser aplicado no corpo, promove ou reestabelece algumas funções de determinadas células, tais como o reequilíbrio das funções bioquímicas das células, o aumento de potencial elétrico das células e da permeação da membrana celular, a repolarização da membrana celular e a movimentação de líquidos no corpo.
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