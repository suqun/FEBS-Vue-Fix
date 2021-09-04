<!--会员详情-->
<template>
  <main-panel no-top="1" :noPad="true">
    <div slot="header">
      <v-container class="header px-10" fluid>
        <v-row no-gutters align="center" justify="center" class="fill-height">
          <v-col cols="6">
            <v-img src="../../assets/images/logo.png" width="160"/>
          </v-col>
          <v-col cols="6" class="d-flex justify-end align-center" v-if="!user">
            <v-btn class="ma-2" text @click="goLogin">
              登录
            </v-btn>
            <v-btn class="ma-2" color="primary" rounded @click="goRegist">
              注册
            </v-btn>
          </v-col>
          <v-col cols="6" class="d-flex justify-end align-center" v-else>
            <div class="user-header-img">
              <img src="../../assets/images/avatar.png" class="mr-2 u-ico" />
            </div>
            <span class="user-mobile mx-2 hand" @click="goMain">{{ user.mobile }}</span>
            <span @click.stop="logout" class="ml-2">退出</span>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container fluid class="pa-0">
      <div class="pcbanner d-flex justify-center align-center">
        <div class="banner-content text-center">
          <div class="small-title headline4">原圈广告</div>
          <div class="h-title headline2">国内领先的营销平台</div>
          <div class="sub-title headline5">原圈广告汇聚原圈公司全量的应用场景，拥有核心行业数据、</div>
          <div class="sub-title headline5">营销技术与专业服务能力</div>
          <v-btn class="mt-8" large color="secondary" rounded @click="reserve">
            预约营销顾问
          </v-btn>
        </div>
      </div>

      <div class="index-radius">
        <div class="radius-pr">
          <div class="radius-block"></div>
        </div>
      </div>

      <!-- <div class="section-part">
        <div class="section-content d-flex flex-md-row flex-column align-center">
          <div class="part-img order-1">
            <img src="@assets/images/index/pc1.png" alt="">
          </div>
          <div class="part-content order-0">
            <div class="small-title headline4">推广目标</div>
            <div class="h-title headline3">多重推广能力<br/>高效实现您的营销目标</div>
            <div class="sub-title headline5">推广品牌活动 推广我的公众号 推广我的门店 推广我的应用</div>
            <div class="sub-title headline5">推广我的商品 推广我的小游戏 收集销售线索 派发优惠券</div>
          </div>
        </div>
      </div> -->

      <!-- <div class="section-part white">
        <div class="section-content d-flex flex-md-row flex-column align-center">
          <div class="part-img order-md-0 order-sm-1">
            <img src="@assets/images/index/pc2.png" alt="">
          </div>
          <div class="part-content order-md-1 order-sm-0">
            <div class="small-title headline4">广告资源</div>
            <div class="h-title headline3">多样的广告资源<br/>覆盖11亿优质用户</div>
            <div class="sub-title headline5">平台拥有覆盖超过11亿网民的微信、QQ、QQ空间社交用户场景，<br/>月活超过5亿的原圈视频，国内安卓用户覆盖第一的应用宝和QQ<br/>浏览器、原圈新闻、天天快报、原圈体育等行业领先新闻资讯平台，<br/>此外，还包括汇聚行业优质流量的优量广告。</div>
          </div>
        </div>
      </div> -->

      <div class="section-part">
        <div class="section-content d-flex flex-md-row flex-column align-center">
          <div class="part-img order-1">
            <img src="../../assets/images/index/pc3.png" alt="">
          </div>
          <div class="part-content order-0">
            <div class="small-title headline4">定向能力</div>
            <div class="h-title headline3">精准的定向能力<br/>瞄准活跃客户</div>
            <div class="sub-title headline5">我们为您提供了众多广告定向条件，您可以从中选择适合达成您商业目标的条件锁定人群。这些条件包括人口属性、商业兴趣、地理位置、使用设备、天气环境等等。</div>
            <v-btn class="mt-8" large color="secondary" rounded @click="reserve">
              预约营销顾问
            </v-btn>
          </div>
        </div>
      </div>

      <!-- <div class="cost-section">
        <div class="banner-content text-center">
          <div class="small-title headline4">费用管理模式</div>
          <div class="h-title headline2">更合理透明的费用管理模式，<br />帮您平衡成本和收益</div>
        </div>
        <div class="section-content">
          <v-row>
            <v-col cols="12" md="4">
              <div class="cost-item d-flex flex-row flex-md-column align-center">
                <i class="regist flex-shrink-0"></i>
                <div class="cost-item-content">
                  <div class="c-title headline4">免费注册</div>
                  <div class="c-content headline5">您现在就可以免费注册原圈广告账户，我们将有专人与您对接</div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div class="cost-item d-flex flex-row flex-md-column align-center">
                <i class="cost flex-shrink-0"></i>
                <div class="cost-item-content">
                  <div class="c-title headline4">成本可控</div>
                  <div class="c-content headline5">您可以为广告账户或者计划设置日预算，随时编辑预算或停止投放广告，我们的系统会立即为您执行</div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div class="cost-item d-flex flex-row flex-md-column align-center">
                <i class="diff flex-shrink-0"></i>
                <div class="cost-item-content">
                  <div class="c-title headline4">多种计费模式</div>
                  <div class="c-content headline5">根据不同推广目标提供更为合理的计费模式，包括CPC、CPM和CPA。自动优化投放效果，持续提高广告的效率和产出</div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </div> -->
      <div class="index-footer">
        <div class="section-content">
          <div class="qrcode" v-show="ewmShow">
            <img src="../../assets/images/index/qrcode2.jpeg" alt="">
          </div>
          <v-row align="center">
            <v-col md="3" sm="3" cols="12">
              <img src="../../assets/images/index/logo2.png" alt="">
            </v-col>
            <v-col md="6" sm="6" cols="12" class="text-center">
              <a href="http://beian.miit.gov.cn/" target="_blank">Copyright © 2013-2021 原圈网络 沪ICP备18023121号-1</a>
            </v-col>
            <v-col md="3" sm="3" cols="12">
              <div class="follow d-flex justify-center justify-sm-end" @mouseover="showEwm" @mouseout="hideEwm">
                <span>FOLLOW US</span>
                <img src="../../assets/images/index/wechat.png" alt="">
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
<!--    <ReserveDialog v-if="resDialogShow" :show.sync="resDialogShow" />-->
  </main-panel>
