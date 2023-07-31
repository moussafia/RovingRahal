<template>
    <div>
        <SignIn v-if="page == 'sign-in'" :signin_info="signin_info" @createNew="createNew($event);"></SignIn>
        <SignUp v-else @toLogIn="toLogIn($event)" :signup_info="signup_info" ></SignUp>
    </div>
</template>
<script>
import SignIn from '../components/sign/SignIn.vue';
import SignUp from '../components/sign/SignUp.vue';
export default {
    components:{
        SignIn,
        SignUp,
    },
    data(){
        return {
            page :'sign-in',
            signin_info:{
                email : '',
                password : '',
            },
            signup_info:{
                username:'',
                email : '',
                password : '',
                password_confirmation:'',
            },
        }
    },
    methods:{
        createNew(){
            this.page = 'sign-up'
        },
        toLogIn(){
            this.page = 'sign-in'
        }
    },
    
}
</script>
<style scoped>
    
</style>