(function ($) {

    $('a[href*="#"]').on('click' ,function (event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 750, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });

    $('#menuBt').on('click', function () {
        $(this).toggleClass('ativo');
        $('.menu').toggleClass('ativo');
    });
    
    function string_to_slug(str) {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();

        // remove accents, swap ñ for n, etc
        var from =  "àáäâãèéëêìíïîòóöôõùúüûñç·/_,:;";
        var to =    "aaaaaeeeeiiiiooooouuuunc------";
        for (var i = 0, l = from.length; i < l; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes

        return str;
    }

    // $('.carrossel').slick({
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    //     fade: true,
    //     cssEase: 'linear',
    //     arrows: false,
    //     dots: true
    // });

})(jQuery);
