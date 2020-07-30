// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

import "./assets/vant.css";

import Vant from "vant";
import "vant/lib/index.css";

import store from "./utils/store";

import FormatFun from "./utils/format";

Vue.config.productionTip = false;
Vue.prototype.FormatFun = FormatFun;
Vue.use(Vant);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  store
});
