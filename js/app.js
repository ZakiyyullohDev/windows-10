const time = document.getElementById('time');
const date = document.getElementById('date');
const youtube = document.getElementById('youtube');
const minecraft = document.getElementById('minecraft');
const instagram = document.getElementById('instagram');
const monkeyType = document.getElementById('monkeyType');
const lockScreen = document.getElementById('lockScreen');

setInterval(() => {
    const localDate = new Date();
    const hours = localDate.getHours();
    let minutes = localDate.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    time.textContent = `${hours}:${minutes}`;
    date.textContent = `${localDate.getMonth() + 1}/${localDate.getDate()}/${localDate.getFullYear()}`;
}, 1000);

document.addEventListener("contextmenu", (e)=> {
    e.preventDefault()
})

youtube.addEventListener('click', ()=> {
    window.location.href = 'https://youtube.com/@zakiydev404'
})

minecraft.addEventListener('click', ()=> {
    window.location.href = 'https://classic.minecraft.net/?join=lRyrkOSCMBuQHX2a'
})

lockScreen.addEventListener('click', ()=> {
    window.location.href = 'https://lock-screen-sigma.vercel.app/'
})

instagram.addEventListener('click', ()=> {
    window.location.href = 'https://www.instagram.com/zakiy_dev/'
})

monkeyType.addEventListener('click', ()=> {
    window.location.href = 'https://monkeytype.com/'
})
