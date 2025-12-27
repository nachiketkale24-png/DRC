import React from 'react'
import AnimatedBackground from '../components/AnimatedBackground'
import { Users, Code, Cpu, Zap, Award, Github, Linkedin, Mail, Home, Calendar, Trophy } from 'lucide-react'

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }
  
  render() {
    if (this.state.hasError) {
      return <div style={{ width: '100%', height: '100%', background: 'rgba(57, 224, 255, 0.05)', borderRadius: '12px' }}></div>
    }
    return this.props.children
  }
}

const TeamsPage = () => {
  const teams = [
    {
      id: 1,
      name: "Web Development & IoT Systems",
      description: "Building smart web and IoT systems for real-time connectivity, automation, and device integration.",
      members: [
        { name: "Soham Bhosale", role: "Lead" },
        { name: "Parth Pingle", role: "Member" },
        { name: "Saloni Sawant", role: "Member" },
        { name: "Vansh Parate", role: "Member" },
      ],
      technologies: ["JavaScript", "React", "Python", "ESP32"],
      projects: 8,
      icon: Cpu,
    },
    {
      id: 2,
      name: "Circuits & PCB Design",
      description: "Designing and prototyping custom circuit boards and electronic systems for reliable hardware performance.",
      members: [
        { name: "Yadnyesh Sable", role: "Lead" },
        { name: "Arushi Shetty", role: "Member" },
        { name: "Vishal Rathod", role: "Member" },
        { name: "Parth Kadam", role: "Member" },
      ],
      technologies: ["Eagle", "Proteus", "Simulink", "KICAD"],
      projects: 10,
      icon: Zap,
    },
    {
      id: 3,
      name: "Embedded Systems & Programming",
      description: "Programming microcontrollers and integrating sensors to enable intelligent embedded systems.",
      members: [
        { name: "Harsh Joshi", role: "Lead" },
        { name: "Vishal Rathod", role: "Co-Lead" },
        { name: "Soham Bhosale", role: "Member" },
        { name: "Aditya Kumar", role: "Member" },
      ],
      technologies: ["C", "C++", "Arduino", "STM32", "Assembly"],
      projects: 7,
      icon: Code,
    },
    {
      id: 4,
      name: "Robotics & Autonomous Systems",
      description: "Design and build intelligent robots with computer vision, AI, and autonomous navigation capabilities.",
      members: [
        { name: "Parth Kadam", role: "Lead" },
        { name: "Harsh Joshi", role: "Co-Lead" },
        { name: "Nisarg Chhoda", role: "Member" },
        { name: "Aditya Hursale", role: "Member" },
      ],
      technologies: ["ROS", "OpenCV", "Python", "TensorFlow"],
      projects: 12,
      icon: Award,
    },
  ]

  const coreTeam = [
    {
      name: "Yadnyesh Sable",
      role: "Chairperson",
      branch: "Electronics Engineering",
      email: "yadnyesh@spit.ac.in",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Harsh Joshi",
      role: "Vice-Chairperson",
      branch: "Electronics Engineering",
      email: "harsh@spit.ac.in",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Soham Bhosale",
      role: "Technical Secretary",
      branch: "Computer Engineering",
      email: "soham@spit.ac.in",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Parth Kadam",
      role: "Technical Secretary",
      branch: "Electronics Engineering",
      email: "parth@spit.ac.in",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Aditya Hursale",
      role: "Creatives Lead",
      branch: "Computer Engineering",
      email: "aditya@spit.ac.in",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Arushi Shetty",
      role: "Content Manager",
      branch: "Electronics Engineering",
      email: "arushi@spit.ac.in",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
  ]

  return (
    <div className="page">
      <AnimatedBackground />

      {/* SIDEBARS - Fixed Position */}
      <div className="sidebar-left">
        <a href="/" className="sidebar-icon group">
          <Home className="w-5 h-5" />
          <span className="sidebar-tooltip">Home</span>
        </a>
        <a href="/teams" className="sidebar-icon group">
          <Users className="w-5 h-5" />
          <span className="sidebar-tooltip">Teams</span>
        </a>
        <a href="/#events" className="sidebar-icon group">
          <Calendar className="w-5 h-5" />
          <span className="sidebar-tooltip">Events</span>
        </a>
        <a href="/#sponsors" className="sidebar-icon group">
          <Trophy className="w-5 h-5" />
          <span className="sidebar-tooltip">Sponsors</span>
        </a>
        <a href="/#contact" className="sidebar-icon group">
          <Mail className="w-5 h-5" />
          <span className="sidebar-tooltip">Contact</span>
        </a>
      </div>

      <div className="sidebar-right">
        <a href="https://instagram.com/drc_spit" target="_blank" rel="noopener noreferrer" className="sidebar-icon group">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
          </svg>
          <span className="sidebar-tooltip sidebar-tooltip-left">Instagram</span>
        </a>
        <a href="https://linkedin.com/company/drc-spit" target="_blank" rel="noopener noreferrer" className="sidebar-icon group">
          <Linkedin className="w-5 h-5" />
          <span className="sidebar-tooltip sidebar-tooltip-left">LinkedIn</span>
        </a>
        <a href="https://youtube.com/@drc-spit" target="_blank" rel="noopener noreferrer" className="sidebar-icon group">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.615 3.595c2.296.789 4.1 2.593 4.889 4.889.98 2.801.98 8.645.98 8.645s0 5.844-.98 8.645c-.789 2.296-2.593 4.1-4.889 4.889-2.801.98-8.645.98-8.645.98s-5.844 0-8.645-.98c-2.296-.789-4.1-2.593-4.889-4.889-.98-2.801-.98-8.645-.98-8.645s0-5.844.98-8.645c.789-2.296 2.593-4.1 4.889-4.889 2.801-.98 8.645-.98 8.645-.98s5.844 0 8.645.98zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          <span className="sidebar-tooltip sidebar-tooltip-left">YouTube</span>
        </a>
      </div>

      {/* MAIN CONTAINER */}
      <div className="container">
        {/* HERO SECTION */}
        <section className="section" style={{ textAlign: 'center', paddingTop: '40px' }}>
          <div className="hero-badge">MEET THE TEAM</div>
          <h1 className="hero-title" style={{ marginTop: '20px' }}>
            The <span className="gradient-text">Brilliant Minds</span> Behind DRC
          </h1>
          <p className="hero-subtitle">
            Diverse talents united by passion for robotics, innovation, and excellence
          </p>
        </section>

        {/* CORE TEAM */}
        <section className="section">
          <h2 className="section-title">
            CORE <span className="gradient-text">LEADERSHIP</span>
          </h2>
          <div className="grid-3">
            {coreTeam.map((member, idx) => (
              <ErrorBoundary key={idx}>
                <div className="card">
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '16px', 
                    background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-magenta))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    margin: '0 auto 16px'
                  }}>
                    <Users className="w-8 h-8" style={{ color: 'white' }} />
                  </div>
                  <h3 style={{ marginBottom: '4px', fontSize: '18px', fontWeight: '700', color: 'white', textAlign: 'center' }}>
                    {member.name}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--accent-cyan)', marginBottom: '4px', textAlign: 'center', fontWeight: '600' }}>
                    {member.role}
                  </p>
                  <p style={{ fontSize: '12px', color: 'var(--neutral-muted)', marginBottom: '16px', textAlign: 'center' }}>
                    {member.branch}
                  </p>
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                    <a href={member.github} target="_blank" rel="noopener noreferrer" style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)',
                      transition: 'all 0.3s'
                    }} onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(57, 224, 255, 0.2)'
                      e.target.style.color = '#39E0FF'
                    }} onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.08)'
                    }}>
                      <Github className="w-4 h-4" />
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)',
                      transition: 'all 0.3s'
                    }} onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(57, 224, 255, 0.2)'
                    }} onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.08)'
                    }}>
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={`mailto:${member.email}`} style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)',
                      transition: 'all 0.3s'
                    }} onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(57, 224, 255, 0.2)'
                    }} onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.08)'
                    }}>
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </ErrorBoundary>
            ))}
          </div>
        </section>

        {/* TEAMS SECTION */}
        <section className="section">
          <h2 className="section-title">
            SPECIALIZED <span className="gradient-text">TEAMS</span>
          </h2>
          
          {teams.map((team, idx) => (
            <div key={team.id} style={{ marginBottom: '48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px', gap: '16px' }}>
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-magenta))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <team.icon className="w-7 h-7" style={{ color: 'white' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'white', marginBottom: '4px' }}>
                    {team.name}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--neutral-muted)' }}>
                    {team.members.length} Members • {team.projects} Active Projects
                  </p>
                </div>
              </div>

              <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--neutral-muted)', marginBottom: '20px' }}>
                {team.description}
              </p>

              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--accent-cyan)', marginBottom: '12px', textTransform: 'uppercase' }}>
                  Technologies
                </h4>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {team.technologies.map((tech, idx) => (
                    <div key={idx} style={{
                      padding: '6px 16px',
                      background: 'rgba(57, 224, 255, 0.1)',
                      border: '1px solid rgba(57, 224, 255, 0.3)',
                      borderRadius: '8px',
                      fontSize: '13px',
                      color: 'var(--accent-cyan)',
                      fontWeight: '500'
                    }}>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--accent-cyan)', marginBottom: '12px', textTransform: 'uppercase' }}>
                  Team Members
                </h4>
                <div className="grid-2">
                  {team.members.map((member, idx) => (
                    <div key={idx} className="card" style={{ padding: '16px' }}>
                      <h5 style={{ fontSize: '15px', fontWeight: '600', color: 'white', marginBottom: '4px' }}>
                        {member.name}
                      </h5>
                      <p style={{ fontSize: '12px', color: 'var(--accent-cyan)' }}>
                        {member.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {idx < teams.length - 1 && (
                <div style={{ height: '1px', background: 'rgba(57, 224, 255, 0.1)', margin: '40px 0 0 0' }} />
              )}
            </div>
          ))}
        </section>

        {/* FOOTER */}
        <footer className="section" style={{ borderTop: '1px solid rgba(57, 224, 255, 0.1)', paddingTop: '48px' }}>
          <div className="footer-grid">
            <div className="footer-column">
              <div style={{ 
                width: '56px', 
                height: '56px', 
                borderRadius: '14px', 
                background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-magenta))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: '900',
                color: 'white',
                marginBottom: '20px'
              }}>
                DRC
              </div>
              <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--neutral-muted)' }}>
                Drones & Robotics Club, SPIT Mumbai. Building the future of autonomous systems.
              </p>
            </div>
            
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><a href="/">Home</a></li>
                <li><a href="/teams">Teams</a></li>
                <li><a href="/#events">Events</a></li>
                <li><a href="/#sponsors">Partners</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Resources</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Workshops</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Gallery</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Connect</h4>
              <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                <a href="https://instagram.com/drc_spit" target="_blank" rel="noopener noreferrer" style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s',
                  color: 'var(--accent-cyan)'
                }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/company/drc-spit" target="_blank" rel="noopener noreferrer" style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s',
                  color: 'var(--accent-cyan)'
                }}>
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://youtube.com/@drc-spit" target="_blank" rel="noopener noreferrer" style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s',
                  color: 'var(--accent-cyan)'
                }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.595c2.296.789 4.1 2.593 4.889 4.889.98 2.801.98 8.645.98 8.645s0 5.844-.98 8.645c-.789 2.296-2.593 4.1-4.889 4.889-2.801.98-8.645.98-8.645.98s-5.844 0-8.645-.98c-2.296-.789-4.1-2.593-4.889-4.889-.98-2.801-.98-8.645-.98-8.645s0-5.844.98-8.645c.789-2.296 2.593-4.1 4.889-4.889 2.801-.98 8.645-.98 8.645-.98s5.844 0 8.645.98zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            © 2024 DRC SPIT Mumbai. All rights reserved. <span style={{ color: 'var(--accent-cyan)' }}>Built with ⚡ by DRC Tech Team</span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default TeamsPage
