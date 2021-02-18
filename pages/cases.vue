<template>
  <ui-main :banner="{ src: '/images/page_title5.jpg', title }" />
</template>

<script>
import UiMain from '@/components/Main.vue'
export default {
  components: { UiMain },
  data () {
    return {
      title: '案例'
    }
  }
}
</script>
