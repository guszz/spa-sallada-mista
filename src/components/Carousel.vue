<template>
  <div>
    <b-carousel
      id="carousel-main"
      v-model="slide"
      :interval="5000"
      controls
      indicators
      background="#e91e621e"
      img-width="1280"
      img-height="360"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="../assets/img/full_banner_01.png"
      ></b-carousel-slide>

      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="../assets/img/full_banner_02.png"
      ></b-carousel-slide>

      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="../assets/img/full_banner_03.png"
      ></b-carousel-slide>

      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="../assets/img/full_banner_04.png"
      ></b-carousel-slide>

      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="../assets/img/full_banner_05.png"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>
<style lang="scss">
/* eslint-disable */ 
.carousel-indicators li{
  background-color: #e91e63 !important;
}
.carousel-control-prev,
.carousel-control-next{
  background-color: rgba(233, 30, 99,0.2);
}
.carousel-control-next,
.carousel-control-prev{
  color: #e91e63 !important;
}
</style>
