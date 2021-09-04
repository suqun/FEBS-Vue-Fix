// import {
//   Events
// } from './events';
// import {
//   EventType,
//   LANG,
//   P_CONTEXT,
//   DefaultImgs
// } from '@/model/model-types';
// import _ from 'lodash';
// import ls from './local-storage';
// import AWN from 'awesome-notifications'
// import store from '../store/index'
// import {
//   MUTATIONS
// } from '@/model/actions';
// import Cookies from './cookies';
// import $ from 'n-zepto';
//
// const ENV = process.env;
// const notify = new AWN({
//   position: 'top-right',
//   durations: {
//     global: 1600
//   },
//   maxNotifications: 1,
//   labels: {
//     info: '消息',
//     success: '消息',
//     warning: '警告',
//     alert: '错误'
//   },
//   icons: {
//     prefix: "<i class='v-icon notranslate material-icons' style='font-size: 48px'>",
//     suffix: "</i>",
//     success: "check_circle",
//     info: "info",
//     warning: "warning",
//     alert: "error"
//   }
// });
// let FLAT_MENUS = [];
//
// class Msg {
//   static showLoading() {
//     Events.$emit(EventType.loading, true);
//   }
//
//   static hideLoading() {
//     Events.$emit(EventType.loading, false);
//   }
//
//   static alert(msg, func = () => {
//   }) {
//     let params = {
//       dialog: true,
//       msg,
//       func
//     };
//     Events.$emit(EventType.alert, params);
//   }
//
//   static confirm(msg, sureFunc = () => {
//   }, cancelFunc = () => {
//   }, persistent) {
//     let params = {
//       dialog: true,
//       msg,
//       sureFunc,
//       cancelFunc,
//       persistent
//     };
//     Events.$emit(EventType.confirm, params);
//   }
//
//   static info(message) {
//     notify.info(message);
//   }
//
//   static success(message) {
//     notify.success(message);
//   }
//
//   static warn(message) {
//     notify.warning(message);
//   }
//
//   static error(message) {
//     notify.alert(message);
//   }
// }
//
// class Tools {
//   static debounce(func, wait, immediate) {
//     let timeout;
//
//     return function executedFunction() {
//       let context = this;
//       let args = arguments;
//
//       let later = function () {
//         timeout = null;
//         if (!immediate) func.apply(context, args);
//       };
//
//       let callNow = immediate && !timeout;
//
//       clearTimeout(timeout);
//
//       timeout = setTimeout(later, wait);
//
//       if (callNow) func.apply(context, args);
//     };
//   }
//
//   static getUUID() {
//     let s = [];
//     let hexDigits = "0123456789abcdef";
//     for (let i = 0; i < 36; i++) {
//       s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
//     }
//     s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
//     s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
//     s[8] = s[13] = s[18] = s[23] = "-";
//
//     let uuid = s.join("");
//     return uuid;
//   }
//
//   static importAll(r, func = () => {
//   }) {
//     r.keys().forEach(key => {
//       const mod = r(key);
//       func(mod.__esModule && mod.default ? mod.default : mod);
//     });
//   }
//
//   static isProd() {
//     return ENV.NODE_ENV === 'production';
//   }
//
//   static title(titleText) {
//     const processTitle = process.env.VUE_APP_TITLE
//     window.document.title = `${processTitle}${titleText ? ` | ${titleText}` : ''}`
//   }
//
//   static lazyRender(func, delay = 100) {
//     setTimeout(func, delay);
//   }
//
//   static changePaginationSort(obj, pagination) {
//     if (!obj.sort) {
//       return;
//     }
//     let column = obj.value;
//     if (pagination.sortBy === column) {
//       pagination.descending = !pagination.descending
//     } else {
//       pagination.sortBy = column;
//       pagination.descending = false
//     }
//   }
//
//   static getUser() {
//     let uuid = Cookies.get('uuid');
//     return uuid ? ls.get(ENV.VUE_APP_PREFIX).sys.user[uuid].user : null;
//   }
//
//   static getCustomerId() {
//     let user = Tools.getUser();
//     console.log(user);
//     if (user && user.curCustomer) {
//       return user.curCustomer.id;
//     }
//     return "";
//   }
//
//   static hasRight(right) {
//     let user = Tools.getUser();
//     if (!user) return false;
//     let flag = false;
//     if (user.loginId === "18000000000") {
//       flag = true
//     }
//     let regionId = null,
//       rightArr = null;
//     user.rolesRegion.forEach(item => {
//       if (item.curRole) {
//         regionId = item.roleId;
//         let rightJson = item.rightJson ? JSON.parse(item.rightJson) : '';
//         rightArr = rightJson.rights
//       }
//     });
//     return {
//       regionId: regionId,
//       right: flag ? flag : Tools.checkRight(right, rightArr)
//     };
//   }
//
//   static getDictValByKey(list,key){
//     let dict = list.find(item=>{
//       return item.dictKey === key;
//     });
//     return dict || {};
//   }
//
//   static hasRightExAdmin(right) {
//     let user = Tools.getUser();
//     if (!user) return false;
//     return Tools.checkRight(right, user ? user.rights : []);
//   }
//
//   static checkRight(right, userRights) {
//     if (typeof right === "string") {
//       return _.includes(userRights, right);
//     }
//
//     if (typeof right === "object") {
//       let hasRight = false;
//       _.forEach(right, (itemRight) => {
//         if (_.includes(userRights, itemRight)) {
//           hasRight = true;
//         }
//       });
//       return hasRight;
//     }
//     return false;
//   }
//
//   static isAdmin() {
//     let user = Tools.getUser();
//     if (!user) return false;
//     return user.loginId === "admin";
//   }
//
//   static getLang() {
//     return store.state[P_CONTEXT].lang.lang;
//   }
//
//   static getShopCode() {
//     let user = Tools.getUser();
//
//     return user ? user.TenantId.split("|")[1] : '';
//   }
//
//   static loadUser() {
//     return store.dispatch(`${P_CONTEXT}/user/loadUser`);
//   }
//
//   static logout() {
//     store.commit(`${P_CONTEXT}/user/logout`);
//     store.commit(`${P_CONTEXT}/page/clear`);
//     FLAT_MENUS = [];
//   }
//
//   static changeUnreadNum(num) {
//     store.commit(`${P_CONTEXT}/user/changeUnreadCount`, num);
//   }
//
//   static setLoc(key, val) {
//     return ls.set(key, val);
//   }
//
//   static getLoc(key) {
//     return ls.get(key);
//   }
//
//   static moveItem(arrs, oldIndex, newIndex) {
//     arrs[oldIndex] = arrs.splice(newIndex, 1, arrs[oldIndex])[0];
//   }
//
//   static getPageStart(page = 1, pageSize = ENV.VUE_APP_PAGE_SIZE) {
//     return page ? (page - 1) * pageSize : 0;
//   }
//
//   static getMenuItem(path) {
//     let menus = FLAT_MENUS.filter(item => {
//       return item.path === path;
//     });
//     return (menus !== null && menus.length > 0) ? menus[0].item : null;
//   }
//
//   static getPageCount(totalCount, pageSize = ENV.VUE_APP_PAGE_SIZE) {
//     let pageCount = 0;
//     if (totalCount === 0) {
//       pageCount = 0;
//     } else {
//       if (totalCount < pageSize) {
//         pageCount = 1;
//       } else {
//         pageCount = Math.floor(totalCount / pageSize);
//         //console.log(pageCount);
//         if (totalCount % pageSize !== 0) {
//           pageCount++;
//         }
//       }
//     }
//     return pageCount;
//   }
//
//   static getI18NText(item, zhKey = 'text', enKey = 'enText') {
//     return (Tools.getLang() === LANG.zh) ? item[zhKey] : (item[enKey] ? item[enKey] : item[zhKey]);
//   }
//
//   static isVideo(res) {
//     return res.path.indexOf('.mp4') !== -1 || res.resourceType === 2;
//   }
//
//   static getDecorateImgRes(item, prop = 'image' || 'image1' || 'image2', isThumb = false) {
//     return Tools.getImgRes(item, 'decorate', prop, DefaultImgs.header, isThumb);
//   }
//
//   static getImgThumb(imgStr, size = 10) {
//     return imgStr ? `${imgStr}?x-oss-process=image/resize,w_${size},h_${size}` : '';
//   }
//
//   static getImgThumbRatio(imgStr, size = 10) {
//     return imgStr ? `${imgStr}?x-oss-process=image/resize,p_${size}/format,webp` : '';
//   }
//
//   static getBlurry(imgStr, r = 3, s = 2) {
//     return imgStr ? `${imgStr}?x-oss-process=image/blur,r_${r},s_${s}` : '';
//   }
//
//   static getImgRes(item, imgStr, prop = 'image' || 'image1' || 'image2', defaultImg = DefaultImgs.header, isThumb) {
//     if (typeof item === 'object') {
//       if (!item[prop]) {
//         return require(`../assets/images/${defaultImg}`);
//       } else if (item[prop].indexOf(imgStr) !== -1) {
//         return require(`../assets/images/${item[prop]}`);
//       } else {
//         let image = _.isArray(item[prop]) ? item[prop][0] : item[prop];
//         return isThumb ? Tools.getBlurry(image) : image;
//       }
//     } else if (typeof item === 'string' && item.indexOf(imgStr) !== -1) {
//       return require(`../assets/images/${item}`);
//     } else {
//       return isThumb ? Tools.getBlurry(item[prop]) : item[prop];
//     }
//   }
//
//   static removeItem(list, targetKey, key = 'id') {
//     let index = list.findIndex((item) => {
//       return targetKey === item[key];
//     });
//     list.splice(index, 1);
//   }
//
//   static changeStatus(list, targetKey, status, key = 'id') {
//     let index = list.findIndex((item) => {
//       return targetKey === item[key];
//     });
//     list[index].status = status
//   }
//
//   static strMapToObj(strMap) {
//     let obj = Object.create(null);
//     for (let [k, v] of strMap) {
//       obj[k] = v;
//     }
//     return obj;
//   }
//
//   static objToStrMap(obj) {
//     let strMap = new Map();
//     for (let k of _.keys(obj)) {
//       if (obj[k]) strMap.set(k, obj[k]);
//     }
//     return strMap;
//   }
//
//   static objToArr(obj) {
//     let arr = [];
//     for (let k of _.keys(obj)) {
//       if (obj[k]) {
//         arr.push({
//           key: k,
//           val: obj[k]
//         });
//       }
//     }
//     return arr;
//   }
//
//   static arrToObj(arr, key = 'id') {
//     let obj = Object.create(null);
//     _.each(arr, (item) => {
//       obj[item[key]] = item;
//     });
//     return obj;
//   }
//
//   static flatArray(list, key, resArr = null) {
//     if (!resArr) {
//       resArr = [];
//     }
//     for (let item of list) {
//       resArr.push(item);
//       if (item[key] && item[key].length > 0) {
//         Tools.flatArray(item[key], key, resArr);
//       }
//     }
//     return resArr;
//   }
//
//   static initEditorMediaStyle() {
//     let style = document.createElement('style');
//     style.id = "customer-style";
//     style.type = 'text/css';
//     style.innerHTML = ".mce-object-video {\n" +
//       "  background: transparent url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M4%203h16a1%201%200%200%201%201%201v16a1%201%200%200%201-1%201H4a1%201%200%200%201-1-1V4a1%201%200%200%201%201-1zm1%202v14h14V5H5zm4.79%202.565l5.64%204.028a.5.5%200%200%201%200%20.814l-5.64%204.028a.5.5%200%200%201-.79-.407V7.972a.5.5%200%200%201%20.79-.407z%22%2F%3E%3C%2Fsvg%3E%0A\") no-repeat center;\n" +
//       "  border: 1px dashed #aaa;\n" +
//       "}";
//     let doc = $("#text-content_ifr")[0].contentWindow.document;
//     doc.getElementsByTagName("head").item(0).appendChild(style);
//   }
//
//   //分群条件处理
//   static handleGroupCondition(con){
//     if(!con) return;
//     let filters = JSON.parse(con);
//     filters.forEach(item => {
//       if(item.tagType == 5){  //枚举标签
//         let vals = [];
//         item.values.forEach(val => {
//           vals.push(val.v);
//         });
//         item.values = vals;
//       }else{
//         item.values = item.values[0].v || '';
//       }
//     });
//     return filters;
//   }
// }
//
// let Base64 = {
//   encode(str) {
//     // first we use encodeURIComponent to get percent-encoded UTF-8,
//     // then we convert the percent encodings into raw bytes which
//     // can be fed into btoa.
//     return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
//       function toSolidBytes(match, p1) {
//         return String.fromCharCode('0x' + p1);
//       }));
//   },
//   decode(str) {
//     // Going backwards: from bytestream, to percent-encoding, to original string.
//     return decodeURIComponent(atob(str).split('').map(function (c) {
//       return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//     }).join(''));
//   }
// };
// export {
//   Msg,
//   ENV,
//   Tools,
//   Cookies,
//   FLAT_MENUS,
//   Base64
// }
