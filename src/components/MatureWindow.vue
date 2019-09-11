<template>
  <div>
    <div class="mature-window" :class="value === true ? 'on' : ''">
      <div class="bg acea-row row-center-wrapper">
        <div class="pictxt acea-row row-center-wrapper">
          <div class="picture">
            <img src="../assets/images/chengshupingguo.png" />
          </div>
          <div class="text">恭喜成功领取果实成熟，快来领取</div>
          <div class="text">你的整箱水果吧~</div>
          <div class="save-btn acea-row row-center-wrapper">
            <div class="text">去领取</div>
          </div>
          <div class="dec">领取水果后预计4天左右送到您的手上，请耐心等待</div>
        </div>

        <div class="close" @click="onClose">
          <img src="../assets/images/chengshuclose.png" />
        </div>
      </div>
    </div>
    <div class="mask" style="background-color:rgba(0, 0, 0, 0.8)" @touchmove.prevent :hidden="value === false"></div>
  </div>
</template>
<script>
export default {
  name: "MatureWindow",
  props: {
    value: Boolean
  },
  methods: {
    onClose: function() {
      this.$emit("input", false);
    }
  }
};
</script>
<style scoped>
.mature-window {
  position: fixed;
  top: 50%;
  z-index: 99;
  left: 50%;
  transition: all 0.3s ease-in-out 0s;
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  -o-transition: all 0.3s ease-in-out 0s;
  opacity: 0;
  margin-left: -3.5rem;
  margin-top: -3.5rem;
  transform: scale(0);
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  -moz-transform: scale(0);
  -o-transform: scale(0);
}

.mature-window.on {
  opacity: 1;
  transform: scale(1);
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  -moz-transform: scale(1);
  -o-transform: scale(1);
}

.mature-window .bg {
  width: 7rem;
  height: 8rem;
}

.mature-window .bg .pictxt {
  width: 5rem;
  height: 5rem;
  margin: 1.5rem auto 0 auto;
}

.mature-window .bg .pictxt .picture {
  width: 2.5rem;
  height: 1.8rem;
  margin-bottom: 0.3rem;
}

.mature-window .bg .pictxt .picture img {
  width: 100%;
  height: 100%;
}

.mature-window .bg .pictxt .text {
  font-size: 0.3rem;
  color: #fff;
}

.mature-window .bg .pictxt .save-btn {
  width: 5rem;
  height: 0.8rem;
  border-radius: 0.5rem;
  background-color: #fbb831;
  margin-top: 0.5rem;
}

.mature-window .bg .pictxt .save-btn .text {
  font-size: 0.3rem;
  color: #fff;
}

.mature-window .bg .pictxt .dec {
  font-size: 0.2rem;
  color: #fff;
  margin-bottom: 0.2rem;
}

.mature-window .bg .close {
  width: 0.3rem;
  height: 0.3rem;
  position: absolute;
  right: 1.5rem;
  top: 0.3rem;
}

.mature-window .bg .close img {
  width: 100%;
  height: 100%;
}
</style>