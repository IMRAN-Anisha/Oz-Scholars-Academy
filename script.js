/* ===========================================================
   Oz Scholars Academy 
   =========================================================== */

/* ---------- helpers ---------- */
const el = (html) => {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
};
const mount = (id, nodes) => {
  const host = document.getElementById(id);
  if (!host) return;
  nodes.forEach((n) => host.appendChild(n));
};

/* ---------- HERO: 15 task squares (12 complete) ---------- */
(function buildHeroGrid() {
  const grid = document.getElementById('hero-task-grid');
  if (!grid) return;
  for (let i = 0; i < 15; i++) {
    grid.appendChild(el(`<div class="h-6 flex-1 rounded ${i < 12 ? 'bg-[#00D66B]' : 'bg-gray-200'}"></div>`));
  }
})();

/* ---------- SYSTEM PROCESS: 5 steps ---------- */
const processSteps = [
  { number: 1, icon: 'search', title: 'Diagnose', subtitle: 'Initial Assessment',
    description: 'We start with a comprehensive diagnostic test to identify knowledge gaps, learning style, and current performance baseline. This gives us the data we need to design a personalized system.',
    color: '#0080FF', metrics: ['Subject proficiency score', 'Learning speed analysis', 'Weakness mapping'] },
  { number: 2, icon: 'target', title: 'Target Weaknesses', subtitle: 'Strategic Planning',
    description: "Using assessment data, we prioritize the highest-impact areas for improvement. We don't waste time on what students already know - we focus on filling critical gaps systematically.",
    color: '#FF0040', metrics: ['Priority topic list', 'Custom learning roadmap', 'Goal setting'] },
  { number: 3, icon: 'book-open', title: 'Structured Lessons', subtitle: 'Systematic Delivery',
    description: 'Every session follows a proven structure: review previous concepts, introduce new material, guided practice, and independent work. No more random tutoring - every minute is optimised.',
    color: '#FFD700', metrics: ['Weekly lesson plans', 'Progress checkpoints', 'Homework assignments'] },
  { number: 4, icon: 'bar-chart-3', title: 'Weekly Exam Practice', subtitle: 'Applied Testing',
    description: 'Students complete timed practice exams every week to build test-taking stamina, identify remaining weaknesses, and track improvement. We simulate real exam conditions.',
    color: '#00D66B', metrics: ['Mock exam scores', 'Time management data', 'Confidence tracking'] },
  { number: 5, icon: 'rotate-ccw', title: 'Feedback Loop + Tracking', subtitle: 'Continuous Optimization',
    description: 'After every session and practice exam, we analyze performance data and adjust the learning plan. Parents see real-time progress through the dashboard. We iterate until goals are met.',
    color: '#9333EA', metrics: ['Performance trends', 'Adjustment recommendations', 'Parent reports'] },
];
mount('process-steps', processSteps.map((step) => el(`
  <div class="group relative reveal" style="margin-bottom:2rem;">
    <div class="grid gap-6 md:grid-cols-12 md:items-start">
      <div class="flex items-start gap-4 md:col-span-3">
        <div class="relative">
          <div class="flex h-16 w-16 items-center justify-center rounded-2xl font-bold text-white shadow-xl transition-transform group-hover:scale-110" style="background-color:${step.color}">
            <span class="text-2xl">${step.number}</span>
          </div>
          <div class="absolute inset-0 rounded-2xl opacity-30 blur-xl transition-opacity group-hover:opacity-60" style="background-color:${step.color}"></div>
        </div>
        <div>
          <h3 class="text-2xl font-bold text-black">${step.title}</h3>
          <p class="text-sm text-gray-600">${step.subtitle}</p>
        </div>
      </div>
      <div class="md:col-span-9">
        <div class="overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-lg transition-all group-hover:scale-[1.02] group-hover:shadow-2xl">
          <p class="mb-4 text-gray-700 leading-relaxed">${step.description}</p>
          <div class="flex flex-wrap gap-2">
            ${step.metrics.map((m) => `<div class="rounded-full px-4 py-2 text-sm font-semibold" style="background-color:${step.color}15;color:${step.color}">✓ ${m}</div>`).join('')}
          </div>
        </div>
      </div>
    </div>
  </div>
`)));

/* ---------- COMPARISON lists ---------- */
const traditional = ['Generic Curriculum', 'Delayed Feedback', 'Limited Tracking', 'Manual Reports', 'One-Size-Fits-All'];
const ozScholars = ['Personalized Paths', 'Real-Time Analytics', 'Automated Tracking', 'Instant Insights', 'AI-Optimised Learning'];

mount('comparison-traditional', traditional.map((label) => el(`
  <div class="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50/50 p-4 transition-all hover:border-red-300">
    <div class="flex h-6 w-6 items-center justify-center rounded-full bg-red-500"><i data-lucide="x" class="h-4 w-4 text-white" stroke-width="3"></i></div>
    <span class="text-gray-800">${label}</span>
  </div>
`)));
mount('comparison-oz', ozScholars.map((label) => el(`
  <div class="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50/50 p-4 transition-all hover:border-green-300 hover:shadow-md">
    <div class="flex h-6 w-6 items-center justify-center rounded-full bg-[#00D66B]"><i data-lucide="check" class="h-4 w-4 text-white" stroke-width="3"></i></div>
    <span class="font-semibold text-gray-800">${label}</span>
  </div>
`)));

