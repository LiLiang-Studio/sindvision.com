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
      <ui-advisory-card />
    </div>
  </ui-main>
</template>

<script>
import UiAdvisoryCard from '@/components/AdvisoryCard.vue'
export default {
  components: { UiAdvisoryCard },
  data () {
    return {
      title: '关于我们'
    }
  },
  head () {
    return { title: this.title }
  }
}
</script>

<style lang="scss">
.page-about {
  .row-1 {
    padding: 100px 1rem;
    .inner {
      max-width: $contentWidth;
      margin: 0 auto;
      display: flex;
      .col {
        flex: 1;
        + .col {
          margin-left: 9%;
        }
        img {
          display: block;
          object-fit: cover;
          width: 100%;
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
