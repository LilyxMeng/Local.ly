// document.getElementById(unliked).style.display = "none";

var check;

function changeImg() {
    if (check == null || check == false) {
        alert("hi");
        document.getElementById(unliked).style.display = "block";
        document.getElementById(liked).style.display = "none";
        check = true;
    } else {
        alert("hi");
        document.getElementById(unliked).style.display = "none";
        document.getElementById(liked).style.display = "block";
        check = false;
    }
}

if (document.getElementById(unliked).style.display == "block") {
    alert("hi");
}

document.getElementById(unliked).style.display == "none";

document.getElementById(liked).style.display == "block";