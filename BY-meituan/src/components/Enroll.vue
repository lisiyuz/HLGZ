<template>
  <div class="all">
    <header class="navber">
      <div class="nav-wrap-left">
        <a class="react back" @click.prevent="EnrollBack">
          <img
            src="https://p1.meituan.net/travelcube/53361fd0bb6b333e779377789a8d669e531.png"
            class="icn_back"
            alt
          />
        </a>
      </div>
      <span class="navberh1">{{title}}</span>
      <div class="nav-wrap-right">
        <a class="react btn">
          <img
            src="https://p0.meituan.net/travelcube/7289ad16274ae18417b84c916bb6a711169.png"
            class="icn_menu"
          />
        </a>
      </div>
      <div>
        <!-- <div id="nav-dropdown" class="nav-dropdown">
          <ul>
            <li>
              <a>
                <img
                  src="https://p1.meituan.net/travelcube/142ba119b889881105236ef57446e6bf866.png"
                  class="icn_drop_home"
                />
                <space></space>首页
              </a>
            </li>
            <li>
              <a>
                <img
                  src="https://p0.meituan.net/travelcube/641521461179df7cfb88738dd1ea11ec1031.png"
                  class="icn_drop_mine"
                />
                <space></space>我的
              </a>
            </li>
            <li>
              <a>
                <img
                  src="https://p0.meituan.net/travelcube/4b45dc09c35f9175498345f8672d08991022.png"
                  class="icn_drop_search"
                />
                <space></space>搜索
              </a>
            </li>
          </ul>
        </div>-->
      </div>
    </header>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  methods: {
    EnrollBack() {
      this.$router.push("/Home");
    }
  },
  props: {
    title: {
      default: "美团网",
      type: [String]
    }
  }
};
</script>
<style lang="less" scoped>
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