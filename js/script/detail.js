/**
 * Created by dell on 2016/5/3.
 */

var detail = {};
    detail.template = "template/detail/detail.html";
    detail.controller = function(){
        appFrame.http("http://192.168.1.38/zero/php/pub.php","get","",callback);
        function callback(status,json){
            if(status == 200){
                var data = JSON.parse(json);
                appScope.goods = data;
                /*************** 开始渲染页面数据 ************/

                getData.getImage(data).getGoods(data).getPost(data);
                orders.addGoods(data);
            }
            else{
                console.log("请求失败");
            }

        }
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
    };

