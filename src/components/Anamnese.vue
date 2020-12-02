<template>
  <v-form class="anamnese">
    <h1 class="animate__animated animate__fadeInUp">{{ titulo }}</h1>
    <h2 class="mt-4">Bem-vindo(a), {{ user.data.displayName }}!</h2>
    <v-container>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
          dark
          label="Nome"
          id="nome"
          v-model="anamnese.nome"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-text-field
          dark
          label="Idade"
          id="idade"
          type="number"
          v-model="anamnese.idade"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-text-field
          dark
          label="Endereço"
          id="endereco"
          v-model="anamnese.endereco"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-text-field
          dark
          label="Profissão"
          id="profissao"
          v-model="anamnese.profissao"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
          dark
          label="Telefone"
          id="telefone"
          type="number"
          v-model="anamnese.telefone"
        ></v-text-field>
      </v-col>

      <h3>
        Para um atendimento seguro e mais eficaz, preciso saber algumas questões
        de saúde.
      </h3>
      <div class="checkboxes">
        <p>1. Alergias?</p>
        <v-radio-group v-model="anamnese.alergias" dark>
          <v-radio label="Sim" value="sim"></v-radio>
          <v-radio label="Não" value="não"></v-radio>
        </v-radio-group>

        <p>2. Hipertensão?</p>
        <v-radio-group v-model="anamnese.hipertensao" dark>
          <v-radio label="Sim" value="sim"></v-radio>
          <v-radio label="Não" value="não"></v-radio>
        </v-radio-group>

        <p>3. Diabetes?</p>
        <v-radio-group v-model="anamnese.diabetes" dark>
          <v-radio label="Sim" value="sim"></v-radio>
          <v-radio label="Não" value="não"></v-radio>
        </v-radio-group>

        <p>4. Marcapasso?</p>
        <v-radio-group v-model="anamnese.marcapasso" dark>
          <v-radio label="Sim" value="sim"></v-radio>
          <v-radio label="Não" value="não"></v-radio>
        </v-radio-group>

        <p>5. Pinos ou placas no corpo?</p>
        <v-radio-group v-model="anamnese.pinos_placas" dark>
          <v-radio label="Sim" value="sim"></v-radio>
          <v-radio label="Não" value="não"></v-radio>
        </v-radio-group>

        <p>6. Hérnia?</p>
        <v-radio-group v-model="anamnese.hernia" dark>
          <v-radio label="Sim" value="sim"></v-radio>
          <v-radio label="Não" value="não"></v-radio>
        </v-radio-group>

        <p>7. Trombose?</p>
        <v-radio-group v-model="anamnese.trombose" dark>
          <v-radio label="Sim" value="sim"></v-radio>
          <v-radio label="Não" value="não"></v-radio>
        </v-radio-group>

        <p>8. Câncer?</p>
        <v-radio-group v-model="anamnese.cancer" dark>
          <v-radio label="Sim" value="sim"></v-radio>
          <v-radio label="Não" value="não"></v-radio>
        </v-radio-group>

        <p>9. HIV?</p>
        <v-radio-group v-model="anamnese.hiv" dark>
          <v-radio label="Sim" value="sim"></v-radio>
          <v-radio label="Não" value="não"></v-radio>
        </v-radio-group>

        <p>10. Gravidez?</p>
        <v-radio-group v-model="anamnese.gravidez" dark>
          <v-radio label="Sim" value="sim"></v-radio>
          <v-radio label="Não" value="não"></v-radio>
        </v-radio-group>

        <v-card flat color="transparent" dark>
          <v-subheader>Quantos meses</v-subheader>

          <v-card-text>
            <v-row>
              <v-col class="pr-4">
                <v-slider
                  v-model="anamnese.meses"
                  class="align-center"
                  :max="max"
                  :min="min"
                  hide-details
                  style="width: 300px"
                >
                  <template v-slot:append>
                    <v-text-field
                      v-model="anamnese.meses"
                      class="mt-0 pt-0"
                      hide-details
                      single-line
                      type="number"
                      style="width: 25px"
                    ></v-text-field>
                  </template>
                </v-slider>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <p>11. Gripe ou resfriado?</p>
        <v-radio-group v-model="anamnese.gripe_resfriado" dark>
          <v-radio label="Sim" value="sim"></v-radio>
          <v-radio label="Não" value="não"></v-radio>
        </v-radio-group>

        <p>12. Depressão?</p>
        <v-radio-group v-model="anamnese.depressao" dark>
          <v-radio label="Sim" value="sim"></v-radio>
          <v-radio label="Não" value="não"></v-radio>
        </v-radio-group>

        <p>13. Ansiedade?</p>
        <v-radio-group v-model="anamnese.ansiedade" dark>
          <v-radio label="Sim" value="sim"></v-radio>
          <v-radio label="Não" value="não"></v-radio>
        </v-radio-group>

        <p>14. Dores?</p>
        <v-radio-group v-model="anamnese.dores" dark>
          <v-radio label="Sim" value="sim"></v-radio>
          <v-radio label="Não" value="não"></v-radio>
        </v-radio-group>
        <v-subheader dark>Local do corpo</v-subheader>
        <v-text-field dark v-model="anamnese.local_corpo"></v-text-field>

        <p>15. Algum outra questão de saúde relevante para considerar?</p>
        <v-radio-group v-model="anamnese.outra_questao_saude" dark>
          <v-radio label="Sim" value="sim"></v-radio>
          <v-radio label="Não" value="não"></v-radio>
        </v-radio-group>
        <v-text-field dark v-model="anamnese.qual_questao_saude"></v-text-field>
        <h3><strong>OBSERVAÇÕES</strong></h3>
        <p>*Não é recomendado fazer massagem se estiver com virose/gripe ou febril.</p>
        <p>*Favor avisar quando estiver menstruada para evitar estímulos no baixo ventre.</p>
      </div>
    </v-container>
    <div class="btn">
      <v-btn elevation="6" class="mb-3 green white--text" @click="gravar"
        >Gravar</v-btn
      >
      <v-btn class="mb-6 orange white--text" @click="signOut()">Logout</v-btn>
    </div>
  </v-form>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  name: "Anamnese",
  data() {
    return {
      name: "anamnese",
      titulo: "Anamnese",
      anamneseDados: [],
      id: null,
      anamnese: {
        nome: "",
        idade: "",
        endereco: "",
        profissao: "",
        telefone: "",
        alergias: "",
        hipertensao: "",
        diabetes: "",
        marcapasso: "",
        pinos_placas: "",
        hernia: "",
        trombose: "",
        cancer: "",
        hiv: "",
        gravidez: "",
        meses: 1,
        gripe_resfriado: "",
        depressao: "",
        ansiedade: "",
        dores: "",
        local_corpo: "",
        outra_questao_saude: "",
        qual_questao_saude: "",
      },
      min: 1,
      max: 9,
    };
  },
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
  methods: {
    limpar() {
      (this.anamnese.nome = ""),
        (this.anamnese.idade = ""),
        (this.anamnese.endereco = ""),
        (this.anamnese.profissao = ""),
        (this.anamnese.telefone = ""),
        (this.anamnese.alergias = ""),
        (this.anamnese.hipertensao = ""),
        (this.anamnese.diabetes = ""),
        (this.anamnese.marcapasso = ""),
        (this.anamnese.pinos_placas = ""),
        (this.anamnese.hernia = ""),
        (this.anamnese.trombose = ""),
        (this.anamnese.cancer = ""),
        (this.anamnese.hiv = ""),
        (this.anamnese.gravidez = ""),
        (this.anamnese.meses = ""),
        (this.anamnese.gripe_resfriado = ""),
        (this.anamnese.depressao = ""),
        (this.anamnese.ansiedade = ""),
        (this.anamnese.dores = ""),
        (this.anamnese.local_corpo = ""),
        (this.anamnese.outra_questao_saude = ""),
        (this.anamnese.qual_questao_saude = "");
    },
    gravar() {
      const metodo = this.id ? "patch" : "post";
      const finalUrl = this.id ? `/${this.id}.json` : ".json";
      this.$http[metodo](`/anamnese${finalUrl}`, this.anamnese).then(() =>
        this.limpar()
      );
      alert("Anamnese gravada!");
    },
  },
  signOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.$router.replace({
          name: "home",
        });
      });
  },
};
</script>

<style lang="css">
h2,
h3 {
  text-align: center;
}

.btn {
  display: flex;
  flex-direction: column;
  width: 15rem;
  margin: 0 auto;
}
@media (min-width: 960px) {
  .col-md-3 {
    flex: 0 0 25%;
    max-width: 25%;
    text-align: center;
    margin: 0 auto;
  }
}
</style>