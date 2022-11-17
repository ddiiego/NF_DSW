$(document).ready(function(){
    $("#formLogin").validate({
        rules:{
            usuario:{
                required: true,
                maxlength: 20
            },
            cpf:{
                required: true,
                minlength: 11
            },
            tel:{
                required: true,
                minlength: 9
            },
            mensagem:{
                required: true,
            
            }
        },
        messages:{
            usuario:{
                   required:"Por favor, informe seu nome",
                   maxlength:"O nome deve ter no máximo 20 caracteres"
            },
            email:{
                   required:"É necessário informar um email"
            },
            cpf:{
                required:"É necessário informar o CPF",
                minlength:"O CPF deve ter pelo menos 11 caracteres"
             },
            mensagem:{
                   required:"A mensagem não pode ficar em branco"
            },
            tel:{
                required:"Por favor, informe seu telefone",
                minlength:"O telefone deve ter no mínimo 9 caracteres"     
        }
                 
        }
        
    })
})

jQuery(function($){
    $("#cpf").mask("999.999.999-99");
    $("#tel").mask("(999) 999-9999");
    $("#campoSenha").mask("***-****");
    });



