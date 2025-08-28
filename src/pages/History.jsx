import { useTheme } from '../contexts/ThemeContext';
import { FaBuilding, FaAward, FaUsers, FaChartLine, FaLeaf, FaLightbulb } from 'react-icons/fa';

export default function History() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const milestones = [
    { 
      year: '2010', 
      event: 'First hostel established with 50 beds',
      icon: <FaBuilding className="text-2xl" />,
      highlight: 'Founded with a vision to provide quality student housing'
    },
    { 
      year: '2013', 
      event: 'Expanded to 3 buildings with 300 total beds',
      icon: <FaChartLine className="text-2xl" />,
      highlight: 'First major expansion to meet growing demand'
    },
    { 
      year: '2016', 
      event: 'Implemented digital management system',
      icon: <FaLightbulb className="text-2xl" />,
      highlight: 'Pioneered tech solutions in student housing'
    },
    { 
      year: '2019', 
      event: 'Won National Excellence Award for Student Housing',
      icon: <FaAward className="text-2xl" />,
      highlight: 'Recognized for outstanding service and facilities'
    },
    { 
      year: '2022', 
      event: 'Reached 10,000+ students housed annually',
      icon: <FaUsers className="text-2xl" />,
      highlight: 'Became one of the largest student housing providers'
    }
  ];

  const futurePlans = [
    {
      title: "Sustainable Expansion",
      description: "Eco-friendly buildings with solar panels and rainwater harvesting",
      icon: <FaLeaf className="text-2xl" />
    },
    {
      title: "Smart Rooms",
      description: "IoT-enabled rooms for better living experience",
      icon: <FaLightbulb className="text-2xl" />
    },
    {
      title: "Community Growth",
      description: "Programs to foster stronger student communities",
      icon: <FaUsers className="text-2xl" />
    }
  ];

  // Color definitions for consistent theming
  const colors = {
    primary: isDark ? 'bg-indigo-600' : 'bg-indigo-500',
    secondary: isDark ? 'bg-amber-500' : 'bg-amber-400',
    cardBg: isDark ? 'bg-gray-700' : 'bg-gray-50',
    text: isDark ? 'text-gray-100' : 'text-gray-800',
    border: isDark ? 'border-gray-600' : 'border-gray-200',
  };

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className={`mb-12 p-8 rounded-xl ${colors.primary} text-white text-center`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h1>
          <p className="text-xl max-w-3xl mx-auto">
            From humble beginnings to becoming a leader in student housing
          </p>
        </div>
        
        {/* Timeline Section */}
        <div className={`p-8 rounded-xl shadow-lg ${colors.cardBg} ${colors.text} mb-12`}>
          <div className="flex items-center mb-8">
            <div className={`w-2 h-10 ${colors.secondary} mr-4`}></div>
            <h2 className="text-3xl font-bold">Milestones</h2>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute h-full w-1 left-8 top-0 ${colors.primary} md:left-1/2`}></div>
            
            {milestones.map((item, index) => (
              <div 
                key={index} 
                className={`relative mb-12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8 md:pl-0 md:text-right' : 'md:ml-auto md:pl-8 md:pr-0'} md:w-1/2`}
              >
                {/* Year marker */}
                <div className={`absolute w-16 h-16 rounded-full flex items-center justify-center ${colors.secondary} text-white font-bold z-10 ${index % 2 === 0 ? 'md:right-0 md:mr-8' : 'md:left-0 md:ml-8'} left-0 -ml-8`}>
                  {item.icon}
                </div>
                
                {/* Content card */}
                <div className={`p-6 rounded-lg shadow-md ${isDark ? 'bg-gray-800' : 'bg-white'} mt-8 ml-12 md:mt-0 md:ml-0`}>
                  <h3 className="text-xl font-bold mb-2">{item.year}</h3>
                  <p className="mb-3">{item.event}</p>
                  <div className={`p-3 rounded ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <p className="text-sm italic">{item.highlight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Future Vision Section */}
        <div className={`p-8 rounded-xl shadow-lg ${colors.cardBg} ${colors.text} mb-12`}>
          <div className="flex items-center mb-8">
            <div className={`w-2 h-10 ${colors.primary} mr-4`}></div>
            <h2 className="text-3xl font-bold">Our Vision for the Future</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {futurePlans.map((plan, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg border ${colors.border} ${isDark ? 'bg-gray-800' : 'bg-white'} transition-transform hover:scale-105`}
              >
                <div className={`p-3 rounded-full ${colors.primary} text-white w-max mb-4`}>
                  {plan.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                <p>{plan.description}</p>
              </div>
            ))}
          </div>
          
          <div className={`mt-8 p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'} border ${colors.border}`}>
            <h3 className="text-xl font-bold mb-2">2025 Goal: Serving 20,000 Students</h3>
            <p>
              We're committed to expanding our facilities while maintaining our personal touch and community values. 
              Our growth focuses on sustainability, technology integration, and enhanced student experiences.
            </p>
            <div className="w-full bg-gray-300 rounded-full h-4 mt-4">
              <div 
                className={`h-4 rounded-full ${colors.primary}`} 
                style={{ width: '60%' }}
              ></div>
            </div>
            <p className="text-sm mt-2 text-right">60% progress toward our goal</p>
          </div>
        </div>
        
        {/* Team Section */}
        <div className={`p-8 rounded-xl shadow-lg ${colors.cardBg} ${colors.text}`}>
          <div className="flex items-center mb-8">
            <div className={`w-2 h-10 ${colors.secondary} mr-4`}></div>
            <h2 className="text-3xl font-bold">Our Founders</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <TeamMember 
              name="Dr. Sarah Johnson"
              role="CEO & Co-Founder"
              bio="Education specialist with 20+ years in student services"
              theme={theme}
            />
            <TeamMember 
              name="Michael Chen"
              role="CTO & Co-Founder"
              bio="Tech innovator in facility management systems"
              theme={theme}
            />
            <TeamMember 
              name="Priya Patel"
              role="COO & Co-Founder"
              bio="Operations expert focused on student wellbeing"
              theme={theme}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Team Member Component
function TeamMember({ name, role, bio, theme }) {
  const isDark = theme === 'dark';
  return (
    <div className={`p-6 rounded-lg border ${isDark ? 'border-gray-600 bg-gray-800' : 'border-gray-200 bg-white'}`}>
      <div className={`w-24 h-24 rounded-full mx-auto mb-4 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
      <h3 className="text-xl font-bold text-center">{name}</h3>
      <p className={`text-center mb-3 ${isDark ? 'text-amber-400' : 'text-indigo-600'}`}>{role}</p>
      <p className="text-center text-sm">{bio}</p>
    </div>
  );
}