// src/sections/Skills.jsx
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: '95%' },
  { name: 'Node.js', level: '90%' },
  { name: 'MongoDB', level: '85%' },
  { name: 'Three.js', level: '80%' },
  { name: 'Express', level: '90%' },
  { name: 'Tailwind', level: '95%' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-10 min-h-screen">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-5xl font-bold text-white mb-16"
      >
        Technical <span className="text-purple-500">Arsenal</span>
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {skills.map((skill) => (
          <motion.div 
            key={skill.name}
            variants={itemVariants}
            className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/50 group transition-all"
          >
            <h3 className="text-xl text-white font-bold mb-4">{skill.name}</h3>
            <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}