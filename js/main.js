let places = [{name: 'Brooklyn', amount:"5"}, {name: 'The_Bronx', amount:"4"}, {name: 'Manhattan', amount:"3"}, {name: 'Queens', amount:"2"}, {name: 'Staten_Island', amount:"1"}]
$(window).ready(function(){
    let input = $("#landing-input");
    let filters = $("#landing-filter");
    let datalist = $("#boroughs");
    let apply = $("#landing-apply");
    let form = document.querySelector("#landing-form");
    fillDataList(places);
    input.focusout(function(){datalist.hide('fast')})
    input.on("click",function(){
        datalist.show('fast');
    })
    input.on("input",(function()
    {
        let unos = this.value;
        filteredList = places.filter(function(el){if(el.name.toUpperCase().indexOf(unos.trim().toUpperCase())!= -1){return el}});
        fillDataList(filteredList)
        datalist.show('fast');
    }))
    input.keydown(function(event){
        if(event.which === 13){
            event.preventDefault();
            input.val(datalist.children().first().val());
            form.submit();
        }
    })
    apply.click(function(event){event.preventDefault();hideFilterModal()});
    filters.click(function(event){event.preventDefault();showFilterModal()});
    $(window).click(function(event){
        if(event.target === $("#landing-page")){
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
    $("#filterModal").hide('fast')
    input.focus();
    console.log(datalist);
    datalist.show('slow')
    console.log(datalist);
}
function fillDataList(placeList)
{
    let datalist = document.querySelector("#boroughs")
    datalist.innerHTML = "";
    if(placeList.length == 0)
    {
        let option = document.createElement("p");
        option.classList.add("mk-text-center")
        option.innerText = `No listings found that match your search paramaters`;
        datalist.appendChild(option);
    }
    else{
        for(place in placeList)
        {
                let option = document.createElement("a");
                let form = document.querySelector("#landing-form");
                option.href = "#";
                option.addEventListener("click", function(event){
                    event.preventDefault();
                    form.submit();
                })
                option.classList.add("mk-text-center")
                option.value = `${placeList[place].name}`;
                option.innerText = `${placeList[place].name.replaceAll("_", " ")} (${placeList[place].amount})`;
                datalist.appendChild(option);
        }
    }
}