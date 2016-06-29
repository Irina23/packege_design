
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
    jQuery(".home .list_filter").on('click','li',function(){
        var nav_active = jQuery(this);

        jQuery('.list_filter li').each(function(){
            jQuery(this).removeClass("active");
        });
        jQuery(nav_active).addClass("active");


        var customType = jQuery(this).attr('data-cat');

        if(customType==="all") {
            jQuery('.list_portfolio .item').removeClass('hidden');
        }else{
            jQuery('.list_portfolio .item').each(function(){
                if(customType === jQuery(this).attr('data-cat')) jQuery(this).removeClass('hidden'); else jQuery(this).addClass('hidden');
            });
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

