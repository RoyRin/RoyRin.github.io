import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Github, Linkedin, FileText, ExternalLink, Moon, Sun, ChevronDown } from 'lucide-react';

const ModernPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'publications', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Sample data - replace with your actual content
  const publications = [
    {
      title: "Sample Paper Title 1",
      authors: "Roy Rinberg, Author 2, Author 3",
      venue: "Conference/Journal Name 2024",
      abstract: "Brief abstract or description of the paper...",
      links: {
        pdf: "#",
        arxiv: "#",
        code: "#"
      }
    },
    {
      title: "Sample Paper Title 2",
      authors: "Roy Rinberg, Author 2",
      venue: "Conference/Journal Name 2023",
      abstract: "Brief abstract or description of the paper...",
      links: {
        pdf: "#",
        arxiv: "#"
      }
    }
  ];

  const projects = [
    {
      title: "Project Name 1",
      description: "Brief description of the project and its impact",
      technologies: ["React", "Python", "TensorFlow"],
      link: "#",
      github: "#"
    },
    {
      title: "Project Name 2",
      description: "Brief description of the project and its impact",
      technologies: ["JavaScript", "Node.js", "MongoDB"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-md shadow-lg') : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Roy Rinberg
              </h1>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['Home', 'About', 'Publications', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.toLowerCase()
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                        : darkMode ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {item}
                  </button>
                ))}
                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-md transition-colors duration-200 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>
            </div>
            
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-md transition-colors duration-200 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md transition-colors duration-200 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'About', 'Publications', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-xy"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Roy Rinberg
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
            Researcher • Developer • Problem Solver
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in-up animation-delay-400">
            <a
              href="https://github.com/RoyRin"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100 shadow-md'
              }`}
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100 shadow-md'
              }`}
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:roy@example.com"
              className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100 shadow-md'
              }`}
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <div className="mt-12 animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white'} backdrop-blur-sm shadow-xl`}>
            <p className="text-lg leading-relaxed mb-6">
              I'm a researcher and developer passionate about pushing the boundaries of technology. 
              My work focuses on [your research areas/interests].
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Currently, I'm working on [current position/projects]. I have a background in 
              [your background/education].
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding or researching, you can find me [hobbies/interests].
            </p>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Publications
          </h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] ${
                  darkMode ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-white hover:shadow-xl'
                } backdrop-blur-sm shadow-lg`}
              >
                <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                <p className="text-sm mb-2 opacity-75">{pub.authors}</p>
                <p className="text-sm mb-4 font-medium text-blue-500">{pub.venue}</p>
                <p className="mb-4">{pub.abstract}</p>
                <div className="flex flex-wrap gap-3">
                  {pub.links.pdf && (
                    <a
                      href={pub.links.pdf}
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      PDF
                    </a>
                  )}
                  {pub.links.arxiv && (
                    <a
                      href={pub.links.arxiv}
                      className={`inline-flex items-center px-4 py-2 rounded-lg transition-colors ${
                        darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      arXiv
                    </a>
                  )}
                  {pub.links.code && (
                    <a
                      href={pub.links.code}
                      className={`inline-flex items-center px-4 py-2 rounded-lg transition-colors ${
                        darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] ${
                  darkMode ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-white hover:shadow-xl'
                } backdrop-blur-sm shadow-lg`}
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-sm rounded-full ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg mb-8">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to connect!
          </p>
          <a
            href="mailto:roy@example.com"
            className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity transform hover:scale-105"
          >
            <Mail className="w-5 h-5 mr-2" />
            Send Me an Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="opacity-75">
            © 2024 Roy Rinberg. Built with React and deployed on Vercel.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient-xy {
          0%, 100% {
            transform: translate(0%, 0%);
          }
          25% {
            transform: translate(-5%, -5%);
          }
          50% {
            transform: translate(-5%, 5%);
          }
          75% {
            transform: translate(5%, -5%);
          }
        }
        
        .animate-gradient-xy {
          animation: gradient-xy 15s ease infinite;
          background-size: 400% 400%;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  );
};

export default ModernPortfolio;
