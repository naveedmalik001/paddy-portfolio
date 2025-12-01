export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

      <div className="container relative z-10 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gradient">Creative</span>
                <span className="block text-white">Storyteller</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-lg mx-auto lg:mx-0">
                Professional content creator crafting compelling brand stories
                through photography, video, and authentic social media presence.
              </p>
            </div>

            {/* Stats */}
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
              <a href="#contact" className="btn-primary">
                Start a Collaboration
              </a>
              <a href="#portfolio" className="btn-secondary">
                View Selected Work
              </a>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl">
              {/* Placeholder for hero image */}
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">📸</div>
                  <p className="text-white/60">Hero Image</p>
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/40">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll</span>
          <div className="w-0.5 h-16 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}