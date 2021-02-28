// document.getElementById(unliked).style.display = "none";

function changeImg() {
    if (document.getElementById(unliked).src == "none") {
        document.getElementById(unliked).style.display = "block";
        document.getElementById(liked).style.display = "none";
    } else {
        alert("hi");
        document.getElementById(unliked).style.display = "none";
        document.getElementById(liked).style.display = "block";
    }
}