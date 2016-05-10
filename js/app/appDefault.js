/**
 * Created by dell on 2016/5/9.
 *
 * 定义缺省的两个页面片段（缺省页面和出错页面，这两个页面是基础功能，所以放在库里）相关代码，
 * 对每个片段对应的url（例如home）定义一个同名的对象，里面存放了对应的 html 片段文件路径、初始化方法。
 *
 *
 *
 * 随后是全局变量，包含了 html 片段代码的缓存、局部刷新所在 div 的 DOM 对象和向后端服务请求返回的根数据（rootScope，初始化时未出现，在后面的方法中才会用到）
 */
var home = {};            //default partial page, which will be loaded initially
    home.template = "template/home/home.html";
    home.controller = function(){   //bootstrap method
    //nothing but static content only to render
        location.hash='#detail';
};

var notFound = {};               //404 page
    notFound.template = "template/404/404.html";
    notFound.controller = function(){
    alert('URL does not exist. please check your code.');
};
var settings = {};               //global parameters
settings.templateCache = {};      //cache for partial pages
settings.divDemo = document.getElementById("views");      //div for loading partials, defined in index.html


