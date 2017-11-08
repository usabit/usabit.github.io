FROM jekyll/builder

ADD . /srv/jekyll

RUN gem install jekyll-multiple-languages-plugin

CMD jekyll serve