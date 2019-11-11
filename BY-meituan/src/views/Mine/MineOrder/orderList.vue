<template>
<div>
  <div class="order-item" data-id="5461998743">
    <a
      class="del-btn sp-order-center sp-order-center__delete show"
      data-href="https://ordercenter.meituan.com/ordercenter/user/orderDelete/1"
    ></a>
    <div class="order" data-href="https://meishi.meituan.com/i/order/detail/5461998743">
      <div class="left">
        <div class="img-ctn">
          <img
            class="deal-avatar"
            src="//p1.meituan.net/deal/a76099214890a0615c31f04a066dc62567133.jpeg@0_96_677_410a|388h_640w_2e_90Q|76w_76h_1e_1c_50q_50Q"
            onerror="loadError()"
          />
        </div>
      </div>
      <div class="right">
        <dl>
          <dt class="title">
            <div>单人自助水饺</div>
            <div class="pingjia">待付款</div>
          </dt>
          <dt class="item">数量: 3</dt>
          <dt class="item">总价: ￥74.4</dt>
        </dl>
      </div>
    </div>
  </div>
  <div class="order-item" data-id="5461998743">
    <a
      class="del-btn sp-order-center sp-order-center__delete show"
      data-href="https://ordercenter.meituan.com/ordercenter/user/orderDelete/1"
    ></a>
    <div class="order" data-href="https://meishi.meituan.com/i/order/detail/5461998743">
      <div class="left">
        <div class="img-ctn">
          <img
            class="deal-avatar"
            src="//p1.meituan.net/deal/a76099214890a0615c31f04a066dc62567133.jpeg@0_96_677_410a|388h_640w_2e_90Q|76w_76h_1e_1c_50q_50Q"
            onerror="loadError()"
          />
        </div>
      </div>
      <div class="right">
        <dl>
          <dt class="title">
            <div>单人自助水饺</div>
            <div class="pingjia">待评价</div>
          </dt>
          <dt class="item">数量: 3</dt>
          <dt class="item">总价: ￥74.4</dt>
          <dt class="btn-container ">
                <a class="mt-btn" data-style="1" href="https://i.meituan.com/client" @click.prevent='goDownload'>待评价</a>
             </dt>
        </dl>
      </div>
    </div>
  </div>
  <Homecomh class="footer-all"></Homecomh>
</div>
  
 
</template>

<script>
import Homecomh from "../../../components/Homecomh.vue";
export default {
    data(){
      return{

      }
     
    }, 
    methods: {
       goDownload(){
         this.$router.push('/MtDownLoad');
       }
    },
    components: {
        Homecomh
      }

};
</script>

<style lang="css" scoped>
.order-item {
  margin-top:0.1rem;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0.3rem 0.24rem;
  border-bottom: 1px solid #ccc;
  position: relative;
  overflow: visible;
  -webkit-transition: -webkit-transform 0.2s;
}
.order-item .del-btn {
  display: none;
  width: 0.45rem;
  height: 0.45rem;
  text-align: center;
  line-height: 0.45rem;
  position: absolute;
  left: -0.65rem;
  top: 50%;
  background-color: #ec5330;
  color: #fff;
  -webkit-transform: translateY(-50%);
  border-radius: 50%;
  font-size: 0.4rem;
}
.order-item .order {
    width: 100%;
    position: relative;
}
.order-item .left {
    position: absolute;
    left: 0;
    top: 0;
    width: .76rem;
}
.order-item .left .img-ctn {
    background: #f4f4f4;
    width: .76rem;
    height: .76rem;
}
.order-item .left .img-ctn img {
    width: .76rem;
    height: .76rem;
    border-radius: .08rem;
}
.order-item .right {
    box-sizing: border-box;
    margin-left: .92rem;
}
dl, dl dt {
    margin: 0;
    padding: 0;
}
.order-item .right dl dt.title {
    color: #333;
    height: .44rem;
    line-height: .44rem;
    font-size: .26rem;
    padding-bottom: .1rem;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
 .right dl dt.title div:first-child {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.pingjia{
      padding-left: 2.65rem;
}

.order-item .right dl .btn-container {
    text-align: right;
    height: .54rem;
    margin-top: -.2rem;
}
.order-item .right dl .btn-container .mt-btn {
    display: inline-block;
    box-sizing: border-box;
    height: .54rem;
    line-height: .54rem;
    color: #646464;
    margin-right: .1rem;
    border: .01rem solid #999;
    padding: 0 .24rem;
    border-radius: .15rem;
}
</style>