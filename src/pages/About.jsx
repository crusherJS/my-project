import { useTheme } from '../contexts/ThemeContext';
import { FaUsers, FaClock, FaMapMarkerAlt, FaGraduationCap, FaShieldAlt, FaWifi , FaUtensils } from 'react-icons/fa';

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

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
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className={`mb-16 p-8 rounded-xl ${colors.primary} text-white text-center`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Hostel</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Creating homes away from home for students since 2010
          </p>
        </div>
        
        
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Our Story */}
          <div className={`p-8 rounded-xl shadow-lg ${colors.cardBg} ${colors.text} md:col-span-2`}>
            <div className="flex items-center mb-6">
              <div className={`w-2 h-10 ${colors.primary} mr-4`}></div>
              <h2 className="text-3xl font-bold">Our Story</h2>
            </div>
            <p className="mb-6 text-lg leading-relaxed">
              Founded in 2010 with just one building, HostelHub has grown into a nationwide network of student accommodations. 
              What began as a small initiative to provide quality housing has now become a trusted name with over 50 locations 
              near major universities across the country.
            </p>
            <p className="text-lg leading-relaxed">
              Our journey has been guided by student feedback, constantly evolving to meet the changing needs of modern scholars. 
              From basic dormitories to fully-equipped living spaces, we've redefined student housing.
            </p>
          </div>
          
          {/* Quick Facts */}
          <div className={`p-8 rounded-xl shadow-lg ${colors.cardBg} ${colors.text}`}>
            <div className="flex items-center mb-6">
              <div className={`w-2 h-10 ${colors.secondary} mr-4`}></div>
              <h2 className="text-3xl font-bold">By The Numbers</h2>
            </div>
            <div className="space-y-6">
              <StatCard 
                icon={<FaUsers className="text-2xl" />} 
                number="5000+" 
                text="Students housed annually" 
                color={colors.secondary}
              />
              <StatCard 
                icon={<FaMapMarkerAlt className="text-2xl" />} 
                number="50+" 
                text="Prime locations nationwide" 
                color={colors.primary}
              />
              <StatCard 
                icon={<FaGraduationCap className="text-2xl" />} 
                number="12" 
                text="Years of excellence" 
                color={colors.secondary}
              />
            </div>
          </div>
        </div>
        
        {/* Mission Section */}
        <div className={`mb-16 p-8 rounded-xl shadow-lg ${colors.cardBg} ${colors.text}`}>
          <div className="flex items-center mb-6">
            <div className={`w-2 h-10 ${colors.primary} mr-4`}></div>
            <h2 className="text-3xl font-bold">Our Mission</h2>
          </div>
          <p className="mb-8 text-lg leading-relaxed max-w-4xl">
            To create safe, affordable, and comfortable living spaces that foster academic excellence and personal growth. 
            We believe that quality accommodation is foundational to student success, and we're committed to providing 
            environments that inspire learning, collaboration, and community.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <MissionCard 
              icon={<FaShieldAlt className="text-3xl" />}
              title="Safety First"
              description="24/7 security, CCTV surveillance, and secure access systems"
              color={colors.primary}
            />
            <MissionCard 
              icon={<FaWifi  className="text-3xl" />}
              title="Modern Amenities"
              description="High-speed FaWifi , study lounges, and laundry facilities"
              color={colors.secondary}
            />
            <MissionCard 
              icon={<FaUtensils className="text-3xl" />}
              title="Healthy Living"
              description="Nutritious meal plans and fitness areas"
              color={colors.primary}
            />
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className={`w-2 h-10 ${colors.secondary} mr-4`}></div>
            <h2 className="text-3xl font-bold">What Students Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard 
              quote="HostelHub made my transition to university life so smooth. The community is amazing!"
              author="Sarah K."
              role="Computer Science Student"
              isDark={isDark}
            />
            <TestimonialCard 
              quote="I've lived here for 3 years and it feels like home. The facilities are top-notch."
              author="Michael T."
              role="Engineering Student"
              isDark={isDark}
            />
            <TestimonialCard 
              quote="The study spaces and FaWifi  are perfect for my coursework. Couldn't ask for more!"
              author="Priya M."
              role="Medical Student"
              isDark={isDark}
            />
          </div>
        </div>
        
        {/* Call to Action */}
        <div className={`p-8 rounded-xl ${colors.primary} text-white text-center`}>
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Discover the perfect home for your academic journey
          </p>
          <button className={`px-8 py-3 rounded-lg font-bold ${colors.secondary} hover:bg-amber-600 transition-colors`}>
            Book a Tour Now
          </button>
        </div>
      </div>
    </div>
  );
}

// Stat Card Component
function StatCard({ icon, number, text, color }) {
  return (
    <div className="flex items-center">
      <div className={`p-3 rounded-full ${color} text-white mr-4`}>
        {icon}
      </div>
      <div>
        <p className="text-2xl font-bold">{number}</p>
        <p className="text-gray-400">{text}</p>
      </div>
    </div>
  );
}

// Mission Card Component
function MissionCard({ icon, title, description, color }) {
  return (
    <div className={`p-6 rounded-lg border ${color.replace('bg', 'border')} flex flex-col items-center text-center`}>
      <div className={`p-4 rounded-full ${color} text-white mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// Testimonial Card Component
function TestimonialCard({ quote, author, role, isDark }) {
  return (
    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="mb-4 text-amber-400">
        {[...Array(5)].map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <p className="italic mb-4">"{quote}"</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}