function toggleMenu () {

    var x = document.getElementById("nav-id");
    if (x.style.display === "none") {

        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// const options = {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};
// document.getElementById("currentdate").textcontent = new Date().toLocaleDateString ('en-US', options);