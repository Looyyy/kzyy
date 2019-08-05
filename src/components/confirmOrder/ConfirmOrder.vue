<template>
  <div class="confirm">
    <van-nav-bar title="确认订单" left-arrow @click-left="onClickLeft" />

    <div class="confirm_btn">
      <div class="confirm_order">
        <span>添加收货地址</span>
      </div>
    </div>

    <div class="confirm_pay">
      <div class="container">
        <div class="confirm_paybox">
          <div class="pay_text">支付方式</div>
          <div class="pay_wx">
            <img src="../../assets/images/weixin_01.png" alt />
            <span>微信支付</span>
          </div>
        </div>
      </div>
    </div>

    <div class="confirm_shop">
      <!--  -->
      <div class="shop_title">
        <h1>官方商城</h1>
      </div>
      <div class="shop_box">
        <div class="box_img">
          <img src="../../assets/images/tee.jpg" alt />
        </div>
        <div class="box_text">
          <div class="box_textTitle">正宗茶山丽江普洱 清热解毒 1kg 包邮</div>
          <div class="box_textNum">
            10kg 特惠装
            <span>x1</span>
          </div>
          <div class="box_textPrice">￥499</div>
        </div>
        <div class="box_edit">
          <a href="javascript:void(0);">编辑</a>
        </div>
      </div>
    </div>

    <div class="promotion">
      <div class="promotion_text">促销</div>
      <div class="promotion_pricce">-9.99</div>
    </div>

    <div class="promotion">
      <div class="promotion_text">配送方式</div>
      <div class="promotion_pricce">普通快递：0.00元</div>
    </div>

    <div class="paynum">
      共计1件商品，合计（含运费）：
      <span>¥489</span>
    </div>

    <div class="submit_bar">
      <div class="submit_price">
        实付款：
        <span>￥489</span>
      </div>
      <div class="submit_btn">
        <van-button type="danger">提交订单</van-button>
      </div>
    </div>

    <!-- <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit()" /> -->
  </div>
  <!-- </div> -->
</template>

<script>
import { NavBar, Button, SubmitBar, toast } from "vant";

export default {
  components: {
    [NavBar.name]: NavBar,
    [Button.name]: Button,
    [SubmitBar.name]: SubmitBar,
    [toast.name]: toast
  },
  data() {
    return {};
  },
  methods: {
    //跳转页面
    dash() {
      alert(231);
      this.$router.push({ path: "/dashboard" });
    },
    onClickLeft() {
      this.$router.push({path:"/shop/monality"})
    },
    onSubmit() {
      this.$toast("正在提交");
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
 <style  scoped>
@import "../../assets/css/confirmOrder/confirmOrder.css";
</style>



