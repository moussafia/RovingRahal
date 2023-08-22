<template>
    <div class="div brand-shadow">
        <h1 class="text font-bold">Reset Password</h1>
        <form action="" class="reset-form" @submit.prevent="reset">
            <div class="hide">
                <input type="password" v-model="info.password" class="bg-dark text" id="new" placeholder="New Password">
                <svg xmlns="http://www.w3.org/2000/svg" class="normal" @click="showOrHide('new')" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M23.271,9.419C21.72,6.893,18.192,2.655,12,2.655S2.28,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162C2.28,17.107,5.808,21.345,12,21.345s9.72-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419Zm-1.705,4.115C20.234,15.7,17.219,19.345,12,19.345S3.766,15.7,2.434,13.534a2.918,2.918,0,0,1,0-3.068C3.766,8.3,6.781,4.655,12,4.655s8.234,3.641,9.566,5.811A2.918,2.918,0,0,1,21.566,13.534Z"/><path d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="notNormal" @nclick="showOrHide('new')" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M23.271,9.419A15.866,15.866,0,0,0,19.9,5.51l2.8-2.8a1,1,0,0,0-1.414-1.414L18.241,4.345A12.054,12.054,0,0,0,12,2.655C5.809,2.655,2.281,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162A15.866,15.866,0,0,0,4.1,18.49l-2.8,2.8a1,1,0,1,0,1.414,1.414l3.052-3.052A12.054,12.054,0,0,0,12,21.345c6.191,0,9.719-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419ZM2.433,13.534a2.918,2.918,0,0,1,0-3.068C3.767,8.3,6.782,4.655,12,4.655A10.1,10.1,0,0,1,16.766,5.82L14.753,7.833a4.992,4.992,0,0,0-6.92,6.92l-2.31,2.31A13.723,13.723,0,0,1,2.433,13.534ZM15,12a3,3,0,0,1-3,3,2.951,2.951,0,0,1-1.285-.3L14.7,10.715A2.951,2.951,0,0,1,15,12ZM9,12a3,3,0,0,1,3-3,2.951,2.951,0,0,1,1.285.3L9.3,13.285A2.951,2.951,0,0,1,9,12Zm12.567,1.534C20.233,15.7,17.218,19.345,12,19.345A10.1,10.1,0,0,1,7.234,18.18l2.013-2.013a4.992,4.992,0,0,0,6.92-6.92l2.31-2.31a13.723,13.723,0,0,1,3.09,3.529A2.918,2.918,0,0,1,21.567,13.534Z"/></svg>
            </div>
            <div class="hide">
                <input type="password" v-model="info.password_confirmation" class="bg-dark text" id="rep" placeholder="Repeat Password">
                <svg xmlns="http://www.w3.org/2000/svg" class="normal" @click="showOrHide('rep')" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M23.271,9.419C21.72,6.893,18.192,2.655,12,2.655S2.28,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162C2.28,17.107,5.808,21.345,12,21.345s9.72-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419Zm-1.705,4.115C20.234,15.7,17.219,19.345,12,19.345S3.766,15.7,2.434,13.534a2.918,2.918,0,0,1,0-3.068C3.766,8.3,6.781,4.655,12,4.655s8.234,3.641,9.566,5.811A2.918,2.918,0,0,1,21.566,13.534Z"/><path d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="notNormal" @click="showOrHide('rep')" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M23.271,9.419A15.866,15.866,0,0,0,19.9,5.51l2.8-2.8a1,1,0,0,0-1.414-1.414L18.241,4.345A12.054,12.054,0,0,0,12,2.655C5.809,2.655,2.281,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162A15.866,15.866,0,0,0,4.1,18.49l-2.8,2.8a1,1,0,1,0,1.414,1.414l3.052-3.052A12.054,12.054,0,0,0,12,21.345c6.191,0,9.719-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419ZM2.433,13.534a2.918,2.918,0,0,1,0-3.068C3.767,8.3,6.782,4.655,12,4.655A10.1,10.1,0,0,1,16.766,5.82L14.753,7.833a4.992,4.992,0,0,0-6.92,6.92l-2.31,2.31A13.723,13.723,0,0,1,2.433,13.534ZM15,12a3,3,0,0,1-3,3,2.951,2.951,0,0,1-1.285-.3L14.7,10.715A2.951,2.951,0,0,1,15,12ZM9,12a3,3,0,0,1,3-3,2.951,2.951,0,0,1,1.285.3L9.3,13.285A2.951,2.951,0,0,1,9,12Zm12.567,1.534C20.233,15.7,17.218,19.345,12,19.345A10.1,10.1,0,0,1,7.234,18.18l2.013-2.013a4.992,4.992,0,0,0,6.92-6.92l2.31-2.31a13.723,13.723,0,0,1,3.09,3.529A2.918,2.918,0,0,1,21.567,13.534Z"/></svg>
            </div>
            <button>Change My Password</button>
        </form>
    </div>
    <div id="successModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white sign-container flex flex-col p-12">
                <h1>Your Password Has Been Changed Successfully </h1>
                <button @click="toLogIn" class="w-56 ml-auto mt-12">Go and login</button>
            </div>
        </div>
    </div>
    <button class="hidden" id="success" data-modal-target="successModal" data-modal-toggle="successModal"></button>
    <button id="cancelSuccess" class="hidden" data-modal-hide="successModal"></button>
</template>
<script>

import { mapActions } from "vuex";
export default{
    data(){
        return {
            info :{
                token : this.$route.query.token,
                email : this.$route.query.email,
                password :'',
                password_confirmation:'',
            },
            pass : false,

        }
    },
    methods:{
        ...mapActions("users", ["resetPassword"]),
        showOrHide(value){
            let input = document.getElementById(value)
            let parent = input.parentElement
            if(input.type == "text"){
                input.type = "password"
                parent.classList.add('hide')
            }else{
                input.type = "text"
                parent.classList.remove('hide')
            }
        },
        async reset() {
                console.log(this.registrationForm);
                let res = await this.resetPassword(this.info);
                console.log(res)
                document.getElementById('success').click();
                // if(res.data.message != 'Your password has been changed!'){
                    
                //     document.getElementById('success').click();
                // }
        },
        toLogIn(){
            
            document.getElementById('cancelSuccess').click();
            this.$router.push('/');
        }
    }
}
</script>
<style scoped>
        h1{
            margin-bottom: 1em;
            font-size: x-large;
        }
        .reset-form{
            display: flex;
            flex-direction: column;
           
        }
        .div{
            background-color: var(--background-color);
            padding: 2.7em;
            border-radius: 15px;
            width: 400px;
            margin: auto;
        }
        input{
            outline: none;
            border: none;
            border-radius: 20px;
            height: 50px;
            font-size: 16px;
            padding: 0 1em;
            margin: .5em 0;
            background-color: aliceblue;
        }
        button{
            background-color: rgb(253, 68, 12);
            color: white;
            border: 0;
            border-radius: 20px;
            height: 50px;
            margin-top: .5em;
            font-size: 16px;
            font-weight: bold;
        }
        form>div{
            width: 100%;
            position: relative;
        }
        input{
            width: 100%;
        }
        svg{
            width: 20px;
            height: 20px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 10px;
        }
        form .hide .normal{
            display: flex;
        }
        form .hide .notNormal{
            display: none;
        }
        .notNormal{
            display: flex;
        }
</style>
    
