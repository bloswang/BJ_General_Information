<template>
    <div class="fullpage-container" id="screen" >
        <div class="fullpage-wp" v-fullpage="opts">
            <div class="page-0 page">
                <audio id="audio"  src="./assets/audio/youth.mp3" style="opacity:0" preload="auto" controls loop hidden="true"/>
                <img src="./assets/images/logo.png"  class="part-0-logo"  alt="" >
                <img src="./assets/images/word.png" class="part-0-word" alt="">
                <button type="button" @click="Preview()">预览</button>
                <div class="page-0-h5">
                    <h5>北京林业大学信息心</h5>
                    <h5>北京林业大学校友会</h5>
                    <h5>建设银行北京市分行</h5>
                </div>
                <p><strong>2017</strong>年<strong>6</strong>月</p>

                <span class="page_mp3">
				<img src="./assets/images/btn_stop.png"  alt=""  v-show="playShow" @touchstart="stopPlay">
				<img src="./assets/images/btn_play.png"  alt=""  v-show="playHide" @touchstart="startPlay">
			</span>
            </div>

            <div class="page-1 page">
                <img :src="imgUrl" class="part-1" v-animate="{value: 'bounceInLeft',delay: 0}" alt="">
                <p class="text-p" v-animate="{value: 'bounceInLeft',delay: 600}">
                    还记得嘛，四年前，也是这样一个明媚的夏天，你满心欢喜的收到这样一张录取通知书，“ 北京林业大学 ”，每一个字都闪烁着你对这座绿色学府无限的憧憬。于是，你背着大包小包踏上了求学之路。从此，这里成了你四年的家。
                </p>
                <span class="page_mp3">
				<img src="./assets/images/btn_stop.png"  alt=""  v-show="playShow" @touchstart="stopPlay">
				<img src="./assets/images/btn_play.png"  alt=""  v-show="playHide" @touchstart="startPlay">
			</span>
            </div>
            <div class="page-2 page">
                <img  class="part-2" src="./assets/images/2-1.png" v-animate="{value: 'bounceInLeft', delay: 0}" alt="">
                <div class="part-2" v-animate="{value: 'zoomInDown', delay: 600}">
                    <img  src="./assets/images/2-2.png"  alt="">
                    <img  src="./assets/images/2-3.png"  alt="">
                </div>
                <p class="text-p" v-animate="{value: 'zoomInUp', delay: 1200}">北林，见证了你四年学习，生活，课余时间的点点滴滴。</p>
                <span class="page_mp3">
				<img src="./assets/images/btn_stop.png"  alt=""  v-show="playShow" @touchstart="stopPlay">
				<img src="./assets/images/btn_play.png"  alt=""  v-show="playHide" @touchstart="startPlay">
			</span>
            </div>
            <div class="page-3 page">
                <p  class="text-p" v-animate="{value: 'rotateIn', delay: 0}">新生军训的你是否也曾挥汗如雨，奋勇争先......</p>
                <img  class="part-3" src="./assets/images/junxun.png" v-animate="{value: 'pulse', delay: 600}"  alt="">
                <img class="part-3" :src="gradeImg" v-animate="{value: 'pulse', delay: 1200}"  alt="">
                <span class="page_mp3">
				<img src="./assets/images/btn_stop.png"  alt=""  v-show="playShow" @touchstart="stopPlay">
				<img src="./assets/images/btn_play.png"  alt=""  v-show="playHide" @touchstart="startPlay">
			</span>
            </div>
            <div class="page-15 page page-text rgba" v-if="isHonor">
                <p class="part-15">四年来，你获得
                    <span v-for='(item,index) in honor'>
	    			<i v-if="item.money==null">{{item.count}}次{{item.xmmc}}，</i>
	    			<i v-else>{{item.count}}次{{item.xmmc}}，获得{{item.money}}元。</i>
	    		</span>
                </p>
                <p class="part-15">荣誉是认可，背后有你数不尽的汗水，</p>
                <p class="part-15">荣誉是证明，让你坚信付出就会有回报！</p>
                <span class="page_mp3">
				<img src="./assets/images/btn_stop.png"  alt=""  v-show="playShow" @touchstart="stopPlay">
				<img src="./assets/images/btn_play.png"  alt=""  v-show="playHide" @touchstart="startPlay">
	    	</span>
            </div>
            <div class="page-4 page page-text rgba">
                <p class="part-4" v-animate="{value: 'bounceInLeft', delay: 0}">传说我们有北京高校第一好吃的食堂，</p>
                <p class="part-4" v-animate="{value: 'bounceInLeft', delay: 600}">自入校以来，你共计吃了<strong>{{eatNumber}}</strong>顿，</p>
                <p class="part-4" v-animate="{value: 'bounceInLeft', delay: 1200}">消费了 <strong>{{eatMoney}}</strong> 元，</p>
                <p class="part-4" v-animate="{value: 'bounceInLeft', delay: 1800}">打败了同级 <strong>{{percent}}%</strong> 学生，</p>
                <p class="part-4" v-animate="{value: 'bounceInLeft', delay: 2400}">{{eatText_1}}</p>
                <p class="part-4" v-animate="{value: 'bounceInLeft', delay: 3000}">{{eatText_2}}</p>
                <div class="part-4 eatCharts" v-animate="{value: 'bounceInLeft', delay: 3600}">

                </div>
                <span class="page_mp3">
				<img src="./assets/images/btn_stop.png"  alt=""  v-show="playShow" @touchstart="stopPlay">
				<img src="./assets/images/btn_play.png"  alt=""  v-show="playHide" @touchstart="startPlay">
			</span>
            </div>
            <div class="page-5 page page-text rgba">
                <p class="part-5" v-animate="{value: 'tada', delay: 0}">有情（缘）同校来吃饭，</p>
                <p class="part-5" v-animate="{value: 'tada', delay: 0}">通过大数据分析我们帮你找到经常和你在同一时间同</p>
                <p class="part-5" v-animate="{value: 'tada', delay: 0}">一食堂吃饭的ta（不是饭友就是有缘人呦）。</p>
                <p class="part-5" v-animate="{value: 'tada', delay: 0}">排行榜</p>
                <table class="part-5" v-animate="{value: 'tada', delay: 0}">
                    <tr>
                        <th>姓名</th>
                        <th>次数</th>
                    </tr>
                    <tr v-for="item in eatArr">
                        <td>{{item.username}}</td>
                        <td>{{item.meeting_count}}</td>
                    </tr>
                </table>
                <p class="part-5" v-animate="{value: 'tada', delay: 0}">有人说爱就是在一起，吃好多好多顿饭。</p>
                <p class="part-5" v-animate="{value: 'tada', delay: 0}">珍惜和你吃很多顿饭的人，珍惜和你爱的人吃的每顿饭。</p>
                <span class="page_mp3">
				<img src="./assets/images/btn_stop.png"  alt=""  v-show="playShow" @touchstart="stopPlay">
				<img src="./assets/images/btn_play.png"  alt=""  v-show="playHide" @touchstart="startPlay">
			</span>
                <p class="part-5" v-animate="{value: 'tada', delay: 0}">据不完全统计，您在北林大概丢失了5张卡</p>
            </div>
            <div class="page-6 page page-text">
                <p class="part-6" v-animate="{value: 'fadeIn', delay: 0}">自去年起你共去校医院 <strong>{{cureNumber}}</strong> 次，共花费<strong>{{cureMoney}}</strong>元，</p>
                <p class="part-6" v-animate="{value: 'fadeIn', delay: 0}">你去校医院的次数超过了另外<strong>{{curePercent}}%</strong>同级学生，</p>
                <p class="part-6" v-animate="{value: 'fadeIn', delay: 0}">健康寄语：{{cureText}}</p>
                <span class="page_mp3">
				<img src="./assets/images/btn_stop.png"  alt=""  v-show="playShow" @touchstart="stopPlay">
				<img src="./assets/images/btn_play.png"  alt=""  v-show="playHide" @touchstart="startPlay">
			</span>
            </div>
            <div class="page-7 page page-text rgba">
                <p>你是否也是在每个月初的0点等待新一个月的流量为你注满鸡血，满血复活，是否有过月中流量快用完了而抓狂，是否为月底超流量而感到沮丧。</p>
                <p>自入校以来，你的月平均上网时间为<strong>{{happyTotalTime}}</strong>小时，使用了<strong>{{happyNG}}G</strong>的流量，相当于看过<strong>{{happyN}}</strong>部高清电影，你使用的流量打败了<strong>{{happyPercent}}%</strong>毕业生。在毕业生中你的总流量与总花费排名如下：</p>
                <div class="ranking">
	    		<span>
	    			<h5>{{flowRanking}}</h5>
	    			<p>流量排名</p>
	    		</span>
                    <span>
	    			<h5>{{moneyRanking}}</h5>
	    			<p>费用排名</p>
	    		</span>
                </div>
                <p class="part-6" v-animate="{value: 'wobble', delay: 0}">{{happyText}}</p>
                <div class="happyEcharts">

                </div>
                <span class="page_mp3">
				<img src="./assets/images/btn_stop.png"  alt=""  v-show="playShow" @touchstart="stopPlay">
				<img src="./assets/images/btn_play.png"  alt=""  v-show="playHide" @touchstart="startPlay">
			</span>
            </div>
            <div class="page-10 page page-text rgba">
                <p class="part-10" v-animate="{value: 'fadeIn', delay: 0}">你是否也在下午的四点焦急等待过浴室开门，是否也在晚上9点50听到过浴室最后的铃声，四年，你在北林一共去了浴室<strong> {{bathNumber}}</strong> 次。在毕业生中你的淋浴花费与排名如下：</p>
                <div class="ranking" v-animate="{value: 'fadeIn', delay: 600}">
	    		<span>
	    			<h5>{{bathMoney}}</h5>
	    			<p>淋浴总花费</p>
	    		</span>
                    <span>
	    			<h5>{{bathRanking}}</h5>
	    			<p>费用排名</p>
	    		</span>
                </div>
                <div class="bathCharts" v-animate="{value: 'fadeIn', delay: 1200}">
	    		<span class="bathMoneyCharts">

	    		</span>
                    <span class="bathNumberCharts">

	    		</span>
                </div>
                <span class="page_mp3">
				<img src="./assets/images/btn_stop.png"  alt=""  v-show="playShow" @touchstart="stopPlay">
				<img src="./assets/images/btn_play.png"  alt=""  v-show="playHide" @touchstart="startPlay">
			</span>
            </div>
            <div class="page-14 page page-text rgba">
                <p>麻雀虽小五脏俱全，对学校超市你是否也有同感？ </p>
                <p>四年你共计在学校超市花费{{supermarket.total[0].money}}元，超过同级学生的{{supermarket.total[0].count}}%。</p>
                <div class="supermarketEcharts">
                    <span class="supermarketEchartsMoney"></span>
                    <span class="supermarketEchartsCount"></span>
                </div>
                <span class="page_mp3">
				<img src="./assets/images/btn_stop.png"  alt=""  v-show="playShow" @touchstart="stopPlay">
				<img src="./assets/images/btn_play.png"  alt=""  v-show="playHide" @touchstart="startPlay">
			</span>
            </div>
            <div class="page-11 page page-text" >
                <p>四年，走过了北林的四个春夏秋冬。</p>
                <div class="pagePubildImg">
	    		<span>
	    			<img src="./assets/images/spring.png"  alt="">
	    			<img src="./assets/images/summer.png"  alt="">
	    		</span>
                    <span>
	    			<img src="./assets/images/winter.png"  alt="">
	    		</span>
                    <img src="./assets/images/autumn.png" alt="">
                </div>
                <span class="page_mp3">
				<img src="./assets/images/btn_stop.png"  alt=""  v-show="playShow" @touchstart="stopPlay">
				<img src="./assets/images/btn_play.png"  alt=""  v-show="playHide" @touchstart="startPlay">
			</span>
            </div>
            <div class="page-8 page">
                <h5 class="page8-h5" v-animate="{value: 'bounceInLeft', delay: 0}">经历了四代一卡通的变化</h5>
                <p class="part-8" v-animate="{value: 'bounceInLeft', delay: 600}"><strong>2013</strong> 级学生卡</p>
                <img class="part-8" v-animate="{value: 'bounceInLeft', delay: 600}" src="./assets/images/2013.png" alt="">
                <img class="part-8 page-8-img" v-animate="{value: 'bounceInLeft', delay: 600}" src="./assets/images/ka-01.png"  alt="">
                <p  class="part-8" v-animate="{value: 'bounceInLeft', delay: 1200}"><strong>2014</strong> 级学生卡</p>
                <img class="part-8" v-animate="{value: 'bounceInLeft', delay: 1200}" src="./assets/images/2014.png" alt="">
                <img class="part-8 page-8-img" v-animate="{value: 'bounceInLeft', delay: 1200}" src="./assets/images/ka-02.png" alt="">
                <p  class="part-8" v-animate="{value: 'bounceInLeft', delay: 1800}"><strong>2015</strong> 级学生卡</p>
                <img class="part-8" v-animate="{value: 'bounceInLeft', delay: 1800}" src="./assets/images/2015.png" alt="">
                <img class="part-8 page-8-img" v-animate="{value: 'bounceInLeft', delay: 1800}" src="./assets/images/ka-03.png" alt="">
                <p class="part-8" v-animate="{value: 'bounceInLeft', delay: 2400}"><strong>2016</strong> 级学生卡</p>
                <img class="part-8" v-animate="{value: 'bounceInLeft', delay: 2400}" src="./assets/images/2016.png" alt="">
                <img class="part-8 page-8-img" v-animate="{value: 'bounceInLeft', delay: 2400}" src="./assets/images/ka-04.png" alt="">
                <span class="page_mp3">
				<img src="./assets/images/btn_stop.png"  alt=""  v-show="playShow" @touchstart="stopPlay">
				<img src="./assets/images/btn_play.png"  alt=""  v-show="playHide" @touchstart="startPlay">
			</span>
            </div>
            <div  class="page-9 page" >
                <p class="text-p">你也从那个稚嫩无知的少年变成了现在这个懂事知礼的青年。</p>
                <img :src="happyPhoto.p1"  alt="" v-show="isHappyShow">
                <img :src="happyPhoto.p2"  alt="" v-show="isHappyShow">
                <img :src="happyPhoto.p3" alt="" v-show="isHappyShow">
                <img :src="happyPhoto.p4" alt="" v-show="isHappyShow">
                <img src="./assets/images/studentNo.png"  alt="" v-show="isHappyHide" class="noDate-page9">
                <p v-show="isHappyHide" class="noDate-page9-text">还没有上传照片，请登录数字校园门户上传照片</p>
                <span class="page_mp3">
				<img src="./assets/images/btn_stop.png"  alt=""  v-show="playShow" @touchstart="stopPlay">
				<img src="./assets/images/btn_play.png"  alt=""  v-show="playHide" @touchstart="startPlay">
			</span>
            </div>
            <div class="page-12 page page-text">
                <p>四年，北林陪你走过了青春，你也陪北林从62岁走到了65岁，经历了北林标本馆到博物馆的变迁，享受到了北林的第一代新空调，体验了北林新建成的学研大厦……</p>
                <div class="pagePubildImg">
                    <img src="./assets/images/page-12-1.png"  alt="">
                    <span>
	    			<img src="./assets/images/page-12-2.png"  alt="">
	    			<img src="./assets/images/page-12-3.png"  alt="">
	    		</span>
                    <span>
	    			<img src="./assets/images/page-12-4.png"  alt="">
	    		</span>
                </div>
                <span class="page_mp3">
				<img src="./assets/images/btn_stop.png"  alt=""  v-show="playShow" @touchstart="stopPlay">
				<img src="./assets/images/btn_play.png"  alt=""  v-show="playHide" @touchstart="startPlay">
			 </span>
            </div>
            <div class="page-13 page page-text" >
                <p>又是这样一个绿树成荫，繁花盛放的夏天，满怀信心的你，对未来一定已是无限向往。 </p>
                <p>虽然剑未佩妥，出门已是江湖，但愿千帆过尽，归来仍是少年。</p>
                <p>林家大院永远是你的家，常回家看看。</p>
                <mt-button type="default" @click="toFrom">填写你对母校的寄语</mt-button>
                <span class="page_mp3">
				<img src="./assets/images/btn_stop.png"  alt=""  v-show="playShow" @touchstart="stopPlay">
				<img src="./assets/images/btn_play.png"  alt=""  v-show="playHide" @touchstart="startPlay">
			</span>
            </div>



        </div>
        <span class="start" v-show="lastPage">
				<b></b>
		</span>
    </div>
