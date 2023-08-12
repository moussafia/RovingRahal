<template>
  <aside class="flex flex-col p-6">
    <ul class="mx-auto">
        <li @click="navItemClicked($event)" class="flex text links-navbar active">
                <svg class="me-4" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z"/></svg>
                Home
        </li>
        <li @click="navItemClicked($event)" class="flex text links-navbar">
                <svg class="me-4" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"/></svg>
                Explore
        </li>
        <li @click="navItemClicked($event)" class="flex text links-navbar">
            <div class="red-point"></div>
                <svg class="me-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><g id="_01_align_center" data-name="01 align center"><path d="M23.259,16.2l-2.6-9.371A9.321,9.321,0,0,0,2.576,7.3L.565,16.35A3,3,0,0,0,3.493,20H7.1a5,5,0,0,0,9.8,0h3.47a3,3,0,0,0,2.89-3.8ZM12,22a3,3,0,0,1-2.816-2h5.632A3,3,0,0,1,12,22Zm9.165-4.395a.993.993,0,0,1-.8.395H3.493a1,1,0,0,1-.976-1.217l2.011-9.05a7.321,7.321,0,0,1,14.2-.372l2.6,9.371A.993.993,0,0,1,21.165,17.605Z"/></g></svg>
                Notifications
        </li>
        <li @click="navItemClicked($event)" class="flex text links-navbar">
            <div class="red-point"></div>
                <svg class="me-4" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z"/></svg>
                Messages
        </li>
        <li @click="navItemClicked($event)" class="flex text links-navbar">
                <svg class="me-4" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M20.137,24a2.8,2.8,0,0,1-1.987-.835L12,17.051,5.85,23.169a2.8,2.8,0,0,1-3.095.609A2.8,2.8,0,0,1,1,21.154V5A5,5,0,0,1,6,0H18a5,5,0,0,1,5,5V21.154a2.8,2.8,0,0,1-1.751,2.624A2.867,2.867,0,0,1,20.137,24ZM6,2A3,3,0,0,0,3,5V21.154a.843.843,0,0,0,1.437.6h0L11.3,14.933a1,1,0,0,1,1.41,0l6.855,6.819a.843.843,0,0,0,1.437-.6V5a3,3,0,0,0-3-3Z"/></svg>
                Bookmarks
        </li>
        <li @click="navItemClicked($event)" class="flex text links-navbar">
                <svg class="me-4" xmlns="http://www.w3.org/2000/svg" id="Layer_1" height="512" viewBox="0 0 24 24" width="512" data-name="Layer 1"><path d="m7.5 13a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm0-7a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0 -2.5-2.5zm7.5 17v-.5a7.5 7.5 0 0 0 -15 0v.5a1 1 0 0 0 2 0v-.5a5.5 5.5 0 0 1 11 0v.5a1 1 0 0 0 2 0zm9-5a7 7 0 0 0 -11.667-5.217 1 1 0 1 0 1.334 1.49 5 5 0 0 1 8.333 3.727 1 1 0 0 0 2 0zm-6.5-9a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm0-7a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0 -2.5-2.5z"/></svg>
                Communities
        </li>
        <li @click="navItemClicked($event)" class="flex text links-navbar">
                <svg class="me-4" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/></svg>
                Profile
        </li>
    </ul>
    <button data-modal-target="postModal" data-modal-toggle="postModal" class="text-white mt-6 mx-auto brand-background">
        Post
    </button>
    <PostModal></PostModal>
  </aside>
</template>

<script>
import PostModal from '../modals/PostModal.vue'
export default {
    components:{
        PostModal,
    },
    methods:{
        navItemClicked(event){
            $('.active').removeClass('active');
            event.target.classList.add('active');
        }
    }
}
</script>

<style>
aside{
    height: 100vh;
    width: 370px;
    /* 630 370 */
    border-right: 1px solid var(--dark-color);
}
aside > ul > li{
    border-radius: 35px;
    margin: .4em 0;
    padding: .7em 1.3em .4em 1.3em;
    cursor: pointer;
}
aside > ul > li,aside > button{
    font-size: 22px;
    font-weight: 500;
    width: 100%;
}
aside > button{
    border-radius: 35px;
    padding: .5em 0;
    width: 75% !important;
}
svg{
    fill: var(--text-color);
    width: 25px;
    height: 25px;

}
li.links-navbar.active,li.links-navbar:hover {
    background-color: var(--dark-color);
}
li.links-navbar{
    position: relative;
}
.red-point{
    width: 8px;
    height: 8px;
    position: absolute;
    left: 50px;
    top: 7px;
    border-radius: 50%;
    background-color: red;
}
</style>