<template>
  <ui-main
    :banner="{
      src: '/images/pattern_bg.jpg',
      title: `${error.statusCode} ${error.statusCode === 404 ? '未找到页面' : '发生未知错误'}`
    }"
  />
</template>

<script>
export default {
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
