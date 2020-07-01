import Vue from "vue";
import Router from "vue-router";
import Header from "@/components/Header";
import Index from "@/pages/Index";
import Calendar from "@/pages/Calendar";
import Uploader from "@/pages/Uploader";
import Video from "@/pages/Video";
import Canvas from "@/pages/Canvas";
import Vuex from "@/pages/Vuex";
import VantCalendar from "@/pages/VantCalendar";
import VCharts from "@/pages/VCharts";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      components: {
        headerPart: Header,
        contentPart: Index
      },
      meta: {
        title: "首页",
        isShowLeftNarrow: false,
        isShowHomeIcon: false
      }
    },
    {
      path: "/calendar",
      name: "Calendar",
      components: {
        headerPart: Header,
        contentPart: Calendar
      },
      meta: {
        title: "vue第三方日历插件",
        isShowLeftNarrow: true,
        isShowHomeIcon: true
      }
    },
    {
      path: "/uploader",
      name: "Uploader",
      components: {
        headerPart: Header,
        contentPart: Uploader
      },
      meta: {
        title: "vant图片上传组件",
        isShowLeftNarrow: true,
        isShowHomeIcon: true
      }
    },
    {
      path: "/video",
      name: "Video",
      components: {
        headerPart: Header,
        contentPart: Video
      },
      meta: {
        title: "vue-video插件",
        isShowLeftNarrow: true,
        isShowHomeIcon: true
      }
    },
    {
      path: "/canvas",
      name: "Canvas",
      components: {
        headerPart: Header,
        contentPart: Canvas
      },
      meta: {
        title: "vue-signature移动端签名",
        isShowLeftNarrow: true,
        isShowHomeIcon: true
      }
    },
    {
      path: "/vuex",
      name: "Vuex",
      components: {
        headerPart: Header,
        contentPart: Vuex
      },
      meta: {
        title: "vuex入门demo",
        isShowLeftNarrow: true,
        isShowHomeIcon: true
      }
    },
    {
      path: "/vant",
      name: "VantCalendar",
      components: {
        headerPart: Header,
        contentPart: VantCalendar
      },
      meta: {
        title: "vant日历demo",
        isShowLeftNarrow: true,
        isShowHomeIcon: true
      }
    },
    {
      path: "/vcharts",
      name: "VCharts",
      components: {
        headerPart: Header,
        contentPart: VCharts
      },
      meta: {
        title: "v-charts图表",
        isShowLeftNarrow: true,
        isShowHomeIcon: true
      }
    }
  ]
});
