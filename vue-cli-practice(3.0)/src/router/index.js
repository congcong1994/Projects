import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";

import Calendar from "@/components/Calendar";
import Uploader from "@/components/Uploader";
import Video from "@/components/Video";
import Canvas from "@/components/Canvas";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/calendar",
      name: "Calendar",
      component: Calendar
    },
    {
      path: "/uploader",
      name: "Uploader",
      component: Uploader
    },
    {
      path: "/video",
      name: "Video",
      component: Video
    },
    {
      path: "/canvas",
      name: "Canvas",
      component: Canvas
    }
  ]
});
