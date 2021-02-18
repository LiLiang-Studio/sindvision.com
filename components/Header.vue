<template>
  <header class="clearfix ui-header">
    <a href="/" class="logo">
      <img src="/images/白色-拷贝.png" alt="">
    </a>
    <nav class="nav">
      <ul class="menu">
        <li>
          <a href="javascript:;">产品功能 &or;</a>
          <ul class="submenu">
            <li>
              <nuxt-link to="/product_features/1">交互式语音(IVR)</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/product_features/2">自动呼叫分配(ACD)</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/product_features/3">智能外呼</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/product_features/4">监听监控</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/product_features/5">统计报表</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/product_features/6">终端电话</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/product_features/7">通话录音（REC）</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/product_features/8">通话防火墙</nuxt-link>
            </li>
          </ul>
        </li>
        <li>
          <nuxt-link to="/cases">案例</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/appliances">应用场景</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/services">培训服务</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/help">帮助中心</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">商业合作</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about_us">关于我们</nuxt-link>
        </li>
        <li>
          <a target="_blank" href="http://103.36.193.81:8002/ccas-ui/">
            <span class="button">免费试用</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
.ui-header {
  padding: 0 30px;
  background-color: rgba(10, 10, 10, .5);
  li {
    list-style: none;
  }
  .logo {
    display: inline-block;
    margin: 30px 0;
  }
  .nav {
    float: right;
  }
  .menu {
    > li {
      float: left;
      position: relative;
      > a {
        display: inline-block;
        line-height: 100px;
        font-size: 16px;
        padding: 0 20px;
        text-decoration: none;
        color: #fff;
        transition: all .2s;
        &:hover, &.nuxt-link-active {
          color: #e9a825;
        }
      }
      &:hover {
        z-index: 11;
      }
      &:not(:hover) {
        overflow: hidden;
        .submenu {
          opacity: 0;
        }
      }
    }
  }
  .button {
    display: inline-block;
    padding: 9px 20px;
    font-size: 12px;
    line-height: 14px;
    border-radius: 25px;
    color: #785510;
    background: #e8cb90;
    background-image: linear-gradient(to top, #d6ad5a, #e8cb90);
    transition: all .2s;
    &:hover {
      background: #d6ad5a;
      background-image: linear-gradient(to top, #e8cb90, #d6ad5a);
    }
  }
  .submenu {
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 100%;
    width: 180px;
    box-shadow: 1px 1px 30px rgb(0 0 0 / 6%);
    transition: opacity .2s ease-in;
    a {
      display: block;
      font-size: 16px;
      text-decoration: none;
      padding: 7px 20px;
      line-height: 32px;
      color: #999;
      &:hover, &.nuxt-link-active {
        background-color: #f7f8f9;
      }
    }
  }
}
</style>
