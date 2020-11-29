<template>
  <div class="container">
    <h2>Contato</h2>
    <div class="contato">
      <a class="animate__animated animate__tada" :href="linkInstagram"
        ><i class="fab fa-instagram"></i
      ></a>
      <a class="animate__animated animate__tada" :href="linkWhatsapp"
        ><i class="fab fa-whatsapp"></i
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkInstagram:
        "https://www.instagram.com/massoterapeuta_susipessoa/?hl=pt-br",
      linkWhatsapp: "https://api.whatsapp.com/send?phone=5579988445130&text=",
    };
  },
};
</script>

<style scoped>
h2,
a {
  text-align: center;
  padding: 1rem;
}

i {
  font-size: 3rem;
  color: #593196;
  transition: 0.3s;
}

i:hover {
  color: white;
}

.contato {
  display: flex;
  margin: 0 auto;
}
</style>