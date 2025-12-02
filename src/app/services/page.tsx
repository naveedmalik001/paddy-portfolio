import { Metadata } from 'next'
import ServicesGrid from '@/components/ServicesGrid'

export const metadata: Metadata = {
  title: 'Services - Paddy Chougule | Professional Body Double & Stunt Artist',
  description: 'Professional body double services including athlete representation, stunt coordination, movement replication, and production support for sports commercials and digital campaigns.',
}

export default function ServicesPage() {
  return (
    <main>
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gradient">Body Double</span>
                  <span className="block text-white">Services</span>
                </h1>
                <p className="text-lg md:text-xl text-white/80 max-w-lg mx-auto lg:mx-0">
                  Professional body double and stunt artist services specializing in athlete representation
                  for Hardik Pandya & Jasprit Bumrah. Available for commercials, sports shoots, and digital campaigns.
                </p>

                {/* Service Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-gradient">6</div>
                    <div className="text-sm text-white/60">Services</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-gradient">24/7</div>
                    <div className="text-sm text-white/60">Availability</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-gradient">100%</div>
                    <div className="text-sm text-white/60">Professional</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-gradient">2025</div>
                    <div className="text-sm text-white/60">Booking Open</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8">
                  <a href="/contact" className="btn-primary">
                    Book Body Double Services
                  </a>
                  <a href="/portfolio" className="btn-secondary">
                    View Projects
                  </a>
                </div>
              </div>

              {/* Right Content - Services Visual */}
              <div className="relative">
                <div className="relative mx-auto w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  {/* Placeholder for services visual */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="text-6xl">🎭</div>
                      <p className="text-white/60">Body Double Professional</p>
                    </div>
                  </div>

                  {/* Decorative ring */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-primary/20" />

                  {/* Glow effect */}
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl opacity-50" />
                </div>

                {/* Floating elements */}
                <div className="absolute top-10 -right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <ServicesGrid />

        {/* Detailed Services Section */}
        <section className="section-padding bg-surface">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="text-gradient">Body Double Services</span>
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Body Double Performance */}
                <div className="card p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-4">🎭</div>
                    <h3 className="text-2xl font-semibold text-white">Body Double Performance</h3>
                  </div>
                  <div className="space-y-4 text-white/80">
                    <p>
                      Professional body double services with precise posture matching and movement replication
                      for premier cricket athletes. Perfect for commercials, sports shoots, and digital campaigns.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Precise Posture & Body Matching</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Athletic Movement Replication</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Cricket Action Sequences</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Professional Continuity</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Stunt Coordination Services */}
                <div className="card p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-4">🏃</div>
                    <h3 className="text-2xl font-semibold text-white">Stunt Coordination</h3>
                  </div>
                  <div className="space-y-4 text-white/80">
                    <p>
                      Professional stunt coordination and athletic movement execution for sports commercials,
                      action sequences, and promotional campaigns. Safe and reliable performance.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Athletic Stunt Performance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Safe Movement Coordination</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Technical Cricket Actions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Production Safety Standards</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Production Support */}
                <div className="card p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-4">🎬</div>
                    <h3 className="text-2xl font-semibold text-white">Production Support</h3>
                  </div>
                  <div className="space-y-4 text-white/80">
                    <p>
                      Complete pre-production and on-set support for sports commercials
                      and digital campaigns. Expert assistance with lighting, camera setup,
                      and technical requirements.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Lighting & Camera Setup</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Shadow Alignment Tests</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Posture Matching</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Technical Coordination</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Influencer Marketing */}
                <div className="card p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-4">🎯</div>
                    <h3 className="text-2xl font-semibold text-white">Influencer Marketing</h3>
                  </div>
                  <div className="space-y-4 text-white/80">
                    <p>
                      Leverage our influence and network to amplify your brand message.
                      We create targeted campaigns that reach the right audience at the right time.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Influencer Campaign Strategy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Cross-Platform Campaign Management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Audience Targeting & Segmentation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>ROI Tracking & Analytics</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient">Body Double Process</span>
              </h2>
              <p className="text-lg text-white/80">
                Professional body double engagement process ensuring seamless integration with production teams and authentic athletic representation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Project Assessment</h3>
                <p className="text-white/60 text-sm">
                  Detailed analysis of body double requirements and athletic movement specifications
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Physical Matching</h3>
                <p className="text-white/60 text-sm">
                  Posture analysis, body type matching, and movement capability assessment
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Technical Preparation</h3>
                <p className="text-white/60 text-sm">
                  Movement rehearsal, camera positioning coordination, and lighting test participation
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">On-Set Performance</h3>
                <p className="text-white/60 text-sm">
                  Professional body double execution with precise movement replication and technical accuracy
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-surface">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient">Ready to Book Body Double Services?</span>
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Let's discuss how my professional body double services can enhance your commercial production
                with authentic athletic movement and seamless continuity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn-primary inline-block">
                  Book Services
                </a>
                <a href="/contact" className="btn-secondary inline-block">
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}