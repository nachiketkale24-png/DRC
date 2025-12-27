import React, { useState } from 'react'
import AnimatedBackground from '../components/AnimatedBackground'
import { Mail, Home, Calendar, Trophy, Users, CheckCircle, AlertCircle, Loader } from 'lucide-react'

const JoinUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    branch: '',
    domains: [],
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errors, setErrors] = useState({})

  const branches = [
    "Computer Engineering",
    "Computer Science & Engineering",
    "Electronics & Telecommunications Engineering",
  ]

  const domains = [
    { id: 'embedded', label: 'Embedded Systems', category: 'tech' },
    { id: 'pcb', label: 'PCB Design', category: 'tech' },
    { id: 'web', label: 'Web Development', category: 'tech' },
    { id: 'iot', label: 'IoT Systems', category: 'tech' },
    { id: 'ai', label: 'AI/ML', category: 'tech' },
    { id: 'robotics', label: 'Robotics', category: 'tech' },
    { id: 'drone', label: 'Drone Technology', category: 'tech' },
    { id: 'design', label: 'UI/UX Design', category: 'nontech' },
    { id: 'content', label: 'Content Creation', category: 'nontech' },
    { id: 'marketing', label: 'Marketing', category: 'nontech' },
  ]

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.branch) newErrors.branch = 'Branch is required'
    if (formData.domains.length === 0) newErrors.domains = 'Select at least one domain'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        branch: '',
        domains: [],
        message: ''
      })
      setTimeout(() => setSubmitStatus(null), 3000)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDomainToggle = (id) => {
    setFormData((prev) => ({
      ...prev,
      domains: prev.domains.includes(id)
        ? prev.domains.filter((d) => d !== id)
        : [...prev.domains, id]
    }))
  }

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
          <div className="hero-badge">JOIN US</div>
          <h1 className="hero-title" style={{ marginTop: '20px' }}>
            Become Part of <span className="gradient-text">DRC</span>
          </h1>
          <p className="hero-subtitle">
            Join a community of innovators passionate about robotics and autonomous systems
          </p>
        </section>

        {/* WHY JOIN SECTION */}
        <section className="section">
          <h2 className="section-title">
            WHY JOIN <span className="gradient-text">US?</span>
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
                <Users className="w-6 h-6" style={{ color: 'white' }} />
              </div>
              <h3 style={{ marginBottom: '12px', fontSize: '18px', fontWeight: '700', color: 'white' }}>
                Expert Mentorship
              </h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--neutral-muted)' }}>
                Learn from experienced members and gain hands-on knowledge in robotics and autonomous systems.
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
              <h3 style={{ marginBottom: '12px', fontSize: '18px', fontWeight: '700', color: 'white' }}>
                Compete & Win
              </h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--neutral-muted)' }}>
                Represent DRC in national and international competitions and showcase your skills.
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
                <Mail className="w-6 h-6" style={{ color: 'white' }} />
              </div>
              <h3 style={{ marginBottom: '12px', fontSize: '18px', fontWeight: '700', color: 'white' }}>
                Networking
              </h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--neutral-muted)' }}>
                Connect with like-minded innovators and build lasting professional relationships.
              </p>
            </div>
          </div>
        </section>

        {/* FORM SECTION */}
        <section className="section">
          <h2 className="section-title">
            APPLICATION <span className="gradient-text">FORM</span>
          </h2>

          <div className="card" style={{ maxWidth: '100%', margin: '0 auto' }}>
            {submitStatus === 'success' && (
              <div style={{
                padding: '16px',
                background: 'rgba(34, 197, 94, 0.15)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                borderRadius: '8px',
                marginBottom: '24px',
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start'
              }}>
                <CheckCircle className="w-5 h-5" style={{ color: '#22C55E', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ color: '#22C55E', fontWeight: '600', marginBottom: '4px' }}>
                    Application Submitted!
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--neutral-muted)' }}>
                    Thank you for your interest in DRC. We'll review your application and get back to you soon.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div style={{
                padding: '16px',
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '8px',
                marginBottom: '24px',
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start'
              }}>
                <AlertCircle className="w-5 h-5" style={{ color: '#EF4444', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ color: '#EF4444', fontWeight: '600', marginBottom: '4px' }}>
                    Submission Failed
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--neutral-muted)' }}>
                    Something went wrong. Please try again.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
              {/* Name */}
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'white' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: errors.name ? '1px solid #EF4444' : '1px solid rgba(57, 224, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'all 0.3s'
                  }}
                  onFocus={(e) => {
                    if (!errors.name) e.target.style.borderColor = 'rgba(57, 224, 255, 0.5)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = errors.name ? '1px solid #EF4444' : 'rgba(57, 224, 255, 0.2)'
                  }}
                />
                {errors.name && (
                  <p style={{ fontSize: '12px', color: '#EF4444', marginTop: '4px' }}>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email & Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'white' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@spit.ac.in"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: errors.email ? '1px solid #EF4444' : '1px solid rgba(57, 224, 255, 0.2)',
                      borderRadius: '8px',
                      color: 'white',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'all 0.3s'
                    }}
                  />
                  {errors.email && (
                    <p style={{ fontSize: '12px', color: '#EF4444', marginTop: '4px' }}>
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'white' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 XXXXXXXXXX"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: errors.phone ? '1px solid #EF4444' : '1px solid rgba(57, 224, 255, 0.2)',
                      borderRadius: '8px',
                      color: 'white',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'all 0.3s'
                    }}
                  />
                  {errors.phone && (
                    <p style={{ fontSize: '12px', color: '#EF4444', marginTop: '4px' }}>
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Branch */}
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'white' }}>
                  Branch
                </label>
                <select
                  value={formData.branch}
                  onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: errors.branch ? '1px solid #EF4444' : '1px solid rgba(57, 224, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '14px',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="">Select your branch</option>
                  {branches.map((branch) => (
                    <option key={branch} value={branch} style={{ background: '#1a1a1a', color: 'white' }}>
                      {branch}
                    </option>
                  ))}
                </select>
                {errors.branch && (
                  <p style={{ fontSize: '12px', color: '#EF4444', marginTop: '4px' }}>
                    {errors.branch}
                  </p>
                )}
              </div>

              {/* Domains */}
              <div>
                <label style={{ display: 'block', marginBottom: '12px', fontWeight: '600', color: 'white' }}>
                  Areas of Interest (select at least one)
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px' }}>
                  {domains.map((domain) => (
                    <label key={domain.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={formData.domains.includes(domain.id)}
                        onChange={() => handleDomainToggle(domain.id)}
                        style={{
                          width: '18px',
                          height: '18px',
                          cursor: 'pointer',
                          accentColor: '#39E0FF'
                        }}
                      />
                      <span style={{ color: 'white', fontSize: '14px' }}>
                        {domain.label}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.domains && (
                  <p style={{ fontSize: '12px', color: '#EF4444', marginTop: '8px' }}>
                    {errors.domains}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'white' }}>
                  Message (optional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about yourself, your projects, or why you want to join..."
                  rows="4"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(57, 224, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '14px',
                    outline: 'none',
                    resize: 'none',
                    transition: 'all 0.3s',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  padding: '14px 32px',
                  background: isSubmitting ? 'rgba(57, 224, 255, 0.3)' : 'linear-gradient(135deg, var(--accent-cyan), var(--accent-magenta))',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  fontWeight: '600',
                  fontSize: '16px',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = 'translateY(-2px)'
                    e.target.style.boxShadow = '0 10px 30px rgba(57, 224, 255, 0.3)'
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = 'none'
                }}
              >
                {isSubmitting && <Loader className="w-4 h-4 animate-spin" />}
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </section>

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

export default JoinUsPage
