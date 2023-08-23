<template>
    <!-- Main modal -->
    <div id="postModal" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-dark rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-slate-700">
                    <h3 class="text-xl font-bold text m-auto">Create Post</h3>
                    <button type="button"
                        class="text-gray-400 absolute right-6 bg-transparent hover:bg-slate-600 hover:text-gray-900 rounded-full text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="postModal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6 relative">
                    <div class="absolute flex">
                        <div class="rounded-full me-4 flex justify-center items-center bg-white image">
                            <img src="../../assets/images/profile_test.png" class="h-full" alt="" />
                        </div>
                        <div>
                            <p class="text text-lg font-bold">Pew Pew</p>
                            <button ref="btnShowVisibility"
                                class="text flex items-center bg-grey-400 privacyBtn rounded-full"
                                @click="showVisibility">
                                <svg class="fill-white me-2" xmlns="http://www.w3.org/2000/svg" id="Layer_1"
                                    data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512" style="
                  position: absolute;left: 3px;">
                                    <path
                                        d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10,0-1.494.33-2.912.92-4.187l1.666,1.751c.265.278.632.436,1.016.436h1.949c.288,0,.564.114.768.318l.373.373c.198.198.309.466.309.745v.963c0,.385.153.753.425,1.025l1.19,1.19c.247.247.386.582.386.931v2.365c0,.602.488,1.09,1.09,1.09h.213c.425,0,.811-.247.989-.633l2.241-4.856c.267-.578.062-1.263-.477-1.601l-2.562-1.601c-.323-.202-.696-.309-1.077-.309h-1.431c-.311,0-.61-.124-.83-.344l-.592-.592c-.312-.312-.312-.817,0-1.128l.529-.529c.243-.243.614-.303.921-.149l.88.44c.361.181.798.11,1.084-.176l.003-.003c.305-.305.363-.778.141-1.147l-.837-1.396c-.175-.292-.171-.654.014-.94.296-.457.78-1.202,1.316-2.016,3.272.2,6.125,1.98,7.801,4.586l-1.59.917c-.49.282-.733.855-.595,1.403l.627,2.507c.09.36.333.662.665.827l2.373,1.178c-.699,4.835-4.871,8.562-9.896,8.562Z" />
                                </svg>
                                <span class="pl-8">
                                    {{this.selectedRadio}}
                                </span>
                                <svg class="fill-white ms-2" xmlns="http://www.w3.org/2000/svg" id="Outline"
                                    viewBox="0 0 24 24" width="512" height="512" style="position: absolute;right: 3px;">
                                    <path
                                        d="M6.41,9H17.59a1,1,0,0,1,.7,1.71l-5.58,5.58a1,1,0,0,1-1.42,0L5.71,10.71A1,1,0,0,1,6.41,9Z" />
                                </svg>
                            </button>
                            <div class="visibilite-chose bg-white" :style="{display: displayDiv}" ref="choseVisibility">
                                <div @click="selectOption('public')"
                                    class="chose flex justify-center gap-2 w-full h-18 p-2">
                                    <svg class="svg-chose" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.5" cx="12" cy="12" r="10" fill="#1C274C" />
                                        <path
                                            d="M8.57516 9.44737C8.3879 7.36316 6.7806 5.42105 6.00035 4.71053L5.56934 4.34189C7.30792 2.88037 9.55133 2 12.0004 2C14.2137 2 16.2592 2.7191 17.9158 3.93642C18.1498 4.64695 17.704 6.13158 17.2359 6.84211C17.0663 7.09947 16.6818 7.41898 16.2602 7.72186C15.3097 8.40477 14.1102 8.74254 13.5004 10C13.326 10.3595 13.3335 10.7108 13.4173 11.0163C13.4776 11.2358 13.5161 11.4745 13.5167 11.708C13.5187 12.4629 12.7552 13.0082 12.0004 13C10.0361 12.9786 8.7502 11.3955 8.57516 9.44737Z"
                                            fill="#1C274C" />
                                        <path
                                            d="M13.4365 18.2761C14.4246 16.414 17.7182 16.414 17.7182 16.414C21.1502 16.3782 21.6138 14.2944 21.9237 13.2412C21.369 17.7226 17.8494 21.2849 13.3885 21.9046C13.0659 21.2256 12.6837 19.6946 13.4365 18.2761Z"
                                            fill="#1C274C" />
                                    </svg>
                                    <div class="paragrah-cose">
                                        <p class="text-black text-bold">Public</p>
                                        <p class="text-gray-500 text-semiBold text-sm">
                                            Tout le monde sur ou en dehors Roving rahal
                                        </p>
                                    </div>
                                    <input type="radio" :checked="selectedRadio==='public'" class="rounded-full" />
                                </div>
                                <div @click="selectOption('freinds')"
                                    class="chose flex justify-center gap-2 w-full h-18 p-2">
                                    <svg class="svg-chose" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15.5 7.5C15.5 9.433 13.933 11 12 11C10.067 11 8.5 9.433 8.5 7.5C8.5 5.567 10.067 4 12 4C13.933 4 15.5 5.567 15.5 7.5Z"
                                            fill="#1C274C" />
                                        <path opacity="0.4"
                                            d="M19.5 7.5C19.5 8.88071 18.3807 10 17 10C15.6193 10 14.5 8.88071 14.5 7.5C14.5 6.11929 15.6193 5 17 5C18.3807 5 19.5 6.11929 19.5 7.5Z"
                                            fill="#1C274C" />
                                        <path opacity="0.4"
                                            d="M4.5 7.5C4.5 8.88071 5.61929 10 7 10C8.38071 10 9.5 8.88071 9.5 7.5C9.5 6.11929 8.38071 5 7 5C5.61929 5 4.5 6.11929 4.5 7.5Z"
                                            fill="#1C274C" />
                                        <path
                                            d="M18 16.5C18 18.433 15.3137 20 12 20C8.68629 20 6 18.433 6 16.5C6 14.567 8.68629 13 12 13C15.3137 13 18 14.567 18 16.5Z"
                                            fill="#1C274C" />
                                        <path opacity="0.4"
                                            d="M22 16.5C22 17.8807 20.2091 19 18 19C15.7909 19 14 17.8807 14 16.5C14 15.1193 15.7909 14 18 14C20.2091 14 22 15.1193 22 16.5Z"
                                            fill="#1C274C" />
                                        <path opacity="0.4"
                                            d="M2 16.5C2 17.8807 3.79086 19 6 19C8.20914 19 10 17.8807 10 16.5C10 15.1193 8.20914 14 6 14C3.79086 14 2 15.1193 2 16.5Z"
                                            fill="#1C274C" />
                                    </svg>
                                    <div class="paragrah-cose">
                                        <p class="text-black text-bold">Ami(e)s</p>
                                        <p class="text-gray-500 text-semiBold text-sm">
                                            Vos ami(e)s uniquement sur roving rahal
                                        </p>
                                    </div>
                                    <input type="radio" :checked="selectedRadio==='freinds'" class="rounded-full" />
                                </div>
                                <div @click="selectOption('private')"
                                    class="chose flex justify-center items-center gap-2 w-full h-18 p-2">
                                    <svg class="svg-chose" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M5.25 10.0546V8C5.25 4.27208 8.27208 1.25 12 1.25C15.7279 1.25 18.75 4.27208 18.75 8V10.0546C19.8648 10.1379 20.5907 10.348 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.40931 10.348 4.13525 10.1379 5.25 10.0546ZM6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V10.0036C16.867 10 16.4515 10 16 10H8C7.54849 10 7.13301 10 6.75 10.0036V8Z"
                                            fill="#1C274C" />
                                    </svg>
                                    <div class="paragrah-cose">
                                        <p class="text-black text-bold">Moi Uniquement</p>
                                    </div>
                                    <input type="radio" :checked="selectedRadio==='private'" class="rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <textarea name="" v-model="post_content"
                        class="h-full w-full bg-transparent border-0 pt-12 ps-16 text focus:outline-none resize-none"
                        placeholder="What's in your mind, Pew Pew?" rows="8"></textarea>
                        <div class="card-image absolute right-7"
                        style="direction: rtl;bottom: -47px;">
                                <div class="img relative" v-for="(picture,index) in selectedImages" :key="index">
                                    <svg @click="removeImage(index)" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="absolute right-2 top-2">
                                        <path
                                            d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                                            fill="#fff" />
                                    </svg>
                                    <img :src="picture" style="height: 89px;width: 89px;">
                                </div>
                        </div>
                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-6 space-x-2 rounded-b justify-between">
                    <div class="flex items-center justify-between w-full px-4 py-2 rounded-full border">
                        <span class="text font-bold">Add to your post</span>
                        <div class="flex flex-col emojis-container absolute bg-red" ref="divEmoji"
                            style="bottom: 64px;right: 117px;">
                            <div class="w-full flex justify-around category-symbols-container border-b">
                                <span v-for="(category, index) in emojis" class="flex justify-center align-center p-2"
                                    :key="index" @click="categoryChoosed(index)">{{ category[0] }}</span>
                            </div>
                            <div class="emoji-category-container h-full flex p-4">
                                <span v-for="(emoji, index) in category_to_display"
                                    class="flex justify-center align-center p-2" :key="index"
                                    @click="post_content += emoji">{{ emoji }}</span>
                            </div>
                        </div>
                        <div class="flex justify-center items-center gap-4">
                            <button @click="emojisToggle()" ref="btnEmoji">
                                <svg class=" emojis-toggler" xmlns="http://www.w3.org/2000/svg" id="Layer_1"
                                    data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512">
                                    <path
                                        d="M12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.893,24,0A12.013,12.013,0,0,0,12,0Zm0,22A10.011,10.011,0,0,1,2,12C2.5-1.248,21.5-1.244,22,12A10.011,10.011,0,0,1,12,22ZM7,9.5a1.5,1.5,0,0,1,3,0A1.5,1.5,0,0,1,7,9.5Zm7,0a1.5,1.5,0,0,1,3,0A1.5,1.5,0,0,1,14,9.5Zm3.842,6.042A6.827,6.827,0,0,1,12,19a6.836,6.836,0,0,1-5.848-3.458A1,1,0,0,1,7.2,14.024,15.4,15.4,0,0,0,12,15a15.4,15.4,0,0,0,4.792-.976A1,1,0,0,1,17.842,15.542Z" />
                                </svg>
                            </button>
                            <svg data-modal-target="pictureModal" data-modal-toggle="pictureModal"
                                class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" id="Outline"
                                viewBox="0 0 24 24" width="512" height="512">
                                <path
                                    d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0ZM5,2H19a3,3,0,0,1,3,3V19a2.951,2.951,0,0,1-.3,1.285l-9.163-9.163a5,5,0,0,0-7.072,0L2,14.586V5A3,3,0,0,1,5,2ZM5,22a3,3,0,0,1-3-3V17.414l4.878-4.878a3,3,0,0,1,4.244,0L20.285,21.7A2.951,2.951,0,0,1,19,22Z" />
                                <path
                                    d="M16,10.5A3.5,3.5,0,1,0,12.5,7,3.5,3.5,0,0,0,16,10.5Zm0-5A1.5,1.5,0,1,1,14.5,7,1.5,1.5,0,0,1,16,5.5Z" />
                            </svg>
                        </div>
                    </div>
                    <button class="text-white ml-12 px-12 text-lg py-2 brand-background font-bold rounded-full">
                        Post
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- picutre modal -->
    <div id="pictureModal" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 pb-2 border-b rounded-t dark:border-gray-600">
                    <div class="pictureDowload flex justify-center items-center gap-8 ">
                        <span class="upppercase text-md text-bold cursor-pointer"
                            :class="uploadVisible?'notClicked':'isClicked'" @click=" showUploadPicture(false)">Upload
                            picture</span>
                        <span class="upppercase text-md text-bold cursor-pointer"
                            :class="!uploadVisible ?'notClicked':'isClicked'" ref="menuTakePicture"
                            @click=" showUploadPicture(true)">Take picture</span>
                    </div>
                    <button type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="pictureModal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="relative p-6 space-y-6 text-center flex flex-col items-center justify-center"
                    style="height: 335px;">
                    <h1 class="text-white text-center text-xl">Important!</h1>
                    <span class="text-white text-center text-sm text-center">
                        You can upload a maximum of 4 pictures.
                    </span>
                    <button v-show="!uploadVisible" @click="openFileInput" class="text-white bg-blue-500 gap-2 flex justify-center items-center p-2 px-6 rounded-full
              text-bold">
                        Upload pictures
                        <svg class="" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512"
                            height="512">
                            <path
                                d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0ZM5,2H19a3,3,0,0,1,3,3V19a2.951,2.951,0,0,1-.3,1.285l-9.163-9.163a5,5,0,0,0-7.072,0L2,14.586V5A3,3,0,0,1,5,2ZM5,22a3,3,0,0,1-3-3V17.414l4.878-4.878a3,3,0,0,1,4.244,0L20.285,21.7A2.951,2.951,0,0,1,19,22Z" />
                            <path
                                d="M16,10.5A3.5,3.5,0,1,0,12.5,7,3.5,3.5,0,0,0,16,10.5Zm0-5A1.5,1.5,0,1,1,14.5,7,1.5,1.5,0,0,1,16,5.5Z" />
                        </svg>
                        <input type="file" class="hidden" ref="imgInput" accept="image/*" @change="handleFileUpload"
                            multiple>
                    </button>
                    <button v-show="uploadVisible" @click="startCamera" class="text-white bg-blue-500 gap-2 flex justify-center items-center p-2 px-6 rounded-full
              text-bold cursor-pointer">
                        Take pictures
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 6V20M19 6C19 5.06812 19 4.60218 18.8478 4.23463C18.6448 3.74458 18.2554 3.35523 17.7654 3.15224C17.3978 3 16.9319 3 16 3C15.0681 3 14.6022 3 14.2346 3.15224C13.7446 3.35523 13.3552 3.74458 13.1522 4.23463C13 4.60218 13 5.06812 13 6M17 13C17 14.6569 15.6569 16 14 16C12.3431 16 11 14.6569 11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13ZM6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V9.2C21 8.07989 21 7.51984 20.782 7.09202C20.5903 6.71569 20.2843 6.40973 19.908 6.21799C19.4802 6 18.9201 6 17.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20Z"
                                stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <div class="card-image">
                        <div class="img relative" v-for="(picture,index) in selectedImages" :key="index">
                            <svg @click="removeImage(index)" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="absolute right-2 top-2">
                                <path
                                    d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                                    fill="#fff" />
                            </svg>
                            <img :src="picture" style="height: 115px;width: 115px;">
                        </div>
                    </div>
                    <!--video section-->
                    <div class="absolute bottom-2" :class="cameraActive ?'block' : 'hidden'" style="width: 64%;">
                        <video ref="captureCamera" class="w-full" @loadedmetadata="handleVideoLoaded" autoplay>
                        </video>
                        <button type="button" @click="closeCamera"
                            class="absolute top-4 right-4 z-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <svg @click="capturePhoto" viewBox="0 0 1024 1024"
                            class="icon absolute bottom-2 right-2 cursor-pointer" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M845 166l-49-13 49-13 13-48 13 48 48 13-48 13-13 49-13-49zM892 219l-18-4 18-5 5-19 4 19 19 5-19 4-4 19-5-19z"
                                fill="#FDCD60" />
                            <path
                                d="M79 711l-20-5 20-5 5-20 5 20 21 5-21 5-5 21-5-21zM148 862l-33-8 33-7 7-33 8 33 33 7-33 8-8 33-7-33z"
                                fill="#FDCD60" />
                            <path d="M143 169m-9 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0Z" fill="#5546CB" />
                            <path
                                d="M889 854a25 25 0 1 1 25-25 25 25 0 0 1-25 25z m0-36a10 10 0 1 0 10 10 10 10 0 0 0-10-10z"
                                fill="#5546CB" />
                            <path
                                d="M166 400v347a31 31 0 0 0 31 31h629a31 31 0 0 0 31-31V400z m362 358c-92 0-168-75-168-168s75-168 168-168 168 75 168 168-76 168-168 168zM858 380v-63a31 31 0 0 0-31-31H198a31 31 0 0 0-31 31v63z m-140-58h71v20h-71z"
                                fill="#FDCD60" />
                            <path
                                d="M826 266h-40l-15-59H653l-15 59H198a51 51 0 0 0-51 51v430a51 51 0 0 0 51 51h628a51 51 0 0 0 51-51V317a51 51 0 0 0-51-51z m-157-39h86l10 37H660z m-471 59h628a31 31 0 0 1 31 31v63H166v-63a31 31 0 0 1 32-31z m628 492H198a31 31 0 0 1-31-31V400h691v347a31 31 0 0 1-32 31z"
                                fill="#5546CB" />
                            <path
                                d="M528 443c-81 0-148 66-148 148s66 148 148 148 148-66 148-148-67-148-148-148z m0 264a116 116 0 1 1 116-117 116 116 0 0 1-116 116z"
                                fill="#FFFFFF" />
                            <path
                                d="M528 423c-92 0-168 75-168 168s75 168 168 168 168-75 168-168-76-168-168-168z m0 315c-81 0-148-66-148-148s66-148 148-148 148 66 148 148-67 148-148 148z"
                                fill="#5546CB" />
                            <path
                                d="M528 494a96 96 0 1 0 96 96 96 96 0 0 0-96-96z m43 81a18 18 0 1 1 18-18 18 18 0 0 1-18 18z"
                                fill="#FF8859" />
                            <path
                                d="M528 474a116 116 0 1 0 116 116 116 116 0 0 0-116-116z m0 212a96 96 0 1 1 96-96 96 96 0 0 1-96 96z"
                                fill="#5546CB" />
                            <path d="M571 558m-18 0a18 18 0 1 0 36 0 18 18 0 1 0-36 0Z" fill="#FFFFFF" />
                            <path d="M755 227h-86l-9 37h105l-10-37z" fill="#AFBCF3" />
                            <path d="M718 322h71v20h-71z" fill="#5546CB" />
                        </svg>
                        <canvas ref="canvas" style="display: none;"></canvas>
                    </div>
                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-hide="pictureModal" type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Upload</button>
                    <button data-modal-hide="pictureModal" type="button"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import getEmojis from "../../tools/getEmojis";
