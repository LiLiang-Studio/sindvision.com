/* eslint-disable vue/no-v-html */
<template>
  <ui-main :banner="{ src: '/images/pattern_bg.jpg', title }">
    <div class="page-product_features">
      <div class="inner" v-html="content" />
    </div>
  </ui-main>
</template>

<script>
import features from '@/assets/data'
import UiMain from '@/components/Main.vue'
export default {
  components: { UiMain },
  asyncData ({ params }) {
    const item = features.find(_ => params.id === _.title)
    return item ? { title: item.title, content: item.desc } : {}
  }
}
</script>

<style lang="scss">
.page-product_features {
  padding: 3.5rem $contentPadding;
  .inner {
    max-width: 1260px;
    margin: 0 auto;
    color: #5d5f64;
    line-height: 1.6;
    font-size: 1.1rem;
    .article {
      max-width: 800px;
      margin: 0 auto;
      ul {
        padding-left: 2em;
        li {
          margin-bottom: .5em;
        }
      }
    }
    .rowBox {
      list-style: none;
      text-align: center;
      li {
        float: left;
        padding: 15px;
        width: 20%;
      }
      @media screen and (max-width: 800px) {
        li {
          width: 100%;
        }
      }
      h3 {
        font-size: 1.7rem;
        color: #202020;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
