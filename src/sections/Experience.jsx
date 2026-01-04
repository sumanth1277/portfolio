import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    company: "Tech Innovators Inc.",
    role: "Mern stack Developer",
    date: "2026- Present",
    desc: "Leading the development of a high-traffic MERN platform, optimizing database queries by 40%."
  },
  {
    company: "Startup Hub",
    role: "Full-Stack Engineer",
    date: "2024 - 2025",
    desc: "Built scalable microservices using Node.js and integrated Three.js for interactive data viz."
  },
  {
    company: "Digital Agency",
    role: "Junior Developer",
    date: "2023 - 2024",
    desc: "Specialized in React-based UI/UX and state management with Redux Toolkit."
  }
];

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={ref} id="experience" className="py-20 px-10 relative">
      <h2 className="text-5xl font-bold text-white mb-24 text-center">
        Career <span className="text-cyan-500">Journey</span>
      </h2>

      <div className="max-w-4xl mx-auto relative">
        {/* The Glowing Line */}
        <motion.div 
          style={{ scaleY }}
          className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600 origin-top shadow-[0_0_15px_rgba(0,242,255,0.5)]"
        />

        {experiences.map((exp, i) => (
          <div key={i} className={`flex justify-between items-center w-full mb-16 ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}>
            {/* Content Card */}
            <motion.div 
              initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="w-[45%] p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-all"
            >
              <span className="text-cyan-400 font-mono text-sm">{exp.date}</span>
              <h3 className="text-xl font-bold text-white mt-1">{exp.role}</h3>
              <p className="text-gray-400 font-medium mb-3">{exp.company}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{exp.desc}</p>
            </motion.div>

            {/* Middle Node */}
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#030014] border-2 border-cyan-500 z-10 shadow-[0_0_10px_#00f2ff]" />
            
            <div className="w-[45%]" /> {/* Spacer for symmetry */}
          </div>
        ))}
      </div>
    </section>
  );
}