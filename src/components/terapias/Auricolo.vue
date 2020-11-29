<template>
  <div class="reiki">
    <h1 class="animate__animated animate__flash">Auricoloterapia</h1>
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
        auricolo
      }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
import AuricoloImg from "../../assets/img/auricolo.jpeg";
export default {
  data() {
    return {
      img: AuricoloImg,
      auricolo: `É a utilização de pontos nas orelhas para tratamento de diversos sinais e sintomas comuns em diferentes patologias, atuando no âmbito físico, mental e emocional do paciente. Trata-se de um microssistema da acupuntura e esses pontos podem ser estimulados por agulhas, sementes de mostarda, cristais e moxa entre outros. A Auriculoterapia usa a orelha como um pequeno mapa para todo o corpo. Suas centenas de pontos de acupuntura correspondem a praticamente todos os órgãos, hormônios e sistemas.
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