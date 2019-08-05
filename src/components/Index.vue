<template>
  <div class="tempBig">
    <!-- 头部tal栏 -->
      <van-nav-bar
        title="名片"
        left-text=""
        left-arrow
        @click-left="onClickLeft"
      />
    <!-- 名片简介左 -->
      <div class="login_box">
      <div class="login_left">
          <img src="../assets/images/login.jpeg" class="loginImg">
        </div>
        <!-- 名片简介右 -->
        <div class="login_rigth">
          <div class="content_text">
            <b class="my_name">犀利姐</b>
            <br>
            <p class="my_company">快之游有限公司</p>
            <p class="my_designation">海南三亚导游</p>
            <p class="my_phone">电话:18965654545</p>
            <p class="my_mali">邮箱:87988798@qq.com</p>
            <p class="my_site">地址:海南省三亚市十八度大酒店</p>
          </div>
      </div>
      <div class="card">
              <a href=""><van-button plain type="primary" class="deposit_Tb">存入名片夹</van-button></a>
            </div>
    </div>
    <!-- 分享名片 -->
    <div class="call_play">
      <div class="share_box">
        <van-button plain type="primary" @click="myPopup" class="share_Tb" >
          <span>分享名片</span>
          </van-button>
          <van-popup
            v-model="shop"
            round
            position="bottom"
            :style="{ height: '20%'}">
          </van-popup>

      </div>
      <a href="" class="address_box">
        <van-button type="primary" class="address_Tb" style="color:#fff">存入通讯录</van-button>
      </a>
    </div>
    <!-- 滚动栏 --> 
     <div class="pos_box">
        <span>名片码</span>
      </div>
    <div class="news_lis">
      <div class="phone_box">
        <span @click="callPhone">
            <img src="../assets/images/phone.png" alt="">
          <span>拨打电话</span>
        <p>18978945661</p>
        </span>
      </div>
      <div class="wechat_box">
        <button class="tag-read" data-clipboard-text="fangyunchong22" @click="copy">
          <img src="../assets/images/weixin.png" alt="">          
          <span>加我微信</span><br>
          fangyunchong22</button>
      </div>
      <div class="mail_box">
        <img src="../assets/images/youxiang.png" alt="">
          <span>邮箱</span>
        <p>87988798@qq.com</p>
      </div>
      <div class="sile_box">
          <img src="../assets/images/adress1.png" alt="">
          <span>地址</span>
        <p>海南省三亚市十八度大酒店</p>
      </div>
    </div>
    <!-- 打赏栏 -->
    <div  class="like_box clearfix">
        <div class="like_left">
          <a href="" class="smlaa_box"><span class="my_up">335</span>
          <img src="../assets/images/zan.png" alt="">
          </a>
        </div>
        <div class="like_right">
          <div type="primary" class="big_box" @click="showPopup">
            <span class="my_down">打赏</span>
          </div>
          <van-popup v-model="show">
            <div class="numChind">
              <div class="herNum">
                <span>喜欢导游</span>
                <div class="close" @click="hiddenShow"><van-icon name="cross" /></div>
              </div>
              <div class="mainNum">
                <div class="main_left">
                    <van-button plain type="primary" class="cl2">￥2</van-button>
                    <van-button plain type="primary" class="cl5">￥5</van-button>
                    <van-button plain type="primary" class="cl5">￥10</van-button>
                </div>
                <div class="main_rigth">
                  <van-button plain type="primary" class="cl10">￥18</van-button>
                  <van-button plain type="primary" class="cl50">￥50</van-button>
                  <van-button plain type="primary" class="cl100">￥100</van-button>
                </div>
              </div>
            </div>
        </van-popup>
        
        </div>
  </div>
  <!-- 个人简历 -->
    <div class="personage">
      个人简介
    </div>
    <div class="personage_box">
      <p>旅游路线丽江到大理，熟悉路线和风土人情，为人
        热情好客。商城页有当地的土特产可以邮寄回家啦。
        认可我服务的小伙伴们可以给我打赏哟！
      </p>
      <div class="foot_box">
        <h5 class="title_box">别人的评价</h5>
        <div class="content_box">
          <img src="../assets/images/login.jpeg" class="psonImg">
            <div class="contentBoy">
              <span class="userTem">娃哈哈</span>
              <span class="contentNum">这家伙很懒的哦</span>
            </div>
            <div class="goodNum">
              <a href=""><img src="../assets/images/zan.png"></a>
            <span>55</span>
          </div>
        </div>
        <h5 class="title_box">别人的评价</h5>
        <div class="content_box">
          <img src="../assets/images/login.jpeg" class="psonImg">
            <div class="contentBoy">
              <span class="userTem">娃哈哈</span>
              <span class="contentNum">这家伙很懒的哦这家伙这家伙很懒的哦这家伙很懒的哦这家伙很懒的哦这家伙很懒的哦这家伙很懒的哦这家伙很懒的哦这家伙很懒的哦这家伙很懒的哦这家伙很懒的哦这家伙很懒的哦这家伙很懒的哦这家伙很懒的哦这家伙很懒的哦这家伙很懒的哦这家伙很懒的哦</span>
            </div>
              <div class="goodNum">
                  <a href=""><img src="../assets/images/zan.png"></a>
                <span>55</span>
              </div>
        </div>
        <h5 class="title_box">别人的评价</h5>
        <div class="content_box">
          <img src="../assets/images/login.jpeg" class="psonImg">
            <div class="contentBoy">
              <span class="userTem">娃哈哈</span>
              <span class="contentNum">这家伙很懒的哦</span>
            </div>
            <div class="goodNum">
              <a href=""><img src="../assets/images/zan.png"></a>
              <span>55</span>
            </div>
        </div>
      </div>   
        
        <div class="content_foot">
            <img src="../assets/images/login.jpeg" class="sunImg">
              <div class="footLink">
               <span class="remove"><router-link to="../shop/commen">更多评价&gt;</router-link></span>
                <van-cell-group >
                  <van-field class="input_conten"  placeholder="我要评论" />
                  <van-button type="primary" class="publish">发表</van-button>
              </van-cell-group>
            </div>
        </div>
    </div>
    <!-- 底部tab栏 -->
    <myfooter></myfooter>
  </div>
