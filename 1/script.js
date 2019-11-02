$('#btn-start').click(function() {
    $('#message').html("Message").css("background-color", "green").parent().css("background-color", "fff4dd").width(150).height(80);   
});

$('#btn-reset').click(function() {
    location.reload();
});

//$('#content').css("color", "red");
//$('article h2').css("color", "red");  // h2 in article == //$('article').find('h2').css("color", "red");
//$('h1 + p').css("color", "red"); //all p before which exist h1
//$('#content').prev().css("color", "red");
//$('#content').next().css("color", "red");
//$('*').next().css("color", "red");  //all tags on page
//$('article > h2').next().css("color", "red");  // all h2 that have 'article' parent
//$('article > *').next().css("color", "red");
//$('.content div').find('input:disabled');



