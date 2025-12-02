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
              Featured on <span className="text-gradient">Leading Sports Networks</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Professional body double work featured on major sports broadcasting networks and partnered with premier cricket organizations worldwide.
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

      {/* Media Appearances Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Media Appearances</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Featured guest on major television shows, podcasts, and news channels showcasing body double expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">📺</div>
              <h3 className="text-xl font-semibold text-white mb-2">The Kapil Sharma Show</h3>
              <p className="text-white/60">Special appearances showcasing body double work and entertainment industry insights</p>
            </div>

            <div className="card p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">🎙️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Podcast Features</h3>
              <p className="text-white/60">Featured guest on popular sports and entertainment podcasts discussing body double profession</p>
            </div>

            <div className="card p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">📰</div>
              <h3 className="text-xl font-semibold text-white mb-2">News Channel Coverage</h3>
              <p className="text-white/60">Coverage on leading news channels highlighting unique career and high-profile projects</p>
            </div>
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
              Professional body double portfolio with detailed service information, project portfolio, technical specifications, and collaboration details.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl mb-2">📋</div>
                <h3 className="font-semibold text-white mb-2">Services & Rates</h3>
                <p className="text-white/60 text-sm">Complete body double services list and 2025 fee structure</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-white mb-2">Project Portfolio</h3>
                <p className="text-white/60 text-sm">50+ projects with Hardik Pandya & Jasprit Bumrah campaigns</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📄</div>
                <h3 className="font-semibold text-white mb-2">Technical Specs</h3>
                <p className="text-white/60 text-sm">Physical specifications, movement capabilities, and availability</p>
              </div>
            </div>
            <a
              href="/api/media-kit" // Placeholder for actual media kit
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Download Professional Portfolio
            </a>
          </div>
        </div>
      </section>
    </>
  )
}