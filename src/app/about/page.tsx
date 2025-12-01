import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Paddy - Professional Influencer & Content Creator',
  description: 'Learn more about Paddy - professional content creator, influencer, and brand collaborator. Detailed profile, body measurements, and background information.',
}

export default function AboutPage() {
  return (
    <main>
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gradient">About</span>
                  <span className="block text-white">Paddy</span>
                </h1>
                <p className="text-lg md:text-xl text-white/80 max-w-lg mx-auto lg:mx-0">
                  Professional content creator, brand influencer, and creative storyteller
                  passionate about crafting authentic and engaging digital experiences.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-gradient">2M+</div>
                    <div className="text-sm text-white/60">Followers</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-gradient">500+</div>
                    <div className="text-sm text-white/60">Campaigns</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-gradient">50+</div>
                    <div className="text-sm text-white/60">Brands</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-gradient">15M+</div>
                    <div className="text-sm text-white/60">Impressions</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8">
                  <a href="/contact" className="btn-primary">
                    Get in Touch
                  </a>
                  <a href="/portfolio" className="btn-secondary">
                    View Work
                  </a>
                </div>
              </div>

              {/* Right Content - Hero Image */}
              <div className="relative">
                <div className="relative mx-auto w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  {/* Placeholder for about hero image */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="text-6xl">👤</div>
                      <p className="text-white/60">Professional Photo</p>
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

        {/* Profile Section */}
        <section className="section-padding bg-surface">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="text-gradient">Profile</span>
                </h2>
                <div className="space-y-4 text-white/80">
                  <p>
                    With over 2 million followers across social media platforms, I've established
                    myself as a trusted voice in lifestyle, fashion, and brand storytelling.
                    My approach combines authentic content creation with strategic brand partnerships.
                  </p>
                  <p>
                    Based in [Location], I work with global brands to create compelling narratives
                    that resonate with diverse audiences. My expertise spans photography, videography,
                    social media strategy, and brand development.
                  </p>
                  <p>
                    I believe in the power of authentic storytelling and building genuine connections
                    between brands and their target audiences through creative, relatable content.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">👤</div>
                    <p className="text-white/60">Professional Photo</p>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-3xl border-2 border-primary/20" />
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl opacity-50" />
              </div>
            </div>
          </div>
        </section>

        {/* Body Measurements Section */}
        <section className="section-padding">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="text-gradient">Physical Profile</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Basic Measurements Card */}
                <div className="card p-6 md:p-8">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-2">📏</div>
                    <h3 className="text-xl font-semibold text-white mb-2">Basic Measurements</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Height</span>
                      <span className="text-white font-medium">[Height]</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Weight</span>
                      <span className="text-white font-medium">[Weight]</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Chest</span>
                      <span className="text-white font-medium">[Chest Size]</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Waist</span>
                      <span className="text-white font-medium">[Waist Size]</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Hips</span>
                      <span className="text-white font-medium">[Hip Size]</span>
                    </div>
                  </div>
                </div>

                {/* Detailed Profile Card */}
                <div className="card p-6 md:p-8">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-2">🎭</div>
                    <h3 className="text-xl font-semibold text-white mb-2">Detailed Profile</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Hair Color</span>
                      <span className="text-white font-medium">[Hair Color]</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Eye Color</span>
                      <span className="text-white font-medium">[Eye Color]</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Skin Tone</span>
                      <span className="text-white font-medium">[Skin Tone]</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Shoe Size</span>
                      <span className="text-white font-medium">[Shoe Size]</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Body Type</span>
                      <span className="text-white font-medium">[Body Type]</span>
                    </div>
                  </div>
                </div>

                {/* Poster/Professional Info Card */}
                <div className="card p-6 md:p-8">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-2">📸</div>
                    <h3 className="text-xl font-semibold text-white mb-2">Professional Info</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Experience</span>
                      <span className="text-white font-medium">[Years]</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Specialties</span>
                      <span className="text-white font-medium">[Fields]</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Languages</span>
                      <span className="text-white font-medium">[Languages]</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Available</span>
                      <span className="text-white font-medium">[Status]</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Location</span>
                      <span className="text-white font-medium">[Location]</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side Views Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-white mb-8 text-center">Profile Views</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                      <div className="text-center space-y-2">
                        <div className="text-4xl">⬅️</div>
                        <p className="text-white/60 text-sm">Left Side Profile</p>
                      </div>
                    </div>
                    <p className="text-white/60 text-sm">Left Profile View</p>
                  </div>
                  <div className="text-center">
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                      <div className="text-center space-y-2">
                        <div className="text-4xl">👤</div>
                        <p className="text-white/60 text-sm">Front View</p>
                      </div>
                    </div>
                    <p className="text-white/60 text-sm">Front Profile View</p>
                  </div>
                  <div className="text-center">
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                      <div className="text-center space-y-2">
                        <div className="text-4xl">➡️</div>
                        <p className="text-white/60 text-sm">Right Side Profile</p>
                      </div>
                    </div>
                    <p className="text-white/60 text-sm">Right Profile View</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="section-padding bg-surface">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient">Achievements</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">2M+</div>
                  <div className="text-sm text-white/60">Social Media Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">500+</div>
                  <div className="text-sm text-white/60">Brand Campaigns</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">50+</div>
                  <div className="text-sm text-white/60">Brand Partnerships</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">15M+</div>
                  <div className="text-sm text-white/60">Content Impressions</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}