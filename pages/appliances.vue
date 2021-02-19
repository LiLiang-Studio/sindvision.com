<template>
  <ui-main :banner="{ src: '/images/page_title4.jpg', title }">
    <div class="page-appliances">
      <ul>
        <li v-for="_ in data" :key="_.title" :class="_.className">
          <div class="inner">
            <div class="box">
              <h3 class="title">
                {{ _.title }}
              </h3>
              <p class="desc">
                {{ _.desc }}
              </p>
            </div>
            <img :src="_.imgSrc" alt="">
          </div>
        </li>
      </ul>
    </div>
  </ui-main>
</template>

<script>
import UiMain from '@/components/Main.vue'
export default {
  components: { UiMain },
  data () {
    return {
      title: '应用场景',
      data: [
        {
          className: 'bg-white',
          title: '互联网金融',
          desc: '为P2P、小贷、众筹、网销渠道等互联网金融客户提供专属云计算解决方案和信息化服务；业务应用领域包含大数据应用、系统建设、安全建设、业务创新',
          imgSrc: '/images/what-we-do-service-1-1.jpg'
        },
        {
          title: '保险',
          desc: '包括物理隔离、独立机房、灾备方案、监管要求等需求，提供符合要求的金融信息化服务；业务应用领域包含核心系统、理赔业务、风控管理、产品销售、大数据应用相关',
          imgSrc: '/images/what-we-do-service-2-1.jpg'
        },
        {
          className: 'bg-white',
          title: '电商',
          desc: '面向电商行业常见的商业场景结合定制产品和工具形成的相关解决方案，可帮助企业快速搭建电商平台、完成资源的创建和配置，从容面对业务难题',
          imgSrc: '/images/what-we-do-service-3-1.jpg'
        },
        {
          title: '客服',
          desc: '包括支持电路电话、专业语音导航、移动坐席、通话记录/录音、全局监控、全渠道客服、智能机器人等功能，面向企业可提供客服型、电销型呼叫中心。具有快速部署、成本低、安全稳定等优势，为用户提供高质量、高效率、全方位的语音通信服务，从而实现企业的成本化和利润最大化。',
          imgSrc: '/images/what-we-do-service-4-1.jpg'
        },
        {
          title: '视频',
          desc: '面向体育直播、 游戏直播、娱乐直播、泛生活直播、 教育类、 远程医疗、 企业远程视频会议等典型场景，提供视频类的综合解决方案；',
          imgSrc: '/images/what-we-do-service-4-1.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.page-appliances {
  background-color: #f7f8f9;
  li {
    list-style: none;
    padding: 3rem $contentPadding;
    &.bg-white {
      background-color: #fff;
    }
    .box {
      padding: 1rem 0;
      margin-right: 9%;
    }
    &:nth-child(2n) {
      .box {
        order: 1;
        margin-right: 0;
        margin-left: 9%;
      }
    }
    @media screen and (max-width: 800px) {
      .inner {
        display: block;
        img {
          width: auto;
          max-width: 100%;
        }
        .box {
          margin: 0;
          width: 100%;
        }
      }
    }
  }
  .inner {
    max-width: $contentWidth;
    margin: 0 auto;
    display: flex;
    align-items: center;
    > * {
      flex: 1;
      width: 0;
    }
  }
  .title {
    font-size: 2rem;
    color: #202020;
    margin-bottom: 35px;
  }
  .desc {
    font-size: 1.3rem;
    color: #5d5f64;
    line-height: 1.6;
  }
}
</style>
