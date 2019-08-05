<template>
  <div class="order">
    <!-- <div class="title">旅游电商</div> -->

    <van-nav-bar title="我的订单" left-arrow @click-left="onClickLeft" />

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="order_boxes">
        <div class="order_card">
          <div class="contain">
            <div class="card_shop">官方商城</div>

            <div class="card_one">
              <div class="card_img">
                <img src="../../assets/images/tee.jpg" alt />
              </div>

              <div class="card_text">
                <div class="card_title">正宗茶山丽江普洱 清热解毒 1kg 包邮</div>

                <div class="card_minbox">
                  <div class="card_des">10kg 特惠装</div>
                  <div class="card_num">
                    <span>x</span>2
                  </div>
                </div>
                <div class="card_minbox">
                  <div class="card_price">￥499</div>
                  <div class="card_state">已出单</div>
                </div>
              </div>
            </div>

            <div class="card_btn">
              <van-button type="primary" size="small" @click="service">申请售后</van-button>
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <div class="order_card">
          <div class="contain">
            <div class="card_shop">官方商城</div>

            <div class="card_one">
              <div class="card_img">
                <img src="../../assets/images/tee.jpg" alt />
              </div>

              <div class="card_text">
                <div class="card_title">正宗茶山丽江普洱 清热解毒 1kg 包邮</div>

                <div class="card_minbox">
                  <div class="card_des">10kg 特惠装</div>
                  <div class="card_num">
                    <span>x</span>2
                  </div>
                </div>
                <div class="card_minbox">
                  <div class="card_price">￥499</div>
                  <div class="card_state">已完成</div>
                </div>
              </div>
            </div>

            <div class="card_btn">
              <van-button type="primary" size="small">申请售后</van-button>
            </div>
            <div class="clear"></div>
          </div>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import { NavBar, Toast, PullRefresh, Button, Dialog } from "vant";

export default {
  components: {
    [NavBar.name]: NavBar,
    [Toast.name]: Toast,
    [PullRefresh.name]: PullRefresh,
    [Button.name]: Button,
    [Dialog.Component.name]: Dialog.Component
  },
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    //跳转页面
    dash() {
      alert(231);
      this.$router.push({ path: "/dashboard" });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("按钮");
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    },
    service() {
      Dialog.alert({
        title: "您的订单还未完成",
        message: "订单完成后的7天内可申请售后哦！"
      }).then(() => {
        // on close
      });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
 <style  scoped>
@import "../../assets/css/orders/orders.css";
</style>



