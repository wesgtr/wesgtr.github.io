function toggleMenu () {
    var x = document.getElementById("nav-id");
    if (x.style.display === "none") {

        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

var dateString = dayNames[day] + ", " + monthNames[month] + " " + date + ", " + currentYear;
document.getElementById("current-date").innerHTML = dateString;
