<template>
  <div>
    <div class="task-window" :class="value === true ? 'on' : ''">
      <div class="bg">
        <div class="title">
          <div class="text">水滴任务</div>
        </div>
        <div class="item acea-row row-between-wrapper">
          <div class="pictxt acea-row row-left">
            <div class="picture">
              <img src="../assets/images/mianfeilingshuidi.png" />
            </div>
            <div class="text acea-row row-left">
              <div class="name">免费领水滴（{{receiveWater}}/5）</div>
              <div class="num">奖励10-20水滴</div>
            </div>
          </div>
          <div
            class="task-btn acea-row row-center-wrapper"
            v-if="receiveWaterStatus===0"
            @click="onReceiveWater"
          >
            <div class="text">领水滴</div>
          </div>
          <div class="task-receive-btn acea-row row-center-wrapper" v-if="receiveWaterStatus===1">
            <div class="text">
              <yd-countdown
                :time="receiveWaterTime"
                format="{%m}:{%s}"
                done-text
                :callback="onTimeOver"
              ></yd-countdown>
            </div>
          </div>
          <div class="task-receive-btn acea-row row-center-wrapper" v-if="receiveWaterStatus===2">
            <div class="text">已完成</div>
          </div>
        </div>
        <div class="item acea-row row-between-wrapper">
          <div class="pictxt acea-row row-left">
            <div class="picture">
              <img src="../assets/images/download.png" />
            </div>
            <div class="text acea-row row-left">
              <div class="name">激情好友下载直卖惠APP</div>
              <div class="num">奖励200水滴</div>
            </div>
          </div>
          <div class="task-receive-btn acea-row row-center-wrapper">
            <div class="text">已完成</div>
          </div>
        </div>
        <div class="item acea-row row-between-wrapper">
          <div class="pictxt acea-row row-left">
            <div class="picture">
              <img src="../assets/images/yaoqingzhongshu.png" />
            </div>
            <div class="text acea-row row-left">
              <div class="name">激情好友种树</div>
              <div class="num">奖励100水滴</div>
            </div>
          </div>
          <div class="task-btn acea-row row-center-wrapper">
            <div class="text">去完成</div>
          </div>
        </div>
        <div class="item acea-row row-between-wrapper">
          <div class="pictxt acea-row row-left">
            <div class="picture">
              <img src="../assets/images/xiadan.png" />
            </div>
            <div class="text acea-row row-left" style="width:3.3rem">
              <div class="name">水滴专区下单</div>
              <div class="num">奖励50水滴</div>
            </div>
          </div>
          <div class="task-btn acea-row row-center-wrapper">
            <div class="text">去完成</div>
          </div>
        </div>
        <div class="item acea-row row-between-wrapper">
          <div class="pictxt acea-row row-left">
            <div class="picture">
              <img src="../assets/images/shareshop.png" />
            </div>
            <div class="text acea-row row-left">
              <div class="name">分享商品领水滴（0/5）</div>
              <div class="num">奖励20水滴</div>
            </div>
          </div>
          <div class="task-btn acea-row row-center-wrapper">
            <div class="text">去完成</div>
          </div>
        </div>
        <div class="item acea-row row-between-wrapper">
          <div class="pictxt acea-row row-left">
            <div class="picture">
              <img src="../assets/images/buynew.png" />
            </div>
            <div class="text acea-row row-left" style="width:3.1rem">
              <div class="name">购买新人礼</div>
              <div class="num">奖励200水滴</div>
            </div>
          </div>
          <div class="task-btn acea-row row-center-wrapper">
            <div class="text">去完成</div>
          </div>
        </div>
        <div class="item acea-row row-between-wrapper">
          <div class="pictxt acea-row row-left">
            <div class="picture">
              <img src="../assets/images/Invitation.png" />
            </div>
            <div class="text acea-row row-left">
              <div class="name">激情好友购买新人礼</div>
              <div class="num">奖励300水滴</div>
            </div>
          </div>
          <div class="task-btn acea-row row-center-wrapper">
            <div class="text">去完成</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mask" @touchmove.prevent :hidden="value === false" @click="close"></div>
  </div>
</template>
<script>
export default {
  name: "TaskWindow",
  props: {
    value: Boolean
  },
  data: function() {
    return {
      receiveWater: 0,
      receiveWaterStatus: 0,
      receiveWaterTime: "2019/09/09 16:57:20"
    };
  },
  methods: {
    close: function() {
      this.$emit("input", false);
    },
    onReceiveWater: function() {
      var nowDate = new Date();
      var overTime = nowDate.setSeconds(nowDate.getSeconds() + 10);
      this.receiveWaterTime = overTime;
      this.receiveWaterStatus = 1;
    },
    onTimeOver: function() {
      this.receiveWaterStatus = 0;
      this.receiveWater += 1;
      if (this.receiveWater === 5) {
        this.receiveWaterStatus = 2;
      }
    }
  }
};
</script>
<style scoped>
.task-window {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  text-align: center;
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
  width: 100%;
}

.task-window.on {
  opacity: 1;
  transform: scaleY(1);
  -webkit-transform: scaleY(1);
  -ms-transform: scaleY(1);
  -moz-transform: scaleY(1);
  -o-transform: scaleY(1);
}

.task-window .bg {
  background-color: #fff;
  width: 100%;
  padding: 0.3rem;
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
}

.task-window .bg .title {
  border-bottom: 1px dashed #ddd;
  height: 0.8rem;
}
.task-window .bg .title .text {
  font-size: 0.4rem;
  color: #282828;
  font-weight: 500;
}

.task-window .bg .item {
  border-bottom: 1px dashed #ddd;
  height: 1.35rem;
}

.task-window .bg .item .pictxt {
  width: 4.8rem;
}

.task-window .bg .item .pictxt .picture {
  width: 1rem;
  height: 1rem;
}

.task-window .bg .item .pictxt .picture img {
  width: 100%;
  height: 100%;
}

.task-window .bg .item .pictxt .text {
  width: 3.5rem;
  margin-left: 0.3rem;
}

.task-window .bg .item .pictxt .text .name {
  font-size: 0.3rem;
}

.task-window .bg .item .pictxt .text .num {
  color: #999999;
  margin-top: 0.05rem;
}

.task-window .bg .item .task-btn {
  background-color: #bec93e;
  border-radius: 0.1rem;
  width: 1.5rem;
  height: 0.7rem;
}

.task-window .bg .item .task-btn .text {
  font-size: 0.3rem;
  color: #fff;
}

.task-window .bg .item .task-receive-btn {
  background-color: #f4f6de;
  border-radius: 0.1rem;
  width: 1.5rem;
  height: 0.7rem;
}

.task-window .bg .item .task-receive-btn .text {
  font-size: 0.3rem;
  color: #bec93e;
}
</style>