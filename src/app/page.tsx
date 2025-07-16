'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Re-import Image component
// Define types for the props used in components
type NavLinkProps = {
  href: string;
  text: string;
  activeSection: string;
  onClick?: () => void; // Added for mobile menu close
};

type EducationItemProps = {
  degree: string;
  institution: string;
  period: string;
  details: string[];
};

type SkillCategoryProps = {
  title: string;
  skills: string[];
  bgColor: string;
  textColor: string;
};

type ExperienceItemProps = {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
};

type LanguageItemProps = {
  name: string;
  proficiency: string;
};

type HeaderProps = {
  activeSection: string;
};


// Main App component
const App = () => {
  // State to keep track of the currently active section
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    // Options for the Intersection Observer
    const options: IntersectionObserverInit = {
      root: null, // Use the viewport as the root
      rootMargin: '-50% 0px -50% 0px', // When 50% of the section is in view
      threshold: 0 // As soon as any part of the target enters the viewport
    };

    // Callback function for the Intersection Observer
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        // If the entry is intersecting and its ID matches a section, set it as active
        if (entry.isIntersecting && entry.target.id) {
          setActiveSection(entry.target.id);
        }
      });
    };

    // Create a new Intersection Observer
    const observer = new IntersectionObserver(observerCallback, options);

    // Get all sections to observe
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      observer.observe(section);
    });

    // Smooth scrolling for navigation links
    const handleClick = (e: Event) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
          // Immediately set the active section on click
          setActiveSection(targetId.substring(1)); // Remove '#' from href
        }
      }
    };

    // Get all anchor links and add event listeners
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleClick as EventListener);
    });

    // Cleanup function for the observer
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
      // Remove event listeners if component unmounts
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleClick as EventListener);
      });
    };
  }, []); // Empty dependency array means this runs once after initial render

  return (
    <div className="antialiased font-inter bg-[#dcdee3]">
      {/* Header and Navigation */}
      <Header activeSection={activeSection} />

      {/* Hero/About Me Section */}
      <About />

      {/* Education Section */}
      <Education />

      {/* Skills Section */}
      <Skills />

      {/* Work Experience Section */}
      <Experience />

      {/* Languages Section */}
      <Languages />

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Header Component
const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-10 rounded-b-lg">
      <nav className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <a href="#" className="text-2xl font-bold text-indigo-600 rounded-md">Siem Seko</a>
          {/* Hamburger menu button for mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-2"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Navigation links - hidden on mobile by default, shown when menu is open */}
        <div
          className={`
            w-full md:w-auto md:flex md:flex-row md:space-x-4 mt-4 md:mt-0
            overflow-hidden transition-all duration-500 ease-in-out
            ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}
            flex flex-col items-center space-y-2 md:space-y-0
          `}
        >
          <NavLink href="#about" text="About" activeSection={activeSection} onClick={closeMenu} />
          <NavLink href="#education" text="Education" activeSection={activeSection} onClick={closeMenu} />
          <NavLink href="#skills" text="Skills" activeSection={activeSection} onClick={closeMenu} />
          <NavLink href="#experience" text="Experience" activeSection={activeSection} onClick={closeMenu} />
          <NavLink href="#languages" text="Languages" activeSection={activeSection} onClick={closeMenu} />
        </div>
      </nav>
    </header>
  );
};

// Navigation Link Component
const NavLink: React.FC<NavLinkProps> = ({ href, text, activeSection, onClick }) => {
  // Determine if the current link is active
  const isActive = activeSection === href.substring(1); // Remove '#' from href for comparison

  return (
    <a
      href={href}
      onClick={onClick} // Add onClick handler for mobile menu
      className={`
        ${isActive
          ? "text-indigo-600 bg-indigo-50 font-bold"
          : "text-gray-700 hover:text-indigo-600 font-medium"
        }
        px-3 py-2 rounded-md transition duration-300 w-full text-center md:w-auto
      `}
    >
      {text}
    </a>
  );
};

// About Me Component
const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center pt-28 rounded-b-lg shadow-lg">
      <div className="container mx-auto px-4">
        <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-lg">
          {/* Placeholder image, replace with your actual profile picture */}
           <Image
            src="https://placehold.co/128x128/6366f1/ffffff?text=SS"
            alt="Siem Seko Profile"
            width={128}
            height={128}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">Hello, I'm Siem Seko</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
          A passionate and dedicated professional with a strong background in [Your Field/Area of Expertise]. I thrive on learning new technologies and solving complex problems.
        </p>
        <a href="#experience" className="inline-block bg-white text-indigo-600 hover:bg-gray-100 font-bold py-3 px-8 mb-5 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
          View My Work
        </a>
      </div>
    </section>
  );
};

