$(document).ready(function(){function e(e){var a=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return a.test(e)}var a="http://localhost:3000";$("input.cep, input[name='cep']").mask("99999-999"),$("input.telefone, input[name='telefone'], input[name='celular']").mask("(99) 9999-9999?9").focusout(function(e){var a,i,t;a=e.currentTarget?e.currentTarget:e.srcElement,i=a.value.replace(/\D/g,""),t=$(a),t.unmask(),i.length>10?t.mask("(99) 99999-999?9"):t.mask("(99) 9999-9999?9")}),$(".input-group input").focusout(function(){$(this).val()&&$(this).parent().find(".error").hide()}),$("form#infraEstrutura input").focusout(function(){$(this).parent().parent().removeClass("erro"),console.log("asd")}),$("#formInfraSend").on("click",function(i){i.preventDefault();var t={};return t.nome=$("form#infraEstrutura").find("[name=nome]").val(),t.email=$("form#infraEstrutura").find("[name=email]").val(),t.empresa_nome=$("form#infraEstrutura").find("[name=empresa_nome]").val(),t.empresa_atividade=$("form#infraEstrutura").find("[name=empresa_atividade]").val(),t.empresa_site=$("form#infraEstrutura").find("[name=empresa_site]").val(),t.empresa_cep=$("form#infraEstrutura").find("[name=empresa_cep]").val(),t.empresa_funcionarios=$("form#infraEstrutura").find("[name=empresa_funcionarios]").val(),t.empresa_computadores=$("form#infraEstrutura").find("[name=empresa_computadores]").val(),t.empresa_impressoras=$("form#infraEstrutura").find("[name=empresa_impressoras]").val(),t.empresa_outros=$("form#infraEstrutura").find("[name=empresa_outros]").val(),t.empresa_redeconfigurada=$("form#infraEstrutura").find("[name=empresa_redeconfigurada]").val(),t.nome?t.email&&e(t.email)?($("#formInfraSend").addClass("loading"),void $.ajax({method:"POST",crossDomain:!0,url:a+"/sendInfraEstrutura",contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify(t)}).done(function(e){$(".form-sucesso").show(),$(".form-display").hide()}).fail(function(e,a){$(".form-erro").show()}).always(function(){$("#formInfraSend").removeClass("loading")})):($("form#infraEstrutura").find("[name=email]").focus().parent().parent().addClass("erro"),!1):($("form#infraEstrutura").find("[name=nome]").focus().parent().parent().addClass("erro"),!1)}),$("#formOportunidadeSend").on("click",function(i){function t(e,a){$("form#oportunidade").find("[name="+e+"]").focus();var i=$("form#oportunidade").find("[name="+e+"]").parent().find(".error");$(i).find(".error-message").html(a),$(i).css("display","flex").hide().fadeIn()}i.preventDefault();var n={};return n.nome=$("form#oportunidade").find("[name=nome]").val(),n.celular=$("form#oportunidade").find("[name=celular]").val(),n.email=$("form#oportunidade").find("[name=email]").val(),n.linkedin=$("form#oportunidade").find("[name=linkedin]").val(),n.mensagem=$("form#oportunidade").find("[name=mensagem]").val(),$("form#oportunidade").find(".error").hide(),n.nome?n.celular?n.email?e(n.email)?n.linkedin?($("#formOportunidadeSend").addClass("loading"),void $.ajax({method:"POST",crossDomain:!0,url:a+"/sendOportunidades",contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify(n)}).done(function(e){$(".form-sucesso").show(),$(".form-display").hide()}).fail(function(e,a){$(".form-erro").show()}).always(function(){$("#formOportunidadeSend").removeClass("loading")})):(t("linkedin","Campo Obrigatório"),!1):(t("email","E-mail inválido"),!1):(t("email","Campo Obrigatório"),!1):(t("celular","Campo Obrigatório"),!1):(t("nome","Campo Obrigatório"),!1)})}),$(function(){$(window).width()<800?$(".site-header.homepage").data("size","small"):$(".site-header.homepage").data("size","big")}),$(window).scroll(function(){var e=300;$(window).width()>=600?$(document).scrollTop()>40?"big"==$(".site-header.homepage").data("size")&&($(".site-header.homepage").data("size","small"),$(".site-header.homepage").stop().animate({padding:"20px 0"},{queue:!1,duration:e}),$(".site-header.homepage .trigger .page-link").stop().animate({fontSize:"14px"},{queue:!1,duration:e}),$(".site-header.homepage .site-title img").stop().animate({width:"30px",marginRight:"10px"},{queue:!1,duration:e}),$(".site-header.homepage .site-title svg#usabit-logotipo").stop().animate({width:"80px"},{queue:!1,duration:e}),$(".site-header.homepage .site-nav .responsive-menu").stop().animate({paddingTop:"85px"},{queue:!1,duration:e})):"small"==$(".site-header.homepage").data("size")&&($(".site-header.homepage").data("size","big"),$(".site-header.homepage").stop().animate({padding:"50px 0"},{queue:!1,duration:e}),$(".site-header.homepage .trigger .page-link").stop().animate({fontSize:"18px"},{queue:!1,duration:e}),$(".site-header.homepage .site-title img").stop().animate({width:"60px",marginRight:"18px"},{queue:!1,duration:e}),$(".site-header.homepage .site-title svg#usabit-logotipo").stop().animate({width:"120px"},{queue:!1,duration:e}),$(".site-header.homepage .site-nav .responsive-menu").stop().animate({paddingTop:"160px"},{queue:!1,duration:e})):($(".site-header.homepage .trigger .page-link").stop().animate({fontSize:"14px"},{queue:!1,duration:e}),$(".site-header.homepage").stop().animate({padding:"20px 0"},{queue:!1,duration:e}),$(".site-header.homepage .site-title img").stop().animate({width:"30px",marginRight:"10px"},{queue:!1,duration:e}),$(".site-header.homepage .site-title svg#usabit-logotipo").stop().animate({width:"80px"},{queue:!1,duration:e}),$(".site-header.homepage .site-nav .responsive-menu").stop().animate({paddingTop:"85px"},{queue:!1,duration:e}))}),$(function(){$(".map-embed").on("click",function(){$(this).toggleClass("active")})}),$(document).ready(function(){$(".site-nav .trigger a").clone().appendTo($(".responsive-menu"))}),$(function(){$("header.site-header .site-nav .menu-icon").on("click",function(e){e.preventDefault(),$(this).toggleClass("active"),$(this).hasClass("active")?($("header.site-header .site-nav .responsive-menu").css("display","flex").hide().fadeIn(),$("body, html").css("overflow","hidden")):($("header.site-header .site-nav .responsive-menu").fadeOut(),$("body, html").css("overflow","initial"))})}),$(function(){$("#banner-fullwidth").owlCarousel({nav:!0,autoplay:!0,autoplaySpeed:1200,autoplayTimeout:8e3,autoplayHoverPause:!0,slideSpeed:1300,items:1,loop:!0,navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]})}),$(function(){$(".portfolio-item a").on("click",function(e){e.preventDefault(),$(".portfolio-item").removeClass("active"),$(".portfolio-display-item").removeClass("active"),$(this).parent().addClass("active"),$(".portfolio-display-item#"+$(this).data("banner")).addClass("active")})});