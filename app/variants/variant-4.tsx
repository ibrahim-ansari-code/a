"use client";

import React, { useState } from 'react';
import { JetBrains_Mono, Inter } from 'next/font/google';
import Script from 'next/script';

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function TablingosLanding() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className={`min-h-screen bg-slate-50 ${inter.className}`}>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
      
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className={`text-2xl font-bold text-slate-900 ${jetbrainsMono.className}`}>
            Tablingos
          </div>
          <button 
            onClick={() => setShowCalendly(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Schedule Demo
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Transform Your Data
                <span className="block text-red-600">Without Code</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Effortlessly harness the power of your data with our streamlined onboarding platform. 
                No more data struggles, just seamless collection, validation, and transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setShowCalendly(true)}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Start Your Project
                </button>
                <div className="px-8 py-4 border border-slate-300 rounded-lg text-slate-600 font-semibold">
                  No-Code Platform
                </div>
              </div>
            </div>
            
            {/* Data Visualization Preview */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`text-lg font-semibold text-slate-900 ${jetbrainsMono.className}`}>
                    Data Pipeline Preview
                  </h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Data Flow Visualization */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-slate-900">Raw Data Input</div>
                      <div className="text-xs text-slate-500">CSV, JSON, XML formats</div>
                    </div>
                    <div className="text-green-600 text-sm font-medium">✓ Connected</div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="w-px h-8 bg-slate-300"></div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-slate-900">Validation & Transform</div>
                      <div className="text-xs text-slate-500">Rules engine processing</div>
                    </div>
                    <div className="text-blue-600 text-sm font-medium">⚡ Processing</div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="w-px h-8 bg-slate-300"></div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-slate-900">Clean Output</div>
                      <div className="text-xs text-slate-500">Ready for your systems</div>
                    </div>
                    <div className="text-green-600 text-sm font-medium">✓ Complete</div>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-slate-900">99.9%</div>
                      <div className="text-xs text-slate-500">Accuracy</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">10x</div>
                      <div className="text-xs text-slate-500">Faster</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">Zero</div>
                      <div className="text-xs text-slate-500">Code</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              From Chaos to <span className="text-red-600">Clarity</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cut out importer development time with our no-code/low-code platform and automate data ETL 
              for everything from billing data to EEG data.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Seamless Collection</h3>
              <p className="text-slate-600">
                Effortlessly gather data from multiple sources with our intuitive interface. 
                No technical expertise required.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Smart Validation</h3>
              <p className="text-slate-600">
                Define how your data should be structured and let our platform handle 
                the validation automatically.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Perfect Transformation</h3>
              <p className="text-slate-600">
                Transform your data into the exact format you need. From billing data 
                to EEG data, we handle it all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="px-4 py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Flexible Solutions for <span className="text-red-600">Every Use Case</span>
            </h2>
            <p className="text-xl text-slate-600">
              With our flexible solutions, the sky is the limit. Let your data work for you, not against you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Billing Data', desc: 'Automate invoice processing and financial data transformation', color: 'blue' },
              { title: 'EEG Data', desc: 'Process complex medical and scientific datasets with precision', color: 'purple' },
              { title: 'Customer Data', desc: 'Clean and structure customer information for CRM systems', color: 'green' },
              { title: 'IoT Sensors', desc: 'Transform sensor data into actionable business insights', color: 'orange' }
            ].map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 bg-${useCase.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <div className={`w-6 h-6 bg-${useCase.color}-600 rounded`}></div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{useCase.title}</h3>
                <p className="text-slate-600 text-sm">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Stop struggling with data imports and start focusing on what matters. 
            Schedule a demo to see how Tablingos can streamline your data workflow.
          </p>
          <button 
            onClick={() => setShowCalendly(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-2"
          >
            Schedule Your Demo
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </section>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-slate-200">
              <h3 className="text-xl font-bold text-slate-900">Schedule Your Demo</h3>
              <button 
                onClick={() => setShowCalendly(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="h-[600px]">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/ibrahim-ansari4161/new-meeting"
                style={{ minWidth: '320px', height: '100%' }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-white px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className={`text-2xl font-bold mb-4 ${jetbrainsMono.className}`}>
                Tablingos
              </div>
              <p className="text-slate-400 mb-6 max-w-md">
                Effortlessly harness the power of your data with our streamlined data onboarding platform. 
                No more data struggles, just seamless transformation.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://x.com/ibrahimansr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Data Collection</li>
                <li>Validation Engine</li>
                <li>Transformation Tools</li>
                <li>API Integration</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="https://www.friedmann.ai/privacy" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>Security</li>
                <li>Support</li>
                <li>Documentation</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 Tablingos. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm mt-4 md:mt-0">
              Transform your data, transform your business.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
