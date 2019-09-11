<template>
  <div>
    <div class="new-sign-window acea-row row-between-wrapper" :class="value === true ? 'on' : ''">
      <div class="bg">
        <div class="con acea-row row-center-wrapper">
          <div class="one">
            <img src="../assets/images/signwater.png" />
            <div class="text">+{{sign.one}}g</div>
            <div class="sign-mask acea-row row-center-wrapper">
              <div class="text">已签到</div>
            </div>
          </div>
          <div class="two">
            <img src="../assets/images/signwater.png" />
            <div class="text">+{{sign.two}}g</div>
          </div>
          <div class="three">
            <img src="../assets/images/signwater.png" />
            <div class="text">+{{sign.three}}g</div>
          </div>
          <div class="four">
            <img src="../assets/images/signwater.png" />
            <div class="text">+{{sign.four}}g</div>
          </div>
          <div class="five">
            <img src="../assets/images/signwater.png" />
            <div class="text">+{{sign.five}}g</div>
          </div>
          <div class="six">
            <img src="../assets/images/signwater.png" />
            <div class="text">+{{sign.six}}g</div>
          </div>
          <div class="seven">
            <img src="../assets/images/baoxiang.png" />
          </div>
          <img src="../assets/images/sign.png" @click="onSign" />
        </div>
        <div @click="close">
          <img class="pictrue" src="../assets/images/signclose.png" />
        </div>
      </div>
    </div>
    <div class="mask" @touchmove.prevent :hidden="value === false"></div>
  </div>
</template>

<script>
export default {
  name: "NewSignWindow",
  props: {
    value: Boolean,
    sign: {
      one: Number,
      two: Number,
      three: Number,
      four: Number,
      five: Number,
      six: Number,
      isSign: Boolean
    }
  },
  methods: {
    close: function() {
      this.$emit("input", false);
    },
    onSign: function() {
      this.$emit("input", false);
      this.$emit("onSign");
    }
  }
};
</script>
<style scoped>
.new-sign-window {
  position: fixed;
  top: 50%;
  z-index: 99;
  left: 50%;
  margin-left: -3.7rem;
  margin-top: -6.22rem;
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
}

.new-sign-window.on {
  opacity: 1;
  transform: scale(1);
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  -moz-transform: scale(1);
  -o-transform: scale(1);
}

.new-sign-window .bg {
  background-image: url("../assets/images/newsignbg@3x.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 7.5rem;
  height: 12rem;
}

.new-sign-window .bg .con {
  margin-top: 2.8rem;
}
.new-sign-window .bg .con .one {
  background-image: url("../assets/images/one@3x.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 1.95rem;
  height: 2.6rem;
  text-align: center;
}

.new-sign-window .bg .con .one .sign-mask {
  z-index: 55;
  position: absolute;
  left: 1.1rem;
  top: 3rem;
  width: 1.5rem;
  height: 2.1rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.1rem;
}

.new-sign-window .bg .con .one .sign-mask .text {
  font-size: 0.3rem;
  color: #ffffff;
  text-shadow: 0px 2px 2px red;
}

.new-sign-window .bg .con .one img {
  width: 1.2rem;
  height: 1.2rem;
  margin-top: 0.3rem;
}

.new-sign-window .bg .con .one .text {
  font-size: 0.25rem;
  margin-top: 0.25rem;
}

.new-sign-window .bg .con .two {
  background-image: url("../assets/images/two@3x.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 3.9rem;
  height: 2.6rem;
  text-align: center;
}

.new-sign-window .bg .con .two img {
  width: 1.2rem;
  height: 1.2rem;
  margin-top: 0.3rem;
}

.new-sign-window .bg .con .two .text {
  font-size: 0.25rem;
  margin-top: 0.25rem;
}

.new-sign-window .bg .con .three {
  background-image: url("../assets/images/three@3x.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 1.95rem;
  height: 2.6rem;
  text-align: center;
}

.new-sign-window .bg .con .three img {
  width: 1.2rem;
  height: 1.2rem;
  margin-top: 0.3rem;
}

.new-sign-window .bg .con .three .text {
  font-size: 0.25rem;
  margin-top: 0.25rem;
}

.new-sign-window .bg .con .four {
  background-image: url("../assets/images/four@3x.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 1.95rem;
  height: 2.6rem;
  text-align: center;
}

.new-sign-window .bg .con .four img {
  width: 1.2rem;
  height: 1.2rem;
  margin-top: 0.3rem;
}

.new-sign-window .bg .con .four .text {
  font-size: 0.25rem;
  margin-top: 0.25rem;
}

.new-sign-window .bg .con .five {
  background-image: url("../assets/images/five@3x.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 1.95rem;
  height: 2.6rem;
  text-align: center;
}

.new-sign-window .bg .con .five img {
  width: 1.2rem;
  height: 1.2rem;
  margin-top: 0.3rem;
}

.new-sign-window .bg .con .five .text {
  font-size: 0.25rem;
  margin-top: 0.25rem;
}

.new-sign-window .bg .con .six {
  background-image: url("../assets/images/six@3x.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 1.95rem;
  height: 2.6rem;
  text-align: center;
}

.new-sign-window .bg .con .six img {
  width: 1.2rem;
  height: 1.2rem;
  margin-top: 0.3rem;
}

.new-sign-window .bg .con .six .text {
  font-size: 0.25rem;
  margin-top: 0.25rem;
}

.new-sign-window .bg .con .seven {
  background-image: url("../assets/images/seven@3x.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 3.9rem;
  height: 2.6rem;
  text-align: center;
}

.new-sign-window .bg .con .seven img {
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 0.5rem;
}

.new-sign-window .bg .con img {
  width: 5.5rem;
  height: 0.7rem;
}

.new-sign-window .bg .pictrue {
  width: 0.8rem;
  height: 0.8rem;
  position: absolute;
  right: 0.5rem;
  top: 0.8rem;
}
</style>