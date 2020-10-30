<template>
  <div id="app">
    <el-container>
      <el-aside
        :class="!isCollapse ? 'full-aside' : 'mini-aside'"
        v-if="this.$route.meta.isShowSideBar"
      >
        <side-bar></side-bar>
      </el-aside>
      <el-container>
        <el-header v-if="this.$route.meta.isShowHeader">
          <header-bar></header-bar>
        </el-header>
        <el-main v-if="this.$route.meta.isShowMain">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import sideBar from "./components/SideBar";
  import headerBar from "./components/HeaderBar";
  export default {
    name: "App",
    computed: {
      isCollapse: {
        get: function () {
          return this.$store.state.isShowCollapseSideBar;
        },
        set: function (newValue) {
          this.$store.state.isShowCollapseSideBar = newValue;
        }
      }
    },
    components: {
      sideBar,
      headerBar
    }
  };

</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    overflow-x: hidden;
  }

</style>
