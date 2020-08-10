<template>
    <div class="login-main">
        <el-input v-model="username" placeholder="请输入账号"></el-input>
        <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
        <el-checkbox label="是否同意改协定" name="type" v-model="is_checkbox"></el-checkbox>
        <el-button type="primary" @click="login" :disabled="!is_checkbox" :loading="is_loading">登陆</el-button>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator"
    import auth from "@/util/authentication/authentication";
    import {Login} from "@/network/Login";

    interface Obj {
        readonly mobile : string | number
        readonly code : string
    }

    @Component
    export default class LoginMain extends Vue {
        private is_checkbox : boolean = false //协议按钮
        private is_loading : boolean = false //加载
        private username : string | number = '13911111111'//账号
        private password : string = '246810' //密码
        //登陆
        protected login() {
            //  登陆验证
            if (auth({password: this.password})) {
                const obj : Obj = {
                    mobile: this.username,
                    code: this.password
                }
                //  登陆加载
                this.is_loading = true
                //  登陆请求 mobile:13911111111 #code:246810
                Login("/mp/v1_0/authorizations", JSON.stringify(obj)).then(res => {
                    // console.log(res.data)
                    this.is_loading = false
                    //  判断登陆是否成功
                    if (res.data.message === 'OK') {
                        this.$message.success('登陆成功')
                        // this.$store.state.user = res.data.data
                        // this.$router.push("/home")
                        window.sessionStorage.setItem("token", res.data.data.token)
                    } else {
                        this.$message.error('登陆失败')
                    }
                })
            } else {
                this.$message.error("密码长度为6-18位,不能包含特殊字符");
            }
        }
    }
</script>

<style scoped lang="less">
    .login-main {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;

        .el-input {
            width: 80%;
            margin-bottom: 10px;
        }

        .el-button {
            width: 80%;
        }

        .el-checkbox {
            display: block;
            width: 50%;
            margin-bottom: 10px;
        }
    }
</style>