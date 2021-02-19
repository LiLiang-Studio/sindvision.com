<template>
  <main class="ui-main">
    <div class="banner" :style="{ backgroundImage: `url(${banner.src})` }">
      <div>
        <h2 class="title">
          {{ banner.title }}
        </h2>
        <h3 class="sub-title">
          {{ banner.subTitle }}
        </h3>
      </div>
    </div>
    <slot />
  </main>
</template>

<script>
export default {
  props: {
    banner: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss">
.ui-main {
  .banner {
    height: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    .title, .sub-title {
      color: #fff;
      font-weight: normal;
    }
    .title {
      font-size: 3.4rem;
    }
    .sub-title {
      font-size: 2.1rem;
    }
  }
  @media screen and (max-width: 800px) {
    .banner {
      height: 420px;
    }
  }
}
</style>
