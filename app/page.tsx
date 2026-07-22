import Image from "next/image";

const ArrowUpRight = ({ className = "" }: { className?: string }) => (
  <span className={className} aria-hidden="true">↗</span>
);

const CodeIcon = () => <span aria-hidden="true">&lt;/&gt;</span>;

const skills = [
  { name: "HTML5", level: "Advanced", value: 92, mark: "H" },
  { name: "CSS3", level: "Advanced", value: 88, mark: "C" },
  { name: "Tailwind CSS", level: "Proficient", value: 82, mark: "T" },
  { name: "Python", level: "Proficient", value: 84, mark: "Py" },
  { name: "AI & Automation", level: "Exploring", value: 72, mark: "AI" },
  { name: "IoT Development", level: "Hands-on", value: 76, mark: "IoT" },
];

const projects = [
  {
    number: "01",
    title: "Smart Baby\nMonitoring System",
    description:
      "An IoT-based monitoring concept designed to help caregivers track important conditions and respond quickly through thoughtful alerts.",
    tags: ["IoT", "Sensors", "Automation"],
    tone: "lime",
  },
  {
    number: "02",
    title: "Leave Management\nSystem",
    description:
      "A practical workflow application that makes leave requests, approvals, and status tracking simpler for students and teams.",
    tags: ["Web App", "UI/UX", "Workflow"],
    tone: "ink",
  },
  {
    number: "03",
    title: "Python Automation\nToolkit",
    description:
      "A growing collection of focused scripts that reduce repetitive work, organize information, and turn manual tasks into reliable processes.",
    tags: ["Python", "Scripting", "Productivity"],
    tone: "sand",
  },
];

const learning = [
  {
    year: "FOUNDATION",
    title: "Responsive Web Development",
    body: "Semantic HTML, modern CSS, responsive layouts, accessibility, and maintainable interface systems.",
    label: "Academic + self-directed learning",
  },
  {
    year: "PRACTICE",
    title: "Python & Practical Automation",
    body: "Problem-solving with scripts, data handling, repeatable workflows, and clean program structure.",
    label: "Project-based learning",
  },
  {
    year: "EXPLORATION",
    title: "Artificial Intelligence & IoT",
    body: "Building fundamentals in intelligent applications, connected devices, sensors, and real-world systems.",
    label: "Active learning track",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="HNCRAFTS home">
          <span className="brand-mark">HN</span>
          <span className="brand-name">HNCRAFTS<span>.</span></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#learning">Learning</a>
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s talk <ArrowUpRight /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> Available for opportunities</div>
          <p className="hero-kicker">Hi, I&apos;m Shakil Ahamed.</p>
          <h1>I turn ideas into<br /><em>useful digital</em><br />experiences.</h1>
          <p className="hero-intro">
            IT student, software developer, and curious builder focused on practical,
            user-friendly products for the web and beyond.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <ArrowUpRight /></a>
            <a className="text-link" href="#about">More about me <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Developer working on software and IoT projects">
          <Image
            src="/shakil-developer.png"
            alt="Stylized illustration of a developer coding with software and IoT elements"
            width={972}
            height={1616}
            sizes="(max-width: 980px) 90vw, 42vw"
            priority
          />
          <span className="floating-code"><CodeIcon /></span>
          <span className="floating-label">BUILDING<br />WITH PURPOSE</span>
          <div className="visual-caption">
            <span>Based in India</span>
            <span className="caption-line" />
            <span>IT STUDENT · DEVELOPER</span>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Core interests">
        <div>
          <span>Web development</span><i>✦</i><span>Python automation</span><i>✦</i>
          <span>Artificial intelligence</span><i>✦</i><span>Internet of things</span><i>✦</i>
          <span>Mobile apps</span>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="section-index"><span>01</span> ABOUT ME</div>
        <div className="about-grid">
          <h2>Curiosity is my<br />favorite <em>tool.</em></h2>
          <div className="about-copy">
            <p className="lead">I&apos;m an Information Technology student with a strong passion for software development and modern web technologies.</p>
            <p>I enjoy building responsive applications that solve real-world problems. Every project is a chance to understand people better, make a complex process feel simple, and grow into a more thoughtful developer.</p>
            <p>I believe in continuous learning, writing clean and maintainable code, and creating experiences that feel as good to use as they are useful.</p>
            <div className="values">
              <span><b>01</b> Practical thinking</span>
              <span><b>02</b> Clean execution</span>
              <span><b>03</b> Constant growth</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-index"><span>02</span> TECHNICAL TOOLKIT</div>
        <div className="section-heading-row">
          <h2>Tools I use to<br /><em>make things happen.</em></h2>
          <p>Core technologies I use today—and the areas I&apos;m actively growing every day.</p>
        </div>
        <div className="skill-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.name}>
              <span className="skill-mark">{skill.mark}</span>
              <div>
                <h3>{skill.name}</h3>
                <p>{skill.level}</p>
              </div>
              <div className="skill-meter"><span style={{ width: `${skill.value}%` }} /></div>
              <span className="skill-value">{skill.value}%</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="work">
        <div className="section-index light"><span>03</span> SELECTED WORK</div>
        <div className="projects-heading">
          <h2>Projects that taught<br />me to <em>think bigger.</em></h2>
          <p>Academic and personal builds shaped by real needs, careful problem-solving, and a willingness to keep iterating.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className={`project-card ${project.tone}`} key={project.number}>
              <span className="project-number">{project.number}</span>
              <div className="project-icon" aria-hidden="true">
                {project.number === "01" ? "⌁" : project.number === "02" ? "✓" : "{ }"}
              </div>
              <h3>{project.title.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h3>
              <p>{project.description}</p>
              <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section learning-section" id="learning">
        <div className="section-index"><span>04</span> CERTIFICATIONS & LEARNING</div>
        <div className="learning-grid">
          <div>
            <h2>Always learning.<br /><em>Always building.</em></h2>
            <p className="learning-note">My current learning tracks complement my IT studies and project work. Formal credential details can be added here as they are completed.</p>
          </div>
          <div className="timeline">
            {learning.map((item) => (
              <article key={item.title}>
                <span className="timeline-dot" />
                <small>{item.year}</small>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <b>{item.label}</b>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-orbit"><span>HN</span></div>
        <p className="contact-kicker">Have an idea or opportunity?</p>
        <h2>Let&apos;s build something<br /><em>meaningful.</em></h2>
        <p className="contact-copy">I&apos;m open to internships, collaborations, and conversations about web development, automation, AI, or IoT.</p>
        <a className="button button-dark" href="#top">Start a conversation <ArrowUpRight /></a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">HN</span><span className="brand-name">HNCRAFTS<span>.</span></span></a>
        <p>Designing. Developing. Discovering.</p>
        <p>© 2026 Shakil Ahamed</p>
      </footer>
    </main>
  );
}
