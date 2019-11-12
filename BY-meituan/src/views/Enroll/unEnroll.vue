<template>
  <div class="all">
    <Enroll title="美团网"></Enroll>
    <van-tabs @click="onClick" color="#FFBD00" line-width="200" line-height="4">
      <van-tab title="美团账号登录">
        <van-cell-group>
          <van-field v-model="value" placeholder="账号名/手机号/Email" size="large" />
          <van-field v-model="value" placeholder="请输入您的密码" size="large" />
        </van-cell-group>
        <div class="btn-wrapper">
          <button class="btn-block">登录</button>
        </div>
      </van-tab>

      <van-tab title="手机验证登录">
        <van-cell-group>
  <van-field
    v-model="phone"
    label="手机号"
    placeholder="请输入手机号"
    error-message="手机号格式错误"
  />
</van-cell-group>
        <van-cell-group>
          <van-cell-group>
            <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
              <van-button slot="button" size="small" type="primary">发送验证码</van-button>
            </van-field>
          </van-cell-group>
        </van-cell-group>
        <div class="btn-wrapper-a">
      <button class="btn-block-a">登录</button>
    </div>
      </van-tab>
    </van-tabs>

    <ul class="subline">
      <li>
        <a>立即注册</a>
      </li>
      <li class="pull-right">
        <a>找回密码</a>
      </li>
    </ul>
  </div>
</template>


<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
Vue.use(Tab).use(Tabs);
import { Field } from "vant";
Vue.use(Field);
import Enroll from "../../components/Enroll.vue";
export default {
  data() {
    return { value: "", sms: "",phone:'' };
  },
  components: {
    Enroll
  },
  methods: {
    onClick(name, title) {
      this.$toast(title);
    }
  }
};
</script>
<style lang="less" scoped>
.van-button--primary {
  background-color: #dcdcdc;
  border: 1px solid #dcdcdc;
}
.btn-wrapper {
  margin: 0 0.2rem;
  width: 6.2rem;
  height: 0.85rem;

  bottom: 0;
  padding: 0.2rem 0rem;
  .btn-block {
    background-color: #ffbd00;
    color: rgb(59, 57, 57);
    border: 0;
    width: 6rem;
    height: 0.82rem;
    font-size: 0.3rem;
    border-radius: 0.15rem;
  }
}
.btn-wrapper-a {
  margin: 0 0.2rem;
  width: 6.2rem;
  height: 0.85rem;

  bottom: 0;
  padding: 0.2rem 0rem;
  .btn-block-a {
    background-color:  #dcdcdc;
    color: rgb(59, 57, 57);
    border: 0;
    width: 6rem;
    height: 0.82rem;
    font-size: 0.3rem;
    border-radius: 0.15rem;
  }
}
.subline {
  margin: 0.01rem 0.2rem;

  li {
    display: inline-block;
    a {
      font-size: 0.22rem;
          color: #FE8C00;
    }
  }
  .pull-right{
      float: right!important;
  }
}
</style>