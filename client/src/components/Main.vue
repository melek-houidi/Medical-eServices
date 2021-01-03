<template>
  <v-carousel :show-arrows="false" class="heya">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      active-class="hey"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            "https://www.deburengroup.com/wp-content/uploads/2014/05/Expert-doctors-working-as-a-team-e1541789300953.jpg",
        },
        {
          src:
            "https://www.expatica.com/app/uploads/sites/8/2014/05/hospitals-in-portugal-1920x1080.jpg",
        },
        {
          src:
            "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/blog_posts/public-health/1800x1200_pharmacist.jpg",
        },
      ],
    };
  },
};
</script>
<style scoped>
.heya {
  height: 100vh !important;
}
.hey {
  width: 100vw;
  height: auto !important;
}
</style>
