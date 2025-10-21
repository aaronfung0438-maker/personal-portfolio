import React from 'react';
import { Download, GraduationCap } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}CV_Aaron Fung.pdf`;
    link.download = 'CV_Aaron_Fung.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const education = [
    {
      degree: 'Bachelor of Engineering in Industrial Engineering and Engineering Management',
      institution: 'The Hong Kong University of Science and Technology (HKUST)',
      year: '2023 - Present',
      description: 'Focus on process optimization, data analysis, and automation systems',
    },
  ];


  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-16">Resume</h2>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Button onClick={handleDownload} size="lg" className="gap-2">
              <Download size={20} />
              Download Resume
            </Button>
          </div>

          <div className="space-y-8">
            {/* Education */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="text-blue-600" size={32} />
                  <h3 className="text-2xl">Education</h3>
                </div>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-blue-600 pl-4">
                      <h4 className="text-xl mb-1">{edu.degree}</h4>
                      <p className="text-gray-600 mb-1">{edu.institution}</p>
                      <p className="text-sm text-gray-500 mb-2">{edu.year}</p>
                      <p className="text-gray-600">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Resume Summary */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl mb-4">Professional Summary</h3>
                <p className="text-gray-600 leading-relaxed">
                  Industrial Engineering and Engineering Management student at HKUST with hands-on experience in 
                  automation systems, data analysis, and process optimization. Proven track record in developing 
                  automated compliance systems, AI research, and STEM education. Strong analytical skills with 
                  expertise in Python, SQL, Power Platform, and data visualization tools. Passionate about 
                  leveraging technology to drive operational efficiency and data-driven decision making.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
