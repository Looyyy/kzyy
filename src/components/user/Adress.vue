<template>
  <div class="adress">
    <!-- <div class="title">旅游电商</div> -->

    <van-nav-bar title="我的收货地址" left-arrow @click-left="onClickLeft" />

    <div class="adress_bg"></div>

    <van-address-list v-model="chosenAddressId" :list="list" @add="onAdd" @edit="onEdit" add-button-text="添加收货地址"  />
  </div>
</template>

<script>
import { NavBar, AddressList } from "vant";

export default {
  components: {
    [NavBar.name]: NavBar,
    [AddressList.name]: AddressList,
  },
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/user" });
    },
    onAdd() {
      this.$router.push({ path: "/user/adressCreated" });
    },
    onEdit(item, index) {
      console.log(index);
      this.$router.push({ path: "/user/adressEdit" });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
 <style  scoped>
.van-address-list__add {
  top: 46px;
}
.van-address-list {
  margin-top: 10px;
}
.van-button--danger {
  background-color: #1aad19;
  border: 1px solid #1aad19;
}
.van-button--large {
  width: 50%;
  margin-left: 25%;
  border-radius: 10px;
  margin-top: 10px;
}
.van-button::before {
  content: "564" !important;
}
.adress_bg{
  width: 100%;
  height: 70px;
  background-color: #F3F3F3;
}


</style>



