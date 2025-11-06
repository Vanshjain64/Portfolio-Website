import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-gray-200 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Vansh Jain
            </h3>
            <p className="text-gray-300 mb-4">
              Full Stack Developer passionate about creating amazing digital experiences 
              with modern technologies and user-centric design.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Available for new opportunities
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Web Development</li>
              <li>Full Stack Development</li>
              <li>UI/UX Design</li>
              <li>Database Solutions</li>
              <li>AI Integration</li>
              <li>Responsive Design</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Vansh Jain. Made with{' '}
            <Heart className="inline h-4 w-4 text-red-400 mx-1" />{' '}
            and lots of code.
          </p>
          
          <div className="flex items-center gap-4">
            <p className="text-gray-400 text-sm">
              Built with React.js & Tailwind CSS
            </p>
            <button
              onClick={scrollToTop}
              className="p-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-full transition-colors group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform text-blue-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;