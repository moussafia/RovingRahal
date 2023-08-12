<script>
import { RouterLink, RouterView } from 'vue-router'
import modeBtn from './components/modeBtn.vue';
export default {
  components:{
    modeBtn
  }
}
</script>

<template>
  <RouterView/>
  <modeBtn></modeBtn>
</template>

<style scoped>

</style>
