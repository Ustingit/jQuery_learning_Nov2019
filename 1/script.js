$('#btn-start').click(function() {
    $('#message').html("Message").css("background-color", "green").parent().css("background-color", "fff4dd").width(150).height(80);   
});

$('#btn-reset').click(function() {
    location.reload();
});
























//-------------------------------------------
//8 lesson   https://www.youtube.com/watch?v=xE0tNP2SEDg&list=PLVfMKQXDAhGXQcouhIblV910Rv7lRscH3&index=8
//$('.second').replaceWith("<h2>Hew text</h2>");
//$("<h2>Hew text</h2>").replaceAll(".inner");

// $('.inner').wrap('<div class="new">text in div</div>');
//$('.inner').wrapInner('<div class="new">text in div</div>');  //wraps content of the element

//$('.first').clone().appendTo(".third");

// var p;
// $('button').click(function(){
//     if(p){
//         p.appendTo("body");  //add to end of the element
//         p = null;
//     } else {
//         p = $('.hello').detach();
//     }
// });

//$('.third').empty();  //or remove()













//-------------------------------------------
//7 les  https://www.youtube.com/watch?v=q7zjIHJXuSg&list=PLVfMKQXDAhGXQcouhIblV910Rv7lRscH3&index=7

//var $myDiv = $('<div id="my" class="page">Hello</div>').appendTo("body");  // or .appendTo("#content"); etc

//var $myDiv = $('<div>Hello</div>',{'id': 'my', 'class': 'page'}).appendTo('body');

//var $myDiv = $('<div>Hello</div>').attr({'id': 'my', 'class': 'page'}).appendTo('body');

// var myDiv = document.createElement('div');
// myDiv.id = 'my';
// myDiv.className = "page";

//$('p').after("<hr/>");  // ==  $("<hr/>").insertAfter('p');
//$("p").append("<hr/>");






//-----------------------------------------------
//6th lesson p2 - animation  https://www.youtube.com/watch?v=TM78nW0oEMU&list=PLVfMKQXDAhGXQcouhIblV910Rv7lRscH3&index=6

// $('.anim').click(function(){
//     $(this).animate({
//         'opacity':'-=0.3'
//     }).animate({
//         'height':'+=50px'
//     }).animate({
//         'width':'-=25px'
//     });
// });  

//   jQuery.fx.off = true;  turn off all animations fordebugging

// $('.anim').click(function(){
//     $(this).animate({
//         'opacity':'-=0.3',  // уменьшить текущее значение на 0ю3
//         'height':'+=50px', // + 50 пикселей к текущему
//         'width':'-=25px'
//     });
// });  


// $('.anim').click(function(){
//     $(this).animate({
//         'opacity':0.5,
//         'height':'50px',
//         'width':'250px'
//     });
// });  

// $('.anim').animate({
//     'opacity':'show'
// })








// $('.anim').click(function(){
//     $(this).fadeTo('slow', 0.4);
//     //$(this).fadeOut(1200);   //выцветание изменяет параметр opacity
//     //$(this).fadeIn(1500);
//     //$(this).fadeToggle(3000);  //выцветает а в конце пропадёт
// });








//----------------------------------------------
//5th lesson - animations
// $('.anim').click(function(){
//     $(this).hide("slow");
// });    //fast or speed im ms  //manipulate css properties (display None)

// $('.anim').hide('slow', function(){
//     alert("Hi!");
// });

// $('#stick').click(function(){
//     $("#hide").slideDown('slow');
// });

// $('article h2').click(function(){   //hiding and unhiding the element
//     $(this).next().slideToggle('slow');
//    });








//4th lesson
// $('#quantity').keyup(function(){    // https://www.youtube.com/watch?v=p7ey_crD_UY&list=PLVfMKQXDAhGXQcouhIblV910Rv7lRscH3&index=4
//     var value = $(this).val();   //dublicate text to another input in real time
//     $('#msg').text(value);
// });

// $('a').click(function(){
//     alert('Hello!');
//     event.preventDefault();    // this both can be chnged to just   return false;
//     event.stopPropagation();  //
// });

// $('header').click(function(){
//     alert('Hello!!!!!');
// });








//3rd lesson:
// $('a').attr('href', 'https://github.com/Ustingit/jQuery_learning_Nov2019');
// $('a').html('link changed by script to your github');

// $('article > h2').attr({
//     'id': 'automaticallyGeneratedId',
//     'class': 'automaticallyGeneratedClass'
// });

// var altText = $('img').attr('alt');
// $('img').attr('src', '/img/default.jpeg');

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












