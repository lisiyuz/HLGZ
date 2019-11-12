<template>
  <div class="all">
    <header class="navber">
      <div class="nav-wrap-left">
         <a href class="iconfont icon-fanhui" @click.prevent="back"></a>
      </div>
      <span class="navberh1">提交订单</span>
    </header>

    <div class="wrapper-list">
      <h4>素食自助单人餐</h4>

      <div class="deal-content">
        <div class="content-info-line">
          单价：
          <span class="deal-price">
            {{price}}
            元
          </span>
        </div>
        <div class="content-info-line">
          数量：
          <div class="content-btn">
            <button type="button" class="btn-minus" @click="addNumber('reduce')">-</button>
            <input type="text" class="number" value="1" v-model="count" />
            <button type="button" class="btn-add" @click="addNumber('add')">+</button>
          </div>
        </div>
        <div class="content-info-line">
          总价：
          <span class="amount">
            {{computedPrice}}
            元
          </span>
        </div>

        <div class="deal-content-wrapper">
          <div class="content-info-line">
            还需支付：
            <span class="amount">
              {{computedPrice}}
              元
            </span>
          </div>
        </div>
      </div>

      <div class="content-title">美团券将发送到您绑定的手机号码</div>
      <div class="deal-content-wrapper">
        <div class="content-info-line">
          151****1599
          <a class="change-mobile">绑定新号码＞</a>
        </div>
      </div>

      <div class="btn-wrapper">
        <button class="btn-block" @click="submitPay">提交订单</button>
      </div>
    </div>

    <!-- 页脚 -->
    <!-- <div class="footer-container">
      <div class="footer-bar">
        <div class="pull-right">
          <a class="btn footer-city-btn">北京</a>
        </div>
        <a class="btn footer-mine-btn">_qq5cf1439909607</a>
      </div>
      <div class="footer-nav">
        <ul>
          <li>
            <a>首页</a>
          </li>
          <li>
            <a>订单</a>
          </li>
          <li>
            <a>客户端</a>
          </li>
          <li>
            <a>电脑版</a>
          </li>
          <li class="last-child">
            <a>帮助</a>
          </li>
        </ul>
      </div>
      <div class="footer-links">
        友情链接：
        <a>猫眼电影</a>
      </div>
      <div class="footer-copy">
        <div class="hr"></div>
        <span class="footer-copy-text">
          ©2016 美团网
          <a>京ICP证070791号</a>
        </span>
      </div>
    </div> -->
<Ordercom></Ordercom>
  </div>
</template>


<script>
import Ordercom from '../../components/Ordercom.vue'
export default {
  data() {
    return {
      count: 1,
      price: 18.5
    };
  },
  methods: {
    addNumber(flag) {
      if (flag === "reduce") {
        this.count--;
        this.count = this.count < 1 ? 1 : this.count--;
        return;
      }
      this.count++;
    },
    submitPay(){
        this.$router.push({ path: '/PayOrder', query: { plan: this.computedPrice }})
    },
    back() {
      this.$router.go(-1) ;
    }
  },
  computed: {
    computedPrice() {
      let total = this.count * this.price;
      return total;
    }
  },
   components: {
    Ordercom
  }
};
</script>

