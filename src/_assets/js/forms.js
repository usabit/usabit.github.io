$(document).ready(function() {

    var API_URL = 'https://usabit-api.herokuapp.com';

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    $("input.cep, input[name='cep']").mask("99999-999");

    $("input.telefone, input[name='telefone'], input[name='celular']")
        .mask("(99) 9999-9999?9")
        .focusout(function(event) {
            var target, phone, element;
            target = (event.currentTarget) ? event.currentTarget : event.srcElement;
            phone = target.value.replace(/\D/g, '');
            element = $(target);
            element.unmask();
            if (phone.length > 10) {
                element.mask("(99) 99999-999?9");
            } else {
                element.mask("(99) 9999-9999?9");
            }
        });

    $(".input-group input").focusout(function(){
        if ($(this).val()){
            $(this).parent().find('.error').hide();
        }
    });

    $("form#infraEstrutura input").focusout(function(){
    // $("form#infraEstrutura .erro input").focusout(function(){
        $(this).parent().parent().removeClass('erro');
        console.log('asd');
    });

    $('#formInfraSend').on('click', function(e) {
        // informações que a API espera:

        e.preventDefault();

        var data = {};
        data.nome = $('form#infraEstrutura').find('[name=nome]').val();
        data.email = $('form#infraEstrutura').find('[name=email]').val();
        data.empresa_nome = $('form#infraEstrutura').find('[name=empresa_nome]').val();
        data.empresa_atividade = $('form#infraEstrutura').find('[name=empresa_atividade]').val();
        data.empresa_site = $('form#infraEstrutura').find('[name=empresa_site]').val();
        data.empresa_cep = $('form#infraEstrutura').find('[name=empresa_cep]').val();
        data.empresa_funcionarios = $('form#infraEstrutura').find('[name=empresa_funcionarios]').val();
        data.empresa_computadores = $('form#infraEstrutura').find('[name=empresa_computadores]').val();
        data.empresa_impressoras = $('form#infraEstrutura').find('[name=empresa_impressoras]').val();
        data.empresa_outros = $('form#infraEstrutura').find('[name=empresa_outros]').val();
        data.empresa_redeconfigurada = $('form#infraEstrutura').find('[name=empresa_redeconfigurada]').val();
        
        if (!data.nome) {
            $('form#infraEstrutura').find('[name=nome]').focus().parent().parent().addClass('erro');
            return false;
        } else if (!data.email) {
            $('form#infraEstrutura').find('[name=email]').focus().parent().parent().addClass('erro');
            return false;
        } else if (!validateEmail(data.email)) {
            $('form#infraEstrutura').find('[name=email]').focus().parent().parent().addClass('erro');
            return false;
        }

        $('#formInfraSend').addClass('loading');

        $.ajax({
                method: "POST",
                "crossDomain": true,
                url: API_URL + "/sendInfraEstrutura",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: JSON.stringify(data)
            })
            .done(function(response) {
                $('.form-sucesso').show();
                $('.form-display').hide();
            })
            .fail(function(jqXHR, textStatus) {
                $('.form-erro').show();
            })
            .always(function(){
                $('#formInfraSend').removeClass('loading');
            });

    });

    $('#formOportunidadeSend').on('click', function(e){
        e.preventDefault();

        var data = {};
        data.nome = $('form#oportunidade').find('[name=nome]').val();
        data.celular = $('form#oportunidade').find('[name=celular]').val();
        data.email = $('form#oportunidade').find('[name=email]').val();
        data.linkedin = $('form#oportunidade').find('[name=linkedin]').val();
        data.mensagem = $('form#oportunidade').find('[name=mensagem]').val();

        function showError(input, message){
            $('form#oportunidade').find('[name=' + input + ']').focus();
            var errorEL = $('form#oportunidade').find('[name=' + input + ']').parent().find('.error');
            $(errorEL).find('.error-message').html(message);
            $(errorEL).css("display", "flex").hide().fadeIn();
        }

        $('form#oportunidade').find('.error').hide();

        if (!data.nome){
            showError('nome', 'Campo Obrigatório');
            return false;
        } else if (!data.celular) {
            showError('celular', 'Campo Obrigatório');
            return false;
        }
        else if (!data.email) {
            showError('email', 'Campo Obrigatório');
            return false;
        }
        else if (!validateEmail(data.email)) {
            showError('email', 'E-mail inválido');
            return false;
        }
        else if (!data.linkedin) {
            showError('linkedin', 'Campo Obrigatório');
            return false;
        }

        $('#formOportunidadeSend').addClass('loading');

        $.ajax({
                method: "POST",
                "crossDomain": true,
                url: API_URL + "/sendOportunidades",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: JSON.stringify(data)
            })
            .done(function(response) {
                $('.form-sucesso').show();
                $('.form-display').hide();
            })
            .fail(function(jqXHR, textStatus) {
                $('.form-erro').show();
            })
            .always(function(){
                $('#formOportunidadeSend').removeClass('loading');
            });
    });
});
