
jQuery(document).ready(function() {




    jQuery(window).load(function() {



       
    });




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
    
 



});

