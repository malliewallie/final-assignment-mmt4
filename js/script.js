// Als DOM klaar is
$(document).ready(function() {

    // Accordion
    $(function() {
        $("#accordion").accordion({ animate: 120, heightStyle: "content" });
    });

    // Dag en Nacht schakel
    $('.rechtsnav').click(function() {
        // als class aanwezig is
        if ($(this).hasClass('active')) {
            //verwijder de class
            $(this).removeClass('active');
            console.log('light');
            // footer en header hero's
            $('footer').removeClass('footergradient');
            $('.heroimg').removeClass('herogradient');
            // tekst
            $('.navtxt').css({
                'color': '#CC0085'
            });
            $('h2').css({
                'color': '#CC0085;'
            });
            $('.acctxt').css({
                'color': '#CC0085'
            });
            $('a').css({
                'color': '#CC0085'
            });
            $('.btncta').css({
                'background-color': 'white'
            });
            // Elementen
            $('#naviga').css({
                'background-color': 'white'
            });
            // logo's
            $('.rechtsnav').removeClass('dark');
            $('.rechtsnav').addClass('light');
            $('.linksnav').removeClass('logodark');
            $('.linksnav').addClass('logolight');
            $('.blimg1').removeClass('blimg1');
            // logo blok 1
            $('#dark1').removeClass('blimg1dark');
            $('#dark1').addClass('blimg1');
            // logo blok2
            $('#dark2').removeClass('blimg2dark');
            $('#dark2').addClass('blimg2');
            // logo blok3
            $('#dark3').removeClass('blimg3dark');
            $('#dark3').addClass('blimg3');
            // main
            $('main').css({
                'background-color': 'white'
            });
            $('.LCSblokjes').css({
                'background-color': '#F4F2FF'
            });
            $('body').css({
                'background-color': 'white'
            });
            $('.accbalk').css({
                'background-color': 'white'
            });
            $('#btncta1').css({
                'background-color': '#CC0085',
                'color': 'white'
            });
            $('.h3cta').css({
                'color': '#CC0085'
            });
            $('.supcont').css({
                'background-color': '#CC0085',
                'color': 'white'
            });
            $('.supportcontainer').css({
                'background-color': '#F4F2FF'
            });
            $('p').css({
                'color': '#FFAFE3'
            });


        } else {
            // voeg class toe
            $(this).addClass('active');
            console.log('dark');
            // footer en header hero's
            $('footer').addClass('footergradient');
            $('.heroimg').addClass('herogradient');
            // tekst
            $('.h3cta').css({
                'color': 'white'
            });
            $('.navtxt').css({
                'color': 'white'
            });
            $('h2').css({
                'color': 'white'
            });
            $('.acctxt').css({
                'color': 'white'
            });
            $('a').css({
                'color': 'white'
            });
            $('.btncta').css({
                'background-color': 'blue'
            });
            // Elementen
            $('#naviga').css({
                'background-color': 'blue'
            });
            // main
            $('.accbalk').css({
                'background-color': 'black'
            });
            $('body').css({
                'background-color': 'black'
            });
            $('main').css({
                'background-color': 'black'
            });
            $('.LCSblokjes').css({
                'background-color': 'blue'
            });
            $('p').css({
                'color': 'lightgrey'
            });
            $('.supcont').css({
                'background-color': '#0076FF'
            });
            $('.supportcontainer').css({
                'background-color': 'blue'
            });
            // logo zon
            $('.light').removeClass('light');
            $('.rechtsnav').removeClass('light');
            $('.rechtsnav').addClass('dark');
            //logo
            $('.logolight').removeClass('logolight');
            $('.linksnav').removeClass('logolight');
            $('.linksnav').addClass('logodark');
            // logo blok1
            $('.blimg1').removeClass('blimg1');
            $('#dark1').removeClass('blimg1');
            $('#dark1').addClass('blimg1dark');
            // logo blok2
            $('.blimg2').removeClass('blimg2');
            $('#dark2').removeClass('blimg2');
            $('#dark2').addClass('blimg2dark');
            // logo blok3
            $('.blimg3').removeClass('blimg3');
            $('#dark3').removeClass('blimg3');
            $('#dark3').addClass('blimg3dark');


        }
    });
    $('.slider').slick({
        dots: true,
        infinite: true,
        variableWidth: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
// Videospeler

$('video').each(function(i, el) {
    var $player = $(el).parent();

    $("img[src='img/play-btn.svg']").click(function() {
        $(this).attr("src", "img/pause-btn.svg");
    })
    $('.playpause', $player).click(function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $("img[src='img/play-btn.svg']").click(function() {
                $(this).attr("src", "img/pause-btn.svg");
            })
            el.pause();
        } else {
            $(this).addClass("active");
            $("img[src='img/pause-btn.svg']").click(function() {
                $(this).attr("src", "img/play-btn.svg");
            })
            el.play();
        }
    });
    $('.rewind').click(function() {
        el.currentTime = el.currentTime - 10;
    });
    $('.forward').click(function() {
        el.currentTime = el.currentTime + 10;
    });

});

var video = videojs('#my-video1').ready(function() {
    var player = this;

    player.on('ended', function() {
        $('.modalpopup1').css({
            "visibility": "visible",
        });
        $('.modalpopup1').click(function() {
            $(this).css({
                "visibility": "hidden",
            });
        });
    });
});

var video = videojs('#my-video2').ready(function() {
    var player = this;

    player.on('ended', function() {
        $('.modalpopup2').css({
            "visibility": "visible",
        });
        $('.modalpopup2').click(function() {
            $(this).css({
                "visibility": "hidden",
            });
        });

    });
});

var video = videojs('#my-video3').ready(function() {
    var player = this;

    player.on('ended', function() {
        $('.modalpopup3').css({
            "visibility": "visible",
        });
        $('.modalpopup3').click(function() {
            $(this).css({
                "visibility": "hidden",
            });
        });

    });
});

var video = videojs('#my-video4').ready(function() {
    var player = this;

    player.on('ended', function() {
        $('.modalpopup4').css({
            "visibility": "visible",
        });
        $('.modalpopup4').click(function() {
            $(this).css({
                "visibility": "hidden",
            });
        });

    });
});

var video = videojs('#my-video5').ready(function() {
    var player = this;

    player.on('ended', function() {
        $('.modalpopup5').css({
            "visibility": "visible",
        });
        $('.modalpopup5').click(function() {
            $(this).css({
                "visibility": "hidden",
            });
        });

    });
});