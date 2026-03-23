    const posts = [
     
             {
        title: " Bagaimana jika kita sudah putus asa sama hidup, seperti tidak melihat jalan keluar sama sekali? ",
        date: "23 maret 2026",
        image: "img/bisnis.jpg",
        excerpt: " Saya benar benar akrab dengan kondisi ini. Misalnya saat hasil kerja jauh di bawah kebutuhan. banyak,. ",
        link: "Post6.html?id=2"
      }, 
      {
        title: "Mengapa Banyak Bisnis Bertahan, Tapi Tidak Pernah Benar-Benar Berkembang?",
        date: "19 Februari 2026",
        image: "img/bisnis.jpg",
        excerpt: "Mari kita lihat,Di banyak kota, kita bisa menemukan bisnis yang sudah berjalan.",
        link: "Post2.html?id=2"
      },
      {
        title: "Apa bukti nyata dari jodoh datang di waktu yang tepat?",
        date: "15 Februari 2026",
        image: "img/jodoh.jpg",
        excerpt: "Bukan ketika semuanya sudah sempurna,",
        link: "Post3.html?id=3"
      },
      {
        title: "Bagaimana cara paling ampuh menghadapi rasa jatuh cinta?",
        date: "10 Februari 2026",
        image: "img/cikarang.jpg",
        excerpt: "Jatuh cinta itu indah tapi deras kalau tidak di sikapi dengan baik",
        link: "Post4.html?id=4"
      },
      {
        title: "Berhentilah marah terhadap sifat alami perempuan.",
        date: "5 Februari 2026",
        image: "img/berhenti.jpg",
        excerpt: "Sifat alami wanita tidak akan pernah berubah",
        link: "Post5.html?id=5"
      }
    ];

    const container = document.getElementById("posts-container");

    posts.forEach(post => {
      const card = document.createElement("a");
      card.href = post.link;
      card.className = "card";
      card.innerHTML = `
        <div class="card-img" style="background-image: url('${post.image}')"></div>
        <div class="card-content">
          <h2>${post.title}</h2>
          <span class="date"><i class="fa-regular fa-calendar"></i> ${post.date}</span>
          <p>${post.excerpt}</p>
        </div>
      `;
      container.appendChild(card);
    });
    
    
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

// ================= PARTICLE GENERATOR =================
function createParticle() {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  const size = Math.random() * 6 + 2;
  particle.style.width = size + "px";
  particle.style.height = size + "px";

  particle.style.left = Math.random() * window.innerWidth + "px";
  particle.style.bottom = "-10px";

  particle.style.animationDuration = (Math.random() * 5 + 5) + "s";

  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 10000);
}

setInterval(createParticle, 200);
