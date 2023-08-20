<template>
    <!-- Main modal -->
    <div id="sendPostFriendsModal" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-dark rounded-lg shadow">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 border-b rounded-t border-slate-700">
                    <h3 class="text-xl font-bold text m-auto">
                        Send via direct message
                    </h3>
                    <button type="button"
                        class="text-gray-400 absolute right-6 bg-transparent hover:bg-slate-600 hover:text-gray-900 rounded-full text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="sendPostFriendsModal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div>
                    <!-- B search -->
                    <div class="py-2 space-y-2 border-b border-slate-700">
                        <div class="container-search relative flex">
                            <input class="w-full search search text px-5 w-full pl-16 bg-dark border-none" type="text"
                                placeholder="Search People">
                            <svg class="" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512"
                                height="512">
                                <path
                                    d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
                            </svg>
                        </div>
                    </div>
                    <!-- E search -->
                    <!-- B People -->
                    <div class="px-6">
                        <div class="mt-3 overflow-y-auto h-64">
                        <div class="flex items-center gap-2 py-1">
                            <img src="src/assets/images/profile_test.png" class="w-14 h-14 rounded-full" alt="">
                            <div>
                                <a class="font-extrabold text" href="">
                                    <h3>Saad moumou</h3>
                                </a>
                                <a class="icons-text">
                                    <p>@shadowgks</p>
                                </a>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 py-1">
                            <img src="src/assets/images/profile_test.png" class="w-14 h-14 rounded-full" alt="">
                            <div>
                                <a class="font-extrabold text" href=""><h3>Oussama Kharbaq</h3></a>
                                <a class="icons-text">
                                    <p>@drawing</p>
                                </a>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 py-1">
                            <img src="src/assets/images/profile_test.png" class="w-14 h-14 rounded-full" alt="">
                            <div>
                                <a class="font-extrabold text" href=""><h3>Mohammed</h3></a>
                                <a class="icons-text">
                                    <p>@M</p>
                                </a>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 py-1">
                            <img src="src/assets/images/profile_test.png" class="w-14 h-14 rounded-full" alt="">
                            <div>
                                <a class="font-extrabold text" href=""><h3>Pew Pew</h3></a>
                                <a class="icons-text">
                                    <p>@Pew</p>
                                </a>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 py-1">
                            <img src="src/assets/images/profile_test.png" class="w-14 h-14 rounded-full" alt="">
                            <div>
                                <a class="font-extrabold text" href=""><h3>Im here</h3></a>
                                <a class="icons-text">
                                    <p>@Cheating</p>
                                </a>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 py-1">
                            <img src="src/assets/images/profile_test.png" class="w-14 h-14 rounded-full" alt="">
                            <div>
                                <a class="font-extrabold text" href=""><h3>Done</h3></a>
                                <a class="icons-text">
                                    <p>@Done29</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>

                    <!-- E People -->
                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-6 space-x-2 rounded-b justify-between">
                    <div class="flex items-center justify-between w-full rounded-full add-comment">
                        <input type="text" class="w-full rounded-full px-4 py-2 border-none bg-dark text"
                            placeholder="Add a comment">
                    </div>
                    <button
                        class="text-white ml-12 px-12 text-lg py-2 brand-background font-bold rounded-full">Send</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.add-comment {
    border: 1px solid var(--icons-text);
}

/* .container-search{
    border-bottom: 1px solid #fff;
} */
.container-search svg {
    position: absolute;
    width: 24px;
    height: 24px;
    fill: var(--icons-text);
    top: 50%;
    transform: translateY(-50%);
    left: 1.5em;
}
</style>