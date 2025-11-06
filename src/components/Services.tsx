import { Globe, Smartphone, Palette, Code, Database, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Creating modern, responsive, and user-friendly websites using the latest technologies like React, Node.js, and modern CSS frameworks.',
      features: ['Responsive Design', 'Modern Frameworks', 'Performance Optimization', 'SEO Friendly'],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      gradient: 'from-primary/20 to-primary/5'
    },
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'End-to-end application development combining frontend excellence with robust backend architecture and database management.',
      features: ['Frontend & Backend', 'Database Design', 'API Development', 'System Architecture'],
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      gradient: 'from-secondary/20 to-secondary/5'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing intuitive and visually appealing user interfaces that provide excellent user experience across all devices.',
      features: ['User Interface Design', 'User Experience', 'Prototyping', 'Design Systems'],
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      gradient: 'from-accent/20 to-accent/5'
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Designing and implementing efficient database structures with SQL and NoSQL technologies for optimal data management.',
      features: ['Database Design', 'Query Optimization', 'Data Modeling', 'Migration Services'],
      color: 'text-success',
      bgColor: 'bg-success/10',
      gradient: 'from-success/20 to-success/5'
    },
    {
      icon: Zap,
      title: 'AI Integration',
      description: 'Leveraging AI and prompt engineering to create intelligent solutions and enhance user experiences with modern AI capabilities.',
      features: ['Prompt Engineering', 'AI Integration', 'Automation', 'Smart Solutions'],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      gradient: 'from-primary/20 to-primary/5'
    },
    {
      icon: Smartphone,
      title: 'Responsive Solutions',
      description: 'Ensuring your applications work perfectly across all devices with mobile-first design principles and responsive layouts.',
      features: ['Mobile First', 'Cross-platform', 'Touch Optimization', 'Progressive Web Apps'],
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      gradient: 'from-secondary/20 to-secondary/5'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive web development services to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="portfolio-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`bg-gradient-to-br ${service.gradient} rounded-2xl p-6 mb-6 group-hover:scale-105 transition-transform`}>
                <div className={`${service.bgColor} ${service.color} p-3 rounded-xl inline-flex mb-4`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-400">Key Features</h4>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className={`w-2 h-2 ${service.color.replace('text-', 'bg-')} rounded-full`}></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-3xl p-8 md:p-12 border border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's work together to create something amazing. I'm here to help bring your ideas to life with modern web technologies.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-hero-dark group"
            >
              Get Started Today
              <Zap className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;