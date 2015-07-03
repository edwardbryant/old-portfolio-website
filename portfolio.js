
$(document).ready(function(){

    getBlogPosts();

    $('nav').find('#btn-nav').on('click', function() {
        $('nav').find('ul').slideToggle(600);
        return false;
    })

    $('#about-link').on('click', function() {
        window.location.hash = "#about";
    })
    $('#work-link').on('click', function() {
        window.location.hash = "#work";
    })
    $('#posts-link').on('click', function() {
        window.location.hash = "#posts";
    })
    $('#contact-link').on('click', function() {
        window.location.hash = "#contact";
    })

    $('#about-expand').on('click', function() {
        $('#about-extra').toggle(500, function() {
            var more = 'More <i class="fa fa-angle-down"></i>';
            var less = 'Less <i class="fa fa-angle-up"></i>';
            ($('#about-expand').html() === more) ? $('#about-expand').html(less) : $('#about-expand').html(more);
        });
        return false;
    });

    $('#contact-message').on('focusin', function() {
        $(this).css("height", "24rem");
    });

    $('#contact-form').submit(function(e){
        e.preventDefault();
        $(this).fadeOut(500, function(){
            var name = $('#contact-name').val();
            var email = $('#contact-email').val();
            var message = $('#contact-message').val();
            $('#contact-form-msg').html("<div>Message Sent!<br><span>I will get back to you as soon as I can.</span></div>");
            $('#contact-form-msg').fadeIn(500);
            $.post("email-me.php",  {name: name, email: email, message: message} );
        });        
    });

});

var getBlogPosts = function() {
    $.getJSON( "http://www.edwardbryant.com/blog/wp-json/posts", function( data ) {
        var posts = [{},{}];
        // get data on 2 most recent posts 
        for (var i=0;i<2;i++) {
            posts[i]["title"] = '<a href="' + data[i]["link"] + '">' + data[i]["title"] + '</a>';
            var d = new Date(data[i]["date"]); 
            var monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            var m = monthName[d.getMonth()]; 
            posts[i]["date"] = m + " " + d.getDate() + ", " + d.getFullYear();
            var t = data[i]["excerpt"];
            posts[i]["text"] = t.slice(0, t.indexOf("&hellip; ")) + '&hellip; <a href="' + data[i]["link"] + '">MORE</a></p>'; 
        }
        // populate blog post #1
        $('#post1').find('.title').html(posts[0]["title"]);
        $('#post1').find('.date').html("&bull; " + posts[0]["date"] + " &bull;");
        $('#post1').find('.text').html(posts[0]["text"]);
        // populate blog post #2
        $('#post2').find('.title').html(posts[1]["title"]);
        $('#post2').find('.date').html("&bull; " + posts[1]["date"] + " &bull;");
        $('#post2').find('.text').html(posts[1]["text"]);
    });
};
