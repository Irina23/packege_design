
jQuery(document).ready(function() {




    jQuery(window).load(function() {



       
    });




    //mobile menu
    jQuery(".navbar-toggle").on("click", function(){
        jQuery(this).next().slideToggle();

    });




    //modal form
    var overlay = $('#overlay');
    var open_modal = $('.open-modal');
    var close = $('.modal_close, #overlay');
    var modal = $('.modal_div');
   

    open_modal.click( function(event){
        event.preventDefault();
        //console.log('open');
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function(){
                $(div)
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
                $('body').addClass('no-scroll');
                
            });
    });

    close.click( function(){
        //console.log('close');
        modal
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                    $(".success_box").removeClass('show');
                    $('body').removeClass('no-scroll');
                }
            );
    });

    $(this).keydown(function(eventObject){
        if (eventObject.which == 27)
            modal.animate({opacity: 0}, 200,
                function(){
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                    $(".success_box").removeClass('show');
                    $('body').removeClass('no-scroll');
                   
                }
            );
    });








    //filter portfolio
    jQuery(".list_filter li").click(function(){
        var nav_active = jQuery(this);
        //console.log(nav_active);
        jQuery('.list_filter li').each(function(){
            jQuery(this).removeClass("active");
        });
        jQuery(nav_active).addClass("active");


        var customType = jQuery(this).attr('data-cat');
        //console.log(customType);
        if(customType==="all") {
            jQuery('.item-portfolio').show();
        }else{
            jQuery('.item-portfolio').each(function(){
                if(jQuery(this).attr('data-cat').indexOf(customType) < 0) jQuery(this).hide(); else jQuery(this).show();
            });
        }


    });







});

