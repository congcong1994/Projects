<template>
  <div class="canvas-test-wrapper">
    <div class="canvasBox">
      <div class="button-box">
        <button @click="save">保存</button>
        <button @click="clear">清除</button>
      </div>
      <div class="canvas-box">
        <vueSignature ref="signature" :sigOption="option"></vueSignature>
      </div>
    </div>
  </div>
</template>
<script>
import vueSignature from "vue-signature";
export default {
  components: {
    vueSignature
  },
  data() {
    return {
      option: {
        penColor: "#1989fa",
        backgroundColor: "#f5f5f5"
      }
    };
  },
  methods: {
    save() {
      var png = this.$refs.signature.save();
      // var jpeg = _this.$refs.signature.save("image/jpeg");
      console.log(png);
      // console.log(jpeg);
      // setTimeout(function() {
      //   // 安卓手机
      //   document.addEventListener(
      //     "WeixinJSBridgeReady",
      //     function() {
      //       WeixinJSBridge.call("closeWindow");
      //     },
      //     false
      //   );
      //   // ios手机
      //   WeixinJSBridge.call("closeWindow");
      // }, 100);
    },
    clear() {
      this.$refs.signature.clear();
    }
  }
};
</script>
<style scoped>
.canvas-test-wrapper {
  height: 100%;
}
.canvasBox {
  height: calc(100% - 46px);
}
.button-box {
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.button-box button {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 3px;
  color: #1989fa;
  appearance: none;
  font-size: 14px;
  padding: 0;
  width: 48px;
}
.button-box button:first-child {
  margin-right: 15px;
}
.canvas-box {
  height: calc(100% - 52px);
  width: 98vw;
  margin-left: 1vw;
  border-radius: 3px;
}
</style>
