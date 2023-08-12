<template>
  <button class="fixed right-6 bottom-6 text rounded-full" @click="changeMode()">mode</button>
</template>

<script>
export default {
    methods:{
        changeMode(){
            $('body').toggleClass('dark')
        }
    }
}
</script>

<style scoped>

</style>