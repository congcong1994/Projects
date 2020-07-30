<template>
  <div>
    <div class="choose-item-box">
      已选中：
    </div>
    <van-tree-select
      :height="'auto'"
      :max="5"
      :items="items"
      :active-id.sync="activeTreeSelectIds"
      :main-active-index.sync="activeTreeSelect"
    >
      <template #content>
        <van-collapse v-model="activeName" accordion>
          <van-collapse-item
            v-for="val in items[activeTreeSelect]"
            :key="val.parentId"
            :title="val.text"
            :name="val.id"
          >
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </van-collapse-item>
          <!-- <van-collapse-item title="标题12" name="2">内容</van-collapse-item>
          <van-collapse-item title="标题13" name="3">内容</van-collapse-item> -->
        </van-collapse>
      </template>
    </van-tree-select>
  </div>
</template>
<script>
import { getJobIndustry } from "../api/api";
export default {
  // beforeRouteEnter(to, from, next) {
  //   next(async vm => {
  //     var val = await vm.initItems();
  //     // console.log(val);
  //     vm.items = vm.FormatFun.formatTreeSelectData(val);
  //     console.log(vm.activeTreeSelect);
  //     console.log(vm.items.length);
  //     vm.rightPanelItems = vm.items[vm.activeTreeSelect];
  //     console.log(vm.rightPanelItems);
  //     // console.log("before:   " + JSON.stringify(vm.items));
  //     next();
  //   });
  // },
  data() {
    return {
      activeTreeSelect: 0,
      activeTreeSelectIds: [],
      activeName: "1",
      activeName1: "2",
      items: [],
      rightPanelItems: []
    };
  },
  created() {
    // console.log("create:     " + this.items);
    getJobIndustry({
      typename: "Trade",
      parentid: 0,
      iscach: 0
    }).then(
      function(res) {
        this.items = this.formatTreeSelectData(res.data.Data);
        console.log(this.items.length);
        this.rightPanelItems = this.items[this.activeTreeSelect];
      }.bind(this)
    );
  },
  methods: {
    initItems() {
      return new Promise(resolve => {
        getJobIndustry({
          typename: "Trade",
          parentid: 0,
          iscach: 0
        }).then(res => {
          if (res.data.Code == 1) {
            resolve(res.data.Data);
          }
        });
      });
    },
    formatTreeSelectData(arr) {
      var self = this;
      console.log(arr);
      var newArr = [];
      var arrLen = arr.length;
      for (var i = 0; i < arrLen; i++) {
        (function(i) {
          var currentObj = arr[i];
          self
            .getChildrenIndustryList(currentObj.Code, currentObj.ChineseName)
            .then(val => {
              var obj = {
                text: currentObj.ChineseName,
                parentId: currentObj.Code,
                children: val
              };
              newArr.push(obj);
            });
        })(i);
      }
      return newArr;
    },
    getChildrenIndustryList(parentid, parentname) {
      var arr = [];
      return new Promise(resolve => {
        getJobIndustry({
          typename: "Trade",
          parentid: parentid,
          iscach: 0
        }).then(res => {
          var arr1 = res.data.Data;
          for (var i = 0; i < arr1.length; i++) {
            var obj = {
              text: arr1[i].ChineseName,
              id: arr1[i].Code,
              parentName: parentname,
              parentId: parentid,
              // 三级列表
              children: [
                {
                  id: arr1[i].Code + "1",
                  text: () => {
                    return "子分类" + this.id;
                  },
                  parentId: arr1[i].Code,
                  parentName: arr1[i].ChineseName
                },
                {
                  id: arr1[i].Code + "2",
                  text: () => {
                    return "子分类" + this.id;
                  },
                  parentId: arr1[i].Code,
                  parentName: arr1[i].ChineseName
                },
                {
                  id: arr1[i].Code + "3",
                  text: () => {
                    return "子分类" + this.id;
                  },
                  parentId: arr1[i].Code,
                  parentName: arr1[i].ChineseName
                }
              ]
            };
            arr.push(obj);
          }
          resolve(arr);
        });
      });
    }
  }
};
</script>
<style scoped>
.choose-item-box {
  min-height: 40px;
  padding: 15px;
  border-bottom: 1px solid #ccc;
}
</style>
