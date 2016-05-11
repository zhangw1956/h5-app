/**
 * Created by dell on 2016/5/9.
 */

/**
 *   ****************  定义路由机制  ******************
 */
var detail = {};
    detail.template = "template/detail/detail.html";
    detail.controller=detailController;

var address = {};
    address.template = "template/address/address.html";
    address.controller = addressController;

var orders = {};
    orders.template = "template/orders/orders.html";
    orders.controller=ordersController;

var pay={};
    pay.template = "template/pay/pay.html";
    pay.controller=payController;

var paying = {};
    paying.template = "template/paying/paying.html";
    paying.controller = payingController;

var success = {};
    success.template = "template/success/success.html";
    success.controller=successController;

var load={};
    load.partial = "template/load/load.html";
    load.controller=loadController;

var home = {};            //default partial page, which will be loaded initially
    home.template = "template/home/home.html";
    home.controller = homeController;

var notFound = {};               //404 page
    notFound.template = "template/404/404.html";
    notFound.controller = notFoundController;

var settings = {};               //global parameters
    settings.templateCache = {};      //cache for partial pages
    settings.divDemo = document.getElementById("views");      //div for loading partials, defined in index.html

/**
 *   ****************  获取后台信息  *******************
 */
appFrame.http("http://192.168.1.38/zero/php/pub.php","get","",callback);
function callback(status,json){
    if(status == 200){
        appScope.goods = JSON.parse(json);
        appFrame.changeUrl();
    }
    else{
        console.log("请求失败");
    }

}







