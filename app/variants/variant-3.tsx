"use client";

import { useState } from 'react';
import { JetBrains_Mono, Inter } from 'next/font/google';
import Script from 'next/script';

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function TablingosLanding() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white ${inter.className}`}>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
      
      {/* Diagonal overlay pattern */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-blue-500/20" />
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(-45deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className={`text-2xl font-bold ${jetbrainsMono.className} text-red-400`}>
            Tablingos
          </div>
          <button
            onClick={() => setShowCalendly(true)}
            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
          >
            call
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className={`text-5xl md:text-7xl font-bold leading-tight ${jetbrainsMono.className}`}>
                  <span className="block transform -skew-x-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    DATA
                  </span>
                  <span className="block transform skew-x-6 text-red-400 ml-8">
                    UNLEASHED
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  Effortlessly harness the power of your data with our streamlined onboarding platform. No more data struggles, just seamless collection, validation, and transformation.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowCalendly(true)}
                  className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-red-500/30"
                >
                  call
                </button>
                <div className={`px-8 py-4 border border-gray-600 rounded-lg ${jetbrainsMono.className} text-gray-400`}>
                  $ tablingos --transform
                </div>
              </div>
            </div>
            
            {/* Cinematic code preview */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 blur-3xl" />
              <div className="relative bg-black/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className={`ml-4 text-gray-400 text-sm ${jetbrainsMono.className}`}>data-transform.js</span>
                </div>
                <div className={`${jetbrainsMono.className} text-sm space-y-2`}>
                  <div className="text-blue-400">const <span className="text-white">pipeline</span> = <span className="text-yellow-400">tablingos</span>.<span className="text-green-400">create</span>({</div>
                  <div className="ml-4 text-gray-300">source: <span className="text-orange-400">'billing-data.csv'</span>,</div>
                  <div className="ml-4 text-gray-300">validate: <span className="text-purple-400">schemas</span>.<span className="text-green-400">billing</span>,</div>
                  <div className="ml-4 text-gray-300">transform: <span className="text-red-400">[</span></div>
                  <div className="ml-8 text-gray-300"><span className="text-yellow-400">'normalize'</span>,</div>
                  <div className="ml-8 text-gray-300"><span className="text-yellow-400">'deduplicate'</span>,</div>
                  <div className="ml-8 text-gray-300"><span className="text-yellow-400">'enrich'</span></div>
                  <div className="ml-4 text-red-400">]</div>
                  <div className="text-blue-400">});</div>
                  <div className="mt-4 text-green-400">// ✓ 10,000 records processed in 2.3s</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${jetbrainsMono.className} transform -skew-x-3`}>
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                PLATFORM CAPABILITIES
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cut out importer development time with our no-code/low-code platform and automate data ETL for everything from billing data to EEG data.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-black/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-red-500/50 transition-all duration-300">
                <div className={`text-red-400 text-2xl mb-4 ${jetbrainsMono.className}`}>01</div>
                <h3 className="text-2xl font-bold mb-4">Data Collection</h3>
                <p className="text-gray-300 leading-relaxed">
                  Seamless ingestion from any source with intelligent validation and error handling.
                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-black/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                <div className={`text-blue-400 text-2xl mb-4 ${jetbrainsMono.className}`}>02</div>
                <h3 className="text-2xl font-bold mb-4">Transformation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Define data structure through intuitive UI with powerful transformation capabilities.
                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-black/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-green-500/50 transition-all duration-300">
                <div className={`text-green-400 text-2xl mb-4 ${jetbrainsMono.className}`}>03</div>
                <h3 className="text-2xl font-bold mb-4">Automation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Automated ETL pipelines that scale with your data needs and business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Demo Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className={`text-4xl md:text-5xl font-bold ${jetbrainsMono.className}`}>
                <span className="block text-white">FLEXIBLE</span>
                <span className="block text-red-400 transform skew-x-3">SOLUTIONS</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                With our flexible solutions, the sky is the limit. Let your data work for you, not against you.
              </p>
              <button
                onClick={() => setShowCalendly(true)}
                className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-red-500/30"
              >
                call
              </button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-blue-500/10 to-green-500/10 blur-2xl" />
              <div className="relative space-y-4">
                <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
                  <div className={`${jetbrainsMono.className} text-sm`}>
                    <span className="text-green-400">✓</span> <span className="text-gray-300">Billing Data:</span> <span className="text-blue-400">10M records/hour</span>
                  </div>
                </div>
                <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
                  <div className={`${jetbrainsMono.className} text-sm`}>
                    <span className="text-green-400">✓</span> <span className="text-gray-300">EEG Data:</span> <span className="text-purple-400">Real-time streaming</span>
                  </div>
                </div>
                <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
                  <div className={`${jetbrainsMono.className} text-sm`}>
                    <span className="text-green-400">✓</span> <span className="text-gray-300">Custom Formats:</span> <span className="text-orange-400">Any structure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-4xl h-[80vh] relative">
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 z-10 bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              ×
            </button>
            <div 
              className="calendly-inline-widget w-full h-full rounded-xl"
              data-url="https://calendly.com/ibrahim-ansari4161/new-meeting"
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className={`text-2xl font-bold ${jetbrainsMono.className} text-red-400`}>
              Tablingos
            </div>
            <div className="flex gap-6">
              <a 
                href="https://x.com/ibrahimansr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a 
                href="https://www.friedmann.ai/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}