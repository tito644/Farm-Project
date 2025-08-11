


$(document).ready(function(){
    $(".loading").fadeOut(500, function(){
        $("body").css("overflow","auto")
    })
})
// intro
$(".test").click(function(){
    $(".test").addClass("test2")
})
$(".report").click(function(){
    $(".cs-part").slideToggle(500)
    $(".is-part").slideToggle(500)
})
//the header
$(document).ready(function(){
    $(".loading").fadeOut(10000, function(){
        $("body").css("overflow","auto")
    })
})
$(window).scroll(function(){
    let nav_top=$(window).scrollTop()
    if(nav_top>80)
    {
        $("header").addClass("header_2")
    }
    else{
        $("header").removeClass("header_2")
    }
}) 
    // the Up button
$(window).scroll(function(){
    let scroll_top=$(window).scrollTop()
    if(scroll_top>200)
    {
        $("#up").fadeIn(500)
    }
    else{
        $("#up").fadeOut(500)
    }
})
$("#up").click(function(){
    $(window).scrollTop(0)
})