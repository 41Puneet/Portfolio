import {
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  FileText,
  GitBranch,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Menu,
  Phone,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Trophy,
  X,
} from 'lucide-react';
import { useState } from 'react';
import resumeImage from '../Puneet__Resume.pdf';

const profile = {
  name: 'Puneet Agnihotri',
  role: 'Backend Developer',
  location: 'Lucknow, India',
  email: 'puneetagnihotri1616@gmail.com',
  phone: '+91 9555012460',
  github: 'https://github.com/41Puneet',
  linkedin: 'https://www.linkedin.com/in/puneetagnihotri4141',
  leetcode: 'https://leetcode.com/u/41puneet/',
  resume: resumeImage,
  summary:
    'Backend Developer skilled in building scalable RESTful APIs, authentication systems, and database-driven applications with Spring Boot, Laravel, MySQL, and MongoDB.',
};

const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

const skills = [
  { name: 'Languages', detail: 'Java, Python, JavaScript, SQL' },
  { name: 'Spring Boot', detail: 'REST APIs, MVC layers, validation, service architecture' },
  { name: 'Laravel', detail: 'Backend architecture, controllers, routing, MySQL integration' },
  { name: 'Databases', detail: 'MySQL, MongoDB, schema design, query optimization' },
  { name: 'Authentication', detail: 'JWT, authorization flow, role-based access control' },
  { name: 'Tools', detail: 'Git, GitHub, Postman, Docker basics' },
];

const projects = [
  {
    title: 'SevaBharti Backend System',
    type: 'RSS Initiative',
    description:
      'Developed backend services for a social service platform supporting user and service management with secure role-based operations.',
    stack: ['REST APIs', 'Role Access', 'Database Design', 'Query Optimization'],
    link: 'https://github.com/41Puneet/RSS-meetings',
  },
  {
    title: 'Doctor Appointment System',
    type: 'Healthcare Backend',
    description:
      'Built backend flows for doctor appointments, patient records, scheduling, and reliable healthcare service management.',
    stack: ['Appointments', 'REST APIs', 'Validation', 'Healthcare'],
    link: 'https://github.com/Himanshunegi57/doctor-appointment',
  },
  {
    title: 'TaskFlow Management Application',
    type: 'Secure Backend',
    description:
      'Developed a Spring Boot and MongoDB backend with JWT authentication, real-time task tracking, and role-based access control.',
    stack: ['Spring Boot', 'MongoDB', 'JWT', 'RBAC'],
    link: 'https://github.com/41Puneet/Taskflow-Management-App',
  },
];

const experience = [
  {
    role: 'Software Developer Intern',
    company: 'HXP Technologies',
    location: 'Remote',
    period: 'Jan 25, 2026 - Apr 5, 2026',
    points: [
      'Designed and developed backend architecture for Baithak App using Laravel and MySQL.',
      'Built and optimized RESTful APIs to improve response efficiency and data handling.',
      'Implemented authentication and authorization mechanisms for secure access.',
      'Optimized database queries and debugged issues to improve performance and reliability.',
    ],
  },
];

const achievements = [
  'Solved 200+ Data Structures and Algorithms problems on LeetCode with a Medium/Hard focus.',
  'Strong problem-solving foundation across graphs, dynamic programming, OOP, and API design.',
];

const stats = [
  ['200+', 'LeetCode problems'],
  ['3+', 'Backend systems'],
  ['2', 'Main frameworks'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Go to home">
          <span className="brand-mark">PA</span>
          <span>Puneet</span>
        </a>

        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
        </nav>

        <button
          className="icon-button menu-button"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <Sparkles size={16} />
              Backend developer building secure API systems
            </p>
            <h1>{profile.name}</h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-summary">{profile.summary}</p>

            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                View Projects
                <ArrowUpRight size={18} />
              </a>
              <a className="secondary-button" href={`mailto:${profile.email}`}>
                <Mail size={18} />
                Contact Me
              </a>
              <a className="secondary-button" href={profile.resume} target="_blank" rel="noreferrer">
                <FileText size={18} />
                Resume
              </a>
            </div>

            <div className="social-row" aria-label="Social links">
              <a href={profile.github} aria-label="GitHub profile">
                <GitBranch size={20} />
                GitHub
              </a>
              <a href={profile.linkedin} aria-label="LinkedIn profile">
                <ExternalLink size={20} />
                LinkedIn
              </a>
              <a href={profile.leetcode} aria-label="LeetCode profile">
                <Terminal size={20} />
                LeetCode
              </a>
              <span>
                <MapPin size={18} />
                {profile.location}
              </span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Developer workspace illustration">
            <div className="tech-ribbon top">Spring Boot</div>
            <div className="tech-ribbon right">Laravel</div>
            <div className="tech-ribbon bottom">JWT + MySQL</div>
            <div className="code-window">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="code-line wide" />
              <div className="code-line medium" />
              <div className="code-line short" />
              <div className="terminal-card">
                <span>api/auth/status</span>
                <strong>Backend ready</strong>
                <a href={profile.resume} target="_blank" rel="noreferrer">
                  <FileText size={18} />
                  View Resume
                </a>
              </div>
            </div>
            <div className="profile-orbit">
              <Code2 size={34} />
            </div>
          </div>
        </section>

        <section className="stats-band" aria-label="Highlights">
          {stats.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p className="eyebrow">
              <BookOpen size={16} />
              About
            </p>
            <h2>Focused on reliable backend systems, clean APIs, and secure data flow.</h2>
          </div>
          <p className="about-text">
            I build database-driven backend applications with Spring Boot and Laravel,
            designing REST APIs, authentication flows, and practical service layers. My
            foundation in DSA, OOP, API design, and system design helps me write backend
            logic that stays organized, testable, and ready for real users.
          </p>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">
              <Award size={16} />
              Skills
            </p>
            <h2>Backend stack for APIs, authentication, databases, and production tooling.</h2>
          </div>
          <div className="skill-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.name}>
                <h3>{skill.name}</h3>
                <p>{skill.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">
              <Layers size={16} />
              Experience
            </p>
            <h2>Internship work building backend architecture for a real product.</h2>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-card" key={item.company}>
                <div className="experience-meta">
                  <span>{item.period}</span>
                  <strong>{item.location}</strong>
                </div>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">
                <Rocket size={16} />
                Projects
              </p>
              <h2>Backend projects shaped around APIs, access control, and data handling.</h2>
            </div>
            <a className="text-link" href={profile.github}>
              GitHub
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-topline">
                  <span>{project.type}</span>
                  <BriefcaseBusiness size={18} />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="stack-list">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                  <GitBranch size={17} />
                  View Repository
                  <ArrowUpRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section achievements-section" id="achievements">
          <div className="section-heading">
            <p className="eyebrow">
              <Trophy size={16} />
              Achievements
            </p>
            <h2>Problem-solving practice that supports stronger backend decisions.</h2>
          </div>
          <div className="achievement-grid">
            {achievements.map((achievement) => (
              <article className="achievement-card" key={achievement}>
                <ShieldCheck size={24} />
                <p>{achievement}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section timeline-section" id="education">
          <div className="section-heading">
            <p className="eyebrow">
              <GraduationCap size={16} />
              Education
            </p>
            <h2>Academic foundation with hands-on development practice.</h2>
          </div>
          <div className="timeline">
            <article>
              <span>2022 - 2026</span>
              <h3>Bachelor of Technology in Computer Science</h3>
              <p>Babu Banarasi Das University. Coursework in programming, databases, operating systems, and software engineering.</p>
            </article>
            <article>
              <span>Ongoing</span>
              <h3>Full Stack Development Practice</h3>
              <p>Building portfolio projects with React, Java, Spring Boot, REST APIs, and SQL.</p>
            </article>
          </div>
        </section>

        <section className="contact-band" id="contact">
          <div>
            <p className="eyebrow">
              <Server size={16} />
              Contact
            </p>
            <h2>Open to backend roles, internships, and API-focused development work.</h2>
            <div className="contact-details">
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>
                <Phone size={17} />
                {profile.phone}
              </a>
              <span>
                <MapPin size={17} />
                {profile.location}
              </span>
            </div>
          </div>
          <a className="primary-button" href={`mailto:${profile.email}`}>
            <Mail size={18} />
            {profile.email}
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;