export default {
    data() {
        return {
            post_content: "",
            category_to_display: [],
            displayDiv: 'none',
            selectedRadio: 'public',
            selectedImages: [],
            uploadVisible: false,
            cameraActive: false,
            photoTaken: false,
            previewImage: null,
        };
    },
    computed: {
        emojis() {
            return getEmojis();
        },
    },
    methods: {
        emojisToggle() {
            console.log("object");
            $(".emojis-container").toggleClass("open");
        },
        categoryChoosed(index) {
            this.category_to_display = this.emojis[index];
        },
        showVisibility() {
            this.displayDiv = this.displayDiv === 'none' ? 'block' : 'none';
        },
        selectOption(option) {
            this.selectedRadio = option;
            this.displayDiv = 'none'
        },
        onClickOutside(referenceDiv, event) {
            const targetElement = event.target;
            const divElement = this.$refs[referenceDiv];
            if (divElement &&
                !divElement.contains(targetElement)) {
                this.displayDiv = 'none'
            }
        },
        stopPropagationTarget(referenceBtn) {
            this.$refs[referenceBtn].addEventListener('click', event => {
                event.stopPropagation();
            });
        },
        openFileInput() {
            this.$refs.imgInput.click()
        },
        showUploadPicture(bool) {
            this.uploadVisible = bool;
        },
        handleFileUpload(event) {
            const uploadedFile = event.target.files[0];
            console.log(this.selectedImages);
            if (this.selectedImages.length < 4 && this.selectedImages) {
                const imgURL = URL.createObjectURL(uploadedFile);
                this.selectedImages.push(imgURL)
            }
        },
        removeImage(index) {
            const removedImageURL = this.selectedImages.splice(index, 1)[0];
            URL.revokeObjectURL(removedImageURL);
        },
        async startCamera() {
            this.takePhotoIsOpen = true
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: false
                });
                this.$refs.captureCamera.srcObject = stream;
            } catch (error) {
                console.error('Error accessing camera:', error);
            }
        },
        capturePhoto() {
            const canvas = this.$refs.canvas;
            const video = this.$refs.captureCamera;

            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

            const image_data_url = canvas.toDataURL('image/jpeg');
            console.log(image_data_url);
            this.selectedImages.push(image_data_url)
            const stream = video.srcObject;
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
            video.srcObject = null;
            this.cameraActive = false
        },
        handleVideoLoaded() {
            this.cameraActive = true;
        },
        closeCamera() {
            const video = this.$refs.captureCamera;
            const stream = video.srcObject;
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
            video.srcObject = null;
            this.cameraActive = false
        }
    },

    mounted() {
        this.category_to_display = this.emojis[0];
        document.addEventListener('click', this.onClickOutside.bind(this, 'choseVisibility')),
            this.stopPropagationTarget('btnShowVisibility')
    }
};
</script>

