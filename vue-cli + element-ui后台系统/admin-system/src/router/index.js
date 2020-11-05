import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      pageName: "首页",
      component: () => import("../components/HelloWorld.vue"),
      meta: {
        isShowHeader: true,
        isShowSideBar: true,
        isShowMain: true
      }
    },
    {
      path: "/login",
      name: "Login",
      pageName: "登录",
      component: () => import("../pages/Login.vue"),
      meta: {
        isShowHeader: false,
        isShowSideBar: false,
        isShowMain: true
      }
    },
    {
      path: "/menuManagement",
      name: "MenuManagement",
      pageName: "菜单管理",
      component: () => import("../pages/PropertyManagement/MenuManagement.vue"),
      meta: {
        isShowHeader: true,
        isShowSideBar: true,
        isShowMain: true
      }
    },
    {
      path: "/roleManagement",
      name: "RoleManagement",
      pageName: "角色管理",
      component: () => import("../pages/PropertyManagement/RoleManagement.vue"),
      meta: {
        isShowHeader: true,
        isShowSideBar: true,
        isShowMain: true
      }
    },
    {
      path: "/departmentManagement",
      name: "DepartmentManagement",
      pageName: "部门管理",
      component: () =>
        import("../pages/PropertyManagement/DepartmentManagement.vue"),
      meta: {
        isShowHeader: true,
        isShowSideBar: true,
        isShowMain: true
      }
    },
    {
      path: "/permissionManagement",
      name: "PermissionManagement",
      pageName: "功能权限管理",
      component: () =>
        import("../pages/PropertyManagement/PermissionManagement.vue"),
      meta: {
        isShowHeader: true,
        isShowSideBar: true,
        isShowMain: true
      }
    },
    {
      path: "/userManagement",
      name: "UserManagement",
      pageName: "用户管理",
      component: () => import("../pages/PropertyManagement/UserManagement.vue"),
      meta: {
        isShowHeader: true,
        isShowSideBar: true,
        isShowMain: true
      }
    },
    {
      path: "/rolePermissionManagement",
      name: "RolePermissionManagement",
      pageName: "角色权限管理",
      component: () =>
        import("../pages/PropertyManagement/RolePermissionManagement.vue"),
      meta: {
        isShowHeader: true,
        isShowSideBar: true,
        isShowMain: true
      }
    }
  ]
});
