$(window).ready(function(){
    let input = $("#landing-input");
    let filters = $("#landing-filter");
    let datalist = $("#boroughs");
    let apply = $("#landing-apply");
    fillDataList();
    filters.hide();
    input.click(function(){showFilterButton()});
    input.blur(function(){hideFilterButton()});
    input.focusout(function(){datalist.hide('fast')})
    apply.click(function(event){event.preventDefault();hideFilterModal()});
    filters.click(function(event){event.preventDefault();showFilterModal()});
    $(window).click(function(event){
        if(event.target == $("#landing-page")){
            datalist.hide();
        }
        if (event.target === $('#filterModal')[0])
        {
            $("#filterModal").hide('fast')
            input.focus();
            datalist.show('fast')
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
function hideFilterModal()
{
    let input = $("#landing-input");
    let datalist = $("#boroughs");
    $("#filterModal").hide()
    input.focus();
    console.log(datalist);
    datalist.show('slow')
    console.log(datalist);
}
function fillDataList()
{
    let datalist = document.querySelector("#boroughs")
    datalist.innerHTML = "";
    let places = new Array('Brooklyn', 'The Bronx', 'Manhattan', 'Queens', 'Staten Island'), numbers = new Array('5', '4', '3', '2', '1');
    for(place in places)
    {
        if(place == "1");
        {
            console.log(place);
            let option = document.createElement("a");
            option.href = "#";
            option.classList.add("mk-text-center")
            option.innerText = `${places[place]} (${numbers[place]})`;
            datalist.appendChild(option);
        }
    }
}