/**
 * Created by dell on 2016/5/4.
 *      商品详情，生成订单
 */


    ordersController = function(){
        var getData = {};
        getData.addOrder=function(data){
            $("#receive_i_c_name").html(data.name+"("+data.card+")");
            $("#receive_i_c_phone").html(data.tell);
            $("#receive_i_c_address").html(data.address+data.street+data.house);
        };
        getData.addGoods=function(data){
            $("#goods_img").attr("src",data.src);
            $("#orders_g_name").html(data.title);
            $("#orders_g_discrip").html(data.discript);
            $("#price").html(data.price.now);
            $("#post_way").html(data.post.way);
            $("#post_cost").html(data.post.cost);
            $("#post_time").html(data.post.time);
            $("#orders_total").html(data.price.now);
        };
        getData.addGoods(appScope.goods);
        getData.addOrder(appScope.address);
        scope.ordersBtn = function(){
            location.hash = '#pay';
        };
        scope.ordersReturn = function(){
            location.hash='#address';
        }
    };