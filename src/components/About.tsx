import React from 'react';
import { motion } from 'motion/react';
import { Code2, Sparkles, Rocket, Heart } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-center mb-16"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <p className="text-lg text-gray-600 mb-4">
              I'm Aaron Fung (馮思竣), an Industrial Engineering & Engineering Management student at HKUST, passionate about leveraging data skills for business insights.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              I specialize in data analysis and process automation, applying analytical skills to optimize workflows and drive data-driven decisions.
            </p>
            <p className="text-lg text-gray-600">
              As a motivated individual, I thrive in collaborative environments and am eager to contribute to impactful projects while continuously learning.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2 relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Animated background circles */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-2xl"
              />
              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [90, 0, 90],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-2xl"
              />
              
              {/* Floating icons */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-10 left-10 w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <Code2 className="text-white" size={32} />
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute top-10 right-10 w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <Sparkles className="text-white" size={32} />
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-10 left-10 w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <Heart className="text-white" size={32} />
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, 25, 0],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3
                }}
                className="absolute bottom-10 right-10 w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <Rocket className="text-white" size={32} />
              </motion.div>
              
              {/* Center element */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 m-auto w-32 h-32 rounded-full border-4 border-dashed border-blue-300"
              />
              
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 m-auto w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-2xl flex items-center justify-center"
              >
                <span className="text-white text-3xl">👨‍💻</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
