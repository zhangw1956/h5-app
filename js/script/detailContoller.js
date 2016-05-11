/**
 * Created by dell on 2016/5/3.
 */

    detailController = function(){

        var getData={};
        getData.getImage = function(data){
            $("#detail_goods_img").attr("src",data.src);
            return this;
        };
        getData.getGoods = function(data){
            $("#now_price").html(data.price.now);
            $("#past_price").html(data.price.price);
            $("#detail_goods_i_middle").html(data.title);
            return this;
        };
        getData.getPost = function(data){
            $("#Logistical_price").html(data.post.cost);
            $("#Logistical_seller").html(data.post.address);
            $("#Logistical_return").html(data.isReturn);
            return this;
        };
        scope.detailBtn = function(){
            location.hash='#address';
        };

        /*************** 开始渲染页面数据 ************/

        getData.getImage(appScope.goods).getGoods(appScope.goods).getPost(appScope.goods);


    };

