"use client"

import { Target, Eye, Award, Cpu, Calendar, Mail, Phone, Instagram, Linkedin, Github, Users, Trophy, Rocket, Zap, ArrowRight, Brain, Orbit, Box, Code2, Waypoints, Radio } from 'lucide-react'
import Spline from "@splinetool/react-spline"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { Link } from "react-router-dom"

const HomePageNew = () => {

  const techStack = [
    { name: "TensorFlow", icon: Brain },
    { name: "ROS", icon: Orbit },
    { name: "PX4", icon: Radio },
    { name: "Gazebo", icon: Box },
    { name: "Ardupilot", icon: Waypoints },
    { name: "Jetson", icon: Cpu },
    { name: "SolidWorks", icon: Code2 },
    { name: "KiCAD", icon: Award }
  ]

  const whatWeBuild = [
    {
      title: "Autonomous Drones",
      description: "Advanced UAV systems with computer vision, obstacle avoidance, and autonomous navigation capabilities.",
      icon: Rocket
    },
    {
      title: "Robotics Systems",
      description: "Ground robots with advanced manipulation, SLAM integration, and real-time path planning algorithms.",
      icon: Cpu
    },
    {
      title: "AI Navigation",
      description: "Deep learning models for autonomous decision-making, object detection, and intelligent flight control.",
      icon: Brain
    }
  ]

  const researchFocus = [
    {
      title: "Drone Vision & SLAM",
      description: "Simultaneous Localization and Mapping using LiDAR, stereo cameras, and sensor fusion for autonomous navigation in GPS-denied environments.",
      icon: Eye
    },
    {
      title: "Autonomous Flight Control",
      description: "Advanced flight controllers, PID tuning, trajectory optimization, and swarm coordination algorithms for multi-agent systems.",
      icon: Waypoints
    },
    {
      title: "Mechatronics & Embedded",
      description: "Custom PCB design, motor control systems, real-time operating systems, and low-level firmware development for robotics platforms.",
      icon: Code2
    }
  ]

  const achievements = [
    { year: "2024", event: "1st Place - IIT Bombay Techfest", position: "National Champions" },
    { year: "2024", event: "ABU Robocon Finals", position: "Top 5 in Asia" },
    { year: "2023", event: "Smart India Hackathon", position: "Winners - Robotics Track" },
    { year: "2023", event: "DRDO Drone Challenge", position: "2nd Place National" }
  ]

  const whyJoinUs = [
    {
      title: "Hands-on Lab Access",
      description: "24/7 access to state-of-the-art fabrication lab with 3D printers, laser cutters, CNC machines, and testing facilities.",
      icon: Cpu
    },
    {
      title: "Real Projects",
      description: "Work on funded research projects, industry collaborations, and competition-grade robots with real-world applications.",
      icon: Rocket
    },
    {
      title: "National Competitions",
      description: "Represent SPIT at IIT Techfest, ABU Robocon, DRDO challenges, and international robotics competitions.",
      icon: Trophy
    },
    {
      title: "Industry Mentorship",
      description: "Learn from industry experts, alumni at top robotics companies, and professors conducting cutting-edge research.",
      icon: Users
    }
  ]

  const teamMembers = [
    { name: "Yadnyesh Sable", role: "Chairperson", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yadnyesh" },
    { name: "Harsh Joshi", role: "Vice-Chairperson", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Harsh" },
    { name: "Soham Bhosale", role: "Technical Secretary", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Soham" },
    { name: "Parth Kadam", role: "Technical Secretary", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Parth" }
  ]

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      
      {/* HERO SECTION with Spline Drone */}
      <section className="section-padding pt-40 min-h-screen flex items-center">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left - Text Content */}
            <div className="slide-in-left">
              <div className="caption-text mb-6">SPIT MUMBAI</div>
              <h1 className="hero-title mb-8">
                Drones &<br/>
                <span className="gradient-text">Robotics Club</span>
              </h1>
              <p className="body-large mb-10 max-w-xl">
                Autonomous systems • Research • Innovation
              </p>
              <p className="text-slate-400 mb-10 text-lg leading-relaxed max-w-xl">
                Building the future of autonomous systems through innovation, hands-on engineering, and cutting-edge research at India's premier technical institution.
              </p>
              <div className="flex flex-wrap gap-5">
                <Link to="/join">
                  <button className="btn-gradient flex items-center gap-3">
                    Join Our Team <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link to="/events">
                  <button className="btn-glass">View Events</button>
                </Link>
              </div>
            </div>

            {/* Right - Spline 3D Drone */}
            <div className="slide-in-right relative h-[600px] rounded-3xl overflow-hidden glass-card p-4">
              <div className="absolute inset-0 float-soft">
                <Spline 
                  scene="https://prod.spline.design/rP-qbmWVVE0G6ecS/scene.splinecode"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20">
        <div className="container-premium">
          <div className="grid-4">
            <div className="glass-card p-10 text-center fade-in-up">
              <Trophy className="w-14 h-14 mx-auto mb-5 icon-glow text-cyan-400" />
              <div className="text-5xl font-bold mb-3 gradient-text">15+</div>
              <div className="text-slate-400 font-semibold text-sm uppercase tracking-wider">National Awards</div>
            </div>
            <div className="glass-card p-10 text-center fade-in-up delay-100">
              <Users className="w-14 h-14 mx-auto mb-5 icon-glow text-cyan-400" />
              <div className="text-5xl font-bold mb-3 gradient-text">100+</div>
              <div className="text-slate-400 font-semibold text-sm uppercase tracking-wider">Active Members</div>
            </div>
            <div className="glass-card p-10 text-center fade-in-up delay-200">
              <Rocket className="w-14 h-14 mx-auto mb-5 icon-glow text-cyan-400" />
              <div className="text-5xl font-bold mb-3 gradient-text">30+</div>
              <div className="text-slate-400 font-semibold text-sm uppercase tracking-wider">Live Projects</div>
            </div>
            <div className="glass-card p-10 text-center fade-in-up delay-300">
              <Zap className="w-14 h-14 mx-auto mb-5 icon-glow text-cyan-400" />
              <div className="text-5xl font-bold mb-3 gradient-text">50+</div>
              <div className="text-slate-400 font-semibold text-sm uppercase tracking-wider">Events Hosted</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD SECTION */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="text-center mb-20 fade-in-up">
            <div className="caption-text mb-5">WHAT WE BUILD</div>
            <h2 className="section-title mb-6">
              Engineering the <span className="gradient-text">Future</span>
            </h2>
            <p className="body-large max-w-3xl mx-auto">
              Cutting-edge robotics and autonomous systems powered by AI, computer vision, and advanced control algorithms.
            </p>
          </div>

          <div className="grid-3">
            {whatWeBuild.map((item, i) => (
              <div key={i} className={`glass-card p-12 fade-in-up delay-${i * 100}`}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-6 icon-glow">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="card-title mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="text-center mb-20 fade-in-up">
            <div className="caption-text mb-5">TECH STACK & TOOLS</div>
            <h2 className="section-title mb-6">
              Industry-Grade <span className="gradient-text">Technology</span>
            </h2>
          </div>

          <div className="grid-4">
            {techStack.map((tech, i) => (
              <div key={i} className={`tech-tile fade-in-up delay-${i * 50}`}>
                <div className="text-center">
                  <tech.icon className="w-10 h-10 mx-auto mb-3 icon-glow text-cyan-400" />
                  <div className="font-bold text-white">{tech.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH FOCUS SECTION */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="text-center mb-20 fade-in-up">
            <div className="caption-text mb-5">OUR RESEARCH FOCUS</div>
            <h2 className="section-title mb-6">
              Advancing <span className="gradient-text">Robotics Research</span>
            </h2>
          </div>

          <div className="grid-3">
            {researchFocus.map((item, i) => (
              <div key={i} className={`glass-card p-12 fade-in-up delay-${i * 100}`}>
                <item.icon className="w-12 h-12 mb-6 icon-glow text-cyan-400" />
                <h3 className="card-title mb-5">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS TIMELINE */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="text-center mb-20 fade-in-up">
            <div className="caption-text mb-5">ACHIEVEMENTS</div>
            <h2 className="section-title mb-6">
              Our <span className="gradient-text">Success Story</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            {achievements.map((achievement, i) => (
              <div key={i} className={`flex items-center gap-8 mb-12 fade-in-up delay-${i * 100}`}>
                <div className="text-4xl font-bold gradient-text min-w-[100px]">{achievement.year}</div>
                <div className="timeline-marker"></div>
                <div className="glass-card p-8 flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-white">{achievement.event}</h3>
                  <p className="text-cyan-400 font-semibold">{achievement.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="text-center mb-20 fade-in-up">
            <div className="caption-text mb-5">MEET THE TEAM</div>
            <h2 className="section-title mb-6">
              Core <span className="gradient-text">Leadership</span>
            </h2>
          </div>

          <div className="grid-4">
            {teamMembers.map((member, i) => (
              <div key={i} className={`glass-card p-8 text-center fade-in-up delay-${i * 100}`}>
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 mx-auto mb-6 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-semibold text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY JOIN US */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="text-center mb-20 fade-in-up">
            <div className="caption-text mb-5">WHY JOIN US?</div>
            <h2 className="section-title mb-6">
              Shape Your <span className="gradient-text">Engineering Future</span>
            </h2>
          </div>

          <div className="grid-2">
            {whyJoinUs.map((item, i) => (
              <div key={i} className={`glass-card p-12 fade-in-up delay-${i * 100}`}>
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-cyan-400 icon-glow" />
                </div>
                <h3 className="card-title mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="glass-card border-glow p-20 text-center fade-in-up">
            <h2 className="section-title mb-8">Ready to Build the Future?</h2>
            <p className="body-large mb-12 max-w-3xl mx-auto">
              Join India's leading robotics and drone engineering club. Work on funded research, compete internationally, and shape the future of autonomous systems.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/join">
                <button className="btn-gradient flex items-center gap-3 text-lg px-12 py-5">
                  Apply Now <ArrowRight className="w-6 h-6" />
                </button>
              </Link>
              <Link to="/teams">
                <button className="btn-glass text-lg px-12 py-5">Meet the Team</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="text-center mb-20 fade-in-up">
            <div className="caption-text mb-5">GET IN TOUCH</div>
            <h2 className="section-title mb-6">Contact <span className="gradient-text">Us</span></h2>
          </div>

          <div className="grid-3">
            <div className="glass-card p-10 text-center fade-in-up">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-cyan-400 icon-glow" />
              </div>
              <h3 className="font-bold text-lg mb-3">Email</h3>
              <p className="text-slate-400">drc@spit.ac.in</p>
            </div>

            <div className="glass-card p-10 text-center fade-in-up delay-100">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-cyan-400 icon-glow" />
              </div>
              <h3 className="font-bold text-lg mb-3">Phone</h3>
              <p className="text-slate-400">+91 98765 43210</p>
            </div>

            <div className="glass-card p-10 text-center fade-in-up delay-200">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-cyan-400 icon-glow" />
              </div>
              <h3 className="font-bold text-lg mb-3">Social Media</h3>
              <div className="flex justify-center gap-4 mt-4">
                <a href="#" className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center hover:bg-cyan-500/20 transition-all">
                  <Instagram className="w-5 h-5 text-cyan-400" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center hover:bg-cyan-500/20 transition-all">
                  <Linkedin className="w-5 h-5 text-cyan-400" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center hover:bg-cyan-500/20 transition-all">
                  <Github className="w-5 h-5 text-cyan-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-16">
        <div className="container-premium">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-400 text-sm">
              © 2024 DRC - Drones & Robotics Club, SPIT Mumbai
            </div>
            <div className="flex gap-8">
              <Link to="/" className="text-slate-400 hover:text-cyan-400 text-sm font-medium transition-colors">Home</Link>
              <Link to="/teams" className="text-slate-400 hover:text-cyan-400 text-sm font-medium transition-colors">Teams</Link>
              <Link to="/events" className="text-slate-400 hover:text-cyan-400 text-sm font-medium transition-colors">Events</Link>
              <Link to="/join" className="text-slate-400 hover:text-cyan-400 text-sm font-medium transition-colors">Join Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePageNew
