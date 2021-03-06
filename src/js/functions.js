
jQuery(document).ready(function() {




    /*jQuery(window).load(function() {

        $('.list_portfolio').mixItUp({
            controls: {
                toggleFilterButtons: true
            },
            callbacks: {
                onMixLoad: function(state, instance){
                    instance._activeFilter = '';
                }
            },
            load: {
                filter: 'all'
            },
            animation: {
                enable: false
            }
        });

       
    });*/




    //mobile menu
    jQuery(".navbar-toggle").on("click", function(){
        jQuery(this).next().slideToggle();

    });


    //load item


    $('.list_portfolio').on('click', '.more_item', function (e) {
        e.preventDefault();
        $('.more_item').show();
        $.ajax({
            url: '',
            dataType: 'html',
            success: function(html) {
                $('.list_portfolio').append(html);
                $('.more_item').hide();
            }
        });
    });



    //filter portfolio

    $(function() {
        var clickFunction = function(hash) {
            var hrefVal;
            if (typeof hash === 'string') {
                hash = hash.substring(1);
                hrefVal = hash;
            }

            $('.home .list_filter li[data-cat="'+hrefVal+'"]').trigger("click");
        }







        jQuery('.list_portfolio').each(function () {


            var $container = $(this),
                elements = [];
            $container.find('.item').each(function () {
                elements.push(this);
            });


            // console.log(elements)

            jQuery(".home .list_filter").on('click', 'li', function () {
                var nav_active = jQuery(this);
                //if (nav_active.hasClass('active')) return;

                jQuery('.list_filter li').each(function () {
                    jQuery(this).removeClass("active");
                });
                jQuery(nav_active).addClass("active");


                var customType = jQuery(this).attr('data-cat');

                if (customType === "all") {
                    window.location.hash = "";
                    jQuery(elements).each(function () {
                        jQuery(this).appendTo($container);
                    })
                } else {
                    jQuery(elements).each(function () {
                        if (customType === jQuery(this).attr('data-cat')) {
                            jQuery(this).appendTo($container);
                        } else {
                            jQuery(this).detach();
                        }
                    })
                }

            });


            $('.more_item').on('click', function(e){
                //e.preventDefault();
                var pageNumber = $(this).attr('data-page');

                var pageNumberLast = $(this).attr('data-page-last');
                var pageNumberNext = Number(pageNumber) + 1;
                if (pageNumberNext == pageNumberLast){
                    $('.more_item').hide();

                }
                console.log(pageNumberNext);
                var filterActive =  $('.list_filter li.active').attr('data-cat');
                console.log(filterActive);


                $(this).attr('data-page', pageNumberNext);
                $.ajax({
                    type: "GET",
                    url: "/portfolio",
                    data: {
                        'page': pageNumberNext
                    },
                    success: function(data){

                        $container.append(data).find('.item').each(function () {
                            elements.push(this);
                        });


                        $('.home .list_filter li[data-cat="'+filterActive+'"]').trigger('click');


                    }
                });

            });

        });

        if (window.location.hash) {
            clickFunction(window.location.hash);
        }




    });


    //lang
    $(".active-lang").on('click',function(){
        $(this).next('.lang-list').slideToggle();
    });
    $(".lang-list").on('click','a',function(){
        var $this = $(this);
        var text = $this.html();
        $('.lang-list').slideUp();
        $this.closest('li').addClass('active').siblings().removeClass('active');
        $('.active-lang').text(text);
        //console.log(text);
    });


    //form validate
    jQuery("form").validate({

        rules:{
            name:{
                required: true,
                minlength: 2
            },
            email:{
                required: true,
                email: true
            }
        }
    });







});

