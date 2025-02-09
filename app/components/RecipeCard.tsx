'use client';

import Image from "next/image";

interface RecipeCardProps {
  recipe: {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    difficulty: string;
    prepTime: string;
    productPath: string;
  };
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-[32rem] flex flex-col">
      <div className="relative h-48 flex-shrink-0">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900">
            <span>{recipe.title}</span>
          </h3>
          <div className="text-2xl font-bold text-blue-600">
            ${recipe.price}
          </div>
        </div>
        <div className="flex-grow">
          <p className="text-gray-600 mb-4 line-clamp-4">
            <span>{recipe.description}</span>
          </p>
          <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
            <span>Difficulty: {recipe.difficulty}</span>
            <span>Prep Time: {recipe.prepTime}</span>
          </div>
        </div>
        <button 
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 mt-auto"
          data-fsc-item-path-value={recipe.productPath}
          data-fsc-action="Add,Checkout"
        >
          Purchase Recipe (${recipe.price})
        </button>
      </div>
    </div>
  );
}
