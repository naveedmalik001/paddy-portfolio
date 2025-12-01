import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PortfolioGrid from '@/components/PortfolioGrid'
import VideoSlider from '@/components/VideoSlider'

export const metadata: Metadata = {
  title: 'Portfolio - Paddy | Professional Content Creator & Influencer',
  description: 'Explore our portfolio of brand collaborations, creative projects, and successful campaigns. Photography, videography, and social media content.',
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-gradient">Portfolio</span>
                <span className="block text-white">Selected Work</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                A curated collection of my finest work, showcasing brand collaborations,
                creative projects, and content that has made an impact.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <PortfolioGrid />

        {/* Video Content Section */}
        <section className="section-padding bg-surface">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="text-gradient">Video Gallery</span>
              </h2>
              <VideoSlider />
            </div>
          </div>
        </section>

        {/* Featured Campaigns Section */}
        <section className="section-padding">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="text-gradient">Featured Campaigns</span>
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Campaign 1 */}
                <div className="card overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-xl flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="text-4xl">📷</div>
                      <p className="text-white/60">Campaign Preview</p>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-semibold text-white mb-2">Luxury Fashion Brand</h3>
                    <p className="text-white/60 mb-4">
                      Collaborated with a luxury fashion brand for their seasonal campaign,
                      creating lifestyle content that resonated with their target demographic.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Fashion</span>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Lifestyle</span>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Photography</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/40 text-sm">2.5M Impressions</span>
                      <button className="text-primary hover:text-primary/80 transition-colors">
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>

                {/* Campaign 2 */}
                <div className="card overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-xl flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="text-4xl">🎬</div>
                      <p className="text-white/60">Campaign Preview</p>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-semibold text-white mb-2">Tech Product Launch</h3>
                    <p className="text-white/60 mb-4">
                      Partnered with a leading tech company for their product launch,
                      creating engaging video content and social media campaigns.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Technology</span>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Video</span>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Launch</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/40 text-sm">5.2M Impressions</span>
                      <button className="text-primary hover:text-primary/80 transition-colors">
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>

                {/* Campaign 3 */}
                <div className="card overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-xl flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="text-4xl">✈️</div>
                      <p className="text-white/60">Campaign Preview</p>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-semibold text-white mb-2">Travel & Tourism</h3>
                    <p className="text-white/60 mb-4">
                      Created authentic travel content for tourism boards, showcasing destinations
                      through engaging storytelling and visual content.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Travel</span>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Tourism</span>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Content</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/40 text-sm">3.8M Impressions</span>
                      <button className="text-primary hover:text-primary/80 transition-colors">
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>

                {/* Campaign 4 */}
                <div className="card overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-xl flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="text-4xl">🍔</div>
                      <p className="text-white/60">Campaign Preview</p>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-semibold text-white mb-2">Food & Beverage Brand</h3>
                    <p className="text-white/60 mb-4">
                      Collaborated with a food and beverage brand for their marketing campaign,
                      creating authentic content that highlighted their products.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Food</span>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Lifestyle</span>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Brand</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/40 text-sm">4.1M Impressions</span>
                      <button className="text-primary hover:text-primary/80 transition-colors">
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="section-padding bg-surface">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="text-gradient">Portfolio Statistics</span>
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">500+</div>
                  <div className="text-sm text-white/60">Completed Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">50+</div>
                  <div className="text-sm text-white/60">Brand Partnerships</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">15M+</div>
                  <div className="text-sm text-white/60">Total Impressions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">98%</div>
                  <div className="text-sm text-white/60">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="text-gradient">Client Testimonials</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="card p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-primary">A</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Alex Chen</h4>
                      <p className="text-white/60 text-sm">Marketing Director, TechCorp</p>
                    </div>
                  </div>
                  <p className="text-white/80">
                    "Working with Paddy was exceptional. Their creative vision and professional execution
                    exceeded our expectations. The campaign delivered outstanding results."
                  </p>
                </div>

                <div className="card p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-primary">S</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Sarah Johnson</h4>
                      <p className="text-white/60 text-sm">Brand Manager, Fashion House</p>
                    </div>
                  </div>
                  <p className="text-white/80">
                    "Paddy brought our brand to life with authentic content that resonated perfectly
                    with our target audience. The collaboration was seamless and the results speak for themselves."
                  </p>
                </div>

                <div className="card p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-primary">M</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Mike Williams</h4>
                      <p className="text-white/60 text-sm">CEO, Lifestyle Brands Inc.</p>
                    </div>
                  </div>
                  <p className="text-white/80">
                    "The content Paddy created helped us reach new audiences and significantly boost
                    our brand engagement. Highly recommended for any brand looking to make an impact."
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