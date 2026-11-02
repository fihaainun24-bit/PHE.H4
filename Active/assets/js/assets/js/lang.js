/* ============================================
   PHE - Language Switcher (ID / EN)
   ============================================ */

const translations = {
  id: {
    /* ===== NAVIGASI ===== */
    "nav.beranda":        "Beranda",
    "nav.tentang":        "Tentang Kami",
    "nav.sejarah":        "Sejarah",
    "nav.struktur":       "Struktur Organisasi",
    "nav.kontak":         "Kontak & Maps",

    /* ===== HERO / BERANDA ===== */
    "hero.title":         "Menjaga Ketahanan Energi Nasional",
    "hero.desc":          "PT Pertamina Hulu Energi (PHE) sebagai Subholding Upstream Pertamina mengelola portofolio hulu migas di dalam dan luar negeri — berkontribusi 65% produksi minyak dan 37% produksi gas nasional.",
    "hero.btn":           "Jelajahi",

    /* ===== SECTION TITLES ===== */
    "section.tentang.tag":    "Profil Perusahaan",
    "section.tentang.title":  "Tentang Kami",
    "section.sejarah.tag":    "Perjalanan Perusahaan",
    "section.sejarah.title":  "Sejarah",
    "section.struktur.tag":   "Manajemen",
    "section.struktur.title": "Struktur Organisasi",
    "section.kontak.tag":     "Hubungi Kami",
    "section.kontak.title":   "Kontak & Maps",

    /* ===== TOMBOL DETAIL ===== */
    "btn.detail.about":     "Lihat Detail Perusahaan",
    "btn.detail.sejarah":   "Lihat Sejarah Lengkap",
    "btn.detail.struktur":  "Lihat Struktur Lengkap",
    "btn.detail.kontak":    "Lihat Kontak Lengkap",

    /* ===== SEJARAH MINI ===== */
    "timeline.1989.title": "PT Aroma Operations Services",
    "timeline.1989.desc":  "Berdiri 17 November 1989 untuk mendukung kilang petrokimia Cilacap.",
    "timeline.2002.title": "PT Pertahulu Energy",
    "timeline.2002.desc":  "Berganti nama seiring pemisahan usaha hulu-hilir Pertamina.",
    "timeline.2007.title": "PT Pertamina Hulu Energi",
    "timeline.2007.desc":  "Nama resmi PHE disahkan melalui RUPS 29 Juni 2007.",
    "timeline.2021.title": "Subholding Upstream",
    "timeline.2021.desc":  "PHE mengambil alih 11 anak perusahaan hulu dan beroperasi sebagai Subholding.",

    /* ===== KONTAK ===== */
    "kontak.kantor":      "Kantor Pusat",
    "kontak.telepon":     "Telepon",
    "kontak.email":       "Email",
    "kontak.website":     "Website",

    /* ===== FOOTER ===== */
    "footer.desc":        "Subholding Upstream Pertamina. Menjaga ketahanan energi nasional.",
    "footer.nav":         "Navigasi",
    "footer.berita":      "Berita Terbaru",
    "footer.terhubung":   "Terhubung",
    "footer.berlangganan":"Berlangganan",
    "footer.selengkapnya":"Selengkapnya",
    "footer.copyright":   "Seluruh Hak Cipta Dilindungi",
  },

  en: {
    /* ===== NAVIGATION ===== */
    "nav.beranda":        "Home",
    "nav.tentang":        "About Us",
    "nav.sejarah":        "History",
    "nav.struktur":       "Organization Structure",
    "nav.kontak":         "Contact & Maps",

    /* ===== HERO ===== */
    "hero.title":         "Safeguarding National Energy Resilience",
    "hero.desc":          "PT Pertamina Hulu Energi (PHE), as Pertamina's Upstream Subholding, manages upstream oil and gas portfolios domestically and internationally — contributing 65% of national oil production and 37% of national gas production.",
    "hero.btn":           "Explore",

    /* ===== SECTION TITLES ===== */
    "section.tentang.tag":    "Company Profile",
    "section.tentang.title":  "About Us",
    "section.sejarah.tag":    "Company Journey",
    "section.sejarah.title":  "History",
    "section.struktur.tag":   "Management",
    "section.struktur.title": "Organization Structure",
    "section.kontak.tag":     "Contact Us",
    "section.kontak.title":   "Contact & Maps",

    /* ===== DETAIL BUTTONS ===== */
    "btn.detail.about":     "View Company Details",
    "btn.detail.sejarah":   "View Full History",
    "btn.detail.struktur":  "View Full Structure",
    "btn.detail.kontak":    "View Full Contact",

    /* ===== MINI TIMELINE ===== */
    "timeline.1989.title": "PT Aroma Operations Services",
    "timeline.1989.desc":  "Established November 17, 1989 to support the Cilacap petrochemical refinery.",
    "timeline.2002.title": "PT Pertahulu Energy",
    "timeline.2002.desc":  "Renamed following Pertamina's upstream-downstream separation.",
    "timeline.2007.title": "PT Pertamina Hulu Energi",
    "timeline.2007.desc":  "Official PHE name ratified at the General Meeting on June 29, 2007.",
    "timeline.2021.title": "Upstream Subholding",
    "timeline.2021.desc":  "PHE took over 11 upstream subsidiaries and operates as Subholding.",

    /* ===== CONTACT ===== */
    "kontak.kantor":      "Head Office",
    "kontak.telepon":     "Phone",
    "kontak.email":       "Email",
    "kontak.website":     "Website",

    /* ===== FOOTER ===== */
    "footer.desc":        "Pertamina's Upstream Subholding. Safeguarding national energy resilience.",
    "footer.nav":         "Navigation",
    "footer.berita":      "Latest News",
    "footer.terhubung":   "Connect",
    "footer.berlangganan":"Subscribe",
    "footer.selengkapnya":"Learn More",
    "footer.copyright":   "All Rights Reserved",
  }
};

/* ===== ENGINE ===== */
let currentLang = localStorage.getItem('phe-lang') || 'id';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('phe-lang', lang);
  document.documentElement.setAttribute('lang', lang);

  // Terjemahkan semua elemen dengan data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const tr = translations[lang] && translations[lang][key];
    if (tr) el.textContent = tr;
  });

  // Terjemahkan placeholder form
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const tr = translations[lang] && translations[lang][key];
    if (tr) el.setAttribute('placeholder', tr);
  });

  // Update tampilan tombol aktif
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      applyLanguage(btn.dataset.lang);
    });
  });
});