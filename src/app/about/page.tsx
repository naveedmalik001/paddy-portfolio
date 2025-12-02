import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Paddy Chougule - Professional Body Double & Stunt Artist',
  description: 'Professional body double and stunt artist for Hardik Pandya & Jasprit Bumrah. 6+ years experience with 50+ projects. Available for domestic and international shoots.',
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
                  <span className="block text-white">Paddy Chougule</span>
                </h1>
                <p className="text-lg md:text-xl text-white/80 max-w-lg mx-auto lg:mx-0">
                  Professional body double and stunt artist specializing in athlete representation.
                  The official body double for Hardik Pandya & Jasprit Bumrah with 6+ years of experience
                  and 50+ completed projects across commercials, sports shoots, and digital campaigns.
                  Based in Mumbai, India and available for domestic and international shoots.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-gradient">50+</div>
                    <div className="text-sm text-white/60">Projects</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-gradient">6+</div>
                    <div className="text-sm text-white/60">Years Exp.</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-gradient">2</div>
                    <div className="text-sm text-white/60">Cricket Stars</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-gradient">5'10"</div>
                    <div className="text-sm text-white/60">Height</div>
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

        {/* Profile Section */}
        <section className="section-padding bg-surface">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="text-gradient">Professional Profile</span>
                </h2>
                <div className="space-y-4 text-white/80">
                  <p>
                    Professional body double and stunt artist with over 6 years of specialized experience
                    in athlete representation. I've established myself as trusted body double for
                    premier Indian cricket stars Hardik Pandya and Jasprit Bumrah.
                  </p>
                  <p>
                    Based in Mumbai, India, I work with leading sports brands, broadcasting networks,
                    and production houses to deliver seamless on-screen performances. My expertise
                    includes precise posture matching, movement replication, and technical stunt coordination.
                  </p>
                  <p>
                    With distinctive features including no tattoos and perfect physical matching,
                    I provide production teams with reliable continuity and authentic athletic movement
                    representation for commercials, sports shoots, and digital campaigns.
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
                <span className="text-gradient">Professional Specifications</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Physical Details Card */}
                <div className="card p-6 md:p-8">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-2">📏</div>
                    <h3 className="text-xl font-semibold text-white mb-2">Physical Details</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Height</span>
                      <span className="text-white font-medium">5'10"</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Location</span>
                      <span className="text-white font-medium">Mumbai, India</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Experience</span>
                      <span className="text-white font-medium">6+ Years</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Tattoos</span>
                      <span className="text-white font-medium">None</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Projects</span>
                      <span className="text-white font-medium">50+ Completed</span>
                    </div>
                  </div>
                </div>

                {/* Body Double Services Card */}
                <div className="card p-6 md:p-8">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-2">🎭</div>
                    <h3 className="text-xl font-semibold text-white mb-2">Body Double Services</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Athletes</span>
                      <span className="text-white font-medium">2 Major Stars</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Movement</span>
                      <span className="text-white font-medium">Cricket Specialist</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Camera Work</span>
                      <span className="text-white font-medium">Lighting Expert</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Stunts</span>
                      <span className="text-white font-medium">Athletic Sequences</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Availability</span>
                      <span className="text-white font-medium">Passport Ready</span>
                    </div>
                  </div>
                </div>

                {/* Business & Availability Card */}
                <div className="card p-6 md:p-8">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-2">💼</div>
                    <h3 className="text-xl font-semibold text-white mb-2">Business Details</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Working Hours</span>
                      <span className="text-white font-medium">12-hour shifts</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Travel</span>
                      <span className="text-white font-medium">Domestic & Int'l</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Languages</span>
                      <span className="text-white font-medium">Hindi, English</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Status</span>
                      <span className="text-white font-medium">Available 2025</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Instagram</span>
                      <span className="text-white font-medium">@jr.hardikpandyaa93</span>
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
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">50+</div>
                  <div className="text-sm text-white/60">Body Double Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">6+</div>
                  <div className="text-sm text-white/60">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">2</div>
                  <div className="text-sm text-white/60">Major Cricket Stars</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">2025</div>
                  <div className="text-sm text-white/60">Available For Bookings</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}