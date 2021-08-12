<template>
  <section class="pb-8" id="contact">
     <v-container fluid>
    
   
      <v-row align="center" justify="center">
        <v-col cols="10">
            <v-row justify="center">
      <h1 class="font-weight-light display-1">
        Empresas que confiaron en nosotros
      </h1>

      <v-row justify="center">
        <v-col cols="9" sm="3">
          <v-img
            src="https://d3ugyf2ht6aenh.cloudfront.net/stores/972/047/themes/common/logo-1387739079-1619612292-af1f4b11b005ed851350fcea60a064ab1619612292-320-0.jpg?0"
           
          ></v-img>
        </v-col>

        <v-col cols="9" sm="3">
          <v-img src="https://static.wixstatic.com/media/7f2d86_a5c77e7abe504379b3ccebca42febd7e~mv2.png/v1/fill/w_499,h_494,al_c,q_85,usm_0.66_1.00_0.01/logo%20png.webp">
            
          </v-img>
        </v-col>

        <v-col cols="9" sm="3">
          <v-img src="https://scontent.fcor10-3.fna.fbcdn.net/v/t1.6435-9/203078815_275982457611967_5124623691295930420_n.png?_nc_cat=106&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=li_SKJWQrbIAX_psuOO&_nc_ht=scontent.fcor10-3.fna&oh=9a37d667db5a4cd146ca210c55434d34&oe=613ADD35">
            
          </v-img>
        </v-col>
      </v-row>
    
            <v-col cols="12" sm="5">
              <h1 class="font-weight-light display-1">
                {{ this.$t("navigate.contact") }}
              </h1>
              <h3 class="font-weight-light mt-3">
                {{ this.$t("contact.copete") }}
              </h3>
              <h3 class="font-weight-light mt-3"></h3>
              <h3 class="font-weight-light mt-3">
                <a
                  href="https://t.me/blasrodriguez934"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><v-icon>mdi-telegram </v-icon></a
                ><a
                  href="https://api.whatsapp.com/send?phone=543804564857"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><v-icon>mdi-whatsapp </v-icon></a
                >
                Blas Rodriguez <br />
                <a
                  href="https://t.me/blasrodriguez934"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><v-icon>mdi-telegram </v-icon></a
                ><a
                  href="https://api.whatsapp.com/send?phone=543804564857"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><v-icon>mdi-whatsapp </v-icon></a
                >
                Florencia Barrera<br />
              </h3>
              <h3 class="font-weight-light">
                Email: goodjobsistemas@gmail.com
              </h3>
            </v-col>
            <v-col cols="12" sm="7">
              <v-form
                ref="form"
                v-model="valid"
                :lazy-validation="lazy"
                @submit.prevent="sendEmail"
              >
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  name="user_name"
                  :label="$t('contact.name')"
                  required
                >
                </v-text-field>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  :label="$t('contact.email')"
                  name="user_email"
                  required
                ></v-text-field>
                <v-textarea
                  v-model="textArea"
                  :rules="textAreaRules"
                  :label="$t('contact.message')"
                  name="message"
                  required
                />
                <v-btn
                  :disabled="!valid"
                  color="primary"
                  :dark="valid"
                  rounded
                  block
                  class="mt-3"
                  value="Send"
                  type="submit"
                  :loading="loading4"
                >
                  <input type="submit" :value="this.$t('contact.send')" />
                  <template v-slot:loader>
                    <span class="custom-loader">
                      <v-icon light>mdi-cached</v-icon>
                    </span>
                  </template>
                </v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-waves text-white">
      <v-img src="~@/assets/img/borderWavesBlue.svg" />
    </div>
    <v-snackbar
      v-model="snackbar.enabled"
      timeout="3000"
      right
      top
      :color="snackbar.color"
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar.enabled = false">
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </section>
</template>

<style scoped>
.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 72px
  );
}

.repeating-gradient {
  background-image: repeating-linear-gradient(
    -45deg,
    rgba(255, 0, 0, 0.25),
    rgba(255, 0, 0, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 10px
  );
}
#contact {
  background-color: #f4f7f5;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

<script>
// import {db} from '@/main'
import emailjs from "emailjs-com";
export const EMAILJS_SERVICE_ID = process.env.VUE_APP_EMAILJS_SERVICE_ID;
export const EMAILJS_TEMPLATE_ID = process.env.VUE_APP_EMAILJS_TEMPLATE_ID;
export const EMAILJS_USER_ID = process.env.VUE_APP_EMAILJS_USER_ID;

export default {
  data: () => ({
    loader: false,
    loading: false,
    loading2: false,
    loading3: false,
    loading4: false,
    loading5: false,
    icons: ["fa-facebook", "fa-twitter", "fa-linkedin", "fa-instagram"],
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "O campo nome é obrigatório",
      (v) => (v && v.length >= 6) || "O nome precisa ter mais de 6 caracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "O campo email é obrigatório",
      (v) => /.+@.+\..+/.test(v) || "O E-mail precisa ser válido",
    ],
    textArea: "",
    textAreaRules: [
      (v) => !!v || "O campo de texto é obrigatório",
      (v) => (v && v.length >= 10) || "Mínimo de 10 caracteres",
    ],
    lazy: false,
    snackbar: {
      enabled: false,
      text: "",
      color: "",
    },
  }),
  watch: {},

  methods: {
    loaderON() {
      this.loading4 = true;
    },
    loaderOff() {
      this.loading4 = false;
    },
    sendEmail: function (e) {
      // sendEmail()   {
      this.loading4 = true;
      emailjs
        .sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          e.target,
          EMAILJS_USER_ID
        )
        .then(
          (result) => {
            // console.log("SUCCESS!", result.status, result.text);
            this.loading4 = false;
          },
          (error) => {
            // console.log("FAILED...", error);
            this.loading4 = false;
          }
        );
    },
  },
};
</script>
