<template>
  <div class="ui-advisory-card">
    <img src="/images/CTA-2-1.jpg" alt="">
    <div class="inner">
      <div>
        <h3>开始您的免费咨询</h3>
        <p>我们专业的客服人员将在24小时内给您回复。</p>
        <nuxt-link to="/contact">
          <b class="button">点击联系我们</b>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.ui-advisory-card {
  position: relative;
  img {
    display: block;
    object-fit: cover;
    width: 100%;
    min-height: 265px;
    max-height: 430px;
  }
  .inner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    h3 {
      font-size: 1.9rem;
    }
    p {
      font-size: 1.25rem;
      margin: 1em;
    }
    .button {
      @include gradBtn;
      padding: .6rem 1.7rem;
      font-size: .9rem;
    }
  }
}
</style>
