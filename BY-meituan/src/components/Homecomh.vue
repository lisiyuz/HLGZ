<template>

    <footer>
      <div class="dingwei">
        <span>
          城市：
          <span id="zh">
            <img src="../assets/images/weizhi.png" alt />北京
          </span>
        </span>
      </div>
      <ul class="foot">
        <li>
          <a href>首页</a>
        </li>
        <li>
          <a href @click.prevent="submitMine">我的</a>
        </li>
        <li>
          <a href @click.prevent="submitMtDownLoad">美团下载</a>
        </li>
        <li>
          <a href>电脑版</a>
        </li>
        <li>
          <a href @click.prevent="submitHelp">帮助</a>
        </li>
      </ul>

      <div class="footer-links">
        友情连接：
        <a href>猫眼电影</a>
        <a href>大众点评</a>
        <a href>美团旅行</a>
        <a href>榛果民宿</a>
        <a href>大众点评下载</a>
        <a href>美团收银官网</a>
        <a href>美团点评餐饮学院</a>
        <a href>快驴进货商家合作</a>
      </div>
      <div class="footer-copyright">
        <div class="hr"></div>
        <span class="footer-copyright-text">
          ©2019 美团网
          <a href>京ICP证070791号</a>
        </span>
      </div>
    </footer>

</template>


<script>
export default {
  data() {
    return {};
  },
  methods: {
    submitMine(){
      this.$router.push({path:"/Mine"})
    },
     submitMtDownLoad(){
      this.$router.push({path:"/MtDownLoad"})
    },
      submitHelp(){
      this.$router.push({path:"/Help"})
    }
  }
 
};
</script>

<style>
footer {
  display: flex;
  background: #fff;
}
.dingwei {
  color: #999999;
  font-family: PingFangSC-Regular;
  font-size: 0.26rem;
  margin-left: 0.2rem;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
}
#zh {
  padding-left: 0;
  color: #222222;
  margin-top: -0.06rem;
  font-size: 0.26rem;
  font-family: PingFangSC-Medium;
}
#zh > img {
  width: 0.24rem;
  height: 0.274rem;
  margin-top: -0.06rem;
  vertical-align: middle;
  border: 0;
  margin-right: 0.1rem;
}
.foot {
  display: flex;
}
.foot li {
  flex: 1;
  border-right: 0.02rem solid #666;
  text-align: center;
}
.foot li:last-child {
  border-right: 0 !important;
}
.foot li > a {
  color: #fe8c00;
  font-weight: 400;
  font-size: 0.22rem;
}

.footer-links {
  margin: 0.3rem 0.2rem !important;
  font-size: 0.19rem !important;
  text-align: center;
  color: #646464;
  font-family: PingFangSC-Medium;
}
.footer-links a {
  color: #646464;
  font-family: PingFangSC-Regular;
  font-size: 0.19rem;
}
.footer-links a + a {
  padding-bottom: 0.2rem;
}
.footer-links a + a {
  padding-left: 0.5rem;
  display: inline-block;
  padding-bottom: 0.15rem;
}

.footer-copyright-text {
  background: #ffffff;
  font-size: inherit;
  position: relative;
  padding: 0 0.3rem;
  color: #999;
}
.footer-copyright {
  font-size: 0.19rem;
  text-align: center;
  position: relative;
}
.footer-copyright .hr {
  display: block;
  content: "";
  width: 100%;
  position: absolute;
  top: 50%;
  border-top: 1px solid #999;
}
.footer-copyright a {
  font-size: inherit;
  color: #999;
  cursor: pointer;
}

</style>