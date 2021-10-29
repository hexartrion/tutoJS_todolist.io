const clock = document.querySelector("#clock");

function currentTime()
{
    const time = new Date();

    const currentYear = time.getFullYear();
    const currenMonth = time.getMonth()+1;
    const currentDate = time.getDate();
    const currentDay = time.getDay();
    const week = ["일","월","화","수","목","금","토"];


    const currentHour = String(time.getHours()).padStart(2,"0");
    const currentMinute = String(time.getMinutes()).padStart(2,"0");
    const currentSeconds = String(time.getSeconds()).padStart(2,"0");

    clock.innerHTML = 
    `${currentYear}년 ${currenMonth}월 ${currentDate}일` +
    ` ${week[currentDay]}요일` + `<br>`+
    `${currentHour}:${currentMinute}:${currentSeconds}`;
}


currentTime();

setInterval(currentTime, 1000);