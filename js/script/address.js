/**
 * Created by dell on 2016/5/4.
 *     ��ӵ�ַҳ
 */
var address = {};
    address.template = "template/address/address.html";
    address.controller = function(){
        _init_area();
        address.isComplete();
    };

    address.isComplete=function(){
        var res1,res2;
        $("input[name='address']").each(function(){
            var re;
            if($(this).val()){
                re = true;
            }else{
                re = false;
                return res1 = false;
            }
            res1 = re;
        });

        var pro = $("#s_province").val(),
            city = $("#s_city").val(),
            county = $("#s_county").val();
        if(pro!=0 && city!=0 && county!=0){
            res2 = true;
        }
        else{
            res2 = false;
        }
        return res1&&res2;
    };
    address.getUserInput=function(){
         appScope.address={
            name: $("#address_add input").eq(0).val(),
            tell: $("#address_add input").eq(1).val(),
            card: $("#address_add input").eq(2).val(),
            address: $("#s_province option:selected").text() + '.'
            + $("#s_city option:selected").text() + '.'
            + $("#s_county option:selected").text(),
            street:$("#address_add input").eq(3).val(),
            house:$("#address_add input").eq(4).val()
        }
    }
;