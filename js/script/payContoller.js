/**
 * Created by dell on 2016/5/4.
 *   支付页面
 *   返回 支付方式
 *   返回 no -------没有选择支付方式
 */


    payController = function(){
        var payActive = {};
        payActive.pay_way=function(){
            var choice;
            $("input:radio[name='pay_way']").each(
                function(){
                    if($(this).prop("checked")){
                        choice = $(this).val();
                    }
                    else{
                        choice =  'no';
                    }
                }
            );
            return choice;
        };

        payActive.pay_way();


        html.payComplete=function(data){
            if(data){
                this.paySuccess();
            }else{
                this.payError();
            }
        };
        html.paySuccess=function(){
            //通知 服务器 支付成功
            appFrame.http('','post','',orderSub);

            function orderSub(status,json) {
                if(status == 200) {
                    location.hash = '';
                } else {
                    alert(json);
                }
            }

        };
        html.payError=function(){
            alert("支付失败！");
        };

        /** ****  调用 native 支付接口  ***** **/

        scope.payBtn = function(){

            location.hash = '#paying';

        };
        scope.payReturn = function(){
            location.hash='#orders';
        }
    };
