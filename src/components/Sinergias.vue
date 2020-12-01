<template>
  <v-form>
    <h2 class="animate__animated animate__fadeInUp">{{ titulo }}</h2>
    <h1 class="mt-4">Bem-vindo(a), {{ user.data.displayName }}!</h1>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            dark
            label="Sinergia"
            id="sinergia"
            v-model="sinergias.sinergia"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            dark
            label="Carreador"
            id="carreador"
            v-model="sinergias.carreador"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            dark
            label="Óleos Essenciais"
            id="oleos"
            v-model="sinergias.oleos"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            dark
            label="Observações"
            id="obs"
            v-model="sinergias.obs"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <div class="btn">
      <v-btn elevation="6" class="mb-3 green white--text" @click="gravar"
        >Gravar</v-btn
      >
      <v-btn class="mb-3 blue white--text" @click="mostrar"
        >Mostrar Dados</v-btn
      >
      <v-btn class="mb-6 orange white--text" @click="signOut()">Logout</v-btn>
    </div>
    <hr />
    <v-card max-width="354" class="mt-4 purple--text card" color="#ddd">
      <v-card-title>Dados das Sinergias</v-card-title>
      <ul class="list-group">
        <li v-for="(sinergia, id) in sinergiasDados" :key="id">
          <strong>Sinergia:</strong>
          {{ sinergia.sinergia }}
          <br />
          <strong>Carreador:</strong>
          {{ sinergia.carreador }}
          <br />
          <strong>Óleos Essencias:</strong>
          {{ sinergia.oleos }}
          <br />
          <strong>Observações:</strong>
          {{ sinergia.obs }}
          <br />
          <v-btn
            elevation="6"
            class="btn yellow blue--text mb-3 mt-3"
            @click="carregar(id)"
            >Carregar Dados</v-btn
          >
          <v-btn
            elevation="6"
            class="btn red white--text mb-3"
            @click="excluir(id)"
            >Deletar</v-btn
          >
        </li>
      </ul>
    </v-card>
  </v-form>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from 'firebase'
export default {
  name: "Sinergias",
  data() {
    return {
      name: "sinergias",
      titulo: "Sinergias",
      sinergiasDados: [],
      id: null,
      sinergias: {
        sinergia: "",
        carreador: "",
        oleos: "",
        obs: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
  methods: {
    limpar() {
      this.sinergias.sinergia = "";
      this.sinergias.carreador = "";
      this.sinergias.oleos = "";
      this.sinergias.obs = "";
    },
    carregar(id) {
      this.id = id;
      this.sinergias = { ...this.sinergiasDados[id] };
    },
    excluir(id) {
      this.$http.delete(`/sinergia/${id}.json`).then(() => this.limpar());
      alert("Dados excluídos com sucesso!");
    },
    gravar() {
      const metodo = this.id ? "patch" : "post";
      const finalUrl = this.id ? `/${this.id}.json` : ".json";
      this.$http[metodo](`/sinergia${finalUrl}`, this.sinergias).then(() =>
        this.limpar()
      );
      alert("Sinergias gravadas!");
    },
    mostrar() {
      this.$http.get("sinergia.json").then((res) => {
        this.sinergiasDados = res.data;
        console.log(this.sinergiasDados);
      });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: 'home'
          })
        })
    }
  },
};
</script>

<style scoped>
h2,
p {
  text-align: center;
}

h2 {
  padding: 1rem;
  font-weight: bold;
}

li {
  text-align: left;
}

.btn {
  display: flex;
  flex-direction: column;
  width: 15rem;
  margin: 0 auto;
}
</style>