//meniu bar button
function myFunction() {
    var x = document.getElementById("mynav");
    if (x.className === "baras") {
        x.className += " responsive";
    } else {
        x.className = "baras";
    }
}

//change background
document.body.style.backgroundColor = "#71AFB0";
