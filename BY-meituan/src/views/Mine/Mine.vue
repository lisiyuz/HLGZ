<template>
  <section class="wrapper">
    <header>
      <section class="nav-btn left">
        <a href="javascript:;" class="react back" @click.prevent="MineBack">
          <img
            src="../../assets/images/53361fd0bb6b333e779377789a8d669e531.png"
            alt
            class="icn_back"
          />
        </a>
      </section>
      <section class="madel">
        <span>我的美团</span>
      </section>
      <div class="right">
        <a href="javascript:;" class="reacthome">
          <img
            src="../../assets/images/142ba119b889881105236ef57446e6bf866.png"
            alt
            class="icn_home"
          />
        </a>
        <a href="javascript:;" class="reactsearch">
          <img
            src="../../assets/images/4b45dc09c35f9175498345f8672d08991022.png"
            alt
            class="icn_search"
          />
        </a>
      </div>
    </header>
    <main>
      <a href class="my-account">
        <img src="../../assets/images/my-photo.png" alt />
        <img class="avater" src="../../assets/images/pic-default.png" alt />
        <div class="user-info">
          <p class="uname">
            kDk444601767
            <i class="level-icon"></i>
          </p>
          <p>
            账户余额：
            <strong>0</strong>元
          </p>
        </div>
      </a>

      <dl class="list">
        <dd class="dds">
          <a class="react" href="//i.meituan.com/brunch/order">
            <div class="more more-weak">
              <i class="text-icon order-all order-icon dingdan iconfont icon-icon-"></i>全部订单
              <span data-key="all" class="more-after">
                <img src alt />
              </span>
            </div>
          </a>
        </dd>
        <dd>
          <ul class="orderindex">
            <li>
              <a href="//i.meituan.com/brunch/order?status=1" class="react">
                <i class="text-icon sss iconfont icon-daifukuanbig"></i>
                <span class="yyy">待付款</span>
                <span data-key="unpaid" class="amount-icon"></span>
              </a>
            </li>
            <li>
              <a href="//i.meituan.com/brunch/order?status=2" class="react">
                <i class="text-icon sss iconfont icon-shiyong"></i>
                <span class="yyy">待使用</span>
                <span data-key="unused" class="amount-icon"></span>
              </a>
            </li>
            <li>
              <a href="//i.meituan.com/brunch/order?status=3" class="react">
                <i class="text-icon sss iconfont icon-daipingjia"></i>
                <span class="yyy">待评价</span>
                <span data-key="needfeedback" class="amount-icon" style="display: block;">5</span>
              </a>
            </li>
            <li>
              <a href="//i.meituan.com/brunch/order?status=4" class="react">
                <i class="text-icon sss iconfont icon--"></i>
                <span class="yyy">退款/售后</span>
              </a>
            </li>
          </ul>
        </dd>
      </dl>
      <dl class="list">
        <dd>
          <a
            class="react"
            gaevent="imt/account/collection"
            href="//i.meituan.com/account/collection"
          >
            <div class="more more-weak gai">
              <i class="text-icon order-fav order-icon iconfont icon-wodeshoucang yanse2"></i>
              我的收藏
            </div>
          </a>
        </dd>
        <dd>
          <a class="react" gaevent="imt/account/magiccard" href="//i.meituan.com/account/magiccard">
            <div class="more more-weak gai">
              <i class="text-icon order-card order-icon iconfont icon-wodediyongquan yanse1"></i>我的抵用券
            </div>
          </a>
        </dd>
        <dd>
          <a
            class="react"
            gaevent="imt/account/ordersLotterys"
            href="//i.meituan.com/orders/lotterys"
          >
            <div class="more more-weak gai">
              <i
                class="text-icon order-lottery order-icon iconfont icon-choujiang yanse"
                style="text-align:center"
              ></i>我的抽奖单
            </div>
          </a>
        </dd>
        <dd>
          <a class="react" gaevent="imt/account/points" href="//i.meituan.com/firework/aboutpoint">
            <div class="more more-weak gai">
              <i class="order-icon">
                <img class="gao" src="../../assets/images/下载.png" alt />
              </i>积分换礼品
              <i class="icon-new"></i>
            </div>
          </a>
        </dd>
      </dl>
    </main>
    <Homecomh class="footer-all"></Homecomh>
  </section>
</template>

<script>
import "../../assets/font_1494639_nrc9v20jj9/iconfont.css";
import "../../assets/reset.min.css";
import Homecomh from "../../components/Homecomh.vue";
export default {
  data() {
    return {};
  },
  methods: {
    MineBack() {
      this.$router.push("/Home");
    },
    submitMineDd(){
        this.$router.push({ path: '/MineDd'})
    },
  },
  components: {
    Homecomh
  }
};
</script>
<style lang='css' scoped>
html,
body,
.wrapper {
  height: 100%;
}
body {
  background: #f0efed;
}

