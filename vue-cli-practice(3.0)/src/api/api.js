// 项目接口
import myhttp from "../utils/http";

// 获取从事行业
export function getJobIndustry(query) {
  var result = myhttp.get("/api/Dict/getDic", query);
  return result;
}
