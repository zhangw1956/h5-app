/**
 * Created by dell on 2016/5/3.
 *      ���hash�仯
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

/*****hash�ı�,��������Զ�����һ����ʷ��¼******/
function recordHash(next)
{
    window.location.hash=next;
}
