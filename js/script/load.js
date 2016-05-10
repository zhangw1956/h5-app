/**
 * Created by dell on 2016/5/3.
 *   生成加载页面特效
 */
var load={};
    load.partial = "template/load/load.html";
    load.controller = function(){

    };
var progress = function(w,callback){
    $("#progress_line").width(w);
    if(w == 100 ) {
        callback();
        $("#progress").fadeIn();
    }
}