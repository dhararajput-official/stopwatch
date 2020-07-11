var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;

function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    secHeading.innerHTML = min;
    minHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
}
function stop(){

}
function start(){

    function timer(){
  
        msec++
        msecHeading.innerHTML=msec;
        if (msec>=100)
        {
            sec++;
            msec=0;
            secHeading.innerHTML = sec;
            
        }
        else if(sec>=60)
        {
            min++;
            sec=0;
            minHeading.innerHTML = min;
        }
    
    }
    interval = setInterval(timer,10);
    var x = document.getElementById("stop").disabled = true;
}

function stop()
{
        clearInterval(interval);
        var x = document.getElementById("stop").disabled = false;
}





