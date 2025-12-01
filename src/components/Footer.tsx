export default function Footer() {
  const socialLinks = [
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'TikTok', href: '#', icon: '🎵' },
    { name: 'YouTube', href: '#', icon: '📹' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
  ]

  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
    { name: 'Media Kit', href: '#media-kit' },
  ]

  return (
    <footer className="bg-surface border-t border-white/10">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Paddy
            </h3>
            <p className="text-white/80 mb-6 max-w-md">
              Professional content creator specializing in brand campaigns,
              lifestyle photography, and social media strategy.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-white/60 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-white/60">
              <p>hello@paddy.com</p>
              <p>+1 (555) 123-4567</p>
              <div className="pt-4">
                <a href="#contact" className="btn-primary text-sm">
                  Start a Collaboration
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white/40 text-sm">
            <p>&copy; 2025 Paddy. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}