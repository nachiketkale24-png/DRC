import { useRef } from 'react'
import Spline from '@splinetool/react-spline'
import AnimatedBackground from '../components/AnimatedBackground'
import { Award, Users, Rocket, Calendar, Cpu, Brain, Radio, Home, Trophy, Mail, Instagram, Linkedin, Youtube, MessageCircle, Phone } from 'lucide-react'

const HomePage = () => {
  const splineRef = useRef()

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />

      {/* Left Sidebar - Desktop Only */}
      <div className="sidebar-left hidden lg:flex">
        <a href="#home" className="sidebar-icon group">
          <Home className="w-5 h-5" />
          <span className="sidebar-tooltip">Home</span>
        </a>
        <a href="#events" className="sidebar-icon group">
          <Calendar className="w-5 h-5" />
          <span className="sidebar-tooltip">Events</span>
        </a>
        <a href="#about" className="sidebar-icon group">
          <Cpu className="w-5 h-5" />
          <span className="sidebar-tooltip">About</span>
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

      {/* Right Sidebar - Social Media - Desktop Only */}
      <div className="sidebar-right hidden lg:flex">
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
      <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 px-6">
        <div className="container-cyber">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Title + CTAs */}
            <div className="space-y-6 slide-in-up">
              <div className="inline-block px-5 py-2 rounded-full glass-card border border-cyan-400/20 mb-4">
                <span className="text-cyan-400 text-sm font-semibold tracking-wider">SPIT MUMBAI</span>
              </div>
              <h1 className="hero-title text-white leading-[0.95]">
                DRC <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500">ROBOTICS</span>
              </h1>
              <p className="text-2xl text-neutral-text font-light tracking-wide max-w-xl">
                Building the future of autonomous systems, one innovation at a time.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="btn-cyber">EXPLORE PROJECTS</button>
                <button className="btn-glass">VIEW EVENTS</button>
              </div>
            </div>

            {/* Right: Spline Drone */}
            <div className="relative h-[500px] lg:h-[600px] float-drone">
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <Spline
                  scene="https://prod.spline.design/rP-qbmWVVE0G6ecS/scene.splinecode"
                  onLoad={(spline) => { splineRef.current = spline }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="relative py-12 px-6">
        <div className="container-cyber">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="glass-card text-center space-y-2">
              <Award className="w-10 h-10 mx-auto text-cyan-400 glow-pulse" />
              <div className="text-4xl font-black gradient-text">50+</div>
              <div className="text-sm text-neutral-text uppercase tracking-wider">Awards</div>
            </div>
            <div className="glass-card text-center space-y-2">
              <Users className="w-10 h-10 mx-auto text-pink-400 glow-pulse" />
              <div className="text-4xl font-black gradient-text">120+</div>
              <div className="text-sm text-neutral-text uppercase tracking-wider">Members</div>
            </div>
            <div className="glass-card text-center space-y-2">
              <Rocket className="w-10 h-10 mx-auto text-purple-400 glow-pulse" />
              <div className="text-4xl font-black gradient-text">35+</div>
              <div className="text-sm text-neutral-text uppercase tracking-wider">Projects</div>
            </div>
            <div className="glass-card text-center space-y-2">
              <Calendar className="w-10 h-10 mx-auto text-cyan-400 glow-pulse" />
              <div className="text-4xl font-black gradient-text">25+</div>
              <div className="text-sm text-neutral-text uppercase tracking-wider">Events</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="about" className="relative py-20 px-6">
        <div className="container-cyber">
          <h2 className="text-5xl lg:text-6xl font-black text-center mb-4 text-white slide-in-up">
            WHAT WE DO
          </h2>
          <p className="text-center text-neutral-text text-lg mb-12 max-w-2xl mx-auto">
            Pushing boundaries in robotics, AI, and autonomous systems
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card space-y-4 hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Autonomous Drones</h3>
              <p className="text-neutral-text leading-relaxed">
                Design and develop cutting-edge autonomous drones with advanced navigation, obstacle avoidance, and mission planning capabilities.
              </p>
            </div>
            <div className="glass-card space-y-4 hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Robotics Systems</h3>
              <p className="text-neutral-text leading-relaxed">
                Build sophisticated robotic systems for industrial automation, research, and competition. From manipulators to mobile robots.
              </p>
            </div>
            <div className="glass-card space-y-4 hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <Radio className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">AI Navigation</h3>
              <p className="text-neutral-text leading-relaxed">
                Implement machine learning algorithms for intelligent path planning, SLAM, computer vision, and autonomous decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAMS / VERTICALS */}
      <section className="relative py-20 px-6">
        <div className="container-cyber">
          <h2 className="text-5xl lg:text-6xl font-black text-center mb-4 text-white slide-in-up">
            OUR VERTICALS
          </h2>
          <p className="text-center text-neutral-text text-lg mb-12 max-w-2xl mx-auto">
            Specialized teams driving innovation across multiple domains
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass-card hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                  <Cpu className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Hardware & Electronics</h3>
              </div>
              <p className="text-neutral-text leading-relaxed">
                PCB design, circuit optimization, sensor integration, and embedded systems development.
              </p>
            </div>
            <div className="glass-card hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Software & AI</h3>
              </div>
              <p className="text-neutral-text leading-relaxed">
                Flight controllers, path planning algorithms, computer vision, and autonomous control systems.
              </p>
            </div>
            <div className="glass-card hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Mechanical Design</h3>
              </div>
              <p className="text-neutral-text leading-relaxed">
                CAD modeling, structural analysis, drone frame optimization, and 3D printing.
              </p>
            </div>
            <div className="glass-card hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-pink-500 flex items-center justify-center">
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Competitions & Events</h3>
              </div>
              <p className="text-neutral-text leading-relaxed">
                Organizing workshops, competing in national/international robotics competitions, and outreach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS TICKER */}
      <section id="events" className="relative py-12 overflow-hidden">
        <div className="ticker-wrap">
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
        </div>
      </section>

      {/* SPONSORS BAND */}
      <section id="sponsors" className="relative py-20 px-6">
        <div className="container-cyber">
          <h2 className="text-4xl lg:text-5xl font-black text-center mb-12 text-white">
            OUR <span className="gradient-text">PARTNERS</span>
          </h2>
          <div className="glass-card">
            <div className="flex flex-wrap justify-center items-center gap-12">
              <div className="text-neutral-text/40 text-2xl font-bold hover:text-cyan-400 transition-colors cursor-pointer">DRONA AVIATION</div>
              <div className="text-neutral-text/40 text-2xl font-bold hover:text-cyan-400 transition-colors cursor-pointer">ROBOSOFT</div>
              <div className="text-neutral-text/40 text-2xl font-bold hover:text-cyan-400 transition-colors cursor-pointer">MATHWORKS</div>
              <div className="text-neutral-text/40 text-2xl font-bold hover:text-cyan-400 transition-colors cursor-pointer">SOLIDWORKS</div>
              <div className="text-neutral-text/40 text-2xl font-bold hover:text-cyan-400 transition-colors cursor-pointer">ANSYS</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="relative py-16 px-6 border-t border-white/10">
        <div className="container-cyber">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-pink-500 flex items-center justify-center font-black text-lg">
                DRC
              </div>
              <p className="text-neutral-text text-sm leading-relaxed">
                Drones & Robotics Club, SPIT Mumbai. Pioneering autonomous systems and robotics innovation.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-2 text-neutral-text text-sm">
                <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                <li><a href="#events" className="hover:text-cyan-400 transition-colors">Events</a></li>
                <li><a href="/teams" className="hover:text-cyan-400 transition-colors">Teams</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Resources</h4>
              <ul className="space-y-2 text-neutral-text text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Projects</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Workshops</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Gallery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Connect</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-cyan-400/20 transition-colors">
                  <Instagram className="w-5 h-5 text-cyan-400" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-cyan-400/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-cyan-400" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-cyan-400/20 transition-colors">
                  <Youtube className="w-5 h-5 text-cyan-400" />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-neutral-text text-sm">
            © 2024 DRC SPIT Mumbai. All rights reserved. <span className="text-cyan-400">Built with ⚡ by DRC Tech Team</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
