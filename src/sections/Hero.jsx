// src/sections/Hero.jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const textRef = useRef();

  useEffect(() => {
    gsap.from(".char", {
      y: 100,
      stagger: 0.05,
      delay: 0.2,
      duration: 1,
      ease: "power4.out",
    });
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center px-10">
      <h1 className="text-8xl font-bold text-white overflow-hidden uppercase tracking-tighter">
        {"CREATIVE".split("").map((char, i) => (
          <span key={i} className="char inline-block">{char}</span>
        ))}
      </h1>
      <p className="text-cyan-400 mt-4 text-xl font-mono">
        &gt; MERN Stack Developer_
      </p>
      <div className="flex gap-4 mt-8">
        <button className="px-8 py-3 bg-cyan-500 text-black font-bold rounded-full hover:shadow-[0_0_20px_#00f2ff] transition-all">
          View Projects
        </button>
      </div>
    </section>
  );
}