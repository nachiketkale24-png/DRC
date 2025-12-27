"use client"

import { Target, Eye, Award, Cpu, Calendar, Mail, Phone, Instagram, Linkedin, Github, Users, Trophy, Rocket, Zap, ArrowRight } from 'lucide-react'
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { Link } from "react-router-dom"

const HomePage = () => {

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      
      {/* Hero Section - Premium IIT Style */}
      <section className="section-spacing pt-32">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <div className="fade-in-up">
              <div className="caption text-cyan-400 mb-4">SPIT MUMBAI</div>
              <h1 className="heading-xl mb-6">
                Drones & <br/>
                <span className="gradient-text">Robotics Club</span>
              </h1>
              <p className="body-text mb-8 max-w-xl">
                Building the future of autonomous systems through innovation, research, and hands-on engineering excellence at India's premier technical institution.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/join" className="btn-primary inline-flex items-center gap-2">
                  Join Our Team <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/events" className="btn-secondary">
                  View Events
                </Link>
              </div>
            </div>

            {/* Right - Stats Cards */}
            <div className="grid grid-cols-2 gap-6 fade-in-up delay-200">
              <div className="glass-card p-8 hover-lift">
                <Trophy className="w-10 h-10 text-cyan-400 mb-4" />
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-slate-400 font-medium">National Awards</div>
              </div>
              <div className="glass-card p-8 hover-lift delay-100">
                <Users className="w-10 h-10 text-cyan-400 mb-4" />
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-slate-400 font-medium">Active Members</div>
              </div>
              <div className="glass-card p-8 hover-lift delay-200">
                <Rocket className="w-10 h-10 text-cyan-400 mb-4" />
                <div className="text-4xl font-bold mb-2">30+</div>
                <div className="text-slate-400 font-medium">Live Projects</div>
              </div>
              <div className="glass-card p-8 hover-lift delay-300">
                <Zap className="w-10 h-10 text-cyan-400 mb-4" />
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-slate-400 font-medium">Events Hosted</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-spacing">
        <div className="container-premium">
          <div className="text-center mb-16 fade-in-up">
            <div className="caption text-cyan-400 mb-4">WHO WE ARE</div>
            <h2 className="heading-lg mb-6">Leading Innovation in <span className="gradient-text">Robotics</span></h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="glass-card p-12 fade-in-up hover-lift">
              <Eye className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="heading-md mb-4">Our Vision</h3>
              <p className="body-text">
                To establish SPIT as a center of excellence in robotics and drone technologies, empowering students to become innovators and inventors in these dynamic and rapidly evolving fields through cutting-edge research and technical skills.
              </p>
            </div>

            <div className="glass-card p-12 fade-in-up delay-200 hover-lift">
              <Target className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="heading-md mb-4">Our Mission</h3>
              <p className="body-text">
                Foster a strong culture of innovation and technical excellence by bridging the gap between theoretical knowledge and practical application in robotics and Unmanned Aerial Vehicle (UAV) systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-spacing">
        <div className="container-premium">
          <div className="text-center mb-16 fade-in-up">
            <div className="caption text-cyan-400 mb-4">WHAT DRIVES US</div>
            <h2 className="heading-lg mb-6">Core <span className="gradient-text">Values</span></h2>
          </div>

          <div className="grid-3">
            <div className="glass-card p-10 fade-in-up hover-lift">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <Cpu className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation Hub</h3>
              <p className="text-slate-400">State-of-the-art facilities equipped with the latest tools for prototyping and developing next-generation robotic systems.</p>
            </div>

            <div className="glass-card p-10 fade-in-up delay-100 hover-lift">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-slate-400">Committed to achieving the highest standards in design, engineering, and performance across all our projects and competitions.</p>
            </div>

            <div className="glass-card p-10 fade-in-up delay-200 hover-lift">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-slate-400">Building a community of passionate engineers working together on cutting-edge research and real-world applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="container-premium">
          <div className="glass-card p-16 text-center fade-in-up gradient-border">
            <h2 className="heading-lg mb-6">Ready to Join the Future?</h2>
            <p className="body-text mb-8 max-w-2xl mx-auto">
              Be part of India's leading robotics and drone engineering club. Work on real projects, compete internationally, and shape the future of autonomous systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/join" className="btn-primary inline-flex items-center gap-2">
                Apply Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/teams" className="btn-secondary">
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-spacing">
        <div className="container-premium">
          <div className="text-center mb-16 fade-in-up">
            <div className="caption text-cyan-400 mb-4">GET IN TOUCH</div>
            <h2 className="heading-lg mb-6">Contact <span className="gradient-text">Us</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center fade-in-up hover-lift">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-slate-400 text-sm">drc@spit.ac.in</p>
            </div>

            <div className="glass-card p-8 text-center fade-in-up delay-100 hover-lift">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-slate-400 text-sm">+91 98765 43210</p>
            </div>

            <div className="glass-card p-8 text-center fade-in-up delay-200 hover-lift">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="font-semibold mb-2">Social</h3>
              <div className="flex justify-center gap-3 mt-3">
                <a href="#" className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
                  <Instagram className="w-4 h-4 text-cyan-400" />
                </a>
                <a href="#" className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                </a>
                <a href="#" className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
                  <Github className="w-4 h-4 text-cyan-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="container-premium">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © 2024 DRC - Drones & Robotics Club, SPIT Mumbai
            </div>
            <div className="flex gap-6">
              <Link to="/" className="text-slate-400 hover:text-white text-sm transition-colors">Home</Link>
              <Link to="/teams" className="text-slate-400 hover:text-white text-sm transition-colors">Teams</Link>
              <Link to="/events" className="text-slate-400 hover:text-white text-sm transition-colors">Events</Link>
              <Link to="/join" className="text-slate-400 hover:text-white text-sm transition-colors">Join Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
