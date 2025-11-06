import { GraduationCap, MapPin, Calendar, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn more about my background, education, and passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="fade-in-up">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                <User className="h-6 w-6 text-blue-400" />
                Personal Bio
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                I am an aspiring IT engineer and full stack developer with a strong foundation in modern web technologies and software development practices. Skilled in building end-to-end applications, I combine expertise in both front-end and back-end development to deliver efficient, scalable, and user-friendly solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                As a fresher with practical experience working on various projects, I bring fresh perspectives and enthusiasm to every challenge. I'm passionate about learning new technologies and contributing to innovative solutions that make a real impact.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="skill-card">
                <Calendar className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-semibold mb-2 text-white">Experience Level</h4>
                <p className="text-gray-400 text-sm">Fresher with practical project experience</p>
              </div>
              <div className="skill-card">
                <MapPin className="h-8 w-8 text-secondary mb-3" />
                <h4 className="font-semibold mb-2 text-white">Location</h4>
                <p className="text-gray-400 text-sm">India</p>
              </div>
            </div>
          </div>

          {/* Education & Info */}
          <div className="space-y-6">
            <div className="portfolio-card">
              <GraduationCap className="h-12 w-12 text-primary mb-4 glow-primary" />
              <h3 className="text-2xl font-bold mb-4 text-white">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg text-white">B.Tech in Information Technology</h4>
                  <p className="text-primary font-medium">Government College of Engineering, Amravati</p>
                  <p className="text-gray-400">Expected Graduation: 2026</p>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <h5 className="font-medium mb-2 text-white">Key Coursework:</h5>
                  <div className="flex flex-wrap gap-2">
                    {['Data Structures', 'Algorithms', 'Database Systems', 'Web Development', 'Software Engineering'].map((course) => (
                      <span 
                        key={course}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio-card">
              <h3 className="text-xl font-bold mb-4 text-white">Why Choose Me?</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Fresh perspective with modern development practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <span>Strong foundation in both frontend and backend technologies</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <span>Passionate about creating user-centric solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                  <span>Quick learner with strong problem-solving skills</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;