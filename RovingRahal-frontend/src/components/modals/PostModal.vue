<template>

<!-- Main modal -->
<div id="postModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-dark rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-slate-700">
                <h3 class="text-xl font-bold text m-auto">
                    Create Post
                </h3>
                <button type="button" class="text-gray-400 absolute right-6 bg-transparent hover:bg-slate-600 hover:text-gray-900 rounded-full text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="postModal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6 relative">
                <div class="absolute flex">
                    <div class="rounded-full me-4 flex justify-center items-center bg-white image">
                        <img src="../../assets/images/profile_test.png" class="h-full" alt="">
                    </div>
                    <div>
                        <p  class="text text-lg font-bold">Pew Pew</p>
                        <button class="text flex items-center bg-grey-400 privacyBtn rounded-full">
                            <svg class="fill-white me-2" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10,0-1.494.33-2.912.92-4.187l1.666,1.751c.265.278.632.436,1.016.436h1.949c.288,0,.564.114.768.318l.373.373c.198.198.309.466.309.745v.963c0,.385.153.753.425,1.025l1.19,1.19c.247.247.386.582.386.931v2.365c0,.602.488,1.09,1.09,1.09h.213c.425,0,.811-.247.989-.633l2.241-4.856c.267-.578.062-1.263-.477-1.601l-2.562-1.601c-.323-.202-.696-.309-1.077-.309h-1.431c-.311,0-.61-.124-.83-.344l-.592-.592c-.312-.312-.312-.817,0-1.128l.529-.529c.243-.243.614-.303.921-.149l.88.44c.361.181.798.11,1.084-.176l.003-.003c.305-.305.363-.778.141-1.147l-.837-1.396c-.175-.292-.171-.654.014-.94.296-.457.78-1.202,1.316-2.016,3.272.2,6.125,1.98,7.801,4.586l-1.59.917c-.49.282-.733.855-.595,1.403l.627,2.507c.09.36.333.662.665.827l2.373,1.178c-.699,4.835-4.871,8.562-9.896,8.562Z"/></svg>
                            public
                            <svg class="fill-white ms-2" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M6.41,9H17.59a1,1,0,0,1,.7,1.71l-5.58,5.58a1,1,0,0,1-1.42,0L5.71,10.71A1,1,0,0,1,6.41,9Z"/></svg>
                        </button>
                    </div>
                </div>
                <textarea name="" v-model="post_content" class="h-full w-full bg-transparent border-0 pt-12 ps-16 text focus:outline-none resize-none"  placeholder="What's in your mind, Pew Pew?" rows="8"></textarea>
                <div class="flex flex-col emojis-container absolute right-6 bottom-9 bg-red">
                    <div class="w-full flex justify-around category-symbols-container border-b">
                        <span v-for="(category,index) in emojis" class="flex justify-center align-center p-2" :key="index" @click="categoryChoosed(index)">{{ category[0] }}</span>
                    </div>
                    <div class="emoji-category-container h-full flex p-4">
                        <span v-for="(emoji,index) in category_to_display" class="flex justify-center align-center p-2" :key="index" @click="post_content += emoji">{{ emoji }}</span>
                    </div>
                </div>
                <button @click="emojisToggle()">
                    <svg  class="absolute right-6 bottom-0 emojis-toggler" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.893,24,0A12.013,12.013,0,0,0,12,0Zm0,22A10.011,10.011,0,0,1,2,12C2.5-1.248,21.5-1.244,22,12A10.011,10.011,0,0,1,12,22ZM7,9.5a1.5,1.5,0,0,1,3,0A1.5,1.5,0,0,1,7,9.5Zm7,0a1.5,1.5,0,0,1,3,0A1.5,1.5,0,0,1,14,9.5Zm3.842,6.042A6.827,6.827,0,0,1,12,19a6.836,6.836,0,0,1-5.848-3.458A1,1,0,0,1,7.2,14.024,15.4,15.4,0,0,0,12,15a15.4,15.4,0,0,0,4.792-.976A1,1,0,0,1,17.842,15.542Z"/></svg>
                </button>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-2 rounded-b justify-between">
                <div class="flex items-center justify-between w-full px-4 py-2 rounded-full border">
                    <span class="text font-bold">Add to your post</span>
                    <svg class="" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0ZM5,2H19a3,3,0,0,1,3,3V19a2.951,2.951,0,0,1-.3,1.285l-9.163-9.163a5,5,0,0,0-7.072,0L2,14.586V5A3,3,0,0,1,5,2ZM5,22a3,3,0,0,1-3-3V17.414l4.878-4.878a3,3,0,0,1,4.244,0L20.285,21.7A2.951,2.951,0,0,1,19,22Z"/><path d="M16,10.5A3.5,3.5,0,1,0,12.5,7,3.5,3.5,0,0,0,16,10.5Zm0-5A1.5,1.5,0,1,1,14.5,7,1.5,1.5,0,0,1,16,5.5Z"/></svg>
                </div>
                <button class="text-white ml-12 px-12 text-lg py-2 brand-background font-bold rounded-full">Post</button>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import getEmojis from '../../tools/getEmojis';
export default {
    data(){
        return {
            post_content:'',
            category_to_display : [],
        }
    },
    computed:{
        emojis(){
            return getEmojis()
        }
    },
    mounted(){
        this.category_to_display = this.emojis[0];
    },
    methods:{
        emojisToggle(){
            console.log('object');
           $('.emojis-container').toggleClass('open');
        },
        categoryChoosed(index){
            this.category_to_display = this.emojis[index];
        }
    }
}
</script>

<style>
.image{
    overflow: hidden;
    height: 50px;
    width: 50px;
    box-shadow: 0 0 10 rgba(128, 128, 128, 0.87);
}
button.privacyBtn{
    background-color: gray;

}
.privacyBtn svg{
    height: 15px;
}
.emojis-toggler{
    cursor: pointer;
}
.emojis-container{
    height: 0;
    background-color: var(--background-color);
    border-radius: 15px;
    width: 75%;
    overflow: hidden;
}
.emojis-container.open{
    height: 220px;
    padding: 1em;
}
.emoji-category-container{
    overflow-y: scroll;
    flex-wrap: wrap;
}
</style>