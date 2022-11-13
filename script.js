let buttonSubmit = document.getElementById("submit").onclick = calculate;
let buttonReset = document.getElementById("reset").onclick = reset;

function calculate() {
    let capital = document.getElementById("capital").value;
    let years = document.getElementById("years").value;
    let percentage = document.getElementById("percentage").value / 100;
    let result = document.getElementById("result");
    result.value = capital * Math.pow( (1 + (percentage / 12)), (12 * years)).toFixed(2);
}
function reset() {
    document.getElementById("capital").value = null;
    document.getElementById("years").value = null;
    document.getElementById("percentage").value = null;
    document.getElementById("result").value = null;
}