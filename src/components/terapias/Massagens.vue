<template>
  <div class="massagens">
    <h1 class="animate__animated animate__jello">Massagens</h1>
    <div class="btnParent animate__animated animate__pulse">
      <!-- Buttons -->
      <v-btn
        @click="
          (relaxanteShow = true),
            (suecaShow = false),
            (ayurvedaShow = false),
            (drenagemShow = false),
            (modeladoraShow = false),
            (lipoShow = false)
        "
        class="white--text mr-1 mb-1"
        color="#593196"
        elevation="5"
        >Relaxante</v-btn
      >

      <v-btn
        @click="
          (suecaShow = true),
            (relaxanteShow = false),
            (ayurvedaShow = false),
            (drenagemShow = false),
            (modeladoraShow = false),
            (lipoShow = false)
        "
        class="white--text mr-1 mb-1"
        color="#593196"
        elevation="5"
        >Sueca</v-btn
      >

      <v-btn
        @click="
          (drenagemShow = true),
            (suecaShow = false),
            (relaxanteShow = false),
            (ayurvedaShow = false),
            (modeladoraShow = false),
            (lipoShow = false)
        "
        class="white--text mr-1 mb-1"
        color="#593196"
        elevation="5"
        >Drenagem Linfática</v-btn
      >

      <v-btn
        @click="
          (ayurvedaShow = true),
            (drenagemShow = false),
            (suecaShow = false),
            (relaxanteShow = false),
            (modeladoraShow = false),
            (lipoShow = false)
        "
        class="white--text mr-1 mb-1"
        color="#593196"
        elevation="5"
        >Ayurveda</v-btn
      >

      <v-btn
        @click="
          (modeladoraShow = true),
            (ayurvedaShow = false),
            (drenagemShow = false),
            (suecaShow = false),
            (relaxanteShow = false),
            (lipoShow = false)
        "
        class="white--text mr-1 mb-1"
        color="#593196"
        elevation="5"
        >Modeladora</v-btn
      >
      <v-btn
        @click="
          (lipoShow = true),
            (modeladoraShow = false),
            (ayurvedaShow = false),
            (drenagemShow = false),
            (suecaShow = false),
            (relaxanteShow = false)
        "
        class="white--text mr-1 mb-1"
        color="#593196"
        elevation="5"
        >Lipomodelagem Vegana</v-btn
      >
    </div>
    <!-- FIM BUTTONS -->

    <img
      class="animate__animated animate__backInUp"
      :src="img"
      alt="Foto de Massagem"
    />

    <!-- MASSAGENS -->
    <div class="cards">
      <v-card
        elevation="6"
        outlined
        max-width="374"
        shaped
        class="white--text mr-1 mb-1 animate__animated animate__fadeInRight"
        color="#593196"
        v-show="relaxanteShow"
      >
        <v-card-title class="animate__animated animate__fadeInRight"
          >Massagem Relaxante</v-card-title
        >
        <v-card-text
          class="white--text mr-1 mb-1 animate__animated animate__fadeIn"
          >{{ relaxante }}</v-card-text
        >
      </v-card>

      <v-card
        elevation="6"
        outlined
        max-width="374"
        shaped
        class="white--text mr-1 mb-1 animate__animated animate__fadeInRight"
        color="#593196"
        v-show="suecaShow"
      >
        <v-card-title class="animate__animated animate__fadeInRight"
          >Sueca</v-card-title
        >
        <v-card-text
          class="white--text mr-1 mb-1 animate__animated animate__fadeIn"
          >{{ sueca }}</v-card-text
        >
      </v-card>

      <v-card
        elevation="6"
        outlined
        max-width="374"
        shaped
        class="white--text mr-1 mb-1 animate__animated animate__fadeInRight"
        color="#593196"
        v-show="drenagemShow"
      >
        <v-card-title class="animate__animated animate__fadeInRight"
          >Drenagem Linfática</v-card-title
        >
        <v-card-text
          class="white--text mr-1 mb-1 animate__animated animate__fadeIn"
          >{{ drenagem }}</v-card-text
        >
      </v-card>

      <v-card
        elevation="6"
        outlined
        max-width="374"
        shaped
        class="white--text mr-1 mb-1 animate__animated animate__fadeInRight"
        color="#593196"
        v-show="ayurvedaShow"
      >
        <v-card-title class="animate__animated animate__fadeInRight"
          >Ayurveda</v-card-title
        >
        <v-card-text
          class="white--text mr-1 mb-1 animate__animated animate__fadeIn"
          >{{ ayurveda }}</v-card-text
        >
      </v-card>

      <v-card
        elevation="6"
        outlined
        max-width="374"
        shaped
        class="white--text mr-1 mb-1 animate__animated animate__fadeInRight"
        color="#593196"
        v-show="modeladoraShow"
      >
        <v-card-title class="animate__animated animate__fadeInRight"
          >Modeladora</v-card-title
        >
        <v-card-text
          class="white--text mr-1 mb-1 animate__animated animate__fadeIn"
          >{{ modeladora }}</v-card-text
        >
      </v-card>

      <img class="animate__animated animate__backInUp" :src="img" alt="Foto de Reiki" />
    </div>
  </div>
</template>

