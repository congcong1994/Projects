<template>
  <van-nav-bar
    :title="$route.meta.title"
    :left-arrow="$route.meta.isShowLeftNarrow"
    @click-left="clickBackBtn()"
    @click-right="clickHomeBtn()"
  >
    <template slot="right" v-if="$route.meta.isShowHomeIcon">
      <van-icon name="home-o" />
    </template>
  </van-nav-bar>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    clickBackBtn() {
      this.$router.go(-1);
    },
    clickHomeBtn() {
      this.$router.push("/");
    }
  }
};
</script>
