<template>
  <div :class="prefix">
    <div :class="`${prefix}_inner`">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return { prefix: 'ui-box' }
  }
}
</script>

<style lang="scss">
.ui-box {
  padding: 3rem $contentPadding;
  &_inner {
    max-width: $contentWidth;
    margin: 0 auto;
  }
}
</style>
