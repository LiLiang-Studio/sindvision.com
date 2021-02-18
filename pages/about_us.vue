<template>
  <ui-main :banner="{ src: '/images/page_title6.jpg', title, subTitle: 'Who we are' }">
    <div class="page-about">
      <div class="row-1">
        <div class="inner">
          <div class="col">
            <img src="/images/who-we-are-intro.jpg" alt="">
          </div>
          <div class="col">
            <h3>北京盛德远景科技有限公司</h3>
            <p>
              成立于2017年5月，注册资金1000万。<br><br>
              •  作为一家专注呼叫中心平台及运营商增值业务的软件公司，拥有自研的云呼叫平台，智能外呼，CRM等等全套解决方案。<br><br>
              •  作为多家运营商的代理商，开展多项增值业务合作，包括 短信、彩信、线路、码号等增值开发和集成。<br><br>
              •  自主Webrtc音视频、SBC等产品解决方案。<br><br>
              公司技术带头人拥有20年的呼叫平台、JAVA架构开发经验， 人员分布于北京、上海、广州、郑州、潍坊 等地。
            </p>
          </div>
        </div>
      </div>
      <div class="row-2">
        <img src="/images/CTA-2-1.jpg" alt="">
        <div class="inner">
          <div>
            <h3>开始您的免费咨询</h3>
            <p>我们专业的客服人员将在24小时内给您回复。</p>
            <nuxt-link to="/contact">
              <span class="button">点击联系我们</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </ui-main>
</template>

<script>
import UiMain from '@/components/Main.vue'
export default {
  components: { UiMain },
  data () {
    return {
      title: '关于我们'
    }
  }
}
</script>

<style lang="scss">
.page-about {
  .row-1, .row-2 {
    img {
      display: block;
      object-fit: cover;
      width: 100%;
    }
  }
  .row-1 {
    padding: 100px 1rem;
    .inner {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      .col {
        flex: 1;
        + .col {
          margin-left: 9%;
        }
        img {
          max-height: 550px;
        }
        h3 {
          font-size: 2.3rem;
          color: #202020;
          margin: 20px 0;
        }
        p {
          color: #5d5f64;
          font-size: 1.1rem;
          line-height: 1.6;
        }
      }
    }
  }
  .row-2 {
    position: relative;
    img {
      min-height: 265px;
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
        display: inline-block;
        padding: .7rem 1.7rem;
        font-size: .9rem;
        border-radius: 2rem;
        color: #785510;
        font-weight: bold;
        background: #e8cb90;
        background-image: linear-gradient(to top, #d6ad5a, #e8cb90);
        transition: all .2s;
        &:hover {
          background: #d6ad5a;
          background-image: linear-gradient(to top, #e8cb90, #d6ad5a);
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    .row-1 {
      .inner {
        display: block;
        .col {
          margin-left: 0 !important;
        }
      }
    }
  }
}
</style>
