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

## Things that I experimented and tried setting up
- Simple Digital Products with Digital Downloads (ie. Recipe PDFs)
- Subsription Plans (ie. Weekly & Monthly Recipe Subscriptions)
- Cross-selling on pop-up carts
- Implementing SBL in certain components
- Customization of checkout

## Questions and Observations
- In the case of setting up a product with FastSpring, make sure to configure the `productPath` correctly.
- When creating the product in product dashboard, the entire product information will not be saved if there is one field that has an error.
- No loading state exposed by FastSpring Store Builder Library, so I was unable to add a loading state for the product information etc. whilst loading it from the FastSpring API.
- User interface for setting up products wasn't entirely intuitive due to the ambiguity of classification of products.
