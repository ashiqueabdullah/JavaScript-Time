function showTime(){
    var clock=document.getElementById("clock");
    var date =new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    var ses="AM";
    if(h==0){
        h=12;
        ses="AM";
    }
    if(h>12){
        h=h-12;
        ses="PM";
    }
    var time=h + ": " + m + ": " + s + ": "+ ses;
    clock.innerText=time;
    clock.textContent=time;
    setInterval(showTime,1000);
}
showTime();