var searhValue = document.getElementById("search-bar")

function grabSearch() {
    if (searhValue.value == "Mandy's Ice Cream") { 
        /*document.getElementById("mandy").style.display = "grid";*/ //change flex to something else
        document.getElementById("rocco").style.display = "none";
        document.getElementById("dine").style.display = "none";
        console.log("Function Worked!")
       }
    else if (searhValue.value == "Rocco Thrift$") { 
        document.getElementById("mandy").style.display = "none";
        document.getElementById("dine").style.display = "none";
        console.log("Function Worked!")
       }
    else if (searhValue.value == "Dine & Dip") { 
        document.getElementById("mandy").style.display = "none";
        document.getElementById("rocco").style.display = "none";
        console.log("Function Worked!")
       }
    else {
        document.getElementById("mandy").style.display = "none";
        document.getElementById("rocco").style.display = "none";
        document.getElementById("dine").style.display = "none";
        console.log("Could not get item.")
    }
}

