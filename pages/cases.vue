<template>
  <ui-main :banner="{ src: '/images/page_title5.jpg', title }">
    <div class="page-cases">
      <div class="inner">
        <ul class="tabs">
          <li v-for="_ in tabs" :key="_.label" :class="{active: _.label === activeTab}" @click="onTabClick(_)">
            <span class="label">
              {{ _.label }}
            </span>
          </li>
        </ul>
        <div v-for="_ in tabs" :key="_.label">
          <template v-if="_.label === activeTab">
            <div v-for="item in _.data" :key="item.title" class="content">
              <img class="logo" :src="item.logoSrc" alt="">
              <p class="desc">
                {{ item.title }} <br><br>
                使用产品：远景智能外呼系统 <br><br>
                {{ item.desc }}
              </p>
            </div>
          </template>
        </div>
      </div>
    </div>
  </ui-main>
</template>

<script>
export default {
  data () {
    const tabs = [
      {
        label: '保险',
        data: [
          {
            logoSrc: '/images/dinghe186x54.png',
            title: '鼎和财产保险股份有限公司 www.edhic.com',
            desc: `
              鼎和保险的业务范围涵盖非寿险业务的各个领域，包括财产损失保险；责任保险；信用保险和保证保险；短期健康保险和意外伤害保险；
              上述业务的再保险业务；国家法律法规允许的保险资金运用业务；经中国保监会批准的其他业务。
            `
          },
          {
            logoSrc: '/images/jianhang290x54.png',
            title: '建信财产保险有限公司 www.ccbpi.com.cn',
            desc: `
              机动车保险，包括机动车交通事故责任强制保险和机动车商业保险；企业/家庭财产保险及工程保险（特殊风险保险除外）；责任保险；船舶/货运保险；
              短期健康/意外伤害保险；上述业务的再保险业务；国家法律、法规允许的保险资金运用业务；经中国保险监督管理委员会批准的其他业务。
            `
          },
          {
            logoSrc: '/images/yingda240x54.png',
            title: '国网英大集团 www.ydjrw.sgcc.com.cn',
            desc: `
              国网英大国际集团成立于2010年12月20日，成员单位包括母公司、中国电力财务有限公司、英大泰和财产保险股份有限公司、英大泰和人寿保险股份有限公司、
              英大国际信托有限责任公司、英大证券有限责任公司、英大长安保险经纪有限公司、英大期货有限公司等8家企业，业务范围涵盖银行、
              保险、证券、资产管理等四大板块。
            `
          }
        ]
      },
      {
        label: '金融',
        data: [
          {
            logoSrc: '/images/jinshang186x54.png',
            title: '晋商消费金融股份有限公司 www.jcfc.cn',
            desc: `
              发放个人消费贷款；接受股东境内子公司及境内股东的存款；向境内金融机构借款；经批准发行金融债券；境内同业拆借；与消费金融相关的咨询、代理业务；
              代理销售与消费贷款相关的保险产品；固定收益类证券投资业务；经银监会批准的其他业务。
            `
          },
          {
            logoSrc: '/images/xianhuahau240x54.png',
            title: '先花信息技术有限公司 www.xianhuahua.com',
            desc: `
              “先花花”线上主要是支持移动端分期购物，符合支付额度的支付宝订单都可以借此完成支付，线下消费场景则主要针对学校周边各种小商铺，
              由平台直接与商家结算。总得来说，它更强调通过小额高频消费积累学生的消费数据，长期来看，它希望做的是一家信用管理公司。
            `
          }
        ]
      },
      {
        label: '科技',
        data: [
          {
            logoSrc: '/images/hangtian240x54.png',
            title: '航天信息股份有限公司 www.aisino.com',
            desc: `
              航天信息股份有限公司是集技、工、贸于一体的具有现代化企业管理机制的高新技术企业‚
              由中国航天科工集团公司等十二家中国航天领域的知名企业和科研院所在原航天金穗高技术有限公司、
              原北京航天金卡电子工程公司和北京航天斯大电子有限公司的基础上于2000年11月1日共同发起成立。
            `
          },
          {
            logoSrc: '/images/zhongxing290x54.png',
            title: '广东中星电子有限公司',
            desc: `
              广东中星电子有限公司于2014年03月14日在珠海市横琴新区工商行政管理局登记成立。法定代表人金兆玮，
              公司经营范围包括章程记载的经营范围：研究、设计、开发集成电路及软件等。
            `
          }
        ]
      }
    ]
    return {
      title: '案例',
      tabs,
      activeTab: tabs[0].label
    }
  },
  methods: {
    onTabClick (tab) {
      this.activeTab = tab.label
    }
  }
}
</script>

<style lang="scss">
.page-cases {
  padding: 3.5rem $contentPadding 7.5rem;
  .inner {
    max-width: $contentWidth;
    margin: 0 auto;
    border: 1px solid #e8eaf0;
  }
  .tabs {
    list-style: none;
    display: flex;
    li {
      flex: 1;
      font-size: 1.5rem;
      color: #202020;
      font-weight: bold;
      padding: .7rem 0;
      background-color: #f7f8f9;
      cursor: pointer;
      transition: all .2s;
      text-align: center;
      border-top: 3px solid #f7f8f9;
      &:hover {
        border-color: #fff;
        background-color: #fff;
      }
      &.active {
        border-color: #e9a825;
        background-color: #fff;
      }
    }
  }
  .content {
    padding: 1rem;
    img {
      max-width: 90%;
      margin-bottom: 1rem;
    }
    .desc {
      font-size: 1.1rem;
      color: #5d5f64;
      line-height: 1.6;
    }
  }
}
</style>
