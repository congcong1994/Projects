<template>
  <div class="hello">
    <h3>各插件demo地址</h3>
    <ul>
      <li>
        <a href="javascript:" @click="turnToPage('/calendar')">
          日历
        </a>
      </li>
      <li>
        <a href="javascript:" @click="turnToPage('/uploader')">
          上传图片+图片预览
        </a>
      </li>
      <li>
        <a href="javascript:" @click="turnToPage('/canvas')">
          canvas画布签名
        </a>
      </li>
      <li>
        <a href="javascript:" @click="turnToPage('/vuex')">
          vuex入门接触
        </a>
      </li>
      <li>
        <a href="javascript:" @click="turnToPage('/vant')">
          vant组件
        </a>
      </li>
      <li>
        <a href="javascript:" @click="turnToPage('/vcharts')">
          v-charts图表
        </a>
      </li>
      <li>
        <a href="javascript:" @click="turnToPage('/vantTreeSelect')">
          vant分类选择
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    turnToPage(str) {
      this.$router.push(str);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
  width: 200px;
  margin: 20px auto 0;
}
li {
  margin: 20px 0;
}
a {
  color: #42b983;
}
</style>
