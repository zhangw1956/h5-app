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

        payActive.pay_way();


        html.payComplete=function(data){
            if(data){
                this.paySuccess();
            }else{
                this.payError();
            }
        };
        html.paySuccess=function(){
            //֪ͨ ������ ֧���ɹ�
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
            alert("֧��ʧ�ܣ�");
        };

        /** ****  ���� native ֧���ӿ�  ***** **/

        scope.payBtn = function(){

            location.hash = '#paying';

        };
        scope.payReturn = function(){
            location.hash='#orders';
        }
    };
