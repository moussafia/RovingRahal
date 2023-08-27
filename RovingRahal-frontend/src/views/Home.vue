<template>
  <navbar></navbar>
  <div class="flex">
    <LeftSidebar></LeftSidebar>
    <Main></Main>
    <RightSideBar></RightSideBar>
  </div>
</template>

<script>
import Navbar from '../components/globalComponents/Navbar.vue';
import LeftSidebar from '../components/globalComponents/LeftSidebar.vue';
import Main from '../components/Main.vue';
import RightSideBar from '../components/RightSideBar.vue';
// import Container from '../components/Container.vue';

export default {
    components:{
      Navbar,
      LeftSidebar,
      Main,
      RightSideBar,
    },
}
</script>

<style>

</style>