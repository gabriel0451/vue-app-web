<template>
  <div class="water-drop">
    <yd-navbar title="水滴专区" fontsize="0.35rem">
      <router-link to="/" slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div class="banner acea-row row-center-wrapper">
      <div class="pictxt acea-row row-center-wrapper">
        <div class="txt">当前页面下单，即可领取50水滴</div>
        <div class="picture">
          <img src="../../assets/images/quwancheng.png" />
        </div>
      </div>
    </div>
    <yd-tab>
      <yd-tab-panel label="精选">
        <yd-list theme="1">
          <yd-list-item v-for="(item, key) in list" :key="key">
            <img slot="img" :src="item.img" />
            <span slot="title" style="font-size:0.23rem;font-weight:500;color:#333333;">{{item.title}}</span>
            <yd-list-other slot="other">
              <div>
                <span class="demo-list-price" style="color:red">
                  <em>¥</em>
                  {{item.price}}
                </span>
                <span class="demo-list-del-price" style="color:red;font-size:0.25rem">¥{{item.w_price}}</span>
              </div>
              <yd-icon name="shopcart" size="0.35rem" color="#FF685D"></yd-icon>
            </yd-list-other>
          </yd-list-item>
        </yd-list>
      </yd-tab-panel>
      <yd-tab-panel label="美食">211111</yd-tab-panel>
      <yd-tab-panel label="生活">311111</yd-tab-panel>
      <yd-tab-panel label="服饰">411111</yd-tab-panel>
      <yd-tab-panel label="手机">411111</yd-tab-panel>
    </yd-tab>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg",
          title: "标题111标题标题标题标题111111111",
          price: 156.23,
          w_price: 89.36
        },
        {
          img: "//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg",
          title: "标题222标题标题标题标题",
          price: 256.23,
          w_price: 89.36
        },
        {
          img: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg",
          title: "标题333标题标题标题标题",
          price: 356.23,
          w_price: 89.36
        },
        {
          img: "//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg",
          title: "标题444标题标题标题标题",
          price: 456.23,
          w_price: 89.36
        },
        {
          img: "//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg",
          title: "标题555标题标题标题标题",
          price: 556.23,
          w_price: 89.36
        },
        {
          img: "//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg",
          title: "标题666标题标题标题标题",
          price: 656.23,
          w_price: 89.36
        }
      ]
    };
  }
};
</script>
<style scoped>
</style>