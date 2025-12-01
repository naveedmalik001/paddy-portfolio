'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  const handleEnquirySuccess = (ticketId: string) => {
    console.log('Enquiry submitted successfully with ticket ID:', ticketId)
    // You could add additional success handling here
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-gradient">Let's</span>
                <span className="block text-white">Connect</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                Ready to collaborate? I'm excited to hear about your project and discuss
                how we can create something amazing together.
              </p>
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
                <span className="text-gradient">Get in Touch</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="card p-6 text-center">
                  <div className="text-3xl mb-4">📧</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-white/60 text-sm">
                    For business inquiries and collaboration proposals
                  </p>
                  <a href="mailto:contact@paddy.com" className="text-primary hover:text-primary/80 transition-colors mt-2 inline-block">
                    contact@paddy.com
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
                    Based in [City], available for travel and remote collaborations
                  </p>
                  <p className="text-primary mt-2">
                    [City, Country]
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
                <span className="text-gradient">Collaboration Types</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-4">Brand Partnerships</h3>
                  <ul className="space-y-2 text-white/60">
                    <li>• Sponsored content campaigns</li>
                    <li>• Product collaborations</li>
                    <li>• Brand ambassadorships</li>
                    <li>• Event appearances</li>
                  </ul>
                </div>

                <div className="border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-4">Content Creation</h3>
                  <ul className="space-y-2 text-white/60">
                    <li>• Photography services</li>
                    <li>• Videography projects</li>
                    <li>• Social media content</li>
                    <li>• Creative consulting</li>
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
      <Footer />
    </div>
  )
}