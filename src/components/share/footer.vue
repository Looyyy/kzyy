<template>
  <div>
    <van-tabbar v-model="active" active-color="#24C228">
      <van-tabbar-item v-for="(item,index) in tabbars" :key="index" :to="item.name">
        <span>{{item.title}}</span>
        <template slot="icon" slot-scope="props">
          <img :src="props.active ? item.active : item.normal" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, icon } from "vant";
export default {
  components: {
    name: "myfooter",
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [icon.name]: icon
  },

  data() {
    return {
      active: 0,
      tabbars: [
        {
          name: "/",
          title: "名片",
          normal: require("../../assets/images/business card.png"),
          active: require("../../assets/images/business card_01.png")
        },
        {
          name: "shop",
          title: "商城",
          normal: require("../../assets/images/sell.png"),
          active: require("../../assets/images/sell_01.png")
        },
        {
          name: "user",
          title: "我的",
          normal: require("../../assets/images/personal.png"),
          active: require("../../assets/images/personal_01.png")
        }
      ]
    };
  },
  created() {
    this.upactive();
    // console.log(this.active);
    // this.$router.push({path:'/'});
  },
  updated() {
    this.upactive();
    // console.log(this.active);
  },
  methods: {
    upactive() {
      this.nowPath = this.$route.path;
      //vue提供的方法
      if (this.nowPath == "/") {
        this.active = 0;
      } else if (this.nowPath == "/shop") {
        this.active = 1;
      } else if (this.nowPath == "/user") {
        this.active = 2;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.van-tabbar--fixed {
  display: flex;
  align-items: center;
  z-index: 999 !important;
}
a {
  flex: 1;
}
</style>
