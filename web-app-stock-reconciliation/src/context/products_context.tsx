import React, { useContext, useReducer, createContext, ReactNode } from 'react';
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../actions';
import reducer from '../reducers/products_reducer';

interface ProductsStore {
  isSidebarOpen: boolean;
}

interface ProductsContextProps {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

const initialState: ProductsStore = {
  isSidebarOpen: false,
};
const ProductsContext = createContext<ProductsContextProps | undefined>(undefined);

interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsProvider: React.FC<ProductsProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };
  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>{children}</ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProductsContext must be used within a ProductsProvider');
  }
  return context;
};
