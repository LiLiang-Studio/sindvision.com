<template>
  <footer class="ui-footer">
    <img height="41" src="/images/彩色-拷贝@2x.png" alt="">
    <p class="info">
      <span>北京盛德远景科技有限公司 © Copyright 2017 - {{ year }}</span>
      <span class="divider">|</span>
      <a target="_blank" href="https://beian.miit.gov.cn/">京ICP备18057595号-1</a>
      <span class="divider">|</span>
      <a target="_blank" href="/images/增值电信营业许可证.png">增值电信业务许可证 B2-20184754</a>
    </p>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">
.ui-footer {
  padding: 3.1rem 1.9rem 1.9rem;
  text-align: center;
  background-color: #f7f8f9;
  border-top: 1px solid #e8eaf0;
  .info {
    margin-top: 3.1rem;
    font-size: .8rem;
    line-height: 1.8;
    color: #8f9195;
    a {
      color: #202020;
      text-decoration: none;
      &:hover {
        color: #ffa737;
      }
    }
  }
}
</style>
