/* eslint-disable vue/no-v-html */
<template>
  <div class="page-index">
    <HomeBanner />
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
            <i :class="`${_.icon} fa-2x`" />
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
        <ul class="clearfix list">
          <li v-for="_ in row4Data" :key="_.title">
            <div class="box">
              <i :class="`${_.icon} fa-2x`" />
              <h3 class="title">
                {{ _.title }}
              </h3>
              <p class="desc">
                {{ _.desc }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="row-5">
      <div class="inner">
        <div class="titlebox">
          <h3 class="title">
            品牌优势
          </h3>
          <h4 class="subtitle">
            Our service features
          </h4>
        </div>
        <ul class="clearfix list">
          <li v-for="_ in row5Data" :key="_.title">
            <div class="box">
              <i :class="`${_.icon} fa-2x`" />
              <h3 class="title">
                {{ _.title }}
              </h3>
              <p class="desc">
                {{ _.desc }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="row-6">
      <div class="inner">
        <div class="titlebox">
          <h3 class="title">
            多企业众领域的信赖之选
          </h3>
          <p class="desc">
            盛德远景意于在保险、金融、电子、科技等众多领域与各公司携手创新，定义未来！
          </p>
        </div>
        <ul class="list">
          <li v-for="_ in row6Data" :key="_">
            <img :src="_" alt="">
          </li>
        </ul>
      </div>
    </div>
    <AdvisoryCard />
  </div>
</template>

<script>
export default {
  data () {
    return {
      row2Data: [
        {
          title: '需要呼叫中心的企业',
          desc: '传统呼叫中心升级换代<br>客户联络触点增加<br>智能化应用需求',
          icon: 'fa fa-kaaba'
        },
        {
          title: '呼叫中心能力提供者',
          desc: '丰富的客户联络运营经验积累<br>向移动互联网服务专线发展',
          icon: 'fa fa-fax'
        },
        {
          title: '应用开发合作方',
          desc: '更丰富的应用组件<br>更智能的技术组合',
          icon: 'fa fa-american-sign-language-interpreting'
        },
        {
          title: '基础设置资源提供者',
          desc: '云主机+云储存+云服务<br>成为主流系统架构',
          icon: 'fa fa-broadcast-tower'
        },
        {
          title: '电信运营商',
          desc: '需要规范、优质的企业客户<br>提供更优质的基础设置（管道）',
          icon: 'fa fa-signal'
        },
        {
          title: '职场/话务员',
          desc: '万众创业下的众包服务<br>快速承接业务的运营能力',
          icon: 'fa fa-users'
        }
      ],
      row4Data: [
        {
          title: '功能全面',
          desc: '多功能模块，近百种细分项目完全满足系统的需求。',
          icon: 'fa-microsoft fab'
        },
        {
          title: '多重可视化',
          desc: '通过饼图、柱状图等形式直观呈现，数据可视化呈现。',
          icon: 'fa-chart-bar far'
        },
        {
          title: '个性定制',
          desc: '可根据需求对统计报表呈现方式定制，按需呈现。',
          icon: 'fa-pencil-ruler fas'
        },
        {
          title: '一键下载',
          desc: '分析报告下载，一键导出便于分析存档。',
          icon: 'fa-cloud-download-alt fas'
        },
        {
          title: '全局监控',
          desc: '直观便捷地对全局状态进行监控，把我进度和状态。',
          icon: 'fa-chart-line fas'
        }
      ],
      row5Data: [
        {
          title: '平台稳定',
          desc: '凭借丰富的经验和领先的精湛技术，保证用户系统网络平稳、健康地运行',
          icon: 'fa-campground fas'
        },
        {
          title: '全天候服务',
          desc: '24×7全天候服务，为您第一时间提供咨询、解决问题。',
          icon: 'fa-headset fas'
        },
        {
          title: '成本控制',
          desc: '机器人在线服务，依据客户问题针对性解决。无需客服长时间在线。',
          icon: 'fa-hand-holding-usd fas'
        },
        {
          title: '安全保障',
          desc: '业内标准质量的全国范围的技术支持服务。 成熟的服务工程升级管理，故障级别定义广泛。',
          icon: 'fa-empire fab'
        }
      ],
      row6Data: [
        '/images/dinghe186x54.png',
        '/images/hangtian240x54.png',
        '/images/jianhang290x54.png',
        '/images/jinshang186x54.png',
        '/images/xianhuahau240x54.png',
        '/images/yingda240x54.png',
        '/images/zhongxing290x54.png'
      ]
    }
  },
  head: {
    script: [
      { src: '/libs/swiper/swiper.min.js' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: '/libs/swiper/swiper.min.css'
      }
    ]
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
        i {
          color: #ffa737;
        }
      }
      .title {
        font-size: 1.7rem;
        margin: 1rem 0;
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
    background: url('/images/page_title6-1.jpg') no-repeat;
    background-size: cover;
    .inner {
      max-width: $contentWidth;
      margin: 0 auto;
      .summary {
        max-width: 660px;
        margin: 0 auto 3rem;
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
      .list {
        list-style: none;
        li {
          width: 20%;
          padding: 0 .5rem;
          margin-bottom: $contentPadding;
          float: left;
          .box {
            padding: 1.7rem;
            background-color: #fff;
            text-align: center;
            min-height: 260px;
            i {
              color: #ffa737;
            }
            .title {
              margin: 1.2rem 0;
              font-size: 1.7rem;
            }
            .desc {
              font-size: 1.1rem;
              color: #5d5f64;
              line-height: 1.6;
            }
          }
        }
        @media screen and (max-width: 800px) {
          li {
            width: 100%;
            padding: 0;
            .box {
              min-height: auto;
            }
          }
        }
      }
    }
  }
  .row-5 {
    padding: 6.2rem $contentPadding 4.6rem;
    background: #051643 url('/images/pattern_background.png') no-repeat;
    background-size: cover;
    .inner {
      text-align: center;
      color: #fff;
      max-width: $contentWidth;
      margin: 0 auto;
      .titlebox {
        margin-bottom: 5rem;
        .title {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .subtitle {
          font-size: 1.3rem;
        }
      }
      .list {
        list-style: none;
        li {
          width: 25%;
          padding: 0 .5rem;
          margin-bottom: $contentPadding;
          float: left;
          .box {
            padding: 1.7rem;
            background-color: #071b50;
            min-height: 300px;
            i {
              color: #ffa737;
            }
            .title {
              margin: 1.2rem 0;
              font-size: 1.7rem;
            }
            .desc {
              font-size: 1.1rem;
              line-height: 1.6;
            }
          }
        }
        @media screen and (max-width: 800px) {
          li {
            width: 100%;
            padding: 0;
            .box {
              min-height: auto;
            }
          }
        }
      }
    }
  }
  .row-6 {
    background-color: #fff;
    padding: 6.2rem $contentPadding 4.6rem;
    .inner {
      text-align: center;
      max-width: $contentWidth;
      margin: 0 auto;
    }
    .titlebox {
      padding-bottom: 4rem;
      margin-bottom: 4rem;
      border-bottom: 1px solid #e8eaf0;
      .title {
        font-size: 2rem;
        margin-bottom: 1.3rem;
      }
      .desc {
        font-size: 1.1rem;
        color: #5d5f64;
      }
    }
    .list {
      list-style: none;
      li {
        display: inline-block;
        padding: 1rem;
        img {
          vertical-align: middle;
          max-width: 100%;
        }
      }
    }
  }
}
</style>
