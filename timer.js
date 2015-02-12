//tells browsers to call myTimer() every 1000 milliseconds/one second
var myVar = setInterval(function(){myTimer()}, 1000);
var startTime;   
var elapsedTimeSec; 

//incrementing every second
function myTimer() {
    elapsedTimeSec += 1;  

}

function myStopFunction() {
    clearInterval(myVar);
}

function startTimer (){
    var d = new Date(); //from Jan 1970
    startTime = d.toLocaleTimeString(); //converts to local readable time string 
    elapsedTimeSec = 0; //initialized
}

function getElapsedTime() {
    var hrs = Math.floor(elapsedTimeSec / 3600); //3600 seconds in an hour
    elapsedTimeSec = elapsedTimeSec - hrs*3600;
    var mins = Math.floor(elapsedTimeSec / 60); 
    elapsedTimeSec = elapsedTimeSec - mins*60;
    var secs = elapsedTimeSec;
    
    var strElapsedTime = hrs.toString(10) + " " + "hours" + " " + mins.toString(10) + " " + "minutes" + " " + secs.toString(10) + " " + "seconds";

    var res = document.getElementById('results');
    res.innerHTML = strElapsedTime;
}


