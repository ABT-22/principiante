document.getElementById("colorButton").addEventListener("click", function() {
    let body = document.body;
    let currentColor = getComputedStyle(body).backgroundColor;

    if (currentColor === "rgb(224, 242, 233)") { // Equivalente a #e0f2e9
        body.style.backgroundColor = "#d1f7c4";
        body.style.color = "#1d3557";
    } else {
        body.style.backgroundColor = "#e0f2e9";
        body.style.color = "#2c3e50";
    }
});
