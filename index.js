function updateTime(){
    let now = new Date();
    let hours = now.getHours();
    let meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');;
    let seconds = now.getSeconds().toString().padStart(2, '0');;
    let time = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = time;
}

function updateDate(){
    const today = new Date();
    let day = today.getDay();
    let date = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();

    switch(day){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }

    switch(month){
        case 0:
            month = "Januray";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    }

    let dateString = `${day} ${date} ${month} ${year}`
    document.getElementById("date").textContent = dateString;
}

updateDate();
updateTime();
setInterval(updateTime, 1000);