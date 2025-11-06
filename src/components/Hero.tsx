import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-hero-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="fade-in-up">
              <p className="text-lg text-gray-300 mb-4 font-medium">
                Welcome to my portfolio
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Hey There,<br />
                I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent glow-name">
                  Vansh Jain
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-4">
                Full Stack Developer
              </p>
              <p className="text-lg text-gray-300 mb-4">
                Web Designer • Prompt Engineer
              </p>
              <p className="text-base text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
                I design beautifully simple things, and I love what I do.
                Passionate about creating efficient, scalable, and user-friendly solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start bounce-in">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                className="btn-hero-dark group"
              >
                View Portfolio
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="btn-outline-hero-dark group"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Contact Me
              </Button>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Available for work
              </div>
              <div className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <button className="hover:text-blue-400 transition-colors">
                  Download Resume
                </button>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Profile Image */}
              <div className="w-80 h-80 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl flex items-center justify-center border border-gray-700/50 backdrop-blur-sm p-6">
                <div className="text-center">
                  <div className="w-48 h-56 rounded-2xl mb-4 mx-auto shadow-2xl overflow-hidden border-2 border-gray-600/50">
                    <img 
                      src={profileImage} 
                      alt="Vansh Jain Profile" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <p className="text-gray-300">Vansh Jain</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg rotate-12 hover:rotate-0 transition-transform">
                <span className="text-white font-bold">IT</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg -rotate-12 hover:rotate-0 transition-transform">
                <span className="text-white font-bold">2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-gray-400 hover:text-blue-400 transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;