<template>
  <ui-main :banner="{ src: '/images/pattern_bg.jpg', title }" />
</template>

<script>
import UiMain from '@/components/Main.vue'
export default {
  components: { UiMain },
  data () {
    return {
      title: '产品功能'
    }
  }
}
</script>
