var min = 0;
var sec = 20;
var myVar = setInterval(function(){ myTimer() }, 1000);

var status = 0;

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
    document.getElementById("test").innerHTML = ('0' + min).slice(-2) + " " + ":" + " " + ('0' + sec).slice(-2);
}

function startStop() {
    if (status == 0) {
        clearInterval(myVar);
        status = 1;
        document.getElementById("startStop").innerHTML = "Play";
    } else {
        status = 0;
        myVar = setInterval(function(){ myTimer() }, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
    }
}

function reset() {
    clearInterval(myVar);
    min = sec = 0;
    document.getElementById("test").innerHTML = ('0' + min).slice(-2) + " " + ":" + " " + ('0' + sec).slice(-2);
}


/*document.getElementById("test").innerHTML = d.getMinutes();*/
