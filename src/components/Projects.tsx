import React, { useState } from 'react';
import { Github, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectsProps {
  projectImages: string[];
  onNavigateToOIR: () => void;
  onNavigateToChemicalCompliance: () => void;
  onNavigateToRedCard: () => void;
  onNavigateToRGBAnalytics: () => void;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  imageIndex: number;
  detailedInfo?: {
    subtitle: string;
    overview: string;
    features: string[];
    techStack: { category: string; tech: string }[];
    functionality: string[];
  };
}

const projects: Project[] = [
  {
    title: 'OIR System (Outgoing Inspection Report)',
    description: 'A full-featured inspection report management system with real-time validation, automated report generation, and multi-language support.',
    tags: ['Python Flask', 'SQL Server', 'Bootstrap', 'OpenPyXL'],
    imageIndex: 0,
    detailedInfo: {
      subtitle: 'A full-featured inspection report management system with real-time validation, automated report generation, and multi-language support.',
      overview: 'The OIR System is a comprehensive quality inspection platform designed for manufacturing environments. It provides seamless data input, real-time validation, automated Excel report generation, and complete inspection record management with support for tablets and PC devices.',
      features: [
        'Dynamic Inspection Configuration - Automatically loads inspection standards based on product model and version',
        'Real-time Data Validation - Instant verification of measurement values against upper/lower limits',
        'Automated Report Generation - Uses Excel templates to generate standardized inspection reports',
        'Multi-language Support - Traditional Chinese, Simplified Chinese, and English interface',
        'Responsive Design - Optimized for both tablet and desktop use in factory environments',
        'Enterprise Database Integration - SQL Server 2022 support with complete data traceability'
      ],
      techStack: [
        { category: 'Backend Framework', tech: 'Python Flask with RESTful APIs' },
        { category: 'Database', tech: 'SQL Server 2022 / Excel file system' },
        { category: 'Frontend', tech: 'HTML5 + CSS3 + JavaScript with Bootstrap 5' },
        { category: 'Report Engine', tech: 'OpenPyXL for Excel template processing' },
        { category: 'Data Processing', tech: 'Pandas for statistical calculations' },
        { category: 'Deployment', tech: 'Local network deployment with multi-user support' }
      ],
      functionality: [
        'Work Order Management - Administrative control of daily inspection tasks',
        'Measurement Data Input - Flexible measurement points (5-15 per item) with instant validation',
        'Statistical Analysis - Automatic calculation of mean, max, min values and standard deviation',
        'Accept/Reject Determination - Automated pass/fail marking based on specification limits',
        'Report Export - Excel and PDF format downloads with standardized templates',
        'Historical Records - Complete inspection history tracking and query capabilities'
      ]
    }
  },
  {
    title: 'Chemical Compliance Checker',
    description: 'Automated IMDS Report Processing & Safety Validation System for chemical substances against international safety standards.',
    tags: ['Python', 'Playwright', 'Pandas', 'Excel Processing'],
    imageIndex: 1,
    detailedInfo: {
      subtitle: 'Automated IMDS Report Processing & Safety Validation System',
      overview: 'The Chemical Compliance Checker is an advanced automation platform designed for chemical safety compliance in manufacturing. It seamlessly integrates with the IMDS database to automatically download material reports, extract chemical composition data, and validate substances against multiple international safety standards including GADSL, SVHC, PFAS, and OECD lists. The system eliminates manual processing, reduces compliance errors, and ensures adherence to global chemical safety regulations.',
      features: [
        'Automated IMDS Integration - Browser automation for seamless report downloading from IMDS database',
        'Multi-Standard Validation - Supports GADSL, SVHC, PFAS, OECD and custom safety standard lists',
        'Intelligent Document Processing - Extracts chemical data from both PDF and DOCX report formats',
        'Threshold Monitoring - Real-time detection of substances exceeding safety concentration limits',
        'Comprehensive Reporting - Generates detailed Excel compliance reports with violation highlighting',
        'Batch Processing Capability - Processes multiple reports simultaneously with progress tracking'
      ],
      techStack: [
        { category: 'Automation Framework', tech: 'Python with Playwright for browser automation' },
        { category: 'Database', tech: 'Excel file system with configurable standard paths' },
        { category: 'Frontend', tech: 'tkinter/ttkbootstrap GUI with multi-tab interface' },
        { category: 'Document Processing', tech: 'PyMuPDF + python-docx for report parsing' },
        { category: 'Data Analysis', tech: 'Pandas + NumPy for chemical composition analysis' },
        { category: 'Deployment', tech: 'Standalone executable with embedded dependencies' }
      ],
      functionality: [
        'IMDS Report Download - Automated browser control for bulk report retrieval from IMDS system',
        'Chemical Data Extraction - Intelligent parsing of CAS numbers, concentrations, and substance names',
        'Safety Standard Matching - Cross-reference chemicals against multiple regulatory databases',
        'Violation Detection - Automatic flagging of substances exceeding threshold limits (ppm)',
        'Compliance Reporting - Excel output with summary sheets and detailed violation analysis',
        'Standard Management - Dynamic loading and synchronization of latest safety standard files'
      ]
    }
  },
  {
    title: 'Red Card System',
    description: 'Digital Defect Tracking & Follow-up Management System. A comprehensive digital solution that transforms manual defect tracking processes using Microsoft Power Platform integration.',
    tags: ['Power Apps', 'SharePoint', 'Power Automate', 'Power BI'],
    imageIndex: 2,
    detailedInfo: {
      subtitle: 'Digital Defect Tracking & Follow-up Management System',
      overview: 'The Red Card System is a digital transformation solution that replaces Excel-based defect tracking with an integrated Microsoft Power Platform approach. It automates the entire defect lifecycle from initial paper-based recording to digital follow-up, providing real-time status tracking, automated notifications, and comprehensive audit trails. The system eliminates manual data entry errors while ensuring complete accountability and visibility across all stakeholders.',
      features: [
        'Digital Data Capture - Power Apps provides user-friendly, guided forms for accurate defect entry',
        'Version History Tracking - SharePoint maintains complete audit trails for all data changes',
        'Automated Workflow Management - Power Automate ensures timely notifications and follow-ups',
        'Real-time Dashboard Analytics - Power BI delivers actionable insights and defect trend visualization',
        'Seamless Integration - Two-stage process from paper to digital with full traceability',
        'Enhanced Data Security - Centralized SharePoint storage with comprehensive access controls'
      ],
      techStack: [
        { category: 'Frontend Platform', tech: 'Power Apps with guided form interface' },
        { category: 'Database', tech: 'SharePoint with version history and audit capabilities' },
        { category: 'Workflow Engine', tech: 'Power Automate for automated notifications and process management' },
        { category: 'Analytics Platform', tech: 'Power BI for real-time dashboards and trend analysis' },
        { category: 'Data Processing', tech: 'Automated data validation and integrity checks' },
        { category: 'Deployment', tech: 'Microsoft 365 cloud-based with enterprise security' }
      ],
      functionality: [
        'Paper-to-Digital Conversion - Streamlined upload process from physical red cards to SharePoint',
        'Automated Status Tracking - Real-time visibility of defect lifecycle and resolution progress',
        'Smart Notification System - Automated alerts to engineers and managers for new/updated defects',
        'Audit Trail Management - Complete tracking of who made changes and when modifications occurred',
        'Dashboard Reporting - Power BI visualizations for defect trends and performance metrics',
        'Process Automation - Elimination of manual follow-up tracking and reminder systems'
      ]
    }
  },
  {
    title: 'RGB Production Line Predictive Analytics',
    description: 'Comprehensive data analytics solution for predicting product quality metrics in real-time by analyzing production line sensor data.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'LightGBM'],
    imageIndex: 3,
    detailedInfo: {
      subtitle: 'RGB Production Line Predictive Analytics & Quality Forecasting System',
      overview: 'The RGB Production Line Predictive Analytics system is an end-to-end data science solution designed to forecast key product quality dimensions (thickness, inner/outer diameter) from industrial process parameters. It tackles complex, high-frequency sensor data with mismatched collection intervals, employing robust data cleaning, advanced statistical analysis, and ensemble machine learning models. The system provides accurate predictions and quantile-based uncertainty intervals, empowering engineers to anticipate quality issues, optimize process parameters, and move from reactive to proactive manufacturing.',
      features: [
        'Automated Data Pipeline - Ingests and cleans high-frequency data from production equipment, resolving time-alignment challenges',
        'Advanced Statistical Profiling - Identifies key drivers and characterizes data structure to guide model selection',
        'Dual Strategy Data Handling - Implements two dataset versions to balance data cleanliness with sample size',
        'Ensemble Machine Learning - Leverages Random Forest and LightGBM Quantile Regression for robust predictions',
        'Feature Importance Analysis - Quantifies the impact of each process parameter on final product quality',
        'Predictive Performance Monitoring - Tracks model accuracy and evaluates prediction interval coverage'
      ],
      techStack: [
        { category: 'Data Processing & Analysis', tech: 'Pandas, NumPy for data manipulation and analysis' },
        { category: 'Machine Learning', tech: 'Scikit-learn (Random Forest), LightGBM (Quantile Regression)' },
        { category: 'Statistical Analysis', tech: 'SciPy (Pearson/Spearman Correlation, Descriptive Statistics)' },
        { category: 'Data Visualization', tech: 'Matplotlib, Seaborn for correlation heatmaps and distribution plots' },
        { category: 'Methodology', tech: 'Train-Test Split (70/30), Z-score/IQR Outlier Detection' },
        { category: 'Deployment', tech: 'Kernel Density Estimation, Predictive Interval Analysis' }
      ],
      functionality: [
        'Industrial Data Wrangling - Cleans and merges multi-source time-series data with timestamp alignment',
        'Correlation & Relationship Mapping - Employs Pearson and Spearman correlation for linear/non-linear relationships',
        'Outlier Detection & Analysis - Uses multiple methods to identify anomalies from measurement errors',
        'Predictive Quality Modeling - Generates precise forecasts and quantile predictions for specification limits',
        'Actionable Insight Generation - Delivers findings on data limitations with improvement recommendations',
        'Real-time Process Control - Enables proactive manufacturing through predictive quality assessment'
      ]
    }
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export function Projects({ projectImages, onNavigateToOIR, onNavigateToChemicalCompliance, onNavigateToRedCard, onNavigateToRGBAnalytics }: ProjectsProps) {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  // Create the projects to display based on showAllProjects state
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);
  
  // Projects state management working correctly

  const toggleExpand = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  const handleLearnMore = (index: number) => {
    // If it's the OIR System (index 0), navigate to dedicated page
    if (index === 0) {
      onNavigateToOIR();
    } else if (index === 1) {
      // If it's the Chemical Compliance Checker (index 1), navigate to dedicated page
      onNavigateToChemicalCompliance();
    } else if (index === 2) {
      // If it's the Red Card System (index 2), navigate to dedicated page
      onNavigateToRedCard();
    } else if (index === 3) {
      // If it's the RGB Analytics (index 3), navigate to dedicated page
      onNavigateToRGBAnalytics();
    } else {
      // For other projects, toggle the expand/collapse
      toggleExpand(index);
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-center mb-16"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {displayedProjects.map((project, displayIndex) => {
            // Find the original index in the full projects array
            const originalIndex = projects.findIndex(p => p.title === project.title);
            
            // Project rendering successfully
            
            return (
            <div key={originalIndex}>
              <motion.div
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-shadow group flex flex-col" style={{height: '550px'}}>
                  <div className="relative overflow-hidden aspect-video bg-gray-200">
                    <ImageWithFallback
                      src={projectImages[project.imageIndex]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Badge variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    
                    <AnimatePresence>
                      {expandedProject === originalIndex && project.detailedInfo && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mb-4 overflow-hidden"
                        >
                          <div className="pt-4 border-t border-gray-200 space-y-4">
                            <div>
                              <h4 className="text-sm mb-2 text-gray-900">System Overview</h4>
                              <p className="text-xs text-gray-600">{project.detailedInfo.overview}</p>
                            </div>

                            <div>
                              <h4 className="text-sm mb-2 text-gray-900">Key Features</h4>
                              <ul className="space-y-1">
                                {project.detailedInfo.features.map((feature, i) => (
                                  <li key={i} className="text-xs text-gray-600 flex items-start">
                                    <span className="mr-1">•</span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-sm mb-2 text-gray-900">Technology Stack</h4>
                              <div className="space-y-1">
                                {project.detailedInfo.techStack.map((stack, i) => (
                                  <div key={i} className="text-xs">
                                    <span className="text-gray-900">{stack.category}:</span>{' '}
                                    <span className="text-gray-600">{stack.tech}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="text-sm mb-2 text-gray-900">Core Functionality</h4>
                              <ul className="space-y-1">
                                {project.detailedInfo.functionality.map((func, i) => (
                                  <li key={i} className="text-xs text-gray-600 flex items-start">
                                    <span className="mr-1">•</span>
                                    <span>{func}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex gap-2 mt-auto">
                      {originalIndex !== 2 && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1"
                      >
                        <Button variant="outline" size="sm" className="w-full">
                          <Github size={16} className="mr-1" />
                          Code
                        </Button>
                      </motion.div>
                      )}
                      {project.detailedInfo ? (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={originalIndex === 2 ? "w-full" : "flex-1"}
                        >
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full"
                            onClick={() => handleLearnMore(originalIndex)}
                          >
                              <>
                                <ChevronDown size={16} className="mr-1" />
                                Learn More
                              </>
                          </Button>
                        </motion.div>
                      ) : null}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            );
          })}
        </div>
        
        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => setShowAllProjects(!showAllProjects)}
                variant="outline"
                size="lg"
                className="gap-2"
              >
                {showAllProjects ? (
                  <>
                    <ChevronUp size={20} />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown size={20} />
                    Show More ({projects.length - 3} more)
                  </>
                )}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
