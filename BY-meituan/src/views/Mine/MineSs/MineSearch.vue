<template>
  <div>
     <template>
  <div class="all">
    <header class="navber">
      <div class="nav-wrap-left">
        <a class="react back" @click.prevent="backMy">
          <img
            src="https://p1.meituan.net/travelcube/53361fd0bb6b333e779377789a8d669e531.png"
            class="icn_back"
            alt
          />
        </a>
      </div>
      <span class="navberh1">搜索</span>
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
    </header>
  </div>
</template>
    <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <Homecomh class="footer-all"></Homecomh>
  </div>
</template>

<script>
import Vue from "vue";
import { Search } from "vant";
Vue.use(Search);
import "vant/lib/index.css";
import Homecomh from "../../../components/Homecomh.vue";
export default {
  data() {
    return {};
  },
  methods: {
    backMy() {
      this.$router.push("/Mine");
    }
  },
  components: {
    Homecomh,
  
  }
};
</script>

<style lang="less">
.navber {
  width: 6.4rem;
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
    color: #222222;
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