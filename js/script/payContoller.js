/**
 * Created by dell on 2016/5/4.
 *   ֧��ҳ��
 *   ���� ֧����ʽ
 *   ���� no -------û��ѡ��֧����ʽ
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
            //֪ͨ ������ ֧���ɹ�
            public.ajax("","post",success,error);
            // ������󶩵�����
            success.developOrders(data);
            function success(){
                pageChange('#pay','#success');
            }
            function error(){
                alert("error");
            }
        };
        payActive.pay_error=function(){
            //alert("֧��ʧ�ܣ�");
        };
        payActive.pay_way();
        payActive.pay_begin();
        scope.payReturn = function(){
            location.hash='#orders';
        }
    };
