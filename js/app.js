var pomodoro = {min:25, sec:0};
var rest = {min:5, sec:0};
var pOrigin = {min:25, sec:0};
var rOrigin = {min:5, sec:0};
printNumbers();


function printNumbers() {
    if (document.getElementById("pomodoro")) {
        document.getElementById("pomodoro").innerHTML = ('0' + pomodoro.min).slice(-2) + " " + ":" + " " + ('0' + pomodoro.sec).slice(-2);
    } else if (document.getElementById("rest")) {
        document.getElementById("rest").innerHTML = ('0' + rest.min).slice(-2) + " " + ":" + " " + ('0' + rest.sec).slice(-2);
    }
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
        flip();
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
    if (typeof pClock !== 'undefined') {
        clearInterval(pClock);
    } else if (typeof rClock !== 'undefined') {
        clearInterval(rClock);
    }
    pomodoro.min = pOrigin.min;
    pomodoro.sec = pOrigin.sec;
    rest.min = rOrigin.min;
    rest.sec = rOrigin.sec;
    document.getElementById("play").style.display = 'inline-block';
    document.getElementById("stop").style.display = 'none';
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

function flip() {
    if (document.getElementById("rest"))
        {
            document.getElementById("rest").id = "pomodoro";
            document.getElementById("plus").onclick = function() { 
                edit(plus); 
            };
            document.getElementById("minus").onclick = function() { 
                edit(minus); 
            };
            printNumbers();
        } else if (document.getElementById("pomodoro"))
        {
            document.getElementById("pomodoro").id = "rest";
            document.getElementById("plus").onclick = function() { 
                editRest(plus); 
            };
            document.getElementById("minus").onclick = function() { 
                editRest(minus); 
            };
            printNumbers();
        }
}
