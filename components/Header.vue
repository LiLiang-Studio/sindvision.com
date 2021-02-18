<template>
  <header class="clearfix ui-header">
    <nav class="nav">
      <a href="/" class="logo">
        <img src="/images/白色-拷贝.png" alt="">
      </a>
      <ul class="menu">
        <li>
          <a href="javascript:;">产品功能 &or;</a>
          <ul class="submenu">
            <li>
              <nuxt-link to="/product_features/1">
                交互式语音(IVR)
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/product_features/2">
                自动呼叫分配(ACD)
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/product_features/3">
                智能外呼
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/product_features/4">
                监听监控
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/product_features/5">
                统计报表
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/product_features/6">
                终端电话
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/product_features/7">
                通话录音(REC)
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/product_features/8">
                通话防火墙
              </nuxt-link>
            </li>
          </ul>
        </li>
        <li>
          <nuxt-link to="/cases">
            案例
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/appliances">
            应用场景
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/services">
            培训服务
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/help">
            帮助中心
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">
            商业合作
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about_us">
            关于我们
          </nuxt-link>
        </li>
        <li>
          <a target="_blank" href="http://103.36.193.81:8002/ccas-ui/">
            <b class="button">免费试用</b>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
.ui-header {
  padding: 0 1rem;
  background-color: rgba(10, 10, 10, .5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    font-size: 1rem;
    display: block;
  }
  .nav {
    max-width: 1200px;
    padding: 1.25rem 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  .menu {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
    > li {
      position: relative;
      padding: .4rem 1.25rem;
      > a {
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
    padding: .4rem 1.25rem;
    font-size: 12px;
    border-radius: 1.6rem;
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
      color: #999;
      padding: 0 1.25rem;
      line-height: 2.6rem;
      &:hover, &.nuxt-link-active {
        background-color: #f7f8f9;
      }
    }
  }
}
</style>
