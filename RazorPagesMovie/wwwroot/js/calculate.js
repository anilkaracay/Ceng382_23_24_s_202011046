function calculateSum() {
    var input1 = document.getElementById("sumInput1").value;
    var input2 = document.getElementById("sumInput2").value;
    var sum = parseFloat(input1) + parseFloat(input2);
    if (!isNaN(sum)) {
        document.getElementById("result").style.display = "block";
        document.getElementById("result").innerHTML = "The sum is: " + sum;
    } else {
        document.getElementById("result").style.display = "none";
    }
}