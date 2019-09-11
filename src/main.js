import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import YDUI from 'vue-ydui'
import dialog from './utils/dialog';
import 'vue-ydui/dist/ydui.rem.css';
import "@/assets/css/base.css";
import "@/assets/css/reset.css";
import "@/assets/css/style.css";
import "@/assets/js/media_750";
import { parseQuery } from "./utils/index";
import cookie from "./utils/cookie";
Vue.use(YDUI);
Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV !== "production";
Vue.prototype.$dialog = dialog;
var urlToken = parseQuery()["token"];

if (urlToken !== undefined) {
  cookie.set("token", urlToken);
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
//token
// eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI1ZDc1YThiNjc0ZDU4OS40MjMwMzMwNyIsImlhdCI6MTU2Nzk5MTk5MCwiZXhwIjoxNTc1NzY3OTkwLCJtaWQiOjYyMTJ9.Ih-Fj_JDvuSu-Ub2QqaHhll5xF7fBWWsgOc2H0CG9EOKEk4zGdFRwPg6uV-6YMQu554KPdYzT2EG4VoCaMXEclZ5bsIttGO0AocdAEebVvpZCeXiMQdIQ5pxTMa675njKrrsr7DfsIludlbK4usqKRMnpiJaRPnuGXSQkpQotB8