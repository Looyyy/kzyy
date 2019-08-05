<template>
  <div class="container">
    <van-nav-bar title="所有评论" left-text left-arrow @click-left="onClickLeft" />
    <div class="foot_box">
      <div class="content_box">
        <img src="../../assets/images/login.jpeg" class="psonImg" />
        <div class="contentBoy">
          <span class="userTem">娃哈哈</span>
          <span class="contentNum">这家伙很懒的哦</span>
        </div>
        <div class="goodNum">
          <a href>
            <img src="../../assets/images/zan.png" />
          </a>
          <span>55</span>
        </div>
      </div>
      <div class="content_box">
        <img src="../../assets/images/login.jpeg" class="psonImg" />
        <div class="contentBoy">
          <span class="userTem">娃哈哈</span>
          <span class="contentNum">这家伙很懒的哦</span>
        </div>
        <div class="goodNum">
          <a href>
            <img src="../../assets/images/zan.png" />
          </a>
          <span>55</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon, NavBar, Toast, Button } from "vant";

export default {
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Button.name]: Button,
    [Toast.name]: Toast
  },
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/comment/comment.css";

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