// Education Component
const Education = () => {
  return (
    <section id="education" className="section-padding bg-white rounded-lg shadow-md my-8 mx-4 md:mx-auto max-w-7xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Item 1 */}
          <EducationItem
            degree="Bachelor of Science in Computer Science"
            institution="Royal University of Phnom Penh"
            period="September 2018 - July 2022"
            details={[
              "Graduated with Honors",
              "Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems",
              "Capstone Project: [Brief description of your project]"
            ]}
          />
          {/* Education Item 2 (Optional) */}
          <EducationItem
            degree="High School Diploma"
            institution="Preah Sisowath High School"
            period="September 2015 - July 2018"
            details={[
              "Focused on Science and Mathematics",
              "Participated in [mention any clubs/activities]"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

// Education Item Component
const EducationItem: React.FC<EducationItemProps> = ({ degree, institution, period, details }) => (
  <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border border-gray-200">
    <h3 className="text-xl font-semibold text-indigo-700 mb-2">{degree}</h3>
    <p className="text-gray-600 mb-1">{institution}</p>
    <p className="text-sm text-gray-500">{period}</p>
    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-1">
      {details.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
    </ul>
  </div>
);

// Skills Component
const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gray-100 rounded-lg shadow-md my-8 mx-4 md:mx-auto max-w-7xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory
            title="Technical Skills"
            skills={[
              "HTML", "CSS (Tailwind CSS)", "JavaScript", "React.js", "Node.js",
              "Python", "SQL (PostgreSQL, MySQL)", "Git/GitHub", "RESTful APIs"
            ]}
            bgColor="bg-indigo-100"
            textColor="text-indigo-800"
          />
          <SkillCategory
            title="Software & Tools"
            skills={[
              "VS Code", "Figma", "Jira", "Docker", "AWS (S3, EC2)"
            ]}
            bgColor="bg-green-100"
            textColor="text-green-800"
          />
          <SkillCategory
            title="Soft Skills"
            skills={[
              "Problem-Solving", "Communication", "Teamwork", "Adaptability", "Time Management"
            ]}
            bgColor="bg-yellow-100"
            textColor="text-yellow-800"
          />
        </div>
      </div>
    </section>
  );
};

// Skill Category Component
const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, bgColor, textColor }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border border-gray-200">
    <h3 className="text-xl font-semibold text-indigo-700 mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={index} className={`${bgColor} ${textColor} text-sm font-medium px-3 py-1 rounded-full`}>
          {skill}
        </span>
      ))}
    </div>
  </div>
);

// Work Experience Component
const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-white rounded-lg shadow-md my-8 mx-4 md:mx-auto max-w-7xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Work Experience</h2>
        <div className="space-y-8">
          {/* Experience Item 1 */}
          <ExperienceItem
            title="Software Developer"
            company="Tech Solutions Inc."
            location="Phnom Penh"
            period="August 2022 - Present"
            responsibilities={[
              "Developed and maintained web applications using React.js and Node.js, improving performance by 15%.",
              "Collaborated with cross-functional teams to define, design, and ship new features.",
              "Implemented RESTful APIs for data integration and improved system scalability.",
              "Participated in code reviews, ensuring high-quality code and adherence to best practices."
            ]}
          />
          {/* Experience Item 2 (Optional) */}
          <ExperienceItem
            title="Junior Web Developer Intern"
            company="Creative Designs Agency"
            location="Siem Reap"
            period="June 2021 - August 2021"
            responsibilities={[
              "Assisted in front-end development using HTML, CSS, and JavaScript for client websites.",
              "Learned responsive design principles and implemented them across various projects.",
              "Contributed to debugging and testing efforts, ensuring website functionality."
            ]}
          />
        </div>
      </div>
    </section>
  );
};

// Experience Item Component
const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, location, period, responsibilities }) => (
  <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border border-gray-200">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
      <h3 className="text-xl font-semibold text-indigo-700">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base">{company}, {location}</p>
    </div>
    <p className="text-sm text-gray-500 mb-4">{period}</p>
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      {responsibilities.map((responsibility, index) => (
        <li key={index}>{responsibility}</li>
      ))}
    </ul>
  </div>
);

// Languages Component
const Languages = () => {
  return (
    <section id="languages" className="section-padding bg-gray-100 rounded-lg shadow-md my-8 mx-4 md:mx-auto max-w-7xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Languages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <LanguageItem name="Khmer" proficiency="Native" />
          <LanguageItem name="English" proficiency="Fluent (Professional Working Proficiency)" />
          <LanguageItem name="French" proficiency="Basic (Conversational)" />
        </div>
      </div>
    </section>
  );
};

// Language Item Component
const LanguageItem: React.FC<LanguageItemProps> = ({ name, proficiency }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border border-gray-200 text-center">
    <h3 className="text-xl font-semibold text-indigo-700 mb-2">{name}</h3>
    <p className="text-gray-600">{proficiency}</p>
  </div>
);

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center rounded-t-lg shadow-lg">
      <div className="container mx-auto px-4">
        <p>&copy; 2025 Siem Seko. All rights reserved.</p>
        <p className="text-sm mt-2">Built with ❤️ and Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default App;
