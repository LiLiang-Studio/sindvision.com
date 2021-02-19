<template>
  <ui-main :banner="{ src: '/images/banner-1.jpg', title, subTitle: '携手现在，定义未来！' }">
    <div class="page-contact">
      <div class="clearfix inner">
        <div>
          <h3 class="title">
            保持联系
          </h3>
          <p class="desc">
            我们热切期待您的来访与咨询。
          </p>
          <dl>
            <dt>
              <b>北京</b>
            </dt>
            <dd>
              地址 北京市海淀区志新路15号三层311 <br>
              邮箱 support@sindvision.com <br><br>
            </dd>
            <dt>
              <b>郑州</b>
            </dt>
            <dd>
              Address 郑州市高新区科学大道升龙又一城A座10楼93号 <br>
              Email support@sindvision.com
            </dd>
          </dl>
        </div>
        <div>
          <h3 class="title">
            需要帮助？
          </h3>
          <p class="desc">
            请填写如下表单快速与我们联系，我们将尽快回复您。
          </p>
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
      title: '商务合作'
    }
  }
}
</script>

<style lang="scss">
.page-contact {
  padding: 3.5rem $contentPadding;
  .inner {
    max-width: $contentWidth;
    margin: 0 auto;
    > * {
      float: left;
      width: 50%;
    }
    .title {
      font-size: 2.3rem;
      color: #202020;
      margin-bottom: 1.3rem;
    }
    .desc {
      font-size: 1.1rem;
      color: #5d5f64;
      margin-bottom: 1rem;
    }
    dt {
      font-size: 1.1rem;
      color: #202020;
      margin-bottom: .5rem;
    }
    dd {
      font-size: 1rem;
      color: #5d5f64;
    }
  }
}
</style>
