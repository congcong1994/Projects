<template>
  <div>
    <div v-if="showImgArr.length > 0">
      <div v-for="(img,index) in showImgArr" :key="index">
        <img :src="img.content" alt @click="previewCurrentImg(index)">
        <van-icon name="delete" @click="delCurrentImg(index)"/>
      </div>
    </div>
    <van-uploader :after-read="onRead" accept="image/*" :max-size="5242880" @oversize="overSizeFun">
      <van-icon name="photograph"/>
    </van-uploader>
  </div>
</template>
<script>
import { ImagePreview } from "vant";
export default {
  data() {
    return {
      showImgArr: [],
      previewImgArr: []
    };
  },
  created() {},
  methods: {
    onRead: function(file) {
      console.log(file);
      this.showImgArr.push(file);
      this.previewImgArr.push(file);
    },
    overSizeFun: function(file) {
      alert("图片过大！");
      return;
    },
    delCurrentImg: function(index) {
      this.showImgArr.splice(index, 1);
      this.previewImgArr.splice(index, 1);
    },
    previewCurrentImg: function(index) {
      ImagePreview({
        images: [this.previewImgArr[index].content],
        showIndex: false,
        loop: false
      });
    }
  }
};
</script>
<style scoped>
img {
  width: 200px;
  height: 150px;
}
</style>
