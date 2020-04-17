<template>
    <div class="week-container">
        <h3 class="top">周志复盘</h3>
        <div class="week-title">
            <ul>
                <li>起床时间:6:00</li>
                <li>睡觉时间:11:00</li>
                <li>今日打分:</li>
            </ul>
        </div>
        
        <div class="week-body">
        <div class="main-container1">
            <h4>2020年度目标及关键点(必填项):</h4>
            <div v-for="(item,index) in dats0" :key="index" class="content">
                <GenLine :dat="item" :className="'main-container1'"></GenLine>
            </div>
        </div>
        <div class="main-container2">
            <h4>第一周最重要任务(必填项):</h4>
            <div v-for="(item,index) in dats1" :key="index" class="content">
                <GenLine :dat="item" :className="'main-container2'"></GenLine>
            </div>
        </div>
        </div>
        <br>
        <br>
        <div class="day-log">
            <div class="main-container3">
                <h4>今日三只青蛙/番茄钟:</h4>
                <mt-field label="番茄01" placeholder="请输入今日任务1" v-model="inputData.tomato1"></mt-field>
                <mt-field label="番茄02" placeholder="请输入今日任务2" v-model="inputData.tomato2"></mt-field>
                <mt-field label="番茄03" placeholder="请输入今日任务3" v-model="inputData.tomato3"></mt-field>
            </div>
            <div class="main-container4">
                <h4>昨日反思(必填项):</h4>
                <mt-field label="反思01" placeholder="今日反思第一条" v-model="inputData.rethink1"></mt-field>
                <mt-field label="反思02" placeholder="今日反思第二条" v-model="inputData.rethink2"></mt-field>
                <mt-field label="反思03" placeholder="今日反思第三条" v-model="inputData.rethink3"></mt-field>
            </div>
            <div class="main-container5">
                    <h4>团队:</h4>
                <mt-field label="内容01" placeholder="主动与谁进行了交流" v-model="inputData.content1"></mt-field>
                <mt-field label="内容02" placeholder="和哪个朋友打了电话" v-model="inputData.content2"></mt-field>
                <mt-field label="内容03" placeholder="关心xxx工作问题" v-model="inputData.content3"></mt-field>
            </div>
            <div class="main-container6">
                <h4>财务:</h4>
                <mt-field label="昨天收入" placeholder="截至昨天收入了多少" v-model="inputData.income"></mt-field>
                <mt-field label="昨天结出" placeholder="截至昨天花费了多少" v-model="inputData.outcome"></mt-field>
                <mt-field label="昨天结余" placeholder="这个月结余多少" v-model="inputData.overplus"></mt-field>
            </div>
            <div class="main-container7">
                <h4>开卷有益:</h4>
                <mt-field label="看书" placeholder="今天看的书" v-model="inputData.books"></mt-field>
                <mt-field label="学习技术" placeholder="今天学的技术" v-model="inputData.technologe"></mt-field>
                <mt-field label="听网课" placeholder="今天听的网课" v-model="inputData.course"></mt-field>
            </div>
            </div>
            <br>
            <br>
            <br>
        <div class="week-footer">
            <h3 class="title">好习惯打卡</h3>
            <mt-checklist
               v-model="value"
               class="card"
               :options="['早睡', '早起', '运动','健康饮食','复盘','吃水果','演讲','看书超过2小时','csdn知识分享一篇','录制视频，分享到社群和自媒体']">
            </mt-checklist>
            <mt-button type="primary" size="large">提交</mt-button>
        </div>
        <br>
        <br>
        <br>
    </div>
</template>

<script>
import GenLine from '../subcomponents/GenLine.vue';

export default {
    data(){
        return{
            inputData:{
                tomato1:"",tomato2:"",tomato3:"",
                rethink1:"",rethink2:"",rethink3:"",
                content1:"",content2:"",content3:"",
                income:"",outcome:"",overplus:"",
                course:"",books:"",technologe:""
            },
            value:[],
            dats0:[
                {root:'工作目标',children:['进大厂','工资过万','成为行业领军']},
                {root:'学习目标',children:['都50本书','熟练使用java语言','有自己成熟的项目']},
                {root:'生活目标',children:['财务规划','减肥30斤','养成早起的好习惯','每日吃水果']},
                ],
            dats1:[
                {root:'周任务01',children:['进大厂','工资过万','成为行业领军']},
                {root:'周任务02',children:['都50本书','熟练使用java语言','有自己成熟的项目']},
                {root:'周任务03',children:['财务规划','减肥30斤','养成早起的好习惯','每日吃水果']},
                ],
        }
    },
    methods:{

    },
    components:{
        GenLine
    }
}
</script>

<style lang="scss" scoped>
    *{
        margin: 0px;
        padding: 0px;
    }
    .week-container{
        padding: 5px;
        font-style: 16px;
        .top{
            text-align: center;
            font-size: 25px;
            font-family: "微软雅黑";
        }
    }
    .week-title{
        li{
           list-style: none;
           margin: 10px;
           line-height: 16px;
        }
        font-size: 16px;
    }
    .week-body{
        display: inline-block;
        padding: 5px;
    }
    .title{
        text-align: center;
    }
    .card{
        font-size: 16px;
    }
    .main-container1,.main-container2{
        height: 300px;
        position: relative;
    }
    .main-container3,.main-container4,.main-container5,.main-container6,.main-container7,.main-container8{
        height: 200;
    }
</style>