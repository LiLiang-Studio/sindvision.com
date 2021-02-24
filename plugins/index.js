import Vue from 'vue'
import Box from '@/components/Box.vue'
import Main from '@/components/Main.vue'

const comps = {
  Box,
  Main
}

Object.keys(comps).forEach((name) => {
  Vue.component(`Ui${name}`, comps[name])
})
