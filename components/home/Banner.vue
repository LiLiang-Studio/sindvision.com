<template>
  <div class="swiper-container ui-home-banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide slide-1">
        <div class="inner">
          <div class="content">
            <h3 class="title">
              携手现在，定义未来！
            </h3>
            <p class="desc">
              也许现在我们不是最优秀的企业<br>
              但会是您最正确的选择
            </p>
          </div>
        </div>
      </div>
      <div class="swiper-slide slide-2">
        <div class="inner">
          <div class="content">
            <h3 class="title">
              CCMS云平台
            </h3>
            <p class="desc">
              NGN技术架构 智能IVR<br>
              可拓展性配置 打造您的专属定制体验
            </p>
            <a href="#" class="btn">立即体验</a>
          </div>
        </div>
      </div>
      <div class="swiper-slide slide-3">
        <div class="inner">
          <div class="content">
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
        </div>
      </div>
    </div>
    <div class="swiper-button-next" />
    <div class="swiper-button-prev" />
  </div>
</template>

<script>
export default {
  mounted () {
    const swiper = new window.Swiper('.swiper-container', {
      speed: 1000,
      longSwipes: false,
      loop: true,
      autoplay: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      on: {
        resize () {}
      }
    })
    this.$once('hook:beforeDestroy', swiper.destroy.bind(swiper))
  }
}
</script>

<style lang="scss">
.ui-home-banner {
  .swiper-slide {
    position: relative;
    height: 720px;
    padding: 0 $contentPadding;
    .inner {
      margin: 0 auto;
      height: 100%;
      max-width: $contentWidth;
      position: relative;
    }
    &.slide-1 {
      background: url('/images/banner-1.jpg') no-repeat center center;
      background-size: cover;
      .content {
        background-color: rgba(255, 255, 255, 0.85);
      }
    }
    &.slide-2, &.slide-3 {
      .content {
        color: #fff;
      }
      .inner:after {
        content: '';
        height: 70%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 3rem;
        left: 0;
      }
    }
    &.slide-2 {
      background: url('/images/pattern_background.png') no-repeat,
        linear-gradient(150deg, rgb(8, 14, 123) 0%, rgb(8, 14, 123) 0%, rgb(60, 29, 168) 60%, rgb(162, 58, 255) 100%, rgb(162, 58, 255) 100%);
      background-size: cover;
      .inner:after {
        background: url('/images/best-seo-services-slide-1.png') no-repeat right center;
        background-size: auto 100%;
      }
    }
    &.slide-3 {
      background: url('/images/pattern_background.png') no-repeat,
        linear-gradient(140deg, rgb(49, 27, 91) 0%, rgb(49, 27, 91) 0%, rgb(178, 66, 88) 65%, rgb(255, 157, 72) 100%, rgb(255, 157, 72) 100%);
      background-size: cover;
      .inner:after {
        background: url('/images/best-sem-seo-services-slide-2.png') no-repeat right center;
        background-size: auto 100%;
      }
    }
    .content {
      padding: 20px;
      width: 100%;
      max-width: 460px;
      position: relative;
      z-index: 1;
      top: 50%;
      transform: translateY(-50%);
      .title {
        font-size: 2.2rem;
        font-weight: normal;
      }
      .desc {
        line-height: 1.6;
        font-size: 1.1rem;
        margin: 1em 0;
      }
      .btn {
        @include gradBtn;
        text-decoration: none;
        padding: .7rem 2rem;
      }
    }
  }
  @media screen and (max-width: 800px) {
    .swiper-slide .content {
      display: none;
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, .5);
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
    color: #fff;
  }
  .swiper-button-prev {
    left: 0;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-next:before,
  .swiper-button-prev:before {
    font-family: "upsicons";
  }
  .swiper-button-prev:before {
    content: "\e627";
  }
  .swiper-button-next:before {
    content: "\e629";
  }
}
</style>
