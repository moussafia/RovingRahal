<template>
  <div class="flex">
    <Sidebar></Sidebar>
    <Main></Main>
  </div>
</template>

<script>
import Sidebar from '../components/globalComponents/Sidebar.vue';
import Main from '../components/Main.vue';
export default {
    components:{
        Sidebar,
        Main,
    }
}
</script>

<style>

</style>