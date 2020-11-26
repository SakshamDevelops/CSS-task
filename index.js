document.onreadystatechange = function() {
    if (document.readyState === "complete") {
        document.querySelector("body").style.visibility = "visible";
        document.querySelector(".loader").style.display= "none";
    } else {
        document.querySelector(".loader").style.visibility = "visible";
        document.querySelector("body").style.visibility = "hidden";
    }
};
