jQuery(document).ready(function() {

  // Verifica se estou na home do site
  if ((document.location.pathname === '/') || (document.location.pathname === '/en/')) {
    ////////////
    // MEDIUM //
    ////////////

    var ajaxRequest = {};
    ajaxRequest.method = 'GET';
    ajaxRequest.url = 'https://medium-usasite.wedeploy.io';
    ajaxRequest.contentType = 'application/json; charset=utf-8';
    ajaxRequest.dataType = 'json';

    var meses = ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'];

    $.ajax(ajaxRequest)
        .done(function(response) {

            var source = $("#medium-template").html();
            var template = Handlebars.compile(source);
            var context;
            var html;

            $.each(response, function(key, post) {
                console.log(post);
                var postDate = new Date(post.date);
                console.log(postDate);
                context = {
                    postImg: 'https://cdn-images-1.medium.com/max/1000/' + post.img,
                    postTitle: post.title, postSubtitle: post.subtitle,
                    postDate: postDate.getDate() + ' ' + meses[postDate.getMonth()] + ', ' + postDate.getFullYear(),
                    postLink: 'https://medium.com/hotel-coaching/' + post.link,
                    postAuthor: post.author
                };
                html = template(context);
                $('#medium-posts').append(html);
                console.log(context);
                console.log('-------------------------------------------------');
            });

        })
        .fail(function(error) {
            console.log('error', error);
        })
        .always(function() {
            $('.medium-loading').hide();
        });
  }

}); //end of "document ready" event
