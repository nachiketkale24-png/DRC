"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="glass-navbar">
        <div className="container-cyber">
          <div className="flex justify-between items-center h-16">
            {/* Techfest-style Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-pink-500 flex items-center justify-center font-black text-sm glow-pulse">
                  DRC
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="text-base font-bold text-white tracking-tight">DRONES & ROBOTICS</div>
                <div className="text-[10px] text-cyan-400 -mt-0.5 font-semibold tracking-wider uppercase">SPIT Mumbai</div>
              </div>
            </Link>

            {/* Desktop Navigation - Slim Techfest Style */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-300 tracking-wide ${
                  isActive("/")
                    ? "bg-gradient-to-r from-cyan-400 to-pink-500 text-white"
                    : "text-neutral-text hover:text-cyan-400 hover:bg-white/5"
                }`}
              >
                HOME
              </Link>
              <Link
                to="/teams"
                className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-300 tracking-wide ${
                  isActive("/teams")
                    ? "bg-gradient-to-r from-cyan-400 to-pink-500 text-white"
                    : "text-neutral-text hover:text-cyan-400 hover:bg-white/5"
                }`}
              >
                TEAMS
              </Link>
              <Link
                to="/events"
                className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-300 tracking-wide ${
                  isActive("/events")
                    ? "bg-gradient-to-r from-cyan-400 to-pink-500 text-white"
                    : "text-neutral-text hover:text-cyan-400 hover:bg-white/5"
                }`}
              >
                EVENTS
              </Link>
              <Link
                to="/join"
                className="btn-cyber text-xs px-6 py-2.5 ml-2"
              >
                JOIN US
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 rounded-lg glass-card text-white hover:scale-105 transition-all"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4 pt-2 border-t border-white/10">
              <div className="flex flex-col space-y-2">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                    isActive("/")
                      ? "bg-gradient-to-r from-cyan-400 to-pink-500 text-white"
                      : "text-neutral-text hover:bg-white/5"
                  }`}
                >
                  HOME
                </Link>
                <Link
                  to="/teams"
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                    isActive("/teams")
                      ? "bg-gradient-to-r from-cyan-400 to-pink-500 text-white"
                      : "text-neutral-text hover:bg-white/5"
                  }`}
                >
                  TEAMS
                </Link>
                <Link
                  to="/events"
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                    isActive("/events")
                      ? "bg-gradient-to-r from-cyan-400 to-pink-500 text-white"
                      : "text-neutral-text hover:bg-white/5"
                  }`}
                >
                  EVENTS
                </Link>
                <Link
                  to="/join"
                  onClick={() => setIsOpen(false)}
                  className="btn-cyber text-center"
                >
                  JOIN US
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