<style>
.image {
    overflow: hidden;
    height: 50px;
    width: 50px;
    box-shadow: 0 0 10 rgba(128, 128, 128, 0.87);
}

button.privacyBtn {
    background-color: gray;
    width: 112px;
    height: 25px;
    position: relative;
}

.privacyBtn svg {
    height: 15px;
}

.emojis-toggler {
    cursor: pointer;
}

.category-symbols-container>span:hover {
    background-color: #e0e0e0;
    cursor: pointer;
}

.emojis-container {
    height: 0;
    background-color: var(--background-color);
    border-radius: 15px;
    width: 75%;
    overflow: hidden;
}

.emojis-container.open {
    height: 220px;
    padding: 1em;
}

.emoji-category-container {
    overflow-y: scroll;
    flex-wrap: wrap;
}

.emoji-category-container>span:hover {
    background-color: #e0e0e0;
    cursor: pointer;
}

.visibilite-chose {
    margin-top: 0.4px;
    border-radius: 10px;
    padding: 10px 11px;
    /* display: none; */
}

.visibilite-chose .chose {
    gap: 9px;
}

.visibilite-chose .chose:hover {
    cursor: pointer;
    background-color: #eaf3ff;
    border-radius: 10px
}

.visibilite-chose .chose .svg-chose {
    width: 39px;
    height: 39px
}

.visibilite-chose .chose input {
    align-self: center;
    padding: 10px;
    justify-self: end;
    cursor: pointer;
}

.visibilite-chose .chose .paragrah-cose {
    width: 82%;
}

.pictureDowload span:hover::after {
    opacity: 1;
}

.card-image {
    display: grid;
    column-gap: 10px;
    height: 40%;
    grid-template-columns: repeat(4, 1fr);
}

.card-image .img svg {
    height: 16px;
    width: 16px;
    cursor: pointer;
}

.card-image .img svg:hover>path {
    fill: #e0e0e0;
}

.notClicked {
    color: #a19d9d;
}

.isClicked {
    color: #fff;
}

.pictureDowload span {
    position: relative;
}

.isClicked::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -18.2px;
    width: 100%;
    height: 1px;
    background-color: #4d90fe;
    opacity: 0;
    transition: opacity 0.3s;
}

.isClicked::after {
    opacity: 1;
}

.camera-container {
    position: relative;
}

.camera-container video {
    max-width: 100%;
    height: auto;
}

.camera-container button {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
}
</style>