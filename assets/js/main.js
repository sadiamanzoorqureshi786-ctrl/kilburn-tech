// ===== Video data =====
const videos = [
  { id: 247, title: "The Phone That Killed The Compact Flagship", cat: "review", date: "2 DAYS AGO", views: "142K", runtime: "18:24", img: "vid247", tag: "NEW" },
  { id: 246, title: "I Bought Every $100 Wireless Earbud on Amazon", cat: "comparison", date: "1 WEEK AGO", views: "289K", runtime: "24:11", img: "vid246" },
  { id: 245, title: "Why Apple's M4 Mac Mini Changes Everything", cat: "deep", date: "2 WEEKS AGO", views: "412K", runtime: "32:08", img: "vid245" },
  { id: 244, title: "Sony A7V vs Canon R5 II — The Real Test", cat: "comparison", date: "3 WEEKS AGO", views: "178K", runtime: "19:47", img: "vid244" },
  { id: 243, title: "My 2025 Desk Setup — Final Form", cat: "setup", date: "1 MONTH AGO", views: "356K", runtime: "14:22", img: "vid243" },
  { id: 242, title: "ChatGPT Can Now Write Code. I'm Worried.", cat: "news", date: "1 MONTH AGO", views: "524K", runtime: "11:35", img: "vid242" },
  { id: 241, title: "The Truth About OLED Burn-In (3 Year Study)", cat: "deep", date: "6 WEEKS AGO", views: "632K", runtime: "28:14", img: "vid241" },
  { id: 240, title: "Framework 16 Review — A Laptop I Can Fix", cat: "review", date: "2 MONTHS AGO", views: "247K", runtime: "21:39", img: "vid240" },
  { id: 239, title: "Behind The Scenes: Building The New Studio", cat: "bts", date: "2 MONTHS AGO", views: "98K", runtime: "16:52", img: "vid239" },
  { id: 238, title: "RTX 5090 — Don't Buy One Yet", cat: "news", date: "2 MONTHS AGO", views: "1.1M", runtime: "12:48", img: "vid238" },
  { id: 237, title: "iPad Pro M4 — The Laptop Replacement Question", cat: "review", date: "3 MONTHS AGO", views: "384K", runtime: "23:17", img: "vid237" },
  { id: 236, title: "I Tracked Every Notification For 30 Days", cat: "deep", date: "3 MONTHS AGO", views: "447K", runtime: "19:05", img: "vid236" },
];

