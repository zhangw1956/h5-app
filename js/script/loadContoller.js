/**
 * Created by dell on 2016/5/3.
 *   ���ɼ���ҳ����Ч
 */

    loadController = function(){
        var progress = function(w,callback){
            $("#progress_line").width(w);
            if(w == 100 ) {
                callback();
                $("#progress").fadeIn();
            }
        }
    };
