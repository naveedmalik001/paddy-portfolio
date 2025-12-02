'use client'

import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'


export default function ContactPage() {
  const handleEnquirySuccess = (ticketId: string) => {
    console.log('Enquiry submitted successfully with ticket ID:', ticketId)
    // You could add additional success handling here
  }

  return (
    <main>
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gradient">Book</span>
                  <span className="block text-white">Body Double Services</span>
                </h1>
                <p className="text-lg md:text-xl text-white/80 max-w-lg mx-auto lg:mx-0">
                  Available for professional body double and stunt artist services for your commercial productions,
                  sports campaigns, and digital media projects with Hardik Pandya & Jasprit Bumrah expertise.
                </p>

                {/* Contact Stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-gradient">24h</div>
                    <div className="text-sm text-white/60">Response Time</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-gradient">100%</div>
                    <div className="text-sm text-white/60">Professional</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-gradient">50+</div>
                    <div className="text-sm text-white/60">Projects Completed</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8">
                  <a href="/portfolio" className="btn-primary">
                    View Projects
                  </a>
                  <a href="/services" className="btn-secondary">
                    Body Double Services
                  </a>
                </div>
              </div>

              {/* Right Content - Contact Visual */}
              <div className="relative">
                <div className="relative mx-auto w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  {/* Placeholder for contact visual */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="text-6xl">🎭</div>
                      <p className="text-white/60">Paddy Chougule<br/>Body Double Professional</p>
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

        {/* Contact Form Section */}
        <section className="section-padding">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <ContactForm onSuccess={handleEnquirySuccess} />
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="section-padding bg-surface">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="text-gradient">Contact Information</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="card p-6 text-center">
                  <div className="text-3xl mb-4">📧</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-white/60 text-sm">
                    For body double services and collaboration inquiries
                  </p>
                  <a href="mailto:paddy@bodydouble.com" className="text-primary hover:text-primary/80 transition-colors mt-2 inline-block">
                    paddy@bodydouble.com
                  </a>
                </div>

                <div className="card p-6 text-center">
                  <div className="text-3xl mb-4">📱</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Social Media</h3>
                  <p className="text-white/60 text-sm">
                    Follow along for daily content and updates
                  </p>
                  <div className="flex justify-center space-x-3 mt-3">
                    <a href="#" className="text-white/60 hover:text-white transition-colors">
                      Instagram
                    </a>
                    <a href="#" className="text-white/60 hover:text-white transition-colors">
                      Twitter
                    </a>
                    <a href="#" className="text-white/60 hover:text-white transition-colors">
                      YouTube
                    </a>
                  </div>
                </div>

                <div className="card p-6 text-center">
                  <div className="text-3xl mb-4">📍</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                  <p className="text-white/60 text-sm">
                    Based in Mumbai, India. Available for domestic & international shoots.
                  </p>
                  <p className="text-primary mt-2">
                    Mumbai, India
                  </p>
                </div>

                <div className="card p-6 text-center">
                  <div className="text-3xl mb-4">⏰</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Response Time</h3>
                  <p className="text-white/60 text-sm">
                    We typically respond within 24-48 hours
                  </p>
                  <p className="text-primary mt-2">
                    Mon-Fri: 9AM-6PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration Types Section */}
        <section className="section-padding">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="text-gradient">Body Double Services</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-4">Athlete Representation</h3>
                  <ul className="space-y-2 text-white/60">
                    <li>• Hardik Pandya body double</li>
                    <li>• Jasprit Bumrah body double</li>
                    <li>• Cricket movement replication</li>
                    <li>• Athletic action sequences</li>
                  </ul>
                </div>

                <div className="border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-4">Production Support</h3>
                  <ul className="space-y-2 text-white/60">
                    <li>• Lighting & camera setup</li>
                    <li>• Shadow alignment tests</li>
                    <li>• Posture matching</li>
                    <li>• Technical coordination</li>
                  </ul>
                </div>

                <div className="border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-4">Speaking & Events</h3>
                  <ul className="space-y-2 text-white/60">
                    <li>• Keynote presentations</li>
                    <li>• Workshop hosting</li>
                    <li>• Panel discussions</li>
                    <li>• Corporate training</li>
                  </ul>
                </div>

                <div className="border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-4">Consulting Services</h3>
                  <ul className="space-y-2 text-white/60">
                    <li>• Social media strategy</li>
                    <li>• Content marketing</li>
                    <li>• Brand development</li>
                    <li>• Influencer marketing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-surface">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="text-gradient">Frequently Asked Questions</span>
              </h2>

              <div className="space-y-6">
                <div className="border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    How quickly can you start a project?
                  </h3>
                  <p className="text-white/60">
                    Depending on the project scope and current workload, I typically start new projects
                    within 1-2 weeks of agreement. Rush projects may be available with adjusted pricing.
                  </p>
                </div>

                <div className="border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    What information do you need for a collaboration inquiry?
                  </h3>
                  <p className="text-white/60">
                    Please include your brand name, project goals, timeline, budget range, and any specific
                    requirements or creative direction you have in mind.
                  </p>
                </div>

                <div className="border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Do you work with international brands?
                  </h3>
                  <p className="text-white/60">
                    Absolutely! I work with brands globally and have experience with international campaigns
                    and cross-cultural content creation.
                  </p>
                </div>

                <div className="border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    What are your rates for collaborations?
                  </h3>
                  <p className="text-white/60">
                    Rates vary based on project scope, deliverables, usage rights, and timeline. Please
                    contact me with your project details for a personalized quote.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}