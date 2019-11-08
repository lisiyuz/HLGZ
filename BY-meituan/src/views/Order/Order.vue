<template>
  <div class="all">
    <header class="navber">
      <div class="nav-wrap-left">
        <a href class="iconfont  icon-maomi" @click.prevent="OrderBack"></a>
      </div>
      <span class="navberh1">提交订单</span>
    </header>
    <div class="wrapper-list">
      <h4>素食自助单人餐</h4>

      <div class="deal-content">
        <div class="content-info-line">
          <!-- react-text: 13 -->
          单价：
          <!-- /react-text -->
          <span class="deal-price">
            <!-- react-text: 15 -->
            18.5
            元
          </span>
        </div>
        <div class="content-info-line">
          数量：
          <div class="content-btn">
            <button type="button" class="btn-minus">-</button>
            <input type="text" class="number" value="1" />
            <button type="button" class="btn-add">+</button>
          </div>
        </div>
        <div class="content-info-line">
          <!-- react-text: 24 -->
          总价：
          <!-- /react-text -->
          <span class="amount">
            <!-- react-text: 26 -->
            18.5
            <!-- /react-text -->
            <!-- react-text: 27 -->
            元
            <!-- /react-text -->
          </span>
        </div>
      </div>

      <div class="btn-wrapper">
        <button class="btn-block">提交订单</button>
      </div>

      <div class="quick-login">
        请登录后进行购买，去
        <a @click.prevent="submitEnroll">登录</a>
      </div>
    </div>
    <Ordercom></Ordercom>
  </div>
 
</template>


<script>
import Ordercom from '../../components/Ordercom.vue'
export default {
  data() {
    return {};
  },
  
  methods:{
    submitEnroll(){
        this.$router.push({ path: '/unEnroll'})
    },
    OrderBack(){
       this.$router.push("/Details");
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
  height: 7.5rem;

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
        // position: absolute;
        // top: -0.02rem;
        // right: 0.2rem;
        // overflow: hidden;
        // text-align: right;

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
  }

  .btn-wrapper {
    margin: 0.28rem 0.2rem;
    width: 6.2rem;
    height: 0.85rem;
    .btn-block {
      background-color: #dcdcdc;
      color: #999;
      border: 0;
      width: 6rem;
      height: 0.82rem;
      font-size: 0.34rem;
      border-radius: 0.06rem;
    }
  }
  .quick-login {
    margin: 0.2rem;
    font-size: 0.24rem;
    a {
      margin-left: 0.1rem;
      color: #06c1ae;
      outline: none;
      text-decoration: none;
    }
  }
}
</style>