import { Users, Code, Cpu, Zap, Award, Github, Linkedin, Mail } from 'lucide-react'
import AnimatedBackground from '../components/AnimatedBackground'

const TeamsPage = () => {
  const teams = [
    {
      id: 1,
      name: "Web Development & IoT-systems",
      description: "Building smart web and IoT systems for real-time connectivity, automation, and device integration.",
      members: [
        { name: "Soham Bhosale", role: "Lead Developer" },
        { name: "Parth Pingle", role: "IoT Specialist" },
        { name: "Saloni Sawant", role: "Full Stack Developer" },
        { name: "Vansh Parate", role: "Backend Developer" },
      ],
      technologies: ["JavaScript", "React", "Python", "ESP32"],
      projects: 8,
      icon: Cpu,
    },
    {
      id: 2,
      name: "Circuits & PCB Design Wing",
      description: "Designing and prototyping custom circuit boards and electronic systems for reliable hardware performance.",
      members: [
        { name: "Yadnyesh Sable", role: "Circuit Designer" },
        { name: "Arushi Shetty", role: "PCB Specialist" },
        { name: "Vishal Rathod", role: "Hardware Engineer" },
        { name: "Parth Kadam", role: "Electronics Lead" },
      ],
      technologies: ["Eagle", "Proteus", "Simulink"],
      projects: 10,
      icon: Zap,
    },
    {
      id: 3,
      name: "Embedded Interfacing & Programming",
      description: "Programming microcontrollers and integrating sensors to enable intelligent embedded systems.",
      members: [
        { name: "Parth Kadam", role: "Embedded Lead" },
        { name: "Vishal Rathod", role: "Firmware Developer" },
        { name: "Soham Bhosale", role: "Systems Programmer" },
        { name: "Harsh Joshi", role: "Sensor Integration" },
      ],
      technologies: ["C", "C++", "Arduino", "STM32"],
      projects: 7,
      icon: Code,
    },
    {
      id: 4,
      name: "Creatives",
      description: "Designing visuals, graphics, and digital content to effectively communicate ideas and showcase innovations.",
      members: [
        { name: "Aditya Hursale", role: "Creative Head" },
        { name: "Nisarg Chhoda", role: "Graphic Designer" },
        { name: "Arushi Shetty", role: "UI/UX Designer" },
        { name: "Saloni Sawant", role: "Content Creator" },
      ],
      technologies: ["Figma", "Canva", "Illustrator"],
      projects: 5,
      icon: Award,
    }
  ];

  const leadership = [
    {
      name: "Yadnyesh Sable",
      role: "Chairperson",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yadnyesh",
      email: "yadnyesh@spit.ac.in",
      github: "https://github.com/yadnyeshsable",
      linkedin: "https://linkedin.com/in/yadnyeshsable"
    },
    {
      name: "Harsh Joshi",
      role: "Vice-Chairperson",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Harsh",
      email: "harsh@spit.ac.in",
      github: "https://github.com/harshjoshi",
      linkedin: "https://linkedin.com/in/harshjoshi"
    },
    {
      name: "Soham Bhosale",
      role: "Technical Secretary",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Soham",
      email: "soham@spit.ac.in",
      github: "https://github.com/sohambhosale",
      linkedin: "https://linkedin.com/in/sohambhosale"
    },
    {
      name: "Parth Kadam",
      role: "Technical Secretary",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Parth",
      email: "parth@spit.ac.in",
      github: "https://github.com/parthkadam",
      linkedin: "https://linkedin.com/in/parthkadam"
    }
  ];

  return (
    <div className="page">
      <AnimatedBackground />

      {/* HERO */}
      <div className="container">
        <section className="hero">
          <div className="hero-content">
            <div className="hero-badge">OUR TEAMS</div>
            <h1 className="hero-title">
              MEET THE <span className="gradient-text">TEAM</span>
            </h1>
            <p className="hero-subtitle">
              Passionate engineers, designers, and innovators working together to build the future of robotics and autonomous systems.
            </p>
          </div>
        </section>
      </div>

      {/* LEADERSHIP */}
      <div className="container">
        <section className="section">
          <h2 className="section-title">
            CORE <span className="gradient-text">LEADERSHIP</span>
          </h2>
          <p className="section-subtitle">
            Leading the vision and driving innovation at DRC
          </p>

          <div className="grid-4">
            {leadership.map((member, idx) => (
              <div key={idx} className="card" style={{ textAlign: 'center' }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '16px',
                    margin: '0 auto 20px',
                    background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
                    padding: '4px'
                  }}
                />
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>
                  {member.name}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--accent-cyan)', marginBottom: '16px', fontWeight: '600' }}>
                  {member.role}
                </p>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                  <a 
                    href={member.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s'
                    }}
                  >
                    <Github className="w-4 h-4" style={{ color: 'var(--neutral-text)' }} />
                  </a>
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s'
                    }}
                  >
                    <Linkedin className="w-4 h-4" style={{ color: 'var(--neutral-text)' }} />
                  </a>
                  <a 
                    href={`mailto:${member.email}`}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s'
                    }}
                  >
                    <Mail className="w-4 h-4" style={{ color: 'var(--neutral-text)' }} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* TEAMS */}
      <div className="container">
        <section className="section">
          <h2 className="section-title">
            OUR <span className="gradient-text">VERTICALS</span>
          </h2>
          <p className="section-subtitle">
            Specialized teams working across different domains
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            {teams.map((team) => (
              <div key={team.id} className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <team.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '28px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>
                      {team.name}
                    </h3>
                    <div style={{ display: 'flex', gap: '16px', fontSize: '14px', color: 'var(--neutral-muted)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Users className="w-4 h-4" />
                        {team.members.length} Members
                      </span>
                      <span>{team.projects} Projects</span>
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--neutral-muted)', marginBottom: '24px' }}>
                  {team.description}
                </p>

                <div style={{ marginBottom: '24px' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: '600', color: 'white', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Technologies
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {team.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: '6px 16px',
                          borderRadius: '100px',
                          background: 'rgba(57, 224, 255, 0.1)',
                          border: '1px solid rgba(57, 224, 255, 0.3)',
                          fontSize: '13px',
                          fontWeight: '600',
                          color: 'var(--accent-cyan)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: '600', color: 'white', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Team Members
                  </h4>
                  <div className="grid-2">
                    {team.members.map((member, idx) => (
                      <div 
                        key={idx}
                        style={{
                          padding: '20px',
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.08)'
                        }}
                      >
                        <h5 style={{ fontSize: '16px', fontWeight: '600', color: 'white', marginBottom: '4px' }}>
                          {member.name}
                        </h5>
                        <p style={{ fontSize: '14px', color: 'var(--neutral-muted)' }}>
                          {member.role}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default TeamsPage