// ===== Render video grid =====
const grid = document.getElementById('videoGrid');
function renderVideos(filter = 'all') {
  grid.innerHTML = '';
  const filtered = filter === 'all' ? videos : videos.filter(v => v.cat === filter);
  filtered.forEach((v, i) => {
    const card = document.createElement('article');
    card.className = 'video-card shuffling';
    card.style.animationDelay = `${i * 35}ms`;
    card.innerHTML = `
      <div class="video-card-thumb">
        <img src="https://picsum.photos/seed/${v.img}/640/360" alt="${v.title}">
        <div class="preview-tag">PREVIEWING</div>
        <div class="preview-progress"></div>
        <div class="absolute bottom-3 right-3 bg-black/85 text-white px-2 py-1 text-[11px] font-mono z-[2]">${v.runtime}</div>
        ${v.tag ? `<div class="absolute top-3 right-3 bg-[var(--accent)] text-black px-2 py-1 text-[10px] font-mono font-bold z-[3]">${v.tag}</div>` : ''}
        <div class="absolute top-3 left-3 z-[3]">
          <span class="text-[10px] font-mono uppercase tracking-widest text-white bg-black/60 backdrop-blur px-2 py-1 border border-white/20">EP ${v.id}</span>
        </div>
      </div>
      <div class="mt-3">
        <h3 class="font-display text-lg leading-tight mb-2 hover:text-[var(--accent)] transition cursor-pointer">${v.title}</h3>
        <div class="flex items-center gap-3 text-[11px] font-mono text-[var(--fg-dim)] uppercase tracking-wider">
          <span>${v.date}</span><span>·</span><span>${v.views} views</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}
renderVideos();

document.querySelectorAll('.filter-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    renderVideos(chip.dataset.filter);
  });
});

// ===== Products data =====
const products = [
  { name: "Audio-Technica M50x", price: 149, cat: "AUDIO", why: "Studio reference for 15 years. Still unbeaten.", img: "prod1" },
  { name: "Logitech MX Master 4", price: 119, cat: "INPUT", why: "The only mouse I recommend without caveats.", img: "prod2" },
  { name: "Røde PodMic USB", price: 199, cat: "AUDIO", why: "Better than mics twice the price. My daily.", img: "prod3" },
  { name: "Anker 737 Power Bank", price: 89, cat: "ACCESSORY", why: "Flown with this 40+ times. Indestructible.", img: "prod4" },
  { name: "Keychron Q1 Pro", price: 199, cat: "INPUT", why: "Best budget mechanical. End of debate.", img: "prod5" },
  { name: "Airthings Wave Plus", price: 249, cat: "HOME", why: "Know your air quality. Worth every cent.", img: "prod6" },
  { name: "Sony WH-1000XM6", price: 449, cat: "AUDIO", why: "Best noise cancelling. Period.", img: "prod7" },
  { name: "iPad Pro M4 11\"", price: 999, cat: "TABLET", why: "The only tablet worth $1000 in 2025.", img: "prod8" },
  { name: "Kinesis Advantage360", price: 649, cat: "INPUT", why: "Daily driver since 2023. Saved my wrists.", img: "prod9" },
  { name: "Apple Studio Display", price: 1599, cat: "DISPLAYS", why: "Controversial but I genuinely love mine.", img: "prod10" },
  { name: "LG C4 OLED 65\"", price: 1899, cat: "DISPLAYS", why: "Best TV for the money this year.", img: "prod11" },
  { name: "Sony A7CR", price: 1999, cat: "CAMERA", why: "Compact body, full-frame image quality.", img: "prod12" },
];

const recGrid = document.getElementById('recGrid');

function renderProducts() {
  recGrid.innerHTML = '';
  const sorted = [...products].sort((a, b) => a.price - b.price);
  sorted.forEach(p => {
    const card = document.createElement('div');
    card.className = 'rec-card';
    card.dataset.price = p.price;
    card.dataset.cat = p.cat;
    card.innerHTML = `
      <div class="aspect-[4/3] overflow-hidden bg-black relative">
        <img src="https://picsum.photos/seed/${p.img}/600/450" class="w-full h-full object-cover" alt="${p.name}">
        <div class="absolute top-3 left-3 bg-[var(--yellow)] text-black px-2 py-1 text-[10px] font-mono font-bold tracking-wider">${p.cat}</div>
        <div class="absolute bottom-3 right-3 bg-black/90 text-white px-3 py-1.5 text-sm font-mono">$${p.price.toLocaleString()}</div>
      </div>
      <div class="p-5">
        <h3 class="font-display text-xl mb-2">${p.name}</h3>
        <p class="text-sm text-[var(--fg-dim)] mb-4 leading-relaxed">"${p.why}"</p>
        <div class="flex items-center justify-between text-xs">
          <span class="font-mono text-[var(--fg-dim)] uppercase">Verified Purchase</span>
          <button class="text-[var(--yellow)] hover:text-white transition flex items-center gap-1.5 font-semibold uppercase tracking-wider">
            Buy <i class="fas fa-arrow-up-right-from-square text-[9px]"></i>
          </button>
        </div>
      </div>
    `;
    recGrid.appendChild(card);
  });
}
renderProducts();

// ===== Price slider with FLIP animation =====
const priceLow = document.getElementById('priceLow');
const priceHigh = document.getElementById('priceHigh');
const priceLowLabel = document.getElementById('priceLowLabel');
const priceHighLabel = document.getElementById('priceHighLabel');
const priceLowDisplay = document.getElementById('priceLowDisplay');
const priceHighDisplay = document.getElementById('priceHighDisplay');
const productCount = document.getElementById('productCount');

function updatePriceFilter() {
  let low = parseInt(priceLow.value);
  let high = parseInt(priceHigh.value);
  if (low > high) { low = high; priceLow.value = low; }

  priceLowLabel.textContent = `$${low.toLocaleString()}`;
  priceHighLabel.textContent = `$${high.toLocaleString()}`;
  priceLowDisplay.textContent = `$${low.toLocaleString()}`;
  priceHighDisplay.textContent = `$${high.toLocaleString()}`;

  const cards = Array.from(recGrid.querySelectorAll('.rec-card'));
  const firstPositions = new Map();
  cards.forEach(c => firstPositions.set(c, c.getBoundingClientRect()));

  let visibleCount = 0;
  cards.forEach(c => {
    const price = parseInt(c.dataset.price);
    const isVisible = price >= low && price <= high;
    c.dataset.visible = isVisible ? '1' : '0';
    if (isVisible) visibleCount++;
  });

  const visible = cards.filter(c => c.dataset.visible === '1')
    .sort((a, b) => parseInt(a.dataset.price) - parseInt(b.dataset.price));
  const hidden = cards.filter(c => c.dataset.visible === '0');

  visible.forEach(c => recGrid.appendChild(c));
  hidden.forEach(c => recGrid.appendChild(c));

  cards.forEach(c => c.classList.toggle('filtered-out', c.dataset.visible === '0'));

  requestAnimationFrame(() => {
    visible.forEach(c => {
      const first = firstPositions.get(c);
      const last = c.getBoundingClientRect();
      const dy = first.top - last.top;
      const dx = first.left - last.left;
      if (Math.abs(dy) < 1 && Math.abs(dx) < 1) return;

      c.style.transform = `translate(${dx}px, ${dy}px)`;
      c.style.transition = 'none';
      c.style.zIndex = '5';

      requestAnimationFrame(() => {
        c.style.transform = '';
        c.style.transition = 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)';
        setTimeout(() => { c.style.zIndex = ''; }, 600);
      });
    });
  });

  productCount.textContent = visibleCount;
}

priceLow.addEventListener('input', updatePriceFilter);
priceHigh.addEventListener('input', updatePriceFilter);

// ===== Typewriter placeholder =====
const phrases = [
  "you@example.com",
  "your.real.inbox@here.com",
  "first.last@gmail.com",
  "the.email.you.actually.check",
  "no.spam.i.promise@kilburn.tv",
];
let phraseIdx = 0, charIdx = 0, deleting = false;
const input = document.getElementById('emailInput');

function typeLoop() {
  if (document.activeElement === input || input.value) {
    input.setAttribute('placeholder', '');
    setTimeout(typeLoop, 600);
    return;
  }
  const phrase = phrases[phraseIdx];
  let text;
  if (!deleting) {
    text = phrase.substring(0, charIdx + 1);
    charIdx++;
    if (charIdx >= phrase.length) {
      deleting = true;
      setTimeout(typeLoop, 2400);
      return;
    }
  } else {
    text = phrase.substring(0, charIdx - 1);
    charIdx--;
    if (charIdx <= 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
    }
  }
  input.setAttribute('placeholder', text + (charIdx % 2 ? '|' : ''));
  setTimeout(typeLoop, deleting ? 28 : 55 + Math.random() * 70);
}
typeLoop();

// ===== Subscribe handler =====
const form = document.getElementById('newsletterForm');
const statusEl = document.getElementById('subscribeStatus');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = input.value.trim();
  if (!email || !email.includes('@')) {
    statusEl.textContent = '> ERROR: Please enter a valid email address.';
    statusEl.style.color = 'var(--accent)';
    return;
  }
  statusEl.textContent = '> SUBSCRIBED. Check your inbox for confirmation.';
  statusEl.style.color = 'var(--yellow)';
  input.value = '';
  setTimeout(() => { statusEl.textContent = ''; }, 5000);
});

// ===== Scroll progress + section accent tracking =====
const progressBar = document.getElementById('scrollProgress');
const backToTop = document.getElementById('backToTop');
const accentMap = { red: '#ff2a2a', blue: '#2b6fff', yellow: '#e5ff00' };

function updateScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${(scrollTop / docHeight) * 100}%`;
  backToTop.classList.toggle('visible', scrollTop > 800);
}
window.addEventListener('scroll', updateScroll, { passive: true });
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const sectionObserver = new IntersectionObserver((entries) => {
  const intersecting = entries.filter(e => e.isIntersecting);
  if (intersecting.length === 0) return;
  intersecting.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
  const accent = intersecting[0].target.dataset.accent;
  if (accent && accentMap[accent]) {
    document.documentElement.style.setProperty('--section-accent', accentMap[accent]);
  }
}, { rootMargin: '-25% 0px -55% 0px', threshold: [0, 0.1, 0.3, 0.6] });
document.querySelectorAll('[data-accent]').forEach(s => sectionObserver.observe(s));
updateScroll();

// ===== Chapter clicks =====
document.querySelectorAll('.chapter').forEach(ch => {
  ch.addEventListener('click', () => {
    document.querySelectorAll('.chapter').forEach(c => {
      c.classList.remove('active');
      c.classList.add('text-[var(--fg-dim)]');
    });
    ch.classList.add('active');
    ch.classList.remove('text-[var(--fg-dim)]');
  });
});

if ('ontouchstart' in window && window.innerWidth < 1024) {
  document.body.classList.add('touch-device');
}
