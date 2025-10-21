import React, { useState } from 'react';
import { Code2, Database, FileText, Cog, Zap, Brain, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const skills = [
  {
    icon: Code2,
    title: 'Programming Languages',
    items: ['Python', 'SQL', 'HTML/CSS'],
    color: 'from-blue-500 to-cyan-500',
    description: 'Proficient in multiple programming languages',
  },
  {
    icon: Database,
    title: 'Data Analysis & DBMS',
    items: ['Tableau', 'VBA', 'Microsoft SQL Server', 'MySQL'],
    color: 'from-purple-500 to-pink-500',
    description: 'Expertise in data processing and database management',
  },
  {
    icon: FileText,
    title: 'Microsoft Office',
    items: ['Word', 'Excel', 'PowerPoint','SharePoint'],
    color: 'from-orange-500 to-red-500',
    description: 'Advanced proficiency in Microsoft Office suite',
  },
  {
    icon: Cog,
    title: 'Industrial Engineering',
    items: ['Quality Control', 'Process Automation', 'Project Management'],
    color: 'from-green-500 to-emerald-500',
    description: 'Engineering and process optimization expertise',
  },
  {
    icon: Zap,
    title: 'Power Platform',
    items: ['Power Apps', 'Power Automate', 'Power BI', 'Microsoft Copilot Studio'],
    color: 'from-indigo-500 to-blue-500',
    description: 'Microsoft Power Platform automation tools',
  },
  {
    icon: Brain,
    title: 'AI & Research',
    items: ['Machine & Deep Learning Basics', 'Data Preprocessing', 'Image Annotation', 'Research Methodology'],
    color: 'from-pink-500 to-rose-500',
    description: 'AI research and development skills',
  },
];

function FlipCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
      }}
      className="h-80 cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={() => setIsFlipped(!isFlipped)}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ 
          duration: 0.6,
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
      >
        {/* Front of Card */}
        <motion.div
          className="absolute w-full h-full rounded-2xl shadow-xl"
          style={{ 
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden"
          }}
        >
          <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${skill.color} p-8 flex flex-col items-center justify-center text-white relative overflow-hidden`}>
            {/* Animated background pattern */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            
            {/* Icon with animation */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-6"
            >
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl">
                <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
              </div>
            </motion.div>
            
            <h3 className="text-2xl text-center mb-3">{skill.title}</h3>
            <p className="text-white/80 text-sm text-center">{skill.description}</p>
            
            {/* Hover indicator */}
            <motion.div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/60 text-xs"
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Hover to see details</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Back of Card */}
        <motion.div
          className="absolute w-full h-full rounded-2xl shadow-xl bg-white"
          style={{ 
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className="w-full h-full rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Gradient accent */}
            <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${skill.color}`} />
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl">{skill.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {skill.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isFlipped ? 1 : 0, x: isFlipped ? 0 : -20 }}
                    transition={{ 
                      delay: 0.3 + i * 0.1,
                      duration: 0.3
                    }}
                    className="flex items-center gap-3 group"
                  >
                    <motion.div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      animate={{
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className={`mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500 text-center`}>
              Click to flip back
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hover over or click the cards to explore my technical expertise and creative abilities
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <FlipCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
