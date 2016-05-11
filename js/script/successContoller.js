/**
 * Created by dell on 2016/5/5.
 *  Ö§¸¶³É¹¦
 */


    successController = function(){

        $("#buyer_num").html(appScope.orders.num);
        $("#buyer_name").html(appScope.orders.name+"("+appScope.orders.card+")");
        $("#buyer_tell").html(appScope.orders.tell);
        $("#buyer_address").html(appScope.orders.address);

        scope.successReturn = function(){
            location.hash='#pay';
        }
    };