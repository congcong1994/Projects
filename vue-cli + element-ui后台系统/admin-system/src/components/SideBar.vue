<template>
  <div :class="!isCollapse ? 'left-panel-wrapper' : 'mini-left-panel-wrapper'">
    <el-menu
      class="el-menu-vertical"
      :collapse="isCollapse"
      :unique-opened="isOneMenuOpen"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="$store.state.activeSideBarIndex"
    >
      <div class="user-info-wrapper">
        <div class="img-box">
          <img
            src="../assets/logo.png"
            alt=""
          />
        </div>
        <div class="drop-menu">
          <el-dropdown
            trigger="click"
            v-if="!isCollapse"
          >
            <span class="el-dropdown-link">
              超级管理员<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-edit-outline">修改密码
              </el-dropdown-item>
              <el-dropdown-item icon="el-icon-switch-button">安全退出
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-link"></i>
          <span>权限管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            index="1-1"
            @click="changeSideBar('MenuManagement','1-1')"
          >菜单管理</el-menu-item>
          <el-menu-item
            index="1-2"
            @click="changeSideBar('RoleManagement','1-2')"
          >角色管理</el-menu-item>
          <el-menu-item
            index="1-3"
            @click="changeSideBar('DepartmentManagement','1-3')"
          >部门管理</el-menu-item>
          <el-menu-item
            index="1-4"
            @click="changeSideBar('PermissionManagement','1-4')"
          >功能权限管理</el-menu-item>
          <el-menu-item
            index="1-5"
            @click="changeSideBar('UserManagement','1-5')"
          >用户管理</el-menu-item>
          <el-menu-item
            index="1-6"
            @click="changeSideBar('RolePermissionManagement','1-6')"
          >角色权限管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-chat-dot-round"></i>
          <span>体检预约</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">体检机构预约管理</el-menu-item>
          <el-menu-item index="2-2">公立医院预约管理</el-menu-item>
          <el-menu-item index="2-3">体检预约查询</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span>体检短信管理</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>套餐管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">套餐管理</el-menu-item>
          <el-menu-item index="4-2">子套餐管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="5">
        <i class="el-icon-s-order"></i>
        <span>订单管理</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-postcard"></i>
        <span>体检卡管理</span>
      </el-menu-item>
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-s-tools"></i>
          <span>基础信息维护</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="7-1">套餐项目库信息维护</el-menu-item>
          <el-menu-item index="7-2">企业信息维护</el-menu-item>
          <el-menu-item index="7-3">体检机构维护</el-menu-item>
          <el-menu-item index="7-4">体检分支机构维护</el-menu-item>
          <el-menu-item index="7-5">预约排期管理</el-menu-item>
          <el-menu-item index="7-6">健康小知识管理</el-menu-item>
          <el-menu-item index="7-7">体检问候语管理</el-menu-item>
          <el-menu-item index="7-8">预约提示信息管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>体检供应商</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="8-1">供应商预约管理</el-menu-item>
          <el-menu-item index="8-2">供应商取消预约</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="9">
        <template slot="title">
          <i class="el-icon-folder"></i>
          <span>文件信息查询</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="9-1">导出列表</el-menu-item>
          <el-menu-item index="9-2">导入列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="10">
        <template slot="title">
          <i class="el-icon-s-data"></i>
          <span>统计报表</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="10-1">优惠码统计</el-menu-item>
          <el-menu-item index="10-2">报告上传查询</el-menu-item>
          <el-menu-item index="10-3">电子发票导出列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isOneMenuOpen: true,
        isUseRouterMode: true
      };
    },
    computed: {
      isCollapse: {
        get: function () {
          return this.$store.state.isShowCollapseSideBar;
        },
        set: function (newValue) {
          this.$store.state.isShowCollapseSideBar = newValue;
        }
      }
    },
    methods: {
      changeSideBar(routerName, activeIndex) {
        var routesArray = this.$router.options.routes;
        var nextRouter = routesArray.filter(val => val.name == routerName)[0];
        this.$store.dispatch("setSideBarActiveIndex", activeIndex.toString());
        this.$store.dispatch("setBreadCrumbName", {
          pageName: nextRouter.pageName,
          pageRouter: nextRouter.path
        });
        console.log(nextRouter);
        this.$store.dispatch("addOpenedTagsArray", {
          routerName: nextRouter.name,
          tagName: nextRouter.pageName,
          isActive: true,
          routerUrl: nextRouter.path
        });
        this.$router.push(nextRouter.path);
      }
    }
  };

</script>
