import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Download, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface OIRSystemPageProps {
  onBack: () => void;
}

export function OIRSystemPage({ onBack }: OIRSystemPageProps) {
  const handleDownloadPPT = () => {
    const link = document.createElement('a');
    link.href = '/OIR_learn_more.pptx';
    link.download = 'OIR_System_Presentation.pptx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Button
              variant="ghost"
              onClick={onBack}
              className="gap-2"
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-400 via-teal-500 to-emerald-500 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-6xl mb-4">OIR System</h1>
              <p className="text-xl md:text-2xl text-white/90">
                Outgoing Inspection Report Management System
              </p>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-white/80 mb-8"
            >
              A full-featured inspection report management system with real-time validation, 
              automated report generation, and multi-language support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              <Badge className="bg-white text-teal-700 hover:bg-white/90 px-4 py-2 text-sm">
                Python Flask
              </Badge>
              <Badge className="bg-white text-teal-700 hover:bg-white/90 px-4 py-2 text-sm">
                SQL Server
              </Badge>
              <Badge className="bg-white text-teal-700 hover:bg-white/90 px-4 py-2 text-sm">
                Bootstrap
              </Badge>
              <Badge className="bg-white text-teal-700 hover:bg-white/90 px-4 py-2 text-sm">
                OpenPyXL
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="border-2 border-teal-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                      <Download size={32} className="text-teal-600" />
                    </div>
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-2xl mb-2">Download Presentation</h3>
                    <p className="text-gray-600">
                      Get the complete PowerPoint presentation with detailed system architecture, 
                      features, and implementation details.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={handleDownloadPPT}
                        size="lg"
                        className="bg-teal-600 hover:bg-teal-700 gap-2"
                      >
                        <Download size={20} />
                        Download PPT
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* System Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl text-center mb-12">System Overview</h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed">
                  The OIR System is a comprehensive quality inspection platform designed for manufacturing 
                  environments. It provides seamless data input, real-time validation, automated Excel report 
                  generation, and complete inspection record management with support for tablets and PC devices. 
                  The system streamlines the quality control process by automating inspection workflows, 
                  reducing human error, and ensuring compliance with manufacturing standards.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Dynamic Inspection Configuration',
                  description: 'Automatically loads inspection standards based on product model and version'
                },
                {
                  title: 'Real-time Data Validation',
                  description: 'Instant verification of measurement values against upper/lower limits'
                },
                {
                  title: 'Automated Report Generation',
                  description: 'Uses Excel templates to generate standardized inspection reports'
                },
                {
                  title: 'Multi-language Support',
                  description: 'Traditional Chinese, Simplified Chinese, and English interface'
                },
                {
                  title: 'Responsive Design',
                  description: 'Optimized for both tablet and desktop use in factory environments'
                },
                {
                  title: 'Enterprise Database Integration',
                  description: 'SQL Server 2022 support with complete data traceability'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <CheckCircle2 className="text-green-600" size={24} />
                        </div>
                        <div>
                          <h3 className="text-lg mb-2">{feature.title}</h3>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl text-center mb-12">Technology Stack</h2>
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {[
                    { category: 'Backend Framework', tech: 'Python Flask with RESTful APIs' },
                    { category: 'Database', tech: 'SQL Server 2022 / Excel file system' },
                    { category: 'Frontend', tech: 'HTML5 + CSS3 + JavaScript with Bootstrap 5' },
                    { category: 'Report Engine', tech: 'OpenPyXL for Excel template processing' },
                    { category: 'Data Processing', tech: 'Pandas for statistical calculations' },
                    { category: 'Deployment', tech: 'Local network deployment with multi-user support' }
                  ].map((stack, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex flex-col md:flex-row md:items-center border-b border-gray-200 pb-4 last:border-0"
                    >
                      <div className="md:w-1/3 mb-1 md:mb-0">
                        <span className="text-gray-900">{stack.category}</span>
                      </div>
                      <div className="md:w-2/3">
                        <span className="text-gray-600">{stack.tech}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Core Functionality */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl text-center mb-12">Core Functionality</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Work Order Management',
                  description: 'Administrative control of daily inspection tasks'
                },
                {
                  title: 'Measurement Data Input',
                  description: 'Flexible measurement points (5-15 per item) with instant validation'
                },
                {
                  title: 'Statistical Analysis',
                  description: 'Automatic calculation of mean, max, min values and standard deviation'
                },
                {
                  title: 'Accept/Reject Determination',
                  description: 'Automated pass/fail marking based on specification limits'
                },
                {
                  title: 'Report Export',
                  description: 'Excel and PDF format downloads with standardized templates'
                },
                {
                  title: 'Historical Records',
                  description: 'Complete inspection history tracking and query capabilities'
                }
              ].map((func, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-teal-500">
                    <CardContent className="p-6">
                      <h3 className="text-lg mb-2">{func.title}</h3>
                      <p className="text-gray-600 text-sm">{func.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl mb-6">Questions or Feedback?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Feel free to reach out if you'd like to learn more about this project 
              or discuss similar solutions for your organization.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={onBack}
                size="lg"
                variant="outline"
                className="gap-2"
              >
                <ArrowLeft size={20} />
                Back to Portfolio
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
