import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-10 relative flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl"
      >
        <h2 className="text-4xl font-bold text-white mb-8">Let's Build <span className="text-cyan-400">Together</span></h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Name" className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
            <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
          </div>
          <textarea placeholder="Your Message" rows="5" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500 transition-colors"></textarea>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-cyan-500 text-black font-bold rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.5)]"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
      
      <footer className="mt-20 text-gray-500 text-sm font-mono">
        © 2025 ALL RIGHTS RESERVED | DEVELOPED BY [PERAM SUMANTH REDDY]
      </footer>
    </section>
  );
}
