// src/sections/Projects.jsx
import { motion } from 'framer-motion';

const projectData = [
  { title: "E-Commerce Titan", tech: "MERN Stack", color: "#00f2ff" },
  { title: "SaaS Dashboard", tech: "React + Tailwind", color: "#7000ff" },
  { title: "3D Portfolio", tech: "Three.js", color: "#ff00c8" },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-10">
      <div className="flex justify-between items-end mb-20">
        <div>
          <p className="text-cyan-400 font-mono mb-2">// Selected Works</p>
          <h2 className="text-6xl font-bold text-white uppercase italic">Featured</h2>
        </div>
        <div className="text-gray-500 max-w-md text-right">
          Exploring the intersection of performance and aesthetics through modern web technologies.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectData.map((project, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer overflow-hidden rounded-xl bg-white/5 border border-white/10 p-4"
          >
            <div className="h-64 mb-4 rounded-lg overflow-hidden bg-gray-900 flex items-center justify-center">
              {/* This is where the 3D Canvas element would visually align */}
              <p className="text-gray-700 font-bold uppercase tracking-widest group-hover:text-cyan-500 transition-colors">
                View Project
              </p>
            </div>
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-gray-400 font-mono text-sm">{project.tech}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}