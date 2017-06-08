(function() {
    document.querySelector('#menu-icon').addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('open');

        if (this.classList.contains('open')){
            document.querySelector('#menu-overlay').classList.add('open');
            document.querySelector('body').classList.add('main-menu-open');
        }else{
            document.querySelector('#menu-overlay').classList.remove('open');
            document.querySelector('body').classList.remove('main-menu-open');
        }
        console.log(this);
    });
})();