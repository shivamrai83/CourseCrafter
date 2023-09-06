// import { createContext } from 'react';

// const DashboardContext = createContext({});

// export const DashboardProvider = DashboardContext.Provider;

// export default DashboardContext;

import { createContext, ReactNode } from 'react';

// Define the shape of your context
interface MyContext {
  categories: Array<any>; // Replace with your actual type for categories
  setVideoId: (id: number) => void;
}

const DashboardContext = createContext<MyContext>({
  categories: [],
  setVideoId: (id) => {},
});

// Create a custom provider component to wrap your app
export const DashboardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Define the actual context value
  const contextValue: MyContext = {
    categories: [], // Replace with your actual data type
    setVideoId: (id) => {}, // Replace with your actual function type
  };

  return <DashboardContext.Provider value={contextValue}>{children}</DashboardContext.Provider>;
};

export default DashboardContext;
