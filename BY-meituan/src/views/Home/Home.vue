<template>
  <section class="wrapper">
    <header>
      <section class="city">
        北京
        <img src="../../assets/images/arrowDown.png" alt />
      </section>
      <section class="search">
        <input type="text" placeholder="请输入商家名、品类或者商圈..." />
      </section>
      <section class="people"></section>
    </header>
    <main>
      <!-- 热门 -->
      <ul class="hotLinks">
        <li>
          <a href>
            <section class="icon iconfont icon-fenzu"></section>
            <section class="text">美食</section>
          </a>
        </li>
        <li>
          <a href>
            <section class="icon iconfont"></section>
            <section class="text">猫眼</section>
          </a>
        </li>
        <li>
          <a href>
            <section class="icon iconfont icon-jiudian"></section>
            <section class="text">酒店</section>
          </a>
        </li>
        <li>
          <a href>
            <section class="icon iconfont icon-wenhuayule"></section>
            <section class="text">休闲娱乐</section>
          </a>
        </li>
        <li>
          <a href>
            <section class="icon iconfont icon-waimai"></section>
            <section class="text">外卖</section>
          </a>
        </li>
        <li>
          <a href>
            <section class="icon iconfont icon-ktv"></section>
            <section class="text">ktv</section>
          </a>
        </li>
        <li>
          <a href>
            <section class="icon iconfont icon-zhoubianyou"></section>
            <section class="text">周边游</section>
          </a>
        </li>
        <li>
          <a href>
            <section class="icon iconfont icon-meinvguanjia"></section>
            <section class="text">丽人</section>
          </a>
        </li>
        <li>
          <a href>
            <section class="icon iconfont icon-xiaochi"></section>
            <section class="text">小吃快餐</section>
          </a>
        </li>
        <li>
          <a href>
            <section class="icon iconfont icon-zuyuzuliao"></section>
            <section class="text">生活服务</section>
          </a>
        </li>
      </ul>
      <!--猜你喜欢 guessLike  -->
      <div class="guessLike">
        <h3>猜你喜欢</h3>
        <ul class="guessLists">
          <li>
            <a href @click.prevent="submitDetails">
              <img class="left" src="../../assets/images/libg.jpg" alt />
              <section class="right">
                <h4>华莱士炸鸡汉堡</h4>
                <p id="p1">鸡腿堡+薯条+中杯可乐1份</p>
                <p>
                  <span class="nowPrice">20</span>
                  <span id="yuan">元</span>
                  <span id="menshi">门市价：40元</span>
                  <span id="yishou">已售2000</span>
                </p>
              </section>
            </a>
          </li>
          <li>
            <a href>
              <img class="left" src="../../assets/images/libg.jpg" alt />
              <section class="right">
                <h4>华莱士炸鸡汉堡</h4>
                <p id="p1">鸡腿堡+薯条+中杯可乐1份</p>
                <p>
                  <span class="nowPrice">20</span>
                  <span id="yuan">元</span>
                  <span id="menshi">门市价：40元</span>
                  <span id="yishou">已售2000</span>
                </p>
              </section>
            </a>
          </li>
          <li>
            <a href>
              <img class="left" src="../../assets/images/libg.jpg" alt />
              <section class="right">
                <h4>华莱士炸鸡汉堡</h4>
                <p id="p1">鸡腿堡+薯条+中杯可乐1份</p>
                <p>
                  <span class="nowPrice">20</span>
                  <span id="yuan">元</span>
                  <span id="menshi">门市价：40元</span>
                  <span id="yishou">已售2000</span>
                </p>
              </section>
            </a>
          </li>
          <li>
            <a href>
              <img class="left" src="../../assets/images/libg.jpg" alt />
              <section class="right">
                <h4>华莱士炸鸡汉堡</h4>
                <p id="p1">鸡腿堡+薯条+中杯可乐1份</p>
                <p>
                  <span class="nowPrice">20</span>
                  <span id="yuan">元</span>
                  <span id="menshi">门市价：40元</span>
                  <span id="yishou">已售2000</span>
                </p>
              </section>
            </a>
          </li>
          <li>
            <a href>
              <img class="left" src="../../assets/images/libg.jpg" alt />
              <section class="right">
                <h4>华莱士炸鸡汉堡</h4>
                <p id="p1">鸡腿堡+薯条+中杯可乐1份</p>
                <p>
                  <span class="nowPrice">20</span>
                  <span id="yuan">元</span>
                  <span id="menshi">门市价：40元</span>
                  <span id="yishou">已售2000</span>
                </p>
              </section>
            </a>
          </li>
          <li>
            <a href>
              <img class="left" src="../../assets/images/libg.jpg" alt />
              <section class="right">
                <h4>华莱士炸鸡汉堡</h4>
                <p id="p1">鸡腿堡+薯条+中杯可乐1份</p>
                <p>
                  <span class="nowPrice">20</span>
                  <span id="yuan">元</span>
                  <span id="menshi">门市价：40元</span>
                  <span id="yishou">已售2000</span>
                </p>
              </section>
            </a>
          </li>
          <li>
            <a href>
              <img class="left" src="../../assets/images/libg.jpg" alt />
              <section class="right">
                <h4>华莱士炸鸡汉堡</h4>
                <p id="p1">鸡腿堡+薯条+中杯可乐1份</p>
                <p>
                  <span class="nowPrice">20</span>
                  <span id="yuan">元</span>
                  <span id="menshi">门市价：40元</span>
                  <span id="yishou">已售2000</span>
                </p>
              </section>
            </a>
          </li>
        </ul>
      </div>
      <a href id="more">
        <div class="moreL">查看全部团购</div>
      </a>
    </main>
    <Homecomh></Homecomh>
  </section>
