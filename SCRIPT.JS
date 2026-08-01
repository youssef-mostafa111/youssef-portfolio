// =========================================
// Scroll Reveal
// =========================================

const hiddenElements = document.querySelectorAll(
    "section, .card, .project-card, .education-box, .certificate-card, .language-card, .contact-card"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            entry.target.classList.remove("hidden");

        }

    });

},{
    threshold:0.15
});

hiddenElements.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

// =========================================
// Typing Effect
// =========================================

const text = [

"Junior Network Engineer",

"Cybersecurity Student",

"Junior IT Support "

];

const target = document.querySelector(".hero h2");

let word = 0;
let letter = 0;
let deleting = false;

function typing(){

    const current = text[word];

    if(!deleting){

        target.textContent = current.substring(0,letter);

        letter++;

        if(letter > current.length){

            deleting = true;

            setTimeout(typing,1500);

            return;

        }

    }else{

        target.textContent = current.substring(0,letter);

        letter--;

        if(letter < 0){

            deleting = false;

            word++;

            if(word >= text.length){

                word = 0;

            }

        }

    }

    setTimeout(typing,deleting ? 50 : 90);

}

typing();


// =========================================
// Active Navbar
// =========================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop = section.offsetTop - 150;

if(pageYOffset >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

});


// =========================================
// Progress Bar
// =========================================

const progress = document.createElement("div");

progress.id="progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const scroll = document.documentElement.scrollTop;

const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

const percent = (scroll / height) * 100;

progress.style.width = percent + "%";

});


// =========================================
// Back To Top
// =========================================

const topBtn = document.createElement("button");

topBtn.innerHTML='<i class="fas fa-arrow-up"></i>';

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.classList.add("showTop");

}else{

topBtn.classList.remove("showTop");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// =========================================
// Navbar Shadow
// =========================================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

header.style.boxShadow="0 10px 35px rgba(0,0,0,.35)";

}else{

header.style.boxShadow="none";

}

});


// =========================================
// Floating Image
// =========================================

const image=document.querySelector(".hero-image img");

let position=0;

setInterval(()=>{

position+=0.02;

image.style.transform=`translateY(${Math.sin(position)*10}px)`;

},20);


// =========================================
// Cursor Glow
// =========================================

const glow=document.createElement("div");

glow.id="cursorGlow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});


// =========================================
// Console Message
// =========================================

console.log("%cWelcome 👋","font-size:28px;color:#38bdf8;font-weight:bold;");
console.log("Portfolio Developed by Youssef Mostafa");