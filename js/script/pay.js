/**
 * Created by dell on 2016/5/4.
 *   ֧��ҳ��
 *   ���� ֧����ʽ
 *   ���� no -------û��ѡ��֧����ʽ
 */
var pay={};
    pay.template = "template/pay/pay.html";
    pay.controller = function(){
        pay.pay_way();
        pay.pay_begin();
    };
    pay.pay_way=function(){
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
    pay.pay_begin=function(data){
        if(data){
            this.pay_success();
        }else{
            this.pay_error();
        }
    };
    pay.pay_success=function(){
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
    pay.pay_error=function(){
        //alert("֧��ʧ�ܣ�");
    };
