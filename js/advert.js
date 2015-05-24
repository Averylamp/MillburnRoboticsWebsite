//This is just scripting practice, feel free to delete this file


setInterval(function(){flash()}, 2000);
document.querySelector("#advertText").style.display = "inline-block";
document.querySelector("#advertText").style.marginBottom = "100";
document.querySelector("#advert").style.color.margin = "20";
function flash(){
    document.querySelector("#advertText").style.color = "#ff0000";
    setTimeout(function(){document.querySelector("#advertText").style.color = "#00000F";}, 1000);
}