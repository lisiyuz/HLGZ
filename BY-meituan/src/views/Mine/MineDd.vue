<template>
  <section class="wrapper">
    <header class="navbar">
      <div class="left">
        <a href class="back" @click.prevent=" MineBack">
          <img
            src="../../assets/images/53361fd0bb6b333e779377789a8d669e531.png"
            alt
            class="icn_back"
          />
        </a>
      </div>
      <section class="madel">
        <span>我的账户</span>
      </section>
      <div class="right">
        <a href="javascript:;" class="menu">
          <img
            src="../../assets/images/7289ad16274ae18417b84c916bb6a711169.png"
            alt
            class="icn_menu"
          />
        </a>
      </div>
    </header>
    <div id="pg-account">
      <dl class="list">
        <dd>
          <dl>
            <dd>
              <a
                class="react"
                gaevent="imt/account/myinfo/editUsername"
                href="//i.meituan.com/account/username"
              >
                <div class="more more-weak">
                  <i class="text-icon iconfont icon-my-select"></i>
                  <span class="yyy">kDk444601767</span>
                  <span class="more-after yyy">修改</span>
                  <i class="after iconfont icon-lunbo2"></i>
                </div>
              </a>
            </dd>
            <dd>
              <a
                class="react"
                gaevent="imt/account/myinfo/setPassword"
                href="//i.meituan.com/account/setpassword"
              >
                <div class="more more-weak">
                  <span class="text-icon iconfont icon-xiugaimima"></span>
                  修改登录密码
                  <i class="after iconfont icon-lunbo2"></i>
                </div>
              </a>
            </dd>
            <dd class="reset-mobile">
              <a
                class="react"
                gaevent="imt/account/myinfo/editMobile"
                href="//i.meituan.com/risk2/rebind"
              >
                <div class="more more-weak">
                  <span class="text-icon iconfont icon-shouji"></span>
                  已绑定手机号 187****0892
                  <span class="more-after">更换</span>
                  <i class="after iconfont icon-lunbo2"></i>
                </div>
              </a>
            </dd>
            <dd class="reset-address">
              <a
                class="react"
                gaevent="imt/account/myinfo/address"
                href="//i.meituan.com/account/address"
              >
                <div class="more more-weak">
                  <span class="text-icon iconfont icon-truckfuzhi"></span>
                  收货地址管理
                  <i class="after iconfont icon-lunbo2"></i>
                </div>
              </a>
            </dd>
          </dl>
        </dd>
      </dl>
      <div>
        <button class="btn btn-warning btn-normal">退出登录</button>
      </div>
    </div>
  </section>
</template>

<script>


export default {
  data() {
    return {};
  },
  methods:{
     MineBack() {
      this.$router.push("/Mine");
    },
  }
};
</script>
<style lang="css" scoped>
 html,
body,
.wrapper {
  height: 100%;
}
body {
  background: #f0efed;
}
header,
footer {
  position: relative;
  height: 1rem;
  background: linear-gradient(45deg, #ffd000, #ffbd00);
}
main {
  height: 1hv;
  flex: 1;
  overflow: auto;
}
header {
  display: flex;
  align-items: center;
}
.left {
  width: 1.8rem;
  height: 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.back {
  position: absolute;
  top: 0.1rem;
  height: 1rem;
  width: 0.45rem;
  line-height: 1rem;
  padding: 0 0.3rem;
}
.icn_back {
  width: 0.2rem;
  height: 0.36rem;
}
.madel {
      display: block;
      -webkit-box-flex: 1;
      font-size: 0.3rem;
      font-weight: 400;
      text-align: center;
      line-height: 1rem;
      margin: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      width: 3.1rem;
      height: 1.01rem;
    }
.a {
  width: 0.5rem;
  height: 0.5rem;
  width: auto;
  padding: 0 0 0 0.2rem;
}
.icn_menu {
      width: 0.48rem;
      height: 0.48rem;
}
.right {
  height: 100%;
  position: relative;
  width: 1.7rem;
  text-align: right;
  padding-right: 0.2rem;
}
.right .menu{
   position: relative;
  top:0.3rem;
} 

 
dl.list dt,
dl.list dd {
  margin: 0;
  border-bottom: 1px solid #ddd8ce;
  overflow: hidden;
  font-size: inherit;
  font-weight: 400;
  position: relative;
}
dl.list {
  background: linear-gradient(135deg, #ffffff 0, #ffff 100%);
  margin-top: 0.02rem;
  margin-bottom: 0;
  background-color: #fff;
}
dl.list dd dl > .dd-padding,
dl.list dd dl dd > .react,
dl.list dd dl > dt {
  padding-left: 0;
}
dl.list .dd-padding,
dl.list dt,
dl.list dd > .react {
  padding: 0.1rem 0.2rem;
}
.btn-wrapper {
  margin: 0.28rem 0.2rem;
}
a.react,
label.react {
  display: block;
  color: inherit;
  height: 100%;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.more {
  position: relative;
  padding-right: 0.3rem;
  width: 100%;
  box-sizing: border-box;
}
.text-icon {
  font-size: 0.45rem;
  color: #666;
  width: 0.44rem;
  text-align: center;
  margin-left: 0.08rem;
  margin-right: 0.08rem;
}
.text-icon {
  font-family: base_icon;
  display: inline-block;
  vertical-align: middle;
  font-style: normal;
}
.more .more-after {
  position: absolute;
  right: 0.25rem;
  top: 30%;
  color: #999;
}
.more .after {
  position: absolute;
  right: 0.05rem;
  top: 30%;
  color: #999;
}
.btn-warning {
  background: #f97150;
  color: #fff;
  font-size: 0.28rem;
}
.btn-normal {

  display: inline-block;
  margin: 0 auto;
  text-align: center;
  height: 0.86rem;
  padding: 0 0.32rem;
  border-radius: 0.2rem;
  color: #222;
  border: 0;
  background: #f97251;
  font-size: 0.36rem;
  vertical-align: middle;
  line-height: 0.86rem;
  box-sizing: border-box;
  cursor: pointer;
  -webkit-user-select: none;
}
.bot{

}
</style>