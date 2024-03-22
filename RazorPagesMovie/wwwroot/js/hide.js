function toggleSumForm() {
    var sumForm = document.getElementById("sumForm");
    if (sumForm.style.display === "none" || sumForm.style.display === "") {
        sumForm.style.display = "block";
    } else {
        sumForm.style.display = "none";
        document.getElementById("result").style.display = "none";
    }
}