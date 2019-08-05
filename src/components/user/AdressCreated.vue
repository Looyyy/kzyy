<template>
  <div class="adress">
    <!-- <div class="title">旅游电商</div> -->

    <van-nav-bar title="添加收货地址" left-arrow @click-left="onClickLeft" />

    <van-address-edit
      :area-list="areaList"
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import { NavBar, AddressList, AddressEdit, Toast } from "vant";
import areaList from "../../assets/js/area";

export default {
  components: {
    [NavBar.name]: NavBar,
    [AddressList.name]: AddressList,
    [Toast.name]: Toast,
    [AddressEdit.name]: AddressEdit
  },
  data() {
    return {
      areaList,
      searchResult: []
    };
  },
  methods: {
    //跳转页面
    dash() {
      alert(231);
     this.$router.go(-1)
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onAdd() {
      this.$router.push({ path: "" });
    },
    onEdit(item, index) {
      console.log(index);
      this.$router.push({ path: "" });
    },
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      // console.log(val)
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
 <style  scoped>
@import "../../assets/css/orders/orders.css";
</style>



