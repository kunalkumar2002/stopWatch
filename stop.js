console.log("hello")
let second = 0;
let minutes = 0;
let hours = 0;

let id = null;

let timer = document.getElementsByClassName('timer');
let start = document.getElementById('start');
let pause = document.getElementById('stop');
let reset = document.getElementById('reset');

function display(){
     second += 1;
     if(second === 60){
        second = 0;
        minutes++;
        if(minutes === 60){
            minutes = 0;
            hours++;
        }
     }
     let h = hours < 10 ? "0" + hours : hours;
     let m = minutes < 10 ? "0" + minutes : minutes;
     let s = second < 10 ? "0" + second : second;
     timer[0].innerHTML = `${h} : ${m} : ${s}`;  
}

start.addEventListener('click',function(){
    if(id !== null){
        clearInterval(id);
    }
    id = setInterval(display , 1000);
    
    console.log(id);

});

pause.addEventListener('click',function(){
    //id = 1;
    clearInterval(id);
    //id = true;

})

reset.addEventListener('click',function(){
    //id = 1;
    //id = true;
    clearInterval(id);
    second = 0;
    minutes= 0;
    hours = 0;
    timer[0].innerHTML = '00 : 00 : 00';
});