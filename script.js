// =========================
// CONTADOR
// =========================

const dataInicial = new Date("2025-12-12T00:00:00");

function atualizarContador() {

    const agora = new Date();

    const diferenca = agora - dataInicial;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (diferenca % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferenca % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const segundos = Math.floor(
        (diferenca % (1000 * 60)) /
        1000
    );

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

}

// =========================
// EFEITO PARALLAX
// =========================

document.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth)-0.5;

const y=(e.clientY/window.innerHeight)-0.5;

document.body.style.backgroundPosition=

`${x*25}px ${y*25}px`;

});


// =========================
// BRILHO NO TÍTULO
// =========================

const titulo=document.querySelector("header h1");

setInterval(()=>{

titulo.style.textShadow=

`0 0 ${20+Math.random()*25}px #4ab8ff,

0 0 ${45+Math.random()*35}px #0077ff`;

},900);

setInterval(atualizarContador,1000);

atualizarContador();


// =========================
// GALERIA AUTOMÁTICA
// =========================

window.addEventListener("load", () => {

    const tela = document.getElementById("loading");

    if (!tela) return;

    setTimeout(() => {
        tela.style.opacity = "0";
        tela.style.pointerEvents = "none";

        setTimeout(() => {
            tela.remove();
        }, 1000);

    }, 2500);

});


// =========================
// CORAÇÕES
// =========================

document.addEventListener("click",(e)=>{

    const coracao=document.createElement("div");

    coracao.innerHTML="💙";

    coracao.style.position="fixed";

    coracao.style.left=e.clientX+"px";

    coracao.style.top=e.clientY+"px";

    coracao.style.fontSize="25px";

    coracao.style.pointerEvents="none";

    coracao.style.zIndex="9999";

    coracao.style.transition="1.5s";

    document.body.appendChild(coracao);

    setTimeout(()=>{

        coracao.style.transform="translateY(-150px) scale(2)";

        coracao.style.opacity="0";

    },10);

    setTimeout(()=>{

        coracao.remove();

    },1500);

});


// =========================
// EFEITO AO ROLAR
// =========================

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    sections.forEach(sec=>{

        const topo=sec.getBoundingClientRect().top;

        if(topo<window.innerHeight-100){

            sec.style.opacity="1";

            sec.style.transform="translateY(0px)";

        }

    });

});

sections.forEach(sec=>{

    sec.style.opacity="0";

    sec.style.transform="translateY(70px)";

    sec.style.transition=".8s";

});


// =========================
// MENSAGEM
// =========================

console.log("💙 Meu destino sempre será você.");

// =========================
// TELA DE ABERTURA
// =========================

const entrar = document.getElementById("entrar");
const intro = document.getElementById("intro");

if (entrar && intro) {

    entrar.addEventListener("click", () => {

        intro.style.opacity = "0";

        setTimeout(() => {
            intro.style.display = "none";
        }, 900);

    });

}

// =========================
// ESTRELAS
// =========================

for(let i=0;i<180;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*3+"s";

star.style.animationDuration=(1+Math.random()*3)+"s";

document.body.appendChild(star);

}



// =========================
// CORAÇÕES
// =========================

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💙";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*20)+"px";

heart.style.animationDuration=(6+Math.random()*5)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

},400);

// =========================
// CARROSSEL
// =========================

const slides=document.querySelector(".slides");

const bolinhas=document.querySelectorAll(".indicadores span");

let slideAtual=0;

function mudarSlide(){

slideAtual++;

if(slideAtual>1){

slideAtual=0;

}

slides.style.transform=`translateX(-${slideAtual*100}%)`;

bolinhas.forEach(b=>b.classList.remove("ativo"));

bolinhas[slideAtual].classList.add("ativo");

}

setInterval(mudarSlide,3500);

// =========================
// CARTA
// =========================

const envelope = document.querySelector(".envelope");

const abrirCarta = document.getElementById("abrirCarta");

abrirCarta.addEventListener("click",()=>{

envelope.classList.toggle("aberto");

if(envelope.classList.contains("aberto")){

abrirCarta.innerHTML="Fechar Carta 💙";

}else{

abrirCarta.innerHTML="Abrir Carta 💙";

}

});

// =========================
// MENSAGEM AO ENTRAR
// =========================

window.addEventListener("load",()=>{

setTimeout(()=>{

console.log("💙 Bem-vinda, meu amor.");

},1000);

});

// =========================
// CURSOR GLOW
// =========================

const glow=document.createElement("div");

glow.className="cursorGlow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX-10+"px";

glow.style.top=e.clientY-10+"px";

});


// =========================
// COMETAS
// =========================

function criarCometa(){

const c=document.createElement("div");

c.className="cometa";

c.style.left=Math.random()*window.innerWidth+"px";

c.style.top=Math.random()*200+"px";

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},4000);

}

setInterval(criarCometa,5000);

// =========================
// LOADING
// =========================

window.addEventListener("load",()=>{

setTimeout(()=>{

const tela=document.getElementById("loading");

tela.style.opacity="0";

setTimeout(()=>{

tela.remove();

},1000);

},3000);

});

// =========================
// EFEITO MÁQUINA DE ESCREVER
// =========================

const texto = "Meu destino é você.";

const destino = document.getElementById("digitando");

let indice = 0;

function escrever(){

if(indice < texto.length){

destino.innerHTML += texto.charAt(indice);

indice++;

setTimeout(escrever,120);

}

}

setTimeout(escrever,3500);

// =========================
// PRESENTE
// =========================

const presente = document.getElementById("giftBox");

const carta = document.getElementById("amor");

carta.style.display = "none";

presente.addEventListener("click",()=>{

presente.classList.add("aberta");

setTimeout(()=>{

document.getElementById("presente").style.display="none";

carta.style.display="block";

carta.scrollIntoView({

behavior:"smooth"

});

},1200);

});

// =========================
// FUNDO COM PARTÍCULAS
// =========================

const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const particles = [];

for (let i = 0; i < 180; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4
    });
}

function animateParticles() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{

        p.x += p.dx;
        p.y += p.dy;

        if(p.x<0)p.x=canvas.width;
        if(p.x>canvas.width)p.x=0;
        if(p.y<0)p.y=canvas.height;
        if(p.y>canvas.height)p.y=0;

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle="rgba(120,200,255,.8)";
        ctx.fill();

    });

    for(let i=0;i<particles.length;i++){

        for(let j=i+1;j<particles.length;j++){

            let dx=particles[i].x-particles[j].x;
            let dy=particles[i].y-particles[j].y;
            let dist=Math.sqrt(dx*dx+dy*dy);

            if(dist<120){

                ctx.beginPath();

                ctx.moveTo(particles[i].x,particles[i].y);

                ctx.lineTo(particles[j].x,particles[j].y);

                ctx.strokeStyle="rgba(80,180,255,"+(1-dist/120)/4+")";

                ctx.stroke();

            }

        }

    }

    requestAnimationFrame(animateParticles);

}

animateParticles();
