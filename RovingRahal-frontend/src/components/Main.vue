<template>
    <main>
        <div class="container">
            <div class="post flex px-4 mt-5">
                <img class="picture-post" src="src/assets/images/profile_test.png" alt="">
                <div class="flex-1 px-6">
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
                    <div class="post-body icons-text py-3">
                        <p class="text">Can anyone explain how this is possible?</p>
                        <div class="container-picture my-2">
                            <img src="https://img.freepik.com/photos-gratuite/prise-vue-au-grand-angle-seul-arbre-poussant-sous-ciel-assombri-pendant-coucher-soleil-entoure-herbe_181624-22807.jpg?t=st=1691497260~exp=1691497860~hmac=d54c144480355ccee40020018e5ea92475efd84430f5d2f0544c6523f4426fea"
                                alt="">
                        </div>
                    </div>
                    <div class="post-footer flex justify-between">
                        <div class="flex gap-8">
                            <div class="flex gap-1 cursor-pointer icons" @click="toggleLike">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="#f9595f" v-if="isLiked"
                                        d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
                                    <path fill="#71767bwwwwwwwwwwwwwwwww" v-else
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
                        <div class="flex gap-1 cursor-pointer icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                                <path fill="none" stroke="#71767b" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="32"
                                    d="M336 192h40a40 40 0 0 1 40 40v192a40 40 0 0 1-40 40H136a40 40 0 0 1-40-40V232a40 40 0 0 1 40-40h40m160-64l-80-80l-80 80m80 193V48" />
                            </svg>
                            <span class="icons-text">50K</span>
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
    }
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
}
</style>