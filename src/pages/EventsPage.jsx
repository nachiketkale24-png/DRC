import React, { useState } from 'react'
import AnimatedBackground from '../components/AnimatedBackground'
import { Calendar, Trophy, Users, Mail, Home, ArrowLeft, MapPin, CheckCircle, Clock } from 'lucide-react'

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null)

  const events = [
    {
      id: 1,
      title: "Bot Combat League",
      category: "Competition",
      date: "23 March 2025",
      status: "Completed",
      location: "Quadrangle, SPIT Campus",
      participants: "40+ Participants",
      description: "An adrenaline-pumping bot combat competition featuring Robo Sumo and Robo Soccer events.",
      details: "Bot Combat League, organized under Oculus in collaboration with IEEE-AESS Student Chapter, brought together robotics enthusiasts. Statewide participation showcased innovative bot design and control strategies.",
      highlights: [
        "Featured two sub-events: Robo Sumo and Robo Soccer",
        "Statewide participation from undergraduate teams",
        "1st Prize: ₹10,000 | 2nd Prize: ₹5,000 | 3rd Prize: ₹3,000",
        "Platform for showcasing competitive bot design"
      ]
    },
    {
      id: 2,
      title: "ESCALADE 14.0 - Zonals",
      category: "National",
      date: "25 July 2025",
      status: "Ongoing",
      location: "IIT Guwahati",
      participants: "5+ Teams",
      description: "DRC qualified for the national finals of India's premier robotics event hosted by IIT Guwahati.",
      details: "ESCALADE 14.0 Zonals marked a significant achievement for DRC. Our team successfully completed all required tasks and qualified for the finals.",
      highlights: [
        "Qualified for ESCALADE 14.0 Finals",
        "Successfully completed all given tasks",
        "Showcased efficient bot performance",
        "Demonstrated strong team coordination",
        "Recognized by Techniche, IIT Guwahati & EESA, TEC"
      ]
    },
    {
      id: 3,
      title: "FSTR - First Step Towards Robotics",
      category: "Internal",
      date: "Every Friday",
      status: "Ongoing",
      location: "SPIT Campus",
      participants: "120+ Members",
      description: "An internal initiative for member skill development through division-specific mini-projects.",
      details: "FSTR is an inter-club activity where members undertake mini-projects in embedded systems, CAD, PCB design, IoT, and AI/ML.",
      highlights: [
        "Division-specific mini-projects",
        "Embedded Systems, CAD, PCB, IoT, AI/ML",
        "Peer learning & collaboration",
        "Regular technical discussions",
        "Core skill development for all members"
      ]
    },
    {
      id: 4,
      title: "TechFest IIT Bombay",
      category: "Competition",
      date: "Ongoing",
      status: "Registered",
      location: "IIT Bombay",
      participants: "3+ Teams",
      description: "Participation in India's largest technical festival with multiple robotics events.",
      details: "DRC brings multiple teams to compete across various categories in TechFest's robotics events.",
      highlights: [
        "Multiple events and categories",
        "Inter-IIT level competition",
        "Innovation showcase platform",
        "Networking with national robotics community",
        "Previous regional victories"
      ]
    }
  ]

  return (
    <div className="page">
      <AnimatedBackground />

      {/* SIDEBARS */}
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
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
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
          <div className="hero-badge">OUR EVENTS</div>
          <h1 className="hero-title" style={{ marginTop: '20px' }}>
            Competitions & <span className="gradient-text">Achievements</span>
          </h1>
          <p className="hero-subtitle">
            From national competitions to internal workshops, DRC continuously pushes boundaries
          </p>
        </section>

        {/* EVENTS LIST OR DETAIL */}
        {!selectedEvent ? (
          <section className="section">
            <div className="grid-2">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="card"
                  style={{ cursor: 'pointer', transition: 'all 0.3s' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)'
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(57, 224, 255, 0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                  onClick={() => setSelectedEvent(event)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                    <div>
                      <div style={{ 
                        display: 'inline-block',
                        padding: '6px 12px',
                        background: 'rgba(57, 224, 255, 0.15)',
                        borderRadius: '6px',
                        fontSize: '11px',
                        fontWeight: '600',
                        color: 'var(--accent-cyan)',
                        textTransform: 'uppercase',
                        marginBottom: '12px'
                      }}>
                        {event.category}
                      </div>
                    </div>
                    <div style={{
                      padding: '6px 10px',
                      background: event.status === 'Completed' ? 'rgba(34, 197, 94, 0.15)' : 'rgba(59, 130, 246, 0.15)',
                      borderRadius: '6px',
                      fontSize: '10px',
                      fontWeight: '600',
                      color: event.status === 'Completed' ? '#22C55E' : '#3B82F6'
                    }}>
                      {event.status}
                    </div>
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'white', marginBottom: '12px' }}>
                    {event.title}
                  </h3>

                  <div style={{ display: 'flex', gap: '24px', marginBottom: '16px', fontSize: '13px', color: 'var(--neutral-muted)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Calendar className="w-4 h-4" style={{ color: 'var(--accent-cyan)' }} />
                      {event.date}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <MapPin className="w-4 h-4" style={{ color: 'var(--accent-cyan)' }} />
                      {event.location}
                    </div>
                  </div>

                  <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--neutral-muted)', marginBottom: '16px' }}>
                    {event.description}
                  </p>

                  <button
                    style={{
                      padding: '10px 20px',
                      background: 'rgba(57, 224, 255, 0.1)',
                      color: 'var(--accent-cyan)',
                      border: '1px solid rgba(57, 224, 255, 0.3)',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '13px',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(57, 224, 255, 0.2)'
                      e.target.style.borderColor = 'rgba(57, 224, 255, 0.5)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(57, 224, 255, 0.1)'
                      e.target.style.borderColor = 'rgba(57, 224, 255, 0.3)'
                    }}
                  >
                    Learn More →
                  </button>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section className="section">
            <button
              onClick={() => setSelectedEvent(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                background: 'rgba(57, 224, 255, 0.1)',
                color: 'var(--accent-cyan)',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                marginBottom: '32px',
                fontWeight: '600'
              }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Events
            </button>

            <div className="card">
              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', flexWrap: 'wrap' }}>
                  <div style={{
                    padding: '8px 16px',
                    background: 'rgba(57, 224, 255, 0.15)',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'var(--accent-cyan)',
                    textTransform: 'uppercase'
                  }}>
                    {selectedEvent.category}
                  </div>
                  <div style={{
                    padding: '8px 16px',
                    background: selectedEvent.status === 'Completed' ? 'rgba(34, 197, 94, 0.15)' : 'rgba(59, 130, 246, 0.15)',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: selectedEvent.status === 'Completed' ? '#22C55E' : '#3B82F6'
                  }}>
                    {selectedEvent.status}
                  </div>
                </div>

                <h1 style={{ fontSize: '36px', fontWeight: '700', color: 'white', marginBottom: '24px' }}>
                  {selectedEvent.title}
                </h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '32px' }}>
                  <div>
                    <p style={{ fontSize: '12px', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontWeight: '600', marginBottom: '4px' }}>
                      Date
                    </p>
                    <p style={{ fontSize: '16px', color: 'white', fontWeight: '600' }}>
                      {selectedEvent.date}
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontWeight: '600', marginBottom: '4px' }}>
                      Location
                    </p>
                    <p style={{ fontSize: '16px', color: 'white', fontWeight: '600' }}>
                      {selectedEvent.location}
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontWeight: '600', marginBottom: '4px' }}>
                      Participants
                    </p>
                    <p style={{ fontSize: '16px', color: 'white', fontWeight: '600' }}>
                      {selectedEvent.participants}
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid rgba(57, 224, 255, 0.1)', paddingTop: '32px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'white', marginBottom: '16px' }}>
                  Overview
                </h2>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--neutral-muted)', marginBottom: '32px' }}>
                  {selectedEvent.details}
                </p>

                <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'white', marginBottom: '16px' }}>
                  Highlights
                </h2>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {selectedEvent.highlights.map((highlight, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <CheckCircle className="w-5 h-5" style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '15px', color: 'var(--neutral-muted)' }}>
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FOOTER */}
        <footer className="section" style={{ borderTop: '1px solid rgba(57, 224, 255, 0.1)', paddingTop: '48px', marginTop: '80px' }}>
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
                Drones & Robotics Club, SPIT Mumbai. Pioneering autonomous systems and innovation.
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
                  color: 'var(--accent-cyan)'
                }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
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
                  color: 'var(--accent-cyan)'
                }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://youtube.com/@drc-spit" target="_blank" rel="noopener noreferrer" style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
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

export default EventsPage
