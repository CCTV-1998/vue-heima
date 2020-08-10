<template>
    <div class="login">
        <div class="login-box">
            <div class="login-logo"></div>
            <LoginMain />
        </div>
    </div>
</template>

<script>
    import {Component,Vue} from "vue-property-decorator"
    import LoginMain from "./Login";
    @Component({
        components: {LoginMain}
    })
    export default class Login extends Vue{

    }
</script>

<style scoped lang="less">
    .login{
        color: #ccc;
        height: 100%;
        width: 100%;
        background: url("../../assets/img/login_bg.jpg") no-repeat center center;
        background-size: cover;
        .login-box{
            width: 28.125rem;
            height: 18.75rem;
            background-color: #fff;
            border-radius: 3px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            .login-logo{
                width: 6.25rem;
                height: 6.25rem;
                border-radius: 50%;
                background: url("../../assets/img/logo.png") no-repeat center center;
                background-size: 100%;
                border: 1px solid #ccc;
                position: absolute;
                background-color: #ccc;
                left: 50%;
                transform: translate(-50%,-50%);
            }
        }
    }
</style>