</template>

<script>
// import {Tools,Msg} from "../../utils/tools";
import {mapMutations, mapState, mapActions} from "vuex";
import {MUTATIONS} from "../../model/actions";
import {P_CONTEXT} from "../../model/model-types";
// import ReserveDialog from "./ReserveDialog";

export default {
  // components: {
  //   ReserveDialog
  // },
  data() {
    return {
      ewmShow: false,
      resDialogShow: false,
      user: {}
    }
  },
  computed: {
    ...mapState(`${P_CONTEXT}/menus`, {
      currentMenu: state => state.currentMenu
    }),
    ...mapState(`${P_CONTEXT}/page`, {
      opened: (state) => state.opened,
      keepAlive: (state) => state.keepAlive,
      current: (state) => state.current,
    })
  },
  // mounted() {
    // Tools.loadUser().then((user) => {
    //   if (!user) {
    //     this.user = null;
    //   }else{
    //     this.user = user;
    //   }
    // });
  // },
  methods: {
    ...mapMutations(`${P_CONTEXT}/menus`, [MUTATIONS.menu.setCurrentMenu]),
    // logout() {
      // Msg.confirm("是否退出当前用户？", async () => {
      //   Tools.logout();
      //   this.$router.push("/login");
      // });
    // },
    goMain(){
      this.$router.push("/login/customer");
      //跳转当前角色权限对应的路由
      //this.handleRouter(this.user);
    },
    handleRouter(user){
      let firstMenu = user.menusList[0]
          ? this.getDefaultMenu(user.menusList[0])
          : "dashboard";
      this.setCurrentMenu(
          this.currentMenu ? this.currentMenu : firstMenu
      );
      let lastId = localStorage.getItem("lastLogin");
      //登录打开过的最后一个页面
      if (lastId === user.id) {
        this.$router.push(
            this.current
                ? this.current
                : this.opened.length > 0
                ? this.opened[0].path
                : `/${firstMenu}`
        );
      } else {
        localStorage.setItem("lastLogin", user.id);
        this.$router.push(`/${firstMenu}`);
      }
    },
    getDefaultMenu(menu) {
      if (!menu.children || menu.children.length === 0) {
        return `${menu.id}`;
      } else {
        if (!menu.children[0].children) {
          //没有3级就第二级第一个
          return `${menu.id}${menu.children[0].path}`;
        } else {
          //默认3级目录第一个
          return `${menu.id}${menu.children[0].children[0].path}`;
        }
      }
    },
    reserve(){
      // this.resDialogShow = true;
    },
    goLogin(){
      this.$router.push("/login");
    },
    goRegist(){
      this.$router.push("/login/register");
    },
    showEwm(){
      this.ewmShow = true;
    },
    hideEwm(){
      this.ewmShow = false;
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../less/base";
@import "../../less/font";
.header{
  border-bottom: 1px solid @border-dark-grey;
  .u-ico{
    width: 30px;
    height: 30px;
  }
}
.pcbanner{
  position: relative;
  height: 600px;
  background-image: url('../../assets/images/index/pc_bgc.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  color: #fff;
}
.banner-content{
  .small-title{
    line-height: 1;
    letter-spacing: 2px;
    margin: 0 auto 24px;
  }
  .h-title{
    position: relative;
    margin-bottom: 30px;
    padding-bottom: 24px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: 2px;
    &::after{
      content: '';
      display: inline-block;
      position: absolute;
      bottom: -6px;
      left: 50%;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      height: 6px;
      width: 40px;
      background-color: @bg-spec;
      border-radius: 3px;
    }
  }
  .sub-title{
    color: #fff;
    line-height: 1.5;
    letter-spacing: 1px;
  }
}

.index-radius{
  position: relative;
  .radius-pr{
    position: absolute;
    top: -60px;
    left: 0;
    height: 60px;
    width: 100%;
    overflow: hidden;
    z-index: 10;
  }
  .radius-block{
    position: absolute;
    bottom: -80px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 160%;
    height: 600%;
    border: 80px solid #f5f9ff;
    border-radius: 96%;
  }
}

.section-part{
  background: #f5f9ff;
  &.white{
    background: #fff;
  }
}
.section-content{
  width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
  .part-img{
    flex: 0 0 50%;
    img{
      width: 100%;
      height: auto;
    }
  }
  .part-content{
    flex: 0 0 50%;
  }
  .small-title{
    margin-bottom: 16px;
    color: @font-color-spec;
    line-height: 1;
  }
  .h-title{
    position: relative;
    margin-bottom: 28px;
    padding-bottom: 30px;
    color: @base-color;
    font-weight: 500;
    letter-spacing: 1.5px;
    &::after{
      content: '';
      display: inline-block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 40px;
      height: 6px;
      background-color: @bg-spec;
      border-radius: 3px;
    }
  }
  .sub-title{
    display: inline-block;
    width: 470px;
    line-height: 2;
    color: #6b7799;
  }
}
.cost-section{
  padding: 40px 0 0;
  .banner-content{
    .small-title{
      color: @font-color-spec;
    }
  }
}
.cost-item{
  text-align: center;
  .regist,
  .cost,
  .diff{
    display: inline-block;
    background-image: url(../../assets/images/index/sprite_cost.png);
    background-size: 190px auto;
    width: 190px;
    height: 150px;
    background-position: 0 0;
    margin-bottom: 26px;
  }
  .cost{
    background-position: 0 -150px;
  }
  .diff{
    background-position: 0 -300px;
  }
  .c-title{
    margin-bottom: 16px;
    font-weight: 500;
    color: @base-color;
    letter-spacing: 1.5px;
    line-height: 1;
  }
  .c-content{
    display: inline-block;
    line-height: 1.8;
    letter-spacing: 1px;
    color: #6b7799;
  }
}
.index-footer{
  position: relative;
  color: #fff;
  font-size: 14px;
  line-height: 24px;
  background: #021429;
  .section-content{
    position: relative;
  }
  img{
    max-width: 100%;
    height: auto;
  }
  a{
    display: inline-block;
    color: #fff;
  }
  .follow{
    cursor: pointer;
    span{
      margin-right: 6px;
    }
    img{
      width: 24px;
      height: 24px;
    }
  }
  .qrcode{
    position: absolute;
    top: -150px;
    right: 20px;
    width: 150px;
  }
}
@media (max-width: 1260px){
  .section-content{
    width: 100%;
    padding: 20px;
  }
  .index-radius{
    .radius-block{
      width: 240%;
    }
  }
}
@media (max-width: 960px){
  .pcbanner{
    height: 320px;
    .banner-content{
      width: 80%;
    }
  }
  .section-content{
    padding: 30px 20px;
    .part-img{
      width: 100%;
      max-width: 430px;
      margin: 0 auto;
    }
    .part-content{
      width: 100%;
      .sub-title{
        width: 100%;
      }
    }
    .cost-item{
      text-align: left;
      .regist,
      .cost,
      .diff{
        display: inline-block;
        background-image: url(../../assets/images/index/sprite_cost.png);
        background-size: 95px auto;
        width: 95px;
        height: 75px;
        background-position: 0 0;
        margin-right: 10px;
        margin-bottom: 0;
      }
      .cost{
        background-position: 0 -75px;
      }
      .diff{
        background-position: 0 -150px;
      }
      .c-title{
        margin-bottom: 6px;
      }
    }
  }
  .cost-section{
    .banner-content{
      .h-title{
        margin-bottom: 10px;
      }
    }
  }
}
@media (max-width: 960px){
  .index-footer{
    text-align: center;
  }
}
</style>
