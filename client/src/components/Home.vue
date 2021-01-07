<template>
  <div>
    <b-container class="bv-example-row">
      <b-row class="justify-content-md-center">
        <b-col cols="12">
          <!-- <h4>Welcome to our Medical Services</h4> -->
          <div class="mt-4">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              background="#ababab"
              img-width="1024"
              img-height="480"
              style="text-shadow: 1px 1px 2px #333;"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <b-carousel-slide
                v-bind:img-src="require('.././assets/pharmacie.png')"
              >
                <h1>Pharmacies</h1>
              </b-carousel-slide>

              <!-- Slides with custom text -->
              <b-carousel-slide
                v-bind:img-src="require('.././assets/hospital.png')"
              >
                <h1>Hospitals</h1>
              </b-carousel-slide>

              <!-- Slides with image only -->
              <b-carousel-slide
                v-bind:img-src="require('.././assets/doctor.png')"
              >
                <h1>Doctors</h1>
              </b-carousel-slide>
            </b-carousel>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      console.log(slide);
      this.sliding = true;
    },
    onSlideEnd(slide) {
      console.log(slide);
      this.sliding = false;
    },
  },
};
</script>

<style></style>
