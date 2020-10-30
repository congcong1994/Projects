import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // 存储变量的仓库
  state: {
    // 侧边导航栏是否折叠，默认不折叠
    isShowCollapseSideBar: false,
    // 需要高亮显示的侧边栏index
    activeSideBarIndex: "0",
    // 头部面包屑展示名称及对应路由
    currentBreadCrumb: {
      pageName: "首页",
      pageRouter: "/"
    },
    // 面包屑下方展示的打开过的标签栏
    openedTagArray: [
      {
        routerName: "Index",
        tagName: "首页",
        isActive: true,
        routerUrl: "/"
      }
    ]
  },
  getters: {},
  // 修改数据仓库后的事件
  mutations: {
    // 切换侧边导航栏展开收起
    changeSideBarState(state, value) {
      state.isShowCollapseSideBar = value;
    },
    // 切换侧边导航栏高亮显示的index
    changeSideBarActiveIndex(state, value) {
      state.activeSideBarIndex = value;
    },
    // 切换头部面包屑展示名称
    changeBreadCrumbName(state, value) {
      state.currentBreadCrumb = value;
    },
    // 添加打开的页面标签栏
    updateOpenedTags(state, value) {
      var flag = false;
      for (var i = 0; i < state.openedTagArray.length; i++) {
        if (state.openedTagArray[i]["routerName"] == value.routerName) {
          flag = true;
          break;
        }
      }
      if (!flag) {
        state.openedTagArray.push(value);
      }
    },
    deleteOpenedTag(state, value) {
      var arrLenth = state.openedTagArray.length;
      for (var i = 0; i < arrLenth; i++) {
        if (value.routerName == state.openedTagArray[i]["routerName"]) {
          state.openedTagArray.splice(i, 1);
          break;
        }
      }
    }
  },
  // 推荐使用的异步修改数据仓库
  actions: {
    setSideBarState(context, value) {
      context.commit("changeSideBarState", value);
    },
    setSideBarActiveIndex(context, value) {
      context.commit("changeSideBarActiveIndex", value);
    },
    setBreadCrumbName(context, value) {
      context.commit("changeBreadCrumbName", value);
    },
    addOpenedTagsArray(context, value) {
      console.log(value);
      context.commit("updateOpenedTags", value);
    },
    deleteOpenedTagsArrary(context, value) {
      context.commit("deleteOpenedTag", value);
    }
  }
});
