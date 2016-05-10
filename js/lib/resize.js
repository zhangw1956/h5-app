/**
 * Created by zhangwei on 2016/2/22.
 */
function _pages(){
    var _dw = document.documentElement.clientWidth,
        _sc = _dw/320;
    document.body.style.zoom = _sc;
}
window.onresize = function(){
    _pages();
}
window.onload= function () {
    _pages();
}