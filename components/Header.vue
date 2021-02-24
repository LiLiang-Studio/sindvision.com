<template>
  <header class="clearfix ui-header">
    <nav class="nav">
      <a href="/" class="logo" title="首页">
        <img src="/images/白色-拷贝@2x.png" alt="">
      </a>
      <ul class="menu">
        <li v-for="_ in items" :key="_.title">
          <template v-if="_.children">
            <a href="javascript:;">
              {{ _.title }}
              <i class="fa fa-angle-down" />
            </a>
            <ul class="submenu">
              <li v-for="item in _.children" :key="item.title">
                <nuxt-link :to="item.to">
                  {{ item.title }}
                </nuxt-link>
              </li>
            </ul>
          </template>
          <nuxt-link v-else :to="_.to">
            {{ _.title }}
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

<script>
import features from '@/assets/data'
export default {
  data () {
    return {
      items: [
        {
          title: '产品功能',
          children: features.map(_ => ({ ..._, to: `/product_features/${_.title}` }))
        },
        { title: '案例', to: '/cases' },
        { title: '应用场景', to: '/appliances' },
        { title: '培训服务', to: '/services' },
        { title: '帮助中心', to: '/help' },
        { title: '商业合作', to: '/contact' },
        { title: '关于我们', to: '/about_us' }
      ]
    }
  }
}
</script>

<style lang="scss">
.ui-header {
  padding: 0 $contentPadding;
  background-color: rgba(10, 10, 10, .85);
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
    max-width: $contentWidth;
    padding: 1.25rem 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    .logo img {
      width: 162px;
      height: 41px;
    }
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
          color: $themeColor;
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
    @include gradBtn;
    padding: .4rem 1rem;
    font-size: 12px;
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
        background-color: $bgColor;
      }
    }
  }
}
</style>
