console.log("hello")
let second = 0;
let minutes = 0;
let hours = 0;

let stateOfWatch = "Not Running";
let id = null;
let count = 0;

let timer = document.getElementsByClassName('time');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let lapcount = document.getElementById('count')
let laplist = document.getElementById('lap-list')

//handling start button functionality through function
function timerdisplay(){
    second++;
    let s = second < 10 ? '0' + second: second;
    timer[2].innerHTML = `${s}`;
    if(second === 60){
        second = 0;
        minutes++;
        let m = minutes < 10 ? '0' + minutes:minutes;
        timer[1].innerHTML = `${m} :`
        if(minutes === 60){
            minutes = 0;
            hours++;
            let h = hours < 10 ? '0' + hours : hours;
            timer[0].innerHTML = `${h} :`
        }
    }
}

//massage handler function()

function massagehandler(text){
    alert(text);
}

start.addEventListener('click',function(){
    if(stateOfWatch === "Not Running" || stateOfWatch === "Stopped"){ 
        id = setInterval(timerdisplay,1000);
        //marking watch is running;
        stateOfWatch = "Running";
        
    }
    else{
        //poping alert it,s already running
        massagehandler('timer is already running');
    }
    count++;
    
})

//handling stop button 

stop.addEventListener('click',function(){
    if(id !== null){
        clearInterval(id);
    }
    //after stop button clicked making state of watch is stoped
    stateOfWatch = 'Stopped';
    //changing html text if start button to resume
    start.innerText = 'resume';

    //printing lap count;
    let c = count < 10 ? '0' + count:count;
    lapcount.innerHTML = `${c}`;
    
    //calling runtime() to check runtime of lap
    lapruntime();
})

//handling reset button

reset.addEventListener('click' , function(){
    clearInterval(id);
    second = 0;
    minutes = 0;
    hours = 0;
    //making start ineer text agin resume to start
    start.innerText= 'Start';
    //making state of watch is not running
    stateOfWatch = "Not Running";
    //change to the initial state of hours,minutes and second
    timer[0].innerHTML = '00 :';
    timer[1].innerHTML = '00 :'
    timer[2].innerHTML = '00';
    //making lap count again 0
    lapcount.innerHTML = `${0}`;
    //making lap list innerhtml again 0;
    laplist.innerHTML = '';

})

//checking how many tme taken in a Lap
function lapruntime(){
    
    laplist.innerHTML = '';
    const li = document.createElement('li');
    if(hours === 0){
        li.innerHTML = `Lap Number ${count} at ${minutes}min : ${second}sec`;
    }else{
        li.innerHTML = `Lap Number ${count} at ${hours}hr : ${minutes}min : ${second}sec`;
    }
    
    laplist.append(li);
}