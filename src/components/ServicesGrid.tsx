import { services } from '@/data/seed'

export default function ServicesGrid() {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Services</span> I Offer
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Comprehensive creative solutions tailored to elevate your brand and connect with your target audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {/* Service Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">{service.icon}</span>
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-semibold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {service.description}
              </p>

              {/* Hover effect line */}
              <div className="mt-6 h-1 bg-gradient-to-r from-primary to-secondary rounded-full w-0 group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="card max-w-4xl mx-auto p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to <span className="text-gradient">Collaborate</span>?
            </h3>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can work together to create compelling content that resonates with your audience and drives results.
            </p>
            <a href="#contact" className="btn-primary">
              Start a Collaboration
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}