header {
  position: relative;
  height: 1.1rem;
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
  font-size: 0.36rem;
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

.icn_home {
  position: absolute;
  left: 0.2rem;
  top: 0.25rem;
  width: 0.48rem;
  height: 0.48rem;
}
.search {
  display: inline-block;
  height: 100%;
  line-height: 1rem;
  text-align: center;
}
.icn_search {
  position: absolute;
  left: 0.7rem;
  top: 0.25rem;
  width: 0.48rem;
  height: 0.48rem;
  padding-right: 0.2rem;
}
.my-account {
  color: #333;
  position: relative;
  background: -webkit-linear-gradient(top, #e1dace, #dfc8b4);
  border-bottom: 1px solid #c0bbb2;
  display: block;
  height: 1.6rem;
  position: relative;
  padding-right: 0.2rem;
}
.my-account > img {
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
}
.my-account .avater {
  position: absolute;
  top: 0.2rem;
  left: 0.4rem;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
}
.my-account .user-info {
  z-index: 1;
  position: relative;
  height: 100%;
  padding: 0.28rem 0.2rem;
  margin-right: 0.2rem;
  box-sizing: border-box;
  padding-left: 2rem;
  font-size: 0.24rem;
  color: #666;
}
.level-icon {
  display: inline-block;
  width: 0.3rem;
  height: 0.3rem;
  background: url(../../assets/images/vip3.png);
  background-size: 0.3rem;
  margin-top: -0.08rem;
}
.dingdan {
  width: 0.25rem;
}
dl.list {
  border-top: 0.01rem solid #ddd8ce;
  border-bottom: 0rem #c0bbb200;
  margin-top: 0.2rem;
  margin-bottom: 0;
  background-color: #fff;
  /* box-shadow: 0.01rem 0.01rem 0.01rem  rgba(102, 102, 102, 0.102); */
}
dl.list dt,
dl.list dd {
  margin: 0;
  border-bottom: 0rem;
  overflow: hidden;
  font-size: inherit;
  font-weight: 400;
  position: relative;
}
a.react,
label.react {
  display: block;
  line-height: auto;
  float: left;
  color: inherit;
  height: 100%;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}

.dds {
  height: 0.6rem;
  line-height: 0.6rem;
}
.sss {
  display: block;
  width: 1.575rem;
  text-align: center;
  font-style: normal;
  margin: 0 !important;
}
.yyy {
  text-align: center;
  margin: 0 auto;
  font-size: 0.2rem;
}
.more {
  position: relative;
  padding-right: 0.3rem;
  width: 100%;
  box-sizing: border-box;
}
.order-icon {
  position: relative;
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  font-style: normal;
  text-align: center;
  top: 0.08rem;
  left: 0.1rem;
  line-height: 0.4rem;
  border-radius: 0.06rem;
  color: white;
  margin-right: 0.25rem;
  margin-top: -0.06rem;
  margin-bottom: -0.06rem;
  background-color: #fe8c00;
  vertical-align: initial;
  font-size: 0.3rem;
}
.more .more-after {
  position: absolute;
  right: 0.25rem;
  top: 50%;
  -webkit-transform: translateY(-0.5em);
  color: #06c1ae;
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
.orderindex .text-icon {
  display: block;
  font-size: 0.4rem;
  margin-bottom: 0.18rem;
  overflow: hidden;
  padding: 0.2rem 0;
  height: 0.5rem;
}
.orderindex .amount-icon {
  position: absolute;
  right: 1.9rem;
  top: 0.01rem;
  color: white;
  background: #ec5330;
  border-radius: 50%;
  padding: 0.08rem 0.06rem;
  min-width: 0.28rem;
  font-size: 0.24rem;
  margin-left: 0.1rem;
  display: none;
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
.gai {
  height: auto !important;
  height: 0.6rem;
  min-height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
}
.gao {
  width: 0.45rem;
  height: 0.45rem;
}
.right {
  height: 100%;
  position: relative;
  width: 1.7rem;
  text-align: right;
  padding-right: 0.2rem;
}
.right img {
  position: absolute;
  top: 0.325rem;
  padding-right: 0.2rem;
  height: auto;
}
.right .reactsearch {
  position: absolute;
  left: 0.2rem;
}
.yanse {
  background-color: #f5b345;
}
.yanse1 {
  background-color: #eb2c00;
}
.yanse2 {
  background-color: #0092de;
}
</style>