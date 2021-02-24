import Vue from 'vue'
import UiMain from '@/components/Main.vue'

const comps = {
  UiMain
}

Object.keys(comps).forEach((name) => {
  Vue.component(name, comps[name])
})