</template>


<script>
import Homecomh from "../../components/Homecomh.vue";
export default {
  data() {
    return {};
  },
  methods: {
    submitDetails() {
      this.$router.push({ path: "/Details" });
    },
    submitMine(){
      this.$router.push({path:"/Mine"})
    }
  },
  components: {
    Homecomh
  }
};
</script>
<style>
/* 一屏幕的大小  */
html,
body {
  height: 100%;
}
body {
  background: #f0efed;
}
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}
header,
.footer {
  height: 1.01rem;
  position: relative;
  background: linear-gradient(45deg, #ffd000, #ffbd00);
}
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
}
header .city {
  width: 1.5rem;
  height: 1.01rem;
  text-align: center;
  line-height: 1.01rem;
  font-size: 0.28rem;
}
header img {
  width: 0.16rem;
  margin-left: 0.1rem;
}
header .search {
  right: 1rem;
  top: 0;
  flex: 1;
  position: absolute;
  margin-top: 0.2rem;
  opacity: 0.9;
  background: #ffffff;
  border-radius: 0.18rem;
  width: 3.85rem;
  height: 0.64rem;
  color: #999999;
}
header .search input {
  top: 0;
  left: 0;
  height: 0.64rem;
  width: 100%;
  background: url("../../assets/images/search.png") no-repeat;
  background-position: 0.3rem 0.17rem;
  background-size: 0.28rem 0.28rem;
  border: none;
  padding-left: 0.7rem;
  box-sizing: border-box;
  border-radius: 0.1rem;
  position: absolute;
  z-index: 999;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
header .people {
  position: absolute;
  right: 0rem;
  top: 0rem;
  width: 0.98rem;
  height: 1.1rem;
  line-height: 1.1rem;
  background: url("../../assets/images/people.png") center center no-repeat;
  text-align: center;
  background-size: 0.48rem 0.48rem;
  z-index: 10;
}
main {
  flex: 1;
  overflow: auto;
}
.hotLinks {
  display: flex;
  flex-wrap: wrap;
  color: #666;
  background: #fff;
  padding: 0.2rem 0;
}
.hotLinks li {
  width: 20%;
  text-align: center;
}
.hotLinks a {
  display: block;
  padding: 0.2rem 0;
  color: #666;
}
.hotLinks .icon {
  width: 0.8rem;
  line-height: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background: #fd9d21;
  margin: 0 auto 0.1rem;
  font-size: 0.5rem;
  color: #fff;
  z-index: 999;
}

.hotLinks li:nth-child(2) .icon {
  background: #ff6767;
}
.hotLinks li:nth-child(3) .icon {
  background: #8a90fa;
}
.hotLinks li:nth-child(4) .icon {
  background: #fed030;
}
.hotLinks li:nth-child(5) .icon {
  background: #fe8c00;
}
.hotLinks li:nth-child(6) .icon {
  background: #fed030;
}
.hotLinks li:nth-child(7) .icon {
  background: #4dc6ee;
}
.hotLinks li:nth-child(8) .icon {
  background: #ff80c2;
}
.hotLinks li:nth-child(9) .icon {
  background: #fd9d21;
}
.hotLinks li:nth-child(10) .icon {
  background: #a8dd99;
}

.guessLike {
  margin-top: 0.3rem;
  padding: 0.3rem;
  background: #fff;
  color: #666;
}
.guessLike h3 {
  font-size: 0.3rem;
  height: 0.8rem;
  line-height: 0.8rem;
  font-weight: normal;
  border-bottom: 1px solid #eee;
}

.guessLists li {
  border-bottom: 1px solid #eee;
}
.guessLists li:last-child {
  border-bottom: none;
}
.guessLists a {
  display: flex;
  padding: 0.2rem 0;
  color: #666;
  justify-content: space-between;
}

.guessLists .left {
  width: 1.55rem;
  height: 1.55rem;
}
.guessLists .right {
  margin-right: 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.guessLists .nowPrice {
  color: #f60;
  font-size: 0.36rem;
}
#yuan {
  font-size: 0.24rem;
  color: #f60;
}
#menshi {
  font-size: 0.2rem;
  margin-left: 0.2rem;
}
#yishou {
  margin-left: 0.4rem;
  font-size: 0.2rem;
}
.guessLists h4 {
  font-size: 0.3rem;
  font-weight: 400;
  color: #333;
}
.guessLists #p1 {
  margin-top: -0.2rem;
  font-size: 0.24rem;
}

#more {
  border-top: 1px solid #ddd8ce;
  border-bottom: 1px solid #ddd8ce;
  display: block;
  color: inherit;
  height: 0.8rem;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #fe8c00;
  padding: 0 0.2rem;
  background: #ffffff;
}
#more .moreL {
  position: relative;
  padding-right: 0.3rem;
  width: 100%;
  box-sizing: border-box;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.3rem;
}
#more .moreL::after {
  position: absolute;
  right: 0.05rem;
  top: 50%;
  display: block;
  content: "";
  width: 0.6em;
  height: 0.6em;
  border-left: 0.04rem solid #fe8c00;
  border-bottom: 0.04rem solid #fe8c00;
  transform: translateY(-50%) scaleY(0.7) rotateZ(-135deg);
}

/* h4{
    color:#333;
}   
.footer li{
   flex:1;
}
.footer li a{
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:#333;
    
}

.footer li .icon{
    font-size:0.5rem;
} */
</style>