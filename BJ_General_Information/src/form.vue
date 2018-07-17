<template>
    <div class="login_BG">
        <div class="login_wp">
            <div style="margin-left: 5%;font-size: 0.8rem;">母校：<div style="text-indent: 2em;">您好！</div></div>
            <div class="text-p" style="margin-top: 5%;">
                <textarea rows="8" v-model="lots" style="width: 80%;font-size: 0.8rem;margin-left: 10%;" name="yjfk" maxlength="100" onkeydown="this.value=this.value.substring(0, 100)" onkeyup="this.value=this.value.substring(0, 100)"></textarea>
            </div>
            <div style="margin-left: 5%;font-size: 0.8rem;text-indent: 2em;">此致</div>
            <div style="margin-left: 5%;font-size: 0.8rem;">敬礼！<div style="display:  inline;float:  right;font-size: 0.6rem;">（不超过140字）</div></div>
            <div style="margin-right: 5%;font-size: 0.8rem;text-align:  right;">{{xm}}</div>
            <div style="width: 80%;margin-left: 10%;text-align: center;margin-top: 5%;">
                <label>
                    <span style="font-size: 0.8em;">工作单位：</span><input type="text" name="gsdz" v-model="company" style="padding: 5px;border-radius: 5px;width: 60%;"/>
                </label>
                <br>
                <label>
                    <span style="font-size: 0.8em;">联系电话：</span><input type="text" name="tel" v-model="tele" style="padding: 5px;border-radius: 5px;width: 60%;"/>
                </label>
                <br>
                <label>
                    <span style="font-size: 0.8em;">电子邮箱：</span><input type="text" name="email" v-model="emails" style="padding: 5px;border-radius: 5px;width: 60%;"/>
                </label>
            </div>
            <input type="submit" name="submit" value="返回再看一遍" @click="returnHome" class="btn" />
            <input type="submit" name="submit" value="寄出" @click="submit" class="btn" />
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                xm:'123',
                emails:'',
                tele:'',
                company:'',
                lots:''
            }
        },
        methods:{
            submit(){
                const vm = this;
                var doc = document;
                var formData = new FormData();
                formData.append('xh',this.xh);
                formData.append('zjhm',this.sfzh);
                formData.append('gsdz',vm.company);
                formData.append('email',vm.emails);
                formData.append('yjfk',vm.lots);
                formData.append('tel',vm.tele);
                console.log(formData);
                axios.post('/datatime/info/infoUpload',formData).then(function (response) {
                    if(response.status==200&&response.statusText=="OK"){
                        alert("成功寄出！");
//		  					doc.getElementById("xx").style.disabled = 'true';
                    }else{
                        alert("sorry,寄出失败，再发一份!");
                    }
                }).catch(function (error) {
                    console.log(error);
                    alert("网络错误，稍后再试");
                });
            },
            returnHome(){
                this.$router.push({
                    name:'one',
                });
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
    }
    }
    .btn{
        width: 40%;
        padding: 2%;
        margin-left: 6%;
        margin-top: 10%;
        background-color: #BC0019;
        color: white;
        font-size: .6em;
        border-radius: 8px;
        display: inline-block;
    }
</style>