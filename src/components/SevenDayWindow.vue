<template>
  <div>
    <div class="seven-day" :class="value === true ? 'on' : ''">
      <div class="bg acea-row row-center-wrapper">
        <div class="pictxt acea-row row-center-wrapper">
          <div class="title">连续签到七天，获得如下奖品</div>
          <div class="picture-con acea-row row-between-wrapper">
            <div class="picture1 acea-row row-center-wrapper">
              <div class="text" style="margin-top:0.4rem">{{sevenDay.water}}g</div>
            </div>
            <div class="picture2">
              <div class="text acea-row row-center-wrapper">
                ￥
                <div class="num">{{sevenDay.price}}</div>
              </div>
              <div>满{{sevenDay.full}}减{{sevenDay.price}}</div>
              <div>代金卷</div>
            </div>
          </div>
          <div class="seven-btn acea-row row-center-wrapper" @click="confirmBtn">
            <div class="text">确认</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mask" @touchmove.prevent :hidden="value === false"></div>
  </div>
</template>
<script>
export default {
  name: "SevenDayWindow",
  props: {
    value: Boolean,
    sevenDay: {
      water: Number,
      full: Number,
      price: Number
    }
  },
  methods:{
    confirmBtn:function(){
      this.$emit("input", false);
    }
  }
};
</script>
<style scoped>
.seven-day {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -3.65rem;
  margin-top: -5.3rem;
  z-index: 99;
  transition: all 0.3s ease-in-out 0s;
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  -o-transition: all 0.3s ease-in-out 0s;
  opacity: 0;
  transform: scaleY(0);
  -webkit-transform: scaleY(0);
  -ms-transform: scaleY(0);
  -moz-transform: scaleY(0);
  -o-transform: scaleY(0);
}

.seven-day.on {
  opacity: 1;
  transform: scaleY(1);
  -webkit-transform: scaleY(1);
  -ms-transform: scaleY(1);
  -moz-transform: scaleY(1);
  -o-transform: scaleY(1);
}

.seven-day .bg {
  background-image: url("../assets/images/sevenalter.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 7.5rem;
  height: 10rem;
}

.seven-day .bg .pictxt {
  width: 5rem;
  height: 4rem;
  margin-left: -0.2rem;
  margin-top: 4rem;
}

.seven-day .bg .pictxt .title {
  font-size: 0.25rem;
  color: #fff;
}

.seven-day .bg .pictxt .picture-con {
  width: 4.5rem;
  height: 3rem;
}

.seven-day .bg .pictxt .picture-con .picture1 {
  background-image: url("../assets/images/shuidibg@3x.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 2rem;
  height: 2rem;
}

.seven-day .bg .pictxt .picture-con .picture1 .text {
  font-size: 0.1rem;
  color: #fff;
}

.seven-day .bg .pictxt .picture-con .picture2 {
  background-image: url("../assets/images/daijinjuanbg@3x.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 2rem;
  height: 2rem;
  text-align: center;
  font-size: 0.2rem;
  color: #c2b9fe;
}

.seven-day .bg .pictxt .picture-con .picture2 .text {
  font-size: 0.2rem;
  color: #c2b9fe;
  margin-top: 0.3rem;
}

.seven-day .bg .pictxt .picture-con .picture2 .text .num {
  font-size: 0.6rem;
  font-weight: bold;
}

.seven-day .bg .pictxt .seven-btn {
  background-image: url("../assets/images/mingriqiandao.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 5.3rem;
  height: 0.8rem;
}

.seven-day .bg .pictxt .seven-btn .text {
  font-size: 0.3rem;
  color: #fff;
  margin-top: -0.1rem;
}
</style>