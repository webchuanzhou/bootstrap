(()=>{
var timer=setInterval(function(){
    var end=new Date("2017/12/30 17:00:00");
    var now=new Date();
    var s=parseInt((end-now)/1000);
    if(s>0){
    var d=parseInt(s/3600/24);
    if(d<10){d="0"+d};
    var xs=parseInt(s/3600%24);
    if(xs<10){xs="0"+xs};
    var f=parseInt(s/60%60);
    if(f<10){f="0"+f};
     s=parseInt(s%60)
    if(s<10){s="0"+s};
    }else{
        clearInterval(timer)
        timer=null
    }
    $(".simply-day").html(d)
    $(".simply-hours").html(xs);
    $(".simply-minutes").html(f);
    $(".simply-secondes").html(s)
},1000)
function show(select){
    $(window).scroll(function () {
        var iTop = $(window).scrollTop();
        if(iTop>=$(select).offset().top-$(window).height()){
            $(select).addClass("animate-box")
            $(select).addClass("fadeInUp")
            $(select).addClass("animated-fast")
        }
    })
}
show(".fh5co-heading");
show(".couple-wrap");
show(".eventDownf1");
show(".display-t");
show(".topShow1");
show(".topShow2");
show(".topShow3");
show(".topShow4");
show(".topShow5");
show(".topShow6");
show(".topShow7");
show(".topShow8");
show(".topShow9");
function timerAdd(select,val) {
    $(window).scroll(function () {
        var iTop = $(window).scrollTop();
        var timer = null;
        var num = select.text();
        var louti=$("[data-toTime=tim]");
        var isclose=true;
        if (iTop >= louti.offset().top - (louti.height() / 2)) {
                if(isclose) {
                    isclose=false;
                    timer = setInterval(()=> {
                        if (num < val) {
                            num++;
                            select.text(num)
                        }else{
                                clearInterval(timer);
                                this.timer = null;
                        }
                    }, 1)
                }
        }
    })
}
timerAdd($("[data-setTime=tim1]"),1000)
timerAdd($("[data-setTime=tim2]"),500)
timerAdd($("[data-setTime=tim3]"),666)
timerAdd($("[data-setTime=tim4]"),888)
})()
//setInterval(function(){msg()},200)
//function msg(){
//    var ys=$(".ys");
//    if(!$(ys).is(":animated")){
//        $(ys).animate({"top":"-6px"},200).animate({"top":"-0px"},200)
//            .animate({"top":"-3px"},200).animate({"top":"-0px"},200)
//            .animate({"top":"-1px"},200).animate({"top":"-1px"},200)
//            .animate({"top":"-1px"},200).animate({"top":"-0px"},200);
//    }
//}
