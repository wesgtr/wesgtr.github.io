var year = new Date();

document.getElementById("updated").textContent = year.getFullYear();

var lastModified = document.lastModified;

document.getElementById("modified").textContent = lastModified;

backToHome = function () {
    window.location.href="../index.html";
}