<style lang="less" scoped>
.all {
  background: #f1f0f0;
}
.navber {
  background: #06c1ae;
  border-bottom: 1px solid #21897d;
  width: 6.4rem;
  height: 0.85rem;
  display: -webkit-box;
  position: relative;

  border: none;
  .nav-wrap-left {
    width: 1.1rem;
    height: 0.85rem;
    line-height: 1.01rem;

    a {
      font-size: 0.4rem;
      padding: 0 0.3rem;
      color: #fff;
    }
  }

  .navberh1 {
    width: 5.3rem;
    height: 0.85rem;
    font-size: 0.3rem;
    color: #fff;
    display: block;
    text-align: center;
    line-height: 1rem;
    margin: -0.05rem;
  }
}
.wrapper-list {
  display: block;
  width: 6.4rem;

  h4 {
    margin: 0.4rem 0.2rem 0.2rem;
    font-size: 0.28rem;
    font-weight: 400;
    color: rgb(59, 58, 58);
  }

  .deal-content {
    margin-top: 0.2rem;
    margin-bottom: 0;
    background-color: #fff;
  }
  .content-info-line {
    position: relative;
    padding: 0 0.2rem;
    line-height: 0.8rem;
    height: 0.8rem;
    text-align: left;
    font-size: 0.24rem;
    border-bottom: 0.01rem solid rgb(236, 234, 234);
    span {
      position: absolute;
      top: 0;
      right: 0.2rem;
    }
    .amount {
      font-weight: bold;
      color: #ff9712;
    }

    .content-btn {
    //   position: absolute;
    //   top: -0.02rem;
    //   right: 0.2rem;
    //   overflow: hidden;
    //   text-align: right;

      .btn-minus {
        margin-right: 0.1rem;
        width: 0.5rem;
        position: relative;
        top: -.76rem;
        left: 3.8rem;
        border-radius: 0.06rem;
        font-size: 0.3rem;
        height: 0.5rem;
        font-weight: lighter;
        line-height: 0.5rem;
        text-align: center;
        border: 0.02rem solid #ddd8ce;
        color: rgb(90, 92, 93);
      }
      .number {
        width: 1.1rem;
        height: 0.5rem;
        position: relative;
        top: -1.57rem;
        margin-left: 4.4rem;
        border: 0.02rem solid #ddd8ce;
        border-radius: 0.06rem;
        box-sizing: border-box;
        line-height: 0.6rem;
        text-align: center;
      }
      .btn-add {
          position: relative;
          top: -2.35rem;
          left: 5.5rem;
          line-height: 0.5rem;
        color: rgb(90, 92, 93);
        border-radius: 0.06rem;
        border: 0.02rem solid #ddd8ce;
        margin-left: 0.1rem;
        width: 0.5rem;
        height: 0.5rem;
        font-size: 0.3rem;
        font-weight: lighter;
      }
    }
  }
  .deal-content-wrapper {
    margin-bottom: 0.2rem;
    border-top: 0.2rem solid #f1f0f0;
    border-bottom: 0.1rem solid #f1f0f0;
    background: #fff;
  }
  .content-title {
    margin: 0.4rem 0.2rem 0.05rem;
    font-size: 0.28rem;
    font-weight: 200;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .change-mobile {
    position: absolute;
    top: 0;
    right: 0.2rem;
    color: #999;
    padding-right: 0.3rem;
  }
  .btn-wrapper {
    margin: 0 0.2rem;
    width: 6.2rem;
    height: 0.85rem;
    .btn-block {
      background-color: #f90;
      color: #fff;
      border: 0;
      width: 6rem;
      height: 0.82rem;
      font-size: 0.34rem;
      border-radius: 0.06rem;
    }
  }
}

/* 页脚 */
// .footer-container {
//   padding: 0 0.2rem 0.7rem 0.2rem;
//   background-color: #f0f0f0;

//   .footer-bar {
//     margin-bottom: 0.4rem;
//     font-size: 0.28rem;

//     .pull-right {
//       float: right;

//       .footer-city-btn {
//         width: 0.8rem;
//         border: 0.03rem solid #06c1ae;
//         color: #06c1ae;
//         display: inline-block;
//         height: 0.6rem;
//         padding: 0 0.32rem;
//         text-align: center;
//         border-radius: 0.06rem;
//         line-height: 0.6rem;
//       }
//     }

//     .footer-mine-btn {
//       width: 0.8rem;
//       overflow: hidden;
//       text-overflow: ellipsis;
//       white-space: nowrap;
//       border: 0.03rem solid #06c1ae;
//       color: #06c1ae;
//       display: inline-block;
//       height: 0.6rem;
//       padding: 0 0.32rem;
//       text-align: center;
//       border-radius: 0.06rem;
//       line-height: 0.6rem;
//     }
//   }
//   .footer-nav {
//     margin-bottom: 0.18rem;
//     line-height: 1;

//     ul {
//       font-size: 0.2rem;
//       display: -webkit-box;
//       font-weight: 500;
//       .last-child {
//         border-right: 0;
//       }
//       li {
//         -webkit-box-flex: 1;
//         border-right: 0.02rem solid #666;
//         text-align: center;

//         a {
//           color: #06c1ae;
//         }
//       }
//     }
//   }
//   .footer-links {
//     margin: 0.24rem 0.2rem;
//     font-size: 0.2rem;
//     text-align: center;
//     a {
//       color: #06c1ae;
//     }
//   }
//   .footer-copy {
//     position: relative;
//     font-size: 0.22rem;
//     text-align: center;
//     color: #999;
//     .hr {
//       display: block;
//       position: absolute;
//       width: 100%;
//       top: 50%;
//       border-top: 0.015rem solid #999;
//     }
//     span {
//       position: relative;
//       padding: 0 0.3rem;
//       font-size: 0.19rem;
//       text-align: center;
//       background-color: #f0efed;
//       color: #999;
//     }
//   }
// }
</style>