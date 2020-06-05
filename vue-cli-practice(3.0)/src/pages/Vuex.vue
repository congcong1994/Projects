<template> <button @click="clickBtn()">点击</button></template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    clickBtn() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    }
  }
};
</script>
