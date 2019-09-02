
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#zbtn').fadeIn(); 
        } else { 
            $('#zbtn').fadeOut(); 
        } 
    }); 
    $('#zbtn').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});