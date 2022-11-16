$(document).ready(function(){
    $("#formLogin").validate({
        rules:{
            usuario:{
                required: true,
                minlength: 5
            }
        },
        messages:{
            usuario:{
                   required:"Por favor, informe seu nome",
                   minlength:"O nome deve ter pelo menos 3 caracteres"
            },
            email:{
                   required:"É necessário informar um email"
            },
            mensagem:{
                   required:"A mensagem não pode ficar em branco"
            }     
        }
        
    })
})

jQuery(function($){
    $("#campoData").mask("99/99/9999");
    $("#tel").mask("(999) 999-9999");
    $("#campoSenha").mask("***-****");
    });



