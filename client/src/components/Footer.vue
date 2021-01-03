<template>
  <div class="foot">
    <v-footer class="melek" dark padless>
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text class="white--text pt-0"
          ><h2>ABOUT US</h2>
          Eservices Medical is committed to providing an exemplary service to
          its clients. We have a specialized team that will help you in all
          aspects of your order. In addition, we provide on-site assistance
          formed by experts and a solid distribution network in international
          markets to offer a wide range of service options. Our goal is to
          provide our clients with more time so they can take care of their
          patients. Eservices Medical offers a wide range of accessories and
          supplies for neurodiagnostic that promotes patient comfort. The
          loyalty of the client is our reward.
          <br /><br />
          <ul>
            <h2>Team:</h2>
            <li>Ahmed Lahmer</li>
            <li>Khaled Yeferni</li>
            <li>Melek Houidi</li>
            <li>Zied Sradki</li>
          </ul>
        </v-card-text>

        <v-divider></v-divider>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>
<style scoped>
.foot {
  height: 100%;
}
.melek {
  height: 100%;
}
.v-card__subtitle,
.v-card__text,
.v-card__title {
  padding: 2px !important;
}
body {
  background-color: #1e1e1e;
}
.v-card__text.white--text.pt-0 {
  text-align: center;
  font-size: unset;
}
</style>
