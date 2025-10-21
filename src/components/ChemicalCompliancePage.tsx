import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Download, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ChemicalCompliancePageProps {
  onBack: () => void;
}

export function ChemicalCompliancePage({ onBack }: ChemicalCompliancePageProps) {
  const handleDownloadPPT = () => {
    const link = document.createElement('a');
    link.href = '/IMDS_learn_more.pptx';
    link.download = 'IMDS_Chemical_Compliance_Checker.pptx';
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
      <section className="bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 text-white py-20">
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
              <h1 className="text-4xl md:text-6xl mb-4">Chemical Compliance Checker</h1>
              <p className="text-xl md:text-2xl text-white/90">
                Automated IMDS Report Processing & Safety Validation System
              </p>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-white/80 mb-8"
            >
              A comprehensive tool for downloading IMDS material reports and validating chemical substances against international safety standards with automated threshold monitoring and compliance reporting.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              <Badge className="bg-white text-blue-600 hover:bg-white/90 px-4 py-2 text-sm">
                Python
              </Badge>
              <Badge className="bg-white text-blue-600 hover:bg-white/90 px-4 py-2 text-sm">
                Playwright
              </Badge>
              <Badge className="bg-white text-blue-600 hover:bg-white/90 px-4 py-2 text-sm">
                Pandas
              </Badge>
              <Badge className="bg-white text-blue-600 hover:bg-white/90 px-4 py-2 text-sm">
                Excel Processing
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
            <Card className="border-2 border-purple-400 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center">
                      <Download size={32} className="text-white" />
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
                        className="bg-purple-500 hover:bg-purple-400 gap-2"
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
                  The Chemical Compliance Checker is an advanced automation platform designed for chemical safety compliance in manufacturing. It seamlessly integrates with the IMDS database to automatically download material reports, extract chemical composition data, and validate substances against multiple international safety standards including GADSL, SVHC, PFAS, and OECD lists. The system eliminates manual processing, reduces compliance errors, and ensures adherence to global chemical safety regulations.
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
                  title: 'Automated IMDS Integration',
                  description: 'Browser automation for seamless report downloading from IMDS database'
                },
                {
                  title: 'Multi-Standard Validation',
                  description: 'Supports GADSL, SVHC, PFAS, OECD and custom safety standard lists'
                },
                {
                  title: 'Intelligent Document Processing',
                  description: 'Extracts chemical data from both PDF and DOCX report formats'
                },
                {
                  title: 'Threshold Monitoring',
                  description: 'Real-time detection of substances exceeding safety concentration limits'
                },
                {
                  title: 'Comprehensive Reporting',
                  description: 'Generates detailed Excel compliance reports with violation highlighting'
                },
                {
                  title: 'Batch Processing Capability',
                  description: 'Processes multiple reports simultaneously with progress tracking'
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
                          <CheckCircle2 style={{color: '#a855f7'}} size={24} />
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
                    { category: 'Automation Framework', tech: 'Python with Playwright for browser automation' },
                    { category: 'Database', tech: 'Excel file system with configurable standard paths' },
                    { category: 'Frontend', tech: 'tkinter/ttkbootstrap GUI with multi-tab interface' },
                    { category: 'Document Processing', tech: 'PyMuPDF + python-docx for report parsing' },
                    { category: 'Data Analysis', tech: 'Pandas + NumPy for chemical composition analysis' },
                    { category: 'Deployment', tech: 'Standalone executable with embedded dependencies' }
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
                  title: 'IMDS Report Download',
                  description: 'Automated browser control for bulk report retrieval from IMDS system'
                },
                {
                  title: 'Chemical Data Extraction',
                  description: 'Intelligent parsing of CAS numbers, concentrations, and substance names'
                },
                {
                  title: 'Safety Standard Matching',
                  description: 'Cross-reference chemicals against multiple regulatory databases'
                },
                {
                  title: 'Violation Detection',
                  description: 'Automatic flagging of substances exceeding threshold limits (ppm)'
                },
                {
                  title: 'Compliance Reporting',
                  description: 'Excel output with summary sheets and detailed violation analysis'
                },
                {
                  title: 'Standard Management',
                  description: 'Dynamic loading and synchronization of latest safety standard files'
                }
              ].map((func, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow border-l-4" style={{borderLeftColor: '#a855f7'}}>
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
