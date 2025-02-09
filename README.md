# OnlyFoods

OnlyFoods is an e-commerce platform for authentic Asian recipes, featuring step-by-step guides, video tutorials, and subscription plans.

## Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- A FastSpring account with configured products

## Setup

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Create a `.env.local` file in the root directory with your FastSpring configuration:
```env
NEXT_PUBLIC_FASTSPRING_STOREFRONT_ID=your_storefront_id
```

3. Configure your FastSpring products with the following paths:
- Individual recipes: Use the `productPath` specified in `app/page.tsx`
- Subscription plans:
  - Weekly plan: `weekly-recipe-subscription`
  - Monthly plan: `monthly-recipe-subscription`

## Running the Application

Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Features

- Browse authentic Asian recipes
- Purchase individual recipes
- Subscribe to weekly or monthly recipe plans
- FastSpring integration for secure payments
- Responsive design for mobile and desktop
