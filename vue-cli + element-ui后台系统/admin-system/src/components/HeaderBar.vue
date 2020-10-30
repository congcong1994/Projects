<template>
  <div class="header-wrapper">
    <div class="title-box">
      <i
        :class="!$store.state.isShowCollapseSideBar ? 'el-icon-d-arrow-left' : 'el-icon-d-arrow-right'"
        @click="changeSideBarState()"
      ></i>
      <div class="nav-box">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item><span @click="toIndexPage()">体检后台管理系统</span>
          </el-breadcrumb-item>
          <el-breadcrumb-item :to="$store.state.currentBreadCrumb.pageRouter">
            {{ $store.state.currentBreadCrumb.pageName }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="tags-box">
      <div
        class="tag-item"
        v-for="tag in tagsArray"
        :key="tag.routerName"
      >
        {{ tag.tagName}}<span
          v-if="tag.routerName != 'Index'"
          @click="deleteCurrentTag(tag)"
        >×</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    computed: {
      tagsArray: {
        get: function () {
          console.log(this.$store.state.openedTagArray);
          return this.$store.state.openedTagArray;
        },
        set: function (newValue) {
          this.$store.state.openedTagArray = newValue;
        }
      }
    },
    created() {},
    methods: {
      changeSideBarState() {
        this.$store.dispatch("setSideBarState", !this.$store.state
          .isShowCollapseSideBar);
      },
      toIndexPage() {
        if (this.$route.path == "/") {
          return;
        }
        this.$store.dispatch("setSideBarActiveIndex", '0');
        this.$store.dispatch("setBreadCrumbName", {
          pageName: "首页",
          pageRouter: "/"
        });
        this.$router.push('/');
      },
      deleteCurrentTag(tag) {
        this.$store.dispatch("deleteOpenedTagsArrary", tag);
      }
    }
  };

</script>
