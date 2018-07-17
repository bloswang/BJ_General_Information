<template>
    <div class="login_BG">
        <div class="login_wp">
            <p>
                <img src="./assets/images/logo.png" alt="" >
                数说时光123
            </p>
            <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
            <mt-button type="primary"  @click="login">登陆</mt-button>
            <router-link to=""> </router-link>
        </div>
    </div>
</template>

<script>
    import { MessageBox } from 'mint-ui';
    export default {
        data(){
            return{
                username:'',
                password:'',
                test:'王正阳'

            }
        },
        methods:{
            login(){
                let vm = this
                if(this.username == 'zhengyang'&& this.password=='123' ){
                    this.$router.push({
                        name:'one',
                        params:{
                            name:this.test,
                            code:10011
                        }
                    });
                    sessionStorage.setItem('testKey',this.test)

                }else if(this.username == ''|| this.password=='' ){
                    MessageBox( '提示','账号或密码不能为空');
                }else{
                    MessageBox( '提示','账号或密码输入有误，请重新输入');
                }

            }
        }
    }
</script>

<style lang="scss">
    html,body{
        width:100%;
        height:100%;
    }
    .login_BG{
        padding-top: 5rem;
        height:100%;
        background: url(./assets/images/fengmian.jpg);
        background-size: 100% 100%;
        position: relative;
        .login_wp{
            p{
                color: white;
                text-align: center;
                margin-bottom: 2rem;
                font-size: 2rem;
                img{
                    vertical-align: middle;
                }
            }
            button{
                width: 100%;
                margin-top: 2rem;
            }
        }
    }

</style>