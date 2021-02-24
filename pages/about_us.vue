<template>
  <ui-main :banner="{ src: '/images/page_title6.jpg', title, subTitle: 'Who we are' }">
    <div class="page-about">
      <ui-box>
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
      </ui-box>
      <ui-advisory-card />
    </div>
  </ui-main>
</template>

<script>
import UiAdvisoryCard from '@/components/AdvisoryCard.vue'
export default {
  components: { UiAdvisoryCard },
  data () {
    return { title: '关于我们' }
  }
}
</script>

<style lang="scss">
.page-about {
  .ui-box_inner {
    display: flex;
    justify-content: space-between;
  }
  .col {
    width: 46%;
    img {
      width: 100%;
    }
    h3 {
      font-size: 2.3rem;
      color: $titleColor;
      margin: 20px 0;
    }
    p {
      color: $textColor;
      font-size: 1.1rem;
      line-height: 1.6;
    }
  }
  @media screen and (max-width: 800px) {
    .ui-box_inner {
      display: block;
    }
    .col {
      width: 100%;
    }
  }
}
</style>
