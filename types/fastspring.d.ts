interface FastSpringBuilder {
  reset: () => void;
  push: (data: unknown) => void;
  checkout: () => void;
  cart: {
    items: Array<{
      path: string;
      quantity: number;
    }>;
  };
}

interface FastSpring {
  builder: FastSpringBuilder;
}

declare global {
  interface Window {
    fastspring: FastSpring;
  }
}

export {};
