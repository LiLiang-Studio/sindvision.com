<template>
  <ui-main :banner="{ src: '/images/page_title4.jpg', title }" />
</template>

<script>
import UiMain from '@/components/Main.vue'
export default {
  components: { UiMain },
  data () {
    return {
      title: '应用场景'
    }
  }
}
</script>
