/**
 * Created by dell on 2016/5/3.
 *      监控hash变化
 */


window.onhashchange=function(){
    var hash = window.location.hash;
    $(".section").hide();
    $(hash).fadeIn();
};
function pageChange(current,next)
{
    resetHash(current,next);
    recordHash(next);
}

function resetHash(current,next)
{
    $(current).fadeOut();
    $(next).show();
}

/*****hash改变,浏览器会自动生成一个历史记录******/
function recordHash(next)
{
    window.location.hash=next;
}
