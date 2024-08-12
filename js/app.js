const time = document.getElementById('time');
const date = document.getElementById('date');
const youtube = document.getElementById('youtube');
const taskbar = document.getElementById('taskbar');
const wifiBtn = document.getElementById('wifi-btn');
const memeSound = document.getElementById('memeSound');
const minecraft = document.getElementById('minecraft');
const instagram = document.getElementById('instagram');
const monkeyType = document.getElementById('monkeyType');
const lockScreen = document.getElementById('lockScreen');
const dateAndTimeWrapper = document.getElementById('dateAndTimeWrapper');

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

setInterval(() => {
    const localDate = new Date();
    const currentDay = localDate.getDay();
    const currentWeekday = weekdays[currentDay];
    const currentMonth = months[localDate.getMonth()];
    dateAndTimeWrapper.setAttribute('title', `${currentWeekday}, ${currentMonth} ${localDate.getDate()}, ${localDate.getFullYear()}`);
    const hours = localDate.getHours();
    let minutes = localDate.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    time.textContent = `${hours}:${minutes}`;
    date.textContent = `${localDate.getMonth() + 1}/${localDate.getDate()}/${localDate.getFullYear()}`;
}, 1000);

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

youtube.addEventListener('click', () => {
    window.location.href = 'https://youtube.com/@zakiydev404';
});

minecraft.addEventListener('click', () => {
    window.location.href = 'https://classic.minecraft.net/?join=lRyrkOSCMBuQHX2a';
});

lockScreen.addEventListener('click', () => {
    window.location.href = 'https://lock-screen-sigma.vercel.app/';
});

instagram.addEventListener('click', () => {
    window.location.href = 'https://www.instagram.com/zakiy_dev/';
});

monkeyType.addEventListener('click', () => {
    window.location.href = 'https://monkeytype.com/';
});

const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {});
        taskbar.classList.remove("display-none")
    } else {
        document.exitFullscreen().catch(err => {});
    }
};

document.addEventListener("DOMContentLoaded", () => {
    taskbar.classList.add("display-none")
    toggleFullScreen();
});

wifiBtn.addEventListener('click', ()=> {
    memeSound.play()
})
