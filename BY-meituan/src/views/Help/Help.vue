<template>
  <div class="all">
    <Enroll></Enroll>
    <!-- <header class="navber">
      <div class="nav-wrap-left">
        <a class="react back" href="###">
          <img
            src="https://p1.meituan.net/travelcube/53361fd0bb6b333e779377789a8d669e531.png"
            class="icn_back"
            alt
          />
        </a>
      </div>
      <span class="navberh1">帮助</span>
      <div class="nav-wrap-right">
        <a class="react btn">
          <img
            src="https://p0.meituan.net/travelcube/7289ad16274ae18417b84c916bb6a711169.png"
            class="icn_menu"
          />
        </a>
      </div>
      <div>
        
      </div>
    </header>-->

    <div class="wrapper-list">
      <h4>手机上如何支付?</h4>
      <dl class="list">
        <dd class="dd-padding">
          <p class="p10">您可以通过支付宝的方式完成购买，确保交易安全。</p>
          <p class="p10">后续将开通财富通、网上银行的方式以方便购买。</p>
          <a>更多支付帮助»</a>
        </dd>
      </dl>
      <h4>关于退款</h4>
      <dl class="list">
        <dd class="dd-padding">
          <ol>
            <li>2014年3月15日0点0分起，所有在线售卖的团购单均享受“随时退”和”过期退“服务（物流单、电影选座和酒店在线订除外）；已停售的团购单享受其原有的售后服务，若原来不支持退款则依然不支持。</li>
            <li>退至美团余额：审核通过后，会在1个工作日内（少量商品需要3个工作日）把款项退回到您的美团账户；余额可在下次团购时直接冲抵现金，也可随时提现，暂不收取手续费。</li>
            <li>原路退回：审核通过后，会在3-10个工作日内（少量商品需额外增加3个工作日）把款项退回到您的原支付方，通过网银或支付宝等第三方支付平台进行支付的费用将直接退到原账户，充值卡或返利金额将退回到美团余额。</li>
          </ol>
          <p class="p10">
            <a>更多消费者保障服务»</a>
          </p>
          <p class="p10">
            如对产品功能有建议或意见，欢迎
            <a>反馈给我们</a>(当前版本2.3.9)
          </p>
        </dd>
      </dl>
    </div>
<Homecomh></Homecomh>
  </div>
</template>


<script>
import Enroll from "../../components/Enroll.vue";
import Homecomh from "../../components/Homecomh.vue";
export default {
  data() {
    return {};
  },
  
  components: {
    Enroll,
    Homecomh
  
  }
};
</script>

<style lang="less" scoped>
.all {
  background: #f1f0f0;
}
// .navber {
//   width: 6.4rem;
//   height: 0.85rem;
//   display: -webkit-box;
//   position: relative;
//   background-image: linear-gradient(135deg, #ffd000 0%, #ffbd00 100%);
//   border: none;

//   .nav-wrap-left {
//     width: 1.1rem;
//     height: 0.85rem;
//     line-height: 1.01rem;

//     .icn_back {
//       width: 0.18rem;
//       height: 0.32rem;
//       padding: 0 0.3rem;
//     }
//   }

//   .navberh1 {
//     width: 4rem;
//     height: 0.85rem;
//     font-size: 0.28rem;
//     color: #222222;
//     display: block;
//     text-align: center;
//     line-height: 1rem;
//     margin: -0.1rem;
//   }

//   .nav-wrap-right {
//     width: 1.3rem;
//     text-align: right;
//     padding-right: 0.2rem;
//     height: 0.85rem;

//     .icn_menu {
//       width: 0.42rem;
//       height: 0.42rem;
//       margin: 0.2rem;
//     }
//   }
// }

.wrapper-list {
  display: block;
  width: 6.4rem;
  height: 14.6rem;

  h4 {
    margin: 0.4rem 0.2rem 0.2rem;
    font-size: 0.34rem;
    font-weight: 400;
  }
  .list {
    margin-top: 0.2rem;
    margin-bottom: 0;
    background-color: #fff;
  }
  .dd-padding {
    padding: 0.28rem 0.2rem;
    margin: 0;
    overflow: hidden;
    font-size: 0.3rem;

    p {
      margin: 0.2rem 0;
      line-height: 1.41;

      word-break: break-all;
    }

    a {
      color: #fe8c00;
    }
    ol {
      display: block;
      margin: 0.25rem;
      li {
        list-style: outside decimal;
        line-height: 1.4;
        margin: 0.2rem 0;
      }
    }
  }
}
</style>