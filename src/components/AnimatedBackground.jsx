// Techfest-Inspired Cyberpunk Background
const AnimatedBackground = () => {
  return (
    <div className="cyber-bg">
      {/* Deep gradient base */}
      <div className="absolute inset-0" 
           style={{ 
             background: 'linear-gradient(135deg, #020617 0%, #0b1120 40%, #1a0b2e 80%, #2d0a3e 100%)'
           }}></div>
      
      {/* Cyberpunk grid */}
      <div className="cyber-grid"></div>
      
      {/* Neon glows */}
      <div className="cyber-glow glow-cyan"></div>
      <div className="cyber-glow glow-magenta"></div>
      
      {/* Additional ambient glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-20 blur-[120px]"
           style={{ background: 'radial-gradient(circle, #39E0FF, transparent)' }}></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-20 blur-[120px]"
           style={{ background: 'radial-gradient(circle, #FF3BBA, transparent)' }}></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              background: i % 2 === 0 ? '#39E0FF' : '#FF3BBA',
              boxShadow: `0 0 ${10 + Math.random() * 10}px ${i % 2 === 0 ? '#39E0FF' : '#FF3BBA'}`,
              animation: `floatDrone ${8 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.6
            }}
          ></div>
        ))}
      </div>
      
      {/* Cyberpunk skyline silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] opacity-40"
           style={{
             background: `linear-gradient(to top, 
               rgba(11, 17, 32, 0.9) 0%, 
               rgba(11, 17, 32, 0.6) 30%,
               transparent 100%)`
           }}>
        {/* Building silhouettes */}
        <div className="absolute bottom-0 left-[10%] w-[60px] h-[180px] bg-gradient-to-t from-[#0b1120] to-transparent"
             style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 20%, 80% 20%, 80% 0, 20% 0, 20% 20%, 0 20%)' }}></div>
        <div className="absolute bottom-0 left-[20%] w-[80px] h-[220px] bg-gradient-to-t from-[#0b1120] to-transparent"
             style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 15%, 85% 15%, 85% 0, 15% 0, 15% 15%, 0 15%)' }}></div>
        <div className="absolute bottom-0 left-[35%] w-[50px] h-[140px] bg-gradient-to-t from-[#0b1120] to-transparent"></div>
        <div className="absolute bottom-0 right-[30%] w-[70px] h-[200px] bg-gradient-to-t from-[#0b1120] to-transparent"
             style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 25%, 70% 25%, 70% 0, 30% 0, 30% 25%, 0 25%)' }}></div>
        <div className="absolute bottom-0 right-[15%] w-[90px] h-[240px] bg-gradient-to-t from-[#0b1120] to-transparent"
             style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 10%, 90% 10%, 90% 0, 10% 0, 10% 10%, 0 10%)' }}></div>
        
        {/* Neon building edges */}
        <div className="absolute bottom-0 left-[10%] w-[2px] h-[180px] bg-gradient-to-t from-[#39E0FF] to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-[calc(10%+60px)] w-[2px] h-[180px] bg-gradient-to-t from-[#39E0FF] to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-[20%] w-[2px] h-[220px] bg-gradient-to-t from-[#FF3BBA] to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-[calc(20%+80px)] w-[2px] h-[220px] bg-gradient-to-t from-[#FF3BBA] to-transparent opacity-60"></div>
      </div>
    </div>
  )
}

export default AnimatedBackground
