'use client';

import { ShoppingCart } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">OnlyFoods</h1>
        <div>
        <button 
          className="p-2 text-gray-600 hover:text-gray-900 transition-colors relative"
          data-fsc-action="ViewCart"
          aria-label="View Cart"
        >
          <ShoppingCart className="h-6 w-6" />
        </button>
        <span className="ml-2 text-gray-900" data-fsc-order-total></span>
        </div>
      </div>
    </header>
  );
}
