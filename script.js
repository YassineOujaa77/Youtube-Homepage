const btn = document.getElementById("search");
const searchField = document.getElementById("search-field");
const darkBtn = document.getElementById("dark");
const page = document.querySelector("body");
const link = document.querySelector("#link");

btn.addEventListener('click',function(){
    let li = "https://www.youtube.com/results?search_query="+searchField.value; 
    link.href = li;

});

darkBtn.addEventListener('click',function(){
    if( page.style.backgroundColor === "white")
        page.style.backgroundColor = "black";
    else
      page.style.backgroundColor = "white";

});


console.log();