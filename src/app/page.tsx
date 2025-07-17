// components/WebDeveloperPortfolio.tsx
// This component demonstrates a basic structure for a personal portfolio section
// using Next.js (React) with TypeScript and Tailwind CSS.

import React from 'react';

// Define a type for project data to ensure type safety
interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveDemoUrl: string;
  githubRepoUrl: string;
  imageUrl: string;
}

// Define the main App component for the portfolio section
const WebDeveloperPortfolio: React.FC = () => {
  // Example project data
  const projects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce application featuring user authentication, product listings, shopping cart functionality, and secure payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      liveDemoUrl: '#', // Replace with actual live demo URL
      githubRepoUrl: '#', // Replace with actual GitHub repo URL
      imageUrl: 'https://placehold.co/600x400/E0E7FF/4338CA?text=Project+1+Image',
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A responsive task management application allowing users to create, organize, and track their daily tasks with real-time updates.',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      liveDemoUrl: '#', // Replace with actual live demo URL
      githubRepoUrl: '#', // Replace with actual GitHub repo URL
      imageUrl: 'https://placehold.co/600x400/E0E7FF/4338CA?text=Project+2+Image',
    },
    {
      id: '3',
      title: 'Personal Blog Site',
      description: 'A minimalist personal blog platform built with a custom CMS, allowing for easy content creation and management.',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      liveDemoUrl: '#', // Replace with actual live demo URL
      githubRepoUrl: '#', // Replace with actual GitHub repo URL
      imageUrl: 'https://placehold.co/600x400/E0E7FF/4338CA?text=Project+3+Image',
    },
  ];

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 font-inter antialiased text-slate-700 bg-slate-50">

      {/* Header Section */}
      <header className="flex flex-col sm:flex-row items-center justify-between py-6 px-4 mb-8 bg-white rounded-xl shadow-md">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Your Name</h1>
          <p className="text-xl text-indigo-600 font-medium">Web Developer</p>
        </div>
        <nav>
          <ul className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
            <li><a href="#about" className="text-slate-700 hover:text-indigo-600 font-medium transition duration-300">About</a></li>
            <li><a href="#skills" className="text-slate-700 hover:text-indigo-600 font-medium transition duration-300">Skills</a></li>
            <li><a href="#projects" className="text-slate-700 hover:text-indigo-600 font-medium transition duration-300">Projects</a></li>
            <li><a href="#contact" className="text-slate-700 hover:text-indigo-600 font-medium transition duration-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl shadow-lg mb-12">
        <h2 className="text-5xl font-extrabold mb-4 leading-tight">Crafting Engaging Web Experiences</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Passionate about building beautiful, functional, and user-friendly web applications.
          Let's create something amazing together!
        </p>
        <a href="#projects" className="bg-white text-indigo-600 hover:bg-indigo-50 transition duration-300 inline-block text-lg font-semibold py-3 px-6 rounded-lg shadow-md transform hover:scale-105">View My Work</a>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 relative section-title">About Me</h2>
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-lg leading-relaxed mb-4">
            Hello! I'm <span className="font-semibold text-indigo-600">Your Name</span>, a dedicated Web Developer with X years of experience in creating dynamic and responsive web applications. My journey into web development began with a fascination for how digital experiences are built, and it has since evolved into a passion for solving complex problems and bringing ideas to life through code.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            I specialize in <span className="font-semibold text-slate-800">front-end development</span>, with a strong focus on creating intuitive user interfaces and seamless user experiences. I am proficient in modern JavaScript frameworks and libraries, and I always strive to write clean, efficient, and maintainable code.
          </p>
          <p className="text-lg leading-relaxed">
            Beyond coding, I enjoy staying updated with the latest web technologies, contributing to open-source projects, and continuously learning new skills. I believe in the power of collaboration and am always excited to work with teams that share a passion for innovation and excellence.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 relative section-title">Skills</h2>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Front-End</h3>
            <div className="flex flex-wrap gap-3">
              <span className="bg-indigo-100 text-indigo-700 py-1.5 px-3 rounded-lg text-sm font-medium">HTML5</span>
              <span className="bg-indigo-100 text-indigo-700 py-1.5 px-3 rounded-lg text-sm font-medium">CSS3</span>
              <span className="bg-indigo-100 text-indigo-700 py-1.5 px-3 rounded-lg text-sm font-medium">JavaScript (ES6+)</span>
              <span className="bg-indigo-100 text-indigo-700 py-1.5 px-3 rounded-lg text-sm font-medium">React.js</span>
              <span className="bg-indigo-100 text-indigo-700 py-1.5 px-3 rounded-lg text-sm font-medium">Vue.js</span>
              <span className="bg-indigo-100 text-indigo-700 py-1.5 px-3 rounded-lg text-sm font-medium">Angular</span>
              <span className="bg-indigo-100 text-indigo-700 py-1.5 px-3 rounded-lg text-sm font-medium">Tailwind CSS</span>
              <span className="bg-indigo-100 text-indigo-700 py-1.5 px-3 rounded-lg text-sm font-medium">Bootstrap</span>
              <span className="bg-indigo-100 text-indigo-700 py-1.5 px-3 rounded-lg text-sm font-medium">Responsive Design</span>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Back-End</h3>
            <div className="flex flex-wrap gap-3">
              <span className="bg-indigo-100 text-indigo-700 py-1.5 px-3 rounded-lg text-sm font-medium">Node.js</span>
              <span className="bg-indigo-100 text-indigo-700 py-1.5 px-3 rounded-lg text-sm font-medium">Express.js</span>
              <span className="bg-indigo-100 text-indigo-700 py-1.5 px-3 rounded-lg text-sm font-medium">Python</span>
              <span className="bg-indigo-100 text-indigo-700 py-1.5 px-3 rounded-lg text-sm font-medium">Django</span>
              <span className="bg-indigo-100 text-indigo-700 py-1.5 px-3 rounded-lg text-sm font-medium">PHP</span>
              <span className="bg-indigo-100 text-indigo-700 py-1.5 px-3 rounded-lg text-sm font-medium">Laravel</span>
              <span className="bg-indigo-100 text-indigo-700 py-1.5 px-3 rounded-lg text-sm font-medium">RESTful APIs</span>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Databases</h3>
            <div className="flex flex-wrap gap-3">
              <span className="bg-indigo-100 text-indigo-700 py-1.5 px-3 rounded-lg text-sm font-medium">MongoDB</span>
              <span className="bg-indigo-100 text-indigo-700 py-1.5 px-3 rounded-lg text-sm font-medium">PostgreSQL</span>
              <span className="bg-indigo-100 text-indigo-700 py-1.5 px-3 rounded-lg text-sm font-medium">MySQL</span>
              <span className="bg-indigo-100 text-indigo-700 py-1.5 px-3 rounded-lg text-sm font-medium">Firebase</span>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Tools & Others</h3>
            <div className="flex flex-wrap gap-3">
              <span className="bg-indigo-100 text-indigo-700 py-1.5 px-3 rounded-lg text-sm font-medium">Git</span>
              <span className="bg-indigo-100 text-indigo-700 py-1.5 px-3 rounded-lg text-sm font-medium">GitHub</span>
              <span className="bg-indigo-100 text-indigo-700 py-1.5 px-3 rounded-lg text-sm font-medium">VS Code</span>
              <span className="bg-indigo-100 text-indigo-700 py-1.5 px-3 rounded-lg text-sm font-medium">Webpack</span>
              <span className="bg-indigo-100 text-indigo-700 py-1.5 px-3 rounded-lg text-sm font-medium">Netlify</span>
              <span className="bg-indigo-100 text-indigo-700 py-1.5 px-3 rounded-lg text-sm font-medium">Heroku</span>
              <span className="bg-indigo-100 text-indigo-700 py-1.5 px-3 rounded-lg text-sm font-medium">Agile Methodologies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 relative section-title">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-md p-6 flex flex-col">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold text-slate-800 mb-2">{project.title}</h3>
              <p className="text-slate-600 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-indigo-100 text-indigo-700 py-1.5 px-3 rounded-lg text-sm font-medium">{tech}</span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-auto">
                <a href={project.liveDemoUrl} className="text-indigo-600 hover:text-indigo-800 font-medium transition duration-300" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.githubRepoUrl} className="text-slate-600 hover:text-slate-800 font-medium transition duration-300" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 relative section-title">Contact Me</h2>
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-lg leading-relaxed mb-6">
            I'm always open to new opportunities, collaborations, and interesting projects. Feel free to reach out!
          </p>
          <div className="space-y-4">
            <p className="text-lg">
              <span className="font-semibold text-slate-800">Email:</span> <a href="mailto:your.email@example.com" className="text-indigo-600 hover:underline">your.email@example.com</a>
            </p>
            <p className="text-lg">
              <span className="font-semibold text-slate-800">LinkedIn:</span> <a href="https://www.linkedin.com/in/yourprofile" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a>
            </p>
            <p className="text-lg">
              <span className="font-semibold text-slate-800">GitHub:</span> <a href="https://github.com/yourusername" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">github.com/yourusername</a>
            </p>
            <p className="text-lg">
              <span className="font-semibold text-slate-800">Location:</span> Phnom Penh, Cambodia (or Remote)
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 mt-12 text-slate-600 border-t border-slate-200">
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </footer>

    </div>
  );
};

// Export the component as default for Next.js page or component usage
export default WebDeveloperPortfolio;
