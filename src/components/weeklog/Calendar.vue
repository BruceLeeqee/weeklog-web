<template>
    <div class="calendar-container">
        
        <div class="up">
            <div class="template">
            <div class="line">
                  <div class="content">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;先相信自己，
                      <br>
                      然后别人才会相信你
                  </div>
           </div>
           </div>
        </div>
        <div class="center">
             <img src="../../assets/imgs/center.jpg" alt="">
        </div>
        
        <div class="down">
            <ul>
                <li>
                    <div class="week">
                    <div class="title">
                          星期一
                    </div>
                    <div class="body">
                 
                    </div>
                    </div>
                </li>
                <li class="week">
                    <div class="title">
                          星期二
                    </div>
                    <div class="body">
                 
                    </div>
                </li>
                <li class="week">
                    <div class="title">
                          星期三
                    </div>
                    <div class="body">
                 
                    </div>
                </li>
                <li class="week">
                    <div class="title">
                          星期四
                    </div>
                    <div class="body">
                 
                    </div>
                </li>
                <li class="week">
                    <div class="title">
                          星期五
                    </div>
                    <div class="body">
                 
                    </div>
                </li>
                <li class="week">
                    <div class="title">
                          星期六
                    </div>
                    <div class="body">
                 
                    </div>
                </li>
                <li class="week">
                    <div class="title">
                          星期日
                    </div>
                    <div class="body">
                 
                    </div>
                </li>
            </ul>
        </div>
        <br>
        <br>
        <br>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>
    *{
        margin: 0px;
        padding: 0px;
    }
    .template{
        height: 250px;
        background: url("../../assets/imgs/flower.jpg") no-repeat;
        background-position: center 2px;
        padding : 30px;
        .line{
            border: 1px solid greenyellow;
            height: 190px;
            width: 270px;
            position: relative;
            .content{
                font-weight: bold;
                position: absolute;
                top:30%;
                margin-left: 50px;
            }
        }
    }
    .calendar-container{
        padding:15px;
    }
    img{
        width: 100%;
    }
    .up{
        height: 250px;
        padding:5px;
        border-left: 1px solid black;
        border-right: 1px solid black;
        border-top: 1px solid black;
        box-shadow: 10px 10px 5px #888888;
        background-color:white;
    }
    .center{
        background-color: white;
        box-shadow: 10px 10px 5px #888888;
        border-left: 1px solid black;
        border-right: 1px solid black;
    }
    .down{
        padding:5px;
        border-left: 1px solid black;
        border-right: 1px solid black;
        border-bottom: 1px solid black;
        height: 340px;
        box-shadow: 10px 10px 5px #888888;
        background-color:white;
    }
    li{ 
        list-style: none;
    }
    .week{
        width: 90px;
        height: 100px;
        float: left;
        margin: 5px;
        .title{
            background-color:green;
            width: 90px;
            height: 20%;
            text-align: center;
        }
        .body{
            height: 80%;
            background-color:pink;
        }
    }
</style>