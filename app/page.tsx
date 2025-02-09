'use client';

import Image from "next/image";
import { ShoppingCart, Search } from 'lucide-react';
import { RecipeCard } from './components/RecipeCard';
import { Header } from "./components/Header";
import { SubscriptionPlans } from './components/SubscriptionPlans';
import { useEffect } from 'react';

// Mock data for recipes
const recipes = [
  {
    id: 1,
    title: "Super Chicken Rice",
    price: 6.99,
    description: "Singapore Special Super Chicken Rice",
    image: "/recipes/chicken-rice.png",
    difficulty: "Easy",
    prepTime: "1.5 hours",
    productPath: "super-chicken-rice"
  },
  {
    id: 2,
    title: "Singapore Laksa",
    price: 7.99,
    description: "Singaporean style laksa with fresh seafood and a rich broth",
    image: "/recipes/laksa.jpg",
    difficulty: "Advanced",
    prepTime: "3 hours",
    productPath: "singapore-laksa"
  },
  {
    id: 3,
    title: "Pandan Cake",
    price: 3.99,
    description: "A classic Pandan Cake with a soft and fluffy texture",
    image: "/recipes/pandan-cake.jpg",
    difficulty: "Intermediate",
    prepTime: "2 hours",
    productPath: "pandan-cake"
  }
];

declare global {
  interface Window {
    fastspring?: any;
    onPopupClose?: (data: any) => void;
  }
}

export default function Home() {
  useEffect(() => {
    // Initialize FastSpring data
    if (window.fastspring) {
      window.fastspring.builder.push({
        'reset': true
      });
      
      // Load all products
      recipes.forEach(recipe => {
        window.fastspring.builder.push({
          'products': [{
            'path': recipe.productPath
          }]
        });
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Authentic Asian Recipes
            <span className="block text-blue-600">Made Simple</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            OnlyFoods brings you authentic, restaurant-quality Asian recipes with detailed instructions, video guides, and ingredient lists. Whether you're a beginner or a seasoned chef, we'll help you master the art of Asian cooking.
          </p>
          <div className="mt-8 flex justify-center space-x-8 text-lg text-gray-600">
            <div className="flex items-center">
              <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Step-by-step guides</span>
            </div>
            <div className="flex items-center">
              <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Weekly updates</span>
            </div>
            <div className="flex items-center">
              <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              <span>Recipe collections</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>

      {/* Subscription Plans Section */}
      <SubscriptionPlans />

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                We provide high-quality, tested recipes from professional chefs around the world.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to get new recipes and special offers</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-md text-gray-900"
                />
                <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
