<template>
  <div>
    <!-- shop -->
    <myheader></myheader>

    <div class="shop_box">
      <div class="contain">
        <div class="shop_title">热卖商品</div>

        <!-- 热卖商品 -->
        <div class="shop_hot">
          <div class="shop_img">
            <img src="../assets/images/tee.jpg" alt />
          </div>
          <div class="shop_text">
            <h2>正宗茶山丽江普洱 清热解毒1kg 包邮</h2>
            <p>
              ￥499 &nbsp;&nbsp;
              <s style="color:#6f6e6e; font-size: 15px; font-weight:normal">￥699</s>
            </p>
            <van-button type="primary" size="small" @click="btn_buy">立即购买</van-button>
          </div>
        </div>

        <!-- 分隔线 -->
        <van-divider />

        <!-- 产品缩略图 -->
        <div class="shop_img_box">
          <ul>
            <li>
              <router-link to="../shop/monaLity">
                <img src="../assets/images/tee.jpg" alt />
                <p>正宗茶山丽江普洱 清热解毒1kg 包邮</p>
                <span>
                  ￥499 &nbsp;&nbsp;
                  <s style="color:#6f6e6e; font-size: 15px;">￥699</s>
                </span>
              </router-link>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img src="../assets/images/tee.jpg" alt />
                <p>正宗茶山丽江普洱 清热解毒1kg 包邮</p>
                <span>
                  ￥499 &nbsp;&nbsp;
                  <s style="color:#6f6e6e">￥699</s>
                </span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img src="../assets/images/tee.jpg" alt />
                <p>正宗茶山丽江普洱 清热解毒1kg 包邮</p>
                <span>
                  ￥499 &nbsp;&nbsp;
                  <s style="color:#6f6e6e; font-size: 15px;">￥699</s>
                </span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img src="../assets/images/tee.jpg" alt />
                <p>正宗茶山丽江普洱 清热解毒1kg 包邮</p>
                <span>
                  ￥499 &nbsp;&nbsp;
                  <s style="color:#6f6e6e">￥699</s>
                </span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img src="../assets/images/tee.jpg" alt />
                <p>正宗茶山丽江普洱 清热解毒1kg 包邮</p>
                <span>
                  ￥499 &nbsp;&nbsp;
                  <s style="color:#6f6e6e; font-size: 15px;">￥699</s>
                </span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img src="../assets/images/tee.jpg" alt />
                <p>正宗茶山丽江普洱 清热解毒1kg 包邮</p>
                <span>
                  ￥499 &nbsp;&nbsp;
                  <s style="color:#6f6e6e">￥699</s>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div class="clear"></div>
        <div class="more">
          <a href="javascript:void(0);">更多商品>></a>
        </div>
      </div>

      <!-- 点击展开/收起 -->
      <!-- <div class="hello">
        <div v-for="item in showList">{{item}}</div>
        <div @click="showAll = !showAll" class="show-more">{{word}}</div>
      </div>-->
    </div>

    <myfooter></myfooter>
  </div>
</template>

<script>
import { Button, Tabbar, TabbarItem, Divider } from "vant";
import myheader from "../components/share/header";
import myfooter from "../components/share/footer";
export default {
  components: {
    myheader,
    myfooter,
    [Button.name]: Button,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Divider.name]: Divider
  },
  data() {
    return {
      active: 1
      // toLearnList: [
      //   "html",
      //   "css",
      //   "javascript",
      //   "java",
      //   "php" //进行显示的数据
      // ],
      // showAll: false //标记数据是否需要完全显示的属性
    };
  },

  //监控自己定义的变量
  
  // computed: {
  //   showList: function() {
  //     if (this.showAll == false) {
  //       //当数据不需要完全显示的时候
  //       var showList = []; //定义一个空数组
  //       if (this.toLearnList.length > 4) {
  //         // 这里我们先显示前三个
  //         for (var i = 0; i < 4; i++) {
  //           showList.push(this.toLearnList[i]);
  //         }
  //       } else {
  //         showList = this.toLearnList;
  //       }
  //       return showList; //返回当前数组
  //     } else {
  //       return this.toLearnList;
  //     }
  //   },
  //   word: function() {
  //     if (this.showAll == false) {
  //       //对文字进行处理
  //       return "点击展开";
  //     } else {
  //       return "点击收起";
  //     }
  //   }
  // },
  methods: {
    onChange(index) {
      this.current = index;
    },
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
    btn_buy(){
      this.$router.go(-1)
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/shop/shop.css";
</style>
