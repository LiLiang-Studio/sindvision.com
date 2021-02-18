<template>
  <ui-main :banner="{ src: '/images/banner-1.jpg', title, subTitle: '携手现在，定义未来！' }" />
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
