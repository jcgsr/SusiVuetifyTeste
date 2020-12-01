<template>
  <div class="navbar">
    <v-app-bar color="deep-purple accent-4" dark dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      color="purple"
      absolute
      bottom
      temporary
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-btn>
              <router-link to="/">Home</router-link>
            </v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn>
              <router-link to="/login_sinergias">Sinergias</router-link>
            </v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn>
              <router-link to="/login_anamnese">Anamnese</router-link>
            </v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn>
              <router-link to="/cadastro">Cadastro</router-link>
            </v-btn>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <div class="terapias">
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on">Terapias » </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="(item, index) in items"
                      :key="index"
                      router
                      :to="item.route"
                    >
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <v-btn>
                <router-link to="/sobre">Sobre</router-link>
              </v-btn>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <v-btn>
                <router-link to="/contatos">Contatos</router-link>
              </v-btn>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <v-btn>
                <router-link to="/pagamentos">Pagamentos</router-link>
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      { title: "Massagens", route: "/massagens" },
      { title: "Reiki", route: "/reiki" },
      { title: "Aromaterapia", route: "/aroma" },
      { title: "Psicoaromaterapia", route: "/psico" },
      { title: "Shiatsu", route: "/shiatsu" },
      { title: "Auricoloterapia", route: "/auricolo" },
      { title: "Ventosaterapia", route: "/ventosa" },
      { title: "Magnetpterapia", route: "/magneto" },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
.v-application a {
  color: purple;
  text-decoration: none;
}
.v-btn__content {
  color: purple;
}
.btn__content .v-icon {
  color: white;
}
.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  background-color: #f5f5f5;
  color: purple;
}
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: purple;
}
</style>