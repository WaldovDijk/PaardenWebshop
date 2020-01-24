$(document).ready(function(){
    $('.thumb a').mouseover(function(e){
        e.preventDefault();
        $('.imgbox img').attr("src" , $(this).attr("href"));
    })
})