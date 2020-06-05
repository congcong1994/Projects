// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

import "./assets/vant.css";

import Vant from "vant";
import "vant/lib/index.css";

import VideoPlayer from "vue-video-player";

import vueSignature from "vue-signature";
import store from "./utils/store";
require("vue-video-player/node_modules/video.js/dist/video-js.css");
require("vue-video-player/src/custom-theme.css");

Vue.config.productionTip = false;
Vue.use(Vant);

Vue.use(VideoPlayer);

Vue.use(vueSignature);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  store
});
