let searhValue = document.getElementById("search-bar")

function grabSearch() {
    if (searhValue.value.toLowerCase() == "mandy's ice cream") { 
        /*document.getElementById("mandy").style.display = "grid";*/ //change flex to something else
        document.getElementById("rocco").style.display = "none";
        document.getElementById("dine").style.display = "none";
        console.log("Function Worked!")
       }
    else if (searhValue.value.toLowerCase() == "rocco thrift$") { 
        document.getElementById("mandy").style.display = "none";
        document.getElementById("dine").style.display = "none";
        console.log("Function Worked!")
       }
    else if (searhValue.value.toLowerCase() == "dine & dip") { 
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

