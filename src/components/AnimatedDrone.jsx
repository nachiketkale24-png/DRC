import React from 'react'

const AnimatedDrone = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(circle at 30% 30%, rgba(57, 224, 255, 0.15), transparent 50%), radial-gradient(circle at 70% 70%, rgba(255, 59, 186, 0.15), transparent 50%)',
      borderRadius: '12px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <svg
        viewBox="0 0 200 200"
        width="280"
        height="280"
        style={{
          filter: 'drop-shadow(0 0 20px rgba(57, 224, 255, 0.6))',
          animation: 'float 3s ease-in-out infinite'
        }}
      >
        {/* Glow Effect */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotateZ(0deg); }
              50% { transform: translateY(-20px) rotateZ(5deg); }
            }
            @keyframes rotateProp {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .drone-prop {
              animation: rotateProp 0.6s linear infinite;
              transform-origin: center;
            }
          `}</style>
        </defs>

        {/* Propellers Group */}
        <g>
          {/* Top Left Propeller */}
          <g transform="translate(60, 60)">
            <g className="drone-prop">
              <ellipse cx="0" cy="-12" rx="4" ry="15" fill="rgba(57, 224, 255, 0.7)" filter="url(#glow)"/>
              <ellipse cx="0" cy="12" rx="4" ry="15" fill="rgba(57, 224, 255, 0.5)"/>
            </g>
            <circle cx="0" cy="0" r="6" fill="#39E0FF" filter="url(#glow)"/>
          </g>

          {/* Top Right Propeller */}
          <g transform="translate(140, 60)">
            <g className="drone-prop" style={{animationDelay: '0.15s'}}>
              <ellipse cx="0" cy="-12" rx="4" ry="15" fill="rgba(57, 224, 255, 0.7)" filter="url(#glow)"/>
              <ellipse cx="0" cy="12" rx="4" ry="15" fill="rgba(57, 224, 255, 0.5)"/>
            </g>
            <circle cx="0" cy="0" r="6" fill="#39E0FF" filter="url(#glow)"/>
          </g>

          {/* Bottom Left Propeller */}
          <g transform="translate(60, 140)">
            <g className="drone-prop" style={{animationDelay: '0.3s'}}>
              <ellipse cx="0" cy="-12" rx="4" ry="15" fill="rgba(255, 59, 186, 0.7)" filter="url(#glow)"/>
              <ellipse cx="0" cy="12" rx="4" ry="15" fill="rgba(255, 59, 186, 0.5)"/>
            </g>
            <circle cx="0" cy="0" r="6" fill="#FF3BBA" filter="url(#glow)"/>
          </g>

          {/* Bottom Right Propeller */}
          <g transform="translate(140, 140)">
            <g className="drone-prop" style={{animationDelay: '0.45s'}}>
              <ellipse cx="0" cy="-12" rx="4" ry="15" fill="rgba(255, 59, 186, 0.7)" filter="url(#glow)"/>
              <ellipse cx="0" cy="12" rx="4" ry="15" fill="rgba(255, 59, 186, 0.5)"/>
            </g>
            <circle cx="0" cy="0" r="6" fill="#FF3BBA" filter="url(#glow)"/>
          </g>
        </g>

        {/* Drone Body */}
        <g>
          {/* Main Frame - X Shape */}
          <line x1="60" y1="60" x2="140" y2="140" stroke="#39E0FF" strokeWidth="3" opacity="0.8" filter="url(#glow)"/>
          <line x1="140" y1="60" x2="60" y2="140" stroke="#FF3BBA" strokeWidth="3" opacity="0.8" filter="url(#glow)"/>

          {/* Center Chassis */}
          <rect x="85" y="85" width="30" height="30" fill="rgba(57, 224, 255, 0.3)" stroke="#39E0FF" strokeWidth="2" rx="3" filter="url(#glow)"/>
          
          {/* Camera */}
          <circle cx="100" cy="95" r="3" fill="#39E0FF" filter="url(#glow)"/>
          
          {/* Center Core */}
          <circle cx="100" cy="100" r="5" fill="url(#coreGradient)" filter="url(#glow)"/>
          
          {/* Connectors to propellers */}
          <line x1="60" y1="60" x2="100" y2="100" stroke="rgba(57, 224, 255, 0.5)" strokeWidth="2"/>
          <line x1="140" y1="60" x2="100" y2="100" stroke="rgba(57, 224, 255, 0.5)" strokeWidth="2"/>
          <line x1="60" y1="140" x2="100" y2="100" stroke="rgba(255, 59, 186, 0.5)" strokeWidth="2"/>
          <line x1="140" y1="140" x2="100" y2="100" stroke="rgba(255, 59, 186, 0.5)" strokeWidth="2"/>
        </g>

        {/* Status Lights */}
        <g>
          <circle cx="85" cy="85" r="2" fill="#39E0FF" opacity="0.8" style={{animation: 'pulse 1s ease-in-out infinite'}}/>
          <circle cx="115" cy="85" r="2" fill="#FF3BBA" opacity="0.8" style={{animation: 'pulse 1s ease-in-out infinite 0.3s'}}/>
        </g>

        {/* Gradient Definitions */}
        <defs>
          <radialGradient id="coreGradient">
            <stop offset="0%" stopColor="#39E0FF"/>
            <stop offset="100%" stopColor="#FF3BBA"/>
          </radialGradient>
          <style>{`
            @keyframes pulse {
              0%, 100% { opacity: 0.8; r: 2; }
              50% { opacity: 1; r: 3; }
            }
          `}</style>
        </defs>
      </svg>

      {/* Background Particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '2px',
            height: '2px',
            borderRadius: '50%',
            background: i % 2 === 0 ? '#39E0FF' : '#FF3BBA',
            opacity: 0.3,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${2 + Math.random() * 2}s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedDrone
