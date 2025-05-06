import React, { useRef, useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import GlowButton from '../ui/GlowButton';
import { ArrowRight, CheckCircle, Lock } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  useScrollAnimation(contentRef, 'fade-in-up', 0.3);
  useScrollAnimation(formRef, 'fade-in-up', 0.5);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };
  
  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center px-6 py-24 md:px-12 lg:px-24 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(9,9,18,1) 0%, rgba(2,6,23,1) 100%)',
        backgroundImage: 'url("https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      
      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={contentRef} className="opacity-0">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              It's Time To <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Rise Above</span> The Noise
            </h2>
            
            <p className="font-inter text-xl text-gray-300 mb-8 leading-relaxed">
              Join AgentCraft today and deploy your first AI agent within 30 minutes. Transform your digital presence from manual to automated, from reactive to proactive.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Immediate access to our proven AI deployment system",
                "Step-by-step video tutorials and documentation",
                "Done-for-you templates and agent configurations",
                "Community access and direct support",
                "Lifetime updates to all course materials"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center mb-8 p-4 bg-indigo-900/30 border border-indigo-800/50 rounded-lg">
              <div className="mr-4">
                <Lock className="h-10 w-10 text-indigo-400" />
              </div>
              <div>
                <p className="font-medium">Limited-time special pricing</p>
                <p className="text-gray-300 text-sm">Current price: $997 — Next price increase in 7 days</p>
              </div>
            </div>
          </div>
          
          <div ref={formRef} className="opacity-0">
            <div className="bg-gray-900/70 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-gray-800 shadow-2xl">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-6 text-center">
                Join AgentCraft Now
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-6">
                    <CheckCircle className="h-8 w-8 text-green-400" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">You're In!</h4>
                  <p className="text-gray-300 mb-6">Check your email for your welcome message and next steps.</p>
                  <p className="text-sm text-gray-400">
                    (If you don't see the email within 5 minutes, please check your spam folder)
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div className="pt-4">
                    <GlowButton 
                      primary 
                      fullWidth 
                      type="submit" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          Join AgentCraft Today <ArrowRight className="ml-2 h-5 w-5" />
                        </span>
                      )}
                    </GlowButton>
                  </div>
                  
                  <div className="text-center text-sm text-gray-400 flex items-center justify-center">
                    <Lock className="h-4 w-4 mr-2" />
                    Your information is secure and never shared
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;