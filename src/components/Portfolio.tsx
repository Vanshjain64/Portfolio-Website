import { useState } from 'react';
import { ExternalLink, Github, Eye, Code, Brain, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI Medical Recommendation System',
      description: 'A web application using AI to predict diseases based on symptoms and provide personalized medical recommendations with an intuitive interface.',
      longDescription: 'Developed an intelligent healthcare solution that analyzes user symptoms using machine learning algorithms to predict potential diseases and provide comprehensive medical recommendations. The system features a user-friendly interface, symptom analysis, disease prediction, and treatment suggestions.',
      category: 'ai',
      technologies: ['React.js', 'Node.js', 'Python', 'Machine Learning', 'MongoDB', 'Express.js'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      icon: Brain,
      gradient: 'from-primary/20 to-secondary/20'
    },
    {
      id: 2,
      title: 'Food Delivery Website',
      description: 'A full-stack food delivery platform with menu browsing, order management, real-time tracking, and secure payment integration.',
      longDescription: 'Built a comprehensive food delivery platform featuring restaurant listings, menu browsing, shopping cart functionality, order management, real-time delivery tracking, and secure payment processing. Includes both customer and restaurant admin panels.',
      category: 'fullstack',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Stripe API', 'Socket.io'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      icon: Utensils,
      gradient: 'from-accent/20 to-success/20'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and modern design principles.',
      longDescription: 'Designed and developed a personal portfolio website featuring modern design principles, smooth animations, responsive layout, and optimized performance. Built with React.js and includes project showcases, skill demonstrations, and contact functionality.',
      category: 'web',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      icon: Code,
      gradient: 'from-secondary/20 to-primary/20'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'web', label: 'Web Development' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my latest projects and see how I bring ideas to life
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? 'default' : 'outline'}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category.id 
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg' 
                  : 'hover:scale-105'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`portfolio-card group ${project.featured ? 'lg:col-span-2' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className={`relative bg-gradient-to-br ${project.gradient} rounded-2xl p-8 mb-6 overflow-hidden`}>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex items-center justify-center h-32">
                  <div className="text-center">
                    <project.icon className="h-16 w-16 text-white/80 mx-auto mb-2" />
                    <p className="text-white/90 font-medium">{project.title}</p>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="sm" variant="secondary" className="gap-2">
                    <Eye className="h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2 text-white border-white hover:bg-white hover:text-black">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300">
                    {project.featured ? project.longDescription : project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-400 mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-2">
                  <Button size="sm" className="flex-1 gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 gap-2">
                    <Github className="h-4 w-4" />
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">Interested in Working Together?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with amazing people. Let's create something great together!
          </p>
          <Button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-hero-dark"
          >
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;