import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'vanshjain@example.com',
      description: 'Send me an email anytime!'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 XXXX-XXX-XXX',
      description: 'Available during business hours'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'India',
      description: 'Open to remote opportunities'
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: '#', color: 'hover:text-foreground' },
    { icon: Linkedin, label: 'LinkedIn', url: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, label: 'Twitter', url: '#', color: 'hover:text-blue-400' },
    { icon: Mail, label: 'Email', url: 'mailto:vanshjain@example.com', color: 'hover:text-red-500' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Let's work together to create something amazing!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="portfolio-card bg-gray-800 border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Inquiry"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  className="w-full resize-none"
                />
              </div>
              
              <Button type="submit" className="btn-hero-dark w-full group">
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-xl">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-white">{info.title}</h4>
                      <p className="text-gray-200 font-medium">{info.details}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-white">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    className={`p-3 bg-muted/50 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="portfolio-card bg-gradient-to-br from-success/10 to-primary/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <h4 className="font-semibold text-success">Available for Work</h4>
              </div>
              <p className="text-gray-300">
                I'm currently available for freelance projects and full-time opportunities. 
                Let's discuss how we can work together!
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="skill-card text-center">
                <div className="text-2xl font-bold text-primary mb-1">24h</div>
                <div className="text-sm text-gray-400">Response Time</div>
              </div>
              <div className="skill-card text-center">
                <div className="text-2xl font-bold text-secondary mb-1">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;