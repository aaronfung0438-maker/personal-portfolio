import React, { useState } from 'react';
import { Briefcase, Heart, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

const workingExperiences = [
  {
    title: 'Automation & Data Analyst Intern',
    company: 'Johnson Electric',
    period: '06/2025 - Ongoing',
    description: 'Developing automated systems for chemical compliance and data inspection to improve operational efficiency.',
    achievements: [
      'Built automated chemical compliance verification system achieving 90% time savings and 95% accuracy',
      'Designed real-time data tracking pipeline for predictive maintenance scheduling',
      'Created comprehensive AI training materials for quality assurance department',
      'Streamlined inspection report generation reducing manual effort by 80%',
    ],
  },
  {
    title: 'Part-time AI Research Intern',
    company: 'Insight Robotics Limited',
    period: '11/2024 - 01/2025',
    description: 'Contributed to AI model development through data preprocessing and image annotation.',
    achievements: [
      'Processed and cleaned large-scale datasets for machine learning model training',
      'Annotated thousands of images for computer vision algorithm development',
      'Collaborated with research team to optimize data preprocessing workflows',
      'Supported AI model validation and performance testing procedures',
    ],
  },
  {
    title: 'Industrial & Systems Engineering Intern',
    company: 'GROWGREEN LIMITED',
    period: '06/2024 - 11/2024',
    description: 'Designed STEM education courses and conducted comprehensive product testing.',
    achievements: [
      'Designed innovative STEM education curriculum for K-12 students',
      'Conducted comprehensive product testing and quality assurance protocols',
      'Prepared detailed technical documentation and performance reports',
      'Researched educational methodologies to enhance learning outcomes',
    ],
  },
];

const volunteerExperiences = [
  {
    title: 'OUTSTANDING SOLUTIONS AWARD: Student Category\nEMAHK Waste Challenge: Innovate to Eliminate',
    company: 'The Environmental Management Association of Hong Kong Limited',
    period: '02/2025',
    description: 'Participated in waste reduction innovation challenge for Great Eagle Holdings Limited.',
    achievements: [
      'Developed innovative waste reduction solution for Great Eagle Holdings Limited',
      'Received Outstanding Solutions Award in Student Category competition',
      'Analyzed waste management processes and identified optimization opportunities',
      'Presented sustainable solutions to industry professionals and judges',
    ],
  },
  {
    title: 'Peer Mentor Program',
    company: 'The Hong Kong University of Science and Technology',
    period: '06/2023 - Ongoing',
    description: 'Mentoring fellow students and organizing orientation activities for new students.',
    achievements: [
      'Mentored 20+ students on academic planning and personal development strategies',
      'Organized comprehensive freshman orientation programs for new students',
      'Facilitated peer support groups and study sessions throughout academic year',
      'Developed mentorship resources and guidance materials for student success',
    ],
  },
  {
    title: 'Intercultural Peer Learning Program',
    company: 'The Hong Kong University of Science and Technology',
    period: '06/2023 & 01/2024',
    description: 'Participated in intercultural research program identifying Hong Kong challenges from foreign perspectives.',
    achievements: [
      'Identified cultural challenges in Hong Kong from international student perspectives',
      'Developed innovative prototypes addressing cross-cultural communication barriers',
      'Iteratively improved solutions based on user feedback and testing results',
      'Presented final prototypes to panel of Hong Kong and Korean professors',
    ],
  },
];

function ExperienceSection({ 
  title, 
  experiences, 
  icon: Icon, 
  showAll, 
  onToggle,
  sectionIndex 
}: {
  title: string;
  experiences: typeof workingExperiences;
  icon: React.ComponentType<any>;
  showAll: boolean;
  onToggle: () => void;
  sectionIndex: number;
}) {
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 2);
  const hasMore = experiences.length > 2;

  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
        className="flex items-center gap-3 mb-8"
      >
        <Icon className="text-blue-600" size={28} />
        <h3 className="text-3xl font-semibold">{title}</h3>
      </motion.div>
      
      <div className="space-y-8">
        {displayedExperiences.map((exp, index) => (
          <motion.div 
            key={`${title}-${index}`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative pl-8 pb-8 border-l-2 border-gray-200 last:pb-0"
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white"
            />
            <motion.div 
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
              }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                </motion.div>
                <div className="flex-1">
                  <h4 className="text-2xl mb-1">{exp.title}</h4>
                  <div className="flex flex-col md:flex-row md:items-center md:gap-4 text-gray-600 mb-3">
                    <span>{exp.company}</span>
                    <span className="hidden md:inline">•</span>
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 + 0.3 }}
                        className="text-gray-600 flex items-start gap-2"
                      >
                        <span className="text-blue-600 mt-1.5">→</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {hasMore && (
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-6"
        >
          <Button
            variant="outline"
            onClick={onToggle}
            className="flex items-center gap-2"
          >
            {showAll ? (
              <>
                <ChevronUp size={16} />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown size={16} />
                Show More ({experiences.length - 2} more)
              </>
            )}
          </Button>
        </motion.div>
      )}
    </div>
  );
}

export function Experience() {
  const [showAllWorking, setShowAllWorking] = useState(false);
  const [showAllVolunteering, setShowAllVolunteering] = useState(false);

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-center mb-16"
        >
          Experience
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <ExperienceSection
            title="Working Experience"
            experiences={workingExperiences}
            icon={Briefcase}
            showAll={showAllWorking}
            onToggle={() => setShowAllWorking(!showAllWorking)}
            sectionIndex={0}
          />
          
          <ExperienceSection
            title="Volunteering Experience"
            experiences={volunteerExperiences}
            icon={Heart}
            showAll={showAllVolunteering}
            onToggle={() => setShowAllVolunteering(!showAllVolunteering)}
            sectionIndex={1}
          />
        </div>
      </div>
    </section>
  );
}
