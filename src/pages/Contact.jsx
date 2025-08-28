import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaClock, FaUser, FaComment } from 'react-icons/fa';

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitSuccess(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '', subject: 'general' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  // Color definitions for consistent theming
  const colors = {
    primary: isDark ? 'bg-indigo-600' : 'bg-indigo-500',
    secondary: isDark ? 'bg-amber-500' : 'bg-amber-400',
    cardBg: isDark ? 'bg-gray-700' : 'bg-white',
    text: isDark ? 'text-gray-100' : 'text-gray-800',
    border: isDark ? 'border-gray-600' : 'border-gray-200',
    inputBg: isDark ? 'bg-gray-600' : 'bg-gray-50',
  };

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className={`mb-12 p-8 rounded-xl ${colors.primary} text-white text-center`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're here to help and answer any questions you might have
          </p>
        </div>
        
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div className={`p-8 rounded-xl shadow-lg ${colors.cardBg} ${colors.text}`}>
            <div className="flex items-center mb-6">
              <div className={`w-2 h-10 ${colors.secondary} mr-4`}></div>
              <h2 className="text-3xl font-bold">Get in Touch</h2>
            </div>
            
            <div className="space-y-6">
              <ContactInfoCard 
                icon={<FaPhone className="text-xl" />}
                title="Phone Support"
                info="+1 (123) 456-7890"
                description="Available Monday-Friday, 9am-5pm"
                theme={theme}
              />
              
              <ContactInfoCard 
                icon={<FaEnvelope className="text-xl" />}
                title="Email Us"
                info="contact@hostelhub.edu"
                description="Typically respond within 24 hours"
                theme={theme}
              />
              
              <ContactInfoCard 
                icon={<FaMapMarkerAlt className="text-xl" />}
                title="Visit Us"
                info="123 University Avenue"
                description="Campus Town, CT 12345"
                theme={theme}
              />
            </div>
            
            <div className={`mt-8 p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <div className="flex items-center mb-2">
                <FaClock className={`mr-2 ${colors.primary.replace('bg', 'text')}`} />
                <h3 className="font-semibold">Office Hours</h3>
              </div>
              <div className="text-sm space-y-1">
                <p>Monday-Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={`p-8 rounded-xl shadow-lg ${colors.cardBg} ${colors.text} md:col-span-2`}>
            <div className="flex items-center mb-6">
              <div className={`w-2 h-10 ${colors.primary} mr-4`}></div>
              <h2 className="text-3xl font-bold">Send Us a Message</h2>
            </div>
            
            {submitSuccess && (
              <div className={`mb-6 p-4 rounded-lg bg-green-100 text-green-800 ${isDark ? 'bg-green-900 text-green-100' : ''}`}>
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <FormInput
                  icon={<FaUser />}
                  label="Your Name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  theme={theme}
                />
                
                <FormInput
                  icon={<FaEnvelope />}
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  theme={theme}
                />
              </div>
              
              <div className="mb-6">
                <label className={`block mb-2 font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Subject
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className={`w-full p-3 rounded-lg border ${colors.border} ${colors.inputBg} focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
                >
                  <option value="general">General Inquiry</option>
                  <option value="booking">Booking Question</option>
                  <option value="feedback">Feedback/Suggestion</option>
                  <option value="complaint">Complaint</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <FormInput
                  icon={<FaComment />}
                  label="Your Message"
                  type="textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  theme={theme}
                  rows={5}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-bold ${isSubmitting ? 'bg-gray-400' : colors.primary} text-white hover:${isSubmitting ? '' : 'bg-indigo-700'} transition-colors flex items-center justify-center`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        
        {/* Map Section */}
        <div className={`mb-12 rounded-xl overflow-hidden shadow-lg ${colors.cardBg}`}>
          <div className="h-64 md:h-96 w-full bg-gray-300 relative">
            {/* This would be your map component or iframe */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className={`text-lg ${isDark ? 'text-white' : 'text-gray-800'}`}>Map would be displayed here</p>
            </div>
          </div>
          <div className={`p-6 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <h3 className="font-semibold mb-2">Our Headquarters</h3>
            <p className="text-sm">123 University Avenue, Campus Town, CT 12345</p>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className={`p-8 rounded-xl shadow-lg ${colors.cardBg} ${colors.text}`}>
          <div className="flex items-center mb-6">
            <div className={`w-2 h-10 ${colors.secondary} mr-4`}></div>
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="What are your check-in/check-out times?"
              answer="Standard check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request."
              theme={theme}
            />
            
            <FAQItem 
              question="Do you offer long-term stays?"
              answer="Yes, we offer discounted rates for semester-long or academic year stays. Contact us for special long-term rates."
              theme={theme}
            />
            
            <FAQItem 
              question="Is there parking available?"
              answer="Limited parking is available at most locations for an additional fee. Many of our hostels are also easily accessible by public transportation."
              theme={theme}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Contact Info Card Component
function ContactInfoCard({ icon, title, info, description, theme }) {
  const isDark = theme === 'dark';
  return (
    <div className={`flex items-start p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className={`p-3 rounded-full ${isDark ? 'bg-gray-700 text-amber-400' : 'bg-indigo-100 text-indigo-600'} mr-4`}>
        {icon}
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="font-medium">{info}</p>
        <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
      </div>
    </div>
  );
}

// Form Input Component
function FormInput({ icon, label, type, value, onChange, required, theme, rows = 3, ...props }) {
  const isDark = theme === 'dark';
  const inputClasses = `w-full p-3 rounded-lg border ${isDark ? 'border-gray-600 bg-gray-700 focus:bg-gray-600' : 'border-gray-300 bg-white'} focus:ring-2 focus:ring-indigo-500 focus:border-transparent`;
  
  return (
    <div>
      <label className={`block mb-2 font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        <span className="flex items-center">
          <span className={`p-1 rounded mr-2 ${isDark ? 'text-amber-400' : 'text-indigo-600'}`}>
            {icon}
          </span>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </span>
      </label>
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={onChange}
          className={inputClasses}
          required={required}
          rows={rows}
          {...props}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          className={inputClasses}
          required={required}
          {...props}
        />
      )}
    </div>
  );
}

// FAQ Item Component
function FAQItem({ question, answer, theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = theme === 'dark';
  
  return (
    <div className={`border rounded-lg overflow-hidden ${isDark ? 'border-gray-600' : 'border-gray-200'}`}>
      <button
        className={`w-full text-left p-4 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} flex justify-between items-center`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className={`p-4 ${isDark ? 'bg-gray-700' : 'bg-gray-50'} border-t ${isDark ? 'border-gray-600' : 'border-gray-200'}`}>
          <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>{answer}</p>
        </div>
      )}
    </div>
  );
}