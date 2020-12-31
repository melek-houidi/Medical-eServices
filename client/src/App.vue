<template>
  <div class="slide-show">
    <Main
      v-for="(data, index) in slideData"
      :key="index"
      v-bind:img="slideData[index].img"
      v-bind:myId="index + 1"
      v-bind:currentId="currentId"
      v-bind:count="slideCounts"
      v-on:direction="dir"
      v-bind:startAnime="startAnime"
    />
  </div>
</template>

<script>
import Main from "./components/Main";
export default {
  name: "App",
  components: {
    Main,
  },

  methods: {
    dir: function(myDir) {
      if (myDir === "right") {
        if (this.currentId < this.slideCounts) {
          this.currentId += 1;
        } else {
          this.currentId = 1;
        }
      } else {
        if (this.currentId > 1) {
          this.currentId -= 1;
        } else {
          this.currentId = this.slideCounts;
        }
      }
    },
  },
  created: function() {
    setInterval(() => {
      this.startAnime = true;
      this.dir("right");
    }, 3000);
  },
  data: function() {
    return {
      slideCounts: 3,
      currentId: 1,
      startAnime: false,

      slideData: [
        {
          img:
            "https://www.expatica.com/app/uploads/sites/6/2017/05/doctors-in-germany-1920x1080.jpg",
        },
        {
          img:
            "https://www.expatica.com/app/uploads/sites/8/2014/05/hospitals-in-portugal-1920x1080.jpg",
        },
        {
          img:
            "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/blog_posts/public-health/1800x1200_pharmacist.jpg",
        },
      ],
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.slide-show {
  width: 100%;
  height: 100%;
  background-color: aquamarine;
}
</style>
