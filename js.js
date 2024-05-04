

setInterval(showtime,1000);


function showtime(){
    const time =new Date();
    var bb=time.getUTCHours(time);
    let hour=time.getHours();
    let minutes=time.getMinutes();
    let secounds=time.getSeconds();
    let am_pm="AM";
    let date=time.toDateString();
    var tt = time.getTimezoneOffset();
    
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    if(hour<10){
        hour="0"+hour;
    }
    if(minutes<10){
        minutes="0"+minutes;
    }
    if(secounds<10){
        secounds="0"+secounds;

    }



    let currentTime=hour+":"+minutes+":"+secounds+" "+am_pm;

    document.getElementById("clock").innerHTML=currentTime;
    document.getElementById("date").innerHTML=date;

    
}
showtime();



