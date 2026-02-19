    const posts = [
      {
        title: "Hari Ini Aku Belajar Animasi Scroll Lagi",
        date: "19 Februari 2026",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
        excerpt: "Ternyata pakai Intersection Observer + CSS variable jauh lebih smooth daripada scroll event biasa...",
        link: "post.html?id=1"
      },
      {
        title: "Kenapa Tailwind Masih Juara di 2026?",
        date: "15 Februari 2026",
        image: "https://images.unsplash.com/photo-1551650975-60cb5d043c9b?w=800&auto=format&fit=crop",
        excerpt: "Utility-first bukan cuma tren, tapi sudah jadi standar industri. Ini alasannya...",
        link: "post.html?id=2"
      },
      {
        title: "Cikarang Malam – Foto Pakai Phone Doang",
        date: "10 Februari 2026",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop",
        excerpt: "Malam di kawasan industri ternyata punya vibe sendiri kalau difoto pake mode night...",
        link: "post.html?id=3"
      },
      {
        title: "Migrasi dari Next.js ke Astro, Worth It?",
        date: "5 Februari 2026",
        image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&auto=format&fit=crop",
        excerpt: "Loading time turun drastis, bundle size mengecil, tapi ada trade-off...",
        link: "post.html?id=4"
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
