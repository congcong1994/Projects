import { getJobIndustry } from "../api/api";

// 初始化vant-treeselect插件数据格式--行业
var formatTreeSelectData = function(arr) {
  console.log(arr);
  var newArr = [];
  var arrLen = arr.length;
  for (var i = 0; i < arrLen; i++) {
    (function(i) {
      var currentObj = arr[i];
      getChildrenIndustryList(currentObj.Code, currentObj.ChineseName).then(
        val => {
          var obj = {
            text: currentObj.ChineseName,
            parentId: currentObj.Code,
            children: val
          };
          newArr.push(obj);
        }
      );
    })(i);
  }
  return newArr;
};

var getChildrenIndustryList = function(parentid, parentname) {
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
};

export default {
  formatTreeSelectData
};
