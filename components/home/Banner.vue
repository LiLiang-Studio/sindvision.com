<template>
  <div class="swiper-container ui-home-banner">
    <div class="swiper-wrapper">
      <Box class="swiper-slide slide-1">
        <div class="flex-item">
          <h3 class="title">
            携手现在，定义未来！
          </h3>
          <p class="desc">
            也许现在我们不是最优秀的企业<br>
            但会是您最正确的选择
          </p>
        </div>
      </Box>
      <Box class="swiper-slide slide-2">
        <div class="flex-item">
          <h3 class="title">
            CCMS云平台
          </h3>
          <p class="desc">
            NGN技术架构 智能IVR<br>
            可拓展性配置 打造您的专属定制体验
          </p>
          <a target="_blank" href="http://103.36.193.81:8002/ccas-ui" class="btn">
            <b>立即体验</b>
          </a>
        </div>
        <div class="flex-item">
          <img src="/images/best-seo-services-slide-1.png" alt="">
        </div>
      </Box>
      <Box class="swiper-slide slide-3">
        <div class="flex-item">
          <h3 class="title">
            呼叫中心一体化解决方案
          </h3>
          <p class="desc">
            云客服提供呼叫中心的一体化全套解决方案<br>
            整个系统采用分层架构和统一通信架构进行规划<br>
            系统层次结构清晰，接口明确，具有良好的扩展性<br>
            支持多种网络融合接入，多媒体接入灵活扩展
          </p>
        </div>
        <div class="flex-item">
          <img src="/images/best-sem-seo-services-slide-2.png" alt="">
        </div>
      </Box>
    </div>
    <div class="fa fa-angle-right swiper-button-next" />
    <div class="fa fa-angle-left swiper-button-prev" />
  </div>
</template>

<script>
export default {
  mounted () {
    const swiper = new window.Swiper('.swiper-container', {
      speed: 1000,
      longSwipes: false,
      loop: true,
      autoplay: {
        disableOnInteraction: false
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
    this.$once('hook:beforeDestroy', swiper.destroy.bind(swiper))
  }
}
</script>

<style lang="scss">
.ui-home-banner {
  .ui-box {
    height: 720px;
    position: relative;
    &_inner {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    @media screen and (max-width: 800px) {
      &_inner {
        flex-direction: column;
        justify-content: center;
      }
      .flex-item {
        width: 100%;
        text-align: center;
        img {
          max-width: 60%;
        }
      }
      &:not(.slide-1) .flex-item {
        max-width: none;
      }
    }
  }
  .flex-item {
    width: 46%;
    padding: 20px;
    max-width: 460px;
    .title {
      font-size: 2.2rem;
      font-weight: normal;
    }
    .desc {
      font-size: 1.1rem;
      line-height: 1.6;
      margin: 1em 0;
    }
    img {
      max-width: 100%;
    }
    .btn {
      @include gradBtn;
      text-decoration: none;
      padding: .7rem 2rem;
    }
  }
  .slide-1 {
    .flex-item {
      background-color: rgba(255, 255, 255, 0.85);
    }
  }
  .slide-2, .slide-3 {
    color: #fff;
  }
  .swiper-slide {
    &.slide-1 {
      background: url('/images/banner-1.jpg') no-repeat center center;
      background-size: cover;
    }
    &.slide-2 {
      background: url('/images/pattern_background.png') no-repeat,
        linear-gradient(150deg, rgb(8, 14, 123) 0%, rgb(8, 14, 123) 0%, rgb(60, 29, 168) 60%, rgb(162, 58, 255) 100%, rgb(162, 58, 255) 100%);
      background-size: cover;
    }
    &.slide-3 {
      background: url('/images/pattern_background.png') no-repeat,
        linear-gradient(140deg, rgb(49, 27, 91) 0%, rgb(49, 27, 91) 0%, rgb(178, 66, 88) 65%, rgb(255, 157, 72) 100%, rgb(255, 157, 72) 100%);
      background-size: cover;
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 1.3rem;
    text-align: center;
    color: #fff;
    background: rgba(0, 0, 0, .5);
  }
}
</style>
