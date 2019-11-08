<template>
  <div>
    <header class="ilogin-header">
      <div class="logo-img-wrapper">
        <img
          class="logo-img"
          id="logoImg"
          src="../../assets/images/7c71ecc4b44d0e17447076cd23e501cb31967.png"
        />
      </div>
    </header>
    <div class="LoginContainer">
      <div class="loginComp">
        <span class="area">中国</span>
        <span class="area">+86</span>
        <input class="shou1" placeholder="请输入手机号" />
      </div>
      <div class="password">
        <input class="shou2" placeholder="请输入密码" />
        <img src alt />
        <span class="area">忘记密码</span>
      </div>
      <button class="area btn a">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped >
.ilogin-header {
  height: 2.7rem;
  box-sizing: border-box;
  padding-top: 0.5rem;
  text-align: center;
  .logo-img {
    box-sizing: border-box;
    width: 1.6rem;
    height: 1.6rem;
  }
}
.LoginContainer {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -moz-flex: 1;
  -ms-flex: 1;
  flex: 1;
  .loginComp {
    height: 0.7rem;
    box-sizing: border-box;
    padding-bottom: 0;
    align-items: center;
    border-bottom: 0 solid #eee;
  }
}
.area {
  font-size: 0.28rem;
  color: #646464;
}
.shou1 {
  border: 0.01rem solid rgba(199, 195, 195, 0.2);
  background: #f0efed;
  width: 4.47rem;
  height: 0.7rem;
  font-size: 0.3rem;
  padding: 0;
  caret-color: #fe8c00;
  font-family: PingFang-SC-Regular;
  letter-spacing: 0.002rem;
  height: 0.7rem;
  line-height: 1.2em;
}
.shou2 {
  background: #f0efed;
  border: 0.01rem solid rgba(199, 195, 195, 0.2);
  width: 4.68rem;
  height: 0.66rem;
  font-size: 0.3rem;
  padding-left: 0;
  caret-color: #fe8c00;
  font-family: PingFang-SC-Regular;
  letter-spacing: 0.002rem;
}
.btn {
  width: 6.2rem;
  height: 0.9rem;
  color: #222222;
//   opacity: 0.3;
  border-radius: 0.2rem;
  height: 0.9rem;
  line-height: 0.9rem;
  background-color: #ffbd22 !important;
//   background-image: linear-gradient(-133deg, #ffbd00 0%, #ffd000 100%);
}
</style>
