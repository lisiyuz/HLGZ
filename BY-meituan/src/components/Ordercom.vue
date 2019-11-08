<template>
  
    <div class="footer-container">
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
    </div>
   
  
</template>

<script>
export default {
    data(){
        return{};
    }
}
</script>

<style lang="less" scoped>
.footer-container {
  padding: 0 0.2rem 0.7rem 0.2rem;
  background-color: #f0f0f0;

  .footer-bar {
    margin-bottom: 0.4rem;
    font-size: 0.28rem;

    .pull-right {
      float: right;

      .footer-city-btn {
        width: 0.8rem;
        border: 0.03rem solid #06c1ae;
        color: #06c1ae;
        display: inline-block;
        height: 0.6rem;
        padding: 0 0.32rem;
        text-align: center;
        border-radius: 0.06rem;
        line-height: 0.6rem;
      }
    }

    .footer-mine-btn {
      width: 0.8rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      border: 0.03rem solid #06c1ae;
      color: #06c1ae;
      display: inline-block;
      height: 0.6rem;
      padding: 0 0.32rem;
      text-align: center;
      border-radius: 0.06rem;
      line-height: 0.6rem;
    }
  }
  .footer-nav {
    margin-bottom: 0.18rem;
    line-height: 1;

    ul {
      font-size: 0.2rem;
      display: -webkit-box;
      font-weight: 500;
      .last-child {
        border-right: 0;
      }
      li {
        -webkit-box-flex: 1;
        border-right: 0.02rem solid #666;
        text-align: center;

        a {
          color: #06c1ae;
        }
      }
    }
  }
  .footer-links {
    margin: 0.24rem 0.2rem;
    font-size: 0.2rem;
    text-align: center;
    a {
      color: #06c1ae;
    }
  }
  .footer-copy {
    position: relative;
    font-size: 0.22rem;
    text-align: center;
    color: #999;
    .hr {
      display: block;
      position: absolute;
      width: 100%;
      top: 50%;
      border-top: 0.015rem solid #999;
    }
    span {
      position: relative;
      padding: 0 0.3rem;
      font-size: 0.19rem;
      text-align: center;
      background-color: #f0efed;
      color: #999;
    }
  }
}
</style>