<script>
import MassagemImg from "../../assets/img/massagem.jpeg";
export default {
  data() {
    return {
      img: MassagemImg,
      relaxanteShow: false,
      relaxante: `

      🌷 A Massagem Relaxante pode ser uma sessão de Sueca, Shiatsu, Abhyanga, dentre tantas técnicas.
      Na relaxante tradicional, utilizo principalmente as técnicas da MASSAGEM SUECA, que consiste em manobras de deslizamento, fricção, amassamento, etc. Conjuntamente, aplico técnicas de Aromaterapia, Shiatsu, Reflexologia, deslizamento de ventosas, Magnetoterapia, entre outras técnicas, a depender da necessidade de cada um, pois o atendimento é feito com uma visão holística, avaliando cada pessoa em todos os seus aspectos.`,
      ayurvedaShow: false,
      ayurveda: `🕉️ MAIS DO QUE UMA MASSAGEM!
      Ayurveda -> medicina indiana.
      Shila Abhyanga -> modalidade básica de todos os tratamentos ayurvédicos.
      Óleos vegetais+óleos essenciais (preparados de acordo com o Dosha em desequilíbrio) aquecidos são espalhados em abundância auxiliando na fluidez dos movimentos. As pedras aquecidas complementam as manobras deixando a musculatura e os pontos de dor mais receptivos ao toque e aos efeitos terapêuticos. Para a Ayurveda, o OBJETIVO PRINCIPAL da massagem é movimentar as toxinas de volta para o sistema digestivo para serem processadas e eliminadas. Ou seja, uma das suas principais funções é DETOX! (Além de todos os benefícios citados acima).
      E mais, OS CHAKRAS SÃO REEQUILIBRADOS COM OS ÓLEOS ESSENCIAIS utilizados em conjunto com as manobras específicas -> Atuam no corpo etéreo (situado entre o corpo astral e físico), além de penetrar nas moléculas e células que estão ligadas diretamente ao sistema nervoso.
      O corpo etéreo vibra eletroquímicamente e harmoniosamente com os Chakras, ajudando a liberar os acúmulos e desequilíbrios existentes nos centros de energia (Chakras) que se refletem nos corpos físico, psíquico e espiritual. Ou seja, SHILA ABHYANGA é uma massagem medicinal para equilíbrio físico, emocional e vibracional.`,
      suecaShow: false,
      sueca: `🌷 A massagem sueca é um estilo de massagem desenvolvido na Suécia por Pehr Henrik Ling, no século XIX. Ele pesquisou estilos de massagens antigas, como a dos romanos e dos chineses e estudou a relação tipo de manobra versus velocidade e intensidade da mesma e qual o efeito no organismo humano. A massagem no Ocidente, muito popular na Grécia e na Roma antiga, foi praticamente banida na Idade Média, devido a dogmas religiosos, que viam toda forma de atividade corporal, como algo pecaminoso. Esse fato não ocorreu no Oriente, por isso na época de Per Henrik Ling, os chineses ainda preservavam suas técnicas avançadas de terapias corporais, como o Anmá e o Tuiná.

      O principal benefício fisiológico da massagem sueca é a expulsão do ácido lático das fibras musculares. Muito útil para atletas e pessoas com dores musculares decorrentes de tensão.

      Seu estilo ficou conhecido em toda a Europa e estudantes de vários países aprenderam sua técnica e a disseminaram no Ocidente.

      No Brasil, a massagem sueca também ficou conhecida como "massagem clássica".`,
      drenagemShow: false,
      drenagem: `🌷 A drenagem linfática consiste em uma massagem com movimentos suaves, mantidas num ritmo lento, para evitar o rompimento dos vasos linfáticos e que tem como objetivo estimular e facilitar a passagem da linfa pelo sistema circulatório. 

      A linfa é um líquido que circula no corpo, limpando o sangue de impurezas e desempenhando o seu papel imunitário, juntamente com os anticorpos do sangue. Porém, ela pode se acumular em excesso nos tecidos, podendo, em alguns casos, causar inchaço e dor.

      Os principais benefícios da drenagem linfática são: combater o inchaço, combater a celulite, ajudar na recuperação de lesões, favorecer a cicatrização, Reduzir hematomas, melhorar a circulação sanguínea e linfática, oxigenar os tecidos, eliminar toxinas entre outros. `,
      modeladoraShow: false,
      modeladora: `🌷 Essa massagem atinge camadas profundas da pele através de movimentos vigorosos e firmes. Ela é aplicada sobre os tecidos moles do corpo, o que resulta na eliminação de toxinas pelos gânglios linfáticos, traz benefícios para a circulação, melhora o metabolismo, combate a celulite e auxilia na eliminação da gordura localizada. `,
      lipoShow: false,
      lipo: `🌷 Essa massagem utiliza óleo vegetal + óleos essenciais (protocolo especial/100% natural), suco Detox, chá e argila. Ela reduz a gordura localizada, combate a celulite, a retenção de líquidos (perda de até 1,5kg em uma sessão), melhora o funcionamento do intestino, promovendo um relaxamento geral.
      A sessão dura 1h30.`,
    };
  },
};
</script>

<style lang="css">
.massagens {
  text-align: center;
}

.btnParent {
  display: flex;
  margin: 0 auto;
  flex: 1 1 auto;
  max-width: 100%;
}

.cards {
  margin: 0 auto;
}
img {
  max-width: 70%;
  height: 15rem;
  margin: 0 auto;
  padding: 1rem;
}
@media (max-width: 520px) {
  p {
    max-width: 100%;
  }

  .btnParent {
    flex-direction: column;
    justify-items: center;
    align-items: stretch;
  }
}
</style>