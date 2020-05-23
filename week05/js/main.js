function toggleMenu () {
    var x = document.getElementById("nav-id");
    if (x.style.display === "none") {

        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.getElementById("current-date").innerHTML = today;
