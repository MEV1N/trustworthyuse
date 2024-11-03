

function getWrongDirections() {
    const input = document.getElementById("destination-input").value.trim();
    if (input ===""){
        alert("Please enter a destination!!");
        return;
    }
    // Open a new tab with the fake map and directions
    window.open("fake-map.html", "_blank");
}
