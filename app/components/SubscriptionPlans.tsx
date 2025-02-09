'use client';

import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';

interface PlanFeature {
  text: string;
}

interface Plan {
  name: string;
  price: number;
  period: string;
  features: PlanFeature[];
  productPath: string;
}

const plans: Plan[] = [
  {
    name: "Weekly Recipes",
    price: 9.99,
    period: "week",
    productPath: "weekly-recipe-subscription",
    features: [
      { text: "4 new recipes every week" },
      { text: "Step-by-step video guides" },
      { text: "Shopping list generator" },
      { text: "Priority customer support" }
    ]
  },
  {
    name: "Monthly Recipes",
    price: 29.99,
    period: "month",
    productPath: "monthly-recipe-subscription",
    features: [
      { text: "16+ new recipes every month" },
      { text: "Step-by-step video guides" },
      { text: "Shopping list generator" },
      { text: "Priority customer support" },
      { text: "Exclusive seasonal recipes" },
      { text: "20% discount on individual recipes" }
    ]
  }
];

export function SubscriptionPlans() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubscribe = (productPath: string) => {
    if (!isMounted) return;
    
    const fs = window.fastspring?.builder;
    if (!fs) return;

    try {
      // First reset the builder
      fs.reset();

      // Initialize the session with the product
      fs.push({
        'products': [{
          'path': productPath,
          'quantity': 1
        }],
        'tags': {
          'subscription': 'true'
        }
      });

      // Launch checkout
      fs.checkout();
    } catch (error) {
      console.error('FastSpring error:', error);
    }
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Subscribe to Recipe Plans
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          Get fresh, curated recipes delivered to your inbox regularly
        </p>
      </div>

      <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white"
          >
            <div className="p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {plan.name}
              </h3>
              <p className="mt-4">
                <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
                <span className="text-base font-medium text-gray-500">/{plan.period}</span>
              </p>
              <button
                onClick={() => handleSubscribe(plan.productPath)}
                className="mt-8 block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md transition duration-150"
                disabled={!isMounted}
              >
                Subscribe Now
              </button>
            </div>
            <div className="pt-6 pb-8 px-6">
              <h4 className="text-sm font-medium text-gray-900 tracking-wide uppercase">
                What's included
              </h4>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex space-x-3">
                    <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-base text-gray-700">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
