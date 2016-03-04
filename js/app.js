var pomodoro = {min:0, sec:5};
var rest = {min:0, sec:5};
var pOrigin = {min:25, sec:0};
var rOrigin = {min:25, sec:0};
printNumbers();


function printNumbers() {
    document.getElementById("pomodoro").innerHTML = ('0' + pomodoro.min).slice(-2) + " " + ":" + " " + ('0' + pomodoro.sec).slice(-2);
    document.getElementById("rest").innerHTML = ('0' + rest.min).slice(-2) + " " + ":" + " " + ('0' + rest.sec).slice(-2);

}

function pomodoroClock() {
    if (pomodoro.min == 0 && pomodoro.sec == 0) {
        clearInterval(pClock);
        document.getElementById("play").onclick = function() { 
            control('playRest'); 
        };
        document.getElementById("stop").onclick = function() {
            control('stopRest');
        }
        rClock = setInterval(function(){ restClock() }, 1000);
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

function restClock() {
    if (rest.min == 0 && rest.sec == 0) {
        clearInterval(rClock);
        document.getElementById("play").onclick = function() { 
            control('playPomodoro'); 
        };
        document.getElementById("stop").onclick = function() {
            control('stopPomodoro');
        };
        document.getElementById("play").style.display = 'none';
        document.getElementById("stop").style.display = 'none';
        return;
    }
    
    if (rest.sec == 0) {
        rest.sec = 59;
        rest.min--;
    } else {
        rest.sec--;
    }
    printNumbers();
}

function control(status) {
    if (status == 'stopPomodoro') {
        clearInterval(pClock);
        document.getElementById("play").style.display = 'inline-block';
        document.getElementById("stop").style.display = 'none';
    } else if (status == 'playPomodoro') {
        pClock = setInterval(function(){ pomodoroClock() }, 1000);
        document.getElementById("stop").style.display = 'inline-block';
        document.getElementById("play").style.display = 'none';
    }
    
    if (status == 'stopRest') {
        clearInterval(rClock);
        document.getElementById("play").style.display = 'inline-block';
        document.getElementById("stop").style.display = 'none';
    } else if (status == 'playRest') {
        rClock = setInterval(function(){ restClock() }, 1000);
        document.getElementById("stop").style.display = 'inline-block';
        document.getElementById("play").style.display = 'none';
    }
}

function reset() {
    clearInterval(pClock);
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