</template>

<script>
import myfooter from "../components/share/footer";
import Clipboard from 'clipboard';
import {
  
  Tag,
  Col,
  Icon,
  Cell,
  Tabbar,
  TabbarItem ,
  Button,
  Field,
  CellGroup,
  Row,
  NavBar,
  Swipe,
  Toast,
  Panel,
  Popup,
  Overlay, 
  NoticeBar,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Grid, 
  GridItem
} from 'vant';
import { fail } from 'assert';

export default {
  components: {
    myfooter,
    [Tag.name]: Tag,
    [Button.name]: Button,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Col.name]: Col,
    [NavBar.name]: NavBar,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Popup.name]: Popup,
    [Row.name]: Row,
    [Overlay.name]: Overlay,
    [Field.name]: Field,
    [Toast.name]: Toast,
    [Icon.name]: Icon,
    [Panel.name]: Panel,
    [Cell.name]: Cell,
    [NoticeBar.name]: NoticeBar,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  },
  
  data() {
    return {
     show: false,
     shop: false,
     active: 0,
     flag: false
    };
  },
  created() {
    this.flag = this.$route.path === "/home" ? false : true;
  },
  methods: {
    
    onClickLeft() {
        Toast('返回');
      },
    // 关闭弹出层
    closeBox() {
      this.closeBox = false;
    },
    // 直接拨打电话
    callPhone(){
      window.location.href = 'tel://18965654545'
    },
    // 复制微信号
     
    copy() {
      var clipboard = new Clipboard('.tag-read')
      clipboard.on('success', e => {
        Toast("复制成功")
        // 释放内存
        clipboard.destroy()
      })
      clipboard.on('error', e => {
        // 不支持复制
        console.log('该浏览器不支持自动复制')
        // 释放内存
        clipboard.destroy()
      })
    },
    // 分享名片弹出框
    myPopup(){
      this.shop = true;
    },
    // 打赏弹出框
     showPopup() {
      this.show = true;
    },
    // 关闭弹出窗
     hiddenShow:function () {
          var that = this;
          that.show = false;
      },  
      onClickLeft() {
        Toast('返回');
      },
      tab1(){
        this.$router.push({name:"HelloWorld"})
      },

      tab2(){
        this.$router.push({name:"MonaLity"})
      },
      tab3(){
        this.$router.push({name:"goodsInfo"})
      }
  },
  watch: {
    "$route.path": function(newVal) {
      if (newVal === "/home") {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  }
};

</script>

<style  scoped>
@import '../assets/css/hollw/hollw.css';
.van-icon-arrow-left:before{
        font-size: 26px;
        color: #000;
      }
      .van-nav-bar__title{
      font-size: 20px;
    }
</style>