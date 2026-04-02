function normalizeProfileId(a){return a.trim().toLowerCase()}
document.getElementById("addprofilebtn").addEventListener("click",function(){
    var a=normalizeProfileId(document.getElementById("profileid").value);
    window.open("https://www.google.com/maps/search/"+encodeURIComponent(a));
});
$(document).ready(function(){
    // DayLink Maps Scraper - No authentication required
    console.log("DayLink Maps Scraper loaded successfully");
});
