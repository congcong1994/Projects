<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">权限管理</span>
        </template>
        <el-menu-item-group>
          <span slot="title">菜单管理</span>
        </el-menu-item-group>
        <el-menu-item-group>
          <span slot="title">角色管理</span>
        </el-menu-item-group>
        <el-menu-item-group>
          <span slot="title">部门管理</span>
        </el-menu-item-group>
        <el-menu-item-group>
          <span slot="title">功能权限管理</span>
        </el-menu-item-group>
        <el-menu-item-group>
          <span slot="title">用户管理</span>
        </el-menu-item-group>
        <el-menu-item-group>
          <span slot="title">角色权限管理</span>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">体检预约</span>
        </template>
        <el-menu-item-group>
          <span slot="title">体检机构预约管理</span>
        </el-menu-item-group>
        <el-menu-item-group>
          <span slot="title">公立医院预约管理</span>
        </el-menu-item-group>
        <el-menu-item-group>
          <span slot="title">体检预约查询</span>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">体检短信管理</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">套餐管理</span>
        </template>
        <el-menu-item-group>
          <span slot="title">套餐管理</span>
        </el-menu-item-group>
        <el-menu-item-group>
          <span slot="title">子套餐管理</span>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="5">
        <i class="el-icon-document"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-document"></i>
        <span slot="title">体检卡管理</span>
      </el-menu-item>
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">基础信息维护</span>
        </template>
        <el-menu-item-group>
          <span slot="title">套餐项目库信息维护</span>
        </el-menu-item-group>
        <el-menu-item-group>
          <span slot="title">企业信息维护</span>
        </el-menu-item-group>
        <el-menu-item-group>
          <span slot="title">体检机构维护</span>
        </el-menu-item-group>
        <el-menu-item-group>
          <span slot="title">体检分支机构维护</span>
        </el-menu-item-group>
        <el-menu-item-group>
          <span slot="title">预约排期管理</span>
        </el-menu-item-group>
        <el-menu-item-group>
          <span slot="title">健康小知识管理</span>
        </el-menu-item-group>
        <el-menu-item-group>
          <span slot="title">体检问候语管理</span>
        </el-menu-item-group>
        <el-menu-item-group>
          <span slot="title">预约提示信息管理</span>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
