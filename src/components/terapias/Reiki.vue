<template>
  <div class="reiki">
    <h1 class="animate__animated animate__flash">Reiki</h1>
    <img
      class="animate__animated animate__backInUp"
      :src="img"
      alt="Foto de Reiki"
    />
    <v-card
      elevation="6"
      outlined
      max-width="374"
      shaped
      class="cards white--text animate__animated animate__fadeInRight"
      color="#593196"
    >
      <v-card-text
        class="white--text animate__animated animate__fadeIn"
        >{{ reiki }}</v-card-text
      >
    </v-card>
  </div>
</template>

<script>
import ReikiImg from "../../assets/img/reiki.jpeg";

export default {
  data() {
    return {
      titulo: "Reiki",
      img: ReikiImg,
      reiki: `É uma técnica de canalização da energia universal, repassada através do toque e imposição das mãos. O nome Reiki significa Energia Vital (Ki), direcionada e mantida pela Sabedoria Universal (Rei). O objetivo dessa prática é restabelecer, por meio de limpeza, desbloqueio e ativação de seus chakras e meridianos, o equilíbrio energético vital “Ki” da pessoa que recebe o tratamento, harmonizando-a e equilibrando-a energeticamente para ativar o sistema de autoequilíbrio e restaurar a saúde.`,
    };
  },
};
</script>

<style lang="css">
.reiki {
  text-align: center;
}
.cards {
  text-align: center
}
</style>