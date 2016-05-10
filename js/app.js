/**
 * Created by dell on 2016/5/9.
 */
appFrame.changeUrl();
function detailBtn(){
    location.hash='#address';
}
function addressBtn(){
    if(address.isComplete()){
        location.hash='#orders';
        address.getUserInput();
    }else{
        alert("请填写完整");
    }

}
function ordersBtn(){
    location.hash = '#pay';
}
function addressReturn(){
    location.hash='#detail';
}
function ordersReturn(){
    location.hash='#address';
}
function payReturn(){
    location.hash='#orders';
}
function successReturn(){
    location.hash='#pay';
}