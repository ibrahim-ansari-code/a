"use client";

import { useState } from 'react';
import { JetBrains_Mono, Inter } from 'next/font/google';
import Script from 'next/script';

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function Tablingos() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className={`min-h-screen bg-gray-900 text-white ${inter.className}`}>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
      
      {/* Grid overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-4 md:px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className={`text-2xl font-bold text-green-400 ${jetbrainsMono.className}`}>
            tablingos<span className="text-white animate-pulse">_</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className={`text-sm text-gray-400 ${jetbrainsMono.className}`}>
              v2.1.3
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`text-sm text-green-400 mb-4 ${jetbrainsMono.className}`}>
                $ ./data-transform --init
              </div>
              <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${jetbrainsMono.className}`}>
                DATA.<span className="text-green-400">TRANSFORM</span>()<br/>
                <span className="text-gray-400">//</span> NO MORE STRUGGLES
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Effortlessly harness the power of your data with our streamlined onboarding platform. 
                Seamless collection, validation, and transformation through an intuitive interface.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  type="button"
                  onClick={() => setShowCalendly(true)}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-200 border border-red-500 hover:shadow-lg hover:shadow-red-500/25"
                >
                  SCHEDULE DEMO
                </button>
                <div className={`flex items-center text-gray-400 ${jetbrainsMono.className}`}>
                  <span className="text-green-400 mr-2">></span>
                  No setup required
                </div>
              </div>
            </div>
            
            {/* Code Preview */}
            <div className="relative">
              <div className="bg-black/50 border border-gray-700 rounded-lg overflow-hidden">
                <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                  <div className={`text-sm text-gray-300 ${jetbrainsMono.className}`}>
                    data-pipeline.js
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className={`p-6 text-sm ${jetbrainsMono.className}`}>
                  <div className="space-y-2">
                    <div><span className="text-purple-400">import</span> <span className="text-blue-400">{ transform }</span> <span className="text-purple-400">from</span> <span className="text-green-400">'tablingos'</span>;</div>
                    <div className="text-gray-500">// Define your data structure</div>
                    <div><span className="text-blue-400">const</span> <span className="text-yellow-400">schema</span> = {</div>
                    <div className="ml-4"><span className="text-red-400">billing_data</span>: <span className="text-green-400">'currency'</span>,</div>
                    <div className="ml-4"><span className="text-red-400">user_metrics</span>: <span className="text-green-400">'analytics'</span>,</div>
                    <div className="ml-4"><span className="text-red-400">eeg_signals</span>: <span className="text-green-400">'timeseries'</span></div>
                    <div>};</div>
                    <div className="text-gray-500">// Transform automatically</div>
                    <div><span className="text-yellow-400">transform</span>(<span className="text-blue-400">rawData</span>, <span className="text-blue-400">schema</span>);</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-400 text-black px-3 py-1 text-xs font-bold">
                LIVE PREVIEW
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-4 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 ${jetbrainsMono.className}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-400">//</span> PLATFORM.CAPABILITIES
            </h2>
            <p className="text-gray-400 text-lg">Cut out importer development time with our no-code/low-code platform</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 border border-gray-700 p-6 hover:border-green-400/50 transition-all duration-300">
              <div className={`text-green-400 text-xl mb-4 ${jetbrainsMono.className}`}>
                [DATA_COLLECTION]
              </div>
              <h3 className="text-xl font-bold mb-3">Seamless Collection</h3>
              <p className="text-gray-300">Intuitive UI for defining data structure and transformation rules. No more manual data wrangling.</p>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 p-6 hover:border-green-400/50 transition-all duration-300">
              <div className={`text-green-400 text-xl mb-4 ${jetbrainsMono.className}`}>
                [VALIDATION_ENGINE]
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Validation</h3>
              <p className="text-gray-300">Automated validation ensures data quality and consistency across all your transformation pipelines.</p>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 p-6 hover:border-green-400/50 transition-all duration-300">
              <div className={`text-green-400 text-xl mb-4 ${jetbrainsMono.className}`}>
                [ETL_AUTOMATION]
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible ETL</h3>
              <p className="text-gray-300">From billing data to EEG signals - automate any data transformation use case with our flexible platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="relative z-10 px-4 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-12 ${jetbrainsMono.className}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-400">$</span> USE_CASES <span className="text-green-400">--all</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-black/30 border-l-4 border-red-500 p-6">
                <div className={`text-red-400 text-sm mb-2 ${jetbrainsMono.className}`}>
                  BILLING_DATA.transform()
                </div>
                <h3 className="text-xl font-bold mb-2">Financial Data Processing</h3>
                <p className="text-gray-300">Transform complex billing data, revenue metrics, and financial reports with automated validation and formatting.</p>
              </div>
              
              <div className="bg-black/30 border-l-4 border-blue-500 p-6">
                <div className={`text-blue-400 text-sm mb-2 ${jetbrainsMono.className}`}>
                  EEG_SIGNALS.process()
                </div>
                <h3 className="text-xl font-bold mb-2">Scientific Data Analysis</h3>
                <p className="text-gray-300">Handle complex scientific datasets including EEG signals, sensor data, and research metrics with precision.</p>
              </div>
            </div>
            
            <div className="bg-gray-800/30 border border-gray-700 p-8">
              <div className={`text-green-400 mb-4 ${jetbrainsMono.className}`}>
                > tablingos.status
              </div>
              <div className={`space-y-2 text-sm ${jetbrainsMono.className}`}>
                <div className="flex justify-between">
                  <span className="text-gray-400">Data Sources Connected:</span>
                  <span className="text-white">847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Transformations/Hour:</span>
                  <span className="text-white">12.4K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Validation Accuracy:</span>
                  <span className="text-green-400">99.7%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Uptime:</span>
                  <span className="text-green-400">99.99%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-4 md:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`text-green-400 mb-4 ${jetbrainsMono.className}`}>
            $ ./start-transformation --now
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${jetbrainsMono.className}`}>
            LET YOUR DATA<br/>
            <span className="text-green-400">WORK FOR YOU</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            With our flexible solutions, the sky is the limit. No more data struggles, just seamless transformation.
          </p>
          <button 
            type="button"
            onClick={() => setShowCalendly(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-xl font-bold transition-all duration-200 border border-red-500 hover:shadow-xl hover:shadow-red-500/30"
          >
            START YOUR TRANSFORMATION
          </button>
        </div>
      </section>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl h-[600px] relative">
            <button 
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
            <div 
              className="calendly-inline-widget w-full h-full"
              data-url="https://calendly.com/ibrahim-ansari4161/new-meeting"
            ></div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 px-4 md:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className={`text-2xl font-bold text-green-400 mb-4 md:mb-0 ${jetbrainsMono.className}`}>
              tablingos<span className="text-white">_</span>
            </div>
            <div className="flex items-center space-x-6">
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
          <div className={`mt-8 text-center text-gray-500 text-sm ${jetbrainsMono.className}`}>
            © 2024 Tablingos. All systems operational.
          </div>
        </div>
      </footer>
    </div>
  );
}
