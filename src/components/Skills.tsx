import { useEffect, useState } from 'react';
import { Code, Database, Globe, Lightbulb, Server, Smartphone } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'other';
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills: Skill[] = [
    { name: 'HTML & CSS', level: 90, category: 'frontend' },
    { name: 'JavaScript', level: 85, category: 'frontend' },
    { name: 'React.js', level: 80, category: 'frontend' },
    { name: 'Java', level: 85, category: 'backend' },
    { name: 'Node.js', level: 75, category: 'backend' },
    { name: 'Express.js', level: 70, category: 'backend' },
    { name: 'SQL', level: 80, category: 'database' },
    { name: 'MongoDB', level: 75, category: 'database' },
    { name: 'Prompt Engineering', level: 85, category: 'other' },
  ];

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      skills: skills.filter(skill => skill.category === 'frontend')
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      skills: skills.filter(skill => skill.category === 'backend')
    },
    {
      title: 'Database',
      icon: Database,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      skills: skills.filter(skill => skill.category === 'database')
    },
    {
      title: 'Other Skills',
      icon: Lightbulb,
      color: 'text-success',
      bgColor: 'bg-success/10',
      skills: skills.filter(skill => skill.category === 'other')
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Overview Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="skill-card group" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`${category.bgColor} ${category.color} p-3 rounded-xl inline-flex mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2 text-white">{category.title}</h3>
              <p className="text-sm text-gray-400 mb-3">
                {category.skills.length} {category.skills.length === 1 ? 'skill' : 'skills'}
              </p>
              <div className="flex flex-wrap gap-1">
                {category.skills.map((skill) => (
                  <span 
                    key={skill.name}
                    className="text-xs px-2 py-1 bg-primary/5 text-primary rounded-md"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Skills with Progress Bars */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12 text-white">Technical Proficiency</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-200">{skill.name}</span>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className={`skill-progress ${isVisible ? 'animate-pulse' : ''}`}
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6 text-white">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Git & GitHub', 'REST APIs', 'Responsive Design', 'Problem Solving', 'Team Collaboration', 'Agile Methodology'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-gray-200 rounded-full font-medium hover:scale-105 transition-transform border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;