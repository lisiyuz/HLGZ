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
    <van-search v-model="value" placeholder="输入商家名、品类或商圈" show-action shape="round" @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <div id="search-hot" style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1); display: block;">
                <dl class="list list-in">
                    <dd class="icon-wrapper h_gesture_">
                    <ul class="icon-list page current" style="position: relative">
                        <li class="icon">
                            <a class="hot-link react title" style="color:##fe8c00;">周边热门</a>
                        </li>
                            <li class="icon">
                            <a class="hot-link react" gaevent="imt/search/hot/自助餐" href="/s/beijing-自助餐">自助餐</a></li>     
                            <li class="icon">
                            <a class="hot-link react" gaevent="imt/search/hot/酒店" href="/s/beijing-酒店">酒店</a></li>     
                            <li class="icon">
                            <a class="hot-link react" gaevent="imt/search/hot/电影" href="/s/beijing-电影">电影</a></li>     
                            <li class="icon">
                            <a class="hot-link react" gaevent="imt/search/hot/火锅" href="/s/beijing-火锅">火锅</a></li>     
                            <li class="icon">
                            <a class="hot-link react" gaevent="imt/search/hot/烤肉" href="/s/beijing-烤肉">烤肉</a></li>     
                            <li class="icon">
                            <a class="hot-link react" gaevent="imt/search/hot/KTV" href="/s/beijing-KTV">KTV</a></li>     
                            <li class="icon">
                            <a class="hot-link react" gaevent="imt/search/hot/运动健身" href="/s/beijing-运动健身">运动健身</a></li>     
                            <li class="icon">
                            <a class="hot-link react" gaevent="imt/search/hot/游泳" href="/s/beijing-游泳">游泳</a></li>     
                            <li class="icon">
                            <a class="hot-link react" gaevent="imt/search/hot/西餐" href="/s/beijing-西餐">西餐</a></li>     
                            <li class="icon">
                            <a class="hot-link react" gaevent="imt/search/hot/美容美体" href="/s/beijing-美容美体">美容美体</a></li>     
                            <li class="icon">
                            <a class="hot-link react" gaevent="imt/search/hot/日韩料理" href="/s/beijing-日韩料理">日韩料理</a></li>     
                    </ul>
                    </dd>
                </dl>
        </div>
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
  
dl.list-in {
    margin: 0;
    border-top: 0;
}
#search-hot .page {
    height: auto;
    display: block;
    position: absolute;
    padding-bottom: 0.4rem;
    font-size: 0.28rem;
}
.page li {
    display: inline-block;
    width: 25%;
    height: .8rem;
    line-height: .8rem;
    font-size: .28rem;
    text-align: center;
    border-bottom: 1px solid #ddd8ce;
    margin-bottom: -1px;
    float: left;
    position: relative;
    z-index: 10;
    box-sizing: border-box;
    background: white;
    padding: 1px;
    box-sizing: border-box;
    background-clip: content-box;
    background-origin: content-box;
}
.hot-link {
    color: #222222;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.title{
  color:#fe8c00;
}


</style>