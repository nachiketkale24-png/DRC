import React, { useRef, Suspense } from 'react'
import AnimatedBackground from '../components/AnimatedBackground'
import AnimatedDrone from '../components/AnimatedDrone'
import { Award, Users, Rocket, Calendar, Cpu, Brain, Radio, Home, Trophy, Mail, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react'

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

const HomePage = () => {
  const splineRef = useRef()

  return (
    <div className="page">
      <AnimatedBackground />

      {/* SIDEBARS - Fixed Position */}
      <div className="sidebar-left">
        <a href="#home" className="sidebar-icon group">
          <Home className="w-5 h-5" />
          <span className="sidebar-tooltip">Home</span>
        </a>
        <a href="#about" className="sidebar-icon group">
          <Cpu className="w-5 h-5" />
          <span className="sidebar-tooltip">About</span>
        </a>
        <a href="#events" className="sidebar-icon group">
          <Calendar className="w-5 h-5" />
          <span className="sidebar-tooltip">Events</span>
        </a>
        <a href="#sponsors" className="sidebar-icon group">
          <Trophy className="w-5 h-5" />
          <span className="sidebar-tooltip">Sponsors</span>
        </a>
        <a href="#contact" className="sidebar-icon group">
          <Mail className="w-5 h-5" />
          <span className="sidebar-tooltip">Contact</span>
        </a>
      </div>

      <div className="sidebar-right">
        <a href="https://instagram.com/drc_spit" target="_blank" rel="noopener noreferrer" className="sidebar-icon group">
          <Instagram className="w-5 h-5" />
          <span className="sidebar-tooltip sidebar-tooltip-left">Instagram</span>
        </a>
        <a href="https://linkedin.com/company/drc-spit" target="_blank" rel="noopener noreferrer" className="sidebar-icon group">
          <Linkedin className="w-5 h-5" />
          <span className="sidebar-tooltip sidebar-tooltip-left">LinkedIn</span>
        </a>
        <a href="https://youtube.com/@drc-spit" target="_blank" rel="noopener noreferrer" className="sidebar-icon group">
          <Youtube className="w-5 h-5" />
          <span className="sidebar-tooltip sidebar-tooltip-left">YouTube</span>
        </a>
      </div>

      {/* MAIN CONTAINER */}
      <div className="container">
        {/* HERO SECTION */}
        <section id="home" className="section hero">
          <div className="hero-content">
            <div style={{ marginBottom: '24px' }}>
              <div className="hero-badge">SPIT MUMBAI</div>
            </div>
            <h1 className="hero-title">
              <span className="gradient-text">Drones & Robotics</span> Club
            </h1>
            <p className="hero-subtitle">
              Pioneering autonomous systems and robotics innovation at SPIT Mumbai
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '32px' }}>
              <button style={{
                padding: '12px 32px',
                background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-magenta))',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s'
              }}>
                Join Us
              </button>
              <button style={{
                padding: '12px 32px',
                background: 'rgba(57, 224, 255, 0.1)',
                color: 'var(--accent-cyan)',
                border: '2px solid var(--accent-cyan)',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s'
              }}>
                Learn More
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <AnimatedDrone />
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="section">
          <div className="grid-4">
            <div className="card" style={{ textAlign: 'center' }}>
              <div className="stats-number">50+</div>
              <div className="stats-label">Awards</div>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div className="stats-number">120+</div>
              <div className="stats-label">Members</div>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div className="stats-number">35+</div>
              <div className="stats-label">Projects</div>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div className="stats-number">25+</div>
              <div className="stats-label">Events</div>
            </div>
          </div>
        </section>

        {/* WHAT WE DO - Features Section */}
        <section className="section">
          <h2 className="section-title">
            WHAT WE <span className="gradient-text">DO</span>
          </h2>
          <div className="grid-3">
            <div className="card">
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '12px',
                background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-magenta))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <Rocket className="w-6 h-6" style={{ color: 'white' }} />
              </div>
              <h3 style={{ marginBottom: '12px', fontSize: '18px', fontWeight: '700', color: 'white' }}>Build & Innovate</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--neutral-muted)' }}>
                Develop cutting-edge drone and robotics projects from concept to competition.
              </p>
            </div>
            <div className="card">
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '12px',
                background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-magenta))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <Brain className="w-6 h-6" style={{ color: 'white' }} />
              </div>
              <h3 style={{ marginBottom: '12px', fontSize: '18px', fontWeight: '700', color: 'white' }}>Learn & Grow</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--neutral-muted)' }}>
                Master AI, robotics, and advanced engineering through hands-on experience.
              </p>
            </div>
            <div className="card">
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '12px',
                background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-magenta))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <Trophy className="w-6 h-6" style={{ color: 'white' }} />
              </div>
              <h3 style={{ marginBottom: '12px', fontSize: '18px', fontWeight: '700', color: 'white' }}>Compete & Win</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--neutral-muted)' }}>
                Compete nationally and internationally in prestigious robotics competitions.
              </p>
            </div>
          </div>
        </section>

        {/* OUR VERTICALS */}
        <section className="section">
          <h2 className="section-title">
            OUR <span className="gradient-text">VERTICALS</span>
          </h2>
          <div className="grid-3">
            <div className="card">
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '12px',
                background: 'rgba(57, 224, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <Radio className="w-6 h-6" style={{ color: 'var(--accent-cyan)' }} />
              </div>
              <h3 style={{ marginBottom: '12px', fontSize: '18px', fontWeight: '700', color: 'white' }}>UAV & Drones</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--neutral-muted)' }}>
                Design, build, and test autonomous aerial systems for various applications.
              </p>
            </div>
            <div className="card">
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '12px',
                background: 'rgba(57, 224, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <Cpu className="w-6 h-6" style={{ color: 'var(--accent-cyan)' }} />
              </div>
              <h3 style={{ marginBottom: '12px', fontSize: '18px', fontWeight: '700', color: 'white' }}>Autonomous Systems</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--neutral-muted)' }}>
                Develop intelligent robots with computer vision and machine learning.
              </p>
            </div>
            <div className="card">
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '12px',
                background: 'rgba(57, 224, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <Users className="w-6 h-6" style={{ color: 'var(--accent-cyan)' }} />
              </div>
              <h3 style={{ marginBottom: '12px', fontSize: '18px', fontWeight: '700', color: 'white' }}>Humanoid Robotics</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--neutral-muted)' }}>
                Build humanoid robots for research and competition challenges.
              </p>
            </div>
            <div className="card">
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '12px',
                background: 'rgba(57, 224, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <Award className="w-6 h-6" style={{ color: 'var(--accent-cyan)' }} />
              </div>
              <h3 style={{ marginBottom: '12px', fontSize: '18px', fontWeight: '700', color: 'white' }}>Workshops & Events</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--neutral-muted)' }}>
                Organize technical workshops and hands-on learning sessions.
              </p>
            </div>
            <div className="card">
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '12px',
                background: 'rgba(57, 224, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <Rocket className="w-6 h-6" style={{ color: 'var(--accent-cyan)' }} />
              </div>
              <h3 style={{ marginBottom: '12px', fontSize: '18px', fontWeight: '700', color: 'white' }}>Advanced Projects</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--neutral-muted)' }}>
                Tackle advanced challenges in AI and autonomous navigation.
              </p>
            </div>
            <div className="card">
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '12px',
                background: 'rgba(57, 224, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <Radio className="w-6 h-6" style={{ color: 'var(--accent-cyan)' }} />
              </div>
              <h3 style={{ marginBottom: '12px', fontSize: '18px', fontWeight: '700', color: 'white' }}>IoT & Embedded</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--neutral-muted)' }}>
                Develop IoT solutions and embedded systems for robotics.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* EVENTS TICKER - Full Width */}
      <section id="events" className="ticker-wrap">
        <div className="ticker">
          <span className="ticker-item">🏆 ABU ROBOCON 2024 • QUALIFIERS CLEARED</span>
          <span className="ticker-item">🚁 E-YANTRA • NATIONAL FINALISTS</span>
          <span className="ticker-item">🤖 SMART INDIA HACKATHON • TOP 10</span>
          <span className="ticker-item">⚡ DRONA AVIATION WORKSHOP • 200+ PARTICIPANTS</span>
          <span className="ticker-item">🎯 TECHFEST IIT BOMBAY • REGIONAL WINNERS</span>
          <span className="ticker-item">🏆 ABU ROBOCON 2024 • QUALIFIERS CLEARED</span>
          <span className="ticker-item">🚁 E-YANTRA • NATIONAL FINALISTS</span>
          <span className="ticker-item">🤖 SMART INDIA HACKATHON • TOP 10</span>
        </div>
      </section>

      {/* SPONSORS SECTION */}
      <div className="container">
        <section id="sponsors" className="section">
          <h2 className="section-title">
            OUR <span className="gradient-text">PARTNERS</span>
          </h2>
          
          <div className="card" style={{ padding: '48px', textAlign: 'center' }}>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: '48px' 
            }}>
              <div style={{ fontSize: '24px', fontWeight: '700', color: 'rgba(229, 240, 255, 0.4)', cursor: 'pointer', transition: 'color 0.3s' }}
                   onMouseEnter={(e) => e.target.style.color = 'var(--accent-cyan)'}
                   onMouseLeave={(e) => e.target.style.color = 'rgba(229, 240, 255, 0.4)'}>
                DRONA AVIATION
              </div>
              <div style={{ fontSize: '24px', fontWeight: '700', color: 'rgba(229, 240, 255, 0.4)', cursor: 'pointer', transition: 'color 0.3s' }}
                   onMouseEnter={(e) => e.target.style.color = 'var(--accent-cyan)'}
                   onMouseLeave={(e) => e.target.style.color = 'rgba(229, 240, 255, 0.4)'}>
                ROBOSOFT
              </div>
              <div style={{ fontSize: '24px', fontWeight: '700', color: 'rgba(229, 240, 255, 0.4)', cursor: 'pointer', transition: 'color 0.3s' }}
                   onMouseEnter={(e) => e.target.style.color = 'var(--accent-cyan)'}
                   onMouseLeave={(e) => e.target.style.color = 'rgba(229, 240, 255, 0.4)'}>
                MATHWORKS
              </div>
              <div style={{ fontSize: '24px', fontWeight: '700', color: 'rgba(229, 240, 255, 0.4)', cursor: 'pointer', transition: 'color 0.3s' }}
                   onMouseEnter={(e) => e.target.style.color = 'var(--accent-cyan)'}
                   onMouseLeave={(e) => e.target.style.color = 'rgba(229, 240, 255, 0.4)'}>
                SOLIDWORKS
              </div>
              <div style={{ fontSize: '24px', fontWeight: '700', color: 'rgba(229, 240, 255, 0.4)', cursor: 'pointer', transition: 'color 0.3s' }}
                   onMouseEnter={(e) => e.target.style.color = 'var(--accent-cyan)'}
                   onMouseLeave={(e) => e.target.style.color = 'rgba(229, 240, 255, 0.4)'}>
                ANSYS
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" className="section">
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
                Drones & Robotics Club, SPIT Mumbai. Pioneering autonomous systems and robotics innovation.
              </p>
            </div>
            
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="/teams">Teams</a></li>
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
                  transition: 'all 0.3s'
                }}>
                  <Instagram className="w-5 h-5" style={{ color: 'var(--accent-cyan)' }} />
                </a>
                <a href="https://linkedin.com/company/drc-spit" target="_blank" rel="noopener noreferrer" style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s'
                }}>
                  <Linkedin className="w-5 h-5" style={{ color: 'var(--accent-cyan)' }} />
                </a>
                <a href="https://youtube.com/@drc-spit" target="_blank" rel="noopener noreferrer" style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s'
                }}>
                  <Youtube className="w-5 h-5" style={{ color: 'var(--accent-cyan)' }} />
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

export default HomePage
