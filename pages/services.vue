<template>
  <ui-main :banner="{ src: '/images/pattern_bg.jpg', title }">
    <div style="padding: 50px 0;" />
  </ui-main>
</template>

<script>
import UiMain from '@/components/Main.vue'
export default {
  components: { UiMain },
  data () {
    return {
      title: '培训服务'
    }
  }
}
</script>
