$(window).ready(function(){
    let input = $("#landing-input");
    let filters = $("#landing-filter");
    filters.hide();
    input.click(function(){showFilterButton()});
    input.blur(function(){hideFilterButton()});
    filters.click(function(event){event.preventDefault();showFilterModal()});
    $(window).click(function(event){
        if (event.target === $('#filterModal')[0])
        {
            $("#filterModal").hide('fast')
            input.focus();
        }
     })
})

function showFilterButton()
{
    let input = $("#landing-input");
    let filters = $("#landing-filter");
        input.animate({width : "75%"}, {
            complete: 
            function(){
                filters.show();
                filters.animate({opacity: "100%"})
                }})
}
function hideFilterButton()
{
    let input = $("#landing-input");
    let filters = $("#landing-filter");
    filters.animate({opacity: "0%"}, {complete: function(){
        filters.hide();
        input.animate({width : "100%"});
    }})
}

function showFilterModal()
{
    let modal = $("#filterModal");
    modal.show('fast');
}