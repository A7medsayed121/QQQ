
/* =========================
   ENTER WEBSITE
========================= */

function enterSite(){

    const intro = document.getElementById("intro");
    const music = document.getElementById("music");
    const button = document.getElementById("musicButton");

    // إخفاء شاشة البداية
    intro.style.opacity = "0";

    setTimeout(() => {
        intro.style.display = "none";
    }, 1200);

    // تشغيل الأغنية
    music.volume = 0.7;

    music.play()
        .then(() => {
            button.innerHTML = "Ⅱ";
            playing = true;
        })
        .catch(error => {
            console.log("Music error:", error);
        });


}


/* =========================
   CURSOR
========================= */

const cursor = document.querySelector(".cursor");
const ring = document.querySelector(".cursor-ring");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    ring.style.left = e.clientX + "px";
    ring.style.top = e.clientY + "px";

});


/* =========================
   COUNTER
========================= */

const startDate = new Date("2024-11-10T00:00:00");

function updateCounter(){

    const now = new Date();

    let diff = now - startDate;

    let seconds = Math.floor(diff / 1000);

    let days = Math.floor(seconds / 86400);

    seconds %= 86400;

    let hours = Math.floor(seconds / 3600);

    seconds %= 3600;

    let minutes = Math.floor(seconds / 60);

    seconds %= 60;

    document.getElementById("days").innerText =
        days.toLocaleString();

    document.getElementById("hours").innerText =
        String(hours).padStart(2,"0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2,"0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2,"0");

}

setInterval(updateCounter,1000);

updateCounter();


/* =========================
   SCROLL REVEAL
========================= */

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("active");

            }

        });

    },
    {
        threshold:.15
    }
);

document.querySelectorAll(".reveal").forEach(el => {

    observer.observe(el);

});


/* =========================
   CHOICE RESPONSE
========================= */

function showResponse(type){

    const section =
        document.getElementById("response");

    const title =
        document.getElementById("responseTitle");

    const text =
        document.getElementById("responseText");

    if(type === "talk"){

        title.innerText =
            "Then let's talk.";

        text.innerText =
            "No arguments. No pressure. Just you and me, honestly talking about everything.";

    }

    if(type === "time"){

        title.innerText =
            "Take your time.";

        text.innerText =
            "I understand. I'll give you the space you need. You don't owe me an immediate answer.";

    }

    if(type === "notyet"){

        title.innerText =
            "I understand.";

        text.innerText =
            "I'm not going to force anything. I just wanted you to know that my apology is real.";

    }

    section.style.display = "block";

    section.scrollIntoView({
        behavior:"smooth"
    });

}


/* =========================
   MUSIC
========================= */

let playing = false;

function toggleMusic(){

    const music =
        document.getElementById("music");

    const button =
        document.getElementById("musicButton");

    if(!music.src){

        alert(
            "Add your song in the <audio> section at the top of the file."
        );

        return;

    }

    if(playing){

        music.pause();

        button.innerHTML = "♪";

        playing = false;

    }else{

        music.play();

        button.innerHTML = "Ⅱ";

        playing = true;

    }

}
