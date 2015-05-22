//This is just scripting practice, feel free to delete this file


setInterval(function () {
    flash();
}, 2000);

var text = document.getElementById("advertText");
var image = document.getElementById("advert");

text.style.display = "inline-block";
text.style.marginBottom = 100;
image.style.color.margin = "20";

function flash() {
    text.style.color = "#ff0000";
    setTimeout(function () {
        text.style.color = "#00000F";
    }, 1000);
}