/* ---------- TESTIMONIALS ---------- */
const testimonials = [
  { name: 'Precious Madiam', role: 'Year 11 Student (2026)',
    content: 'The dashboard alone changed everything. I can see exactly what my daughter is working on in real-time. No more guessing games about homework.',
    rating: 5, subject: 'Mathematics Methods & English ATAR', improvement: 'B+ to A-' },
  { name: 'Michelle Jess', role: 'Parent of 6th Grader',
    content: 'Finally, a tutoring service that treats education like a system. The scheduled tracking and data reports make it easy to stay involved without micromanaging.',
    rating: 5, subject: 'GATE Preparation & Mathematics', improvement: '2 Grade Levels Up' },
  { name: 'Lesleigh Fawcett', role: 'Parent of YR 12 Student',
    content: 'As an educator myself, I appreciate the engineering approach. This is what modern education should look like—structured, measurable, and personalized.',
    rating: 5, subject: 'Mathematics Applications', improvement: 'B to A' },
];
mount('testimonials-grid', testimonials.map((t) => el(`
  <div class="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg transition-all hover:scale-105 hover:shadow-2xl reveal">
    <div class="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-[#FFD700]/20 to-[#FF8C00]/20 opacity-50 blur-2xl group-hover:opacity-75 transition-opacity"></div>
    <i data-lucide="quote" class="mb-4 h-10 w-10 text-[#FFD700]" fill="#FFD700"></i>
    <div class="mb-4 flex gap-1">${Array(t.rating).fill('<i data-lucide="star" class="h-5 w-5 text-[#FFD700]" fill="#FFD700"></i>').join('')}</div>
    <p class="mb-6 text-gray-700 leading-relaxed">"${t.content}"</p>
    <div class="mb-4 inline-flex rounded-full bg-[#00D66B]/10 px-4 py-2"><span class="text-sm font-semibold text-[#00D66B]">${t.improvement}</span></div>
    <div class="border-t-2 border-gray-100 pt-4">
      <div class="font-bold text-black">${t.name}</div>
      <div class="text-sm text-gray-600">${t.role}</div>
      <div class="mt-2 text-xs text-gray-500">${t.subject}</div>
    </div>
  </div>
`)));

/* ---------- PRICING / DISCOUNTS ----------

/* ---------- FAQ (accordion) ---------- */
const faqs = [
  { question: 'How is this different from regular tutoring?', answer: "Traditional tutoring is reactive - students show up with questions, and tutors answer them. We take a systems-engineering approach: structured lesson plans, weekly progress tracking, data-driven feedback loops, and scheduled accountability. Every student gets a personalized dashboard to track their progress in real-time, and parents have full visibility into what's working and what needs adjustment." },
  { question: 'What subjects do you cover?', answer: 'We specialize in Mathematics (all levels), English, Computer Science, Selective School Exam preparation, and ATAR-focused subjects. Our educators are 95+ ATAR achievers with deep subject expertise and are trained in our systematic approach to learning optimistion.' },
  { question: 'Do you offer catch-up lessons if my child misses a session?', answer: "Yes! If a session is missed with at least 24 hours notice, we'll schedule a make-up lesson at no additional charge. For last-minute cancellations (less than 24 hours), we offer catch-up lessons at a discounted rate or you can choose to receive a partial credit toward your next month." },
  { question: "What's your cancellation policy?", answer: "No long-term contracts required. You can cancel anytime with 2 weeks' notice. We believe in earning your business every month through results, not locking you into commitments." },
  { question: 'Are your educators qualified?', answer: 'All educators are WWCC verified, hold 95+ ATAR scores, and have undergone extensive training in our systematic teaching methodology. Many are current university students or graduates in their respective fields with real-world experience.' },
];
mount('faq-list', faqs.map((faq, index) => el(`
  <div class="overflow-hidden rounded-xl border-2 border-gray-200 bg-white shadow-md transition-all hover:shadow-lg reveal">
    <button class="faq-toggle flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50" data-index="${index}">
      <span class="pr-8 text-lg font-semibold text-black">${faq.question}</span>
      <i data-lucide="chevron-down" class="faq-chevron h-6 w-6 flex-shrink-0 text-[#FFD700] transition-transform ${index === 0 ? 'rotate-180' : ''}"></i>
    </button>
    <div class="faq-panel ${index === 0 ? 'open' : ''}">
      <div class="border-t-2 border-gray-100 bg-gray-50 p-6"><p class="text-gray-700 leading-relaxed">${faq.answer}</p></div>
    </div>
  </div>
`)));

document.querySelectorAll('.faq-toggle').forEach((btn) => {
  btn.addEventListener('click', () => {
    const panel = btn.nextElementSibling;
    const chevron = btn.querySelector('.faq-chevron');
    const isOpen = panel.classList.contains('open');
    // close all (matches single-open React behavior)
    document.querySelectorAll('.faq-panel').forEach((p) => p.classList.remove('open'));
    document.querySelectorAll('.faq-chevron').forEach((c) => c.classList.remove('rotate-180'));
    if (!isOpen) { panel.classList.add('open'); chevron.classList.add('rotate-180'); }
  });
});

/* ---------- smooth scroll for data-scroll buttons ---------- */
document.querySelectorAll('[data-scroll]').forEach((b) => {
  b.addEventListener('click', () => {
    document.getElementById(b.getAttribute('data-scroll'))?.scrollIntoView({ behavior: 'smooth' });
  });
});

/* ---------- mobile menu ---------- */
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn?.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

/* ---------- render all icons (after DOM is built) ---------- */
if (window.lucide) lucide.createIcons();

/* ---------- scroll reveal ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((n) => io.observe(n));

/* ---------- scroll progress bar + floating CTA visibility ---------- */
const progress = document.getElementById('scroll-progress');
const floatCta = document.getElementById('floating-cta');
const onScroll = () => {
  const h = document.documentElement;
  const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  if (progress) progress.style.width = pct + '%';
  if (floatCta) floatCta.classList.toggle('show', h.scrollTop > 600);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();