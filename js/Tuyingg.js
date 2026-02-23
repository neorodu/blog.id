/* =====================
   WAKTU & WATERMARK
===================== */
const date = new Date();
const days = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
const months = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];

let hours = date.getHours().toString().padStart(2,"0");
let minutes = date.getMinutes().toString().padStart(2,"0");

const day = days[date.getDay()];
const dateNum = date.getDate();
const month = months[date.getMonth()];
const year = date.getFullYear();

console.log(`${hours}.${minutes} WIB - ${day}, ${dateNum} ${month} ${year}`);

const watermark = document.createElement("div");
watermark.textContent = `${day}, ${dateNum} ${month} ${year}`;
watermark.style = "color:white;opacity:.5;font-size:15px;position:fixed;bottom:25px;left:25px;z-index:150";
document.body.appendChild(watermark);


/* =====================
   TEKS ANIMASI
===================== */
initeksnimasi = teksnimasi.innerHTML;
teksnimasi.innerHTML = "";

function katateksnimasi(){
  new TypeIt("#teksnimasi", {
    strings: [initeksnimasi],
    startDelay: 50,
    speed: 55,
    cursor: true,
    afterComplete: () => {
      teksnimasi.innerHTML = initeksnimasi;
      setTimeout(smn,200);
    }
  }).go();
}


/* =====================
   STATE GLOBAL
===================== */
let fungsi = 0;
let fungsiklik = 0;
let skrg = 1;
let sudahSampaiBawah = false;
let fungsiAud = 0;


/* =====================
   NAVIGASI & FLOW
===================== */
function tes(){
  if(fungsi !== 0) return;

  playaud();
  initom.style = "opacity:0;bottom:0;";
  window.scrollBy({ top: tinggi, behavior: "smooth" });

  fungsi = 1;
  skrg++;

  if(skrg <= 2) setTimeout(smn,700);
  if(skrg === 3) setTimeout(katateksnimasi,500);
  if(skrg === 4) setTimeout(muncultombol,1200);
}

function smn(){
  fungsi = 0;
  initom.style = "";
}

function muncultombol(){
  fungtom = 1;
  Tombol.style = "opacity:1;transform:scale(1)";
}


/* =====================
   AKHIR CERITA
===================== */
function aksiakhir(){
  if(fungsiklik !== 0) return;
  fungsiklik = 1;
  setTimeout(katajudul,100);
}

function katajudul(){
  new TypeIt("#judulakhir", {
    strings: [teksjudulakhir],
    speed: 50,
    cursor: true,
    afterComplete: () => {
      judulakhir.innerHTML = teksjudulakhir;
      setTimeout(katakata,400);
    }
  }).go();
}

function katakata(){
  new TypeIt("#kalimatakhir", {
    strings: [tekskalimatakhir],
    speed: 48,
    cursor: true,
    afterComplete: () => {
      kalimatakhir.innerHTML = tekskalimatakhir;
      judulakhir.style = "opacity:0;transform:scale(0)";
      setTimeout(teksmuncul,350);
      setInterval(berjatuhan,200);
      setTimeout(kataakhir,1000);
    }
  }).go();
}

function teksmuncul(){
  judulakhir.innerHTML = teksjudulakhir2;
  judulakhir.style = "font-family:var(--gaya-font3);font-size:27px";
  stikerakhir.style = "opacity:0;transform:scale(0)";
  setTimeout(gantifotoakhir,400);
}

function gantifotoakhir(){
  stikerakhir.src = stikerakhir2.src;
  stikerakhir.style = "";
}

function kataakhir(){
  new TypeIt("#palingakhir", {
    strings: [tekspalingakhir],
    speed: 50,
    cursor: true,
    afterComplete: () => {
      palingakhir.innerHTML = tekspalingakhir;
      setTimeout(() => {
        fungtom2 = 1;
        TombolWA.style = "opacity:1;transform:scale(1)";
      },500);
    }
  }).go();
}

function menuju(){
  if(fungtom2 === 1){
    window.location = "https://wa.me/6289512595271" + pesanwhatsapp;
  }
}


/* =====================
   AUDIO & HEIGHT
===================== */
function playaud(){
  if(fungsiAud === 0){
    fungsiAud = 1;
    audio.play();
  }
}

tinggi = iniakhir.offsetHeight;
setInterval(() => tinggi = iniakhir.offsetHeight, 300);


/* =====================
   SCROLL EVENT (AMAN)
===================== */
document.addEventListener("scroll", () => {
  if(sudahSampaiBawah) return;

  const documentHeight = document.body.scrollHeight;
  const currentScroll = window.scrollY + window.innerHeight;

  if(currentScroll + 200 > documentHeight){
    sudahSampaiBawah = true;
    initom.style = "opacity:0;bottom:0";
    setTimeout(aksiakhir,10);
  }
});


/* =====================
   LOAD
===================== */
window.addEventListener("load", () => {
  window.scrollTo(0,0);
  setTimeout(() => window.scrollTo(0,0), 500);

  document.querySelector(".overlay").style.display = "none";
  initom.style = "";
  first_stiker.style = "opacity:1;transition:all 2s ease";

  ScrollReveal({ reset:true });
  ScrollReveal().reveal(".show-once",{ reset:false });
  ScrollReveal().reveal(".title",{ duration:2500, origin:"top", distance:"50px" });
  ScrollReveal().reveal(".fade-in",{ delay:200, duration:2500 });
  ScrollReveal().reveal(".slide-right",{ duration:1000, origin:"left", distance:"300px" });
  ScrollReveal().reveal(".slide-up",{ duration:1500, origin:"bottom", distance:"100px" });
});
