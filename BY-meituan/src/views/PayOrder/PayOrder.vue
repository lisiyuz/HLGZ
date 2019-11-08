<template>
  <div class="all">
    <div class="nav" style="display: block;">
      <div class="nav-left">
        <a href class="iconfont icon-maomi" @click.prevent="back"></a>
      </div>
      <div class="nav-title">支付订单</div>
    </div>
    <div class="index">
      <div class="in-order">
        <div class="in-countdown" style="display: block;">
          支付剩余时间
          <span class="in-clock"><van-count-down :time="time" /></span>
        </div>

        <div class="in-order-fee">
          <span class="in-order-fee-unit">¥</span>
          <span class="in-need-final-fee">{{ queryPrice}}</span>
        </div>

        <div class="in-order-title">堪的派生日蛋糕蛋糕</div>
      </div>
      <!-- 支付方式 -->
      <div class="in-pay-method">
        <div class="in-pay-type-wrapper">
          <div class="cell-access">
            <img
              class="cell-icon"
              src="https://img.meituan.net/pay/b11b4e84c8e8e4eac3124b652cca1c4d2955.png"
            />

            <div class="cell-left">
              <div class="in-pay-title">
                <div class="in-mt-pay-title">
                  美团支付
                  <div class="in-right-labels">
                    <div class="cl-tags">
                      <span class="cl-bubble-tag">推荐</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="in-pay-info">
                <span class="in-amount-info">余额不足</span>
              </div>

              <div class="checkbox">
                <input type="radio" name="pay-method" />
                <i class="icon-success"></i>
              </div>
            </div>
          </div>

          <div class="in-addon-card">
            <div class="cell-left">
              <div class="in-switcher-right-label">
                <div class="in-switcher-newcard-text">使用新卡支付</div>
                <div class="cl-tags">
                  <span class="cl-normal-tag">返10元玩乐券</span>
                </div>
              </div>
              <div class="in-newcard-banners">
                <div class="in-newcard-banner">
                  <img src="https://img.meituan.net/pay/abc_g4.png" class="in-newcard-banner-img" />
                  <span class="in-newcard-banner-content ellipsis">农行储蓄卡立减3-10元</span>
                </div>
                <div class="in-newcard-banner">
                  <img src="https://img.meituan.net/pay/icbc_g4.png" class="in-newcard-banner-img" />
                  <span class="in-newcard-banner-content ellipsis">工行储蓄卡立减3-10元</span>
                </div>
              </div>
              <div class="cell-arrow"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- 其他支付 -->
      <div class="in-pay-type-wrapper-a">
        <div class="cell-access-a">
          <div class="cell-icon-a">
            <img src="https://img.meituan.net/pay/weixin_g2.png" />
          </div>
          <div class="cell-left-a">
            <div class="in-pay-title-a">
              <div class>微信支付</div>
            </div>
            <!-- <div class="in-pay-info-a">
              <span class="in-amount-info-a"></span>
            </div>-->
            <div class="checkbox-a">
              <input type="radio" name="pay-method" />
              <i class="icon-success-a"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- 支付宝 -->
      <div class="in-pay-type-wrapper-b">
        <div class="cell-access-b">
          <div class="cell-icon-b">
            <img src="https://img.meituan.net/pay/alipay_g2.png" />
          </div>
          <div class="cell-left-b">
            <div class="in-pay-title-b">
              <div class>支付宝支付</div>
            </div>
            <!-- <div class="in-pay-info-a">
              <span class="in-amount-info-a"></span>
            </div>-->
            <div class="checkbox-b">
              <input type="radio" name="pay-method" />
              <i class="icon-success-b"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="btn-wrapper">
      <button class="btn-block">确认支付</button>
    </div>
  </div>
</template>


