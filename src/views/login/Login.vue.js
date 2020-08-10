import { __decorate } from "tslib";
import { Component, Vue } from "vue-property-decorator";
import auth from "@/util/authentication/authentication";
import { Login } from "@/network/Login";
let LoginMain = class LoginMain extends Vue {
    constructor() {
        super(...arguments);
        this.is_checkbox = false; //协议按钮
        this.username = '13911111111'; //账号
        this.password = '246810'; //密码
    }
    //登陆
    login() {
        //  登陆验证
        if (auth({ password: this.password })) {
            const obj = {
                mobile: this.username,
                code: this.password
            };
            //  登陆请求 mobile:13911111111 #code:246810
            Login("/mp/v1_0/authorizations", JSON.stringify(obj)).then(res => {
                console.log(res.data);
                if (res.data.message === 'OK') {
                    this.$message.success('登陆成功');
                    // this.$store.state.user = res.data.data
                    // this.$router.push("/home")
                    window.sessionStorage.setItem("token", res.data.data.token);
                }
                else {
                    this.$message.error('登陆失败');
                }
            });
        }
        else {
            this.$message.error("密码长度为6-18位,不能包含特殊字符");
        }
    }
};
LoginMain = __decorate([
    Component
], LoginMain);
export default LoginMain;
//# sourceMappingURL=Login.vue.js.map