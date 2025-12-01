'use client'

import Hero from '@/components/Hero'
import StatsGrid from '@/components/StatsGrid'
import { brands } from '@/data/seed'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsGrid />

      {/* Brands Section */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by <span className="text-gradient">Leading Brands</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Proud to have collaborated with some of the most innovative companies and creative teams worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-20 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="text-white/40 font-medium text-sm text-center">
                  {brand.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit Section */}
      <section id="media-kit" className="section-padding">
        <div className="container">
          <div className="card max-w-4xl mx-auto p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Media Kit</span>
            </h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Get detailed information about my services, portfolio, audience demographics, and collaboration opportunities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl mb-2">📊</div>
                <h3 className="font-semibold text-white mb-2">Audience Insights</h3>
                <p className="text-white/60 text-sm">Demographics, engagement rates, and audience behavior</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💼</div>
                <h3 className="font-semibold text-white mb-2">Services & Rates</h3>
                <p className="text-white/60 text-sm">Comprehensive service list and pricing information</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📈</div>
                <h3 className="font-semibold text-white mb-2">Case Studies</h3>
                <p className="text-white/60 text-sm">Previous campaign results and success stories</p>
              </div>
            </div>
            <a
              href="/api/media-kit" // Placeholder for actual media kit
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Download Media Kit
            </a>
          </div>
        </div>
      </section>
    </>
  )
}