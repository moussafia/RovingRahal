<template>
    <main>
        <div class="container">
            <div class="post flex px-4 mt-5">
                <img class="picture-post" src="src/assets/images/profile_test.png" alt="">
                <div class="flex-1 px-6">
                    <div class="flex justify-between">
                        <div class="post-head icons-text flex gap-3">
                            <a href="#" class="font-extrabold text">
                                Pew Pew
                            </a>
                            <a href="#">
                                @PewPew
                            </a>|
                            <p class="flex items-center text-sm">
                                18h
                            </p>
                        </div>
                        <div>
                            <!-- B vert -->
                            <div class="cursor-pointer" id="dropdownDefaultButton" data-dropdown-toggle="dropdown-vert">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g transform="rotate(90 12 12)">
                                        <path fill='#71767b'
                                            d="M12 20q-.825 0-1.413-.588T10 18q0-.825.588-1.413T12 16q.825 0 1.413.588T14 18q0 .825-.588 1.413T12 20Zm0-6q-.825 0-1.413-.588T10 12q0-.825.588-1.413T12 10q.825 0 1.413.588T14 12q0 .825-.588 1.413T12 14Zm0-6q-.825 0-1.413-.588T10 6q0-.825.588-1.413T12 4q.825 0 1.413.588T14 6q0 .825-.588 1.413T12 8Z" />
                                    </g>
                                </svg>
                            </div>
                            <!-- E vert -->
                            <!-- B Dropdown menu -->
                            <div id="dropdown-vert" class="z-10 dropdown-posts hidden divide-y rounded-md w-44">
                                <ul class="py-2 text-sm" aria-labelledby="dropdownDefaultButton">
                                    <li class="flex items-center ps-4 links-dropdown">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="currentColor" d="M6.65 2C5.43 2 4.48 3.38 4.11 3.82a.49.49 0 0 0-.11.32v4.4a.44.44 0 0 0 .72.36a3 3 0 0 1 1.93-1.17C8.06 7.73 8.6 9 10.07 9a5.28 5.28 0 0 0 2.73-1.09a.49.49 0 0 0 .2-.4V2.45a.44.44 0 0 0-.62-.45a5.75 5.75 0 0 1-2.31 1.06C8.6 3.08 8.12 2 6.65 2zM2.5 3a1 1 0 1 1 0-2a1 1 0 0 1 0 2zM3 4v9.48a.5.5 0 0 1-1 0V4a.5.5 0 0 1 1 0z"/></svg>
                                        <a href="#" class="block px-4 py-2">Dashboard</a>
                                    </li>
                                </ul>
                            </div>
                            <!-- E Dropdown menu -->
                        </div>

                    </div>

                    <div class="post-body icons-text py-3">
                        <p class="text">Can anyone explain how this is possible?</p>
                        <div class="container-picture my-2">
                            <img src="https://img.freepik.com/photos-gratuite/prise-vue-au-grand-angle-seul-arbre-poussant-sous-ciel-assombri-pendant-coucher-soleil-entoure-herbe_181624-22807.jpg?t=st=1691497260~exp=1691497860~hmac=d54c144480355ccee40020018e5ea92475efd84430f5d2f0544c6523f4426fea"
                                alt="">
                        </div>
                    </div>
                    <div class="post-footer flex justify-between">
                        <div class="flex gap-3">
                            <div class="flex gap-1 cursor-pointer icons" @click="toggleLike">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="#f9595f" v-if="isLiked"
                                        d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
                                    <path fill="#71767b" v-else
                                        d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z" />
                                </svg>
                                <span :class="isLiked ? 'liked' : 'not-liked'">48K</span>
                            </div>
                            <div class="cursor-pointer icons">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="#71767b"
                                        d="m12 21.312l-7.121-7.121a3.002 3.002 0 0 1 0-4.242C5.973 8.855 7.857 8.811 9 9.834V5c0-1.654 1.346-3 3-3s3 1.346 3 3v4.834c1.143-1.023 3.027-.979 4.121.115a3.002 3.002 0 0 1 0 4.242L12 21.312zM7 11.07a.999.999 0 0 0-.707 1.707L12 18.484l5.707-5.707a.999.999 0 0 0 0-1.414a1.021 1.021 0 0 0-1.414 0L13 14.656V5a1.001 1.001 0 0 0-2 0v9.656l-3.293-3.293A.991.991 0 0 0 7 11.07z" />
                                </svg>
                            </div>
                        </div>
                        <div class="flex gap-1 cursor-pointer icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="none" stroke="#71767b" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M7 8h10M7 11h10M7 14h4m-8 4V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7.667a2 2 0 0 0-1.2.4L3 21v-3z" />
                            </svg>
                            <span class="icons-text">1K</span>
                        </div>
                        <div>
                            <div class="flex gap-1 cursor-pointer icons" id="dropdownDefaultButton"
                                data-dropdown-toggle="dropdown-share">
                                <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                                    <path fill="none" stroke="#71767b" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="32"
                                        d="M336 192h40a40 40 0 0 1 40 40v192a40 40 0 0 1-40 40H136a40 40 0 0 1-40-40V232a40 40 0 0 1 40-40h40m160-64l-80-80l-80 80m80 193V48" />
                                </svg>
                                <span class="icons-text">50K</span>

                            </div>
                            <!-- B Dropdown menu -->
                            <div id="dropdown-share" class="z-10 dropdown-posts hidden divide-y rounded-md w-60">
                                <ul class="py-2 text-sm" aria-labelledby="dropdownDefaultButton">
                                    <li class="flex items-center ps-4 links-dropdown">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="none" stroke="currentColor" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="2"
                                                d="m9 15l6-6m-4-3l.463-.536a5 5 0 0 1 7.071 7.072L18 13m-5 5l-.397.534a5.068 5.068 0 0 1-7.127 0a4.972 4.972 0 0 1 0-7.071L6 11" />
                                        </svg>
                                        <a href="#" class="block px-4 py-2">Copy link to Tweet</a>
                                    </li>
                                    <li class="flex items-center ps-4 links-dropdown">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512"
                                            viewBox="0 0 512 512">
                                            <path fill="none" stroke="currentColor" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="32"
                                                d="M336 192h40a40 40 0 0 1 40 40v192a40 40 0 0 1-40 40H136a40 40 0 0 1-40-40V232a40 40 0 0 1 40-40h40m160-64l-80-80l-80 80m80 193V48" />
                                        </svg>
                                        <a href="#" class="block px-4 py-2">Share Tweet via ...</a>
                                    </li>
                                    <li class="flex items-center ps-4 links-dropdown">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5">
                                                <path stroke-linejoin="round" d="m7 8l5 3l5-3" />
                                                <path d="M10 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6.857" />
                                                <path stroke-linejoin="round"
                                                    d="M13 17.111h6.3c3.6 0 3.6 4.889 0 4.889M13 17.111L16.15 14M13 17.111l3.15 3.111" />
                                            </g>
                                        </svg>
                                        <a href="#" class="block px-4 py-2">Send via Direct Message</a>
                                    </li>
                                    <li class="flex items-center ps-4 links-dropdown">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                            <path fill="currentColor"
                                                d="M24 16v10.752l-7.096-3.59l-.904-.457l-.9.456L8 26.748V4h10V2H8a2 2 0 0 0-2 2v26l10-5.054L26 30V16Z" />
                                            <path fill="currentColor" d="M26 6V2h-2v4h-4v2h4v4h2V8h4V6h-4z" />
                                        </svg>
                                        <a href="#" class="block px-4 py-2">Bookmark</a>
                                    </li>
                                </ul>
                            </div>
                            <!-- E Dropdown menu -->
                        </div>

                        <div class="flex gap-1 cursor-pointer icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <path fill="#71767b"
                                    d="M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68ZM16 25c-5.3 0-10.9-3.93-12.93-9C5.1 10.93 10.7 7 16 7s10.9 3.93 12.93 9C26.9 21.07 21.3 25 16 25Z" />
                                <path fill="#71767b"
                                    d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6Zm0 10a4 4 0 1 1 4-4a4 4 0 0 1-4 4Z" />
                            </svg>
                            <span class="icons-text">60K</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            isLiked: false,
        };
    },
    methods: {
        toggleLike() {
            this.isLiked = !this.isLiked;
        },
    },
}
</script>

<style>
main {
    height: 100vh;
    width: 630px;
    /* 630 370 */
    padding-top: 100px;
    border-right: 1px solid var(--dark-color);
}

.liked {
    color: var(--brand-color);
}

.not-liked {
    color: var(--icons-text);
}

.icons {
    padding: 7px 10px;
    border-radius: 30px;
}

.icons:hover {
    background-color: var(--dark-color);
}

.picture-post {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.post {
    padding-bottom: 15px;
    border-bottom: 1px solid var(--dark-color);
}</style>