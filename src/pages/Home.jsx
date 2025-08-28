import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const Home = () => {
  const { user } = useAuth();
  const { theme } = useTheme();

  const galleryImgUrls = [
  "https://images.unsplash.com/photo-1560448204-0ba46fcc85c6?ixlib=rb-...",
  "https://images.unsplash.com/photo-1586201375759-646b3f0d52ff?ixlib=rb-...",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-...",
  "https://images.unsplash.com/photo-1590490360181-3c340561e3c7?ixlib=rb-..."
];

  const stats = [
    { value: '50+', label: 'Premium Hostels', icon: '🏠' },
    { value: '10,000+', label: 'Happy Students', icon: '😊' },
    { value: '24/7', label: 'Support Team', icon: '🛡️' },
    { value: '100%', label: 'Safety Record', icon: '✅' }
  ];

  const features = [
    {
      title: "Safe & Secure",
      description: "24/7 security with CCTV surveillance and biometric access",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "text-blue-500"
    },
    {
      title: "Affordable",
      description: "Budget-friendly options with flexible payment plans",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "text-green-500"
    },
    {
      title: "Convenient",
      description: "Easy online booking and management system",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      color: "text-purple-500"
    }
  ];

  const testimonials = [
    {
      quote: "HostelHub made finding accommodation so easy during my college years!",
      author: "Rahul Sharma",
      role: "Student at Delhi University"
    },
    {
      quote: "The security and cleanliness standards are exceptional. Highly recommended!",
      author: "Priya Patel",
      role: "Student at Mumbai University"
    },
    {
      quote: "Affordable pricing with premium facilities. Best decision ever!",
      author: "Amit Singh",
      role: "Student at Bangalore University"
    }
  ];

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-90"></div>
          <img 
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Modern hostel building" 
            className="absolute inset-0 w-full h-full object-cover opacity-[0.5] "
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Perfect <span className="text-yellow-400">Student</span> Home
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Discover affordable, comfortable, and secure accommodation designed for students
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {!user ? (
                <>
                  <Link 
                    to="/login"
                    className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
                  >
                    Login
                  </Link>
                  <Link 
                    to="/signup"
                    className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white rounded-full font-semibold transition-all transform hover:scale-105"
                  >
                    Sign Up
                  </Link>
                </>
              ) : (
                <Link 
                  to={user.role === 'Admin' ? '/AdminDashboard' : '/StudentDashboard'}
                  className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                  Go to Dashboard
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`p-8 rounded-xl text-center transition-all hover:shadow-lg ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-white'}`}
                >
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <p className="text-3xl font-bold mb-2 text-blue-600">{stat.value}</p>
                  <p className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Why Choose HostelHub?
              </h2>
              <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                We provide everything you need for a comfortable and productive student life
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`p-8 rounded-xl transition-all hover:shadow-lg ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}
                >
                  <div className={`${feature.color} mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {feature.title}
                  </h3>
                  <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                What Our Students Say
              </h2>
              <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Don't just take our word for it - hear from our community
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`p-8 rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}
                >
                  <div className="text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className={`text-lg italic mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {testimonial.author}
                    </p>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
<section
  className={`py-20 px-4 sm:px-6 lg:px-8 ${
    theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
  }`}
>
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}
      >
        Our Hostel Spaces
      </h2>
      <p
        className={`text-lg max-w-2xl mx-auto ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        Take a peek at our modern, student-friendly facilities
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <img
            src={`https://source.unsplash.com/600x400/?hostel,room&sig=${item}`}
            alt={`Hostel ${item}`}
            className="w-full h-64 object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80';
            }}
          />
        </div>
      ))}
    </div>
  </div>
</section>




{/* Gallery Section
<section
  className={`py-20 px-4 sm:px-6 lg:px-8 ${
    theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
  }`}
>
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}
      >
        Our Hostel Spaces
      </h2>
      <p
        className={`text-lg max-w-2xl mx-auto ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        Take a peek at our modern, student-friendly facilities
      </p>
    </div>

    {/* ✅ Replace with static image links */}
    {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590490360181-3c340561e3c7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1586201375759-646b3f0d52ff?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1560448204-0ba46fcc85c6?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600488997881-73637c0c1f4d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1615873968403-89f6a9b15c9a?auto=format&fit=crop&w=800&q=80",
      ].map((url, index) => (
        <div
          key={index}
          className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <img
            src={url}
            alt={`Hostel ${index + 1}`}
            className="w-full h-64 object-cover"
          />
        </div>
      ))}
    </div>
  </div>
</section> */} */

        {/* CTA Section */}
        <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Join thousands of students who found their perfect home with HostelHub
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/signup" 
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Sign Up Now
              </Link>
              <Link 
                to="/about" 
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Home;