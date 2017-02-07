$(document).ready(function() {

    var API_URL = 'http://localhost:3000';

    $('#formInfraSend').on('click', function(e) {
        // informações que a API espera:

        // nome
        // email
        // empresa_nome
        // empresa_atividade
        // empresa_site
        // empresa_cep
        // empresa_funcionarios
        // empresa_computadores
        // empresa_impressoras
        // empresa_outros
        // empresa_redeconfigurada
        
        e.preventDefault();
        console.log('formulário de infra-estrutura');

        $('#formInfraSend').find('.error-message').html('').hide();
        $('#formInfraSend').addClass('sending');
    });

    $('#formOportunidadeSend').on('click', function(e){
        e.preventDefault();

        var data = {};
        data.nome = $('form#oportunidade').find('[name=nome]').val();
        data.celular = $('form#oportunidade').find('[name=celular]').val();
        data.email = $('form#oportunidade').find('[name=email]').val();
        data.linkedin = $('form#oportunidade').find('[name=linkedin]').val();
        data.mensagem = $('form#oportunidade').find('[name=mensagem]').val();

        $.ajax({
                method: "POST",
                "crossDomain": true,
                url: API_URL + "/sendOportunidades",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: JSON.stringify(data)
            })
            .done(function(response) {
                console.log('foi!');
            })
            .fail(function(jqXHR, textStatus) {
                console.log('não foi não :(');
                console.log(jqXHR);
                console.log(textStatus);
            })
            .always(function() {
                console.log('sempre né!');
            });

    });
});
