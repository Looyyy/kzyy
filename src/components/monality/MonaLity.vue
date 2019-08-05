<template>
  <div class="app.container">
    <van-nav-bar title left-text="商品详情" left-arrow @click-left="onClickLeft" />
    <!-- 头部轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="black">
      <van-swipe-item>
        <img src="../../assets/images/slidepic6.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/images/slidepic7.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/images/slidepic8.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/images/slidepic9.jpg" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- 产品描述 -->
    <p class="describe">中国足球队 包邮</p>
    <!-- 价格类 -->
    <div class="price">
      价格：
      <span class="oldPrice">
        <b>￥98.33</b>
      </span>
      <span class="nowprice">￥55.98</span>
    </div>
    <div class="specification">
      规格:
      <span class="weight">三斤装</span>
      <span class="check_box" @click="showTye">
        <b>
          <van-icon name="arrow" />
        </b>
      </span>
    </div>
    <van-sku
      v-model="showBase"
      :sku="skuData.sku"
      :goods="skuData.goods_info"
      :goods-id="skuData.goods_id"
      :hide-stock="skuData.sku.hide_stock"
      :quota="skuData.quota"
      :quota-used="skuData.quota_used"
      :initial-sku="initialSku"
      :show-add-cart-btn="showcartbtn"
      reset-stepper-on-hide
      reset-selected-sku-on-hide
      disable-stepper-input
      :close-on-click-overlay="closeOnClickOverlay"
      :custom-sku-validator="customSkuValidator"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
    <!-- 图文介绍部分 -->
    <div class="imgTitle">
      <h5>商品介绍</h5>
      <img src="../../assets/images/slidepic6.jpg" alt />
      <img src="../../assets/images/slidepic7.jpg" alt />
      <img src="../../assets/images/slidepic8.jpg" alt />
    </div>

    <div class="purchase">
      <router-link to="../shop/monaLity/confirmOrder">
        <van-button type="primary" @click="nowPrimary">立即购买</van-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import skuData from "./data";
import {
  Tag,
  Col,
  Icon,
  Cell,
  Button,
  Field,
  CellGroup,
  Row,
  Sku,
  NavBar,
  Swipe,
  Toast,
  Popup,
  Overlay,
  SwipeItem
} from "vant";

export default {
  components: {
    [Tag.name]: Tag,
    [Button.name]: Button,
    [Col.name]: Col,
    [Sku.name]: Sku,
    [NavBar.name]: NavBar,
    [Popup.name]: Popup,
    [Row.name]: Row,
    [Overlay.name]: Overlay,
    [Field.name]: Field,
    [Toast.name]: Toast,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data() {
    return {
      showBase: false,
      skuData: skuData,
      showCustom: false,
      showStepper: false,
      showSoldout: false,
      showcartbtn: false,
      closeOnClickOverlay: true,
      initialSku: {
        s1: "30349",
        s2: "1193",
        selectedNum: 3
      },
      customSkuValidator: () => "请选择xxx!"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/shop" });
    },
    nowPrimary() {
      this.$router.push({ name: "goodsInfo" });
    },
    onBuyClicked(data) {
      this.$toast("buy:" + JSON.stringify(data));
      console.log(JSON.stringify(data));
    },

    onAddCartClicked(data) {
      this.$toast("add cart:" + JSON.stringify(data));
    },
    showTye() {
      this.showBase = true;
    }
  }
};
</script>

<style  scoped>
@import "../../assets/css/describe/describe.css";
.van-icon-arrow-left:before {
  font-size: 26px;
  color: #000;
}
.van-nav-bar__title {
  font-size: 20px;
  font-weight: 600;
}

.van-nav-bar__arrow + .van-nav-bar__text {
  font-size: 18px;
  color: #000;
}
</style>



