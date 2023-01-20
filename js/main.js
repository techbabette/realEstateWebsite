$(window).ready(function(){
    let input = $("#landing-input");
    let filters = $("#landing-filter");
    let search = $("#landing-search");
    search.hide()
    filters.hide();
    showSearchButton();
})

function showSearchButton()
{
    let input = $("#landing-input");
    let filters = $("#landing-filter");
    let search = $("#landing-search");
    input.click(function(){
        input.animate({width : "75%"}, {
            complete: 
            function(){
                search.show();
                search.animate({opacity: "100%"},{complete:function()
                    {input.animate({width : "50%"},{complete:function(){
                        console.log("Here!");
                        filters.show();
                        filters.animate({opacity : "100%"});
                    }})}})
                }})
            }
            )
    input.blur(function(){
        filters.animate({opacity: "0%"}, {complete: function()
            {
                filters.hide();
                input.animate({width: "75%"}, {complete: function(){
                    search.animate({opacity: "0%"}, {complete: function(){
                        search.hide();
                        input.animate({width : "100%"});
                    }})
            }})
        }
    }
    )
}
)
}