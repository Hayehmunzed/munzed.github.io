const timeSpan = document.getElementsByClassName('time');
const dateSpan = document.getElementsByClassName('date');
function displayTime(){
    const time = new Date();
    const showTime = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    const showDate = time.getDay() + "/" + time.getMonth() + "/" + time.getFullYear();
    for(let i of timeSpan){ i.innerHTML = showTime;}  
    for(let i of dateSpan){ i.innerHTML = showDate;}  
}

console.log(timeSpan);
setInterval(displayTime, 1000)
