const time = document.getElementById('time');
const date = document.getElementById('date');
const youtube = document.getElementById('youtube');
const taskbar = document.getElementById('taskbar');
const chatGpt = document.getElementById('chatGpt');
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
    if (hours > 12) {
        time.textContent = `${hours - 12}:${minutes} PM`;
        date.textContent = `${localDate.getMonth() + 1}/${localDate.getDate()}/${localDate.getFullYear()}`;
        return;
    } else if (hours === 12) {
        time.textContent = `12:${minutes} PM`;
        date.textContent = `${localDate.getMonth() + 1}/${localDate.getDate()}/${localDate.getFullYear()}`;
        return;
    } else if (hours === 0) {
        time.textContent = `12:${minutes} AM`;
        date.textContent = `${localDate.getMonth() + 1}/${localDate.getDate()}/${localDate.getFullYear()}`;
        return;
    }

    time.textContent = `${hours}:${minutes} AM`;
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

chatGpt.addEventListener('click', () => {
    window.location.href = 'https://chatgpt.com/';
});

const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {});
        taskbar.classList.remove("display-none")
    } else {
        document.exitFullscreen().catch(err => {});
    }
};

wifiBtn.addEventListener('click', () => {
    memeSound.play();
});

document.addEventListener('keydown', (e) => {
    if (e.key === "F12") {
        debugger;
    } 
});


document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.my-pc');
    let draggedElement = null;

    items.forEach(item => {
        item.addEventListener('mousedown', (e) => {
            if (e.button === 0) {
                draggedElement = e.target.closest('.my-pc');
                if (draggedElement) {
                    draggedElement.classList.add('dragging');
                    draggedElement.initialX = e.clientX - draggedElement.getBoundingClientRect().left;
                    draggedElement.initialY = e.clientY - draggedElement.getBoundingClientRect().top;
                    e.preventDefault();
                }
            }
        });

        item.addEventListener('mouseup', () => {
            if (draggedElement) {
                draggedElement.classList.remove('dragging');
                draggedElement = null;
            }
        });
    });

    document.addEventListener('mousemove', (e) => {
        if (draggedElement) {
            const rect = draggedElement.getBoundingClientRect();
            const newX = e.clientX - draggedElement.initialX;
            const newY = e.clientY - draggedElement.initialY;

            const maxX = window.innerWidth - rect.width;
            const maxY = window.innerHeight - rect.height;

            draggedElement.style.position = 'absolute';
            draggedElement.style.left = `${Math.min(Math.max(0, newX), maxX)}px`;
            draggedElement.style.top = `${Math.min(Math.max(0, newY), maxY)}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        if (draggedElement) {
            draggedElement.classList.remove('dragging');
            draggedElement = null;
        }
    });

    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === "F12") {
            debugger;
        }
    });
});
