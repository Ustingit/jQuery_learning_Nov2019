$('#btn-start').click(function() {
    $('#message').html("Message").css("background-color", "green").parent().css("background-color", "fff4dd").width(150).height(80);   
});

$('#btn-reset').click(function() {
    location.reload();
});


$('a').attr('href', 'https://github.com/Ustingit/jQuery_learning_Nov2019');
$('a').html('link changed by script to your github');

$('article > h2').attr({
    'id': 'automaticallyGeneratedId',
    'class': 'automaticallyGeneratedClass'
});

var altText = $('img').attr('alt');
$('img').attr('src', '/img/default.jpeg');

//$('#content').toggle('box');   // hiding of the element (set display : one)

// $('#content').addClass('name');
// $('#content').removeClass(function(i, value){
//     return "box";
// });

//$('#content').css("color", "red");
//$('article h2').css("color", "red");  // h2 in article == //$('article').find('h2').css("color", "red");
//$('h1 + p').css("color", "red"); //all p before which exist h1
//$('#content').prev().css("color", "red");
//$('#content').next().css("color", "red");
//$('*').next().css("color", "red");  //all tags on page
//$('article > h2').next().css("color", "red");  // all h2 that have 'article' parent
//$('article > *').next().css("color", "red");
//$('.content div').find('input:disabled');

// $('.box').css({
//     'color': 'green',
//     'font-size': '12px',  // can be changed to   fontSize: '12px'
//     'margin-left': '10px'   // can be changed to   marginLeft: '10px'
// });

// $('#content').css('height', function(i, value) {
//     return parseFloat(value) * 1;    // https://www.youtube.com/watch?v=eFrtW9O7Rtk&list=PLVfMKQXDAhGXQcouhIblV910Rv7lRscH3&index=3
// })












