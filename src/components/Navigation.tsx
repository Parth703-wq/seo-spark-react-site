
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-[#1a1b3a] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              SaaSFlow
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-purple-400 bg-purple-400/10' 
                    : 'text-gray-300 hover:text-purple-400 hover:bg-purple-400/5'
                }`}
              >
                Features
              </Link>
              <Link
                to="/seo"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/seo') 
                    ? 'text-purple-400 bg-purple-400/10' 
                    : 'text-gray-300 hover:text-purple-400 hover:bg-purple-400/5'
                }`}
              >
                SEO Optimization
              </Link>
              <a href="#about" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
              <a href="#pricing" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Pricing</a>
              <a href="#docs" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Docs</a>
              <a href="#workspace" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Workspace</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
