import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Download, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface RedCardSystemPageProps {
  onBack: () => void;
}

export function RedCardSystemPage({ onBack }: RedCardSystemPageProps) {
  const handleDownloadPPT = () => {
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}Red Card System_learn_more.pptx`;
    link.download = 'Red_Card_System_Presentation.pptx';
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
      <section className="bg-gradient-to-br from-pink-500 to-orange-500 text-white py-20">
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
              <h1 className="text-4xl md:text-6xl mb-4">Red Card System</h1>
              <p className="text-xl md:text-2xl text-white/90">
                Digital Defect Tracking & Follow-up Management System
              </p>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-white/80 mb-8"
            >
              A comprehensive digital solution that transforms manual defect tracking processes using Microsoft Power Platform integration with automated workflows and real-time visibility.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              <Badge className="bg-white hover:bg-white/90 px-4 py-2 text-sm" style={{color: '#ec4899'}}>
                Power Apps
              </Badge>
              <Badge className="bg-white hover:bg-white/90 px-4 py-2 text-sm" style={{color: '#ec4899'}}>
                SharePoint
              </Badge>
              <Badge className="bg-white hover:bg-white/90 px-4 py-2 text-sm" style={{color: '#ec4899'}}>
                Power Automate
              </Badge>
              <Badge className="bg-white hover:bg-white/90 px-4 py-2 text-sm" style={{color: '#ec4899'}}>
                Power BI
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
            <Card className="border-2 border-pink-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                      <Download size={32} className="text-pink-600" />
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
                        className="bg-pink-600 hover:bg-pink-700 gap-2"
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
                  The Red Card System is a digital transformation solution that replaces Excel-based defect tracking with an integrated Microsoft Power Platform approach. It automates the entire defect lifecycle from initial paper-based recording to digital follow-up, providing real-time status tracking, automated notifications, and comprehensive audit trails. The system eliminates manual data entry errors while ensuring complete accountability and visibility across all stakeholders.
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
                  title: 'Digital Data Capture',
                  description: 'Power Apps provides user-friendly, guided forms for accurate defect entry'
                },
                {
                  title: 'Version History Tracking',
                  description: 'SharePoint maintains complete audit trails for all data changes'
                },
                {
                  title: 'Automated Workflow Management',
                  description: 'Power Automate ensures timely notifications and follow-ups'
                },
                {
                  title: 'Real-time Dashboard Analytics',
                  description: 'Power BI delivers actionable insights and defect trend visualization'
                },
                {
                  title: 'Seamless Integration',
                  description: 'Two-stage process from paper to digital with full traceability'
                },
                {
                  title: 'Enhanced Data Security',
                  description: 'Centralized SharePoint storage with comprehensive access controls'
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
                          <CheckCircle2 style={{color: '#ec4899'}} size={24} />
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
                    { category: 'Frontend Platform', tech: 'Power Apps with guided form interface' },
                    { category: 'Database', tech: 'SharePoint with version history and audit capabilities' },
                    { category: 'Workflow Engine', tech: 'Power Automate for automated notifications and process management' },
                    { category: 'Analytics Platform', tech: 'Power BI for real-time dashboards and trend analysis' },
                    { category: 'Data Processing', tech: 'Automated data validation and integrity checks' },
                    { category: 'Deployment', tech: 'Microsoft 365 cloud-based with enterprise security' }
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
                  title: 'Paper-to-Digital Conversion',
                  description: 'Streamlined upload process from physical red cards to SharePoint'
                },
                {
                  title: 'Automated Status Tracking',
                  description: 'Real-time visibility of defect lifecycle and resolution progress'
                },
                {
                  title: 'Smart Notification System',
                  description: 'Automated alerts to engineers and managers for new/updated defects'
                },
                {
                  title: 'Audit Trail Management',
                  description: 'Complete tracking of who made changes and when modifications occurred'
                },
                {
                  title: 'Dashboard Reporting',
                  description: 'Power BI visualizations for defect trends and performance metrics'
                },
                {
                  title: 'Process Automation',
                  description: 'Elimination of manual follow-up tracking and reminder systems'
                }
              ].map((func, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow border-l-4" style={{borderLeftColor: '#ec4899'}}>
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
