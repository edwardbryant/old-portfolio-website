
$(document).ready(function(){

    $('#about-expand').on('click', function() {
        $('#about-extra').toggle(500, function() {
            var more = 'More <i class="fa fa-angle-down"></i>';
            var less = 'Less <i class="fa fa-angle-up"></i>';
            ($('#about-expand').html() === more) ? $('#about-expand').html(less) : $('#about-expand').html(more);
        });
    })





});
