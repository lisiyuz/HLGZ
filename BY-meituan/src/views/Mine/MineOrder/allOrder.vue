<template>
  <div>
    <div class="all">
      <header class="navber">
        <div class="nav-wrap-left">
          <a class="react back" @click.prevent="BackMy">
            <img
              src="https://p1.meituan.net/travelcube/53361fd0bb6b333e779377789a8d669e531.png"
              class="icn_back"
              alt
            />
          </a>
        </div>
        <span class="navberh1">全部订单</span>
        <div class="nav-wrap-right">
          <a class="react btn">
            <img
              src="https://p0.meituan.net/travelcube/7289ad16274ae18417b84c916bb6a711169.png"
              class="icn_menu"
            />
          </a>
        </div>
        <div></div>
      </header>
    </div>
    <van-tabs v-model="active" color="#FFBD00">
      <van-tab title="全部" to="/Mine/allOrder?type=my">
        <orderList></orderList>
      </van-tab>
      <van-tab title="待付款" to="/Mine/allOrder?type=my2">
        <orderList></orderList>
      </van-tab>
      <van-tab title="待使用" to="/Mine/allOrder?type=my3">
        <orderList></orderList>
      </van-tab>
      <van-tab title="待评价" to="/Mine/allOrder?type=my4">
         <orderList></orderList>
      </van-tab>
      <van-tab title="退款/售后" to="/Mine/allOrder?type=my5">
          <orderList></orderList>
      </van-tab>
    </van-tabs>
  </div>
  
</template>
<script>
import orderList from "./orderList";
export default {
  components: {
    orderList,
  },
  data() {
    return {
      active: 2
    };
  },
  methods: {
    BackMy() {
      this.$router.push("/Mine");
    }
  }
};
</script>
<style lang="less"  scoped>
.navber {
  width: 6.4rem;
  color: #FFF;
  height: 0.85rem;
  display: -webkit-box;
  position: relative;
  background-image: linear-gradient(135deg, #ffd000 0%, #ffbd00 100%);
  border: none;

  .nav-wrap-left {
    width: 1.1rem;
    height: 0.85rem;
    line-height: 1.01rem;

    .icn_back {
      width: 0.18rem;
      height: 0.32rem;
      padding: 0 0.3rem;
    }
  }
  .navberh1 {
    width: 4rem;
    height: 0.85rem;
    font-size: 0.28rem;
    color: black;
    display: block;
    text-align: center;
    line-height: 1rem;
    margin: -0.1rem;
  }
  .nav-wrap-right {
    width: 1.3rem;
    text-align: right;
    padding-right: 0.2rem;
    height: 0.85rem;

    .icn_menu {
      width: 0.42rem;
      height: 0.42rem;
      margin: 0.2rem;
    }
  }
}
</style>