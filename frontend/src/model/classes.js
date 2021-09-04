import {Datasourcervice} from "@/api/datasource-service";
// let datasourceMap = new Map();
let datasourceService = new Datasourcervice();

class ConditionObject {
  operator = 1;
  tagId = '';
  tagType = 1;
  values = '';
  enums = [];
  source = '';
  datasourceManageId = null;
  containsParams = false;
  datasource = [];


  constructor(tagId, enums = []) {
    this.tagId = tagId;
    this.enums = enums;
  }

  setTagType(t) {
    this.tagType = t;
  }

  setVal(tagType) {
    if (tagType == 2) {
      this.values = 0;
    } else if (tagType == 3) {
      this.values = '0.00';
    } else {
      this.values = '';
    }
  }

  setEnums(enums) {
    this.enums = enums;
  }

  setSource(source) {
    this.source = source;
    if (source == 'ID标识') {
      this.operator = 13;
    } else {
      this.operator = 1;
    }
  }

  setDatasource(datasource) {
    this.datasource = datasource;
  }

  async loadDatasource(params = []) {
    if (this.datasourceManageId) {
      let datasource = await datasourceService.getDatasource({
        id: this.datasourceManageId,
        params: params
      });
      if (datasource) {
        this.setDatasource(datasource);
      }

      /* if (datasourceMap.has(this.datasourceManageId)) {//缓存处理
         source = datasourceMap.get(this.datasourceManageId);
       } else {
         //此处留给扩展,如果其他con里面有了token值,要从函数里面传入,然后传给后端取查询
         //就是有省的表单选择了浙江,或者上海,要把浙江或者上海的id传入进来去查询
         let datasource = await datasourceService.getDatasource({
           id: this.datasourceManageId
         });
         if (datasource) {
           source = datasource;
           datasourceMap.set(this.datasourceManageId, source);
         }
       }
       this.setDatasource(source);*/
    }

  }

  async dealConData(res) {
    //datasource 优先级高于 dataType=5的枚举
    if (res.dataSourceManageId) {//如果设置了datasource则去查询datasource
      this.datasourceManageId = res.dataSourceManageId;
      this.containsParams = !!res.containsParams;
      // console.log("setting con:", this);
      if (!this.containsParams) {
        await this.loadDatasource();
      }
    } else if (res.dataType === 5) {
      this.setEnums(res.enumGroupOutput ? res.enumGroupOutput.enumList : []);
    }

    this.setTagType(res.dataType);
    this.setSource(res.source);
    this.setVal(res.dataType);
  }
}

export {
  ConditionObject
}
