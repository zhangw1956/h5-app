/**
 * Created by dell on 2016/5/5.
 *  Ö§¸¶³É¹¦
 */
var success = {};
    success.template = "template/success/success.html";
    success.controller = function(){
        success.developOrders();
    };
    success.developOrders=function(data){
        $("#buyer_num").html(orders_num());
        $("#buyer_name").html(data.name+"("+data.card+")");
        $("#buyer_tell").html(data.tell);
        $("#buyer_address").html(data.address);
        function orders_num(){
            return Math.round(Math.random()*90000000000000+10000000000000);
        }
    };