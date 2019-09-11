<template>
  <div>
    <div
      class="select-fruit-window acea-row row-between-wrapper"
      :class="value === true ? 'on' : ''"
    >
      <div class="bg">
        <div class="title">选择你想种下的果实</div>
        <div class="describe">不同的果树可以结出不同的果实哦~</div>
        <div class="con acea-row row-center-wrapper">
          <div class="picture">
            <img src="../assets/images/pingguo.png" />
            <div class="text">
              <yd-checkbox shape="circle" v-model="pingguo">苹果</yd-checkbox>
            </div>
          </div>
          <div class="picture">
            <img src="../assets/images/nihoutao.png" />
            <div class="text">
              <yd-checkbox shape="circle" v-model="nihuotao">猕猴桃</yd-checkbox>
            </div>
          </div>
        </div>
        <div class="con acea-row row-center-wrapper">
          <div class="picture">
            <img src="../assets/images/xueli.png" />
            <div class="text">
              <yd-checkbox shape="circle" v-model="xueli">雪梨</yd-checkbox>
            </div>
          </div>
          <div class="picture">
            <img src="../assets/images/mangguo.png" />
            <div class="text">
              <yd-checkbox shape="circle" v-model="mangguo">芒果</yd-checkbox>
            </div>
          </div>
        </div>
        <div class="con acea-row row-center-wrapper">
          <div class="fruit-btn acea-row row-center-wrapper" @click="start">
            <span>开始种植苹果</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mask" @touchmove.prevent :hidden="value === false"></div>
  </div>
</template>
<script>
import { makeTaskPhase } from "../api/home";
export default {
  name: "SelectFruitWindow",
  props: {
    value: Boolean
  },
  data() {
    return {
      pingguo: false,
      nihuotao: false,
      xueli: false,
      mangguo: false
    };
  },
  watch: {
    pingguo(e) {
      if (e === undefined || e === false) {
        return;
      }
      this.nihuotao = false;
      this.xueli = false;
      this.mangguo = false;
    },
    nihuotao(e) {
      if (e === undefined || e === false) {
        return;
      }
      this.pingguo = false;
      this.xueli = false;
      this.mangguo = false;
    },
    xueli(e) {
      if (e === undefined || e === false) {
        return;
      }
      this.nihuotao = false;
      this.pingguo = false;
      this.mangguo = false;
    },
    mangguo(e) {
      if (e === undefined || e === false) {
        return;
      }
      this.nihuotao = false;
      this.xueli = false;
      this.pingguo = false;
    }
  },
  methods: {
    start: function() {
      let selectFruit = "";

      if (this.pingguo) {
        selectFruit = "1";
      }
      if (this.nihuotao) {
        selectFruit = "2";
      }
      if (this.xueli) {
        selectFruit = "3";
      }
      if (this.mangguo) {
        selectFruit = "4";
      }
      if (selectFruit === "") {
        return this.$dialog.toast({ mes: "请选择水果！！" });
      }
      makeTaskPhase().then(
        () => {
          this.$emit("input", false);
        },
        error => {
          this.$dialog.error(error.msg);
        }
      );
    }
  }
};
</script>
<style scoped>
.select-fruit-window {
  position: fixed;
  top: 50%;
  z-index: 99;
  left: 50%;
  margin-left: -3.4rem;
  margin-top: -3.22rem;
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
.select-fruit-window.on {
  opacity: 1;
  transform: scale(1);
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  -moz-transform: scale(1);
  -o-transform: scale(1);
}

.select-fruit-window .bg {
  background-color: #000000;
  width: 6.8rem;
  height: 9rem;
  border-radius: 0.2rem;
  text-align: center;
}

.select-fruit-window .bg .title {
  font-size: 0.4rem;
  color: #fff;
  margin-top: 0.3rem;
  text-shadow: 0px 2px 2px red;
}

.select-fruit-window .bg .describe {
  font-size: 0.3rem;
  color: #fff;
  margin-top: 0.3rem;
}

.select-fruit-window .bg .con {
  margin-top: 1rem;
}

.select-fruit-window .bg .con .picture {
  width: 1.8rem;
  height: 1.2rem;
  margin: 0 0.7rem;
}

.select-fruit-window .bg .con .picture img {
  width: 100%;
  height: 100%;
}

.select-fruit-window .bg .con .picture .text {
  color: #69732d;
  font-size: 0.3rem;
  font-weight: bold;
}

.select-fruit-window .bg .con .fruit-btn {
  background-color: #fbb831;
  border-radius: 0.5rem;
  width: 5.5rem;
  height: 0.85rem;
  margin-top: 0.3rem;
}

.select-fruit-window .bg .con .fruit-btn span {
  font-size: 0.4rem;
  color: #fff;
}
</style>