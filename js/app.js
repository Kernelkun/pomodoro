var min = 25;
var sec = 0;
var origin = {min:25, sec:0};
printNumbers();


function printNumbers() {
    document.getElementById("test").innerHTML = ('0' + min).slice(-2) + " " + ":" + " " + ('0' + sec).slice(-2);
}

function myTimer() {
    if (min == 0 && sec == 1) {
        clearInterval(myVar);
    }
    
    if (sec == 0) {
        sec = 59;
        min--;
    } else {
        sec--;
    }
    printNumbers();
}

function startStop(status) {
    if (status == stop) {
        clearInterval(myVar);
        document.getElementById("play").style.display = 'inline-block';
        document.getElementById("stop").style.display = 'none';
    } else {
        myVar = setInterval(function(){ myTimer() }, 1000);
        document.getElementById("stop").style.display = 'inline-block';
        document.getElementById("play").style.display = 'none';
    }
}

function reset() {
    clearInterval(myVar);
    min = origin.min;
    sec = origin.sec;
    printNumbers();
}

function edit(e) {
    if (e == plus) {
        min++;
        origin.min++;
        printNumbers();
    } else if (min > 0) {
        min--;
        origin.min--;
        printNumbers();
    }
}
