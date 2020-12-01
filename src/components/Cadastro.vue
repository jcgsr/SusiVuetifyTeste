<template>
  <div class="cadastro">
    <h1>Cadastro</h1>
    <v-form v-model="valid" @submit.prevent="submit" v-if="show">
      <div v-if="error" class="alert alert-danger">{{ error }}</div>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="form.name"
              label="Nome"
              autofocus
              dark
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="form.email"
              type="email"
              dark
              autofocus
              label="E-mail"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="form.password"
              autofocus
              dark
              type="password"
              label="Senha"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-btn elevation="6" outlined class="white--text" type="submit"
        >Cadastrar</v-btn
      >
    </v-form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Register",
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: "",
      },
      show: true,
      error: null,
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          data.user
            .updateProfile({
              displayName: this.form.name,
            })
            .then(() => {
               alert("Cadastro efetuado com sucesso!")
            });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>

<style lang="css">
.cadastro {
  width: 40%;
  margin: 0 auto;
}
</style>