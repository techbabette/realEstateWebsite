$(window).ready(function(){
    let input = $("#landing-input");
    let search = $("#landing-search");
    search.hide()
    input.click(function(){
        input.animate({width : "75%"}, {complete: function(){search.show();search.animate({opacity: "100%"})}})
    })
    input.blur(function(){
        search.animate({opacity: "0%"}, {complete: function(){search.hide();input.animate({width: "100%"})}})
    })
})