</template>
<script>
    import axios from 'axios';
    import echarts from 'echarts';
    import  html2canvas from 'html2canvas';
    import Canvas2Image from 'canvas2image';
    export default{
        data() {
            return {
                /*backgroundDiv: {
                    backgroundImage: 'url(' + require("./assets/images/food.jpg") + ')',
                },*/
                opts: {
                    start: 0,
                    dir: 'h',
                    duration: 500,
                    beforeChange: function (prev, next) {
                        const start = document.getElementsByClassName('start')[0];
                        const pageLangth = document.getElementsByClassName('page').length;
                        if(next== pageLangth -1){
                            start.style.display = "none";
                        }else{
                            start.style.display = "block";
                        }
                    },
                    afterChange: function (prev, next) {
                        console.log(prev)
                       let flag =  sessionStorage.getItem('testKey')
                        if(prev == '5'){
                            alert(flag)
                        }
                    },
                },
                lastPage:true,
                studentNumber:"",
                imgUrl:"",
                eatNumber:'',
                eatMoney:'',
                percent:'',
                eatText_1:"",
                eatText_2:"",
                eatArr:[],
                eatEvery:[],
                cureNumber:"",
                cureMoney:"",
                curePercent:"",
                cureText:"",
                happyTotalTime:"",
                happyDayTime:"",
                happyNG:"",
                happyN:"",
                happyPercent:"",
                happyEvery:[],
                flowRanking:"",
                moneyRanking:"",
                happyText:"",
                bathMoney:"",
                bathNumber:"",
                bathRanking:"",
                bathEveryMoney:[],
                bathEveryCount:[],
                happyPhoto:{},
                isHappyShow:true,
                isHappyHide:false,
                gradeImg:"",
                playShow: true,
                playHide: false,
                supermarket:{total:[{money:"",count:""}],money:[],number:[]},
                honor:[],
                honorIndex:"",
                isHonor:false,
                flage:'1'
            }
        },
        methods :{
            toFrom(){
                this.$router.push({
                    name:'form',
                });
            },
            //预览
            Preview(){
                const vm = this;
                $(".browse").fadeIn('400',function(){
                    vm.takeScreenshot();
                });
            },
            //食在北林(柱图)
            eatCharts(){
                var myChart = echarts.init(document.getElementsByClassName('eatCharts')[0]);
                myChart.setOption(
                    {
                        backgroundColor: 'rgba(0,0,0,.5)',
                        title: {
                            text: '食堂消费年度统计',
                            x: 'center',
                            textStyle:{
                                //fontSize:30,
                                color:"#fff",
                            }
                        },
                        color: ['#3398DB'],
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        label:{
                            normal:{
                                show: true,
                                position: 'top',
                                textStyle:{
                                    // fontSize:25,
                                    // color:'#fff',
                                }
                            }
                        },
                        xAxis : [
                            {
                                type : 'category',
                                data : ['大一', '大二', '大三', '大四'],
                                axisTick: {
                                    alignWithLabel: true
                                },
                                axisLabel:{
                                    textStyle:{
                                        // fontSize:25, // 让字体变大
                                        color:'#fff',
                                    }
                                },
                            }
                        ],
                        yAxis : [
                            {
                                type : 'value',
                                axisLabel:{
                                    textStyle:{
                                        // fontSize:25 // 让字体变大,
                                        color:'#fff',
                                    }
                                }
                            }
                        ],
                        series : [
                            {
                                name:'直接访问',
                                type:'bar',
                                barWidth: '60%',
                                data:this.eatEvery,
                            }
                        ]
                    }
                )
            },
            //浴在北林 --花费
            bathMoneyCharts(){
                var myChart = echarts.init(document.getElementsByClassName('bathMoneyCharts')[0]);

                myChart.setOption(
                    {
                        backgroundColor: 'rgba(0,0,0,.5)',
                        title: {
                            text: '淋浴花费',
                            x: 'center',
                            textStyle:{
                                //fontSize:30,
                                color:"#fff",
                            }
                        },
                        color: ['#3398DB'],
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        label:{
                            normal:{
                                show: true,
                                position: 'top',
                                textStyle:{
                                    // fontSize:25,
                                    // color:'#fff',
                                }
                            }
                        },
                        xAxis : [
                            {
                                type : 'category',
                                data : ['大一', '大二', '大三', '大四'],
                                axisTick: {
                                    alignWithLabel: true
                                },
                                axisLabel:{
                                    textStyle:{
                                        // fontSize:25, // 让字体变大
                                        color:'#fff',
                                    }
                                },

                            }
                        ],
                        yAxis : [
                            {
                                type : 'value',
                                axisLabel:{
                                    textStyle:{
                                        // fontSize:25 // 让字体变大,
                                        color:'#fff',
                                    }
                                }
                            }
                        ],
                        series : [
                            {
                                name:'直接访问',
                                type:'bar',
                                data:this.bathEveryMoney,
                                barWidth: '50%',
                            }
                        ]
                    }
                )
            },

            //浴在北林 --次数
            bathNumberCharts(){
                var myChart = echarts.init(document.getElementsByClassName('bathNumberCharts')[0]);
                myChart.setOption(
                    {
                        backgroundColor: 'rgba(0,0,0,.5)',
                        title: {
                            text: '淋浴次数',
                            x: 'center',
                            textStyle:{
                                //fontSize:30,
                                color:"#fff",
                            }
                        },
                        color: ['#3398DB'],
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        label:{
                            normal:{
                                show: true,
                                position: 'top',
                                textStyle:{
                                    // fontSize:25,
                                    // color:'#fff',
                                }
                            }
                        },
                        xAxis : [
                            {
                                type : 'category',
                                data : ['大一', '大二', '大三', '大四'],
                                axisTick: {
                                    alignWithLabel: true
                                },
                                axisLabel:{
                                    textStyle:{
                                        // fontSize:25, // 让字体变大
                                        color:'#fff',
                                    }
                                },

                            }
                        ],
                        yAxis : [
                            {
                                type : 'value',
                                axisLabel:{
                                    textStyle:{
                                        // fontSize:25 // 让字体变大,
                                        color:'#fff',
                                    }
                                }
                            }
                        ],
                        series : [
                            {
                                name:'直接访问',
                                type:'bar',
                                data:this.bathEveryCount,
                                barWidth: '50%',
                            }
                        ]
                    }
                )
            },

            //乐在北林
            happyEcharts(){
                var myChart = echarts.init(document.getElementsByClassName('happyEcharts')[0]);
                myChart.setOption(
                    {
                        backgroundColor: 'rgba(0,0,0,.5)',
                        title : {
                            text: '上网消费',
                            x:'center',
                            textStyle:{
                                //fontSize:30,
                                color:'#fff',
                            }
                        },

                        legend: {
                            orient: 'vertical',
                            left: 'left',
                            data: ['大一','大二','大三','大四'],
                            textStyle:{
                                //fontSize:25,
                                color:'#3398DB',
                            }
                        },
                        series : [
                            {
                                name: '访问来源',
                                type: 'pie',
                                radius : '55%',
                                center: ['50%', '60%'],
                                data:[
                                    {value:this.happyEvery[0], name:'大一'},
                                    {value:this.happyEvery[1], name:'大二'},
                                    {value:this.happyEvery[2], name:'大三'},
                                    {value:this.happyEvery[3], name:'大四'},
                                ],
                                label: {
                                    normal: {

                                        show: true,

                                        textStyle: {
                                            //fontSize: '25',
                                            fontWeight: 'normal'
                                        }
                                    },

                                },
                            }
                        ]
                    }
                )
            },

            //超市消费
            supermarketEchartsMoney(){
                var myChart = echarts.init(document.getElementsByClassName('supermarketEchartsMoney')[0]);
                myChart.setOption(
                    {
                        backgroundColor: 'rgba(0,0,0,.5)',
                        title: {
                            text: '超市消费统计',
                            x: 'center',
                            textStyle:{
                                //fontSize:30,
                                color:"#fff",
                            }
                        },
                        color: ['#3398DB'],
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        label:{
                            normal:{
                                show: true,
                                position: 'top',
                                textStyle:{
                                    // fontSize:25,
                                    // color:'#fff',
                                }
                            }
                        },
                        xAxis : [
                            {
                                type : 'category',
                                data : ['大一', '大二', '大三', '大四'],
                                axisTick: {
                                    alignWithLabel: true
                                },
                                axisLabel:{
                                    textStyle:{
                                        fontSize:8, // 让字体变大
                                        color:'#fff',
                                    }
                                },

                            }
                        ],
                        yAxis : [
                            {
                                type : 'value',
                                axisLabel:{
                                    textStyle:{
                                        // fontSize:25 // 让字体变大,
                                        color:'#fff',
                                    }
                                }
                            }
                        ],
                        series : [
                            {
                                name:'直接访问',
                                type:'bar',
                                barWidth: '50%',
                                //data:this.supermarket.money,
                                data:[15,15,16,18],
                            }
                        ]
                    }
                )
            },
            //超市次数
            supermarketEchartsCount(){
                var myChart = echarts.init(document.getElementsByClassName('supermarketEchartsCount')[0]);
                myChart.setOption(
                    {
                        backgroundColor: 'rgba(0,0,0,.5)',
                        title: {
                            text: '超市消费次数',
                            x: 'center',
                            textStyle:{
                                //fontSize:30,
                                color:"#fff",
                            }
                        },
                        color: ['#3398DB'],
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        label:{
                            normal:{
                                show: true,
                                position: 'top',
                                textStyle:{
                                    // fontSize:25,
                                    // color:'#fff',
                                }
                            }
                        },
                        xAxis : [
                            {
                                type : 'category',
                                data : ['大一', '大二', '大三', '大四'],
                                axisTick: {
                                    alignWithLabel: true
                                },
                                axisLabel:{
                                    textStyle:{
                                       fontSize:8, // 让字体变大
                                        color:'#fff',
                                    }
                                },

                            }
                        ],
                        yAxis : [
                            {
                                type : 'value',
                                axisLabel:{
                                    textStyle:{
                                        // fontSize:25 // 让字体变大,
                                        color:'#fff',
                                    }
                                }
                            }
                        ],
                        series : [
                            {
                                name:'直接访问',
                                type:'bar',
                                barWidth: '60%',
                                //data:this.supermarket.number,
                                data:[15,14,12,32],
                            }
                        ]
                    }
                )
            },
            //停止播放
            stopPlay(){
                this.playShow = false;
                this.playHide = true;
                const myAuto = document.getElementById('audio');
                myAuto.pause();
                myAuto.currentTime = 0;
            },
            //开始播放
            startPlay(){
                this.playShow = true;
                this.playHide = false;
                const myAuto = document.getElementById('audio');
                myAuto.play();
            },
            //屏幕截屏
            takeScreenshot(){
                html2canvas($("#hiddenPage"), {
                    height: $("#hiddenPage").outerHeight() + 20,
                    allowTaint: true,
                    taintTest: false,
                    onrendered: function (canvas) {
                        console.log(canvas);
                        let url = canvas.toDataURL();//图片地址
                        //以下代码为下载此图片功能
                        console.log(url);

                        $("#download").attr('href',url);
                        $("#download").attr('download','share.png');
                        console.log($("#download")[0]);
                    }
                });
            },
        },
        mounted(){
            //console.log(html2canvas);
            const myAuto = document.getElementById('audio');
            myAuto.play();
            const vm = this;
            //对应编号
            /*axios.get('/mis-web/queryXH').then(function (response) {
                if(response.status==200&&response.statusText=="OK"){
                    vm.studentNumber = response.data.xh;
                }else{
                    alert("sorry,访问有误!")
                }
          }).catch(function (error) {
            console.log(error);
          });*/
            function getPageAddressParameter() {
                var url = location.search;
                var result = new Object();
                if (url.indexOf("?") != -1) {
                    var str = url.substring(1);
                    var strs = str.split("&");
                    for (var i = 0; i < strs.length; i++) {
                        result[strs[i].split("=")[0]] = strs[i].split("=")[1];
                    }
                }
                return result;
            };
            vm.studentNumber = getPageAddressParameter().xh;

        },
        created() {
            this.flage = this.$route.params.name

        },
        watch:{
            studentNumber:function(val, oldVal){

                const vm = this;
                vm.supermarketEchartsMoney()
                vm.supermarketEchartsCount();
                //首页图片(01)
                axios.get('/mis-web/queryImg?xh='+ val).then(function (response) {
                    console.log(response)
                    if(response.status==200&&response.statusText=="OK"){
                        vm.imgUrl = "/mis-web/1/"+ response.data.img + ".jpg";
                    }else{
                        alert("sorry,访问有误!")
                    }
                }).catch(function (error) {
                    console.log(error);
                });
                //获取学生Name
                axios.get('/mis-web/queryName?xh='+ val).then(function (response) {
                    if(response.status==200&&response.statusText=="OK"){
                        let username = response.data.name[0].username;
                        document.setTitle = function(t) {
                            document.title = t;
                            var i = document.createElement('iframe');
                            i.src = '/mis-web/dist/images/bitbug_favicon.ico';
                            i.style.display = 'none';
                            i.onload = function() {
                                setTimeout(function(){
                                    i.remove();
                                }, 9)
                            }
                            document.body.appendChild(i);
                        }
                        document.setTitle("数说时光——"+username)
                        //document.title = "说书时光——"+username;
                    }else{
                        alert("sorry,访问有误!")
                    }
                }).catch(function (error) {
                    console.log(error);
                });
                //军训照片
                axios.get('/mis-web/queryJun?xh='+ val).then(function (response) {
                    //console.log(response);
                    if(response.status==200&&response.statusText=="OK"){
                        //vm.gradeImg = "http://localhost:8098/mis-web/img/"+response.data.listInfo[0].szbh +".JPG";
                        vm.gradeImg = "http://202.204.112.119:8080/mis-web/img/"+response.data.listInfo[0].szbh +".JPG";
                    }else{
                        alert("sorry,访问有误!")
                    }
                }).catch(function (error) {
                    console.log(error);
                });

                //食在北林
                axios.get('/mis-web/queryEat?xh='+ val).then(function (response) {
                    if(response.status==200&&response.statusText=="OK"){
                        vm.eatNumber = response.data.eat[0].eat_count;
                        vm.eatMoney = response.data.eat[0].eat_money;
                        vm.eatEvery = [];
                        vm.percent = parseInt(response.data.eat[0].eat_bfb);
                        if(vm.percent<=40){
                            vm.eatText_1 = "“入门级吃货”的你是不是很苗条？";
                            vm.eatText_2 = "在保持身材的同时也要注意饮食均衡呦！"
                        }else if(vm.percent>40&&vm.percent<=80){
                            vm.eatText_1 = "授予你“中级吃货”称号，";
                            vm.eatText_2 = "继续好好吃饭，好好生活！";
                        }else{
                            vm.eatText_1 = "必须授予你“高级吃货”称号！";
                            vm.eatText_2 = "吃饱吃好的同时，也要注意适量运动呦！"
                        }

                    }else{
                        alert("sorry,访问有误!")
                    }
                }).catch(function (error) {
                    console.log(error);
                });

                //食在北林--02
                axios.get('/mis-web/queryMeeting?xh='+ val).then(function (response) {
                    if(response.status==200&&response.statusText=="OK"){
                        vm.eatArr = response.data.meeting;
                        //	console.log(vm.eatArr);
                    }else{
                        alert("sorry,访问有误!")
                    }
                }).catch(function (error) {
                    console.log(error);
                });
                //食在北林--03
                axios.get('/mis-web/queryEatYear?xh='+ val).then(function (response) {
                    if(response.status==200&&response.statusText=="OK"){
                        vm.eatEvery = [];
                        const bathEvery = response.data.listInfo;
                        //console.log(bathEvery);
                        for (let i = 0; i < bathEvery.length; i++) {
                            vm.eatEvery.push(bathEvery[i].money);
                        }
                        vm.eatCharts();

                    }else{
                        alert("sorry,访问有误!")
                    }
                }).catch(function (error) {
                    console.log(error);
                });

                //医在北林
                axios.get('/mis-web/queryHostpital?xh='+ val).then(function (response) {
                    //console.log(response);
                    if(response.status==200&&response.statusText=="OK"){
                        vm.cureNumber = response.data.hostpital[0].hostpital_count;
                        vm.cureMoney = response.data.hostpital[0].hostpital_money;
                        vm.curePercent = parseInt(response.data.hostpital[0].hostpital_bfb);
                        if(vm.curePercent<=30){
                            vm.cureText = "健康达人”非你莫属~ 继续保持活力满满！";
                        }else if(vm.curePercent>30&&vm.curePercent<=80){
                            vm.cureText = "偶尔的不舒适也要多加注意呦~不要懒，坚持锻炼身体！";
                        }else{
                            vm.cureText = "是不是很久没有运动啦？身体都抗议了！不要总忙着学习，要适当运动哟~";
                        }
                    }else{
                        alert("sorry,访问有误!")
                    }
                }).catch(function (error) {
                    console.log(error);
                });

                //乐在北林
                axios.get('/mis-web/queryLine?xh='+ val).then(function (response) {
                    //console.log(response);
                    if(response.status==200&&response.statusText=="OK"){
                        vm.happyTotalTime = parseInt(response.data.line[0].line_time);
                        vm.happyNG = parseInt(response.data.line[0].line_total);
                        vm.happyN = parseInt(response.data.line[0].line_movice);
                        vm.happyPercent = parseInt(response.data.line[0].line_bfb);
                        vm.flowRanking = parseInt(response.data.line[0].line_ll);
                        vm.moneyRanking = parseInt(response.data.line[0].line_wf);
                        vm.happyEvery = [];
                        vm.happyEvery.push(parseInt(response.data.line[0].d1money));
                        vm.happyEvery.push(parseInt(response.data.line[0].d2money));
                        vm.happyEvery.push(parseInt(response.data.line[0].d3money));
                        vm.happyEvery.push(parseInt(response.data.line[0].d4money));
                        //console.log(vm.happyEvery);
                        if(vm.happyPercent<=40){
                            vm.happyText = "你是好孩纸一枚，你从不沉迷于网络，可能有更丰富的校园生活!";
                        }else if(vm.happyPercent>40&&vm.happyPercent<=80){
                            vm.happyText = "授予你“用网能人”称号！";
                        }else{
                            vm.happyText = "你是一位“用网达人”！网络世界很精彩，外面的世界更精彩，要学会更多的与周围同学、朋友交流哦!";
                        }
                        vm.happyEcharts()
                    }else{
                        alert("sorry,访问有误!")
                    }
                }).catch(function (error) {
                    console.log(error);
                });
                //乐在北林   图片

                axios.get('/mis-web/queryPic?xh='+ val).then(function (response) {
                    //	console.log(response);
                    if(response.status==200&&response.statusText=="OK"){
                        if(response.data.listInfo.length==0){
                            vm.isHappyShow = false;
                            vm.isHappyHide = true;
                        }else{
                            vm.isHappyShow = true;
                            vm.isHappyHide = false;
                            vm.happyPhoto.p1 = "http://i.bjfu.edu.cn/dcp/"+response.data.listInfo[0].year1;
                            vm.happyPhoto.p2 = "http://i.bjfu.edu.cn/dcp/"+response.data.listInfo[0].year2;
                            vm.happyPhoto.p3 = "http://i.bjfu.edu.cn/dcp/"+response.data.listInfo[0].year3;
                            vm.happyPhoto.p4 = "http://i.bjfu.edu.cn/dcp/"+response.data.listInfo[0].year4;
                        }
                    }else{
                        alert("sorry,访问有误!")
                    }
                }).catch(function (error) {
                    console.log(error);
                });

                //浴在北林 -01
                axios.get('/mis-web/queryShower?xh='+ val).then(function (response) {
                    if(response.status==200&&response.statusText=="OK"){
                        vm.bathMoney = parseInt(response.data.shower[0].yu_money);
                        vm.bathNumber = response.data.shower[0].yu_count;
                        vm.bathRanking =  response.data.shower[0].yu_pm;
                    }else{
                        alert("sorry,访问有误!")
                    }
                }).catch(function (error) {
                    console.log(error);
                });
                //浴在北林 -02
                axios.get('/mis-web/queryYuYear?xh='+ val).then(function (response) {
                    //console.log(response);
                    if(response.status==200&&response.statusText=="OK"){
                        vm.bathEveryMoney = [];
                        vm.bathEveryCount = [];
                        const bathEvery = response.data.listInfo;
                        //console.log(bathEvery);
                        for (let i = 0; i < bathEvery.length; i++) {
                            vm.bathEveryMoney.push(bathEvery[i].money);
                            vm.bathEveryCount.push(bathEvery[i].count);
                        }
                        vm.bathMoneyCharts();
                        vm.bathNumberCharts();
                    }else{
                        alert("sorry,访问有误!")
                    }
                }).catch(function (error) {
                    console.log(error);
                });

                //超市接口
                axios.get('/mis-web/queryMarket?xh='+ val).then(function (response) {
                    //console.log(response);
                    if(response.status==200&&response.statusText=="OK"){
                        vm.supermarket.total[0].money = response.data.total[0].money;
                        vm.supermarket.total[0].count = response.data.total[0].count;
                        vm.supermarket.money = [],vm.supermarket.number = [];
                        for (let i = 0; i <  response.data.market.length; i++) {
                            vm.supermarket.money.push(response.data.market[i].money)
                        }
                        for (let i = 0; i < response.data.market.length; i++) {
                            vm.supermarket.number.push(response.data.market[i].count)
                        }
                        //console.log(vm.supermarket);
                        vm.supermarketEchartsMoney();
                        vm.supermarketEchartsCount();
                    }else{
                        alert("sorry,访问有误!")
                    }
                }).catch(function (error) {
                    console.log(error);
                });

                //荣誉
                axios.get('/mis-web/queryRy?xh='+ val).then(function (response) {
                    if(response.status==200&&response.statusText=="OK"){
                        vm.honor = response.data.listInfo;
                        console.log(vm.honor);
                        if(response.data.listInfo!=null){
                            vm.isHonor = true;

                            vm.honorIndex = response.data.listInfo.length -1;
                        }else{
                            vm.isHonor = false;
                        }
                    }else{
                        alert("sorry,访问有误!")
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>
<style lang="scss">
    .start {
        left: initial;
        top: 50%;
        right: 10px;
        -webkit-transform: rotate(90deg);
    }
    .browse{
        height: 100%;
        width: 100%;
        overflow: auto;
        display: none;
        position: absolute;
        left: 0;
        top: 0;
    }
    #hiddenPage{
        width: 100%;
        background-color: rgba(0,0,0,.5);
        >div{
            width: 100%;
            height: 667px;
            position: relative;
        }
    }
    #hiddenPage>.hidden-0{
        background: url("./assets/images/fengmian.jpg");
        -webkit-background-size: 100% 100%;
        -o-background-size: 100% 100%;
        background-size: 100% 100%;
        >p{
            font-size: 0.6rem;
            color: #FFF;
            position: absolute;
            bottom: 0.6rem;
            left: 50%;
            margin-left: -1.6rem;
        }
    }
    #hiddenPage>.hidden-1{
        background: url("./assets/images/home.png");
        -webkit-background-size: 100% 100%;
        -o-background-size: 100% 100%;
        background-size: 100% 100%;
        padding: 1rem;
        >img{
            display: block;
            width: 75%;
            margin: 0 auto;
        }
    }
    .hidden-8,.hidden-2,.hidden-9,.hidden-3,.hidden-11,.hidden-12,.hidden-14,.hidden-15{
        padding:1.4rem 0.6rem;
        background: url("./assets/images/lindaBG.png");
        -webkit-background-size: 100% 100%;
        -o-background-size: 100% 100%;
        background-size: 100% 100%;
    }
    .hidden-4,.hidden-5{
        background: url("./assets/images/lindaBG.png");
        -webkit-background-size: 100% 100%;
        -o-background-size: 100% 100%;
        background-size: 100% 100%;
    }
    #hiddenPage>.hidden-2{
        >img{
            display: block;
            width: 100%;
            margin-bottom: 1%;
        }
        >div{
            >img{
                width: 49%;
            }
        }
    }
</style>
<style lang="scss" scope>
    /* /mis-web/dist/images/ */
    .page_mp3{
        position: absolute;
        width: 1rem;
        top: 0.3rem;
        right: 0.4rem;
        img{
            width: 100% !important;
        }
    }
    .happyEcharts{
        height: 30%;
    }
    .eatCharts{
        height: 45%;
    }
    .bathCharts,.supermarketEcharts{
        height: 40%;
        font-size: 0;
        >span{
            display: inline-block;
            width: 50%;
            height: 100%;
        }
    }
    .supermarketEcharts{
        height: 45%;
    }
    .pagePubildImg{
        font-size: 0;
        width: 90%;
        margin: 0 auto;
        >span{
            display: inline-block;
            width: 50%;
            vertical-align: top;
            //margin-right: 1%;
            >img:nth-child(1){
                margin-bottom: 3%;
            }
        }
        img{
            display: block;
            margin: 1% auto;
            width: 96%;
        }
    }

    .ranking{
        font-size: 0;
        >span{
            display: inline-block;
            width: 50%;
            font-size: 0.6rem;
            text-align: center;
            background-color: rgba(0,0,0,.5);
            >h5{
                font-weight: 600;
                font-size: 0.8rem;
                color: #33A7FF;
            }
            >p{
                color: #FFF;
                margin-bottom: 0.6rem;
            }
        }
    }
    .page-container {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    .page-0{
        background: url("./assets/images/fengmian.jpg");
        -webkit-background-size: 100% 100%;
        -o-background-size: 100% 100%;
        background-size: 100% 100%;
        position: relative;
    }
    .page-0>img:first-child{
        width: 2.7rem;
    }
    .page-0>img:nth-child(2){
        margin-bottom: 1.1rem;
        margin-top: 1.6rem;
    }
    .page-0-h5{
        position: absolute;
        bottom: 11%;
        left: 50%;
        margin-left: -3.9rem;
    }
    .page-0-h5>h5{
        line-height: 1.3rem;
        font-size: 0.8rem;
        color: #fff;
        font-weight: 600;
        text-align: center;
    }
    .page-0>p{
        font-size: 0.6rem;
        color: #FFF;
        position: absolute;
        bottom: 0.6rem;
        left: 50%;
        margin-left: -1.6rem;
    }
    .part-0-logo{
        display: block;
        margin: 0.7rem auto;
    }
    .part-0-word{
        display: block;
        margin: 2.2rem auto;
        width: 1.6rem;
    }
    .page-1{
        background: url("./assets/images/home.png");
        -webkit-background-size: 100% 100%;
        -o-background-size: 100% 100%;
        background-size: 100% 100%;
        position: relative;
        padding: 1rem;
        >img{
            display: block;
            width: 75%;
            margin: 0 auto;
        }
    }
    .page-2{
        >img{
            display: block;
            width: 100%;
            margin-bottom: 1%;
        }
        >div{
            >img{
                width: 49%;
            }
        }
    }
    .page-3,.hidden-3{
        padding: 0.8rem;
        >img{
            width: 100%;
            margin: 0.4rem 0;
        }
    }
    .page-8,.page-2,.page-9,.page-3,.page-11,.page-12,.page-14,.page-15{
        padding:1.4rem 0.6rem;
        background: url("./assets/images/lindaBG.png");
        -webkit-background-size: 100% 100%;
        -o-background-size: 100% 100%;
        background-size: 100% 100%;
    }
    .page-15{
        >p{
            >span{
                >i{
                    color: #FFF;
                }
            }
        }
    }
    .page-4,.page-5{
        background: url("./assets/images/lindaBG.png");
        -webkit-background-size: 100% 100%;
        -o-background-size: 100% 100%;
        background-size: 100% 100%;
    }
    .page-4,.page-5,.page-7,.page-10{
        >p:nth-child(1){
            margin-top: 2rem;
        }
    }
    .page-text>p{
        font-size: 0.6rem;
        line-height: 1.2rem;
        color: #FFF;
        >strong{
            color:#33cfff;
        }
    }
    .page-6,.hidden-6{
        padding:2rem 0.6rem 0.6rem 0.6rem;
        background: url("./assets/images/lindaBG.png");
        -webkit-background-size: 100% 100%;
        -o-background-size: 100% 100%;
        background-size: 100% 100%;
        >p{
            color: #fff;
            background-color: rgba(0,0,0,.5);
            padding: 0.1rem 0.6rem;
        }
    }
    .rgba>p{
        background-color: rgba(0,0,0,.5);
        padding: 0 0.8rem;
        &:first-child{
            padding-top: 30px;
        }
        &:last-child{
            padding-bottom: 30px;
        }
    }
    .page-text>table{
        display: block;
        font-size: 0.6rem;
        padding: 0 0.8rem;
        background-color: rgba(0,0,0,.5);
        th{
            color: #34c6f2;
        }
        td{
            color: #FFF;
            width: 2.5rem;
            text-align: center;
            font-size: 0.5rem;
        }
    }

    .text-p{
        font-size: 0.6rem;
        color: #FFF;
        //text-indent: 2em;
        line-height: 1.2rem;
    }
    .page8-h5{
        //margin-bottom: 0.6rem;
        font-size: 0.6rem;
        color: #FFF;
    }
    .page-7,.hidden-7{
        background: url("./assets/images/lindaBG.png");
        -webkit-background-size: 100% 100%;
        -o-background-size: 100% 100%;
        background-size: 100% 100%;
    }

    .page-8,.hidden-8{
        padding:0.6rem;
        >p{
            color: #FFF;
            font-size: 0.5rem;
        }
        >img{
            width: 45%;
        }
        .page-8-img{
            margin-left: 6%;
        }
    }
    .page-9,.hidden-9{
        img{
            width: 36%;
            vertical-align: middle;
            &:nth-child(2){
                transform:rotate(10deg);
            }
            &:nth-child(3){
                transform:rotate(-15deg);
                margin-left: 15%;
            }
            &:nth-child(4){
                transform:rotate(-15deg);
            }
            &:nth-child(5){
                transform:rotate(15deg);
                margin-left: 15%;
            }
        }
        .noDate-page9{
            display: block;
            margin: 1rem auto;
            width: 45%;
        }
        .noDate-page9-text{
            font-size: 0.6rem;
            color: #FFF;
            text-align: center;
        }
        >p{
            margin: 0 auto;
        }
    }
    .page-10,.hidden-10{
        background: url("./assets/images/lindaBG.png");
        -webkit-background-size: 100% 100%;
        -o-background-size: 100% 100%;
        background-size: 100% 100%;
    }
    .page-11>p,.page-12>p,.hidden-11>p,.hidden-12>p{
        width: 90%;
        margin: 0 auto;
    }
    .page-13,.hidden-13{
        background: url("./assets/images/page-13.jpg");
        -webkit-background-size: 100% 100%;
        -o-background-size: 100% 100%;
        background-size: 100% 100%;
        padding:1.4rem 0.6rem;
    }
</style>