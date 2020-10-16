<template>
  <div class="header-wrapper">
    <div class="title-box">
      <i class="el-icon-d-arrow-left"></i>
      <div class="nav-box">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }"
            >体检后台管理系统</el-breadcrumb-item
          >
          <el-breadcrumb-item>首页</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {}
};
</script>
