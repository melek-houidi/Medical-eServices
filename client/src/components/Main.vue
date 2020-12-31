<template>
  <div class="slide" :class="[whereAmI]">
    <img :src="img" alt="img" class="slide-img" />
    <div class="slide-bullets">
      <div
        v-for="n in count"
        :key="n"
        class="slide-bullet"
        :class="currentId == n ? 'bullet-on' : 'n'"
      />
    </div>
    <div class="bar" :class="{ 'bar-animation': startAnime }"></div>
    <div class="right-arrow" @click="$emit('direction', 'right')">
      <div class="arrow-pos-div">
        <img
          src="https://cdn1.iconfinder.com/data/icons/arrows-directions-crafticons/48/Arrow_left_arrow_2-512.png"
          alt="arrow"
          class="right-arrow-pic"
        />
      </div>
    </div>
    <div class="left-arrow" @click="$emit('direction', 'left')">
      <div class="arrow-pos-div">
        <img
          src="https://cdn1.iconfinder.com/data/icons/arrows-directions-crafticons/48/Arrow_left_arrow_2-512.png"
          alt="arrow"
          class="left-arrow-pic"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  props: ["data", "img", "myId", "currentId", "count", "startAnime"],
  computed: {
    whereAmI: function() {
      if (this.myId > this.currentId) {
        return {
          "slide-right": true,
          "slide-left": false,
        };
      } else if (this.myId < this.currentId) {
        return {
          "slide-right": false,
          "slide-left": true,
        };
      } else {
        return {
          "slide-right": false,
          "slide-left": false,
        };
      }
    },
  },
};
</script>

<style>
.slide {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: blue;
  height: 100vh;
  opacity: 1;
}
.slide-right {
  opacity: 0;
  visibility: hidden;
}
.slide-left {
  opacity: 0;
  visibility: hidden;
}
.slide-img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}
.right-arrow {
  position: absolute;
  right: -50px;
  top: 50%;
  height: 600px;
  width: 150px;
  transform: translate(-50%, -50%);
}
.left-arrow {
  position: absolute;
  left: 100px;
  top: 50%;
  height: 600px;
  width: 150px;
  transform: translate(-50%, -50%);
}
.arrow-pos-div {
  position: relative;
  width: 100%;
  height: 100%;
}
.right-arrow-pic {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(180deg);
  width: 100%;
  height: 300px;
  opacity: 0.3;
  filter: invert(90%);
  transition: 0.5s;
}
.right-arrow-pic:hover {
  opacity: 1;
}
.left-arrow-pic {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 300px;
  opacity: 0.3;
  filter: invert(90%);
  transition: 0.5s;
}
.left-arrow-pic:hover {
  opacity: 1;
}
.slide-bullets {
  width: 100px;
  height: 30px;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -80px);
  display: flex;
  justify-content: space-around;
  align-self: center;
}
.slide-bullet {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: transparent;
  border: 3px solid #fff;
  position: relative;
}
.slide-bullet::after {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0;
  transition: 1s;
}
.bullet-on {
  transform: translate(-50%, -50%) scale=1;
  opacity: 1;
  background-color: whitesmoke;
}
@keyframes myBar {
  from {
    transform: translate(-50%, -30px) scaleX(0) scaleY(0.5);
  }
  to {
    transform: translate(-50%, -30px) scaleX(1) scaleY(1);
  }
}
.bar {
  background-color: rgba(255, 255, 255, 0.7);
  width: 90%;
  height: 2px;
  position: absolute;
  top: 100%;
  left: 50%;
  animation: myBar 5s infinite;
}
.bar-animation {
  transform-origin: 0 0;
}
</style>
