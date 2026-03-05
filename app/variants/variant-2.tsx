"use client";

import { useState } from 'react';
import { JetBrains_Mono, Inter } from 'next/font/google';
import Script from 'next/script';

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function TablingosLanding() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className={`min-h-screen bg-white ${inter.className}`}>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
      
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
          <div className={`text-2xl font-bold text-gray-900 ${jetbrainsMono.className}`}>
            Tablingos
          </div>
          <button
            type="button"
            onClick={() => setShowCalendly(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Schedule Demo
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Effortless Data
                <span className="text-red-600"> Transformation</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Streamlined data onboarding platform that eliminates data struggles through seamless collection, validation, and transformation. No more development overhead.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => setShowCalendly(true)}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Start Your Project
                </button>
                <div className="text-sm text-gray-500 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  No-code/low-code platform
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`text-lg font-semibold text-gray-900 ${jetbrainsMono.className}`}>Data Pipeline</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-blue-600 rounded"></div>
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-blue-600 rounded-full w-full"></div>
                      </div>
                    </div>
                    <span className={`text-sm text-gray-600 ${jetbrainsMono.className}`}>Collect</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-green-600 rounded"></div>
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-green-600 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <span className={`text-sm text-gray-600 ${jetbrainsMono.className}`}>Validate</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-purple-600 rounded"></div>
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-purple-600 rounded-full w-1/2"></div>
                      </div>
                    </div>
                    <span className={`text-sm text-gray-600 ${jetbrainsMono.className}`}>Transform</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Intuitive Data Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Define data structure and transformation through our intuitive UI. Cut development time with flexible, automated ETL solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mb-6 flex items-center justify-center">
                <div className={`text-white font-bold ${jetbrainsMono.className}`}>01</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">No-Code Platform</h3>
              <p className="text-gray-600">
                Eliminate importer development time with our intuitive interface. Define data transformations without writing code.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-600 rounded-lg mb-6 flex items-center justify-center">
                <div className={`text-white font-bold ${jetbrainsMono.className}`}>02</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated ETL</h3>
              <p className="text-gray-600">
                Streamline data extraction, transformation, and loading for any use case—from billing data to EEG data.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-600 rounded-lg mb-6 flex items-center justify-center">
                <div className={`text-white font-bold ${jetbrainsMono.className}`}>03</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Flexible Solutions</h3>
              <p className="text-gray-600">
                Adapt to any data format or structure. Our platform scales with your needs—the sky is the limit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Let Your Data Work
                <span className="text-red-600"> For You</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Transform complex data challenges into streamlined workflows. Our platform handles the technical complexity so you can focus on insights and results.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Seamless data collection and validation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Automated transformation workflows</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Flexible integration capabilities</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowCalendly(true)}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Schedule Your Demo
              </button>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                <div className={`text-sm text-gray-500 mb-4 ${jetbrainsMono.className}`}>Data Transformation Preview</div>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className={`text-xs text-gray-500 mb-2 ${jetbrainsMono.className}`}>INPUT</div>
                    <div className={`text-sm text-gray-800 ${jetbrainsMono.className}`}>raw_data.csv → 1.2M rows</div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-gray-300"></div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className={`text-xs text-blue-600 mb-2 ${jetbrainsMono.className}`}>PROCESSING</div>
                    <div className={`text-sm text-blue-800 ${jetbrainsMono.className}`}>validate → clean → transform</div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-gray-300"></div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className={`text-xs text-green-600 mb-2 ${jetbrainsMono.className}`}>OUTPUT</div>
                    <div className={`text-sm text-green-800 ${jetbrainsMono.className}`}>structured_data.json → ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Data Workflow?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join forward-thinking teams who've eliminated data struggles with our streamlined platform.
          </p>
          <button
            type="button"
            onClick={() => setShowCalendly(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-lg font-semibold text-xl transition-colors"
          >
            Get Started Today
          </button>
        </div>
      </section>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-4xl h-[600px] relative">
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div 
              className="calendly-inline-widget w-full h-full rounded-2xl" 
              data-url="https://calendly.com/ibrahim-ansari4161/new-meeting"
            ></div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className={`text-2xl font-bold text-gray-900 mb-4 md:mb-0 ${jetbrainsMono.className}`}>
              Tablingos
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://x.com/ibrahimansr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Twitter
              </a>
              <a 
                href="https://www.friedmann.ai/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Privacy
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-100 text-center text-gray-500">
            <p>&copy; 2024 Tablingos. Streamlined data transformation platform.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
