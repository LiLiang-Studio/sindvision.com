<template>
  <div class="ui-layout">
    <ui-header />
    <Nuxt />
    <ui-footer />
  </div>
</template>
<script>
import UiHeader from '@/components/Header.vue'
import UiFooter from '@/components/Footer.vue'
export default {
  components: { UiHeader, UiFooter }
}
</script>

<style lang="scss">
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #fff;
}

@media screen and (max-width: 1024px) {
  html {
    font-size: 14px;
  }
}

@media screen and (max-width: 480px) {
  html {
    font-size: 13px;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.clearfix {
  &:before, &:after {
    content: '';
    display: block;
    clear: both;
  }
}

a {
  -webkit-tap-highlight-color: transparent;
}
</style>
