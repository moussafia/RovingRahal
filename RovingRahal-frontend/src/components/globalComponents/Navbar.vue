<template>
    <nav class="flex justify-between items-center p-6 pl-24 w-full">
        <h1 class="text text-3xl font-bold">Logo</h1>
        <div class="search-container ml-24">
            <svg class="" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"/></svg>
            <input type="text" class="bg-dark rounded-full search text px-5 w-full pl-16" placeholder="Search">
        </div>
        <div class="sign flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512">
            <g><circle cx="256" cy="53.333" r="53.333"/><circle cx="256" cy="256" r="53.333"/><circle cx="256" cy="458.667" r="53.333"/></g></svg>

            <button class="text bg-dark flex p-2 rounded-full px-4" data-modal-target="signModal" data-modal-toggle="signModal">
                <svg class="me-4" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/></svg>
                Sign In
            </button>
        </div>
        <div class="profile"></div>
    </nav>
    <SignModel></SignModel>
</template>
<script>
import SignModel from '../modals/SignModel.vue';
export default {
    components:{
        SignModel,
    }
}
</script>
<style scoped>
.search-container {
    width: 45%;
    position: relative;
}
.search-container > svg{
    position: absolute;
    width: 24px;
    height: 24px;
    fill: var(--icons-text);
    top: 50%;
    transform: translateY(-50%);
    left: 1.5em;
}
.search{
    border: none;
}
</style>