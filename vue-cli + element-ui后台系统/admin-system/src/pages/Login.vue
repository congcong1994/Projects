<template>
  <div class="login-page">
    <el-form>
      <div class="login-title">后台管理系统</div>
      <el-form-item>
        <el-input
          v-model="userName"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="userPassword"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="clickLoginBtn()"
        >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        userName: '',
        userPassword: ''
      };
    },
    created() {},
    methods: {
      clickLoginBtn() {
        this.$router.push('/');
      }
    }
  };

</script>
