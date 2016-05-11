/**
 * Created by dell on 2016/5/9.   v 1.0.0
 */
/************************************************************************
 *                                                                      *
 *                              appFrame                                *
 *                                                                      *
 ************************************************************************
 */







/**
 * 定义缺省的两个页面片段（缺省页面和出错页面，这两个页面是基础功能，所以放在库里）相关代码，
 * 对每个片段对应的url（例如home）定义一个同名的对象，里面存放了对应的 html 片段文件路径、初始化方法。
 * 随后是全局变量，包含了 html 片段代码的缓存、局部刷新所在 div 的 DOM 对象和向后端服务请求返回的根数据（rootScope，
 * 初始化时未出现，在后面的方法中才会用到）
 */
//var home = {};            //default partial page, which will be loaded initially
//home.template = "";
//home.controller = function(){   //bootstrap method
//    //nothing but static content only to render
//};
//
//var notFound = {};               //404 page
//notFound.template = "";
//notFound.controller = function(){
//};
var settings = {};               //global parameters
settings.templateCache = {};      //cache for partial pages
settings.divDemo = document.getElementById("views");      //div for loading partials, defined in index.html




/**
 * appFrame 主程序
 */

// Main Object here
var appFrame = {};
var appScope={};    //根对象
var scope = window; //全局对象
/**
 * 获取改变后的 url，先通过window[url]找到对应的对象（类似于最上部定义的home和notfound），
 * 如对象不存在（无定义的路径）则转到404处理，否则通过http方法获取window[url].template中定义的 html 片段并加载到局部刷新的div，
 * 并执行window[url].controller初始化方法。
 */

appFrame.changeUrl = function() {          //handle url change
    var url = location.hash.replace('#','');
    if(url === ''){
        url = 'home';           //default page
    }
    if(!window[url]){
        url = "notFound";
    }
    appFrame.http(window[url].template, 'GET', '',function(status, page){

        if(status == 404){
            url = 'notFound';       //404 page
            appFrame.http(window[url].template,'GET','',function(status, page404){
                settings.divDemo.innerHTML = page404;
                appFrame.initFunc(url);              //load 404 controller
            });
        }
        else{
            settings.divDemo.innerHTML = page;
            appFrame.initFunc(url);              //load url controller
        }
    });
};

/**
 * http方法主要是和后端的服务进行交互，通过XMLHttpRequest发送请求（GET或POST），
 * 如果获取的是 html 片段就把它缓存到settings.templateCache[url]里，因为 html 片段是相对固定的，
 * 每次请求返回的内容不会变化。如果是其他请求（比如向 Github 的 markdown 服务 POST 一个字符串）就不能缓存了。
 *
 */
appFrame.http = function(url, method, data, callback) {    //load template page
    if(settings.templateCache[url]){
        callback(200, settings.templateCache[url]);
    }
    else {
        var xmlhttp;
        if(window.XMLHttpRequest){
            xmlhttp = new XMLHttpRequest();
            xmlhttp.open(method, url, true);
            if(method === 'POST'){
                xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            }
            xmlhttp.send(data);
            xmlhttp.onreadystatechange = function(){
                if(xmlhttp.readyState == 4){
                    switch(xmlhttp.status) {
                        case 404:                             //if the url is invalid, show the 404 page
                            url = 'notFound';
                            break;
                        default:
                            var parts = url.split('.');
                            if(parts.length>1 && parts[parts.length-1] == 'html'){         //only cache static html pages
                                settings.templateCache[url] = xmlhttp.responseText;        //cache templates to improve performance
                            }
                    }
                    callback(xmlhttp.status, xmlhttp.responseText);
                }
            }
        }
        else{
            alert('Sorry, your browser is too old to run this app.');
            callback(404, {});
        }
    }
};

/**
 * render方法一般在每个片段的初始化方法中调用，它会设定全局变量中的根对象，并通过refresh方法渲染 html 片段。
 */

appFrame.render = function(url){
    settings.rootScope = window[url];
    //appFrame.refresh(settings.divDemo, settings.rootScope);
};

/**
 *refresh 方法是一个递归执行的函数，每次处理当前 node 之后，还会递归处理所有的孩子节点。
 * 通过这种方式，就能把模板中定义的所有元素的占位变量都替换为真实数据。
 */

appFrame.refresh = function(node, scope) {
    var children = node.childNodes;
    if(node.nodeType != 3){                            //traverse child nodes, Node.TEXT_NODE == 3
        for(var k=0; k<node.attributes.length; k++){
            node.setAttribute(node.attributes[k].name, appFrame.feedData(node.attributes[k].value, scope));       //replace variables defined in attributes
        }
        if(node.hasAttribute('data-src')){
            node.setAttribute('src',node.getAttribute('data-src'));             //replace src attribute
        }
        var childrenCount = children.length;
        for(var j=0; j<childrenCount; j++){
            if(children[j].nodeType != 3 && children[j].hasAttribute('data-repeat')){     //handle repeat items
                var item = children[j].dataset.item;
                var repeat = children[j].dataset.repeat;
                children[j].removeAttribute('data-repeat');
                var repeatNode = children[j];
                for(var prop in scope[repeat]){
                    repeatNode = children[j].cloneNode(true);                  //clone sibling nodes for the repeated node
                    node.appendChild(repeatNode);
                    var repeatScope = scope;
                    var obj = {};
                    obj.key = prop;
                    obj.value = scope[repeat][prop];                           //add the key/value pair to current scope
                    repeatScope[item] = obj;
                    miniSPA.refresh(repeatNode,repeatScope);                           //iterate over all the cloned nodes
                }
                node.removeChild(children[j]);                                 //remove the empty template node
            }
            else{
                miniSPA.refresh(children[j],scope);                                    //not for repeating, just iterate the child node
            }
        }
    }
    else{
        node.textContent = appFrame.feedData(node.textContent, scope);           //replace variables defined in the template
    }
};

/**
 * feedData 用来替换文本节点中的占位变量。它通过正则表达式获取{{...}}中的内容，
 * 并把多级属性（例如 data.map.value）切分开，逐级循环处理，直到最底层获得相应的数据。
 */

appFrame.feedData = function(template, scope){                                     //replace variables with data in current scope
    return template.replace(/\{\{([^}]+)\}\}/gmi, function(model){
        var properties = model.substring(2,model.length-2).split('.');          //split all levels of properties
        var result = scope;
        for(var n in properties){
            if(result){
                switch(properties[n]){                  //move down to the deserved value
                    case 'key':
                        result = result.key;
                        break;
                    case 'value':
                        result = result.value;
                        break;
                    case 'length':                     //get length from the object
                        var length = 0;
                        for(var x in result) length ++;
                        result = length;
                        break;
                    default:
                        result = result[properties[n]];
                }
            }
        }
        return result;
    });
}

/**
 * initFunc方法的作用是解析片段对应的初始化方法，
 * 判断其类型是否为函数，并执行它。这个方法是在changeUrl方法里调用的，
 *每次访问路径的变化都会触发相应的初始化方法。
 */


appFrame.initFunc = function(template) { //execute the controller function responsible for current template
    var fn = window[template].controller;
    if(typeof fn === 'function') {
        scope = window;//初始化 全局变量scope
        fn();
    }
};

/**
 * 最后是appFrame库自身的初始化。很简单，就是先获取404.html片段并缓存到settings.templateCache.notfound中，
 * 以便在路径变化时使用。当路径不合法时，就会从缓存中取出404片段并显示在局部刷新的 div 中。
 */

appFrame.http('template/404/404.html', 'GET','',function(status, template){
    settings.templateCache.notFound = template;
});//cache 404 page first



