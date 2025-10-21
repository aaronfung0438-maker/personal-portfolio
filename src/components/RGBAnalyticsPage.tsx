import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Download, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface RGBAnalyticsPageProps {
  onBack: () => void;
}

export function RGBAnalyticsPage({ onBack }: RGBAnalyticsPageProps) {
  const handleDownloadPPT = () => {
    const link = document.createElement('a');
    link.href = '/RGB_Analytics_learn_more.pptx';
    link.download = 'RGB_Production_Line_Analytics.pptx';
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
      <section className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white py-20">
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
              <h1 className="text-4xl md:text-6xl mb-4">RGB Production Line Analytics</h1>
              <p className="text-xl md:text-2xl text-white/90">
                Predictive Analytics & Quality Forecasting System
              </p>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-white/80 mb-8"
            >
              A comprehensive data analytics solution for predicting product quality metrics (thickness, diameter) in real-time by analyzing production line sensor data, enabling proactive process control and data-driven decision-making.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              <Badge className="bg-white hover:bg-white/90 px-4 py-2 text-sm" style={{color: '#10b981'}}>
                Python
              </Badge>
              <Badge className="bg-white hover:bg-white/90 px-4 py-2 text-sm" style={{color: '#10b981'}}>
                Pandas
              </Badge>
              <Badge className="bg-white hover:bg-white/90 px-4 py-2 text-sm" style={{color: '#10b981'}}>
                Scikit-learn
              </Badge>
              <Badge className="bg-white hover:bg-white/90 px-4 py-2 text-sm" style={{color: '#10b981'}}>
                LightGBM
              </Badge>
              <Badge className="bg-white hover:bg-white/90 px-4 py-2 text-sm" style={{color: '#10b981'}}>
                Statistical Analysis
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
            <Card className="border-2 border-emerald-400 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center">
                      <Download size={32} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-2xl mb-2">Download Presentation</h3>
                    <p className="text-gray-600">
                      Get the complete PowerPoint presentation with detailed data analysis, 
                      model performance, and implementation methodology.
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
                        className="bg-emerald-500 hover:bg-emerald-400 gap-2"
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
                  The RGB Production Line Predictive Analytics system is an end-to-end data science solution designed to forecast key product quality dimensions (thickness, inner/outer diameter) from industrial process parameters. It tackles complex, high-frequency sensor data with mismatched collection intervals, employing robust data cleaning, advanced statistical analysis, and ensemble machine learning models. The system provides accurate predictions and quantile-based uncertainty intervals, empowering engineers to anticipate quality issues, optimize process parameters, and move from reactive to proactive manufacturing.
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
                  title: 'Automated Data Pipeline',
                  description: 'Ingests and cleans high-frequency data from production equipment, resolving time-alignment challenges'
                },
                {
                  title: 'Advanced Statistical Profiling',
                  description: 'Identifies key drivers and characterizes data structure to guide model selection'
                },
                {
                  title: 'Dual Strategy Data Handling',
                  description: 'Implements two dataset versions to balance data cleanliness with sample size'
                },
                {
                  title: 'Ensemble Machine Learning',
                  description: 'Leverages Random Forest and LightGBM Quantile Regression for robust predictions'
                },
                {
                  title: 'Feature Importance Analysis',
                  description: 'Quantifies the impact of each process parameter on final product quality'
                },
                {
                  title: 'Predictive Performance Monitoring',
                  description: 'Tracks model accuracy and evaluates prediction interval coverage'
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
                          <CheckCircle2 style={{color: '#10b981'}} size={24} />
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
                    { category: 'Data Processing & Analysis', tech: 'Pandas, NumPy for data manipulation and analysis' },
                    { category: 'Machine Learning', tech: 'Scikit-learn (Random Forest), LightGBM (Quantile Regression)' },
                    { category: 'Statistical Analysis', tech: 'SciPy (Pearson/Spearman Correlation, Descriptive Statistics)' },
                    { category: 'Data Visualization', tech: 'Matplotlib, Seaborn for correlation heatmaps and distribution plots' },
                    { category: 'Methodology', tech: 'Train-Test Split (70/30), Z-score/IQR Outlier Detection' },
                    { category: 'Deployment', tech: 'Kernel Density Estimation, Predictive Interval Analysis' }
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
                  title: 'Industrial Data Wrangling',
                  description: 'Cleans and merges multi-source time-series data with timestamp alignment'
                },
                {
                  title: 'Correlation & Relationship Mapping',
                  description: 'Employs Pearson and Spearman correlation for linear/non-linear relationships'
                },
                {
                  title: 'Outlier Detection & Analysis',
                  description: 'Uses multiple methods to identify anomalies from measurement errors'
                },
                {
                  title: 'Predictive Quality Modeling',
                  description: 'Generates precise forecasts and quantile predictions for specification limits'
                },
                {
                  title: 'Actionable Insight Generation',
                  description: 'Delivers findings on data limitations with improvement recommendations'
                },
                {
                  title: 'Real-time Process Control',
                  description: 'Enables proactive manufacturing through predictive quality assessment'
                }
              ].map((func, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow border-l-4" style={{borderLeftColor: '#10b981'}}>
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
              or discuss similar data science and predictive maintenance solutions for your organization.
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
