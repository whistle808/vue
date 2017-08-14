<template>
  <section class="footer">
    <div></div>
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active" href="#tabbar">
        <router-link to='/'>
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
        </router-link>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
        <span class="mui-tab-label">购买商品</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-extra mui-icon-extra-express">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">个人中心</span>
      </a>
    </nav>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="less">
 .footer div{
   width:100%;
   height:40px;
 }
</style>


