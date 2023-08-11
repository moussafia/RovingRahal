<template>
  <navbar></navbar>
  <div class="flex">
    <Sidebar></Sidebar>
    <Main></Main>
  </div>
</template>

<script>
import Navbar from '../components/globalComponents/Navbar.vue';
import Sidebar from '../components/globalComponents/Sidebar.vue';
import Main from '../components/Main.vue';

export default {
    components:{
      Navbar,
      Sidebar,
      Main,
    }
}
</script>

<style>

</style>