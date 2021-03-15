/* eslint-disable vue/no-v-html */
<template>
  <Main class="page-product_features" :banner="{ src: '/images/pattern_bg.jpg', title }">
    <Box>
      <div v-html="content" />
    </Box>
  </Main>
</template>

<script>
import features from '@/assets/data'
export default {
  data () {
    const item = features.find(_ => this.$route.params.id === _.title)
    return item ? { title: item.title, content: item.desc } : { title: '', content: '' }
  }
}
</script>

<style lang="scss">
.page-product_features {
  color: $textColor;
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
      font-size: 1.6rem;
      color: $titleColor;
      margin-bottom: 10px;
    }
  }
}
</style>
