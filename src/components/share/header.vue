<template>
  <div>
    <div class="title">旅游电商</div>
  </div>
</template>

<script>
export default {
  components: {
    name: "myheader"
  },
  data() {
    return {};
  },
  methods: {
    //跳转页面
    dash() {
      alert(231);
      this.$router.push({ path: "/dashboard" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  color: #101010;
  background-color: #eeeeee;
  text-align: center;
  padding: 10px 0;
}
</style>
