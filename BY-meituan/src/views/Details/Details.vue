<template>
  <div class="details">
    <!-- 头部 -->
    <header class="navbar">
      <div class="nav-wrap-left">
        <a href="" @click.prevent="Detailsback" class="iconfont  icon-fanhui"></a>
      </div>
      <div class="nav-header">团购详情</div>
      <div class="nav-wrap-right">
        <a href="###">
          <span>
            <i class="iconfont icon-shouchang"></i>
            收藏
          </span>
        </a>
        <a href="###">
          <span>
            <i class="iconfont icon-daohang"></i>
            导航
          </span>
        </a>
      </div>
    </header>
    <!--内容  -->
    <div class="content-wrapper">
      <!-- banner图片 -->
      <div class="banner-download">
        <div class="imgbox">
          <img
            src="//s1.meituan.net/bs/file?f=meis/meishi.mobile:img/app_download_banner.png@44d57b8"
            alt
          />
        </div>
      </div>
      <!-- 商品图片详情 -->
      <div class="deal">
        <div class="list">
          <!-- 商品详情图片 -->
          <a href="###">
            <img src="//p1.meituan.net/deal/07fcf17d1b78b74f76c8305f3814d778132201.jpg" alt />
            <div class="desc">
              <h1>铁木真</h1>
              <span>单人自助</span>
            </div>
          </a>
          <!-- 立即抢购 -->
          <div class="list-group list-top">
            <div class="group-item dd-padding buy-price">
              <div class="container">
                <div class="price">
                  <strong>79.6</strong>
                  <span class="strong-color">元</span>
                  <span class="retail-price">门市价83元</span>
                </div>
              </div>
              <a href="" @click.prevent="submitOrder">立即抢购</a>
            </div>

            <div class="group-item dd-padding agreement">
              <ul class="agree">
                <li class="color-ok">
                  <i class="iconfont icon-qian"></i>
                  <span>支持随时退款</span>
                </li>
                <li class="color-ok">
                  <i class="iconfont icon-duihao"></i>
                  <span>支持过期退换</span>
                </li>
                <li class="agreement-solds">
                  <i class="iconfont icon-yishou"></i>
                  <span>已售170602</span>
                </li>
              </ul>
            </div>
          </div>
          <!-- 五星评价 -->
          <div class="list-group tags-container">
            <div class="group-pingjia">
              <a href="###" class="star-row">
                <div class="more more-weak comment-headline">
                  <span class="stars">
                    <i class="iconfont icon-start"></i>
                    <i class="iconfont icon-start"></i>
                    <i class="iconfont icon-start"></i>
                    <i class="iconfont icon-star-line"></i>
                    <i class="iconfont icon-star-line"></i>
                    <em>3.3</em>
                  </span>
                  <span class="pull-right">1135人评价 ＞</span>
                </div>
              </a>
            </div>
            <!-- 评价详情 -->
            <div class="dd-padding cloud-tag">
              <a href="###" class="btn-tag">
                <el-button plain class="anniu">菜品差126</el-button>
              </a>
              <a href="###" class="btn-tag">
                <el-button plain class="anniu huangse">味道赞90</el-button>
              </a>
              <a href="###" class="btn-tag">
                <el-button plain class="anniu huangse">回头客29</el-button>
              </a>
              <a href="###" class="btn-tag">
                <el-button plain class="anniu">海鲜差29</el-button>
              </a>
              <a href="###" class="btn-tag">
                <el-button plain class="anniu">分量少27</el-button>
              </a>
              <a href="###" class="btn-tag">
                <el-button plain class="anniu">饮品差21</el-button>
              </a>
              <a href="###" class="btn-tag">
                <el-button plain class="anniu">点心差18</el-button>
              </a>
              <a href="###" class="btn-tag">
                <el-button plain class="anniu">上菜慢13</el-button>
              </a>
              <a href="###" class="btn-tag">
                <el-button plain class="anniu huangse">交通便利9</el-button>
              </a>
              <a href="###" class="btn-tag">
                <el-button plain class="anniu">朋友聚餐3</el-button>
              </a>
            </div>
          </div>
          <!-- 最新通知 -->
          <div class="new-voice-container list-group">
            <div class="group-title">最新通知</div>
            <div
              class="group-item dd-padding voice-info"
            >【11月1日更新】分店暂停接待，铁木真烧烤涮（风雅园店）店有效期内无法接待团购用户，您可前往其他分店消费。给您带来不便，深表歉意。</div>
          </div>
          <!-- 商家信息 -->
          <div class="list-group poi-container">
            <div class="group-title">商家信息</div>
            <div class="group-item dd-padding">
              <div class="merchant-card">
                <div class="biz-detail">
                  <a href="###" class="detail-info">
                    <h5>铁木真自助涮烤城（石景山店）</h5>
                    <div class="address single-line">石景山区鲁谷大街51号天大商场2楼（重兴嘉园4号楼2层）</div>
                    <div class="dist">
                      <span class="iconfont icon-weizhi"></span>
                      <span class="dist-title">离我最近</span>
                    </div>
                  </a>
                </div>
                <div class="biz-call">
                  <a href="###" class="phone">
                    <div class="iconfont icon-dianhua"></div>
                  </a>
                </div>
              </div>
            </div>
            <!-- 确认拨打电话？ -->
            <div style="display:none"></div>
            <div class="more-merchant">
              <a href="###">
                <div class="more">
                  查看全部3家适用分店
                  <span>＞</span>
                </div>
              </a>
            </div>
          </div>
          <!-- 套餐 -->
          <div class="menu-container">
            <div class="menu-title">套餐</div>
            <div class="menu">
              <div class="menu-table">
                <div class="menu-item menu-tr">
                  <span class="left">单人自助套餐</span>
                  <span class="middle">1位</span>
                  <span class="rigth">89元</span>
                </div>
                <div class="beizhu">备注</div>
              </div>
              <div class="menu-item menu-explanation">
                <ul>
                  <li class="menu-li">单人自助餐：11:00-23:00</li>
                  <li class="menu-li">最多可用餐 2 小时</li>
                  <li class="menu-li">限量供应：无</li>
                  <li
                    class="menu-li"
                  >65岁（含）以上老人凭有效证件每人59元，每位顾客可免费携带1名1米（不含）以下儿童免费，1.1米（含）-1.2米（含）儿童每人39元，1.2米（不含）-1.4米（含）儿童每人49元，1.4米（不含）以上儿童按成人收费</li>
                </ul>
              </div>
            </div>
            <a href="###" class="more-text">
              <div class="more">
                查看图文详情
                <span>＞</span>
              </div>
            </a>
          </div>
          <!-- 购买须知 -->
          <div class="list-group notice-container">
            <div class="notice-title">购买须知</div>
            <div class="dd-padding">
              <div class="notice-item">
                <div class="notice-item-title">有效期</div>
                <ul class="notice-item-des">
                  <li>2018.7.24 至 2019.11.20 23:59（周末、法定节假日通用）</li>
                </ul>
              </div>
              <div class="notice-item">
                <div class="notice-item-title">使用规则</div>
                <ul class="notice-item-des">
                  <li
                    class="much-content"
                  >65岁（含）以上老人凭有效证件每人59元，每位顾客可免费携带1名1米（不含）以下儿童免费，1.1米（含）-1.2米（含）儿童每人39元，1.2米（不含）-1.4米（含）儿童每人49元，1.4米（不含）以上儿童按成人收费</li>
                  <li class="much-content">生日当天凭身份证可享受半价优惠，提前电话告知，有生日蛋糕赠送，详询商家</li>
                  <li class="much-content">团购用户不可同时享受商家其他优惠</li>
                  <li class="much-content">部分菜品因时令原因有所不同，请以店内当日实际供应为准</li>
                  <li class="much-content">无需预约，消费高峰期可能需要等位</li>
                  <li class="much-content">商家提供免费WiFi</li>
                  <li class="much-content">停车位收费标准：咨询商家</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 评价 -->
          <div class="pingjiapingjia">
            <div class="evaluation-container list-group">
              <div class="group-title">
                <a href="###">
                  评价
                  <span class="stars">
                    <i class="iconfont icon-start"></i>
                    <i class="iconfont icon-start"></i>
                    <i class="iconfont icon-start"></i>
                    <i class="iconfont icon-start"></i>
                    <i class="iconfont icon-star-line"></i>
                    <em>3.3</em>
                  </span>
                </a>
              </div>
            </div>
            <div class="feedback-container">
              <div class="feedback-card">
                <div class="user-wrapper">
                  <div class="user-pic">
                    <div class="imgbox">
                      <img src="http://www.dpfile.com/ugc/user/anonymous.png" alt />
                    </div>
                  </div>
                  <div class="user-info-text">
                    <div class="user-info">
                      <span class="user-name">匿名用户</span>
                    </div>
                    <div class="score">
                      <span class="stars">
                        <i class="iconfont icon-wuxing-copy"></i>
                        <i class="iconfont icon-wuxing-copy"></i>
                        <i class="iconfont icon-wuxing-copy"></i>
                        <i class="iconfont icon-wuxing-copy"></i>
                        <i class="iconfont icon-32"></i>
                      </span>
                      <span class="reqi">2019-10-13</span>
                    </div>
                  </div>
                </div>
                <div class="comment">
                  <div class="toggle-content">
                    男服务员的态度可以更好一些，问洗手间在哪直接说在外面，明明店里就有，给指路一下这么难呢？最后签字的服务员小姐姐蛮好的，应该是不会说话，辛苦了
                    菜品还可以，肉卷会散，螃蟹还可以，冻虾一般。火锅好吃。
                  </div>
                </div>
                <div class="pics">
                  <div class="imgbox">
                    <img src="../../assets/images/pingjia.png" alt />
                  </div>
                  <div class="imgbox">
                    <img src="../../assets/images/pingjia.png" alt />
                  </div>
                  <div class="imgbox">
                    <img src="../../assets/images/pingjia.png" alt />
                  </div>
                </div>
                <div class="poi-name">
                  <a href="###">铁木真（国泰百货双桥店）</a>
                </div>
              </div>
            </div>
            <div class="more-text">
              <a href="###">
                <div class="more">
                  查看全部7074条评价
                  <span class="jian">＞</span>
                </div>
              </a>
            </div>
            <!-- 相关推荐 -->
            <div class="related-deals-container">
              <div class="group-title">[铁木真]相关推荐</div>
              <div class="cards-container">
                <div class="related-deal-card">
                  <a href="###">
                    <div class="deal-card">
                      <span class="iconfont icon-tuan"></span>
                      <div class="deal-card-block-right">
                        <div class="title text-block">[延庆城区]单人自助餐</div>
                        <div class="price">
                          <span class="strong">59.9</span>
                          <span class="strong-color">元</span>
                          <span>门市价：69元</span>
                          <span class="line-right">已售25382</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="related-deal-card">
                  <a href="###">
                    <div class="deal-card">
                      <span class="iconfont icon-tuan"></span>
                      <div class="deal-card-block-right">
                        <div class="title text-block">[延庆城区]单人自助餐</div>
                        <div class="price">
                          <span class="strong">59.9</span>
                          <span class="strong-color">元</span>
                          <span>门市价：69元</span>
                          <span class="line-right">已售25382</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="related-deal-card">
                  <a href="###">
                    <div class="deal-card">
                      <span class="iconfont icon-tuan"></span>
                      <div class="deal-card-block-right">
                        <div class="title text-block">[延庆城区]单人自助餐</div>
                        <div class="price">
                          <span class="strong">59.9</span>
                          <span class="strong-color">元</span>
                          <span>门市价：69元</span>
                          <span class="line-right">已售25382</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      submitOrder(){
        this.$router.push({ path: '/YesOrder'})
    },
    Detailsback() {
      this.$router.push("/Home");
    }
  },
   components: {
    Ordercom
  }
};
</script>

