/* eslint-disable vue/no-v-html */
<template>
  <div class="page-index">
    <div class="row-1">
      <div class="inner">
        <h3 class="title">
          云客服平台
        </h3>
        <p class="desc">
          云客服平台，以通信和云计算为基础，具备全渠道全触点接入、优质的网络与号码资源、大数据及智能化应用的智能联络平台。
          致力于为企业提升客服工作效率，降低管理成本，让企业的客户服务成为新的商业价值。
        </p>
      </div>
    </div>
    <div class="row-2">
      <ul class="clearfix inner">
        <li v-for="_ in row2Data" :key="_.title">
          <div class="box">
            <h3 class="title">
              {{ _.title }}
            </h3>
            <p class="desc" v-html="_.desc" />
          </div>
        </li>
      </ul>
    </div>
    <div class="row-3">
      <div class="inner">
        <img src="/images/agency-seo-desk-front.jpg" alt="">
      </div>
    </div>
    <div class="row-4">
      <div class="inner">
        <div class="summary">
          <h3 class="title">
            CCMS系统
          </h3>
          <div class="clearfix box">
            <div class="leftItem">
              采用先进成熟的技术<br>
              功能强大涵盖广泛<br>
              可扩展性强
            </div>
            <div class="rightItem">
              安全可靠<br>
              提供在线开发集成环境
            </div>
          </div>
        </div>
        <ul class="list">
          <li>
            <h3 class="title">
              功能全面
            </h3>
            <p class="desc">
              多功能模块，近百种细分项目完全满足系统的需求。
            </p>
          </li>
        </ul>
      </div>
    </div>
    <ui-advisory-card />
  </div>
</template>

<script>
import UiAdvisoryCard from '@/components/AdvisoryCard.vue'
export default {
  components: { UiAdvisoryCard },
  data () {
    return {
      row2Data: [
        {
          title: '需要呼叫中心的企业',
          desc: '传统呼叫中心升级换代<br>客户联络触点增加<br>智能化应用需求'
        },
        {
          title: '呼叫中心能力提供者',
          desc: '丰富的客户联络运营经验积累<br>向移动互联网服务专线发展'
        },
        {
          title: '应用开发合作方',
          desc: '更丰富的应用组件<br>更智能的技术组合'
        },
        {
          title: '基础设置资源提供者',
          desc: '云主机+云储存+云服务<br>成为主流系统架构'
        },
        {
          title: '电信运营商',
          desc: '需要规范、优质的企业客户<br>提供更优质的基础设置（管道）'
        },
        {
          title: '职场/话务员',
          desc: '万众创业下的众包服务<br>快速承接业务的运营能力'
        }
      ],
      row4Data: [
        {
          title: '',
          desc: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.page-index {
  background-color: #f7f8f9;
  .row-1 {
    padding: 10rem $contentPadding 5rem;
    .inner {
      max-width: 600px;
      margin: 0 auto;
      text-align: center;
      .title {
        font-size: 2rem;
        margin-bottom: 20px;
      }
      .desc {
        color: #5d5f64;
        font-size: 1.3rem;
        line-height: 1.6;
      }
    }
  }
  .row-2 {
    padding: 0 $contentPadding 2rem;
    .inner {
      max-width: $contentWidth;
      margin: 0 auto;
      list-style: none;
      li {
        display: inline-block;
        width: 33.33%;
        padding: 10px;
        vertical-align: top;
      }
      .box {
        padding: 2.1rem;
        background-color: #fff;
        text-align: center;
        min-height: 240px;
      }
      .title {
        font-size: 1.7rem;
        margin-bottom: 1rem;
      }
      .desc {
        font-size: 1.1rem;
        color: #5d5f64;
        line-height: 1.6;
      }
      @media screen and (max-width: 800px) {
        li {
          width: 100%;
          padding: 5px 0;
        }
        .box {
          min-height: auto;
        }
      }
    }
  }
  .row-3 {
    padding: 0 $contentPadding;
    .inner {
      max-width: $contentWidth;
      margin: 0 auto;
      text-align: center;
      img {
        display: block;
        width: 100%;
      }
    }
  }
  .row-4 {
    padding: 5rem $contentPadding 3rem;
    background: url('/images/page_title6-1.jpg') no-repeat center center;
    background-size: cover;
    .inner {
      max-width: $contentWidth;
      margin: 0 auto;
      .summary {
        max-width: 660px;
        margin: 0 auto 4rem;
        color: #fff;
        text-align: center;
        .title {
          margin-bottom: 20px;
          font-size: 2.3rem;
        }
        .box {
          line-height: 1.6;
          font-size: 1.1rem;
          .leftItem {
            float: left;
          }
          .rightItem {
            float: right;
          }
        }
      }
    }
  }
}
</style>
