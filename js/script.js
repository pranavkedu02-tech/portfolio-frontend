const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-link');
function updateActiveLink() {
  let currentId = '';
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 120) currentId = section.id;
  });
  navAnchors.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
  });
}
window.addEventListener('scroll', updateActiveLink);
updateActiveLink();

const roles = ['Full Stack Developer', 'Android Developer', 'Django Developer'];
const typedRoleEl = document.getElementById('typedRole');
let roleIndex = 0, charIndex = 0, isDeleting = false;
function typeLoop() {
  const currentRole = roles[roleIndex];
  if (isDeleting) charIndex--; else charIndex++;
  typedRoleEl.textContent = currentRole.substring(0, charIndex);
  let speed = isDeleting ? 40 : 90;
  if (!isDeleting && charIndex === currentRole.length) { speed = 1400; isDeleting = true; }
  else if (isDeleting && charIndex === 0) { isDeleting = false; roleIndex = (roleIndex+1) % roles.length; speed = 400; }
  setTimeout(typeLoop, speed);
}
typeLoop();

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
function observeReveals() {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

const skillsData = [
  { name: 'Python', icon: 'assets/icons/python.png' },
  { name: 'Django', icon: 'assets/icons/django.png' },
  { name: 'Android Dev', icon: 'assets/icons/Android.png' },
  { name: 'Java', icon: 'assets/icons/java.png' },
  { name: 'Flask', icon: 'assets/icons/flask.png' },
  { name: 'MySQL', icon: 'assets/icons/MySQL.png' },
  { name: 'MongoDB', icon: 'assets/icons/Mongodb.png' },
  { name: 'PostgreSQL', icon: 'assets/icons/Postgresql_elephant.png' },
  { name: 'Git', icon: 'assets/icons/git.png' },
  { name: 'JavaScript', icon: 'assets/icons/js.png' },
  { name: 'HTML', icon: 'assets/icons/html.png' },
  { name: 'CSS', icon: 'assets/icons/css.png' },
];

const educationData = [
  {
    year: '2025 – 2028',
    title: 'B.Tech. in Information Technology',
    org: 'Government College of Engineering, Chh. Sambhajinagar',
    desc: 'Pursuing a Bachelor of Technology in Information Technology.'
  },
  {
    year: '2022 – 2025',
    title: 'Diploma in Computer Engineering',
    org: "Navsahyadri Education Society's Group of Institutions, Pune",
    desc: 'Secured First Rank in the college with 94.59% in the final semester.'
  },
  {
    year: '2022',
    title: 'Secondary School Certificate (SSC)',
    org: 'S.V.C. High School, Taradgaon',
    desc: 'Successfully completed SSC with 76.40%.'
  },
];

const experienceData = [
  {
    date: 'May 2024 – Jul 2024',
    title: 'Android Developer Intern',
    org: 'ProAzure Software Solutions, Pune',
    desc: 'Developed and tested Android application features, implemented UI components, and collaborated with the team on debugging and improving app functionality using modern development practices.',
    link: { label: 'View Internship Letter', url: 'assets/internship.png' }
  },
  {
    date: 'Aug 2026 – Present',
    title: 'Co-Secretary, Hackslash Dev.',
    org: 'Government College of Engineering, Chhatrapati Sambhajinagar',
    desc: 'Coordinating club operations and technical events for the college\'s developer community, supporting member engagement, event planning, and communication between the core team and students.',
    link: { label: 'View Appointment Mail', url: 'assets/hackslash.png' }
  },
  {
    date: 'Mar 2026',
    title: 'WINGS 2K26 – Marketing Outreach Team',
    org: 'Government College of Engineering, Chhatrapati Sambhajinagar',
    desc: 'Contributed to promotional outreach for the college\'s annual technical festival, helping drive participation and visibility through coordinated marketing efforts.',
    link: { label: 'View Photo', url: 'assets/marketing.png' }
  },
  {
    date: 'Mar 2026',
    title: 'WINGS 2K26 – Room 404 Coordinator',
    org: 'Government College of Engineering, Chhatrapati Sambhajinagar',
    desc: 'Managed on-ground coordination for an event zone during the festival, handling logistics, participant flow, and troubleshooting to ensure smooth execution.',
    link: { label: 'View Certificate', url: 'assets/404.png' }
  },
  {
    date: 'Mar 2025',
    title: 'FusionX 2K25 – Media & Technical Team',
    org: "Navsahyadri Education Society's Group of Institutions, Pune",
    desc: 'Supported media coverage and technical setup for the festival, assisting with equipment, event documentation, and on-site technical troubleshooting.',
    link: { label: 'View Photo', url: 'assets/fusion.png' }
  },
  {
    date: 'Sep 2024 – May 2025',
    title: 'Academic Coordinator, ACES',
    org: "Navsahyadri Education Society's Group of Institutions, Pune",
    desc: 'Coordinated academic activities and events for the student association, liaising between students and faculty to organize sessions and track participation.'
  },
];

const projectsData = [
  {
    title: 'FintellectAI',
    desc: 'AI-Powered Expense Tracking and Financial Management Application',
    tags: ['Django', 'Groq', 'MongoDB'],
    codeUrl: 'https://github.com/pranavkedu02-tech/fintellect-expense-tracker',
    liveUrl: 'https://fintellect-expense-tracker.onrender.com/'
  },
  {
    title: 'FusionX2K26',
    desc: 'TechFest Student Registration and Event Information Website',
    tags: ['Tailwind CSS'],
    liveUrl: 'https://fusionx2k26.netlify.app/'
  },
  {
    title: 'EduNotes',
    desc: 'Android-Based Teacher–Student Collaboration and Resource Management System',
    tags: ['Android', 'Firebase'],
    liveUrl: 'https://ijarsct.co.in/Paper25338.pdf',
    liveLabel: 'View Research Paper'
  },
  {
    title: 'EMS Pro',
    desc: 'AI-Powered Enterprise Employee Management Suite for Desktop',
    tags: ['Python', 'Groq LLM', 'NLP']
  },
  {
    title: 'FlaskAuth Pro',
    desc: 'Flask-Based User Authentication and Management System',
    tags: ['Python', 'Flask'],
    codeUrl: 'https://github.com/pranavkedu02-tech/FlaskAuthPro',
    liveUrl: 'https://flaskauthpro.onrender.com/'
  },
  {
    title: 'NexoraAI',
    desc: 'Python Django Based Personal AI Chatbot',
    tags: ['Python', 'Django', 'PostgreSQL'],
    codeUrl: 'https://github.com/pranavkedu02-tech/NexoraAI'
  },
  {
    title: 'Blog App',
    desc: 'Full-Stack Blog Application Built with Python Flask',
    tags: ['Python', 'Flask'],
    codeUrl: 'https://github.com/pranavkedu02-tech/blog-app'
  },
];

const achievementsData = [
  {
    date: '19 June 2025',
    title: 'First Rank – TYCO',
    org: "Navsahyadri Education Society's Group of Institutions, Pune",
    desc: 'Secured First Rank in the Third Year of Computer Engineering.',
    link: { label: 'View Certificate', url: 'assets/first_rank.png' }
  },
  {
    date: '02 May 2025',
    title: 'Student of the Year – TYCO',
    org: "Navsahyadri Education Society's Group of Institutions, Pune",
    desc: 'Recognized as Student of the Year for outstanding academic performance and overall achievement.',
    link: { label: 'View Certificate', url: 'assets/student_of_the_year.png' }
  },
  {
    date: '22 February 2025',
    title: 'Rising Star Award',
    org: "Navsahyadri Education Society's Group of Institutions, Pune",
    desc: 'Recognized for exceptional performance, dedication, and contribution to academic and extracurricular activities.',
    link: { label: 'View Certificate', url: 'assets/raising_star.png.png' }
  },
  {
    date: '28 January 2025',
    title: 'Second Rank – TYCO',
    org: "Navsahyadri Education Society's Group of Institutions, Pune",
    desc: 'Secured Second Rank in the Third Year of Computer Engineering.',
    link: { label: 'View Certificate', url: 'assets/second_rank.png' }
  },
  {
    date: '15 September 2024',
    title: 'Programming Competition Winner',
    org: "Navsahyadri Education Society's Group of Institutions, Pune",
    desc: 'Won a programming competition by demonstrating strong problem-solving and programming skills.',
    link: { label: 'View Certificate', url: 'assets/winner.png' }
  },
];

function renderSkills() {
  document.getElementById('skillsGrid').innerHTML = skillsData.map(s => `
    <div class="skill-card reveal"><img src="${s.icon}" alt="${s.name}"><p class="skill-card__name">${s.name}</p></div>
  `).join('');
}
function renderEducation() {
  document.getElementById('educationTimeline').innerHTML = educationData.map(i => `
    <div class="timeline-item reveal"><div class="timeline-card">
      <p class="timeline-card__year">${i.year}</p><h3 class="timeline-card__title">${i.title}</h3>
      <p class="timeline-card__org">${i.org}</p><p class="timeline-card__desc">${i.desc}</p>
    </div></div>`).join('');
}
function renderExperience() {
  document.getElementById('experienceStack').innerHTML = experienceData.map(i => `
    <div class="info-card reveal"><p class="info-card__date">${i.date}</p>
      <h3 class="info-card__title">${i.title}</h3><p class="info-card__org">${i.org}</p>
      <p class="info-card__desc">${i.desc}</p>
      ${i.link ? `<div class="card-link-row"><a href="${i.link.url}" class="card-link" target="_blank" rel="noopener">${i.link.label} ↗</a></div>` : ''}
    </div>`).join('');
}
function renderProjects() {
  document.getElementById('projectsStack').innerHTML = projectsData.map(i => `
    <div class="info-card reveal"><h3 class="info-card__title">${i.title}</h3>
      <p class="info-card__desc">${i.desc}</p>
      <div class="tag-row">${i.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <div class="card-link-row">
      ${i.codeUrl ? `<a href="${i.codeUrl}" class="card-link" target="_blank" rel="noopener">View Code ↗</a>` : ''}
      ${i.liveUrl ? `<a href="${i.liveUrl}" class="card-link" target="_blank" rel="noopener">${i.liveLabel || 'Live Demo'} ↗</a>` : ''}
      </div>
    </div>`).join('');
}
function renderAchievements() {
  document.getElementById('achievementsStack').innerHTML = achievementsData.map(i => `
    <div class="info-card reveal">${i.date ? `<p class="info-card__date">${i.date}</p>` : ''}
      <h3 class="info-card__title">${i.title}</h3>${i.org ? `<p class="info-card__org">${i.org}</p>` : ''}
      <p class="info-card__desc">${i.desc}</p>
      ${i.link ? `<div class="card-link-row"><a href="${i.link.url}" class="card-link" target="_blank" rel="noopener">${i.link.label} ↗</a></div>` : ''}
    </div>`).join('');
}

renderSkills(); renderEducation(); renderExperience();
renderProjects(); renderAchievements();
observeReveals();

document.getElementById('backToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
document.getElementById('year').textContent = new Date().getFullYear();

const API_URL = 'https://portfolio-backend-4e1d.onrender.com/api/contact/';
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const submitBtnText = document.getElementById('submitBtnText');
const formStatus = document.getElementById('formStatus');

function clearErrors() {
  document.getElementById('fullNameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';
  formStatus.textContent = '';
  formStatus.className = 'form-status';
}

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  clearErrors();
  const payload = {
    full_name: document.getElementById('fullName').value.trim(),
    email: document.getElementById('email').value.trim(),
    message: document.getElementById('message').value.trim(),
  };
  submitBtn.disabled = true;
  submitBtnText.textContent = 'Sending...';
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (response.ok && data.success) {
      formStatus.textContent = data.detail || 'Message sent successfully!';
      formStatus.classList.add('success');
      contactForm.reset();
    } else if (data.errors) {
      if (data.errors.full_name) document.getElementById('fullNameError').textContent = data.errors.full_name[0];
      if (data.errors.email) document.getElementById('emailError').textContent = data.errors.email[0];
      if (data.errors.message) document.getElementById('messageError').textContent = data.errors.message[0];
      formStatus.textContent = 'Please fix the errors above.';
      formStatus.classList.add('error');
    } else {
      formStatus.textContent = data.detail || 'Something went wrong. Please try again.';
      formStatus.classList.add('error');
    }
  } catch (err) {
    formStatus.textContent = 'Could not reach the server. Is the backend running?';
    formStatus.classList.add('error');
  } finally {
    submitBtn.disabled = false;
    submitBtnText.textContent = 'Send Message';
  }
});