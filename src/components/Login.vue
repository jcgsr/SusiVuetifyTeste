<template>
  <v-form v-model="valid" @submit.prevent="submit" v-if="show">
    <h1 class="animate__animated animate__fadeInDown">Sinergias</h1>
    <div v-if="error">{{ error }}</div>
    <v-card
      elevation="6"
      outlined
      width="574"
      color="#673ab7"
      class="card mt-5 animate__animated animate__fadeInUp"
    >
      <v-container class="login">
        <v-row>
          <v-col cols="12" md="10">
            <v-text-field
              dark
              v-model="form.email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="10">
            <v-text-field
              v-model="form.password"
              :rules="senhaRules"
              label="Senha"
              type="password"
              dark
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-btn class="mb-2 green white--text" type="submit">Entrar</v-btn>
    </v-card>
  </v-form>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true,
      error: null,
      emailRules: [
        (v) => !!v || "E-mail é necessário",
        (v) => /.+@.+/.test(v) || "E-mail deve ser válido",
      ],
      senhaRules: [(v) => !!v || "Senha é necessária"],
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          this.$router.replace({ name: "sinergias" });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>

<style lang="css">
h1 {
  text-align: center;
}

.card {
  text-align: center;
  margin: 0 auto;
}
</style>