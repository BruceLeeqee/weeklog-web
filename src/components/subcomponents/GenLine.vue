<template>
    <div class="container">
        <!-- <div class="tree-data">
            <span class="root">工作目标</span>
            <span class="first">进大厂</span>
            <div class="child">工资过万</div>
            <div class="child">成为行业领军</div>
        </div>
        <div class="tree-line">
            <table class="tab">
            
            </table>
        </div> -->
    </div>
</template>

<script>
import $ from 'jquery';
var num=0;

export default {
    data(){
        return{

        }
    },
    mounted(){//实例创建之后，data能用
        // alert(JSON.stringify(this.dat));
        // alert($(".root").width()+15);
        this.genTreeNode(this.dat);
        this.genTreeSpace(this.dat);
        this.genTreeStructure(this.dat);
        this.getTreeStructureSpace(this.dat);
        //通过判断第几组数据，来设置structure得top值
        // $(".root").css("background-color","red");
        
    },
    methods:{
        genTreeStructure(data){
            // alert(JSON.stringify(data))
            var $mainLine=$("<div>");
            $mainLine.addClass("tree-line");
            var $table=$("<div>");
            $table.addClass(".tab");
            $mainLine.append($table);
            if(data['children'].length==1){
                 var $tr=$("<tr>");
                 var $td=$("<td>");
                 $td.attr("rowspan","10");
                 $td.addClass("top");
                 $tr.append($td);
                 var $td2=$("<td>");
                 $td2.addClass("top");
                 $tr.append($td2);
                 $table.append($tr);
            }else if(data['children'].length==2){
                 var $tr=$("<tr>");
                 var $td=$("<td>");
                 $td.attr("rowspan","10");
                 $td.addClass("top");
                 $tr.append($td);
                 var $td2=$("<td>");
                 $td2.addClass("top");
                 $td2.addClass("left");
                 $td2.addClass("bottom");
                 $tr.append($td2);
                 $table.append($tr);
            }else{
                //  alert(JSON.stringify(tab));
                 var $tr=$("<tr>");
                 var $td=$("<td>");
                 $td.attr("rowspan","10");
                 $td.addClass("top");
                 $tr.append($td);
                 var $td2=$("<td>");
                 $td2.addClass("top");
                 $td2.addClass("left");
                 $td2.addClass("bottom");
                 $tr.append($td2);
                 $table.append($tr);
                 var num=data['children'].length-2;
                //  alert(num)
                 for(var i=0;i<num;i++){
                    var $tr=$("<tr>");
                    var $td=$("<td>");
                    $td.addClass("bottom");
                    $td.addClass("left");
                    $tr.append($td);
                    $table.append($tr);
                 }
            }
            // var $mainContainer=$(".main-container");
            // $mainLine.attr("style","top:"+(28+parseInt(num*100))+"px");
            var clssName=this.className;
            var $mainContainer=$("."+clssName);
            $mainContainer.append($mainLine);
        },
        getTreeStructureSpace(data){
            //获取所有tree-line,每个都递增100px
            //每超过3个，外加300
            var count=0;
            var page=0  //第几页
            $(".tree-line").each(function(){
                //绝对定位导致的计算膨胀问题
                // if(count>1){
                //     sum+=100;
                // }
                // if(count!=1 && count%3==1){ //从第二页开始，每次翻页就会加一页高度
                //     page++;
                //     sum+=165;
                // }
                var sum=28; //总高度
                count++;
                if(count%3==2){
                     sum=128;
                }else if(count%3==0){
                     sum=228;
                }
                $(this).css("top",sum+"px");
            })
        },
        genTreeNode(data){
            // alert(JSON.stringify(data))
            var clssName=this.className;
            var $mainContainer=$("."+clssName);
            var $main=$("<div>");
            $main.addClass("tree-data");
            var $result=$("<span>"+data['root']+"</span>");
            $result.addClass("root");
            $main.append($result);
            for(var i=0;i<data['children'].length;i++){
                if(i==0){
                    var $result= $("<span>"+data['children'][i]+"</span>");
                    $result.addClass("first")
                    $main.append($result);
                }else{
                     var $result= $("<div>"+data['children'][i]+"</div>");
                     $result.addClass("child")
                     $main.append($result);
                }
            }
            $mainContainer.append($main);
        },
        genTreeSpace(data){
            var $child=$(".child"); 
            var $first=$(".first");
            var $width1=(parseInt($(".root").width())+30)+"px";
            $child.attr("style","margin-left:"+$width1);
            var $width2=(30)+"px";
            $first.attr("style","margin-left:"+$width2);
        },
    },
    props:['dat','className'],
}
</script>

<style lang="scss">
    *{
        margin:0px;
        padding: 0px;
    }
    .tree-data{
        position: relative;
        width: 100%;
        height: 100px;
    }
    .tree-line{
        position: absolute;
        left: 70px;
    }
    td{
        width: 15px;
        height: 20px;
    }
    .top{
        border-top:2px solid black;
    }
    .left{
        border-left:2px solid black;
    }
    .right{
        border-right:2px solid black;
    }
    .bottom{
        border-bottom:2px solid black;
    }
</style>