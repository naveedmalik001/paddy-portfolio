import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServicesGrid from '@/components/ServicesGrid'

export const metadata: Metadata = {
  title: 'Services - Paddy | Professional Content Creator & Influencer',
  description: 'Explore our comprehensive range of services including brand collaborations, content creation, social media strategy, and influencer marketing.',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-gradient">Services</span>
                <span className="block text-white">Offered</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                Comprehensive content creation and brand collaboration services designed
                to elevate your brand presence and connect with your target audience authentically.
              </p>
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
                <span className="text-gradient">Service Details</span>
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Content Creation Services */}
                <div className="card p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-4">📸</div>
                    <h3 className="text-2xl font-semibold text-white">Content Creation</h3>
                  </div>
                  <div className="space-y-4 text-white/80">
                    <p>
                      Professional photography and videography services tailored to your brand's
                      unique voice and aesthetic. From product shoots to lifestyle content,
                      we create visually compelling narratives.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Product Photography & Videography</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Lifestyle & Editorial Content</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Behind-the-scenes Content</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Professional Photo & Video Editing</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Social Media Management */}
                <div className="card p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-4">📱</div>
                    <h3 className="text-2xl font-semibold text-white">Social Media Strategy</h3>
                  </div>
                  <div className="space-y-4 text-white/80">
                    <p>
                      Strategic social media management to grow your online presence,
                      engage with your audience, and build brand loyalty through consistent,
                      authentic content.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Content Calendar Development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Audience Growth Strategies</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Engagement & Community Management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Analytics & Performance Reporting</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Brand Collaborations */}
                <div className="card p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-4">🤝</div>
                    <h3 className="text-2xl font-semibold text-white">Brand Collaborations</h3>
                  </div>
                  <div className="space-y-4 text-white/80">
                    <p>
                      Authentic brand partnerships that resonate with our engaged audience.
                      We work closely with brands to create meaningful connections and
                      drive measurable results.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Sponsored Content Campaigns</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Product Seeding & Reviews</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Brand Ambassadorships</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Event Appearances & Hosting</span>
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
                <span className="text-gradient">Our Process</span>
              </h2>
              <p className="text-lg text-white/80">
                A streamlined approach to ensure successful collaborations and outstanding results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Discovery</h3>
                <p className="text-white/60 text-sm">
                  Understanding your brand, goals, and target audience to create a tailored strategy
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Strategy</h3>
                <p className="text-white/60 text-sm">
                  Developing a comprehensive content and collaboration strategy that aligns with your objectives
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Creation</h3>
                <p className="text-white/60 text-sm">
                  Producing high-quality, authentic content that resonates with your audience
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Analysis</h3>
                <p className="text-white/60 text-sm">
                  Measuring performance and optimizing future campaigns based on data-driven insights
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
                <span className="text-gradient">Ready to Collaborate?</span>
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help elevate your brand and connect with your target audience authentically.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn-primary inline-block">
                  Get Started
                </a>
                <a href="/contact" className="btn-secondary inline-block">
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}