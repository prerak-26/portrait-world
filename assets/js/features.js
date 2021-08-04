$(document).mousemove(function(e){
    console.log(e.pageX)
    $('.pointer').css({left:e.pageX,top:e.pageY})
})
