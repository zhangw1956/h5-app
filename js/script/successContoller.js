/**
 * Created by dell on 2016/5/5.
 *  Ö§¸¶³É¹¦
 */


    successController = function(){

        var developOrders=function(data){
            $("#buyer_num").html(orders_num());
            $("#buyer_name").html(data.name+"("+data.card+")");
            $("#buyer_tell").html(data.tell);
            $("#buyer_address").html(data.address);
            function orders_num(){
                return Math.round(Math.random()*90000000000000+10000000000000);
            }
        };
        developOrders();
        scope.successReturn = function(){
            location.hash='#pay';
        }
    };