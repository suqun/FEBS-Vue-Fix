const P_CONTEXT = 'common';

const EventType = {
  alert: 'alert',
  confirm: 'confirm',
  loading: 'loading'
};

const DATE_FORMAT = {
  datetime: "YYYY-MM-DD HH:mm:ss",
  date: "YYYY-MM-DD",
  time: "HH:mm:ss"
}
const CONST_TEXT = {
  perPageSize: '每页显示',
  noData: '当前暂无数据'
};

const STAFF_TYPE = [
  {
    name: '店长',
    val: 1
  },
  {
    name: '店员',
    val: 2
  }
];
const MODE = {
  list: 'list',
  edit: 'edit',
  editInfo: 'editInfo',
  editAdd: 'editAdd',
  add: 'add',
  info: 'info',
  view: 'view'
};
const LANG = {
  zh: 'zh',
  en: 'en'
};

const LANGS = [{
  title: '全部语言',
  val: ''
},
  {
    title: '中文',
    val: LANG.zh
  },
  {
    title: 'English',
    val: LANG.en
  }
];

const ROLE_TYPE = [{
  name: '平台级',
  val: 1
},
  {
    name: '用户级',
    val: 2
  }]
const USER_TYPE = [{
  name: '平台用户',
  val: 1
}, {
  name: '渠道商',
  val: 2
}]
const USER_STATUS = [
  {
    name: '全部状态',
    val: '',
  },
  {name: "禁用", val: 0},
  {name: "启用", val: 1},
  {
    name: "待审核",
    val: 2
  }/*,
  {name: "黑名单", val: 3}*/
];

const STATUS = [
  {
    name: "已启用",
    val: 1
  },
  {
    name: "已禁用",
    val: 2
  },
]

const MEDIA_STATUS = [
  {
    name: "未启用",
    val: 1
  },
  {
    name: "启用",
    val: 2
  },
]
const AD_STATUS = [
  {
    name: "草稿",
    val: 1
  },
  {
    name: "待审核",
    val: 2
  },
  {
    name: "启用",
    val: 3
  },
]
const LOCALPAGE_STATUS = [
  {
    name: "草稿",
    val: 1
  },
  {
    name: "启用",
    val: 2
  },
]
const MINI_TYPE = {
  image: ['png', 'jpg', 'jpeg', 'gif', 'bmp'],
  // video: ['.mp4', '.rmvb', '.mkv', '.wmv', '.flv'],
  video: ['mp4'],
  // document: ['xls', 'xlsx']
  // audio: ['mp3', 'wav', 'wma', 'ogg', 'aac', 'flac', 'm4a'],
  excel: {
    prefix: 'application',
    suffix: ['vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.ms-excel']
  },
  document: ['doc', 'txt', 'docx', 'pages', 'epub', 'pdf', 'numbers', 'csv', 'xls', 'xlsx', 'keynote', 'ppt', 'pptx']
};

const TinyMCEConfig = {
  toolbar: 'insertfile undo redo | styleselect | bold italic | fontsizeselect | forecolor backcolor | link image media | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | code | fullscreen',
  plugins: [
    'colorpicker textcolor advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table contextmenu paste'
  ]
};

const MCE_CONFIG = {
  paste_data_images: true,
  menubar: false,
  media_live_embeds: true,
  min_height: 300,
  language_url: `${process.env.NODE_ENV === 'production' ? '/' : '/'}static/tinymce/langs/zh_CN.js`,
  language: 'zh_CN',
  skin_url: `${process.env.NODE_ENV === 'production' ? '/' : '/'}static/tinymce/skins/ui/oxide`,
  content_css: `${process.env.NODE_ENV === 'production' ? '/' : '/'}static/tinymce/skins/content/default/content.css`,
  // language_url: `${process.env.NODE_ENV === 'production' ? '/manage/' : '/'}static/tinymce/langs/zh_CN.js`,
  // language: 'zh_CN',
  // skin_url: `${process.env.NODE_ENV === 'production' ? '/manage/' : '/'}static/tinymce/skins/ui/oxide`,
  // content_css: `${process.env.NODE_ENV === 'production' ? '/manage/' : '/'}static/tinymce/skins/content/default/content.css`,
  width: '100%',
  fontsize_formats: '8px 10px 12px 14px 18px 24px 36px 48px',
  branding: false,
  image_advtab: true,
  toolbar_items_size: 'small',
  toolbar1: TinyMCEConfig.toolbar,
  plugins: TinyMCEConfig.plugins,
  images_reuse_filename: true,
};

const DefaultImgs = {
  header: 'avatar.png',
  video: 'video.png'
};

const CYCLEITEMS = [{
  value: 1,
  name: "每天"
},
  {
    value: 2,
    name: "每周"
  },
  {
    value: 3,
    name: "每月"
  },
  {
    value: 4,
    name: "每年"
  }
];

// 开票搜索
const DATE_LIST = [{
  val: "0",
  name: "今天"
},
  {
    val: "1",
    name: "昨天"
  },
  {
    val: "7",
    name: "近7天"
  },
  {
    val: "30",
    name: "近30天"
  }
]
const ORDER_STATUS = [{
  name: "待付款",
  val: 100
},
  {
    name: "支付完成",
    val: 200
  },
  {
    name: "交易关闭",
    val: 300
  },
  {
    name: "订单完成",
    val: 400
  }
];

