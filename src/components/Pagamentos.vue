<template>
  <div class="container">
    <h2 class="animate__animated animate__bounceIn">{{ titulo }}</h2>

    <!-- INICIO DO BOTÃO PAGSEGURO --><a
      href="https://pag.ae/7WuUpvGg5/button"
      target="_blank"
      title="Pagar com PagSeguro"      
      ><img id="pagseguro"
        src="//assets.pagseguro.com.br/ps-integration-assets/botoes/pagamentos/205x30-pagar-roxo.gif"
        alt="Pague com PagSeguro - é rápido, grátis e seguro!" /></a
    ><!-- FIM DO BOTÃO PAGSEGURO -->
    <br />
    <!-- INÍCIO BOTÃO PAYPAL -->
    <div class="paypal">
      <PayPal amount="100.00" currency="BRL" :client="credentials"> </PayPal>
      <!-- FIM BOTÃO PAYPAL -->
    </div>

    <hr class="linha" />

    <h2 class="animate__animated animate__bounceIn">{{ doacao }}</h2>

    <!-- INÍCIO FORMULÁRIO BOTÃO PAGSEGURO -->
    <form
      action="https://pagseguro.uol.com.br/checkout/v2/donation.html"
      method="post"
    >
      <!-- NÃO EDITE OS COMANDOS DAS LINHAS ABAIXO -->
      <input type="hidden" name="currency" value="BRL" />
      <input type="hidden" name="receiverEmail" value="soapessoa@gmail.com" />
      <input type="hidden" name="iot" value="button" />
      <input
        type="image"
        src="https://stc.pagseguro.uol.com.br/public/img/botoes/doacoes/205x30-doar-roxo.gif"
        name="submit"
        alt="Pague com PagSeguro - é rápido, grátis e seguro!"
      />
    </form>
    <!-- FINAL FORMULÁRIO BOTÃO PAGSEGURO -->
    <br />
    <!-- INÍCIO FORMULÁRIO BOTÃO PAYPAL -->
    <form action="https://www.paypal.com/donate" method="post" target="_top">
      <input type="hidden" name="hosted_button_id" value="267Y4JJ9YCYQC" />
      <input
        type="image"
        src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif"
        border="0"
        name="submit"
        title="PayPal - A forma mais segura, mais fácil de pagar on-line!"
        alt="Doar com o botão do PayPal"
      />
      <img
      id="paypal_img"
        alt=""
        border="0"
        src="https://www.paypal.com/pt_BR/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>
    <!-- FINAL FORMULÁRIO BOTÃO PAYPAL -->
  </div>
</template>

<script>
import PayPal from "vue-paypal-checkout";

export default {
  data() {
    return {
      titulo: "Pagamentos",
      doacao: "Doações",
      paypal: {
        sandbox: "cabralguerra@gmail.com",
        production:
          "AU_nM7_ue7hdyjiYXYwx1CojGQZdok5wqHpYvk7aIo5pEC113MjNWIFkBIaMQPAofwRgPD6lCrO4xqr7",
      },
      credentials: {
        sandbox: "cabralguerra@gmail.com",
        production:
          "AU_nM7_ue7hdyjiYXYwx1CojGQZdok5wqHpYvk7aIo5pEC113MjNWIFkBIaMQPAofwRgPD6lCrO4xqr7",
      },
    };
  },
  components: {
    PayPal,
  },
};
</script>

<style scoped>
.container {
  display: flex;
}

h2 {
  padding: 1rem;
  font-weight: bold;
  text-align: center;
}

a,
form {
  text-align: center;
}

img#pagseguro{
   width: 15rem;
   height: 4rem;
}

img#paypal_img {
   margin-bottom: -10em;
   
}

hr {
  border: 0;
  clear: both;
  display: block;
  width: 96%;
  background-color: white;
  height: 1px;
}

.paypal {
  margin: 0 auto;
}
</style>


