var pomodoro = {min:25, sec:0};
var rest = {min:5, sec:0};
var pOrigin = {min:25, sec:0};
var rOrigin = {min:25, sec:0};
printNumbers();


function printNumbers() {
    document.getElementById("pomodoro").innerHTML = ('0' + pomodoro.min).slice(-2) + " " + ":" + " " + ('0' + pomodoro.sec).slice(-2);
    document.getElementById("rest").innerHTML = ('0' + rest.min).slice(-2) + " " + ":" + " " + ('0' + rest.sec).slice(-2);

}

function myTimer() {
    if (pomodoro.min == 0 && pomodoro.sec == 0) {
        clearInterval(myVar);
        return;
    }
    
    if (pomodoro.sec == 0) {
        pomodoro.sec = 59;
        pomodoro.min--;
    } else {
        pomodoro.sec--;
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
    pomodoro.min = pOrigin.min;
    pomodoro.sec = pOrigin.sec;
    printNumbers();
}

function edit(e) {
    if (e == plus) {
        pomodoro.min++;
        pOrigin.min++;
        printNumbers();
    } else if (pomodoro.min > 0) {
        pomodoro.min--;
        pOrigin.min--;
        printNumbers();
    }
}

function editRest(e) {
    if (e == plus) {
        rest.min++;
        rOrigin.min++;
        printNumbers();
    } else if (rest.min > 0) {
        rest.min--;
        rOrigin.min--;
        printNumbers();
    }
}
