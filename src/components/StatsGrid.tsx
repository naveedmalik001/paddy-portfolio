import { stats } from '@/data/seed'

export default function StatsGrid() {
  return (
    <section className="section-padding bg-surface">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Numbers</span> That Matter
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Building authentic connections and delivering measurable results for brands across various platforms.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer"
            >
              <div className="relative mb-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl font-bold text-gradient">
                    {stat.value}
                  </div>
                </div>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 w-20 h-20 mx-auto bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </div>
              <div className="text-sm text-white/60 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Additional context */}
        <div className="mt-16 text-center">
          <p className="text-white/60 max-w-3xl mx-auto">
            With over <span className="text-gradient font-semibold">500 successful campaigns</span> and partnerships with more than <span className="text-gradient font-semibold">50 global brands</span>, I bring expertise and creativity to every collaboration.
          </p>
        </div>
      </div>
    </section>
  )
}