<style lang="less">
.details {
  overflow: hidden;
  width: 6.4rem;
}
.navbar {
  display: -webkit-box;
  width: 6.4rem;
  height: 1.02rem;
  background: #06c1ae;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  .nav-wrap-left {
    display: block;
    position: absolute;
    left: 0.07rem;
    top: 0;
    a {
      color: #fff;
      font-size: 0.5rem;
      line-height: 1.02rem;
    }
  }
  .nav-header {
    width: 4.53rem;
    height: 1.02rem;
    font-size: 0.4rem;
    text-align: center;
    line-height: 1.02rem;
    color: #fff;
    margin: 0 0.6rem;
  }
  .nav-wrap-right {
    width: 1.92rem;
    height: 1.02rem;
    position: absolute;
    right: -0.3rem;
    top: 0;
    a {
      width: 0.94rem;
      height: 1.02rem;
      display: inline-block;
      font-size: 0.1rem;
      color: #fff;
      padding-top: 0.25rem;
      span {
        display: block;
        height: 0.9rem;
        position:absolute;
      }
      i {
        display: block;
        font-size: 0.28rem;
      }
    }
  }
}

.content-wrapper {
  width: 100%;
  height: 56.2rem;
  background: #f2f2f2;
  // banner图片
  .banner-download {
    .imgbox {
      width: 100%;
      height: 2.2rem;
      img {
        display: block;
        width: 100%;
      }
    }
  }
  // 商品图片详情
  .deal {
    .list {
      a {
        display: block;
        position: relative;
        overflow: hidden;
        height: 3.9rem;

        img {
          top: 50%;
          width: 100%;
          min-height: 100%;
        }
        .desc {
          position: absolute;
          left: 0.3rem;
          right: 0.3rem;
          bottom: 0.24rem;
          z-index: 1;
          text-shadow: 1px 1px 1px #000;
          color: #fff;
        }
      }
      //   立即抢购
      .list-top {
        width: 100%;
        height: 15.6em;
        overflow: hidden;
        border-bottom: 1px solid #ddd8ce;
        background: #fff;
        .buy-price {
          position: relative;
          top: 0;
          left: 0;
          color: #999;
          background-color: #fff;
          box-sizing: border-box;
          // border-bottom: 1px solid #ddd8ce;
          .container {
            width: 100%;
            //    height: 3.2rem;
            .price {
              padding: 0.2rem 0.1rem;
              height: 3.2em;
              border-bottom: 1px solid #ddd8ce;
              strong {
                font-size: 0.66rem;
                color: #06c1ae;
              }
              .strong-color {
                color: #06c1ae;
              }
              .retail-price {
                letter-spacing: -0.02rem;
              }
            }
          }
          a {
            position: absolute;
            right: 0.2rem;
            top: 0.21rem;
            height: 0.8rem;
            width: 2.6rem;
            margin-right: 0.3rem;
            line-height: 0.8rem;
            text-align: center;
            font-size: 0.4rem;
            background-color: #f90;
            border-radius: 0.1rem;
            display: block;
          }
        }
        .agreement {
          width: 5rem;
          height: 0.93re;
          display: block;
          .agree {
            font-size: 0.32rem;
            width: 100%;
            padding: 0.38rem 0.25rem;
            .color-ok {
              color: #6bbd00;
            }
            .agreement-solds {
              color: #666;
              margin: 0.2rem 0;
            }
            li {
              width: 50%;
              height: 0.56rem;
              line-height: 0.56rem;
              float: left;
              display: block;

              i {
                display: inline-block;
              }
              span {
                display: inline-block;
              }
            }
          }
        }
      }
      //   五星评价
      .tags-container {
        width: 6.4rem;
        height: 4.2rem;
        background: #fff;
        margin: 0.2rem 0;
        overflow: hidden;

        .group-pingjia {
          width: 6.4rem;
          height: 1.5rem;
          .star-row {
            text-decoration: none;
            display: block;
            width: 6.4rem;
            height: 0.56rem;
            padding: 0.3rem 0.1rem;
            border-bottom: 1px solid #ddd8ce;
            font-size: 0.38rem;
            .icon-wuxing-copy {
              color: #f90;
            }
            i {
              padding: 0 0.05rem;
            }
            em {
              font-style: normal;
              color: #f90;
            }
            .pull-right {
              padding-left: 1.3rem;
              color: #666;
              font-size: 0.32rem;
            }
          }
        }
        //   评价详情
        .cloud-tag {
          width: 6.4rem;
          height: 3.4rem;
          margin-bottom: 0.3rem;
          .btn-tag {
            // width: 25%;
            padding: .2rem;
            height: 0.3rem;
            display: inline-block;
            .anniu {
              width: 1.8rem;
              height: 0.8rem;
              padding: 0 0.11rem;
              margin-bottom: 0.14rem;
              line-height: 0.62rem;
              background: 0;
              border: 0.02rem solid #acacac;
              color: #999;
            }
            .huangse {
              color: #f90;
              border: 0.02rem solid #f90;
            }
          }
        }
      }
      //最新通知
      .new-voice-container {
        width: 100%;
        height: 2.5rem;
        background: #fff;
        padding: 0.4rem 0;
        margin-top: 0.2rem;
        .group-title {
          border-bottom: 1px solid #ddd8ce;
          font-size: 0.34rem;
          line-height: 1rem;
          padding-left: 0.3rem;
          color: #333;
        }
        .voice-info {
          width: 6.4rem;
          font-size: 0.28rem;
          color: #eb8706;
          margin: 0.3rem 0.1rem;
        }
      }
      //  商家信息
      .poi-container {
        width: 100%;
        height: 3.8rem;
        background: #fff;
        margin: 0.4rem 0;
        .group-title {
          border-bottom: 1px solid #ddd8ce;
          font-size: 0.34rem;
          line-height: 1rem;
          padding-left: 0.3rem;
          color: #333;
        }
        .dd-padding {
          padding: 0.3rem;
          height: 1.4rem;
          border-bottom: 1px solid #ccc;
        }
        .merchant-card {
          width: 6.4rem;
          font-size: 0.28rem;
          position: relative;
          .biz-detail {
            width: 4.5rem;
            h5 {
              margin-top: 0;
              margin-bottom: 0.06rem;
              font-size: 0.32rem;
              color: #000;
            }
            .single-line {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: #666;
            }
            .detail-info {
              display: block;
              width: 4.5rem;
              height: 1.2rem;
            }
            .dist {
              font-size: 0.28rem;
              .dist-title {
                color: #eb8706;
                margin-left: 0.2rem;
              }
            }
          }
          .biz-call {
            width: 1.4rem;
            text-align: center;
            border-left: 1px solid #ddd8ce;
            font-size: 0.5rem;
            height: 1.2rem;
            line-height: 1.2rem;
            position: absolute;
            right: 0.3rem;
            top: 0;
            .phone {
              color: #06c1ae;
            }
          }
        }
        .more-merchant {
          width: 6.4rem;
          height: 0.8rem;
          a {
            display: block;
            width: 100%;
            .more {
              color: #06c1ae;
              font-size: 0.3rem;
              padding: 0.2rem;
              span {
                padding-left: 2.5rem;
              }
            }
          }
        }
      }
      //   套餐
      .menu-container {
        width: 6.4rem;
        height: 7.35rem;
        background: #fff;
        .menu-title {
          border-bottom: 1px solid #ddd8ce;
          font-size: 0.34rem;
          line-height: 1rem;
          padding-left: 0.3rem;
          color: #333;
        }
        .menu-tr {
          display: flex;
          display: -webkit-box;
          display: -ms-flexbox;
          padding-top: 0;
          padding-bottom: 0;
          font-size: 0.3rem;
          border-bottom: 1px solid #ddd8ce;
          span {
            flex: 1;
            -webkit-box-flex: 1;
            -moz-box-flex: 1;
            display: block;
            padding: 0.22rem 0;
            padding-right: 0.2rem;
            text-align: center;
            border-right: 1px solid #ddd8ce;
          }
        }
        .beizhu {
          background: #f8f9fa;
          padding: 0.1rem;
          margin: 0;
          text-align: center;
          font-size: 0.3rem;
          color: #000;
        }
      }
      .menu-explanation {
        border-bottom: 1px solid #ddd8ce;
        ul {
          height: 4rem;
          list-style-type: disc;
          padding-left: 0.6rem;
          .menu-li {
            font-size: 0.3rem;
            color: #333;
          }
        }
      }
      .more-text {
        width: 100%;
        height: 0.6rem;
        .more {
          color: #06c1ae;
          font-size: 0.3rem;
          padding: 0.2rem;
          span {
            padding-left: 3.7rem;
          }
        }
      }
    }
    // 购买须知
    .notice-container {
      width: 100%;
      height: 10.43rem;
      background: #fff;
      margin: 0.4rem 0;
      border-bottom: 1px solid #ddd8ce;
      .dd-padding {
        padding: 0.3rem;
      }
      .notice-title {
        border-bottom: 1px solid #ddd8ce;
        font-size: 0.34rem;
        line-height: 1rem;
        padding-left: 0.3rem;
        color: #333;
      }
      .notice-item {
        font-size: 0.3rem;
        .notice-item-title {
          font-size: 0.3rem;
          color: #ff9900;
          line-height: 0.8rem;
        }
      }
      .much-content {
        list-style-type: initial;
        margin-left: 0.4rem;
      }
    }
    // 评价
    .pingjiapingjia {
      width: 6.4rem;
      height: 15.87re;
      background: #fff;
      .evaluation-container {
        border-bottom: 1px solid #ddd8ce;

        .group-title {
          height: 0.66rem;
          line-height: 0.66rem;
          width: 100%;
          padding: 0.2rem 0.2rem;
          border-bottom: 1px solid #ddd8ce;
          a {
            display: block;
            font-size: 0.34rem;
            color: #333;
            .stars {
              padding-left: 2.4rem;
              .icon-wuxing-copy {
                color: #f90;
              }
              i {
                padding: 0 0.05rem;
              }
              em {
                font-style: normal;
                color: #f90;
              }
            }
          }
        }
      }
      .feedback-container {
        width: 100%;
        height: 5.8rem;
        overflow: hidden;
        .feedback-card {
          height: 5.69rem;
          border-bottom: 1px solid #ddd8ce;
          .user-wrapper {
            width: 6rem;
            height: 0.73rem;
            position: relative;
            .imgbox {
              img {
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                vertical-align: middle;
                border: 0;
                border-radius: 50%;
                -webkit-border-radius: 50%;
                background: none;
              }
            }
          }
          .user-info-text {
            margin-left: 0.8rem;
            font-size: 0.24rem;
            color: #999;
            vertical-align: top;
            height: 0.73rem;
            overflow: hidden;
            .user-info {
              margin-bottom: 0.06rem;
              font-size: 0.24rem;
              line-height: 1.41;
              color: #666;
            }
            .score {
              margin-bottom: 0.4rem;
              font-size: 0.1rem;
              margin-top: -0.06rem;
              .icon-wuxing-copy {
                color: #f90;
              }
              i {
                padding: 0 0.05rem;
              }
              .pull-right {
                color: #666;
                font-size: 0.1rem;
              }
              .reqi {
                font-size: 0.24rem;
                margin-left: 0.2rem;
              }
            }
          }
          .comment {
            height: 2.8rem;
            width: 6rem;
            .toggle-content {
              font-size: 0.3rem;
              color: #333;
              padding: 0.2rem;
            }
          }
          .pics {
            width: 100%;
            height: 1.23rem;
            padding-left: 0.2rem;
            overflow: hidden;
            .imgbox {
              float: left;
              margin-right: 0.1rem;
              img {
                display: block;
                width: 1.1rem;
                height: 1.1rem;
              }
            }
          }
          .poi-name {
            height: 0.41rem;
            width: 100%;
            padding: 0.2rem;
            font-size: 0.28rem;
            color: #666;
          }
        }
      }
    }
    .more-text {
      a {
        display: block;
        color: #06c1ae;
        padding: 0 0.2rem;
        height: 1.2rem;
        line-height: 0.8rem;
        font-size: 0.3rem;
        background: #fff;
        border-bottom: 10px solid #f2f2f2;
      }
      .more {
        position: relative;
        padding-right: 0.3rem;
        width: 100%;
        box-sizing: border-box;
        .jian {
          border-color: #666;
          position: absolute;
          right: 0.25rem;
          top: 8px;
          display: block;
          font-size: 0.34rem;
        }
      }
    }
    // 相关推荐
    .related-deals-container {
      margin-top: 1rem;
      .group-title {
        border-bottom: 1px solid #ddd8ce;
        font-size: 0.34rem;
        line-height: 1.5;
        padding: 0.22rem 0.2rem 0.14rem 0.2rem;
        color: #333;
      }
      .cards-container {
        margin-top: 0.5rem;
        .related-deal-card {
          height: 2rem;

          a {
            display: block;
            height: 1.5rem;
            line-height: 1.5rem;
            color: #06c1ae;
            outline: none;
            text-decoration: none;
            padding-left: 0.2rem;
            .deal-card {
              position: relative;
              border-bottom: 1px solid #ddd8ce;
              height: 1.36rem;
              .icon-tuan {
                position: absolute;
                top: -0.5rem;
                left: 0;
              }
            }
            .deal-card-block-right {
              position: relative;
              margin-left: 0.45rem;
              margin-right: 0.2rem;
              height: 0.4rem;
              .text-block {
                width: 100%;
                font-size: 0.3rem;
                color: #666;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
              }
            }
            .price {
              position: absolute;
              bottom: -0.6rem;
              left: 0;
              width: 100%;
              color: #666;
              width: 5.56rem;
              .strong {
                font-size: 0.38rem;
                color: #06c1ae;
                // display: inline-block;
              }
              .strong-color {
                margin-right: 0.1rem;
                font-size: 0.26rem;
                color: #06c1ae;
              }
              .line-right {
                position: absolute;
                top: 0.05rem;
                right: 0;
                font-size: 0.24rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>