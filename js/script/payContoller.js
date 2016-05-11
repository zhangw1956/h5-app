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
        payActive.pay_begin=function(data){
            if(data){
                this.pay_success();
            }else{
                this.pay_error();
            }
        };
        payActive.pay_success=function(){
            //通知 服务器 支付成功
            public.ajax("","post",success,error);
            // 生成最后订单详情
            success.developOrders(data);
            function success(){
                pageChange('#pay','#success');
            }
            function error(){
                alert("error");
            }
        };
        payActive.pay_error=function(){
            //alert("支付失败！");
        };
        payActive.pay_way();
        payActive.pay_begin();
        scope.payReturn = function(){
            location.hash='#orders';
        }
    };
