// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="w-full py-10 px-10 border-t border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-500 text-sm font-mono">
          © {new Date().getFullYear()} DESIGNED & BUILT BY YOURNAME
        </div>
        
        <div className="flex gap-8">
          {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((social) => (
            <a 
              key={social} 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}