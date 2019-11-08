<template>
  <div>
    <header class="navbar">
      <div class="nav-wrap-left">
        <a href="javascript:;" id="goBack" @click.prevent="MtDownLoadBack">
          <img
            src="https://p1.meituan.net/travelcube/53361fd0bb6b333e779377789a8d669e531.png"
            class="icn_back"
            alt
          />
        </a>
      </div>
      <h1>美团客户端下载</h1>
      <div class="nav-wrap-right">
        <a href="javascript:;" class="bnt" >
          <span class="nav-btn">
            <img
              src="https://p0.meituan.net/travelcube/7289ad16274ae18417b84c916bb6a711169.png"
              class="icn_menu"
            />
          </span>
        </a>
      </div>
    </header>
    <main class="autoBox">
      <div class="center">
        <a href="javascript:;" id="btnDownload">立即下载</a>
        <div class="model">
          <img
            class="backgroundBG"
            src="//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/img/client/modeli.png"
          />
          <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index" class="itemBox">
              <img :src="image" />
            </van-swipe-item>
          </van-swipe>

          <van-swipe :autoplay="3000" class="van-swipe2" :width="160" :show-indicators="false">
            <van-swipe-item v-for="(image, index) in images2" :key="index" class="van-swipe-item2">
              <img :src="image" />
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
    </main>
    <footer class="HhtBottom">
      <div class="myButtomBox">
        <img
          src="http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/img/client/mt_brand.png"
          class="hhtLogo"
          alt
        />
      </div>
    </footer>
  </div>
</template>


<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe).use(SwipeItem);
export default {
  data() {
    return {
      images: [
        "http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/img/client/i1.jpg",
        "http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/img/client/i2.jpg",
        "http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/img/client/i3.jpg",
        "http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/img/client/i4.jpg"
      ],
      images2: [
        "http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/img/client/t1.png",
        "http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/img/client/t2.png",
        "http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/img/client/t3.png",
        "http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/img/client/t4.png"
      ]
    };
  },
  methods: {
    MtDownLoadBack() {
      this.$router.push("/Home");
    }
  },
};
</script>
<style>
.navbar {
  height: 1.01rem;
  display: -webkit-box;
  display: flex;
  position: relative;
  background-image: linear-gradient(135deg, #ffd000 0%, #ffbd00 100%);
  border: none;
}
.nav-wrap-left {
  height: 1.01rem;
  line-height: 1.01rem;
  width: 1.9rem;
}
#goBack {
  height: 1rem;
  width: 0.45rem;
  line-height: 1rem;
  padding: 0 0.2rem;
  display: block;
  color: inherit;
  height: 100%;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
h1 {
  display: block;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  font-size: 0.36rem;
  font-weight: 400;
  text-align: center;
  line-height: 1rem;
  margin: 0;
  font-family: PingFangSC-Regular;
  font-size: 0.32rem;
  color: #222222;
}
.nav-wrap-right {
  width: 1.7rem;
  text-align: right;
  padding-right: 0.2rem;
  height: 100%;
}
.nav-wrap-right .btn {
  width: auto;
  padding: 0 0 0 0.2rem;
  display: inline-block;
  height: 100%;
  line-height: 1rem;
  text-align: center;
}
.nav-btn {
  display: inline-block;
  font-size: 0.2rem;
  line-height: 1rem;
  vertical-align: middle;
}
.nav-btn img.icn_menu {
  width: 0.48rem;
  height: 0.48rem;
  vertical-align: middle;
  border: 0;
}
.autoBox {
  height: 7rem;
  width: 100%;
  background-color: #f0efed;
  overflow-x: hidden;
}

.center {
  width: 5.4rem;
  height: 5.7rem;
  margin: auto;
  position: relative;
}
#btnDownload {
  top: 3.7rem;
  position: absolute;
  right: -0.37rem;
  width: 2.25rem;
  z-index: 100;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.4rem;
  display: inline-block;
  margin: 0;
  text-align: center;
  padding: 0 0.32rem;
  border-radius: 0.06rem;
  color: #222;
  border: 0;
  background: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
  vertical-align: middle;
  box-sizing: border-box;
  cursor: pointer;
}
.model {
  top: 0.44rem;
  left: 0.28rem;
  width: 3.25rem;
  height: 5.7rem;
  position: relative;
}
.model .backgroundBG {
  left: -0.1rem;
  height: 100%;
  width: 100%;
  position: relative;
}
.van-swipe {
  top: -5rem;
  overflow: hidden;
  width: 3.1rem;
  box-sizing: border-box;
}
.van-swipe img {
  overflow: hidden;
  height: 100%;
  width: 100%;
}
.van-swipe2 {
  overflow: hidden;
  left: 3.2rem;
  top: -10rem;
  position: relative;
}
.van-swipe-item2 {
  width: 1.64rem;
  height: 0.98rem;
  overflow: hidden;
}
.van-swipe-item2 img {
  width: 2.4rem;
  height: 1.28rem;
}
.myButtomBox {
  position: absolute;
  left: 0;
  right: 0;
  top: 7.5rem;
  min-height: 2.6rem;
  bottom: 0;
  background: #fff;
  border-top: 1px solid #ddd8ce;
  text-align: center;
  box-shadow: 0 0.06rem 0.4rem rgba(0, 0, 0, 0.3);
}
.hhtLogo {
  width: 2.7rem;
  height: 1.8rem;
  padding-top: 0.4rem;
}
</style>