document.querySelector("button").onclick = function () {
    let num1 = document.querySelector("#num-1").value;
    let num2 = document.querySelector("#num-2").value;
    let out = document.querySelector("#out");


    if (num1 > num2) {
        out.innerHTML = num1 + "-Больше";
    }
    else if (num2 > num1) {
        out.innerHTML = num2 + "-Больше";

    }
    else {
        out.innerHTML = "Равны";
    }
}