$('.skillbar').each(function(){
    $(this).find('.skillbar-bar').animate({
        width:$(this).attr('data-percent')
    }, 4000);  
    
    // children ищет только на уровне детей, а файнд на всех уровнях вложенности ниже данного элемента
});