
$(document).ready(function(){

    $('nav').find('#btn-nav').on('click', function() {
        $.playSound('sfx/sound2');
        $('nav').find('ul').slideToggle(600);
        return false;
    })

    $('nav').find('li').on('click', function() {
        $.playSound('sfx/sound2');
    })

    $('#about-expand').on('click', function() {
        $('#about-extra').toggle(500, function() {
            var more = 'More <i class="fa fa-angle-down"></i>';
            var less = 'Less <i class="fa fa-angle-up"></i>';
            $.playSound('sfx/sound2');
            ($('#about-expand').html() === more) ? $('#about-expand').html(less) : $('#about-expand').html(more);
        });
        return false;
    })

    // populate recent blog post data.
    getBlogPosts();

});

var getBlogPosts = function() {

    // TODO - replace hand-coded data with API calls to WP-API.

    var data = {
        1: {
            "title": "Example Post Title Number One",
            "date": "February 20, 2015",
            "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. deserunt mollitia animi, id est laborum et dolorum fuga."
        },
        2: {
            "title": "Another Example Post Title, The Sequel",
            "date": "March 1, 2015",
            "text": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."
        }
    }

    // populate data

    $('#post1').find('.title').html(data[1]["title"]);
    $('#post1').find('.date').html("&bull; " + data[1]["date"] + " &bull;");
    $('#post1').find('.text').html(data[1]["text"] + ' <a href="#">More &hellip;</a>');

    $('#post2').find('.title').html(data[2]["title"]);
    $('#post2').find('.date').html("&bull; " + data[2]["date"] + " &bull;");
    $('#post2').find('.text').html(data[2]["text"] + ' <a href="#">More &hellip;</a>');

}; 