<template>
  <div>
    <!-- 首页 -->
    <myheader></myheader>

    <div class="user_box">
      <div class="contain">
        <div class="user_boxT">
          <div class="user_img">
            <img src="../assets/images/boy.jpg" alt />
          </div>
          <div class="user_name">哇唧唧哇</div>
        </div>

        <div class="user_boxM">
          <div class="user_list">
            <router-link to="/user/orders">
              <div class="img">
                <img src="../assets/images/list.png" alt />
              </div>
              <div>我的订单</div>
            </router-link>
          </div>

          <div class="user_list">
            <router-link to="/user/adress">
              <div class="img">
                <img src="../assets/images/adress.png" alt />
              </div>
              <div>收货地址</div>
            </router-link>
          </div>
        </div>

        <!-- 名片夹 -->
        <p>名片夹</p>
        <div class="user_boxB">
          <div class="user_del" @click="onClick">
            <van-icon name="cross" />
          </div>
          <div class="user_info">
            <div class="user_text">
              <h1>刘小仙</h1>
              <h2>快之游有限公司</h2>
              <h2>云南丽江导游</h2>
              <h3>电话：134 xxxx xxxx</h3>
              <h3>邮箱：11111@163.com</h3>
            </div>
            <div class="user_img">
              <img src="../assets/images/boy.jpg" alt />
            </div>
            <div class="user_btn">
              <div class="btn_share">
                <div class="btn_l">
                  <img src="../assets/images/phone1.png" alt />
                  <div @click="callPhone">拨打电话</div>
                </div>
              </div>
              <div class="btn_line">|</div>
              <div class="btn_share">
                <div class="btn_l" @click="showPopup">
                  <img src="../assets/images/share.png" alt />
                  <div>分享名片</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="user_boxB">
          <div class="user_del" @click="onClick">
            <van-icon name="cross" />
          </div>
          <div class="user_info">
            <div class="user_text">
              <h1>刘小仙</h1>
              <h2>快之游有限公司</h2>
              <h2>云南丽江导游</h2>
              <h3>电话：134 xxxx xxxx</h3>
              <h3>邮箱：11111@163.com</h3>
            </div>
            <div class="user_img">
              <img src="../assets/images/boy.jpg" alt />
            </div>
            <div class="user_btn">
              <div class="btn_share">
                <div class="btn_l">
                  <img src="../assets/images/phone.png" alt />
                  <div @click="callPhone">拨打电话</div>
                </div>
              </div>
              <div class="btn_line">|</div>
              <div class="btn_share">
                <div class="btn_l" @click="showPopup">
                  <img src="../assets/images/share.png" alt />
                  <div>分享名片</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="user_boxB">
          <div class="user_del" @click="onClick">
            <van-icon name="cross" />
          </div>
          <div class="user_info">
            <div class="user_text">
              <h1>刘小仙</h1>
              <h2>快之游有限公司</h2>
              <h2>云南丽江导游</h2>
              <h3>电话：134 xxxx xxxx</h3>
              <h3>邮箱：11111@163.com</h3>
            </div>
            <div class="user_img">
              <img src="../assets/images/boy.jpg" alt />
            </div>
            <div class="user_btn">
              <div class="btn_share">
                <div class="btn_l">
                  <img src="../assets/images/phone.png" alt />
                  <div @click="callPhone">拨打电话</div>
                </div>
              </div>
              <div class="btn_line">|</div>
              <div class="btn_share">
                <div class="btn_l" @click="showPopup">
                  <img src="../assets/images/share.png" alt />
                  <div>分享名片</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>

      <!-- 弹出层 -->
      <van-popup v-model="show" round position="bottom">
        <div class="share_boxes">
          <div class="share_box">
            <div class="share">
              <div class="share_wx">
                <img src="../assets/images/wx.png" alt />
              </div>
              <div>微信好友</div>
            </div>
            <div class="share">
              <div class="share_mp">
                <img src="../assets/images/mp2.png" alt />
              </div>
              <div>名片海报</div>
            </div>
          </div>
          <div class="share_canle" @click="share_canle">取消</div>
        </div>
      </van-popup>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from "../components/share/header";
import myfooter from "../components/share/footer";
import { Popup, Icon, Dialog } from "vant";

export default {
  components: {
    myheader,
    myfooter,
    [Popup.name]: Popup,
    [Icon.name]: Icon,
    [Dialog.Component.name]: Dialog.Component
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    share_canle() {
      this.show = false;
    },
    callPhone() {
      window.location.href = "tel://13871531775";
    },
    onClick() {
      this.$dialog
        .alert({
          title: "提示", //加上标题
          message: "您确定删除该名片吗？", //改变弹出框的内容
          showCancelButton: true, //展示取消按钮
          // closeOnClickOverlay: true, //点击遮罩层时是否关闭弹窗
         
          
        })
        .then(() => {
          //点击确认按钮后的调用
          console.log("点击了确认按钮");
        })
        .catch(() => {
          //点击取消按钮后的调用
          console.log("点击了取消按钮");
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/user/user.css";
</style>
