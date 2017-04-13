$(document).ready(function(){function e(e){var a=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return a.test(e)}var a="https://usabit-api.herokuapp.com";$("input.cep, input[name='cep']").mask("99999-999"),$("input.telefone, input[name='telefone'], input[name='celular']").mask("(99) 9999-9999?9").focusout(function(e){var a,t,i;a=e.currentTarget?e.currentTarget:e.srcElement,t=a.value.replace(/\D/g,""),i=$(a),i.unmask(),t.length>10?i.mask("(99) 99999-999?9"):i.mask("(99) 9999-9999?9")}),$(".input-group input").focusout(function(){$(this).val()&&$(this).parent().find(".error").hide()}),$("form#infraEstrutura input").focusout(function(){$(this).parent().parent().removeClass("erro"),console.log("asd")}),$("#formInfraSend").on("click",function(t){t.preventDefault();var i={};return i.nome=$("form#infraEstrutura").find("[name=nome]").val(),i.email=$("form#infraEstrutura").find("[name=email]").val(),i.empresa_nome=$("form#infraEstrutura").find("[name=empresa_nome]").val(),i.empresa_atividade=$("form#infraEstrutura").find("[name=empresa_atividade]").val(),i.empresa_site=$("form#infraEstrutura").find("[name=empresa_site]").val(),i.empresa_cep=$("form#infraEstrutura").find("[name=empresa_cep]").val(),i.empresa_funcionarios=$("form#infraEstrutura").find("[name=empresa_funcionarios]").val(),i.empresa_computadores=$("form#infraEstrutura").find("[name=empresa_computadores]").val(),i.empresa_impressoras=$("form#infraEstrutura").find("[name=empresa_impressoras]").val(),i.empresa_outros=$("form#infraEstrutura").find("[name=empresa_outros]").val(),i.empresa_redeconfigurada=$("form#infraEstrutura").find("[name=empresa_redeconfigurada]").val(),i.nome?i.email&&e(i.email)?($("#formInfraSend").addClass("loading"),void $.ajax({method:"POST",crossDomain:!0,url:a+"/sendInfraEstrutura",contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify(i)}).done(function(e){$(".form-sucesso").show(),$(".form-display").hide()}).fail(function(e,a){$(".form-erro").show()}).always(function(){$("#formInfraSend").removeClass("loading")})):($("form#infraEstrutura").find("[name=email]").focus().parent().parent().addClass("erro"),!1):($("form#infraEstrutura").find("[name=nome]").focus().parent().parent().addClass("erro"),!1)}),$("#formOportunidadeSend").on("click",function(t){function i(e,a){$("form#oportunidade").find("[name="+e+"]").focus();var t=$("form#oportunidade").find("[name="+e+"]").parent().find(".error");$(t).find(".error-message").html(a),$(t).css("display","flex").hide().fadeIn()}t.preventDefault();var o={};return o.nome=$("form#oportunidade").find("[name=nome]").val(),o.celular=$("form#oportunidade").find("[name=celular]").val(),o.email=$("form#oportunidade").find("[name=email]").val(),o.linkedin=$("form#oportunidade").find("[name=linkedin]").val(),o.mensagem=$("form#oportunidade").find("[name=mensagem]").val(),$("form#oportunidade").find(".error").hide(),o.nome?o.celular?o.email?e(o.email)?o.linkedin?($("#formOportunidadeSend").addClass("loading"),void $.ajax({method:"POST",crossDomain:!0,url:a+"/sendOportunidades",contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify(o)}).done(function(e){$(".form-sucesso").show(),$(".form-display").hide()}).fail(function(e,a){$(".form-erro").show()}).always(function(){$("#formOportunidadeSend").removeClass("loading")})):(i("linkedin","Campo Obrigatório"),!1):(i("email","E-mail inválido"),!1):(i("email","Campo Obrigatório"),!1):(i("celular","Campo Obrigatório"),!1):(i("nome","Campo Obrigatório"),!1)})}),$(function(){$(window).width()<800?$(".site-header.homepage").data("size","small"):$(".site-header.homepage").data("size","big")}),$(window).scroll(function(){var e=300;$(window).width()>=600?$(document).scrollTop()>40?"big"==$(".site-header.homepage").data("size")&&($(".site-header.homepage").data("size","small"),$(".site-header.homepage").stop().animate({padding:"20px 0"},{queue:!1,duration:e}),$(".site-header.homepage .trigger .page-link").stop().animate({fontSize:"14px"},{queue:!1,duration:e}),$(".site-header.homepage .site-title img").stop().animate({width:"30px",marginRight:"10px"},{queue:!1,duration:e}),$(".site-header.homepage .site-title svg#usabit-logotipo").stop().animate({width:"80px"},{queue:!1,duration:e}),$(".site-header.homepage .site-nav .responsive-menu").stop().animate({paddingTop:"85px"},{queue:!1,duration:e})):"small"==$(".site-header.homepage").data("size")&&($(".site-header.homepage").data("size","big"),$(".site-header.homepage").stop().animate({padding:"50px 0"},{queue:!1,duration:e}),$(".site-header.homepage .trigger .page-link").stop().animate({fontSize:"18px"},{queue:!1,duration:e}),$(".site-header.homepage .site-title img").stop().animate({width:"60px",marginRight:"18px"},{queue:!1,duration:e}),$(".site-header.homepage .site-title svg#usabit-logotipo").stop().animate({width:"120px"},{queue:!1,duration:e}),$(".site-header.homepage .site-nav .responsive-menu").stop().animate({paddingTop:"160px"},{queue:!1,duration:e})):($(".site-header.homepage .trigger .page-link").stop().animate({fontSize:"14px"},{queue:!1,duration:e}),$(".site-header.homepage").stop().animate({padding:"20px 0"},{queue:!1,duration:e}),$(".site-header.homepage .site-title img").stop().animate({width:"30px",marginRight:"10px"},{queue:!1,duration:e}),$(".site-header.homepage .site-title svg#usabit-logotipo").stop().animate({width:"80px"},{queue:!1,duration:e}),$(".site-header.homepage .site-nav .responsive-menu").stop().animate({paddingTop:"85px"},{queue:!1,duration:e}))}),$(function(){$(".map-embed").on("click",function(){$(this).toggleClass("active")})}),jQuery(document).ready(function(){if("/"===document.location.pathname||"/en/"===document.location.pathname){var e={};e.method="GET",e.url="https://usabit-api.herokuapp.com/medium",e.contentType="application/json; charset=utf-8",e.dataType="json";var a=["JANEIRO","FEVEREIRO","MARÇO","ABRIL","MAIO","JUNHO","JULHO","AGOSTO","SETEMBRO","OUTUBRO","NOVEMBRO","DEZEMBRO"];$.ajax(e).done(function(e){var t,i,o=$("#medium-template").html(),n=Handlebars.compile(o);$.each(e,function(e,o){console.log(o);var r=new Date(o.date);console.log(r),t={postImg:"https://cdn-images-1.medium.com/max/1000/"+o.img,postTitle:o.title,postSubtitle:o.subtitle,postDate:r.getDate()+" "+a[r.getMonth()]+", "+r.getFullYear(),postLink:"https://medium.com/hotel-coaching/"+o.link,postAuthor:o.author},i=n(t),$("#medium-posts").append(i),console.log(t),console.log("-------------------------------------------------")})}).fail(function(e){console.log("error",e)}).always(function(){$(".medium-loading").hide()})}}),$(document).ready(function(){$(".site-nav .trigger a").clone().appendTo($(".responsive-menu"))}),$(function(){$("header.site-header .site-nav .menu-icon").on("click",function(e){e.preventDefault(),$(this).toggleClass("active"),$(this).hasClass("active")?($("header.site-header .site-nav .responsive-menu").css("display","flex").hide().fadeIn(),$("body, html").css("overflow","hidden")):($("header.site-header .site-nav .responsive-menu").fadeOut(),$("body, html").css("overflow","initial"))})}),$(function(){$("#banner-fullwidth").owlCarousel({nav:!0,autoplay:!0,autoplaySpeed:1200,autoplayTimeout:8e3,autoplayHoverPause:!0,slideSpeed:1300,items:1,loop:!0,navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]})}),$(function(){$(".portfolio-item a").on("click",function(e){e.preventDefault(),$(".portfolio-item").removeClass("active"),$(".portfolio-display-item").removeClass("active"),$(this).parent().addClass("active"),$(".portfolio-display-item#"+$(this).data("banner")).addClass("active")})});