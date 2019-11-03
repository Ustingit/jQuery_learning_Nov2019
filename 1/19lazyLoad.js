$(function() {
    $('div').slice(0, 4).show();  //get first 4 elements

    $('#loadMore').on('click', function(e) {
        e.preventDefault();  // actions by default won't be executed
        $('div:hidden').slice(0, 4).slideDown();
    })
})