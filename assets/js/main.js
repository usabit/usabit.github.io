!function(e,a,n,o){"use strict";e(".anchor").on("click",function(a){a.preventDefault();var n=e(this).attr("href").split("#")[1];""!=n&&e("html, body").animate({scrollTop:e("#"+n).offset().top-50})})}(jQuery,window,document),function(e,a,n,o){"use strict";e(".site-header__messenger-link").on("click",function(a){a.preventDefault(),e(this).parents(".site-header__messenger").toggleClass("active")})}(jQuery,window,document),$(document).ready(function(){function e(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}var a="https://usabit-api.herokuapp.com";$("input.cep, input[name='cep']").mask("99999-999"),$("input.telefone, input[name='telefone'], input[name='celular']").mask("(99) 9999-9999?9").focusout(function(e){var a,n,o;a=e.currentTarget?e.currentTarget:e.srcElement,n=a.value.replace(/\D/g,""),o=$(a),o.unmask(),n.length>10?o.mask("(99) 99999-999?9"):o.mask("(99) 9999-9999?9")}),$(".input-group input").focusout(function(){$(this).val()&&$(this).parent().find(".error").hide()}),$("form#infraEstrutura input").focusout(function(){$(this).parent().parent().removeClass("erro"),console.log("asd")}),$("#formInfraSend").on("click",function(n){n.preventDefault();var o={};return o.nome=$("form#infraEstrutura").find("[name=nome]").val(),o.email=$("form#infraEstrutura").find("[name=email]").val(),o.empresa_nome=$("form#infraEstrutura").find("[name=empresa_nome]").val(),o.empresa_atividade=$("form#infraEstrutura").find("[name=empresa_atividade]").val(),o.empresa_site=$("form#infraEstrutura").find("[name=empresa_site]").val(),o.empresa_cep=$("form#infraEstrutura").find("[name=empresa_cep]").val(),o.empresa_funcionarios=$("form#infraEstrutura").find("[name=empresa_funcionarios]").val(),o.empresa_computadores=$("form#infraEstrutura").find("[name=empresa_computadores]").val(),o.empresa_impressoras=$("form#infraEstrutura").find("[name=empresa_impressoras]").val(),o.empresa_outros=$("form#infraEstrutura").find("[name=empresa_outros]").val(),o.empresa_redeconfigurada=$("form#infraEstrutura").find("[name=empresa_redeconfigurada]").val(),o.nome?o.email&&e(o.email)?($("#formInfraSend").addClass("loading"),void $.ajax({method:"POST",crossDomain:!0,url:a+"/sendInfraEstrutura",contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify(o)}).done(function(e){$(".form-sucesso").show(),$(".form-display").hide()}).fail(function(e,a){$(".form-erro").show()}).always(function(){$("#formInfraSend").removeClass("loading")})):($("form#infraEstrutura").find("[name=email]").focus().parent().parent().addClass("erro"),!1):($("form#infraEstrutura").find("[name=nome]").focus().parent().parent().addClass("erro"),!1)}),$("#formOportunidadeSend").on("click",function(n){function o(e,a){$("form#oportunidade").find("[name="+e+"]").focus();var n=$("form#oportunidade").find("[name="+e+"]").parent().find(".error");$(n).find(".error-message").html(a),$(n).css("display","flex").hide().fadeIn()}n.preventDefault();var t={};return t.nome=$("form#oportunidade").find("[name=nome]").val(),t.celular=$("form#oportunidade").find("[name=celular]").val(),t.email=$("form#oportunidade").find("[name=email]").val(),t.linkedin=$("form#oportunidade").find("[name=linkedin]").val(),t.mensagem=$("form#oportunidade").find("[name=mensagem]").val(),$("form#oportunidade").find(".error").hide(),t.nome?t.celular?t.email?e(t.email)?t.linkedin?($("#formOportunidadeSend").addClass("loading"),void $.ajax({method:"POST",crossDomain:!0,url:a+"/sendOportunidades",contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify(t)}).done(function(e){$(".form-sucesso").show(),$(".form-display").hide()}).fail(function(e,a){$(".form-erro").show()}).always(function(){$("#formOportunidadeSend").removeClass("loading")})):(o("linkedin","Campo Obrigatório"),!1):(o("email","E-mail inválido"),!1):(o("email","Campo Obrigatório"),!1):(o("celular","Campo Obrigatório"),!1):(o("nome","Campo Obrigatório"),!1)})}),$(function(){$(".map-embed").on("click",function(){$(this).toggleClass("active")})}),jQuery(document).ready(function(){if("/"===document.location.pathname||"/en/"===document.location.pathname){var e={};e.method="GET",e.url="https://usabit-api.herokuapp.com/medium",e.contentType="application/json; charset=utf-8",e.dataType="json";var a=["JANEIRO","FEVEREIRO","MARÇO","ABRIL","MAIO","JUNHO","JULHO","AGOSTO","SETEMBRO","OUTUBRO","NOVEMBRO","DEZEMBRO"];$.ajax(e).done(function(e){var n,o,t=$("#medium-template").html(),r=Handlebars.compile(t);$.each(e,function(e,t){console.log(t);var i=new Date(t.date);console.log(i),n={postImg:"https://cdn-images-1.medium.com/max/1000/"+t.img,postTitle:t.title,postSubtitle:t.subtitle,postDate:i.getDate()+" "+a[i.getMonth()]+", "+i.getFullYear(),postLink:"https://medium.com/hotel-coaching/"+t.link,postAuthor:t.author},o=r(n),$("#medium-posts").append(o),console.log(n),console.log("-------------------------------------------------")})}).fail(function(e){console.log("error",e)}).always(function(){$(".medium-loading").hide()})}}),$(function(){$("#banner-fullwidth").owlCarousel({nav:!0,autoplay:!0,autoplaySpeed:1200,autoplayTimeout:8e3,autoplayHoverPause:!0,slideSpeed:1300,items:1,loop:!0,navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]})}),$(function(){$(".portfolio-item a").on("click",function(e){e.preventDefault(),$(".portfolio-item").removeClass("active"),$(".portfolio-display-item").removeClass("active"),$(this).parent().addClass("active"),$(".portfolio-display-item#"+$(this).data("banner")).addClass("active")})}),function(e,a,n,o){"use strict";e(".site-header__open-menu").on("click",function(a){a.preventDefault(),e(".sidenav").addClass("active"),e("html").css("overflow","hidden")}),e(".sidenav__close-menu").on("click",function(a){a.preventDefault(),e(".sidenav").removeClass("active"),e("html").css("overflow","initial")})}(jQuery,window,document);