<script>
import Vue from 'vue';
import { CountDown } from 'vant';
Vue.use(CountDown);
export default {
  data() {
    return {
            time: 24 * 60 * 60 * 1000
    };
  },
  methods: {
    back() {
      this.$router.push("/yesorder");
    }
  },
  computed: {
    queryPrice() {
      return this.$route.query.plan;
    }
  }
};
</script>
<style lang="less" scoped>
.all{
  background: #fafafa;
}
.nav {
  position: relative;
  text-align: center;
  height: 0.84rem;
  z-index: 10;
  line-height: 0.84rem;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
  background-color: #fafafa;
  .nav-left {
    width: 1rem;
    height: 0.84rem;
  }
  .nav-title {
    font-size: 0.28rem;
    margin-top: -0.85rem;
  }
}
.index {
  background-color: #fff;
  height: 100%;
  .in-order {
    padding: 0.82rem 0 0.72rem;
    text-align: center;
    background-color: #fff;

    .in-countdown {
      color: #999;
      font-size: 0.2rem;
      line-height: 1;
    }
    .in-order-fee {
      margin-top: 0.04rem;
      line-height: 1;
      font-family: MTfin, "DINAlternate-Bold", "PingFang SC", "Helvetica Neue",
        Helvetica, Arial, sans-serif;
      font-size: 0.6rem;
      color: #333;
      letter-spacing: -0.44px;

      .in-order-fee-unit {
        font-size: 0.48rem;
        margin-right: 0.08rem;
      }
      .in-need-final-fee {
        box-sizing: inherit;
      }
    }
    .in-order-title {
      font-size: 0.2rem;
      color: #999;
      letter-spacing: -0.24px;
    }
  }
  .in-pay-method {
    padding-bottom: 0.3rem;
    background-color: transparent;

    .in-pay-type-wrapper {
      position: relative;
      overflow: hidden;
      z-index: 0;
      background: #fff;

      .cell-access {
        border-width: 0.5px;
        position: relative;
        z-index: 2;
        background: transparent;

        .cell-icon {
          width: 0.4rem;
          height: 0.4rem;
          margin-left: 0.25rem;
        }
        .cell-left {
          padding: 0.18rem 0;
          margin-left: 1rem;
          margin-top: -0.7rem;
          .in-pay-title {
            max-width: 5rem;
            color: #333;

            .in-mt-pay-title {
              font-size: 0.32rem;
              font-weight: bold;
              position: relative;
              top: 2px;
              .cl-tags {
                display: inline-block;
                margin-left: 1.4rem;
                vertical-align: middle;

                span {
                  display: block;
                  font-size: 0.2rem;
                  margin-top: -0.55rem;
                  color: #fff;
                  border-color: #ff851c;
                  background-color: #ff851c;
                  border-top-left-radius: 0.16rem;
                  border-top-right-radius: 0.2rem;
                  border-bottom-right-radius: 0.2rem;
                }
              }
            }
          }
          .in-pay-info {
            margin-top: -0.3rem;
            line-height: 12px;

            span {
              font-size: 0.2rem;

              font-weight: 300;
              color: #ccc;
            }
          }
          .checkbox {
            display: flex;
            position: relative;
            margin-left: 4.7rem;
            margin-top: -0.6rem;

            // input {
            //   margin: 0;
            //   opacity: 0;
            //   position: absolute;
            // }
            // .icon-success {
            //   border: none;
            //   color: #222200;
            //   background-color: #ffc700;
            //   width: 0.35rem;
            //   height: 0.35rem;
            //   border-radius: 50%;
            // }
          }
        }
      }
      .in-addon-card {
        position: relative;

        .cell-left {
          padding: 0 1.54rem 0.4rem 1.08rem;
          margin-top: 0.25rem;

          .in-switcher-right-label {
            margin-bottom: 0.15rem;
            .in-switcher-newcard-text {
              font-weight: bold;
              font-size: 0.32rem;
              line-height: 0.36rem;
            }
            .cl-tags {
              padding: 0;
              margin-left: 2rem;
              margin-top: -0.3rem;
              .cl-normal-tag {
                font-weight: 400;
                font-size: 0.15rem;
                line-height: 1;
                text-align: center;
                color: #ff851c;
                border: 1px solid currentColor;
              }
            }
          }
          .in-newcard-banner {
            img {
              width: 0.22rem;
              height: 0.22rem;
              margin-right: 0.08rem;
            }
          }
        }
      }
    }
  }
  /* 微信支付 */
  .in-pay-type-wrapper-a {
    position: relative;
    z-index: 0;
    background: #fff;
    border-bottom: 0.01rem solid rgb(241, 239, 239);
    line-height: 1rem;

    .cell-access-a {
      border-width: 0.5px;
      position: relative;
      z-index: 2;
      background: transparent;

      .cell-icon-a {
        width: 0.35rem;
        height: 0.35rem;
        margin-left: 0.25rem;

        img {
          width: 0.4rem;
          height: 0.4rem;
          margin-top: 0.25rem;
        }
      }
      .cell-left-a {
        padding: 0.18rem 0;
        margin-left: 1rem;
        margin-top: -0.6rem;
        .in-pay-title-a {
          max-width: 5rem;
          color: #333;
          font-size: 0.3rem;
          position: relative;
          top: 2px;
          .cl-tags-a {
            display: inline-block;
            margin-left: 1.4rem;
            vertical-align: middle;

            span {
              display: block;
              font-size: 0.2rem;
              margin-top: -0.55rem;
              color: #fff;
              border-color: #ff851c;
              background-color: #ff851c;
              border-top-left-radius: 0.16rem;
              border-top-right-radius: 0.2rem;
              border-bottom-right-radius: 0.2rem;
            }
          }
        }
        .checkbox-a {
          display: flex;
          position: relative;
          margin-left: 4.7rem;
          margin-top: -0.48rem;
        }
      }
    }
  }
  /* 支付宝支付 */
  .in-pay-type-wrapper-b {
    position: relative;
    line-height: 1rem;
    z-index: 0;
    background: #fff;
    border-bottom: 0.01rem solid rgb(241, 239, 239);
    margin-top: 0.1rem;
    .cell-access-b {
      border-width: 0.5px;
      position: relative;
      z-index: 2;
      background: transparent;

      .cell-icon-b {
        width: 0.35rem;
        height: 0.35rem;
        margin-left: 0.25rem;

        img {
          width: 0.4rem;
          height: 0.4rem;
          margin-top: 0.25rem;
        }
      }
      .cell-left-b {
        padding: 0.18rem 0;
        margin-left: 1rem;
        margin-top: -0.6rem;
        .in-pay-title-b {
          max-width: 5rem;
          color: #333;
          font-size: 0.3rem;
          //   font-weight: bold;
          position: relative;
          top: 2px;

          .cl-tags-b {
            display: inline-block;
            margin-left: 1.4rem;
            vertical-align: middle;

            span {
              display: block;
              font-size: 0.2rem;
              margin-top: -0.55rem;
              color: #fff;
              border-color: #ff851c;
              background-color: #ff851c;
              border-top-left-radius: 0.16rem;
              border-top-right-radius: 0.2rem;
              border-bottom-right-radius: 0.2rem;
            }
          }
        }

        .checkbox-b {
          display: flex;
          position: relative;
          margin-left: 4.7rem;
          margin-top: -0.5rem;
        }
      }
    }
  }
}

.btn-wrapper {
  margin: 0 0.2rem;
  width: 6.2rem;
  height: 0.85rem;
  position: fixed;
  bottom: 0;
  padding: 0.1rem 0rem;
  .btn-block {
    background-color: #ffd000;
    color: rgb(19, 18, 18);
    border: 0;
    width: 6rem;
    font-weight: bold;
    height: 0.82rem;
    font-size: 0.3rem;
    border-radius: 0.06rem;
  }
}

</style>