<template>
  <section id="about">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <h1 class="font-weight-light display-2">Nosotros</h1>
              <h1 class="font-weight-light display-1 mb-3">
                Consultoría de negocios.
              </h1>
              <v-row>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon1.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Desde entonces ofrecemos servicios a empresas del país y el exterior, basándonos en nuestra amplia experiencia en el liderazgo de proyectos de software, diseño y desarrollo de aplicaciones, animación y tecnología aplicada a mejorar la gestión de nuestros clientes.
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon2.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Desde entonces ofrecemos servicios a empresas del país y el exterior, basándonos en nuestra amplia experiencia en el liderazgo de proyectos de software, diseño y desarrollo de aplicaciones, animación y tecnología aplicada a mejorar la gestión de nuestros clientes.
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon3.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Resolvemos necesidades para diversos tipos de clientes y mercados.Brindamos la información necesaria para evaluar, planificar y tomar decisiones.Diseñamos, implementamos y brindamos soluciones globales, para diversos tipos de negocio.
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
              <v-img
                src="@/assets/img/ill1.svg"
                class="d-block ml-auto mr-auto"
                max-width="400px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#about {
  background-color: #f4f7f5;
}
</style>
