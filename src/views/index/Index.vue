<template>
  <div class="home">
    <div class="header">
      <img src="../../assets/images/homeheader.png" />
    </div>
    <div class="zhuanqu" @click="$router.push({ path: '/water_drop'})">
      <img src="@/assets/images/shuidi@3x.png" />
    </div>
    <div class="renwu" @click="renwu">
      <img src="@/assets/images/renwu@3x.png" />
    </div>
    <div class="shuihu">
      <div class="pictxt" @click="jiaoshui">
        {{waterNumber}}g
        <div class="pictrue" :hidden="active === true">
          <img src="@/assets/images/shuihu@3x.png" />
        </div>
      </div>
    </div>
    <div class="xiaoshu">
      <img v-if="leve===1" src="@/assets/images/xiaoshu.png" />
      <img v-if="leve===2" src="@/assets/images/dashu.png" />
      <img v-if="leve===3" src="@/assets/images/kaihua.png" />
      <img v-if="leve===4" src="@/assets/images/jieguo.png" />
      <img v-if="leve===5" src="@/assets/images/chengshu.png" @click="chengshu" />
    </div>
    <div class="cu-progress">
      <div class="bg-color" :style="{ width: progress + '%'}"></div>
    </div>
    <div class="sign-btn">
      <img src="@/assets/images/qiandao@3x.png" @click="qiandao" v-if="showSign" />
    </div>
    <div class="sign-mingtian-btn acea-row row-center-wrapper" v-if="!showSign">
      <div class="text">明日签到，可获得20滴水</div>
    </div>
    <div class="jiaoshui" :class="active === true ? 'on' : ''">
      <div class="pictrue">
        <img src="@/assets/images/shuihu@3x.png" />
      </div>
    </div>
    <div class="shui" :class="active === true ? 'on' : ''">
      <img src="@/assets/images/shui@3x.png" />
    </div>
    <upgrade-window v-model="showUpgradeWindow" :upgrage="upgrage" />
    <new-sign-window v-model="showNewSignWindow" :sign="sign" @onSign="onSign" />
    <select-fruit-window v-model="showSelectFruitWindow" />
    <task-window v-model="showTaskWindow" />
    <mature-window v-model="showMatureWindow" />
    <seven-day-window v-model="showSevenDayWindow" :sevenDay="sevenDay" />
  </div>
</template>
<script>
import UpgradeWindow from "@/components/UpgradeWindow";
import NewSignWindow from "@/components/NewSignWindow";
import SelectFruitWindow from "@/components/SelectFruitWindow";
import TaskWindow from "@/components/TaskWindow";
import MatureWindow from "@/components/MatureWindow";
import SevenDayWindow from "@/components/SevenDayWindow";
import cookie from "../../utils/cookie";
import { userWaterInfo } from "../../api/home";
export default {
  components: {
    UpgradeWindow,
    NewSignWindow,
    SelectFruitWindow,
    TaskWindow,
    MatureWindow,
    SevenDayWindow
  },
  data: function() {
    return {
      active: false,
      progress: 10,
      showUpgradeWindow: false,
      showNewSignWindow: false,
      showTaskWindow: false,
      showSelectFruitWindow: false,
      showMatureWindow: false,
      showSevenDayWindow: false,
      showSign: true,
      waterNumber: 0,
      ratio: "0%",
      leve: 1,
      sign: {
        one: 15,
        two: 30,
        three: 15,
        four: 15,
        five: 15,
        six: 15
      },
      upgrage: {
        water: 50,
        full: 50,
        price: 20
      },
      sevenDay: {
        water: 50,
        full: 50,
        price: 20
      }
    };
  },
  mounted: function() {
    this.initPage();
  },
  methods: {
    initPage: function() {
      let that = this;
      userWaterInfo().then(
        res => {
          switch (res.type) {
            case 0:
              that.showSelectFruitWindow = true;
              break;
            case 1:
              that.waterNumber = res.data.waterNumber;
              that.ratio = res.data.ratio;
          } 
        },
        error => {
          that.$dialog.error(error.msg);
        }
      );
    },
    jiaoshui: function() {
      this.active = true;
      this.progress += 10;
      if (this.progress === 100) {
        this.showUpgradeWindow = true;
        this.progress = 0;
        this.leve += 1;
      }
      setTimeout(() => {
        this.active = false;
      }, 1000);
    },
    renwu: function() {
      this.showTaskWindow = true;
    },
    qiandao: function() {
      this.showNewSignWindow = true;
    },

    onSign: function() {
      this.showSign = false;
    },
    chengshu: function() {
      this.showMatureWindow = true;
    },

    createSign: function() {}
  }
};
</script>