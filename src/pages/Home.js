function Home() {
  return (
    <div className="page">

      {/* ── HERO ── */}
      <section className="hero fade-in">
        <div>
          <div className="hero-eyebrow fade-up">Computer Science Student</div>

          <h1 className="hero-title fade-up-2">
            Building software that feels{' '}
            <span className="highlight">clear, fast,<br />and human.</span>
          </h1>

          <p className="hero-bio fade-up-3">
            I am Navvyah, studying my B.Tech CSE at Mahindra University interested in Machine Learning, 
            NLP, and Data Analytics. I have built projects like NLP-based text analysis,
            regression models, and visualization tools, and I am focused on improving my programming and problem-solving skills. I enjoy building projects that apply data-driven techniques to solve real-world problems.
          </p>

          <div className="hero-metrics fade-up-4">
            <div className="metric">
              <div className="metric-value">03+</div>
              <div className="metric-label">Projects Built</div>
            </div>
            <div className="metric">
              <div className="metric-value">Systems</div>
              <div className="metric-label">Learning Track</div>
            </div>
          </div>
        </div>

        {/* Profile visual */}
        <div className="hero-visual fade-in">
          <div className="profile-frame">
            <img src={require('../profile.jpg')} alt="Leela Karthikeya" className="profile-avatar" />
          </div>
        </div>
      </section>


      {/* ── RESEARCH + DETAILS ── */}
      <div className="two-col">

        {/* Research Interests */}
        <div className="research-card fade-up" style={{ animationDelay: '0.15s' }}>
          <div className="section-label">Research Interests</div>

          <div className="research-item">
            <h3>Software Development</h3>
            <p>Building efficient and reliable applications using programming, problem solving, and real-world system implementation.</p>
          </div>

          <div className="research-item">
            <h3>Full-Stack Web Technologies</h3>
            <p>Designing end-to-end web applications with React, Node.js, and modern frontend tooling.</p>
          </div>

          <div className="research-item">
            <h3>System Design</h3>
            <p>Understanding scalable architecture patterns and applying them through hands-on project work.</p>
          </div>
        </div>

        {/* Personal Details */}
        <div className="details-card fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="section-label" style={{ color: 'var(--teal)' }}>Personal Details</div>

          <div className="detail-row">
            <span className="detail-key">Name</span>
            <span className="detail-value">Navvyah</span>
          </div>
          <div className="detail-row">
            <span className="detail-key">Phone</span>
            <span className="detail-value">+91 8019275679</span>
          </div>
          <div className="detail-row">
            <span className="detail-key">Personal Email</span>
            <span className="detail-value">
              <a href="mailto:navvyah2005@gmail.com">navvyah2005@gmail.com</a>
            </span>
          </div>
          <div className="detail-row">
            <span className="detail-key">College Email</span>
            <span className="detail-value">
              <a href="mailto:leela@college.edu.in">se23umcs044@mahindrauniversity.edu.in</a>
            </span>
          </div>
          <div className="detail-row">
            <span className="detail-key"></span>
          </div>
        </div>
      </div>

      {/* ── SKILLS ── */}
      <section className="skills-section fade-up" style={{ animationDelay: '0.25s' }}>
        <div className="section-label">Skills &amp; Technologies</div>
        <div className="skills-cloud">
          {/* Primary */}
          {['React', 'JavaScript', 'Java'].map(s => (
            <span key={s} className="skill-pill primary">{s}</span>
          ))}
          {/* Secondary */}
          {['Node.js', 'HTML', 'CSS', 'Git', 'GitHub'].map(s => (
            <span key={s} className="skill-pill secondary">{s}</span>
          ))}
          {/* Tertiary */}
          {['Python', 'SQL', 'REST APIs', 'System Design', 'Data Structures'].map(s => (
            <span key={s} className="skill-pill tertiary">{s}</span>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;