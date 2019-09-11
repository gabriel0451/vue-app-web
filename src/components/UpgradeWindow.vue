<template>
  <div>
    <div class="upgrade-window acea-row row-between-wrapper" :class="value === true ? 'on' : ''">
      <div class="bg">
        <div class="pictext1">
          <div class="text">{{upgrage.water}}g</div>
        </div>
        <div class="text line2">恭喜获得{{upgrage.water}}水滴</div>
      </div>
      <div class="bg">
        <div class="pictext2">
          <div class="text acea-row row-center-wrapper">
            ￥
            <div class="num">{{upgrage.price}}</div>
          </div>
          <div>满{{upgrage.full}}减{{upgrage.price}}</div>
          <div>代金卷</div>
        </div>
        <div class="text line2">恭喜获得{{upgrage.price}}元代金卷</div>
      </div>
    </div>
    <div class="mask" @touchmove.prevent :hidden="value === false" @click="close"></div>
  </div>
</template>
<script>
export default {
  name: "UpgradeWindow",
  props: {
    value: Boolean,
    upgrage: {
      water: Number,
      full: Number,
      price: Number
    }
  },
  methods: {
    close: function() {
      this.$emit('input',false)
    }
  }
};
</script>
<style scoped>
.upgrade-window {
  position: fixed;
  top: 35%;
  z-index: 99;
  left: 50%;
  text-align: center;
  margin-left: -3.22rem;
  transition: all 0.3s ease-in-out 0s;
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  -o-transition: all 0.3s ease-in-out 0s;
  opacity: 0;
  transform: scale(0);
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  -moz-transform: scale(0);
  -o-transform: scale(0);
  width: 6.44rem;
  height: 4.5rem;
}

.upgrade-window.on {
  opacity: 1;
  transform: scale(1);
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  -moz-transform: scale(1);
  -o-transform: scale(1);
}

.upgrade-window .bg {
  background-image: url("../assets/images/upgrateBg@3x.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 3.1rem;
  height: 4.5rem;
  text-align: center;
  padding: 0.3rem;
}

.upgrade-window .bg .pictext1 {
  background-image: url("../assets/images/shuidibg@3x.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 2rem;
  height: 2rem;
  margin: 0.8rem auto 0 auto;
  color: #fff;
}

.upgrade-window .bg .pictext2 {
  background-image: url("../assets/images/daijinjuanbg@3x.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 2rem;
  height: 2rem;
  margin: 0.8rem auto 0 auto;
  text-align: center;
  font-size: 0.2rem;
  padding: 0.2rem;
  color: #c2b9fe;
}

.upgrade-window .bg .pictext2 .text {
  font-size: 0.1rem;
  color: #c2b9fe;
}

.upgrade-window .bg .pictext2 .text .num {
  font-size: 0.5rem;
  font-weight: bold;
}

.upgrade-window .bg .pictext1 .text {
  margin-top: 1.1rem;
  margin-left: 0.85rem;
  font-size: 0.1rem;
  position: absolute;
}

.upgrade-window .bg .text {
  margin-top: 0.3rem;
  font-size: 0.3rem;
  color: #fff;
}
</style>