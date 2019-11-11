~<template>
  <div>
    <Enroll title="支付订单"></Enroll>
  <van-tabs v-model="active" color="#FFBD00">
  <van-tab title="全部">内容 1</van-tab>
  <van-tab title="待付款">内容 2</van-tab>
  <van-tab title="待使用">内容 3</van-tab>
  <van-tab title="待评价">内容 4</van-tab>
</van-tabs>
  </div>
</template>


<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Tab).use(Tabs);
import Enroll from "../../components/Enroll.vue";
export default {
  data() {
    return {
       active: 2
    };
  },
  components: {
    Enroll
  }
};
</script>