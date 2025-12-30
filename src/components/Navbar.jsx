// src/components/Navbar.jsx
import { motion } from 'framer-motion';

export default function Navbar() {
  const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-6"
    >
      {/* Brand Logo */}
      <div className="text-white font-bold text-2xl tracking-tighter">
        PORTFOLIO<span className="text-cyan-500">.</span>
      </div>
      
      {/* Navigation Links (Glassmorphism) */}
      <div className="hidden md:flex gap-8 items-center bg-white/5 backdrop-blur-md border border-white/10 px-8 py-3 rounded-full">
        {navItems.map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium"
          >
            {item}
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <button className="bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 px-6 py-2 rounded-full hover:bg-cyan-500 hover:text-black transition-all font-semibold">
        Resume
      </button>
    </motion.nav>
  );
}