<template>
    <div id="signModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white sign-container flex flex-col">
                <h1 v-if="sign == 'in'" class="font-medium text-3xl">Log In</h1>
                <h1 v-if="sign == 'up'" class="font-medium text-3xl">Sign Up</h1>
                <h1 v-if="sign == 'fp'" class="font-medium text-3xl">Forget Password</h1>
                <p class="text-xs mt-2 text-justify mb-8">By continuing, you are setting up a Web Name
                    account and agree to our <a class="text-sky-500">User Agreement</a> and
                    <a class="text-sky-500">Privacy Policy</a>.
                </p>
                <button class="w-full flex items-center font-medium text-sm mb-4 rounded-full with-google p-2 px-4">
                    <svg width="28" class="me-8" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_73_738)"><path d="M9.7539 0.920964C6.95626 1.89149 4.54359 3.73358 2.87025 6.17666C1.19692 8.61973 0.351129 11.535 0.457115 14.4943C0.563102 17.4536 1.61528 20.3009 3.4591 22.6181C5.30292 24.9352 7.84119 26.5999 10.7011 27.3678C13.0197 27.9661 15.4489 27.9924 17.7798 27.4444C19.8915 26.9701 21.8437 25.9555 23.4455 24.5C25.1125 22.9389 26.3225 20.9529 26.9455 18.7557C27.6223 16.3661 27.7428 13.8533 27.2976 11.41H14.2776V16.811H21.818C21.6673 17.6724 21.3443 18.4945 20.8685 19.2282C20.3926 19.9619 19.7736 20.5921 19.0486 21.081C18.1279 21.6903 17.09 22.1001 16.0014 22.2841C14.9097 22.4871 13.79 22.4871 12.6983 22.2841C11.5917 22.0556 10.545 21.5989 9.62484 20.9432C8.14641 19.8966 7.03631 18.4099 6.45296 16.695C5.85991 14.948 5.85991 13.0542 6.45296 11.3072C6.86821 10.0827 7.55466 8.96776 8.46109 8.04565C9.49838 6.97104 10.8116 6.20289 12.2567 5.82551C13.7019 5.44812 15.223 5.47606 16.6533 5.90628C17.7706 6.24911 18.7924 6.84838 19.637 7.65628C20.4872 6.81044 21.336 5.96242 22.1833 5.11221C22.6208 4.65503 23.0976 4.21971 23.5286 3.75159C22.2391 2.55178 20.7257 1.61813 19.0748 1.00409C16.0686 -0.0874958 12.7792 -0.116831 9.7539 0.920964Z" fill="white"/><path d="M9.75383 0.920928C12.7788 -0.117572 16.0682 -0.0890089 19.0748 1.00187C20.7259 1.62008 22.2387 2.55823 23.5263 3.76249C23.0888 4.23062 22.6273 4.66812 22.181 5.12312C21.3323 5.97041 20.4842 6.81478 19.637 7.65624C18.7923 6.84835 17.7706 6.24907 16.6532 5.90624C15.2234 5.47452 13.7023 5.44496 12.2568 5.8208C10.8113 6.19665 9.49726 6.96338 8.45883 8.03687C7.5524 8.95897 6.86595 10.0739 6.4507 11.2984L1.91602 7.78749C3.53916 4.56872 6.34953 2.10661 9.75383 0.920928Z" fill="#E33629"/><path d="M0.713138 11.2656C0.956694 10.0576 1.36135 8.88777 1.91626 7.78748L6.45095 11.3072C5.8579 13.0541 5.8579 14.948 6.45095 16.695C4.94012 17.8616 3.42856 19.0341 1.91626 20.2125C0.52753 17.4482 0.103991 14.2986 0.713138 11.2656Z" fill="#F8BD00"/><path d="M14.2778 11.4078H27.2978C27.743 13.8511 27.6225 16.3639 26.9456 18.7535C26.3227 20.9508 25.1127 22.9367 23.4456 24.4978C21.9822 23.356 20.5122 22.2228 19.0488 21.081C19.7743 20.5916 20.3936 19.9607 20.8694 19.2263C21.3453 18.4918 21.668 17.6688 21.8181 16.8066H14.2778C14.2756 15.0085 14.2778 13.2081 14.2778 11.4078Z" fill="#587DBD"/><path d="M1.91406 20.2124C3.42635 19.0458 4.93792 17.8733 6.44875 16.6949C7.03327 18.4104 8.14495 19.8972 9.625 20.9431C10.548 21.5957 11.597 22.0487 12.705 22.2731C13.7967 22.4761 14.9164 22.4761 16.0081 22.2731C17.0967 22.0891 18.1347 21.6792 19.0553 21.0699C20.5187 22.2118 21.9888 23.3449 23.4522 24.4868C21.8507 25.9431 19.8984 26.9584 17.7866 27.4334C15.4556 27.9814 13.0264 27.9551 10.7078 27.3568C8.87404 26.8672 7.16116 26.0041 5.67656 24.8215C4.10534 23.5738 2.82195 22.0016 1.91406 20.2124Z" fill="#319F43"/></g><defs><clipPath id="clip0_73_738"><rect width="28" height="28" fill="white"/></clipPath></defs></svg>

                    Continuer avec Google
                </button>
                <button class="w-full justify- flex items-center font-medium text-sm rounded-full with-google p-2 px-4 mb-4">
                    <svg width="28" class="me-8" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.4169 14.8498C21.4549 18.9623 25.0249 20.331 25.0643 20.3485C25.0341 20.4448 24.494 22.2989 23.1837 24.2136C22.051 25.8691 20.8752 27.5185 19.0235 27.5531C17.204 27.5863 16.6188 26.4737 14.5383 26.4737C12.4584 26.4737 11.8085 27.5185 10.0858 27.5863C8.2982 27.6541 6.93692 25.7958 5.79483 24.1467C3.4612 20.7727 1.67773 14.6125 4.07239 10.4542C5.26195 8.38924 7.3882 7.08177 9.6958 7.04808C11.451 7.01462 13.1079 8.2289 14.1808 8.2289C15.2531 8.2289 17.2665 6.76852 19.3831 6.9829C20.2693 7.01987 22.7565 7.34077 24.3536 9.67877C24.2252 9.75861 21.386 11.4115 21.4169 14.8498ZM17.9971 4.75099C18.9461 3.60233 19.5848 2.00283 19.4107 0.411865C18.0426 0.466771 16.3885 1.3234 15.4074 2.47162C14.528 3.48815 13.758 5.11565 13.9656 6.67512C15.4905 6.79324 17.048 5.9003 17.9971 4.75099Z" fill="black"/></svg>
                    Continuer avec Ios  
                </button>
                <hr class="my-5">
                <p class="or">OR</p>
                 <!-- Registration Form -->
                <form v-if="sign === 'up'" @submit.prevent="register" class="mt-4">
                    <input v-model="registrationForm.name" class="rounded-full w-full border-0 px-6 py-3 mb-4" type="text" placeholder="Username">
                    <input v-model="registrationForm.email" class="rounded-full w-full border-0 px-6 py-3 mb-4" type="email" placeholder="Email">
                    <input v-model="registrationForm.password" class="rounded-full w-full border-0 px-6 py-3 mb-4" type="password" placeholder="Password">
                    <input v-model="registrationForm.password_confirmation" class="rounded-full w-full border-0 px-6 py-3 mb-4" type="password" placeholder="Confirm Your Password">
                    <button class="text-center rounded-full w-full border-0 px-6 py-3 mb-4 brand-background text-white font-bold">
                        Sign Up
                    </button>
                </form>

                <!-- Login Form -->
                <form v-else-if="sign === 'in'" @submit.prevent="login" class="mt-4">
                    <input v-model="registrationForm.email" class="rounded-full w-full border-0 px-6 py-3 mb-4" type="email" placeholder="Email">
                    <input v-model="registrationForm.password" class="rounded-full w-full border-0 px-6 py-3" type="password" placeholder="Password">
                    <p  class="text-xs text-justify my-4">Forget your <a class="text-sky-500" @click="sign = 'fp'">Password</a>?
                    </p>
                    <button class="text-center rounded-full w-full border-0 px-6 py-3 mb-4 brand-background text-white font-bold">
                        Log In
                    </button>
                </form>

                <!-- Password Reset Form -->
                <form v-else-if="sign === 'fp'" @submit.prevent="resetPassword" class="mt-4">
                    <input v-model="registrationForm.email" class="rounded-full w-full border-0 px-6 py-3 mb-4" type="email" placeholder="Email">
                    <button class="text-center rounded-full w-full border-0 px-6 py-3 mb-4 brand-background text-white font-bold">
                        Reset Password
                    </button>
                </form>
                <!-- <form v-if="sign == 'up'" action="" class="mt-4">
                    <input  class="rounded-full w-full border-0 px-6 py-3 mb-4" type="text" placeholder="Username">
                    <input  class="rounded-full w-full border-0 px-6 py-3 mb-4" type="Email" placeholder="Email">
                    <input  class="rounded-full w-full border-0 px-6 py-3 mb-4" type="password" placeholder="Password">
                    <input  class="rounded-full w-full border-0 px-6 py-3 mb-4" type="password" placeholder="Confirm Your Password">
                    <button class="text-center rounded-full w-full border-0 px-6 py-3 mb-4 brand-background text-white font-bold">
                        Sign Up
                    </button>
                </form>
                <form v-else-if="sign == 'in'" action="" class="mt-4">
                    <input class="rounded-full w-full border-0 px-6 py-3 mb-4" type="email" placeholder="Email">
                    <input  class="rounded-full w-full border-0 px-6 py-3" type="password" placeholder="Password">
                    <p  class="text-xs text-justify my-4">Forget your <a class="text-sky-500" @click="sign = 'fp'">Password</a>?
                    </p>
                    <button class="text-center rounded-full w-full border-0 px-6 py-3 mb-4 brand-background text-white font-bold">
                        Log In
                    </button>
                </form>
                <form v-else-if="sign == 'fp'" action="" class="mt-4">
                    <input class="rounded-full w-full border-0 px-6 py-3 mb-4" type="email" placeholder="Email">
                    <button class="text-center rounded-full w-full border-0 px-6 py-3 mb-4 brand-background text-white font-bold">
                        Reset Password
                    </button>
                </form> -->
                <p v-if="sign == 'fp'" class="text-xs text-justify mt-2">I Remember My Password <a class="text-sky-500" @click="sign = 'in'">Log In</a>
                </p>
                <p v-if="sign == 'in'" class="text-xs text-justify mt-2">New to Web Name ? <a class="text-sky-500" @click="sign = 'up'">Sign up</a>
                </p>
                <p v-if="sign == 'up'" class="text-xs text-justify mt-2">Alreay a web name ? <a class="text-sky-500" @click="sign = 'in'">Log In</a> 
                </p>
            </div>

            <!--  -->

        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
     
export default {
    data(){
        return {
            sign:'in',
            registrationForm: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            }
        }
    },
    methods:{
        ...mapActions("users", ["registerUser","loginUser","resetPasswordRequest"]),
        async register() {
                console.log(this.registrationForm);
                await this.registerUser(this.registrationForm);
        },
        async login() {
            await this.loginUser(this.registrationForm);
        },
        async resetPassword() {
            await this.resetPasswordRequest(this.registrationForm);
        }
    }
}
</script>
<style scoped>
.sign-container{
    width: 400px;
    border-radius: 12px;
    padding: 15%;
} 
.with-google,.with-ios{
    border: 1px solid rgb(172, 172, 172);
}
hr{
    border-top-width:2px;
}
.or{
    background-color: inherit;
    padding: 0 6px;
    margin: auto;
    margin-top: -32px;
}
.sign-container input{
    background-color: #f0f0f0;
}
</style>