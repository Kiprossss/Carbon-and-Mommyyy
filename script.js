/* 🕯 RITUAL */

setTimeout(()=>{
ritual.style.display="none";
home.classList.remove("hidden");
},4000);

/* 🎵 MUSIC */

document.body.addEventListener("click",()=>{
document.getElementById("bg-music").play();
},{once:true});

/* ⏳ TIMER */

const startDate = new Date("2025-10-31T00:00:00");

function updateTimer() {

  const now = new Date();

  // --------- MONTHS ---------
  let months =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth());

  // build the candidate anniversary for this month
  let anniversary = new Date(startDate);
  anniversary.setFullYear(now.getFullYear(), now.getMonth(), startDate.getDate());

  // if that day doesn't exist (Feb 30 etc.) → JS rolls forward → push back
  if (anniversary.getDate() !== startDate.getDate()) {
    anniversary = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  }

  // if we haven't reached it yet → go to previous month
  if (now < anniversary) {
    months--;

    anniversary = new Date(startDate);
    anniversary.setFullYear(now.getFullYear(), now.getMonth() - 1, startDate.getDate());

    if (anniversary.getDate() !== startDate.getDate()) {
      anniversary = new Date(now.getFullYear(), now.getMonth(), 0);
    }
  }

  // --------- TIME DIFFERENCE ---------
  let diff = now - anniversary;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);

  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * (1000 * 60);

  const seconds = Math.floor(diff / 1000);

  document.getElementById("timer").innerHTML = `
    ${months} months ${days} days 🖤<br>
    ${hours} hours ${minutes} minutes ${seconds} seconds
  `;
}

setInterval(updateTimer, 1000);
updateTimer();

/* 🌙 GREETING */

const hour = new Date().getHours();

if(hour<5) greeting.innerText="In the deepest night, you are mine";
else if(hour<12) greeting.innerText="Good morning, my dark light";
else if(hour<18) greeting.innerText="You are my eternal dusk";
else greeting.innerText="Good evening, my immortal love";

window.addEventListener("DOMContentLoaded", () => {

/* 💬 UNIVERSAL BUBBLE */

window.showBubble = function(array){

  const bubble = document.getElementById("love-bubble");

  bubble.innerText = array[Math.floor(Math.random()*array.length)];

  bubble.classList.remove("show");
  void bubble.offsetWidth;
  bubble.classList.add("show");
};


/* 🖤 WHISPER */

window.whisper = function(){

  const input = document.getElementById("whisperInput");

  if(!input.value.trim()) return;

  const bubble = document.getElementById("love-bubble");

  bubble.innerText = input.value;

  bubble.classList.remove("show");
  void bubble.offsetWidth;
  bubble.classList.add("show");

  input.value="";
};

});

/* 🌌 STARS */

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let stars = Array.from({length:60},()=>({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*1.2
}));

function drawStars(){
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.fillStyle="#6e5aa6";
stars.forEach(s=>{
ctx.beginPath();
ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
ctx.fill();
});
requestAnimationFrame(drawStars);
}
drawStars();

/* 🌙 MOON VISIBILITY */

moon.style.opacity = (hour>=18||hour<=5)?"0.18":"0.08";

/* 🥀 LOVE LETTER */

setTimeout(()=>{
loveLetter.style.opacity=1;
},20000);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}