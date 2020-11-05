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
        v-for="tag in tagsArray"
        :key="tag.routerName"
        :class="tag.isActive ? 'tag-item-active' : 'tag-item'"
        @click="changeCurrentRouter(tag)"
      >
        {{ tag.tagName}}<span
          v-if="tag.routerName != 'Index'"
          @click.stop="deleteCurrentTag(tag)"
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
      changeCurrentRouter(tag) {
        if (!tag.isActive) {
          this.$router.push(tag.routerUrl);
        }
        tag.isActive = true;
        this.$store.dispatch("addOpenedTagsArray", tag);
        this.$store.dispatch("setSideBarActiveIndex", tag.tagIndex);
      },
      deleteCurrentTag(tag) {
        this.$store.dispatch("deleteOpenedTagsArrary", tag);
      }
    }
  };

</script>
