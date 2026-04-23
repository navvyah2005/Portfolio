const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303
      3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
      0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422
      18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729
      1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305
      3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93
      0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176
      0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405
      1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23
      3.285-1.23.645 1.653.24 2.873.12 3.176.765.84
      1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475
      5.92.42.36.81 1.096.81 2.22 0 1.606-.015
      2.896-.015 3.286 0 .315.21.69.825.57C20.565
      22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const projects = [
  {
    name: "Student Performance Visualization Tool",
    description:     
     'A full-stack web application with frontend, backend, and database modules, designed to handle user interactions and data validation.',
    tech: ["'HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB', 'MySQL'"],
    github: 'https://github.com/Karthikeya029/SE-Project',
  },
  {
    name: "Gym Management System",
    description:
      "A desktop application to manage members, attendance, trainer allocation, and payments with clean object-oriented architecture.",
    tech: ['Java', 'Object-Oriented Programming', 'File Handling'],
    github: 'https://github.com/Karthikeya029/GymManagementSystem',
  },
  {
    name: "Semantic Matching Matrimony Platform",
    description:
       'An NLP-based matching system that analyzes semantic meaning in profiles to recommend highly compatible candidates.',
    tech: ['Python', 'NLP', 'Machine Learning', 'TF-IDF'],
    github: 'https://github.com/navvyah2005/NLP-PROJECT',
  },
];

function Projects() {
  return (
    <div className="page projects-page">

      {/* Header */}
      <header className="projects-header fade-up">
        <div>
          <h1 className="projects-title">
            Selected<br /><em>Work</em>
          </h1>
        </div>
        <div className="projects-count">
          {String(projects.length).padStart(2, '0')} Projects
        </div>
      </header>

      {/* Project Cards */}
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div
            key={i}
            className="project-card fade-up"
            style={{ animationDelay: `${0.1 + i * 0.12}s` }}
          >
            <div className="project-number">
              {String(i + 1).padStart(2, '0')}
            </div>

            <div className="project-body">
              <h2 className="project-name">{project.name}</h2>
              <p className="project-desc">{project.description}</p>
              <div className="tech-chips">
                {project.tech.map(t => (
                  <span key={t} className="tech-chip">{t}</span>
                ))}
              </div>
            </div>

            <div className="project-cta">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-github"
              >
                <GitHubIcon />
                View Repo
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="projects-footer fade-up" style={{ animationDelay: '0.45s' }}>
        <h2>More on GitHub</h2>
        <p>All source code, experiments, and contributions live on my GitHub profile.</p>
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noreferrer"
          className="btn-outline"
        >
          <GitHubIcon />
          Visit GitHub Profile
        </a>
      </div>

    </div>
  );
}

export default Projects;