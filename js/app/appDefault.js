/**
 * Created by dell on 2016/5/9.
 *
 * ����ȱʡ������ҳ��Ƭ�Σ�ȱʡҳ��ͳ���ҳ�棬������ҳ���ǻ������ܣ����Է��ڿ����ش��룬
 * ��ÿ��Ƭ�ζ�Ӧ��url������home������һ��ͬ���Ķ����������˶�Ӧ�� html Ƭ���ļ�·������ʼ��������
 *
 *
 *
 * �����ȫ�ֱ����������� html Ƭ�δ���Ļ��桢�ֲ�ˢ������ div �� DOM ��������˷������󷵻صĸ����ݣ�rootScope����ʼ��ʱδ���֣��ں���ķ����вŻ��õ���
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


