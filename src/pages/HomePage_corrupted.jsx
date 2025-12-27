import { useRef } from 'react'
import Spline from '@splinetool/react-spline'
import AnimatedBackground from '../components/AnimatedBackground'
import { Award, Users, Rocket, Calendar, Cpu, Brain, Radio, Home, Trophy, Mail, Instagram, Linkedin, Youtube, MessageCircle, Phone } from 'lucide-react'

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
        <a href="https://discord.gg/drc-spit" target="_blank" rel="noopener noreferrer" className="sidebar-icon group">
          <MessageCircle className="w-5 h-5" />
          <span className="sidebar-tooltip sidebar-tooltip-left">Discord</span>
        </a>
        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="sidebar-icon group">
          <Phone className="w-5 h-5" />
          <span className="sidebar-tooltip sidebar-tooltip-left">WhatsApp</span>
        </a>
      </div>

      {/* HERO SECTION */}
      <div className="container">
        <section id="home" className="hero">
          <div className="hero-content slide-in-up">
            <div className="hero-badge">SPIT MUMBAI</div>
            
            <h1 className="hero-title">
              DRC <span className="gradient-text">ROBOTICS</span>
            </h1>
            
            <p className="hero-subtitle">
              Building the future of autonomous systems through innovation, hands-on engineering, and cutting-edge research.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn-cyber">EXPLORE PROJECTS</button>
              <button className="btn-glass">VIEW EVENTS</button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="spline-container">
              <Spline
                scene="https://prod.spline.design/rP-qbmWVVE0G6ecS/scene.splinecode"
                onLoad={(spline) => { splineRef.current = spline }}
              />
            </div>
          </div>
        </section>
      </div>

      {/* STATS SECTION */}
      <div className="container">
        <section className="section">
          <div className="grid-4">
            <div className="card stats-card">
              <Award className="stats-icon" />
              <div className="stats-number">50+</div>
              <div className="stats-label">Awards</div>
            </div>
            
            <div className="card stats-card">
              <Users className="stats-icon" />
              <div className="stats-number">120+</div>
              <div className="stats-label">Members</div>
            </div>
            
            <div className="card stats-card">
              <Rocket className="stats-icon" />
              <div className="stats-number">35+</div>
              <div className="stats-label">Projects</div>
            </div>
            
            <div className="card stats-card">
              <Calendar className="stats-icon" />
              <div className="stats-number">25+</div>
              <div className="stats-label">Events</div>
            </div>
          </div>
        </section>
      </div>

      {/* WHAT WE DO */}
      <div className="container">
        <section id="about" className="section">
          <h2 className="section-title">
            WHAT WE <span className="gradient-text">DO</span>
          </h2>
          <p className="section-subtitle">
            Pushing boundaries in robotics, AI, and autonomous systems
          </p>
          
          <div className="grid-3">
            <div className="card feature-card">
              <div className="feature-icon">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="feature-title">Autonomous Drones</h3>
              <p className="feature-description">
                Design and develop cutting-edge autonomous drones with advanced navigation, obstacle avoidance, and mission planning capabilities.
              </p>
            </div>
            
            <div className="card feature-card">
              <div className="feature-icon">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="feature-title">Robotics Systems</h3>
              <p className="feature-description">
                Build sophisticated robotic systems for industrial automation, research, and competition. From manipulators to mobile robots.
              </p>
            </div>
            
            <div className="card feature-card">
              <div className="feature-icon">
                <Radio className="w-8 h-8 text-white" />
              </div>
              <h3 className="feature-title">AI Navigation</h3>
              <p className="feature-description">
                Implement machine learning algorithms for intelligent path planning, SLAM, computer vision, and autonomous decision-making.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* OUR VERTICALS */}
      <div className="container">
        <section className="section">
          <h2 className="section-title">
            OUR <span className="gradient-text">VERTICALS</span>
          </h2>
          <p className="section-subtitle">
            Specialized teams driving innovation across multiple domains
          </p>
          
          <div className="grid-3">
            <div className="card vertical-card">
              <div className="vertical-header">
                <div className="vertical-icon-box">
                  <Cpu className="w-7 h-7 text-white" />
                </div>
                <h3 className="vertical-title">Hardware & Electronics</h3>
              </div>
              <p className="vertical-description">
                PCB design, circuit optimization, sensor integration, and embedded systems development.
              </p>
            </div>
            
            <div className="card vertical-card">
              <div className="vertical-header">
                <div className="vertical-icon-box">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <h3 className="vertical-title">Software & AI</h3>
              </div>
              <p className="vertical-description">
                Flight controllers, path planning algorithms, computer vision, and autonomous control systems.
              </p>
            </div>
            
            <div className="card vertical-card">
              <div className="vertical-header">
                <div className="vertical-icon-box">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <h3 className="vertical-title">Mechanical Design</h3>
              </div>
              <p className="vertical-description">
                CAD modeling, structural analysis, drone frame optimization, and 3D printing.
              </p>
            </div>
            
            <div className="card vertical-card">
              <div className="vertical-header">
                <div className="vertical-icon-box">
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <h3 className="vertical-title">Competitions</h3>
              </div>
              <p className="vertical-description">
                Competing in national and international robotics competitions including ABU Robocon.
              </p>
            </div>
            
            <div className="card vertical-card">
              <div className="vertical-header">
                <div className="vertical-icon-box">
                  <Radio className="w-7 h-7 text-white" />
                </div>
                <h3 className="vertical-title">R&D Innovation</h3>
              </div>
              <p className="vertical-description">
                Research projects in swarm robotics, autonomous navigation, and emerging technologies.
              </p>
            </div>
            
            <div className="card vertical-card">
              <div className="vertical-header">
                <div className="vertical-icon-box">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="vertical-title">Workshops & Events</h3>
              </div>
              <p className="vertical-description">
                Organizing technical workshops, guest lectures, and hands-on robotics sessions.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* EVENTS TICKER */}
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

      {/* SPONSORS */}
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
              {['DRONA AVIATION', 'ROBOSOFT', 'MATHWORKS', 'SOLIDWORKS', 'ANSYS'].map((sponsor) => (
                <div 
                  key={sponsor}
                  style={{ 
                    fontSize: '24px', 
                    fontWeight: '700', 
                    color: 'rgba(229, 240, 255, 0.4)', 
                    cursor: 'pointer', 
                    transition: 'color 0.3s' 
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--accent-cyan)'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(229, 240, 255, 0.4)'}
                >
                  {sponsor}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <div className="container">
        <footer id="contact" className="footer">
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
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="/teams">Teams</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Workshops</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Gallery</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Connect</h4>
              <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                {[
                  { icon: Instagram, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Youtube, href: '#' }
                ].map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.href}
                    style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s'
                    }}
                  >
                    <social.icon className="w-5 h-5" style={{ color: 'var(--accent-cyan)' }} />
                  </a>
                ))}
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

      {/* LEFT SIDEBAR - Outside Container */}
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

      {/* RIGHT SIDEBAR - Social Media */}
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
        <a href="https://discord.gg/drc-spit" target="_blank" rel="noopener noreferrer" className="sidebar-icon group">
          <MessageCircle className="w-5 h-5" />
          <span className="sidebar-tooltip sidebar-tooltip-left">Discord</span>
        </a>
        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="sidebar-icon group">
          <Phone className="w-5 h-5" />
          <span className="sidebar-tooltip sidebar-tooltip-left">WhatsApp</span>
        </a>
      </div>

      {/* HERO SECTION - Perfectly Centered */}
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-grid">
            {/* Left: Text Content */}
            <div className="hero-left slide-in-up">
              <div className="hero-badge">SPIT MUMBAI</div>
              
              <h1 className="hero-title">
                DRC <span className="gradient-text">ROBOTICS</span>
              </h1>
              
              <p className="hero-subtitle">
                Building the future of autonomous systems through innovation, hands-on engineering, and cutting-edge research.
              </p>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button className="btn-cyber">EXPLORE PROJECTS</button>
                <button className="btn-glass">VIEW EVENTS</button>
              </div>
            </div>

            {/* Right: Spline Drone */}
            <div className="hero-right">
              <div className="spline-container">
                <Spline
                  scene="https://prod.spline.design/rP-qbmWVVE0G6ecS/scene.splinecode"
                  onLoad={(spline) => { splineRef.current = spline }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION - 4 Columns Centered */}
      <section className="site-section">
        <div className="site-container">
          <div className="grid-4">
            <div className="glass-card stats-card">
              <Award className="stats-icon" />
              <div className="stats-number">50+</div>
              <div className="stats-label">Awards</div>
            </div>
            
            <div className="glass-card stats-card">
              <Users className="stats-icon" />
              <div className="stats-number">120+</div>
              <div className="stats-label">Members</div>
            </div>
            
            <div className="glass-card stats-card">
              <Rocket className="stats-icon" />
              <div className="stats-number">35+</div>
              <div className="stats-label">Projects</div>
            </div>
            
            <div className="glass-card stats-card">
              <Calendar className="stats-icon" />
              <div className="stats-number">25+</div>
              <div className="stats-label">Events</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO - 3 Columns Perfectly Aligned */}
      <section id="about" className="site-section">
        <div className="site-container">
          <h2 className="section-title">
            WHAT WE <span className="gradient-text">DO</span>
          </h2>
          <p className="section-subtitle">
            Pushing boundaries in robotics, AI, and autonomous systems with cutting-edge innovation
          </p>
          
          <div className="grid-3">
            <div className="glass-card feature-card">
              <div className="feature-icon">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="feature-title">Autonomous Drones</h3>
              <p className="feature-description">
                Design and develop cutting-edge autonomous drones with advanced navigation, obstacle avoidance, and mission planning capabilities.
              </p>
            </div>
            
            <div className="glass-card feature-card">
              <div className="feature-icon">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="feature-title">Robotics Systems</h3>
              <p className="feature-description">
                Build sophisticated robotic systems for industrial automation, research, and competition. From manipulators to mobile robots.
              </p>
            </div>
            
            <div className="glass-card feature-card">
              <div className="feature-icon">
                <Radio className="w-8 h-8 text-white" />
              </div>
              <h3 className="feature-title">AI Navigation</h3>
              <p className="feature-description">
                Implement machine learning algorithms for intelligent path planning, SLAM, computer vision, and autonomous decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VERTICALS - 3 Columns Grid */}
      <section className="site-section">
        <div className="site-container">
          <h2 className="section-title">
            OUR <span className="gradient-text">VERTICALS</span>
          </h2>
          <p className="section-subtitle">
            Specialized teams driving innovation across multiple domains
          </p>
          
          <div className="grid-3">
            <div className="glass-card vertical-card">
              <div className="vertical-header">
                <div className="vertical-icon-box">
                  <Cpu className="w-7 h-7 text-white" />
                </div>
                <h3 className="vertical-title">Hardware & Electronics</h3>
              </div>
              <p className="vertical-description">
                PCB design, circuit optimization, sensor integration, and embedded systems development for next-gen robotics.
              </p>
            </div>
            
            <div className="glass-card vertical-card">
              <div className="vertical-header">
                <div className="vertical-icon-box">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <h3 className="vertical-title">Software & AI</h3>
              </div>
              <p className="vertical-description">
                Flight controllers, path planning algorithms, computer vision, and autonomous control systems powered by AI.
              </p>
            </div>
            
            <div className="glass-card vertical-card">
              <div className="vertical-header">
                <div className="vertical-icon-box">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <h3 className="vertical-title">Mechanical Design</h3>
              </div>
              <p className="vertical-description">
                CAD modeling, structural analysis, drone frame optimization, and rapid prototyping with 3D printing.
              </p>
            </div>
            
            <div className="glass-card vertical-card">
              <div className="vertical-header">
                <div className="vertical-icon-box">
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <h3 className="vertical-title">Competitions</h3>
              </div>
              <p className="vertical-description">
                Competing in national and international robotics competitions including ABU Robocon and IIT Techfest.
              </p>
            </div>
            
            <div className="glass-card vertical-card">
              <div className="vertical-header">
                <div className="vertical-icon-box">
                  <Radio className="w-7 h-7 text-white" />
                </div>
                <h3 className="vertical-title">R&D Innovation</h3>
              </div>
              <p className="vertical-description">
                Research projects in swarm robotics, autonomous navigation, and emerging technologies in robotics.
              </p>
            </div>
            
            <div className="glass-card vertical-card">
              <div className="vertical-header">
                <div className="vertical-icon-box">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="vertical-title">Workshops & Events</h3>
              </div>
              <p className="vertical-description">
                Organizing technical workshops, guest lectures, and hands-on sessions to spread robotics knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

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

      {/* SPONSORS SECTION - Centered */}
      <section id="sponsors" className="site-section">
        <div className="site-container">
          <h2 className="section-title">
            OUR <span className="gradient-text">PARTNERS</span>
          </h2>
          
          <div className="glass-card" style={{ padding: '48px', textAlign: 'center' }}>
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
        </div>
      </section>

      {/* FOOTER - Centered */}
      <footer id="contact" className="footer">
        <div className="site-container">
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
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="/teams">Teams</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Workshops</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Gallery</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Connect</h4>
              <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                <a href="#" style={{ 
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
                <a href="#" style={{ 
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
                <a href="#" style={{ 
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
        </div>
      </footer>
    </div>
  )
}

export default HomePage