//卡券状态
const CARD_STAUTS = [
  {
    value: "100",
    text: "未领取"
  },
  {
    value: "200",
    text: "已领取"
  },
  {
    value: "300",
    text: "已使用"
  },
  {
    value: "999",
    text: "已作废"
  }
];

// 付款方式
const PATMANTTYPE = [{
  value: "1019",
  text: "微信扫码"
}, {
  value: "1029",
  text: "支付宝扫码"
}, {
  value: "2001",
  text: "微信APP支付"
}, {
  value: "3001",
  text: "H5支付宝支付"
}, {
  value: "5001",
  text: "H5银联去闪付"
}, {
  value: "6001",
  text: "H5微信支付"
}, {
  value: "4001",
  text: "PC在线"
}]

const FINANCE_TYPE = [
  {
    name: "收入",
    val: 0
  },
  {
    name: "支出",
    val: 1
  }
];
const GENDER = [
  {
    name: '未知',
    val: 0
  },
  {
    name: '男',
    val: 1
  },
  {
    name: '女',
    val: 2
  },
];
const MARRAY_STATUS = [
  {
    name: '未知',
    val: 0
  },
  {
    name: '已婚',
    val: 1
  },
  {
    name: '未婚',
    val: 2
  },
];
const DATE_DIMENSIONS = [
  {
    name: '曝光',
    val: 'cpm'
  },
  {
    name: '点击',
    val: 'cpc'
  },
  {
    name: '留电',
    val: 'cpa'
  },
  {
    name: '费用',
    val: 'fee'
  }];

const LOGICS = [
  {
    name: "且",
    val: "and"
  },
  {
    name: "或",
    val: "or"
  }
];
const TAG_VALUE_TYPE = [
  {
    name: 'Boolean',
    val: 1
  },
  {
    name: 'Int',
    val: 2
  },
  {
    name: 'Float',
    val: 3
  },
  {
    name: 'String',
    val: 4
  },
  {
    name: 'Date',
    val: 10
  },
  {
    name: '枚举',
    val: 5
  },
  // {
  //   name: '多枚举',
  //   val: 6
  // },
  {
    name: '自定义',
    val: 7
  },
  // {
  //   name: 'Vector',
  //   val: 8
  // },
  // {
  //   name: 'Map',
  //   val: 9
  // },
];
const OPERATORS = [
  {
    name: "等于",
    val: 1
  },
  {
    name: "不等于",
    val: 2
  },
  {
    name: "包含",
    val: 3
  },
  {
    name: "不包含",
    val: 4
  },
  {
    name: "有值",
    val: 5
  },
  {
    name: "无值",
    val: 6
  },
];

const VAL_OPRS = [
  {
    name: "等于",
    val: 1
  },
  {
    name: "不等于",
    val: 2
  },
  {
    name: "大于",
    val: 7
  },
  {
    name: "小于",
    val: 9
  },
  {
    name: "有值",
    val: 5
  },
  {
    name: "无值",
    val: 6
  },
];

const ID_OPRS = [
  {
    name: "包含于",
    val: 13
  },
  {
    name: "不包含于",
    val: 14
  }
];

const TYPE_OPRS = {
  '1': OPERATORS.slice(0, 1),
  '2': VAL_OPRS,
  '3': VAL_OPRS,
  '10': VAL_OPRS,
  '4': OPERATORS,
  '5': OPERATORS,
  '7': OPERATORS.slice(0, 1),
  'source': ID_OPRS
};

//分群洞察状态
const INSIGHT_STATUS = [
  {
    name: "分析中",
    val: '0'
  },
  {
    name: "已成功",
    val: '1'
  },
  {
    name: "计算失败",
    val: '2'
  }
];

const UPDATE_WAYS = [
  {
    name: "手动",
    val: 1
  },
  {
    name: "自动",
    val: 2
  }
];

const FREQUENCYS  = [
  {
    name: "每天一次",
    val: 1
  },
  {
    name: "每周一次",
    val: 2
  },
  {
    name: "每月一次",
    val: 3
  }
];

// const IMPORT_TYPE = {
//   'white': {
//     key: "cdp_user",
//     title: "白户",
//     url: "/v1/cms/users/import",
//     downLink: "/static/files/原圈导入白户模板.xlsx",
//   },
//   'external': {
//     key: "external",
//     title: "外部扩展标签",
//     url: "/v1/cms/user-tag/import",
//     downLink: "/static/files/原圈扩标模板.xlsx",
//   },
// };
export {
  GENDER,
  MARRAY_STATUS,
  P_CONTEXT,
  EventType,
  CONST_TEXT,
  LANG,
  MODE,
  LANGS,
  USER_STATUS,
  USER_TYPE,
  MCE_CONFIG,
  DefaultImgs,
  ROLE_TYPE,
  MINI_TYPE,
  CYCLEITEMS,
  DATE_LIST,
  ORDER_STATUS,
  PATMANTTYPE,
  CARD_STAUTS,
  STAFF_TYPE,
  STATUS,
  LOCALPAGE_STATUS,
  AD_STATUS,
  FINANCE_TYPE,
  TAG_VALUE_TYPE,
  DATE_FORMAT,
  MEDIA_STATUS,
  DATE_DIMENSIONS,
  LOGICS,
  TYPE_OPRS,
  UPDATE_WAYS,
  FREQUENCYS,
  IMPORT_TYPE,
  INSIGHT_STATUS
}
