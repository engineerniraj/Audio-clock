var msg = new SpeechSynthesisUtterance();

let Clock = () =>{


    let today= new Date();
    let hrs = today.getHours()
    let mins = today.getMinutes();
    let secs = today.getSeconds();
    let period= "AM";

    if(hrs==12){
        hrs = 12;
    }else if(hrs>=12){
        hrs = hrs - 12;
        period = "PM";
    }
    hrs = hrs<10 ? "0" + hrs : hrs;
    mins = mins<10 ? "0" + mins : mins;
    secs = secs<10 ? "0" + secs : secs;

    let time = `${hrs}:${mins}:${secs}:${period}`;
    document.getElementById('clock').innerText = time;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    

    
     setTimeout(Clock,1000);

     
 
    
};
 
  Clock();


  let Audio = () =>{

    let today= new Date();
    let hrs = today.getHours()
    let mins = today.getMinutes();
    
    if(hrs==12){
        hrs = 12;
    }else if(hrs>=12){
        hrs = hrs - 12;
        period = "PM";
    }
    hrs = hrs<10 ? "0" + hrs : hrs;
    mins = mins<10 ? "0" + mins : mins;

     msg.text= hrs ;
     window.speechSynthesis.speak(msg);
     msg.text= mins ;
     window.speechSynthesis.speak(msg);
    
     setTimeout(Audio,20000);
    
};

Audio();














