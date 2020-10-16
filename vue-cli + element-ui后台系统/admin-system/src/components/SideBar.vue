<template>
  <div class="left-panel-wrapper">
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      :unique-opened="isOneMenuOpen"
    >
      <div class="user-info-wrapper">
        <div class="img-box">
          <img src="../assets/logo.png" alt="" />
        </div>
        <div class="drop-menu">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              超级管理员<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-edit-outline"
                >修改密码</el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-switch-button"
                >安全退出</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-link"></i>
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
          <i class="el-icon-chat-dot-round"></i>
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
        <i class="el-icon-s-order"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-postcard"></i>
        <span slot="title">体检卡管理</span>
      </el-menu-item>
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-s-tools"></i>
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
      <el-submenu index="8">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span slot="title">体检供应商</span>
        </template>
        <el-menu-item-group>
          <span slot="title">供应商预约管理</span>
        </el-menu-item-group>
        <el-menu-item-group>
          <span slot="title">供应商取消预约</span>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="9">
        <template slot="title">
          <i class="el-icon-folder"></i>
          <span slot="title">文件信息查询</span>
        </template>
        <el-menu-item-group>
          <span slot="title">导出列表</span>
        </el-menu-item-group>
        <el-menu-item-group>
          <span slot="title">导入列表</span>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="10">
        <template slot="title">
          <i class="el-icon-s-data"></i>
          <span slot="title">统计报表</span>
        </template>
        <el-menu-item-group>
          <span slot="title">优惠码统计</span>
        </el-menu-item-group>
        <el-menu-item-group>
          <span slot="title">报告上传查询</span>
        </el-menu-item-group>
        <el-menu-item-group>
          <span slot="title">电子发票导出列表</span>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false,
      isOneMenuOpen: true
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
