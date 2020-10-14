<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <el-container>
      <el-aside width="200px">
        <side-bar></side-bar>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import sideBar from "./components/SideBar";
export default {
  name: "App",
  components: { sideBar }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
