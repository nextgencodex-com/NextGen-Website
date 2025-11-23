import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Filter } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Dinetha Astrological Website',
    description: 'A personal astrological website to share horoscope insights and services using React and Tailwind CSS.',
    image: 'images/dinetha.png',
    category: 'Web Development',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'FireBase'],
    liveUrl: 'https://dinethaastrological.com/',
    githubUrl: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Share Taxi Sri Lanka – Tourist Shared Taxi Platform',
    description: 'Sri Lanka’s first shared taxi service designed for tourists, offering affordable ride-sharing routes with real-time booking, secure payments, and a smooth travel experience.',
    image: 'images/sharetaxi.png',
    category: 'Taxi Service Platform',
    technologies: ['React', 'Tailwind CSS', 'Firebase', 'Node.js'],
    liveUrl: 'https://sharetaxisrilanka.com/',
    githubUrl: '#',
    featured: true
  },
  
  {
    id: 3,
    title: 'CeyLuxe Journeys – AI-Powered Tourism & Travel Platform',
    description: 'A modern Sri Lankan travel experience platform featuring AI-based trip planning, destination showcases, tour packages, customer inquiries, and real-time communication. Designed with a clean and immersive UI for tourists seeking personalised travel experiences.',
    image: 'images/cey.png',
    category: 'Travel & Tourism Website',
    technologies: ['React', 'Tailwind CSS', 'Firebase', 'Node.js'],
    liveUrl: 'https://tourism-website-ceyluxe-r2pf.vercel.app/',
    githubUrl: '#',
    featured: false,
     status: 'ongoing'
  },
  
  {
    id: 4,
    title: 'AL Glass (Pvt) Ltd – Premium Glass Solutions Website',
    description: 'A modern, high-performance corporate website for Sri Lanka’s leading glass solutions provider. Showcases products, past projects, and services with a professional UI, integrated quote request system, and smooth user experience.',
    image: 'images/al.png',
    category: 'Business Website',
    technologies: ['React', 'Tailwind CSS', 'Firebase', 'Node.js'],
    liveUrl: 'https://alglasspvt.com/',
    githubUrl: '#',
    featured: false
  },
  
  {
    id: 5,
    title: 'Vengase Lifestyle – Modern Fashion E-Commerce Platform',
    description: 'A stylish and high-performance fashion e-commerce website offering unisex clothing and accessories. Features a sleek UI, advanced search, secure checkout, and a seamless shopping experience.',
    image: 'images/vengase.png',
    category: 'E-Commerce',
    technologies: ['React', 'Tailwind CSS', 'Firebase', 'Node.js'],
    liveUrl: 'https://vengase.vercel.app/',
    githubUrl: '#',
    featured: false,
    status: 'ongoing'
  },
  
  {
    id: 6,
    title: 'Luxiris Gems – Premium Gem & Jewellery E-Commerce Platform',
    description: 'A luxurious and modern online platform for gemstones and jewellery, featuring HD product showcases, blog content, collection pages, secure cart system, and an elegant user experience. Currently under active development.',
    image: 'images/gem.png',
    category: 'E-Commerce',
    technologies: ['React', 'Tailwind CSS', 'Firebase', 'Node.js'],
    liveUrl: 'https://gem-site-frontend.vercel.app/',
    githubUrl: '#',
    featured: true,
    status: 'ongoing'
  },
  
  {
    id: 7,
    title: 'LIMONA – Customizable Fashion E-Commerce Platform',
    description: 'A premium unisex fashion e-commerce platform offering customizable clothing and accessories. Features a modern UI, product customization modules, secure cart system, and smooth shopping experience tailored for lifestyle brands.',
    image: 'images/limona.png',
    category: 'E-Commerce',
    technologies: ['React', 'Tailwind CSS', 'Firebase', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    status: 'ongoing'
  },
  
  {
    id: 8,
    title: 'Ceylon Bliss – AI-Enhanced Travel & Adventure Platform',
    description: 'A modern Sri Lankan tourism platform offering destination guides, AI-powered trip planning, experience booking, and a fully immersive travel interface designed for international and local travellers.',
    image: 'images/b.png',
    category: 'Travel & Tourism Website',
    technologies: ['React', 'Tailwind CSS', 'Firebase', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    status: 'ongoing'
  },
  
];

const categories = ['All', 'Web Development', 'Mobile App', 'E-Commerce', 'Portfolio', 'Education', 'Healthcare'];

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFeatured, setShowFeatured] = useState(false);

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const featuredMatch = !showFeatured || project.featured;
    return categoryMatch && featuredMatch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Our <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 max-w-4xl mx-auto mb-12 leading-relaxed">
            Explore our portfolio of successful projects that showcase our expertise in creating 
            innovative digital solutions for businesses across various industries.
          </p>
          <Link
            to="/contact"
            className="btn-primary text-lg px-10 py-4 group"
          >
            Start Your Project
            
          </Link>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
            <div className="flex items-center space-x-4 mb-6 lg:mb-0">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-lg font-medium text-gray-900">Filter Projects:</span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-teal-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-teal-50 hover:text-teal-600 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-3 mt-6 lg:mt-0">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={showFeatured}
                  onChange={(e) => setShowFeatured(e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                  showFeatured ? 'bg-teal-600' : 'bg-gray-300'
                }`}>
                  <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    showFeatured ? 'translate-x-6' : 'translate-x-0.5'
                  } mt-0.5`}></div>
                </div>
                <span className="ml-3 text-gray-700">Featured Only</span>
              </label>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="card card-hover overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                  
                  <div className="absolute top-4 right-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                  
                  <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    {project.liveUrl !== '#' ? (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium group"
                      >
                        View Live Project
                        <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <span className="text-gray-400 font-medium">Coming Soon</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Projects Found</h3>
              <p className="text-gray-600">Try adjusting your filters to see more projects.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-cyan-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-cyan-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="text-cyan-100">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-cyan-100">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Let's create something amazing together. Contact us to discuss your project requirements 
            and get a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="btn-primary text-lg px-10 py-4"
            >
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="btn-secondary text-lg px-10 py-4"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;