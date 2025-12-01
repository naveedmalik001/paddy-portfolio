import { processSteps } from '@/data/seed'

export default function ProcessSteps() {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Process</span> & Workflow
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A streamlined approach to ensure your brand vision comes to life with precision and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number Circle */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {step.step}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-6 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"
                       style={{ width: 'calc(100% - 3rem)' }} />
                )}
              </div>

              {/* Step Content */}
              <div className="card">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline visual for mobile */}
        <div className="md:hidden mt-8">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />
            {processSteps.map((step, index) => (
              <div key={index} className="relative flex items-start mb-8 last:mb-0">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold mr-4 z-10">
                  {step.step}
                </div>
                <div className="flex-1 card mt-1">
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-white/60 max-w-3xl mx-auto">
            Each project is unique and we adapt our process to meet your specific needs while maintaining the highest quality standards and creative excellence.
          </p>
        </div>
      </div>
    </section>
  )
}